import React, { Component } from 'react';
import { NavBar, Carousel, Flex } from 'antd-mobile';

export default class Store extends Component {
    render() {
        return (
            <div style={{position:'relative'}}>
                <NavBar style={{background:'#3fcccb',color:'#fff',height:'55px'}}
                    rightContent={[
                        <i style={{fontSize:22, lineHeight:'22px', marginRight:'8px'}} className="iconfont icon-gouwuche"></i>
                    ]}>
                    商城
                </NavBar>

                <Carousel
                    autoplay={true}
                    infinite
                    dots={true}
                    dotStyle={{background:'#ededed',margin:'-13px 3px 0 0'}}
                    dotActiveStyle={{background:'#3fcccb',margin:'-13px 3px 0 0'}}
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                    >
                    {[1,2,3,4].map(val => (
                        <a
                        key={val}
                        style={{ display: 'inline-block', width:'100%',overflow:'hidden' }}
                        >
                        <img
                            src={require(`../images/3_01.png`)}
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

                <div style={{position:'absolute',top:'3.95em',left:'0px'}}>
                    <i style={{color:"#000",fontSize:'20px',float:'left'}} className={'iconfont icon-liebiao'}></i>
                    <div style={{float:'left'}}>
                        <i style={{color:"#000",fontSize:'20px',position:'absolute',color:'#000'}} className={'iconfont icon-sousuo'}></i>
                        <input type="text" placeholder="输入关键字搜索" style={{paddingLeft:'20px',position:'relative',opacity:'0.7',border:'1px solid grey',backgroundColor:'#f5e9e2',width:'21.3em',height:'2em'}}/>
                    </div>
                </div>
                <div style={{backgroundColor:'#fff',padding:'16px 0'}}>
                    <div style={{margin:'0 20px'}}>
                        <Flex>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#fe3a76',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-zhuozi'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>桌</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#29c1fd',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-chuang'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>床</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#fc9918',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-yizi'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>椅</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#2bd3d2',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-TIFFANYSROOM_huaban'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>几</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#fc2b29',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-yigui'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>柜</div>
                                </div>
                            </Flex.Item>
                        </Flex>
                    </div>
                    <div style={{margin:'20px 20px'}}>
                        <Flex>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#3c3cf7',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-shujia'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>书架</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#a80bff',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-tubiaoCSban-'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>沙发</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#25e077',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-shanzi'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>家居饰品</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#8e86c1',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-73'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>户外家具</div>
                                </div>
                            </Flex.Item>
                            <Flex.Item>
                                <div style={{textAlign:'center'}}>
                                    <div style={{backgroundColor:'#8e86c1',height:'3em',width:'3em',margin:'0 auto',borderRadius:'50%'}}>
                                        <i style={{fontSize:30,lineHeight:'1.7em',color:'#fff'}} className={'iconfont icon-quanbu'}></i>
                                    </div>
                                    <div style={{marginTop:'10px',fontSize:"12px"}}>全部分类</div>
                                </div>
                            </Flex.Item>
                        </Flex>
                    </div>
                </div>
                <Flex>
                    <div style={{margin:'16px 8px 0px 16px'}}>
                        <img src={require('../images/3_02.png')} width='100%' height='100%'/>
                        <div style={{color:'#939393',fontSize:'13px',margin:'10px 0'}}>Top Art Studio 欧式风格精细…</div>
                        <div style={{color:'#707070',fontSize:'14px'}}>¥ 39.95</div>
                    </div>
                    <div style={{margin:'16px 16px 0px 8px'}}>
                        <img src={require('../images/3_03.png')} width='100%' height='100%' />
                        <div style={{color:'#939393',fontSize:'13px',margin:'10px 0'}}>顺顺工艺欧式风格塑料外框黑…</div>
                        <div style={{color:'#707070',fontSize:'14px'}}>¥ 83.99</div>
                    </div>
                </Flex>
                <div style={{backgroundColor:'#fff',margin:'16px'}}>
                    <img width='100%' height='100%' src={require('../images/3_04.png')}/>
                </div>
            </div>
        )
    }
}