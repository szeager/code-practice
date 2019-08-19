const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//设置连接位置
mongoose.connect('mongodb://localhost:27017/my-test-db');

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);
var small = new Tank({ size: 'small' });

//使用实例创建
small.save(function (err) {
  if (err) return handleError(err);
  console.log('创建成功');
})

Tank.find({ size: 'small' }, function (err, data) {
  if (err) console.log('err: ', err);
  console.log('v:', data)
  // removed!
});
