const koa=require('koa');

const app=new koa();

app.use(async(ctx,next)=>{
    await next()
    ctx.response.type='text/html';
    ctx.response.body='<h1>Hello world</h1>'
}).listen(3000)