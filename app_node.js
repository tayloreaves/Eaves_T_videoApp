const http = require('http'); //require is the same as php require
const fs = require('fs');

const hostname = '127.0.0.1';
const port = process.env.PORT || 3000; //double pipe means "or"
const user = process.env.USER || "guest";

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-type' : 'text/html'});

  var file = fs.createReadStream('index.html');
  file.pipe(res);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/Logged in as ${user}`);
});
