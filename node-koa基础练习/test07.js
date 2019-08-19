var fs = require('fs')

fs.rename('test07.txt', 'test07-1.txt', function (err) {
  if (err) throw err;
  console.log('Rename Success');
})