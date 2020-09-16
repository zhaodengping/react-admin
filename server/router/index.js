const fn_sign=async(ctx,next)=>{
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
    'POST /sign':fn_sign
}