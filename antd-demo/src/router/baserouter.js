
import React, { Component } from 'react';
import { Layout, Menu, Icon, Avatar, Badge, Row, Col, Dropdown } from 'antd';
import { Link } from 'react-router-dom';
import Routers from './routers';
import '../App.css';

const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人中心</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">注销</a>
    </Menu.Item>
  </Menu>
);
class BasicRoute extends Component {
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
          style={{ height: '100vh' }}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <div className="logo_div">
            <Icon type="slack-square" spin style={{ fontSize: '46px', color: '' }} />
            <div>回收工单管理平台</div>
          </div>
          <Menu
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['0']}
            mode="inline"
            theme="dark"
            inlineCollapsed={this.state.collapsed}
          >
            <Menu.Item key="0">
              <Link to="/home" replace><Icon type="mail" /><span>控制台</span></Link>
            </Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>回收管理</span></span>}>
              <Menu.Item key="1">
                <Link to="/Recover" replace><span>回收工单管理</span></Link>
              </Menu.Item>
              <Menu.Item key="2">货品类型</Menu.Item>
              <Menu.Item key="3">货品管理</Menu.Item>
              <Menu.Item key="4">已回收货品</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>商家管理</span></span>}>
              <Menu.Item key="5">商家管理</Menu.Item>
              <Menu.Item key="6">商家管理</Menu.Item>
              <Menu.Item key="7">店铺分类</Menu.Item>
              <Menu.Item key="8">轮播管理 添加轮播</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" title={<span><Icon type="mail" /><span>共享管理</span></span>}>
              <Menu.Item key="9">闲置物品管理</Menu.Item>
              <Menu.Item key="10">闲置物品分类</Menu.Item>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="appstore" /><span>用户管理</span></span>}>
              <Menu.Item key="11">收货员管理</Menu.Item>
              <Menu.Item key="12">小程序用户管理</Menu.Item>
            </SubMenu>
            <SubMenu key="sub5" title={<span><Icon type="appstore" /><span>应用管理</span></span>}>
              <Menu.Item key="13">版本管理</Menu.Item>
              <Menu.Item key="14">产品说明</Menu.Item>
            </SubMenu>
            <SubMenu key="sub6" title={<span><Icon type="appstore" /><span>后台管理</span></span>}>
                <Menu.Item key="15">管理员管理</Menu.Item>
                <Menu.Item key="16">权限管理</Menu.Item>
              </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0, paddingLeft: 15 }}>


            <Row>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box">
                  <Icon
                    className="trigger"
                    type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                    onClick={this.toggle}
                  />
                </div>
              </Col>
              <Col className="gutter-row" span={12}>
                <div className="gutter-box" style={{ float: 'right' }}>
                  <span style={{ marginRight: 24 }}>

                    <span style={{ marginRight: 24 }}>
                      <Dropdown overlay={menu} >
                        <a className="ant-dropdown-link" href="jav">
                          欢迎~管理员
                      </a>
                      </Dropdown>
                    </span>
                    <Badge count={1}><Avatar shape="square" icon="user" /></Badge>

                  </span>
                </div>
              </Col>
            </Row>


          </Header>
          <Content style={{
            margin: '16px 16px', background: '#fff',
          }}

          >

            <div className="contentCss" >
              <Routers />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}



export default BasicRoute;
