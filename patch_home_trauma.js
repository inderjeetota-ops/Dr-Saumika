import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const traumaIconStr = `
const TraumaIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 3 12 C 4.5 9 6.5 7.5 8.5 6.5" />
    <path d="M 5.5 5.5 L 7.5 4" strokeWidth="2" />
    <path d="M 11 5 C 15 4 18.5 6 21 12" />
    <path d="M 3 12 C 5.5 18 9.5 20 13.5 19" />
    <path d="M 16.5 20 L 18.5 18.5" strokeWidth="2" />
    <path d="M 15.5 17.5 C 17.5 16.5 19.5 14.5 21 12" />
    <path d="M 9.5 9 A 3.5 3.5 0 0 1 14.5 9" />
    <path d="M 9.5 15 A 3.5 3.5 0 0 0 14.5 15" />
    <path d="M 7.5 11 L 7.5 13" />
    <path d="M 16.5 11 L 16.5 13" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

export default function Home() {`;

content = content.replace("export default function Home() {", traumaIconStr);

const targetCondition = "{ icon: Sparkles, title: t('home.botox'), desc: t('home.botoxDesc'), slug: 'eye-trauma-eyelid-orbital-reconstruction' }";
const replaceCondition = "{ icon: TraumaIcon, title: t('home.botox'), desc: t('home.botoxDesc'), slug: 'eye-trauma-eyelid-orbital-reconstruction' }";

content = content.replace(targetCondition, replaceCondition);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx with TraumaIcon');
