import express from 'express';
import { launch } from 'puppeteer';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.static('dist', { index: false }));
const originalIndexHtml = fs.readFileSync('dist/200.html', 'utf8');
app.get(/(.*)/, (req, res) => res.send(originalIndexHtml));

const server = app.listen(3456, async () => {
  const browser = await launch({ args: ['--no-sandbox'] });
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.toString()));
  await page.goto('http://localhost:3456/', { waitUntil: 'networkidle0' });
  await browser.close();
  server.close();
});
