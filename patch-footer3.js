import fs from 'fs';
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const target = `              <div className="mb-8 bg-white p-4 rounded-2xl inline-block shadow-xl shadow-black/20 border border-gold/20">\n                <img src="/Logo.png" alt="Dr. Saumika Singh Logo" className="w-48 sm:w-56 md:w-64 h-auto object-contain" />\n              </div>\n`;

content = content.replace(target, '');
fs.writeFileSync('src/components/Footer.tsx', content);
console.log('patched footer 3');
