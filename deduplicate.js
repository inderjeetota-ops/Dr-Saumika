import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const regex = /export function getLocalizedPath[\s\S]*?return basePath;\n\}\n/g;
const matches = content.match(regex);
if (matches && matches.length > 1) {
  content = content.replace(matches[1], ''); // remove the second one
}

fs.writeFileSync('src/context/LanguageContext.tsx', content);
