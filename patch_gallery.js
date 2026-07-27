import fs from 'fs';
let content = fs.readFileSync('src/pages/Gallery.tsx', 'utf8');

const targetBeforeDesc = `                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-navy/50 tracking-wider uppercase">
                      {idx === 0 ? (language === 'hi' ? 'गंभीर पलक का झुकना' : 'Severe Drooping Eyelid Condition') : (language === 'hi' ? 'खोई हुई चमक और असममिति' : 'Volume loss and aesthetic asymmetry')}
                    </span>
                  </div>`;
const targetAfterDesc = `                  <div className="mt-4 flex justify-between items-center px-1">
                    <span className="text-xs font-bold text-gold tracking-wider uppercase">
                      {idx === 0 ? (language === 'hi' ? 'पूरी तरह से उठा हुआ और प्राकृतिक' : 'Restored eyelid height and natural symmetry') : (language === 'hi' ? 'कस्टम मैचिंग कृत्रिम आंख' : 'Custom matched premium cosmetic shell')}
                    </span>
                  </div>`;

if (content.includes(targetBeforeDesc) && content.includes(targetAfterDesc)) {
    content = content.replace(targetBeforeDesc, '');
    content = content.replace(targetAfterDesc, '');
    fs.writeFileSync('src/pages/Gallery.tsx', content);
    console.log('patched Gallery');
} else {
    console.log('could not find target descriptions in Gallery');
}
