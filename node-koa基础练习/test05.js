var fs = require('fs')

// 追加内容
fs.appendFile('test05-1.txt', ' so i can update', function (err) {
  if (err) throw err;
  console.log('Success')
})

// 方法替换指定的文件和内容：
fs.writeFile('test05-2.txt', 'hhhhh', function (err) {
  if (err) throw err;
  console.log('Success')
})