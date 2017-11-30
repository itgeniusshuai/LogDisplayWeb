import {Button} from 'antd'
import React,{Component} from 'react';
import ReactDOM from 'react-dom';

class Test extends Component{
    constructor(props){
        super(props)
        this.state={
            data:noteTrees
        }
    }
    addNode(node, parentId, noteList){
        this.addNode1(node,parentId,noteList);
        noteList
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
            <div>
                <div>{JSON.stringify(this.state.data)}</div>
                {/* <Button onClick={() => THIS}></Button> */}
                <div><Button onClick={(e) => {this.addNode({id:8,name:'python',isFile:0},2,this.state.data)}}></Button></div>
            </div>
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

export default Test;