import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

const targetEng = "'home.commitmentDesc': 'Dr. Saumika Singh is a fellowship-trained Oculoplasty, Orbit & Ocular Oncology Surgeon with expertise in the management of eyelid disorders, lacrimal diseases, orbital pathology, ocular surface and periocular tumours, socket reconstruction, and periocular aesthetics.',";
const replaceEng = "'home.commitmentDesc': \"Dedicated exclusively to Oculoplasty, Orbit and Ocular Oncology, Dr. Saumika Singh's practice is focused on conditions that demand advanced subspecialty expertise. From complex eyelid reconstruction and ocular tumours to lacrimal and orbital disorders, every patient receives individualized care grounded in clinical excellence and meticulous surgical planning.\",";

content = content.replace(targetEng, replaceEng);
fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log('patched');
