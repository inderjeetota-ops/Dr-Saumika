import fs from 'fs';
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

const searchStr = `<div className="flex-shrink-0 flex items-center mr-4">
            <Link to="/" className="flex flex-col group justify-center">`;

const replaceStr = `<div className="flex-shrink-0 flex items-center mr-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden bg-white shadow-sm flex-shrink-0 border border-gold/20 group-hover:border-gold transition-colors">
                <img src="/logo-icon.png" alt="Logo" className="w-full h-full object-cover" onError={(e) => { e.currentTarget.src = '/logo.png'; e.currentTarget.className = 'w-full h-full object-cover object-top scale-[1.3] translate-y-1' }} />
              </div>
              <div className="flex flex-col justify-center">`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  content = content.replace(
    `<span className="text-[8px] md:text-[9px] lg:text-[10px] text-gold font-semibold tracking-wider uppercase mt-1 leading-none">
                MBBS • MS (Ophth) • Fellow Oculoplasty & Ocular Oncology
              </span>
            </Link>`,
    `<span className="text-[8px] md:text-[9px] lg:text-[10px] text-gold font-semibold tracking-wider uppercase mt-1 leading-none">
                MBBS • MS (Ophth) • Fellow Oculoplasty & Ocular Oncology
              </span>
              </div>
            </Link>`
  );
  fs.writeFileSync('src/components/Navbar.tsx', content);
  console.log('patched navbar');
} else {
  console.log('not found in navbar');
}
