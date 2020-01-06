import React from 'react';
import '../../css/main.css';
import {NavLink,Route,Redirect} from 'react-router-dom'
import Home from './home'
import Special from './special'
import Classify from './classify'
import Cart from './cart'
import My from './my'

const Main: React.FC = () =>{
    return (
        <div className="main">
            <main>
                <Route path="/main/home" component={Home}/>
                <Route path="/main/special" component={Special}/>
                <Route path="/main/classify" component={Classify}/>
                <Route path="/main/cart" component={Cart}/>
                <Route path="/main/my" component={My}/>
                {/* 二级路由的重定向 */}
                <Redirect from="/main" to="/main/home"/>
            </main>
            <ul className="footer">
                <NavLink to="/main/home">首页</NavLink>
                <NavLink to="/main/special">专题</NavLink>
                <NavLink to="/main/classify">分类</NavLink>
                <NavLink to="/main/cart">购物车</NavLink>
                <NavLink to="/main/my">我的</NavLink>
            </ul>
        </div>
    )
}

export default Main