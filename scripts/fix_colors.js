const fs = require('fs');
const path = require('path');

const replacements = [
  { from: /text-\[var\(--text-muted\)\]/g, to: 'text-muted' },
  { from: /text-\[var\(--text-subtle\)\]/g, to: 'text-subtle' },
  { from: /text-\[var\(--text\)\]/g, to: 'text-foreground' },
  { from: /bg-\[var\(--surface-muted\)\]/g, to: 'bg-surface-muted' },
  { from: /border-\[var\(--border\)\]/g, to: 'border-border' },
  { from: /accent-\[var\(--brand\)\]/g, to: 'accent-brand' },
  { from: /text-\[var\(--brand\)\]/g, to: 'text-brand' },
  { from: /bg-\[var\(--brand\)\]/g, to: 'bg-brand' },
  { from: /border-\[var\(--brand\)\]/g, to: 'border-brand' },
  { from: /from-\[var\(--brand-light\)\]/g, to: 'from-brand-light' },
  { from: /to-\[var\(--brand-vibrant\)\]/g, to: 'to-brand-vibrant' },
  { from: /from-\[var\(--brand\)\]/g, to: 'from-brand' },
  { from: /bg-\[var\(--surface\)\]/g, to: 'bg-surface' },
  // Handle SVGs specifically in JSX
  { from: /stroke="var\(--text-muted\)"/g, to: 'stroke="hsl(var(--text-muted))"' },
  { from: /fill="var\(--brand\)"/g, to: 'fill="hsl(var(--brand))"' },
];

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.resolve(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else {
      if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        results.push(file);
      }
    }
  });
  return results;
}

const files = walk('d:/ShrinkBox/app').concat(walk('d:/ShrinkBox/components'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  replacements.forEach(r => {
    if (r.from.test(content)) {
      content = content.replace(r.from, r.to);
      changed = true;
    }
  });
  if (changed) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated: ${file}`);
  }
});
