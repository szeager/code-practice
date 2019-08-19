// mongodb 创建库

var MongoClient = require('mongodb').MongoClient
var url = "mongodb://127.0.0.1:27017/my-test-db";

MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  console.log("DataBase Created!");
  db.close();
})