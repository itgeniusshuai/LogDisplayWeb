import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import { Tree } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logoImg from '../../pic/logo.jpg'
import NoteDetail from '../note/note_detail'


const { Header, Sider, Content } = Layout;
const TreeNode = Tree.TreeNode;
const SubMenu = Menu.SubMenu;
const noteTrees = [
    {
        'name':'java',
        'id':1,
        'isFile':0,
        'subItems':[
            {'name':'java基础',
            'id':11,
            'isFile':0,
            'subItems':[{
                'name':'集合',
                'id':111,
                'isFile':1
                }
            ]}
        ]
     },{
        'name':'react',
        'id':2,
        'isFile':0,
        'subItems':[
            {'name':'rn',
            'id':21,
            'isFile':1,
            'subItems':[
                
            ]}
        ]
    }
];
const loadTreeNodes = (data) => {
    return data.map((item) => {
        if (item.isFile != 1) {
          return (
            <TreeNode title={item.name} key={item.id} dataRef={item} >
              {loadTreeNodes(item.subItems)}
            </TreeNode>
          );
        }
        var linkTo = '/detail/' + item.id;
        let title = (
            <Link to={linkTo}>{item.name}</Link>
        );
        return (
          <TreeNode title={title} key={item.id}  dataRef={item} >
              </TreeNode>);
      });
}
class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            collapsed: false
        }
    }
    
    render(){
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 ,height:'100px'}}>
                       <img src={logoImg} width='100%' height='100%'/>
                    </Header>
                <Router>
                    <Layout>
                        <Sider>
                            <Tree showLine onSelect={(selectedKeys, info) => {
                                    let selectedKey = selectedKeys[0];
                                }}  style={styles.tree}>
                                    {loadTreeNodes(noteTrees)}
                            </Tree>
                        </Sider>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Switch>
                                <Route exact path='/' component={() => <span>default</span>}/>
                                <Route path="/:sech/:detailId" component={({match}) => <NoteDetail detailId={match.params.detailId}>{match.params.detailId}</NoteDetail>}></Route>
                            </Switch>
                        </Content>
                    </Layout>                   
                </Router>
            </Layout>
        );
    }
}const styles = {
    container:{
        margin:0,
        display:'flex',
        flexDirection:'column',
        height:'100%',
        width:'100%'
    },
    header:{
        margin:0,
        height:'10%',
        width:'100%',
        display:'flex',
        flexDirection:'row',
        borderBottom:'2px cyan solid'
    },
    logo:{
        width:300,
        height:'100%'
    },
    ul:{
        flex:1,
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        alignItems:'center'
    },
    li:{
        float:'left',
        listStyle:'none',
        marginLeft:30,
        fontSize:18
    },
    middle:{
        width:'100%',
        height:'90%',
        display:'flex',
        flexDirection:'row',
    },
    left:{
        width:'10%',
        height:'100%',
        borderRight:'2px solid #ff44ff',
        paddingLeft:20,
        paddingTop:20
    },
    main:{
        flex:1,
    },
    tree:{
        marginLeft:20,
        marginTop:20
    }
}
export default Home;