// mongodb 插入集合

// 引入mongodb库
var MongoClient = require('mongodb').MongoClient
// 本地数据库路径
var url = "mongodb://127.0.0.1:27017/";

// 插入单条
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db('my-test-db');
//   var myobj = { name: "zwy", address: "nanshan" };
//   dbo.collection("user").insertOne(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("1 document inserted");
//     db.close()
//   })
// })
// // 插入多条
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db('my-test-db');
//   var myobj = [
//     { name: "zwy", address: "nanshan" },
//     { name: "hehe", address: "baoan" }
//   ];
//   dbo.collection("votes").insertMany(myobj, function (err, res) {
//     if (err) throw err;
//     console.log("Number of documents inserted: " + res.insertedCount);
//     db.close()
//   })
// })

// findone
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db('my-test-db')
//   dbo.collection('user').findOne({}, function (err, res) {
//     if (err) throw err;
//     console.log(res.name);
//     db.close();
//   })
// })

// find
// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("my-test-db");
//   dbo.collection('user').find({}).toArray(function (err, res) {
//     if (err) throw err;
//     console.log(res);
//     db.close();
//   })
// })


// 连接数据库，查找
MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  // 数据库名称 "my-test-db
  var dbo = db.db("my-test-db");
  // 从user表查询  
  dbo.collection('user').find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function (err, res) {
    if (err) throw err;
    console.log(res);
    db.close();
  })
})