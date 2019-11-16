import React, { Component } from 'react';
import { NavBar,Carousel,Flex, WhiteSpace } from 'antd-mobile';

export default class AppHome extends Component {
    render() {
        return (
            <div>
                <NavBar style={{background:'#3fcccb',color:'#fff',height:'55px'}}>
                    住吧家居
                </NavBar>
                <Carousel
                    autoplay={true}
                    infinite
                    dots={true}
                    dotStyle={{width:35,height:3,background:'#ededed',borderRadius:0,marginBottom:'13px'}}
                    dotActiveStyle={{width:35,height:3,background:'#3fcccb',borderRadius:0,marginBottom:'13px'}}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width: '100%', height:170,overflow:'hidden' }}
                        >
                        <img
                            src={require(`../images/1_0${val}.jpg`)}
                            alt=""
                            style={{ width: '100%', verticalAlign: 'top' }}
                            onLoad={() => {
                            window.dispatchEvent(new Event('resize'));
                            this.setState({ imgHeight: 'auto' });
                            }}
                        />
                        </a>
                    ))}
                </Carousel>
                
                <div className="flex-container">
                        <Flex>
                            <div style={{textAlign:'center'}}><img style={{width:'90%',margin:'0px 0px',}}  src={require('../images/1_03.jpg')}/></div>
                            <div style={{textAlign:'center'}}><img style={{width:'90%',margin:'0px 0px',}}  src={require('../images/1_04.jpg')}/></div>
                            <div style={{textAlign:'center'}}><img style={{width:'90%',margin:'0px 0px'}}  src={require('../images/1_05.jpg')}/></div>
                        </Flex>
                        <WhiteSpace size="lg" />
                </div>

                <div>
                    <WhiteSpace size="xs" />
                    <div style={{width:'100%',height:'40px',background:'#fff',marginTop:'-10px'}}>
                        <span style={{width:'30px',height:'20px',borderLeft:'5px solid #3fcccb',lineHeight:'40px'}}>
                            <span style={{marginLeft:'15px',color:'#000'}}>热门推荐</span>
                        </span>
                    </div>

                    <WhiteSpace size="xs" />
                    <div style={{position:'relative'}}>
                        <img style={{width:'100%'}} src={require('../images/1_06.jpg')}/>
                        <span style={{width:'100%',fontSize:'15px',position:'absolute',left:'12px',bottom:'6px',color:'#fff'}}>什么是英伦装修风格 英伦风家装 英伦风格装修效果图</span>
                    </div>
                </div>
            </div>
        )
    }
}
