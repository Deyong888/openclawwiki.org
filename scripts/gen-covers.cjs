/**
 * gen-covers.cjs — Generate branded OG/blog cover images for OpenClaw Wiki posts.
 *
 * For every blog post whose `image:` frontmatter points to a local asset that is
 * MISSING on disk, render a 1200x630 branded cover (gradient + OpenClaw badge +
 * wrapped title + category pill) and write it to the exact referenced path.
 *
 * Run from repo root:  node scripts/gen-covers.cjs
 * Requires: sharp (already a dependency of Astro image pipeline).
 */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const BLOG_DIR = 'src/content/blog';
const W = 1200;
const H = 630;

// Category -> [fromColor, toColor]
const THEME = {
  'Technical Deep Dive': ['#0f172a', '#4338ca'],
  'Server Deployment': ['#022c22', '#059669'],
  'Technical Analysis': ['#1e1b4b', '#7c3aed'],
  Guides: ['#0c4a6e', '#0284c7'],
  Tutorials: ['#0c4a6e', '#0284c7'],
  default: ['#1e293b', '#0ea5e9'],
};

function themeFor(category) {
  if (category && THEME[category]) return THEME[category];
  return THEME.default;
}

// Greedy word-wrap to a max pixel width at given font size.
function wrapTitle(title, fontSize, maxWidth, maxLines) {
  const words = title.split(/\s+/);
  const lines = [];
  let line = '';
  for (const w of words) {
    const test = line ? line + ' ' + w : w;
    // estimate width: avg glyph ~0.56 * fontSize for bold sans
    if (test.length * fontSize * 0.56 > maxWidth && line) {
      lines.push(line);
      line = w;
      if (lines.length === maxLines - 1) {
        // dump the rest into the last line, truncating with ellipsis
        let rest = words.slice(words.indexOf(w)).join(' ');
        if (rest.length * fontSize * 0.56 > maxWidth) {
          rest = rest.slice(0, Math.floor(maxWidth / (fontSize * 0.56)) - 1).trim() + '…';
        }
        lines.push(rest);
        return lines;
      }
    } else {
      line = test;
    }
  }
  if (line) lines.push(line);
  return lines;
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildSvg({ title, category }) {
  const [c1, c2] = themeFor(category);
  // scale font to title length
  let fontSize = 60;
  if (title.length > 60) fontSize = 52;
  if (title.length > 90) fontSize = 44;
  const lines = wrapTitle(title, fontSize, 980, 4);
  const lineH = fontSize * 1.18;
  const startY = H / 2 - ((lines.length - 1) * lineH) / 2 + 40;

  const titleSvg = lines
    .map((ln, i) => `<text x="64" y="${startY + i * lineH}" font-size="${fontSize}" font-weight="bold" fill="#ffffff" font-family="Arial, Helvetica, sans-serif">${esc(ln)}</text>`)
    .join('\n');

  const cat = category ? esc(category) : 'OpenClaw';
  const pillW = cat.length * 13 + 44;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <text x="64" y="150" font-size="150" font-weight="bold" fill="#ffffff" opacity="0.05" font-family="Arial, sans-serif" transform="rotate(-18 600 315)">OPENCLAW</text>
  <!-- badge -->
  <circle cx="92" cy="92" r="30" fill="#3b82f6"/>
  <text x="92" y="100" font-size="20" font-weight="bold" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif">Claw</text>
  <text x="138" y="100" font-size="30" font-weight="bold" letter-spacing="2" fill="#e2e8f0" font-family="Arial, sans-serif">OPENCLAW WIKI</text>
  ${titleSvg}
  <g>
    <rect x="64" y="${H - 96}" rx="22" ry="22" width="${pillW}" height="48" fill="#ffffff" opacity="0.14"/>
    <text x="86" y="${H - 64}" font-size="24" font-weight="bold" fill="#e0e7ff" font-family="Arial, sans-serif">${cat}</text>
  </g>
</svg>`;
}

function getFrontmatter(imagePath) {
  const p = path.join(BLOG_DIR, imagePath);
  const txt = fs.readFileSync(p, 'utf8');
  const fm = txt.slice(txt.indexOf('---') + 3, txt.indexOf('---', 3));
  const get = (k) => {
    const m = fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?`, 'm'));
    return m ? m[1].trim() : '';
  };
  const getRaw = (k) => {
    const m = fm.match(new RegExp(`^${k}:\\s*"?([^"\\n]+)"?`, 'm'));
    return m ? m[1].trim() : '';
  };
  return {
    title: get('title') || path.basename(imagePath, '.md'),
    category: get('category'),
    image: getRaw('image'),
  };
}

async function main() {
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.md'));
  let made = 0;
  const seen = new Set();
  for (const f of files) {
    const fm = getFrontmatter(f);
    if (!fm.image || !fm.image.startsWith('~/assets/')) continue;
    const target = fm.image.replace('~/', 'src/');
    if (seen.has(target)) continue; // avoid duplicate work
    seen.add(target);
    if (fs.existsSync(target)) {
      console.log('skip (exists):', target);
      continue;
    }
    const svg = buildSvg({ title: fm.title, category: fm.category });
    fs.mkdirSync(path.dirname(target), { recursive: true });
    await sharp(Buffer.from(svg)).png().toFile(target);
    console.log('made:', target);
    made++;
  }
  console.log(`\nDone. Generated ${made} cover image(s).`);
}

main().catch((e) => {
  console.error('ERROR', e);
  process.exit(1);
});
