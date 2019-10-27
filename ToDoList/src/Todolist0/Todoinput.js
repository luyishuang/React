import React, { Component } from 'react'
import './Todolist.css';
export default class ToDoInput extends Component {
    handleInput = (e)=>{
        //绑定this，事件处理函数写成箭头函数，或者用bind
        if(e.keyCode === 13){
            this.props.add(e.target.value);
            e.target.value="";
        }
    }
    render() {
        return (
            <div className="header">
                <div className="header-content">
                    <div className="header-title">ToDoList</div>
                    <input type="text" className="addList" onKeyDown={this.handleInput} placeholder="添加ToDo" required="required"/>
                </div>
            </div>
        )
    }
}