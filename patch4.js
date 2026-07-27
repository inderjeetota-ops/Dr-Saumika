import fs from 'fs';
let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contactCode = contactCode.replace('className="w-full flex flex-col', 'className="lg:col-span-12 w-full flex flex-col');
fs.writeFileSync('src/pages/Contact.tsx', contactCode);
console.log('added lg:col-span-12');
