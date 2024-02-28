

const http = require('http');
const fs = require('fs');
const path = require('path');

const puerto = 3000;
const host='localhost';

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    let filePath = '.' + req.url;
    if (filePath === './') {
      filePath = './public/index.html';
    }

    const extname = String(path.extname(filePath)).toLowerCase();
    const contentType = {
      '.html': 'text/html',
      '.css': 'text/css',
      '.js': 'application/javascript',
      '.json': 'application/json',
    };

    const contentTypeHeader = contentType[extname] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
      if (err) {
        if (err.code === 'ENOENT') {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end('404 Not Found');
        } else {
          res.writeHead(500);
          res.end(`Server Error: ${err.code}`);
        }
      } else {
        res.writeHead(200, { 'Content-Type': contentTypeHeader });
        res.end(content, 'utf-8');
      }
    });
  } else if (req.method === 'GET' && req.url === '/productos') {
    fs.readFile('./data/productos.json', 'utf-8', (err, content) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('Error interno del servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(content);
      }
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('404 Not Found');
  }
});


server.listen(puerto,host,()=>{
    console.log(`Servidor activo: http://${host}:${puerto}`);
});