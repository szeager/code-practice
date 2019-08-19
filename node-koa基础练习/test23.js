var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();
router.get('/', async (ctx) => {
  ctx.body = "首页";

})
router.param('user', (id, ctx, next) => {
  ctx.user = users[id];
  if (!ctx.user) return ctx.status = 404;
  return next();
})
  .get('/users/:user', ctx => {
    ctx.body = ctx.user;
  })
  .get('/users/:user/friends', ctx => {
    return ctx.user.getFriends().then(function (friends) {
      ctx.body = friends;
    });
  })

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(9023)