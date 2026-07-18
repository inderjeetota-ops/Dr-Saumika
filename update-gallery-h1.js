import fs from 'fs';
const file = 'src/pages/Gallery.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  /<h1 className="([^"]+)">\s*\{t\('gallery\.title'\)\}\s*<\/h1>/,
  `{isEmbedded ? (
            <h2 className="$1">
              {t('gallery.title')}
            </h2>
          ) : (
            <h1 className="$1">
              {t('gallery.title')}
            </h1>
          )}`
);

fs.writeFileSync(file, content);
