import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Link,Redirect,Switch} from 'react-router-dom';
import Home from './containers/Home';
import About from './containers/About';
import Login from './containers/Login';
import Nomatch from './containers/Nomatch';
import {Provider} from 'react-redux';
import store from './store';
import App from './App';
import './index.css'

ReactDOM.render(
    <Provider store={store}>
    <Router>
        <div>

            <Link to="/">首页</Link>
            <Link to="/about">about</Link>
            <Link to="/login">登录</Link>
            <Switch>
                {/* Switch只能跟Route和Redirect组件 */}
                <Route exact path='/' component={Home}/>
                <Route path='/home/:id' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/login' component={Login}/>

                {/* <Route component={Nomatch}/> */}
                <Route path="/nomatch" component={Nomatch} />
                <Redirect to="/nomatch" />
            </Switch>
        </div>
    </Router></Provider>,
    document.getElementById('root')

)

// ReactDOM.render(
//     <Router>
//         <div>
//             <div>
//                 <Link to='/home'>首页</Link>
//                 <Link to='/about'>about</Link>
//             </div>
//             <div>
//                 <Route path='/home' component={Home}/>
//                 <Route path='/about' component={About}/>
//             </div>
//         </div>
//     </Router>,
//     document.getElementById('root')
// )

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// )
