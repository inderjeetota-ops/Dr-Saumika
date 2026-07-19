import fs from 'fs';
let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

// The file had: export default function ServiceDetail() {\n  const { language } = useLanguage();
content = content.replace(/export default function ServiceDetail\(\) \{\n  const \{ language \} = useLanguage\(\);/, 'export default function ServiceDetail() {');

fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
