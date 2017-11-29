import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import { Tree } from 'antd';
const TreeNode = Tree.TreeNode;

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
]
const loadTreeNodes = (data,group) => {
    return data.map((item) => {
      if (item.isFile != 1) {
        return (
          <TreeNode title={item.name} key={item.id} dataRef={item} onSelect={() => {
              this.title.click()
          }}>
            {loadTreeNodes(item.subItems,group)}
          </TreeNode>
        );
      }
      var linkTo = '/menu/' + group +"/" + item.id;
      let title = (
          <Link to={linkTo}>{item.name}</Link>
      );
      return (
        <TreeNode title={title} key={item.id}  dataRef={item} onSelect={() =>{this.title.click()}}>
            </TreeNode>);
    });
  }
const Group = ({match}) => {
    // 请求日志对应的路由信息，引用第三方组件,带分组框
    let group = match.params.group;
    if('note' == group){
        return (
            <Tree showLine onSelect={(selectedKeys, info) => {
                let selectedKey = selectedKeys[0];
               
            }}  style={styles.tree}>
                {loadTreeNodes(noteTrees,group)}
            </Tree>
        );
    }else{
        return (
            <Tree onSelect={(selectedKeys, info) => {
                let selectedKey = selectedKeys[0];
            }}  style={styles.tree}>
                <TreeNode title='user' key='user' />
            </Tree>
        );
    }
    
}
// 详情页的路由以detail为开头，后面跟着父组件id和详情的id
const Detail = ({match:{params}}) => {
    let detailId = params.detailId;
    return (
        <div>{detailId}</div>
    );
}
// 修改右键的默认行为，增加添加功能，添加时时候先调接口创建一个空文档，并且返回对应id，在已有的路由里面添加对应的路由
class IndexRouter extends Component{ 
    constructor(props){
        super(props);
        this.data = noteTrees;
    }  
    render(){
        let params = {};
        let req = {};
        req.applyid = "100"
        req.up_order_sn = '322342';
        req.ux_order_sn = 'dfsdf';
        req.check_photo = {'reg_card':'dfdfdf'}
        req.check_date = '1990-12-12 12:12:12';
        req.check_name = 'dfsdf';
        req.check_phone = '135555555555'
        req.check_address = 'beijing'
        req.check_type = 1
        req.check_status = 2
        req.chec_content = 'dsfsdfsdf';
        req.signStr = 'sdfdsf';
        params.req = req;
        console.log(JSON.stringify(req));
        return (
            <div style={{display:'block',width:'100%',height:'100%',margin:0}}>
                <Router style = {{flex:1}}>
                    <div  style={styles.container}>
                        <div style={styles.header}>
                            <div style={styles.logo}></div>
                            <ul style={styles.ul}>
                                <li style={styles.li}><Link to="/menu/note">note</Link></li>
                                <li style={styles.li}><Link to='/menu/user'>user</Link></li>
                            </ul>
                        </div>
                        <div style={styles.middle}>
                            <div style={styles.left}>
                                <Switch >
                                    <Route exact path='/' component={Group}/>
                                    <Route path='/menu/:group' component={Group}></Route>
                                </Switch>
                            </div>
                            <div style={styles.main}>
                            <Switch >
                                    <Route path='/menu/:group/:detailId' component={Detail}></Route>
                            </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}

const styles = {
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
export default IndexRouter;