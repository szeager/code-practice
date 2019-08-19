var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/my-test-db');

var UserSchema = new mongoose.Schema({
  name: {
    type: String,           //值的类型
    default: 'new user'     //默认值
  },
  address: {
    type: String,             //值的类型
    default: 'shenzhen'       //默认值

  },
});

var User = mongoose.model('Account', UserSchema);

var user = new User();

console.log('Account:', user);
