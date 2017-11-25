import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import { Tree } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import './home.css';
import 'antd/dist/antd.css';


const { Header, Sider, Content } = Layout;
const TreeNode = Tree.TreeNode;
const SubMenu = Menu.SubMenu;


class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed: false
        }
    }
    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render(){
        return (
            <div>
                <Router>
                    <div>
                    <Layout>
                        <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                        >
                        <div className="logo" >LogDiaplay</div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                                <Menu.Item key="01">
                                    <Link to="/home">
                                        <Icon type="user" />
                                        <span>nav 1</span>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key="02">
                                    <Link to="/system">
                                        <Icon type="user" />
                                        <span>nav 1</span>
                                    </Link>
                                </Menu.Item>
                            </SubMenu>
                            <Menu.Item key="1">
                                <Link to="/user">
                                    <Icon type="user" />
                                    <span>nav 1</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/camera">
                                    <Icon type="video-camera" />
                                    <span>nav 2</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/upload">
                                    <Icon type="upload" />
                                    <span>nav 3</span>
                                </Link>
                            </Menu.Item>
                            
                        </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                <Icon
                                className="trigger"
                                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                onClick={this.toggle}
                                />
                            </Header>
                            <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                                <Switch>
                                    <Route exact path='/' component={() => <span>default</span>}/>
                                    <Route path="/:sech" component={({match}) => <span>{match.params.sech}</span>}></Route>
                                </Switch>
                            </Content>
                        </Layout>
                    </Layout>
                    </div>
                </Router>
            </div>
        );
    }
}

export default Home;