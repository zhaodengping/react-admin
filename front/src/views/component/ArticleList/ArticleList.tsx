import React, { useEffect, useReducer } from 'react'
import http from '../../../assets/utils/http'
import { List, Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';


export default function ArticleList() {
    const [list, dispatch] = useReducer(reducer, [])
    function reducer(state, action) {
        switch (action.type) {
            case 'init':
                return [...state, ...action.payload];
        }
    }

    useEffect(() => {
        getList()
    }, []);
    function getList() {
        let postData = {
            url: "/articleList",
        }
        http(postData).then(res => {
            dispatch({ type: 'init', payload: res })
        })
    }
    const IconText = ({ icon, text }) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    );
    return (
        <div>
            <div>
                <List itemLayout="vertical" dataSource={list} renderItem={item => (
                    <List.Item actions={[
                        <IconText icon={StarOutlined} text={item.collectCount} key="list-vertical-star-o" />,
                        <IconText icon={LikeOutlined} text={item.likeCount} key="list-vertical-like-o" />,
                        <IconText icon={MessageOutlined} text={item.commentsCount} key="list-vertical-message" />,
                    ]} extra={
                        <img
                            width={272}
                            alt="logo"
                            src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                        />
                    }>
                        <List.Item.Meta
                            title={<div>{item.title}</div>}
                            description={item.abstract}
                        />
                        {item.content}
                    </List.Item>
                )}
                />
            </div>
        </div>
    )
}