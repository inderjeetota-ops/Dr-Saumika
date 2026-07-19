import fs from 'fs';

let content = fs.readFileSync('src/pages/GalleryPage.tsx', 'utf8');
if (!content.includes('useLanguage')) {
  content = content.replace(/export default function GalleryPage\(\) \{/, "import { useLanguage } from '../context/LanguageContext';\n\nexport default function GalleryPage() {\n  const { language } = useLanguage();");
  fs.writeFileSync('src/pages/GalleryPage.tsx', content);
}

content = fs.readFileSync('src/pages/ContactPage.tsx', 'utf8');
if (!content.includes('useLanguage')) {
  content = content.replace(/export default function ContactPage\(\) \{/, "import { useLanguage } from '../context/LanguageContext';\n\nexport default function ContactPage() {\n  const { language } = useLanguage();");
  fs.writeFileSync('src/pages/ContactPage.tsx', content);
}

content = fs.readFileSync('src/pages/Home.tsx', 'utf8');
if (!content.includes('useLanguage')) {
  content = content.replace(/export default function Home\(\) \{/, "import { useLanguage } from '../context/LanguageContext';\n\nexport default function Home() {\n  const { language } = useLanguage();");
  fs.writeFileSync('src/pages/Home.tsx', content);
} else if (!content.includes('const { language } = useLanguage();')) {
  // It might already have useLanguage imported but not the language variable... wait, let's check
}
