
// 注意：引入的方式
const router = require('koa-router')();

router.post('/add', async (ctx) => {
  // 获取表单提交的数据
  ctx.body = 'ctx.request.body2';
});


module.exports = router;