const fs=require('fs')
const router=require('koa-router')()
const file=fs.readdirSync(__dirname);

const js_files=file.filter(item=>{
    return item.endsWith('.js')
})

for(let i of js_files){
    const mapping=require(`${__dirname}/${i}`);
    for(let j in mapping){
        if(j.startsWith('GET')){
            const path=j.substring(4)
            router.get(path,mapping[j])
        }else if(j.startsWith('POST')){
            const path=j.substring(5)
            router.post(path,mapping[j])
        }
    }
}

module.exports=function(){
    return router.routes()
}