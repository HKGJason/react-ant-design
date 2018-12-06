import React from 'react';
import ReactDOM from 'react-dom';
import './SiderDemo.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css'
import { Layout, Menu, Icon } from 'antd';
import {Route, Link, Switch} from 'react-router-dom'


const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span><Link to ="/welcome">Welcome Page</Link></span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span><Link to ="/tablePage">Table Page</Link></span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
   
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />This is a title
          </Header>
          <Content style={{
            margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
          }}
          ><span className='welcome'>
            Welcome to our new Web App
            </span>
          </Content>
        </Layout>
      </Layout>
 
    );
  }
}


  

