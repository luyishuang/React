import React, { Component,Fragment } from 'react'
import './Todolist.css'

export default class ToDoing extends Component {
    duigou = (e) =>{
        if(e.target.checked == "checked"){
            e.target.type = " ";
        }
        else{
            e.target.type = "checked";
        }
    }

    change = (index,e) =>{
        console.log(e);
        this.props.move(index);
    }

    delItem = (index,e) =>{
        console.log(e);
        this.props.del(index);
    }

    clear = (e) =>{
        console.log(e);
        this.props.clear(e);
    }
    
    render() {
        var {todo,doing,over} = this.props;
        return (
        <Fragment>
            <div className="content">
                <div className="todoing-box">
                    <h2 className="list-title">
                        正在进行
                        <span className="title-numb">{doing}</span>
                    </h2>
                </div>
                <ul className="todoing">
                    {
                        todo.map((item, index) => {
                            if(item.done === "false"){
                                return <li key={index}>
                                            <input type="checkbox" onChange={this.duigou} onClick={(e)=>this.props.move(index,e)}/>
                                            <span>{item.title}</span>
                                            <button onClick={(e)=>this.props.del(index,e)}></button>
                                        </li>
                            }
                        })
                    }
                </ul>
                <div className="todoing-box">
                    <h2 className="list-title">
                        已完成
                        <span className="title-numb">{over}</span>
                    </h2>
                </div>
                <ul className="todoing">
                    {
                        todo.map((item, index) => {
                            if (item.done === "true") {
                                return <li key={index}>
                                            <input type="checkbox" onChange={this.duigou} onClick={(e)=>this.props.move(index,e)} checked="checked"/>
                                            <span>{item.title}</span>
                                            <button onClick={(e)=>this.props.del(index,e)}></button>
                                        </li>
                            }
                        })
                    }
                </ul>
            </div>
            <div className="footer">Copyright © 2014 todolist.cn <span className="clear-btn" onClick={(e)=>this.props.clear(e)}>clear</span></div>
        </Fragment>
        )
    }
}