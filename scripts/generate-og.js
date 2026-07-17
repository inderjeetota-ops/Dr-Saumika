import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap');
        body {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 630px;
          background: #1a365d;
          display: flex;
          font-family: 'Inter', sans-serif;
          color: white;
          overflow: hidden;
        }
        .left {
          flex: 1;
          padding: 80px 60px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
          z-index: 2;
        }
        .right {
          width: 500px;
          position: relative;
          background: #0d213b;
        }
        .right img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 20%;
          filter: contrast(1.1) brightness(0.9);
        }
        h1 {
          font-size: 64px;
          font-weight: 800;
          line-height: 1.1;
          margin: 0 0 20px 0;
          color: white;
        }
        h2 {
          font-size: 32px;
          font-weight: 600;
          line-height: 1.3;
          color: #d4af37; /* gold */
          margin: 0 0 40px 0;
        }
        .location {
          display: flex;
          align-items: center;
          font-size: 24px;
          font-weight: 600;
          color: #fdfbf7; /* ivory */
          margin-top: auto;
        }
        .location svg {
          width: 32px;
          height: 32px;
          margin-right: 12px;
          color: #d4af37;
        }
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 150px;
          height: 100%;
          background: linear-gradient(to right, #1a365d 0%, transparent 100%);
          z-index: 1;
        }
      </style>
    </head>
    <body>
      <div class="left">
        <h1>Dr. Saumika Singh</h1>
        <h2>Oculoplasty, Orbit &amp; Ocular Oncology Surgeon</h2>
        <div class="location">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Lucknow
        </div>
      </div>
      <div class="right">
        <div class="gradient-overlay"></div>
        <img src="file://${path.resolve(__dirname, '../public/dr-saumika.jpg')}" alt="Dr. Saumika Singh" />
      </div>
    </body>
    </html>
  `;
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.screenshot({
    path: path.resolve(__dirname, '../public/og-image.jpg'),
    type: 'jpeg',
    quality: 90
  });
  
  await browser.close();
  console.log("Successfully generated og-image.jpg");
})();
