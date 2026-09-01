/**
 * Pre-build frontmatter validator for the blog collection.
 *
 * Catches the exact class of bugs that previously broke the site:
 *   - missing `publishDate`  -> build falls back to build timestamp (wrong date shown)
 *   - deprecated fields (`pubDate`, `date`, `authors`, `description`, `slug`)
 *     silently dropped by the Zod schema, so they never render
 *   - top-level `canonical`  -> not in schema, can leak external/old domains
 *   - missing `excerpt`      -> empty meta description / list cards
 *   - `image` pointing at a file that does not exist -> broken OG/share cards
 *
 * Exit code 0 = all good, 1 = problems found (use as a pre-build gate).
 *
 * Usage:  node scripts/validate-frontmatter.cjs
 */
const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const BLOG_DIR = path.join(__dirname, '..', 'src', 'content', 'blog');
// `~/` in frontmatter aliases to the repo `src/` directory (Astro convention).
const SRC_ROOT = path.join(__dirname, '..', 'src');

const REQUIRED = ['publishDate', 'excerpt', 'image', 'author', 'category'];
const FORBIDDEN = ['pubDate', 'date', 'authors', 'description', 'slug', 'canonical'];

let errors = 0;
let warnings = 0;

function resolveImage(src) {
  if (!src) return null;
  const rel = src.replace(/^~\/|^\//, '');
  const abs = path.join(SRC_ROOT, rel);
  return fs.existsSync(abs) ? abs : null;
}

const files = fs
  .readdirSync(BLOG_DIR)
  .filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));

for (const file of files) {
  const full = path.join(BLOG_DIR, file);
  const raw = fs.readFileSync(full, 'utf8');
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!m) {
    console.log(`✗ ${file}: no frontmatter block`);
    errors++;
    continue;
  }

  let fm;
  try {
    fm = yaml.load(m[1]) || {};
  } catch (e) {
    console.log(`✗ ${file}: YAML parse error -> ${e.message}`);
    errors++;
    continue;
  }

  const tag = `📄 ${file}`;
  let fileBad = false;

  // Required fields
  for (const key of REQUIRED) {
    if (fm[key] === undefined || fm[key] === null || fm[key] === '') {
      console.log(`  ✗ ${tag}: missing required "${key}"`);
      errors++;
      fileBad = true;
    }
  }

  // publishDate must be a real date
  if (fm.publishDate !== undefined) {
    const d = new Date(fm.publishDate);
    if (isNaN(d.getTime())) {
      console.log(`  ✗ ${tag}: "publishDate" is not a valid date -> ${fm.publishDate}`);
      errors++;
      fileBad = true;
    }
  }

  // Forbidden / deprecated fields
  for (const key of FORBIDDEN) {
    if (fm[key] !== undefined) {
      console.log(`  ⚠ ${tag}: deprecated field "${key}" is ignored by the schema (value: ${JSON.stringify(fm[key]).slice(0, 60)})`);
      warnings++;
    }
  }

  // Image file existence
  if (fm.image) {
    const resolved = resolveImage(fm.image);
    if (!resolved) {
      console.log(`  ✗ ${tag}: image file missing -> ${fm.image}`);
      errors++;
      fileBad = true;
    }
  }

  if (!fileBad && warnings === 0) {
    // only print OK when there were no issues with this file
  }
}

console.log('\n────────────────────────────────────');
if (errors === 0) {
  console.log(`✓ Frontmatter validation passed (${files.length} files, ${warnings} warning(s)).`);
  process.exit(0);
} else {
  console.log(`✗ Validation FAILED: ${errors} error(s), ${warnings} warning(s).`);
  process.exit(1);
}
