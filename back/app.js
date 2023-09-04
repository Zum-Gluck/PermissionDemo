const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const setRouter = require('./router/index.js')
const path = require('path')
const serve = require('koa-static');


const app = new Koa()

app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', 'token,Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  if (ctx.method == 'OPTIONS') {
    ctx.body = 200;
  } else {
    await next();
  }
});

const home = serve(path.join(__dirname) + '/dist/');
app.use(home)

app.use(bodyParser())

setRouter(app)

const errorHandler = require("./error-handle")
app.on('error', errorHandler);

app.listen(3000, () => {
  console.log(`服务器创建成功请访问http://localhost:3000`)
})