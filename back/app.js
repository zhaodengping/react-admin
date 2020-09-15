const controller=require('./controllers/controller')

const koa=require('koa');
const bodyParser = require('koa-bodyparser');

const app=new koa();
 
const cors=require('koa-cors') 

app.use(async(ctx,next)=>{
    await next() 
}).listen(4000) 

app.use(bodyParser())

app.use(cors())

app.use(controller())