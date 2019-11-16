import { TabBar } from 'antd-mobile';
import React from 'react';
import AppHome from './AppHome';
import AppLing from './AppLing';
import AppShop from './AppShop';

export default class AppTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
        <TabBar
          unselectedTintColor="#686868"
          tintColor="#3fcccb"
          barTintColor="white"
        >
          <TabBar.Item
            title="首页"
            key="Home"
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>}
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-shouye'></i>}
            selected={this.state.selectedTab === 'home'}
            onPress={() => {
              this.setState({
                selectedTab: 'home',
              });
            }}
          >
              <AppHome />
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-linggan'></i>}
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-linggan'></i>}
            title="灵感"
            key="Inspiration"
            selected={this.state.selectedTab === 'redTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'redTab',
              });
            }}
            data-seed="logId1"
          >
              <AppLing />
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-tubiao_shangcheng'></i>}
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-tubiao_shangcheng'></i>}
            title="商城"
            key="Shop"
            // dot
            selected={this.state.selectedTab === 'greenTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'greenTab',
              });
            }}
          >
              <AppShop />
          </TabBar.Item>
          <TabBar.Item
            icon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>}
            selectedIcon={<i style={{fontSize:22,lineHeight:'22px'}} className='iconfont icon-wode'></i>}
            title="我的"
            key="My"
            selected={this.state.selectedTab === 'yellowTab'}
            onPress={() => {
              this.setState({
                selectedTab: 'yellowTab',
              });
            }}
          >
              我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}