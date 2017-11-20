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
          <TreeNode title={item.name} key={item.id} dataRef={item}>
            {loadTreeNodes(item.subItems,group)}
          </TreeNode>
        );
      }
      var linkTo = '/menu/' + group +"/" + item.id;
      let title = (
          <Link to={linkTo}>{item.name}</Link>
      );
      return (
        <TreeNode title={title} key={item.id}  dataRef={item} >
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
            }} >
                {loadTreeNodes(noteTrees,group)}
            </Tree>
        );
    }else{
        return (
            <Tree onSelect={(selectedKeys, info) => {
                let selectedKey = selectedKeys[0];
            }}>
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
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <div>
                            <ul>
                                <li><Link to="/menu/note">note</Link></li>
                                <li><Link to='/menu/user'>user</Link></li>
                            </ul>
                        </div>
                        <div>
                            <div>
                                <Switch>
                                    <Route exact path='/' component={Group}/>
                                    <Route path='/menu/:group' component={Group}></Route>
                                </Switch>
                            </div>
                            <div>
                            <Switch>
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

export default IndexRouter;