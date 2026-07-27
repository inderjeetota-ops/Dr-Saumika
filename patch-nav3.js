import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `onError={(e) => { e.currentTarget.src = '/logo.png'; e.currentTarget.className = 'w-full h-full object-cover object-top scale-[1.3] translate-y-[2px]' }}`;

const replaceStr = `onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = '/Logo.png'; e.currentTarget.className = 'w-full h-full object-cover object-top scale-[1.3] translate-y-[2px]' }}`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar 3');
} else {
  console.log('not found in navbar 3');
}
