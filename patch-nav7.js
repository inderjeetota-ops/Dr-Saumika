import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover origin-top scale-[2.2] -translate-y-[15%]" />`;
const replaceStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover transition-transform duration-300" style={{ objectPosition: '50% 38%', transform: 'scale(2.15)' }} />`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar 7');
} else {
  console.log('not found in navbar 7');
}
