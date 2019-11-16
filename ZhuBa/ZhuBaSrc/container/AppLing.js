import React, { Component } from 'react';
import { Tabs,NavBar,Icon,Flex } from 'antd-mobile';

const tabs = [
    { title: '推荐', sub: '1' },
    { title: '冬季', sub: '2' },
    { title: '宜家', sub: '3' },
    { title: '小清新', sub: '4' },
    { title: '小户型', sub: '5' },
    { title: '个性色彩', sub: '6' },
  ];

export default class AppLing extends Component {
    render() {
        return (
            <div>
                <NavBar style={{background:'#3fcccb',color:'#fff',height:'55px'}}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                    ]}>
                    灵感
                </NavBar>
                <Tabs tabs={tabs} 
                    tabBarUnderlineStyle={{display:'none'}}
                    tabBarActiveTextColor='#3fcccb'
                    tabBarInactiveTextColor='#232323'
                    initialPage={0}
                    onChange={(tab, index) => { console.log('onChange', index, tab); }}
                    onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                    >
                    <div>
                        <Flex>
                            <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                            </div>
                            <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                            </div>
                        </Flex>
                        <Flex>
                            <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                            </div>
                            <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                            </div>
                        </Flex>
                        <Flex>
                            <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                            </div>
                            <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                            </div>
                        </Flex>
                    </div>
                    <div>
                        <div>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                    <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                                </div>
                            </Flex>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                    <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                                </div>
                            </Flex>
                        </div>
                    </div>                    
                    <div>
                        <div>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                    <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                                </div>
                            </Flex>
                        </div>
                    </div>                    
                    <div>
                        <div>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                    <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                                </div>
                            </Flex>
                        </div>
                    </div>                    
                    <div>
                        <div>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_01.jpg`)} width='100%' height='100%' />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px',marginBottom:'16px'}}>
                                    <img src={require(`../images/2_02.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_03.jpg`)} width='100%' height='100%'  />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img  src={require(`../images/2_04.jpg`)} width='100%' height='100%'/>
                                </div>
                            </Flex>
                            <Flex>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img width='100%' height='100%' src={require(`../images/2_05.jpg`)} />
                                </div>
                                <div style={{textAlign:'center',margin:'0 8px 16px 8px'}}>
                                    <img src={require(`../images/2_06.jpg`)}  width='100%' height='100%' />
                                </div>
                            </Flex>
                        </div>
                    </div>
                </Tabs>
            </div>
        )
    }
}
