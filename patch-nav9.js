import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const target = `              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0 border border-gold/20 group-hover:border-gold transition-colors">
                <img src="/Logo-cropped.png" alt="Logo" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
              </div>\n`;

content = content.replace(target, '');
fs.writeFileSync('src/components/Navbar.tsx', content);
console.log('patched navbar 9');
