import puppeteer from 'puppeteer';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../dist');

const routes = [
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
];

const app = express();
app.use(express.static(distDir));

// Fallback to index.html for client-side routing
app.get(/(.*)/, (req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

const PORT = 3456;

const server = app.listen(PORT, async () => {
  console.log(`Prerender server running on port ${PORT}`);
  
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      console.log(`Prerendering ${route}...`);
      const page = await browser.newPage();
      
      // Navigate and wait for React to hydrate/render
      await page.goto(`http://localhost:${PORT}${route}`, { waitUntil: 'networkidle0' });
      
      const html = await page.content();
      
      // Remove any injected scripts if needed or just save
      const routeDir = path.join(distDir, route);
      
      if (!fs.existsSync(routeDir)) {
        fs.mkdirSync(routeDir, { recursive: true });
      }
      
      fs.writeFileSync(path.join(routeDir, 'index.html'), html);
      console.log(`Saved ${routeDir}/index.html`);
      await page.close();
    }
  } catch (error) {
    console.error('Prerender failed:', error);
    process.exit(1);
  } finally {
    await browser.close();
    server.close();
    console.log('Prerendering complete!');
  }
});
