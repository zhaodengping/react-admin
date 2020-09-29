const login=require('./login')
const articleList=require('./articleList')
const agree=require('./agree')

let router=require('koa-router')();

router.post('/login',login.login)
router.post('/articleList',articleList.articleList)
router.post('/agree',agree.agree)

module.exports=router