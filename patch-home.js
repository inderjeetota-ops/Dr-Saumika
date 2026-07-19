import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

// replace url inside jsonLd
content = content.replace(/"url": "https:\/\/drsaumika\.in\/"/, `"url": \`https://drsaumika.in\${language === 'hi' ? '/hi' : '/'}\``);

fs.writeFileSync('src/pages/Home.tsx', content);
