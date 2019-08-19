var UserModel = require('./test17')

// insert
function insert() {
  var user = new UserModel({
    name: 'xiix',
    address: 'luohu'
  })

  user.save(function (err, res) {
    if (err) {
      console.error('Erroe:', err)
    } else {
      console.log("Res: ", res)
    }
  })
}

insert();