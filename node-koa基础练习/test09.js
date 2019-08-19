var http = require('http')
var uc = require('upper-case')

// NPM包初使用
http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write(uc('hello world!'))
  res.end();
}).listen(9009)

