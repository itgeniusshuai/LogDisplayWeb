import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import { Tree } from 'antd';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import logoImg from '../../pic/logo.jpg'
import NoteDetail from '../note/note_detail'
import NoteRoute from '../note/noteRoute'
import { Button } from 'antd/lib/radio';
import Pubsub from 'pubsub-js'


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

const loadTreeNodes = (data,parentId) => {
    return data.map((item) => {
        if (item.isFile != 1) {
          return (
            <TreeNode title={item.name} key={item.id} dataRef={item} >
              {loadTreeNodes(item.subItems,item.id)}
            </TreeNode>
          );
        }
        var linkTo = '/detail/' + parentId+ '/'+ item.id;
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
            collapsed: false,
            noteTrees: noteTrees
        }
    }
    componentDidMount(){
        Pubsub.subscribe('addNode',(msg,data)=>{
            this.addNode(data.node,data.parentId)
        });
    }
    addNode(node, parentId){
        this.addNode1(node,parentId,this.state.noteTrees);
        let noteList = this.state.noteTrees
        this.setState({noteTrees:noteList})
    }
    addNode1(node, parentId, noteList){
        if(noteList == null){
            return null;
        }
        noteList.map((note) =>{
            if(note.id == parentId){
                note.subItems.push(node);
                return 
            }else if(note.isFile == 0){
                this.addNode1(node,parentId,note.subItems)
            }
        })
    }
    
    render(){
        return (
            <Layout>
                <Header style={{ background: '#fff', padding: 0 ,height:'100px',borderBottom:'2px solid #faf'}}>
                       <img src={logoImg} width='100%' height='100%'/>
                    </Header>
                <Router>
                    <Layout style={{backgroundColor:'white'}}>
                        <Sider style={{backgroundColor:'white',padding:10,borderRight:'2px solid #faf'}}>
                            <Tree showLine onSelect={(selectedKeys, info) => {
                                    let selectedKey = selectedKeys[0];
                                }}  style={styles.tree}>
                                    {loadTreeNodes(this.state.noteTrees,0)}
                            </Tree>
                        </Sider>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            <Switch>
                                <Route exact path='/' component={() => <span>欢迎来到个人笔记</span>}/>
                                <Route path="/detail/:parentId/:detailId" component={({match}) => <NoteRoute detailId={match.params.detailId} parentId={match.params.parentId}>{match.params.detailId}</NoteRoute>}></Route>
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