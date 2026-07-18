import fs from 'fs';
const file = 'src/pages/ServiceDetail.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacement = `<SEO 
        title={seoInfo.title}
        description={seoInfo.desc}
        path={\`/services/\${id}\`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalProcedure",
              "name": seoInfo.title,
              "description": seoInfo.desc,
              "provider": {
                "@type": "Physician",
                "name": "Dr. Saumika Singh",
                "url": "https://drsaumika.in"
              },
              "areaServed": "Lucknow, Uttar Pradesh, India"
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://drsaumika.in/" },
                { "@type": "ListItem", "position": 2, "name": "Conditions Treated", "item": "https://drsaumika.in/#conditions" },
                { "@type": "ListItem", "position": 3, "name": seoInfo.title, "item": \`https://drsaumika.in/services/\${id}\` }
              ]
            }
          ]
        }}
      />`;

content = content.replace(/<SEO\s+title=\{seoInfo\.title\}\s+description=\{seoInfo\.desc\}\s+path=\{\`\/services\/\$\{id\}\`\}\s+\/>/, replacement);

fs.writeFileSync(file, content);
