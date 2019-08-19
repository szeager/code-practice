// mongoose
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// var Schema = mongoose.Schema;

// var blogSchema = new Schema({
//   title: String,
//   author: String,
//   body: String,
//   comments: [{ body: String, data: Date }],
//   date: { type: Date, default: Date.now },
//   hidden: Boolean,
//   meta: {
//     votes: Number,
//     favs: Number
//   }
// })

mongoose.connect('mongodb://localhost:27017/my-test-db')

const con = mongoose.connection;
con.on('error', console.error.bind(console, '连接数据库失败'));
con.once('open', () => {
  console.log('Success')
  // 定义一个Schema 表 集合
  var User = new Schema({
    name: { type: String },
    address: { type: String },
  })

  var UserModel = mongoose.model('UserModel', User);

  var silence = new UserModel({ name: 'Silnece' })
  console.log(silence.name);

})