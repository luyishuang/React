(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){t.exports=n.p+"static/media/logo.25bf045c.svg"},15:function(t,e,n){t.exports=n(23)},22:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(11),i=n.n(c),r=n(1),l=n(2),s=n(5),u=n(3),h=n(4),d=(n(9),n(12));a.Component,n(13),n(22);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var p=n(7),m=n(14),f=n(6),b=function(t){function e(){var t;return Object(r.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).handleInput=function(e){13===e.keyCode&&t.props.add(e.target.value)},t.handleChange=function(e){t.setState(Object(m.a)({},e.target.name,parseInt(""===e.target.value?0:e.target.value)))},t.handleInput=t.handleInput.bind(Object(f.a)(t)),t.state={a:"",b:"",c:""},t}return Object(h.a)(e,t),Object(l.a)(e,[{key:"componentDidMount",value:function(){console.log(this),this.refs.a.focus()}},{key:"render",value:function(){var t=this;return o.a.createElement("div",null,o.a.createElement("input",{ref:"a",name:"a",onChange:this.handleChange,value:this.state.a,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"b",onChange:this.handleChange,value:this.state.b,onKeyDown:this.handleInput,type:"text"}),"+",o.a.createElement("input",{name:"c",onChange:this.handleChange,value:this.state.c,onKeyDown:this.handleInput,type:"text"}),"=",o.a.createElement("p",null,this.state.a+this.state.b+this.state.c),o.a.createElement("input",{type:"text",ref:function(e){t.inp=e}}),o.a.createElement("button",{onClick:function(){console.log(t.inp.value)}},"\u63d0\u4ea4"))}}]),e}(a.Component),v=function(t){function e(){return Object(r.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this,e=this.props.todo;return o.a.createElement("div",null,o.a.createElement("ul",null,e.map((function(e,n){return o.a.createElement("li",{key:n},e,"---",o.a.createElement("button",{onClick:function(e){return t.props.del(n,e)}},"\u5220\u9664"))}))))}}]),e}(a.Component);v.defaultProps={todo:[1,2,3,4,4]};var g=function(t){function e(){var t;Object(r.a)(this,e),(t=Object(s.a)(this,Object(u.a)(e).call(this))).addItem=function(e){t.setState({todo:[].concat(Object(p.a)(t.state.todo),[e])})},t.delItem=function(e,n){var a=Object(p.a)(t.state.todo);a.splice(e,1),t.setState((function(t,e){return console.log(t.todo),{todo:a}}))},t.state={todo:[1,2,3]};var n={a:100,b:[1,2,3]},a=Object.assign({},n,{c:300});return console.log(a===n),Object.keys(n).forEach((function(t){console.log(t),console.log(n[t])})),t}return Object(h.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(b,{add:this.addItem}),o.a.createElement(v,{del:this.delItem,todo:this.state.todo}))}}]),e}(a.Component);i.a.render(o.a.createElement(g,null),document.getElementById("root"));document.getElementById("root").className="active","serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))},9:function(t,e,n){}},[[15,1,2]]]);
//# sourceMappingURL=main.7c39700a.chunk.js.map