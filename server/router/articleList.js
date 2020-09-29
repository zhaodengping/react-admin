const db=require('../db/index')

exports.articleList=async ctx=>{
    const {searchData}=ctx.request.body;
    const sql='SELECT * FROM t_article_list WHERE title LIKE "%'+searchData+'%"';

    await db.query(sql).then(res=>{
        console.log(res)
        ctx.response.body={
            success:true,
            data:res
        }
    })
} 