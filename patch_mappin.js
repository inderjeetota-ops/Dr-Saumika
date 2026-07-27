import fs from 'fs';
let content = fs.readFileSync('src/pages/Contact.tsx', 'utf8');

const targetMapPin = `<div className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>`;
const replaceMapPin = `<a href="https://www.google.com/maps/search/?api=1&query=Alyantra+Medicity,+Vibhuti+Khand,+Gomti+Nagar,+Lucknow,+Uttar+Pradesh" target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-gold/5 border border-gold/10 text-gold mr-4 group-hover/row:bg-gold/10 group-hover/row:border-gold/30 transition-all duration-300 flex-shrink-0 block cursor-pointer">
                    <MapPin className="h-5 w-5" />
                  </a>`;

if (content.includes(targetMapPin)) {
    content = content.replace(targetMapPin, replaceMapPin);
    fs.writeFileSync('src/pages/Contact.tsx', content);
    console.log('patched MapPin');
} else {
    console.log('could not find targetMapPin');
}
