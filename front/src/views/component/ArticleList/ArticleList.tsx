import React, { useEffect, useReducer } from 'react'
import {httpWithCookie} from '../../../assets/utils/http'
import { List, Space } from 'antd'
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import './articleList.scss'


export default function ArticleList() {
    const [list, dispatch] = useReducer(reducer, [])
    function reducer(state, action) {
        switch (action.type) {
            case 'init':
                return [ ...action.payload];
        }
    }
    useEffect(() => {
        getList()
    }, []);
    function getList() {
        let postData = {
            url: "/articleList",
        }
        httpWithCookie(postData).then(res => {
            res.forEach(item=>{
                item.time=item.create_time.split('T')[0]
            })
            dispatch({ type: 'init', payload: res })
        })
    }
    const IconText = (item) => {
        return(
            <div>
                <LikeOutlined  onClick={()=>{agree(item.item.article_id)}}/>
                {item.item.likeCount}
            </div>
        )
    };

    function agree(id:string){
        let postData = {
            url: "/agree",
            data:{
                article_id:id
            },
            method:"POST"
        }
        httpWithCookie(postData).then(res => {
            console.log(res)
            getList()
        })
    }
    
    return (
        <div>
            <div>
                <List itemLayout="vertical" dataSource={list} 
                    pagination={{
                        onChange: page => {
                            console.log(page);
                        },
                        pageSize: 10,
                    }} 
                  renderItem={item => (
                    <List.Item actions={[
                        <IconText item={item} key="list-vertical-star-o" />,
                        // <IconText icon={StarOutlined} text={item.collectCount} key="list-vertical-star-o" />,
                        // <IconText icon={LikeOutlined} text={item.likeCount} key="list-vertical-like-o"/>,
                        // <IconText icon={MessageOutlined} text={item.commentsCount} key="list-vertical-message" />,
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
                        <div className="content">{item.content}</div>
                        <div className='time'>发布于{item.time}</div>
                    </List.Item>
                )}
                />
            </div>
        </div>
    )
}