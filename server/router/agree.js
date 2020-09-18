const db=require('../db/index')

exports.agree=async ctx=>{
    const {article_id}=ctx.request.body
    const sql='update t_article_list set likeCount=likeCount+1 where article_id=?'
    const value=[article_id];
    await db.query(sql,value).then(res=>{
        ctx.response.body={
            success:true,
            message:'点赞成功'
        }
    })
}
