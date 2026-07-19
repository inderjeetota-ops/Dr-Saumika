import fs from 'fs';
const file = 'src/components/Navbar.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(/import \{ useLanguage \} from '\.\.\/context\/LanguageContext';/, "import { useLanguage, getLocalizedPath } from '../context/LanguageContext';");
content = content.replace(/const \{ language, setLanguage, t \} = useLanguage\(\);/, "const { language, t } = useLanguage();");
content = content.replace(/onClick=\{[^}]*setLanguage\('en'\)[^}]*\}/, "onClick={() => navigate(getLocalizedPath(location.pathname, 'en'))}");
content = content.replace(/onClick=\{[^}]*setLanguage\('hi'\)[^}]*\}/, "onClick={() => navigate(getLocalizedPath(location.pathname, 'hi'))}");

fs.writeFileSync(file, content);
