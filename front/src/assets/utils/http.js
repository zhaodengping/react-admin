import axios from 'axios'
let baseUrl='http://localhost:4000'
export default function http({url,method='GET',data={}}){
    console.log(data)
    return new Promise((resolve,reject)=>{
        axios({
            url:`${baseUrl}${url}`,
            method,
            data
        }).then(res=>{
            if(res.data.success){
                resolve(res.data.data)
            }else{
                reject(res.data.message)
            }
        }).catch(err=>{
            console.log(err)
            reject(err)
        })
    })
}