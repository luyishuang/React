import React, { Component } from 'react';
import './Footer.css';
import {NavLink} from 'react-router-dom';
import {fetch} from 'whatwg-fetch';

export default class Footer extends Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         data:[]
    //     }
    // }
    // componentDidMount(){
    //     console.log(this.props.match.params.id);
    //     let page = this.props.match.params.id;
    //     fetch("https://cnodejs.org/api/v1/topics?tab=all&page="+page)
    //         .then((res)=>res.json())
    //         .then((res)=>{
    //             console.log(res);
    //             this.setState({
    //                 data:res.data
    //             });
    //     })
    // }
    // componentDidUpdate(prevProps,prevState){
    //     if(prevProps.match.params.id !== this.props.match.params.id){
    //         let page = this.props.match.params.id;
    //         fetch("https://cnodejs.org/api/v1/topics?tab=all&page="+page)
    //             .then((res)=>res.json())
    //             .then((res)=>{
    //                 console.log(res);
    //                 this.setState({
    //                     data:res.data
    //                 });
    //             })
    //         }
    // }
    render() {
        let url = this.props.url;
        return (
            <div className="box">
                {/* <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                </ul> */}
                    {
                        [1,2,3,4,5,6,7,8,9,10].map((item)=>(
                            <li key={item} style={{listStyle:'none'}}>
                                <NavLink activeStyle={{color:'#000'}} to={url+'/'+item}>{item}</NavLink>
                            </li>
                        ))
                    }
            </div>
        )
    }
}
