import React, { useEffect } from 'react';
import { Form, Input, Button, Space } from 'antd'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import http from '../../assets/utils/http'
import './login.scss'
function getData(){
    http({url:"/articleList"}).then(res=>{
        console.log(res)
    })
}
function Login() {
    let history = useHistory()
    // useEffect(() => {
    //     getData()
    // }, []);

    const layout = {
        labelCol: {
            span: 8
        },
        wrapperCol: {
            span: 14
        }
    }
    const tailLayout = {
        wrapperCol: {
            offset: 4,
            span: 16,
        },
    };
    function onFinish(values) {
        let data = {
            name: values.mallBackendUserName,
            password: values.mallBackendUserPwd
        }
        console.log(data)
        axios({
            url: "http://localhost:4000/login",
            method: "post",
            data
        }).then(res => {
            history.push('/home')
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div className='login-border'>
            <div className='login-content'>
                <div className='login-title'>博客园</div>
                <Form {...layout} onFinish={onFinish}>
                    <Form.Item label="用户名" name="mallBackendUserName" rules={[
                        { required: true, message: "请输入你的名称" }
                    ]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="密码" name="mallBackendUserPwd" rules={[
                        { required: true, message: "请输入密码" }
                    ]}>
                        <Input.Password />
                    </Form.Item>
                    <Form.Item {...tailLayout} label=''>
                        <Space>
                            <Button type="primary" htmlType="submit">确定</Button>
                            <Button htmlType="submit" className="btn">重置</Button>
                        </Space>
                    </Form.Item>
                </Form>
            </div>
        </div>
        
    );
}

export default Login;
