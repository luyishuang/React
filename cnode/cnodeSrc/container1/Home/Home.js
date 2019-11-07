import React, { Component } from 'react';
import {Link,Route,Switch,Redirect} from 'react-router-dom';
import All from './All'
import Jinghua from './Jinghua'
import Share from './Share'
import Ask from './Ask'
import Job from './Job'
import Dev from './Dev'
import Content from './Content'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.url = this.props.location.state;
        console.log(this.url);
    }
    render() {
        let {url} = this.props.match;   // /home
        //let url = this.props.match.url;
        // console.log(this.props.match.url);
        return (
            <div>
                <div className="title">
                    <Link to={{pathname:url+'/all',state:url}}>全部</Link>
                    <Link to={{pathname:url+'/jinghua',state:url}}>精华</Link>
                    <Link to={{pathname:url+'/share',state:url}}>分享</Link>
                    <Link to={{pathname:url+'/ask',state:url}}>问答</Link>
                    <Link to={{pathname:url+'/job',state:url}}>招聘</Link>
                    <Link to={{pathname:url+'/dev',state:url}}>客户端测试</Link>
                </div>
                <div>
                    <Switch>
                        {/* <Route exact path='/' component={All}/> */}
                        <Route exact path='/home' component={All}/>
                        <Route exact path={url+'/all'} component={All}/>
                        <Route path={url+'/all/:id'} component={All}/>
                        <Route exact path={url+'/jinghua'} component={Jinghua}/>
                        <Route path={url+'/jinghua/:id'} component={Jinghua}/>
                        <Route exact path={url+'/share'} component={Share}/>
                        <Route path={url+'/share/:id'} component={Share}/>
                        <Route exact path={url+'/ask'} component={Ask}/>
                        <Route path={url+'/ask/:id'} component={Ask}/>
                        <Route exact path={url+'/job'} component={Job}/>
                        <Route path={url+'/job/:id'} component={Job}/>
                        <Route exact path={url+'/dev'} component={Dev}/>
                        <Route path={url+'/dev/:id'} component={Dev}/>
                        <Route path={url+'/topic/:id'} component={Content}/>
                        {/* <Redirect exact to={{pathname:url+'/all',state:url}} /> */}
                    </Switch>
                </div>
            </div>
        )
    }
}
