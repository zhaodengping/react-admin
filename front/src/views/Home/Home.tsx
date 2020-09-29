import React from 'react'
import Nav from '../component/Nav/Nav'
import ArticleList from '../component/ArticleList/ArticleList';
import './home.scss'



export default function Home() {
    return (
        <div>
            <Nav />
            <div  className="home-content">
                <ArticleList />
            </div>
        </div>
    )
}