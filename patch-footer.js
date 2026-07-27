import fs from 'fs';
let content = fs.readFileSync('src/components/Footer.tsx', 'utf8');

const searchStr = `<div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">`;

const replaceStr = `<div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <div className="mb-8 bg-white p-4 rounded-2xl inline-block shadow-xl shadow-black/20 border border-gold/20">
                <img src="/logo.png" alt="Dr. Saumika Singh Logo" className="w-48 sm:w-56 md:w-64 h-auto object-contain" />
              </div>
              <div className="flex items-center gap-2 mb-4">`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/components/Footer.tsx', content);
  console.log('patched footer');
} else {
  console.log('not found in footer');
}
