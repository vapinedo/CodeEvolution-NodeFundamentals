const http = require('node:http');
const fs = require('node:fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    const filePath = __dirname + '/index.html';
    // const html = fs.readFileSync(filePath, 'utf-8');
    // res.end(html);
    fs.createReadStream(filePath).pipe(res);
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});