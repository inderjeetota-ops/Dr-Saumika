import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover origin-top scale-[1.8] translate-y-[12%]" />`;
const replaceStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover origin-top scale-[2.2] -translate-y-[15%]" />`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar 6');
} else {
  console.log('not found in navbar 6');
}
