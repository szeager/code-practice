var http = require('http')
var dt = require('./test01-module')
var { Url } = require('url')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.write('Hello word \n')
  res.write('Date :  ' + dt())
  const urlhost = new Url('http:127.0.0.1:9090/ads')
  urlhost.host = '127.0.0.1:9900'
  res.write('url: ' + urlhost)

  res.write('txt : ' + txt)
  res.end('\n Hello Zwy')
}).listen(9090)