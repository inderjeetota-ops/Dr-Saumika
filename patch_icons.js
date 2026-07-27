import fs from 'fs';
let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const targetPhone = `<div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>`;
const replacePhone = `<a href="tel:+917460088838" className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0 block cursor-pointer">
                    <Phone className="h-5 w-5" />
                  </a>`;

const targetMail = `<div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>`;
const replaceMail = `<a href="mailto:contact@drsaumika.in" className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0 block cursor-pointer">
                    <Mail className="h-5 w-5" />
                  </a>`;

content = content.replace(targetPhone, replacePhone);
content = content.replace(targetMail, replaceMail);

fs.writeFileSync('src/pages/Contact.tsx', content);
console.log('patched icons');
