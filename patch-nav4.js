import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `<img src="/logo-icon.png" alt="Logo" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/Logo.png'; e.currentTarget.className = 'w-full h-full object-cover object-top scale-[1.3] translate-y-[2px]' }} />`;

const replaceStr = `<img src="/Logo.png" alt="Logo" className="w-full h-full object-cover object-top scale-[1.3] translate-y-[2px]" />`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar 4');
} else {
  console.log('not found in navbar 4');
}
