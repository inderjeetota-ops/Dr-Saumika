import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const searchStr = `                      <p className="font-bold text-navy">{language === 'hi' ? 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी में फेलो' : 'Fellow in Oculoplasty & Ocular Oncology'}</p>
                    </div>`;

const replaceStr = `                      <p className="font-bold text-navy">{language === 'hi' ? 'ओकुलोप्लास्टी और ओकुलर ऑन्कोलॉजी में फेलो' : 'Fellow in Oculoplasty & Ocular Oncology'}</p>
                      <p className="text-xs sm:text-sm text-navy/75 font-medium mt-0.5">{language === 'hi' ? 'डॉ. श्रॉफ्स चैरिटी आई हॉस्पिटल' : "Dr. Shroff's Charity Eye Hospital"}</p>
                    </div>`;

if (content.includes(searchStr)) {
  content = content.replace(searchStr, replaceStr);
  fs.writeFileSync('src/pages/Home.tsx', content);
  console.log('patched');
} else {
  console.log('not found');
}
