import Login from '../views/Login/Login';
import Home from '../views/Home/Home'

const routes=[{
    path:'/',
    component:Login
},{
    path:'/login',
    component:Login
},{
    path:"/home",
    component:Home,
    routes:[{
        path:'/home'
    }]
}]

export default routes