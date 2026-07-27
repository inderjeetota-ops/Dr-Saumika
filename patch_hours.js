import fs from 'fs';
let content = fs.readFileSync('src/context/LanguageContext.tsx', 'utf8');

content = content.replace(
  "'contact.hours': 'Monday - Saturday: 10:00 AM - 6:00 PM\\nSunday: Closed',",
  "'contact.hours': 'Monday - Saturday\\n10:00 AM - 6:00 PM',"
);

content = content.replace(
  "'contact.hours': 'सोमवार - शनिवार: सुबह 10:00 - शाम 6:00\\nरविवार: बंद',",
  "'contact.hours': 'सोमवार - शनिवार\\nसुबह 10:00 - शाम 6:00',"
);

fs.writeFileSync('src/context/LanguageContext.tsx', content);
console.log('patched hours');
