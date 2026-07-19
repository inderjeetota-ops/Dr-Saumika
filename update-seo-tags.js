import fs from 'fs';
const file = 'src/components/SEO.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `  const url = \`\${SITE_URL}\${path}\`;

  const isHi = path.startsWith('/hi');
  const enPath = isHi ? (path.slice(3) || '/') : path;
  const hiPath = isHi ? path : (path === '/' ? '/hi' : \`/hi\${path}\`);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-IN" href={\`\${SITE_URL}\${enPath}\`} />
      <link rel="alternate" hrefLang="hi-IN" href={\`\${SITE_URL}\${hiPath}\`} />
      <link rel="alternate" hrefLang="x-default" href={\`\${SITE_URL}\${enPath}\`} />`;

content = content.replace(/  const url = `\$\{SITE_URL\}\$\{path\}`;[\s]*return \([\s]*<Helmet>[\s]*<title>\{title\}<\/title>[\s]*<meta name="description" content=\{description\} \/>[\s]*<link rel="canonical" href=\{url\} \/>/, replacement);

fs.writeFileSync(file, content);
