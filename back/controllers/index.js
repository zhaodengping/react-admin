const fn_index=async(ctx,next)=>{
    ctx.response.body = `<h1>Index</h1>
        <form action="/sign" method="post">
            <p>Name: <input name="name" value="koa"></p>
            <p>Password: <input name="password" type="password"></p>
            <p><input type="submit" value="Submit"></p>
        </form>`;
}

const fn_sign=async(ctx,next)=>{
    console.log(ctx.request.body)
    const name=ctx.request.body.name||'';
    const password=ctx.request.body.password||'';
    if(name=='koa'&&password=='1234567'){
        ctx.response.body={
            text:"登录成功"
        }
    }else{
        ctx.response.body={
            text:"登录失败"
        }
    }
} 

module.exports={
    'GET /':fn_index,
    'POST /sign':fn_sign
}