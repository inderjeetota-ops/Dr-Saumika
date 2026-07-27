import fs from 'fs';
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');
content = content.replace('src="/logo.png"', 'src="/Logo.png"');
fs.writeFileSync('src/components/Footer.tsx', content);
console.log('patched footer 2');
