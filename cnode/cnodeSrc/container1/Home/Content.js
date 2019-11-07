import React, { Component } from 'react'

export default class Content extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    componentDidMount(){
        console.log(this.props.match.params.id);
        let page = this.props.match.params.id;

        fetch("https://cnodejs.org/api/v1/topic/"+page)
            .then((res)=>res.json())
            .then((res)=>{
                console.log(res);
                this.setState({
                    data:res.data
                });
        })

    }
    render() {
        console.log(this.state.data);
        return (
                <div>
                    {/* {
                        this.state.data.map((item)=>(
                            <div key={item.id} style={{borderTop:'1px solid #f0f0f0',width:900,height:50,overflow:'hidden'}}>
                                <div dangerouslySetInnerHTML={{__html:item.content}}></div>
                            </div>
                        ))
                    } */}
                    {
                        <div dangerouslySetInnerHTML={{__html:this.state.data.content}}></div>
                    }
                </div>
            )
    }
}
