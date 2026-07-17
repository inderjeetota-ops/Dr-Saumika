import fs from 'fs';
const file = 'scripts/prerender.js';
let content = fs.readFileSync(file, 'utf8');

// insert writeFileSync for 200.html right after reading originalIndexHtml
content = content.replace(
  "const originalIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');",
  "const originalIndexHtml = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');\n// Save the empty shell for SPA fallback\nfs.writeFileSync(path.join(distDir, '200.html'), originalIndexHtml);"
);

fs.writeFileSync(file, content);
