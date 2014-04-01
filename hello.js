//Exemplo teste do node.jsss

var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Olá, você esta rodando o Node.js!');
}).listen(8080);

console.log('Server iniciado! Acesse: http://localhost:8080/');