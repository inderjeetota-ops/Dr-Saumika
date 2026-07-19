import fs from 'fs';

let content = fs.readFileSync('src/pages/ServiceDetail.tsx', 'utf8');

// Replace the jsonLd prop inside the <SEO ... /> component
// We'll just replace the whole SEO component string

const replacement = `<SEO 
        title={seoInfo.title}
        description={seoInfo.desc}
        path={language === 'hi' ? \`/hi/services/\${id}\` : \`/services/\${id}\`}
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "MedicalProcedure",
              "name": t(service.titleKey),
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
                { "@type": "ListItem", "position": 1, "name": t('nav.home'), "item": \`https://drsaumika.in\${language === 'hi' ? '/hi' : '/'}\` },
                { "@type": "ListItem", "position": 2, "name": t('nav.conditions'), "item": \`https://drsaumika.in\${language === 'hi' ? '/hi' : '/'}#conditions\` },
                { "@type": "ListItem", "position": 3, "name": t(service.titleKey), "item": \`https://drsaumika.in\${language === 'hi' ? \`/hi/services/\${id}\` : \`/services/\${id}\`}\` }
              ]
            }
          ]
        }}
      />`;

// Replace from `<SEO \n        title={seoInfo.title}` up to the closing tag `/>` before `<div id="service-detail-container"`

const regex = /<SEO\s+title=\{seoInfo\.title\}[\s\S]*?\/>/;
if (regex.test(content)) {
  content = content.replace(regex, replacement);
  fs.writeFileSync('src/pages/ServiceDetail.tsx', content);
  console.log("Success");
} else {
  console.log("Not found");
}

