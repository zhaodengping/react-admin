import React,{useReducer,useEffect} from 'react';
import { Button, Input, Space } from 'antd';
import http from '../../../assets/utils/http'
import './nav.scss';
import { useHistory } from 'react-router-dom';
const { Search } = Input;

export default function Nav(){
    let history=useHistory()
    const [userInfo,dispatch] = useReducer(reducer,{})
    function reducer(state,action){
        switch (action.type){
            case 'init':
                return {...state,...action.payload}
        }
    }
    useEffect(() => {
        // getUserInfo()
    }, []);

    function getUserInfo(){
        const postData={
            url:"/login",
            method:'POST',
            data:{
                name:"行侠仗义的小龙女",
                password:'123'
            }
        }
        http(postData).then(res=>{
            dispatch({type:"init",payload:res})
        })
    }
    function login(){
        history.push('/login')
    }

    return(
        <div className="title">
            <div>{userInfo.name}</div>
            <div>
                <Space>
                    <Search placeholder="代码改变世界" onSearch={value => console.log(value)}  style={{ width: 200 }}/>
                    <Button onClick={login}>登录</Button>
                </Space>
            </div>
        </div>
    )
}