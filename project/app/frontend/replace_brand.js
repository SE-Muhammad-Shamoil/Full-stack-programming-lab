// replace_brand.js
const fs = require('fs');
const path = require('path');
const root = process.cwd();
const extensions = ['.tsx', '.ts', '.js', '.jsx', '.json', '.md', '.css', '.html'];
function replaceInFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const updated = content.replace(/lifeCore/g, 'lifeCore');
  if (updated !== content) {
    fs.writeFileSync(filePath, updated, 'utf8');
    console.log('Updated', filePath);
  }
}
function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (extensions.includes(path.extname(entry.name))) {
      replaceInFile(fullPath);
    }
  }
}
walk(root);
