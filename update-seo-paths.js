import fs from 'fs';

let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
content = content.replace(/path="\/"/, "path={language === 'hi' ? '/hi' : '/'}");
fs.writeFileSync('src/pages/Home.tsx', content);

content = fs.readFileSync('src/pages/GalleryPage.tsx', 'utf8');
content = content.replace(/path="\/gallery"/, "path={language === 'hi' ? '/hi/gallery' : '/gallery'}");
if (!content.includes('language ==')) {
  // If useLanguage is missing, add it
  if (!content.includes('useLanguage')) {
    content = content.replace(/export default function GalleryPage\(\) \{/, `import { useLanguage } from '../context/LanguageContext';\n\nexport default function GalleryPage() {\n  const { language } = useLanguage();`);
  } else if (!content.includes('const { language }')) {
    content = content.replace(/export default function GalleryPage\(\) \{/, `export default function GalleryPage() {\n  const { language } = useLanguage();`);
  }
}
fs.writeFileSync('src/pages/GalleryPage.tsx', content);

content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');
content = content.replace(/path="\/contact"/, "path={language === 'hi' ? '/hi/contact' : '/contact'}");
if (!content.includes('language ==')) {
  if (!content.includes('useLanguage')) {
    content = content.replace(/export default function ContactPage\(\) \{/, `import { useLanguage } from '../context/LanguageContext';\n\nexport default function ContactPage() {\n  const { language } = useLanguage();`);
  } else if (!content.includes('const { language }')) {
    content = content.replace(/export default function ContactPage\(\) \{/, `export default function ContactPage() {\n  const { language } = useLanguage();`);
  }
}
fs.writeFileSync('src/pages/ContactPage.tsx', content);

content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');
content = content.replace(/path=\{\`\/services\/\$\{id\}\`\}/, "path={language === 'hi' ? `/hi/services/\${id}` : `/services/\${id}`}");
// And for the not found case: path={`/services/${id || 'not-found'}`}
content = content.replace(/path=\{\`\/services\/\$\{id \|\| 'not-found'\}\`\}/, "path={language === 'hi' ? `/hi/services/\${id || 'not-found'}` : `/services/\${id || 'not-found'}`}");
if (!content.includes('const { language }')) {
    content = content.replace(/export default function ServiceDetail\(\) \{/, `export default function ServiceDetail() {\n  const { language } = useLanguage();`);
}
fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
