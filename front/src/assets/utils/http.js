import axios from 'axios'
let baseUrl='http://localhost:4000'
export default function http({url,method='GET',data={}}){
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
export function httpWithCookie({url,method='GET',data={}}){
    return new Promise((resolve,reject)=>{
        axios.defaults.withCredentials=true
        axios({
            url:`${baseUrl}${url}`,
            method,
            data,
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