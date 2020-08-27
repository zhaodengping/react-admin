const koa=require('koa');
const bodyParser = require('body-parser');

const app=new koa();

const router=require('koa-router')()

const cors=require('koa-cors')

app.use(async(ctx,next)=>{
    await next() 
}).listen(4000)

router.get('/hello/:name',async (ctx,next)=>{
    let name=ctx.params.name;
    console.log(name)
    ctx.response.body=`<h1>Hello,${name}</h1>`
})

app.use(bodyParser())

app.use(cors())

app.use(router.routes())