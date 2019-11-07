import React, { Component } from 'react';
import {fetch} from 'whatwg-fetch';
import Footer from '../../components/Footer/Footer';
import {NavLink} from 'react-router-dom';

export default class Jinghua extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        this.url = this.props.location.state;
        console.log(this.url);
        console.log(this.props.match.params.id);
        let page = this.props.match.params.id;
        fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                });
        })
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.match.params.id !== this.props.match.params.id){
            let page = this.props.match.params.id;
            fetch("https://cnodejs.org/api/v1/topics?tab=share&page="+page)
                .then((res)=>res.json())
                .then((res)=>{
                    console.log(res);
                    this.setState({
                        data:res.data
                    });
                })
            }
    }
    render() {
        if(this. props. location. state ==undefined){
            this. url='/home';
        } else{
            this. url=this. props. location. state. url|| '/home';
        }
        return (
                <div>
                    {   
                        this.state.data.map((item)=>(
                            <div key={item.id} style={{borderTop:'1px solid #f0f0f0',width:900,height:50,overflow:'hidden'}}>
                                <img src={item.author.avatar_url} style={{width:50,height:50,float:'left',lineHeight:'50px'}}/>
                                <span style={{float:'left',fontSize:'14px',color:'#9e78c0',lineHeight:'50px'}}>{item.reply_count}</span>
                                <span style={{float:'left',fontSize:'10px',color:'#b4b4b4',lineHeight:'52px'}}>/{item.visit_count}</span>
                                <NavLink to={this.url+'/topic/'+item.id}><span style={{fontSize:'16px',lineHeight:'50px',maxWidth:'500px',overflow:'hidden'}}>{item.title}</span></NavLink>
                                <span style={{fontSize:'16px',lineHeight:'50px',float:'right'}}>8分钟前</span>
                                <img src={item.author.avatar_url} style={{width:50,height:50,float:'right'}}/>
                                {/* 把标签识别出来并且显示 */}
                                {/* <div dangerouslySetInnerHTML={{__html:item.content}}></div> */}
                </div>
                ))  
            }
            <Footer url={this.url+'/share'}/>
            </div>
        )
    }
}
