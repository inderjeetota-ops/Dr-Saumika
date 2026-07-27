import fs from 'fs';
let content = fs.readFileSync('scripts/prerender.js', 'utf8');

const searchStr = `await page.goto(\`http://localhost:\${PORT}\${route}\`, { waitUntil: 'networkidle0' });`;
const replaceStr = `await page.goto(\`http://localhost:\${PORT}\${route}\`, { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForSelector('#root > *');`; // Wait for React to render at least something

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('scripts/prerender.js', content);
  console.log('patched prerender');
} else {
  console.log('not found in prerender');
}
