import React from 'react'
import RouterView from './RouterView'
import Login from '../views/login/login'
import Main from '../views/main/main'
import Home from '../views/main/home'
import Special from '../views/main/special'
import Classify from '../views/main/classify'
import Cart from '../views/main/cart'
import My from '../views/main/my'

export default {
    routes: [
        {
            path: '/login',
            // component: ()=><p>登陆页面</p>
            name: Login,
            component: Login
        },
        {
            path: '/main',
            // component: (props:any)=>(<>
            //     <p>主页面</p>
            //     <RouterView routes={props.routes}></RouterView>
            // </>),
            name: Main,
            component: Main,
            children: [{
                path: '/main/home',
                // component: ()=><p>首页</p>
                name: Home,
                component: Home
                },{
                    path: '/main/special',
                    component: Special
                },{
                    path: '/main/classify',
                    component: Classify
                },{
                    path: '/main/cart',
                    component: Cart
                },{
                    path: '/main/my',
                    component: My
                }
             ]
        },
    {
        from: '*',
        to: '/main'
    }
    ]
}