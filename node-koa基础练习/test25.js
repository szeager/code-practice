// var Koa = require('koa');
// var bodyParser = require('koa-bodyparser');

// var app = new Koa();
// app.use(bodyParser());

// app.use(async ctx => {
//   // the parsed body will store in ctx.request.body
//   // if nothing was parsed, body will be an empty object {}
//   ctx.body = ctx.request.body;
// });

// app.listen(9025)

// 引入koa
const koa = require('koa');
const app = new koa();

const routes = require("./test26")

// 注意：引入的方式
// const router = require('koa-router')();

const bodyparser = require('koa-bodyparser');
app.use(bodyparser());

// router.post('/add', async (ctx) => {
//   // 获取表单提交的数据
//   ctx.body = 'ctx.request.body';
// });

// 作用:启动路由
app.use(routes.routes());
// 作用:这是官方文档的推荐用法,我们可以看到 router.allowedMethords() 用在 router.routes() 之后,
// 所有,在当所有的路由中间件最后使用.此时根据 ctx.status 设置 response 响应头
app.use(routes.allowedMethods());

// 监听端口≈
app.listen(9025, function () {
  console.log('启动成功');
});
