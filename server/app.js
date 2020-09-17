const koa=require('koa');
const app=new koa();
const router=require('./router/controller') 

const bodyParser = require('koa-bodyparser');
const cors=require('koa-cors')
app.use(async(ctx,next)=>{
    await next() 
}).listen(4000) 
app.use(bodyParser())
app.use(cors())


app.use(router.routes())