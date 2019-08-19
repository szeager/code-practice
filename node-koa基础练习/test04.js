var fs = require('fs');

// 将指定的内容追加到文件中。如果文件不存在，将创建该文件：
fs.appendFile('test04-1.txt', 'add content', function (err) {
  if (err) throw err;
  console.log('SUCCESS');
})

// w 表示“写入”，则打开指定的文件进行写入。如果该文件不存在，则创建一个空文件
fs.open('test04-2.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Success!')
})

// 替换指定的文件和内容（如果存在）。如果该文件不存在，将创建包含指定内容的新文件
fs.writeFile('test04-3.txt', 'writeFile create a new file test04-3', function (err) {
  if (err) throw err;
  console.log('Success')
})