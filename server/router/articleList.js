const db=require('../db/index')

exports.articleList=async ctx=>{
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