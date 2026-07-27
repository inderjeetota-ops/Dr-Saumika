import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const tumourIconStr = `
const TumourIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 7.5 21 L 12 16 L 16.5 21 L 19 19 L 15 13.5 C 18 9 17 3 12 3 C 7 3 6 9 9 13.5 L 5 19 Z" />
    <path d="M 12 13.5 L 9.5 10.5 C 8 8.5 8.5 6 12 6 C 15.5 6 16 8.5 14.5 10.5 Z" />
    <path d="M 9.5 6.5 Q 12 4.5 14.5 6.5" />
  </svg>
);

export default function Home() {`;

content = content.replace("export default function Home() {", tumourIconStr);

const targetCondition = "{ icon: Activity, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' }";
const replaceCondition = "{ icon: TumourIcon, title: t('home.thyroid'), desc: t('home.thyroidDesc'), slug: 'eye-tumours-ocular-oncology' }";

content = content.replace(targetCondition, replaceCondition);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx with custom tumour icon');
