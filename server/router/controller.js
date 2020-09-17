const login=require('./login')
const articleList=require('./articleList')

let router=require('koa-router')();

router.post('/login',login.login)
router.get('/articleList',articleList.articleList)

module.exports=router