import fs from 'fs';
let content = fs.readFileSync('src/pages/Home.tsx', 'utf8');

const socketIconStr = `
const SocketIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M 6.5 7.5 C 10 3.5 17 4.5 21 11.5" />
    <path d="M 4.5 9.5 L 7.5 6.5" strokeWidth="2.5" strokeLinecap="butt" />
    <path d="M 3 12.5 C 7 19.5 14 20.5 17.5 16.5" />
    <path d="M 16.5 17.5 L 19.5 14.5" strokeWidth="2.5" strokeLinecap="butt" />
    <path d="M 8.5 9 A 4.5 4.5 0 0 1 15.5 9" />
    <path d="M 8.5 15 A 4.5 4.5 0 0 0 15.5 15" />
    <path d="M 12 9.5 A 2.5 2.5 0 1 1 9.6 11.3 A 1.2 1.2 0 0 0 10.7 9.6 A 2.5 2.5 0 0 1 12 9.5 Z" fill="currentColor" stroke="none" />
  </svg>
);

export default function Home() {`;

content = content.replace("export default function Home() {", socketIconStr);

const targetCondition = "{ icon: Shield, title: t('home.tumours'), desc: t('home.tumoursDesc'), slug: 'socket-reconstruction-artificial-eye-rehabilitation' }";
const replaceCondition = "{ icon: SocketIcon, title: t('home.tumours'), desc: t('home.tumoursDesc'), slug: 'socket-reconstruction-artificial-eye-rehabilitation' }";

content = content.replace(targetCondition, replaceCondition);

fs.writeFileSync('src/pages/Home.tsx', content);
console.log('patched Home.tsx with custom Socket icon');
