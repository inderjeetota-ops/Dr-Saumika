const fs = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`
      <html>
        <body>
          <img id="img" src="/Logo.png" onload="check()" style="display:none;" />
          <script>
            function check() {
              const img = document.getElementById('img');
              const canvas = document.createElement('canvas');
              canvas.width = img.width;
              canvas.height = img.height;
              const ctx = canvas.getContext('2d');
              ctx.drawImage(img, 0, 0);
              console.log('Size:', img.width, img.height);
              fetch('/done');
            }
          </script>
        </body>
      </html>
    `);
  } else if (req.url === '/Logo.png') {
    res.writeHead(200, { 'Content-Type': 'image/png' });
    res.end(fs.readFileSync('public/Logo.png'));
  } else if (req.url === '/done') {
    res.end('ok');
    console.log('done');
    process.exit(0);
  }
});
server.listen(4000, () => {
  console.log('Listening on 4000');
});
