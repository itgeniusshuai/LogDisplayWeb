import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import { Tree } from 'antd';
import Pubsub from 'pubsub-js'

const TreeNode = Tree.TreeNode;

class NoteTree extends Component{
    constructor(props){
        super(props)
        this.state={
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
            <Tree showLine 
                onSelect={(selectedKeys, info) => {
                    let selectedKey = selectedKeys[0];
                }} 
                onRightClick={({event,node}) =>{
                    console.log(node)
                }}
            >
                {loadTreeNodes(this.state.noteTrees,0)}
            </Tree>
        );
    }
}



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


export default NoteTree;

