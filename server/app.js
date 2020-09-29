const session=require('koa-session')
const koa=require('koa');
const app=new koa();
const router=require('./router/controller') 
const bodyParser = require('koa-bodyparser');
// const cors=require('koa-cors')
// 配置跨域
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
    ctx.set('Access-Control-Allow-Origin', 'http://localhost:3000');
    ctx.set('Access-Control-Allow-Methods', 'PUT,DELETE,POST,GET');
    ctx.set('Access-Control-Allow-Credentials', true);
    ctx.set('Access-Control-Max-Age', 3600 * 24);
    await next();
}),
app.keys=['some secret hurr']
const config={
    key: 'koa:sess', /** cookie的名称，可以不管 */
    maxAge: 7200000, /** (number) maxAge in ms (default is 1 days)，cookie的过期时间，这里表示2个小时 */
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
}


app.use(async(ctx,next)=>{ 
    await next() 
}),


app.use(session(config,app));
app.use(async(ctx,next)=>{
    let n = ctx.session.views || 0;   // 每次都可以取到当前用户的session
    ctx.session.views = ++n;
    ctx.body = n + ' views';
    await next() 
})
app.use(bodyParser())
// app.use(cors())
app.use(router.routes())
app.listen(4000)