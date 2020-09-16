import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Swith } from 'react-router-dom';
import routes from '../../routes/index'



export default function Menu(){
    return(
        <Router>
            <ul>
                <li>
                    <Link to='/login'>导航1</Link>
                </li>
                <li>
                    <Link to='/login'>导航1</Link>
                </li>
            </ul>
            <Switch>
                {routes.map((item,index)=>{
                    return <Route render={item.component} path={item.path} key={index}></Route>
                })}
            </Switch>
        </Router>
    )

}

