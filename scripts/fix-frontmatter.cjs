/**
 * fix-frontmatter.cjs (v2) — safe, frontmatter-only normalizer.
 *
 * Operates ONLY inside the frontmatter block (between the first two `---`).
 * Post body is never touched. Quality gate (stricter than the Zod schema):
 *   - remove dead top-level `canonical:` (schema drops it; it can leak external domains)
 *   - remove dead top-level `description:` when `excerpt:` exists (else rename -> excerpt)
 *   - add `image:` (derived ~/assets/images/blog/<slug>.png) when missing
 *   - add `category: "Guides"` when missing
 *
 * Run from repo root. Optional arg = single filename to process.
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'content', 'blog');

function slugifyBase(file) {
  return file.replace(/\.mdx?$/, '').replace(/[^a-zA-Z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function processFile(file) {
  const full = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(full, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) {
    console.log(`skip (no frontmatter): ${file}`);
    return;
  }
  const body = raw.slice(m[0].length);
  let block = m[1];
  const hasExcerpt = /^excerpt\s*:/m.test(block);
  const hasImage = /^image\s*:/m.test(block);
  const hasCategory = /^category\s*:/m.test(block);

  const changes = [];

  // 1. Remove dead top-level canonical lines.
  if (/^canonical\s*:/m.test(block)) {
    block = block.replace(/^canonical\s*:.*(\r?\n)/gm, '');
    changes.push('-canonical');
  }

  // 2. Remove dead top-level description (or rename to excerpt if none).
  if (/^description\s*:/m.test(block)) {
    if (hasExcerpt) {
      block = block.replace(/^description\s*:.*(\r?\n)/gm, '');
      changes.push('-description');
    } else {
      block = block.replace(/^description\s*:/m, 'excerpt:');
      changes.push('description->excerpt');
    }
  }

  // 3. Add image after title when missing.
  if (!hasImage) {
    const img = `image: ~/assets/images/blog/${slugifyBase(file)}.png`;
    if (/^title\s*:/m.test(block)) {
      block = block.replace(/^(title\s*:[^\n]*\n)/m, `$1${img}\n`);
    } else {
      block = `${img}\n${block}`;
    }
    changes.push('+image');
  }

  // 4. Add category after image/title when missing.
  if (!hasCategory) {
    const cat = 'category: "Guides"';
    const anchor = hasImage ? /^image\s*:[^\n]*\n/m : /^title\s*:[^\n]*\n/m;
    if (anchor.test(block)) {
      block = block.replace(anchor, (mm) => `${mm}${cat}\n`);
    } else {
      block = `${cat}\n${block}`;
    }
    changes.push('+category');
  }

  if (changes.length) {
    fs.writeFileSync(full, `---\n${block}\n---\n${body}`);
    console.log(`${file}: ${changes.join('  ')}`);
  }
}

const only = process.argv[2];
let files = fs.readdirSync(BLOG_DIR).filter((f) => /\.mdx?$/.test(f));
if (only) files = files.filter((f) => f === only);
for (const f of files) processFile(f);
console.log('\nDone. Re-run scripts/validate-frontmatter.cjs to confirm.');
