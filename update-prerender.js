import fs from 'fs';
const file = 'scripts/prerender.js';
let content = fs.readFileSync(file, 'utf8');

const replacement = `const routes = [
  '/',
  '/gallery',
  '/contact',
  '/services/eyelid-disorders-eyelid-surgery',
  '/services/watering-eyes-tear-drainage-disorders',
  '/services/orbital-disorders-orbital-surgery',
  '/services/eye-tumours-ocular-oncology',
  '/services/socket-reconstruction-artificial-eye-rehabilitation',
  '/services/eye-trauma-eyelid-orbital-reconstruction',
  '/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics',
  '/services/why-choose-an-oculoplasty-ocular-oncology-specialist',
  '/hi',
  '/hi/gallery',
  '/hi/contact',
  '/hi/services/eyelid-disorders-eyelid-surgery',
  '/hi/services/watering-eyes-tear-drainage-disorders',
  '/hi/services/orbital-disorders-orbital-surgery',
  '/hi/services/eye-tumours-ocular-oncology',
  '/hi/services/socket-reconstruction-artificial-eye-rehabilitation',
  '/hi/services/eye-trauma-eyelid-orbital-reconstruction',
  '/hi/services/botox-eyelid-cosmetic-surgery-periocular-aesthetics',
  '/hi/services/why-choose-an-oculoplasty-ocular-oncology-specialist',
];`;

content = content.replace(/const routes = \[[^\]]*\];/, replacement);

fs.writeFileSync(file, content);
