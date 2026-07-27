import fs from 'fs';
let contactCode = fs.readFileSync('src/pages/Contact.tsx', 'utf8');
contactCode = contactCode.replace(/import {([^}]+)} from 'lucide-react';/, "import { $1, Shield } from 'lucide-react';");
fs.writeFileSync('src/pages/Contact.tsx', contactCode);
console.log('added Shield to Contact.tsx');
