import React from 'react';

const Main: React.FC = () =>{
    return (
        <div>
            <input type="text" placeholder="请输入用户名"/>
            <input type="text" placeholder="请输入密码"/>
            <button>登录</button>
        </div>
    )
}

export default Main