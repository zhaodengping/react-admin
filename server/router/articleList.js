const db=require('../db/index')

exports.articleList=async ctx=>{
    console.log('list')
    console.log(ctx.session.user)
    // if(!ctx.session.user){
    //     ctx.response.redirect('/login')
    // }
    const sql='SELECT * FROM t_article_list';
    await db.query(sql).then(res=>{
        if(res.length>0){
            ctx.response.body={
                success:true,
                data:res
            }
        }else{
            ctx.response.body={
                success:false,
                message:'登陆失败'
            }
        }
    })
} 