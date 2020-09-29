import React,{useState} from 'react';
import { Button, Input, Space } from 'antd';
import './nav.scss';
import { useHistory } from 'react-router-dom';
import PubSub from 'pubsub-js'
const { Search } = Input;



export default function Nav(){
    let history=useHistory()
    const userInfo=JSON.parse(localStorage.userInfo)
    function login(){
        history.push('/login')
        localStorage.userInfo=null;
    }
    function search(e:string){
        PubSub.publish('searchData',e)
    }

    return(
        <div className="title">
            <div className='userInfo'>{userInfo.name}</div>
            <div>
                <Space>
                    <Search placeholder="代码改变世界" onSearch={(e:string)=>search(e)}  style={{ width: 200 }} allowClear/>
                    <Button onClick={login}>注销</Button>
                </Space>
            </div>
        </div>
    )
}