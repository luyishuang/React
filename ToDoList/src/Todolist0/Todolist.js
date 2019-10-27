import React, { Component } from 'react'
import Todoing from './Todoing'
import Todoinput from './Todoinput'

export default class ToDoList extends Component {
    constructor() {
        super();
        var doing = 0;
        var over = 0;
        var dataList = window.localStorage.getItem("todo");
        //console.log(dataList); // [{"title":"88","done":"true"}]  string
        var todo = JSON.parse(dataList);
        if(todo != undefined || todo != null){
            todo.map((item,index) => {
                if(item.done === "false"){
                    doing ++;
                }
                else if(item.done === "true"){
                    over ++;
                }
            });
        }
        else{
            todo = [];
        }
        this.state = {
            todo: todo,
            doing: doing,
            over: over
        }
    }
    
    addItem = (data) =>{
        var dataItem = {title: data,done: "false"}
        this.setState((state, props) => {
            console.log(state.todo);
            var todo = [...this.state.todo,dataItem];
            window.localStorage.setItem("todo", JSON.stringify(todo));
            this.state.doing ++;
            return {
                todo:todo,
                doing: this.state.doing
            }
        })
    }
    
    change = (index,e) => {
        var todo = [...this.state.todo];
        //console.log(todo);//[{title: "0", done: "false"}, {title: "1", done: "true"}]
        if(todo[index].done === "false"){
            todo[index].done = "true";
            this.setState((state, props) => {
                console.log(state.todo);
                this.state.todo[index].done = "true";
                this.state.doing --;
                this.state.over ++;
                return {
                    todo: todo,
                    doing: this.state.doing,
                    over: this.state.over
                }
            })
            window.localStorage.setItem("todo", JSON.stringify(todo));
        }
        else if(todo[index].done === "true"){
            todo[index].done = "false";
            this.setState((state, props) => {
                console.log(state.todo);
                this.state.todo[index].done = "false";
                this.state.doing ++;
                this.state.over --;
                return {
                    todo: todo,
                    doing: this.state.doing,
                    over: this.state.over
                }
            })
            window.localStorage.setItem("todo", JSON.stringify(todo));
        }
    }

    delItem = (index,e) => {
        var todo = [...this.state.todo];
        this.setState((state, props) => {
            console.log(state.todo);
            if(todo[index].done === "false"){
                todo.splice(index, 1);
                window.localStorage.setItem("todo", JSON.stringify(todo));
                this.state.doing --;
                return {
                    todo: todo,
                    doing: this.state.doing
                }
            }
            else if(todo[index].done === "true") {
                todo.splice(index, 1);
                window.localStorage.setItem("todo", JSON.stringify(todo));
                this.state.over --;
                return {
                    todo: todo,
                    over: this.state.over
                }
            }
        })
    }
    
    clear = (e) =>{
        var todo = [...this.state.todo];
        window.localStorage.clear();
        this.setState((state, props) => {
            console.log(state.todo);
            return {
                todo: [],
                doing: 0,
                over: 0
            }
        })
    }

    render() {
        return (
            <div>
                <Todoinput add={this.addItem} />
                <Todoing todo={this.state.todo} doing={this.state.doing} over={this.state.over} del={this.delItem}  move={this.change} clear={this.clear}/>
            </div>
        )
    }
}