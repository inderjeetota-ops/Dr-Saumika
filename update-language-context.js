import fs from 'fs';
const file = 'src/context/LanguageContext.tsx';
let content = fs.readFileSync(file, 'utf8');

// replace the LanguageContextType definition
content = content.replace(
  /type LanguageContextType = \{[\s\S]*?\};/,
  `type LanguageContextType = {
  language: Language;
  t: (key: string) => string;
};`
);

// Add import if missing
if (!content.includes('import { useLocation }')) {
  content = content.replace(/import React, \{ createContext, useContext, useState, ReactNode \} from 'react';/, 
    "import React, { createContext, useContext, ReactNode } from 'react';\nimport { useLocation } from 'react-router-dom';");
}

// replace LanguageProvider
const newProvider = `export function getLocalizedPath(pathname: string, targetLang: Language): string {
  const isHi = pathname.startsWith('/hi');
  const basePath = isHi ? (pathname.slice(3) || '/') : pathname;
  if (targetLang === 'hi') {
    return basePath === '/' ? '/hi' : \`/hi\${basePath}\`;
  }
  return basePath;
}

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const language: Language = location.pathname.startsWith('/hi') ? 'hi' : 'en';

  React.useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const val = translations[language][key as keyof typeof translations['en']];
    return val !== undefined ? val : key;
  };

  return (
    <LanguageContext.Provider value={{ language, t }}>
      {children}
    </LanguageContext.Provider>
  );
};`;

content = content.replace(/export const LanguageProvider = \(\{ children \}: \{ children: ReactNode \}\) => \{[\s\S]*?<\/[L]anguageContext\.Provider>\s*\);\s*\};/, newProvider);

fs.writeFileSync(file, content);
