const db=require('../db/index')

exports.login=async ctx=>{
    const {name,password}=ctx.request.body
    const sql='SELECT * FROM t_user WHERE name=? and password=?';
    const value=[name,password];
    await db.query(sql,value).then(res=>{
        if(res.length>0){
            ctx.session.user=name
            console.log(ctx.session.user)
            ctx.response.body={
                success:true,
                data:res[0]
            }
        }else{
            ctx.response.body={
                success:false,
                message:'登陆失败'
            }
        }
    })
}
