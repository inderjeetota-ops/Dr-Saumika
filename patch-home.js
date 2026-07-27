import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const target = `                      <p className="font-bold text-navy">{language === 'hi' ? 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी में फेलो' : 'Fellow in Oculoplasty & Ocular Oncology'}</p>`;
const replacement = `                      <p className="font-bold text-navy">{language === 'hi' ? 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी में फेलोशिप' : 'Fellowship in Oculoplasty & Ocular Oncology'}</p>`;

content = content.replace(target, replacement);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched home page 2');
