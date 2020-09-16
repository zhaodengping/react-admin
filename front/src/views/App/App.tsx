import React, { useState } from 'react';
import './App.css';
import { Form, Input, Button, Alert } from 'antd'
import axios from 'axios'
function App() {
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
      url:"http://localhost:4000/login",
      method:"post",
      data
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
  }
  return (

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
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">确定</Button>
        <Button htmlType="submit" className="btn">重置</Button>
      </Form.Item>
    </Form>
  );
}

export default App;
