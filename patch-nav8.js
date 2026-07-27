import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover transition-transform duration-300" style={{ objectPosition: '50% 38%', transform: 'scale(2.15)' }} />`;
const replaceStr = `<img src="/Logo-cropped.png" alt="Logo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar 8');
} else {
  console.log('not found in navbar 8');
}
