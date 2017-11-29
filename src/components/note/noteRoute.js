import React,{Component} from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.min.css'
import NoteDetail from './note_detail';
import NoteAdd from './note_add'


class NoteRoute extends Component{
    constructor(props){
        super(props)
        this.state={
            detailId:this.props.detailId,
            parentId:this.props.parentId,
            detailType:this.props.detailType
        }
    }
  
    render(){
        let detailType = this.state.detailType;
        let item;
        if(detailType == 'detail'){
            item = <NoteDetail detailId={this.props.detailId} parentId={this.props.parentId}>{this.props.detailId}</NoteDetail>
        }else{
            item = <NoteAdd detailId={this.props.detailId} parentId={this.props.parentId} detailType={this.props.detailType}></NoteAdd>
        }
        return (
            item
        );
    }
}


export default NoteDetail;