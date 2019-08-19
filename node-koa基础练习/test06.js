var fs = require('fs')

fs.unlink('test06-1.txt', function (err) {
  if (err) throw err;
  console.log('Deleted Success')
})