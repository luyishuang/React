import React, { Component } from 'react';
import {useHistory,useLocation,useParams,useRouteMatch} from 'react-router-dom';


export default function Login(){
    let history = useHistory();
    function toHome(){
        history.push('/home');
    }
    return (
        <div className="loginBox">
            <div style={{marginTop:'40px',float:'left'}}>用户名：<input type="text" name="name" placeholder="请输入用户名" style={{width:200,height:30,border:'1px solid grey',borderRadius:5}}/></div>
            <div style={{marginTop:'20px',float:'left'}}>密码：<input type="text" name="pwd" placeholder="请输入密码" style={{width:200,height:30,border:'1px solid grey',borderRadius:5}}/></div>
            <button style={{marginTop:'20px',float:'left',width:80,height:40,marginLeft:80,background:'#08c',border:'none',borderRadius:5,color:'#fff'}} onClick={toHome}>登录</button>
        </div>
    )
}
