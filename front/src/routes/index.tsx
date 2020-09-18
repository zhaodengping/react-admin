import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom'

import Login from '../views/Login/Login';
import Home from '../views/Home/Home'

export const routes=[]

const BasicRoute=()=>{
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/home" component={Home}></Route>
        </BrowserRouter>
    )
}
export default BasicRoute