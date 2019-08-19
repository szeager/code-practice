var url = require('url')
// var adr = 'http://localhost:9898/test08.html?year=2018&month=feb'
// var q = url.parse(adr, true)

// console.log(q.host) // 域名
// console.log(q.pathname) // 路径
// console.log(q.search) // 参数

// var qdata = q.query
// console.log(qdata.month)



// =================================>
var http = require('http')
var fs = require('fs')

http.createServer(function (req, res) {
  var q = url.parse(req.url, true)
  var filename = "." + q.pathname;
  fs.readFile(filename, function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return res.end("404 Not Found")
    }
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write(data);
    return res.end();
  })
}).listen(9008)
// http://localhost:9008/test08-1.html
/*
  test08-1
  test08-1 ~~~
*/