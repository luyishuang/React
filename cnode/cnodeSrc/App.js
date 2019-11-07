import React, { Component } from 'react'
import {HashRouter as Router,Route,Redirect} from 'react-router-dom';
import Header from './components/Header/Header'
import './index.css'
import Home from './container1/Home/Home'
import Start from './container1/Start/Start'
import Api from './container1/Api/Api'
import About from './container1/About/About'
import Login from './container1/Login/Login'

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className="content">
                    <div className="left">
                        {/* <Route exact path="/" component={Home}/> */}
                        <Route path="/home" component={Home}/>
                        <Redirect to='/home/all' />
                        <Route path="/start" component={Start}/>
                        <Route path="/api" component={Api}/>
                        <Route path="/about" component={About}/>
                        <Route path="/login" component={Login}/>
                    </div>
                    <div className="right">
                        这里是固定不动的内容
                    </div>
                </div>
            </Router>
        )
    }
}
