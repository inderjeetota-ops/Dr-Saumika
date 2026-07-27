import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const eyelidIconStr = `
const EyelidIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 4 8 C 6 6 9 8 12 8 C 15 8 18 6 20 8" />
    <path d="M 4 10.5 C 8 13.5 16 13.5 20 10.5" />
    <path d="M 4.5 11 L 2 13" />
    <path d="M 6.5 12 L 4.5 15" />
    <path d="M 9.5 13 L 8 16.5" />
    <path d="M 12 13.5 L 12 17" />
    <path d="M 14.5 13 L 16 16.5" />
    <path d="M 17.5 12 L 19.5 15" />
    <path d="M 19.5 11 L 22 13" />
  </svg>
);

export default function Home() {`;

content = content.replace("export default function Home() {", eyelidIconStr);

const targetCondition = "{ icon: Eye, title: t('home.drooping'), desc: t('home.droopingDesc'), slug: 'eyelid-disorders-eyelid-surgery' }";
const replaceCondition = "{ icon: EyelidIcon, title: t('home.drooping'), desc: t('home.droopingDesc'), slug: 'eyelid-disorders-eyelid-surgery' }";

content = content.replace(targetCondition, replaceCondition);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx with EyelidIcon');
