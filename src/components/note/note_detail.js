import React,{Component} from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.min.css';
import Pubsub from 'pubsub-js';
import HttpUtils from '../common/http'


class NoteDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            detailId:this.props.detailId,
            parentId:this.props.parentId
        }
    }
    componentDidMount(){
        this.initData(this.props);
    }
    componentWillReceiveProps(nextProps){
        let state = {}
        console.log(nextProps)
        this.initData(nextProps);
    }
    initData(props){
        // 获取属性，详情id
        let detailId = props.detailId;
        let parentId = props.parentId;
        console.log('init'+detailId);
        // 调用接口查询数据
        let detail = {}
        detail.parentId = parentId;
        detail.author = 'jack'
        detail.createTime = '2017-10-12 12:12:12'
        detail.title = 'java多线程'

        detail.content = parentId +' ' + detailId + `Java安监局地方是否水电
        折覆餗快递费是的那份费是的发水电费是的方式地方啥开发看看能否说的分开马餗快递费是的那份
        `// 修改属性
        this.setState(detail)

    }
    addNote(){
        Pubsub.publish('addNode',{node:{id:8,name:'python',isFile:1},parentId:this.props.parentId})
    }
    editNote(){
        // alert('编辑id为'+this.props.a);
        let req = {};
        let params = {}
        req.signStr = '322'
        req.id = 123
        req.sessionId = 12312312
        params.req = req
        params.sessionId = 2342342
        HttpUtils.httpPost("http://localhost:8083/loanPost/barringCarNotice?sessionId=23",params,(data)=>alert(JSON.stringify(data)),(err)=>alert('err'+JSON.stringify(err)))
    }
    render(){
        return (
            <div style={styles.container}>
                <div style={styles.editDiv}>    
                    <Button onClick={this.addNote.bind(this)} style={styles.editBtn}>添加{this.props.parentId}</Button>
                    <Button onClick={this.editNote.bind(this)} style={styles.editBtn}>编辑</Button></div>
                <div style={styles.box}>
                    <span style={styles.boxDetail}>标题</span>
                    <span>{this.state.title}</span>
                </div>
                <div style={styles.box}>
                    <span style={styles.boxDetail}>作者</span>
                    <span>{this.state.author}</span>
                    <span>{this.state.createTime}</span>
                </div>
                <div style={styles.content}>
                    <span style={styles.contentDetail}>内容</span>
                    <span>{this.state.content}</span>
                </div>
            </div>
        );
    }
}
const styles = {
    container:{
        margin:0,
        width:'100%',
        height:'100%',
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        alignItems:'flex-start'
    },
    box:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-start',
        marginBottom:20
    },
    boxDetail:{
        marginRight:20,
        fontSize:16
    },
    editDiv:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        width:'100%',
        paddingRight:10,
    },
    editBtn:{
        marginRight:10
    },
    content:{
        display:'flex',
        flexDirection:'column',
        justifyContent:'flex-start',
        marginBottom:20
    },
    contentDetail:{
        marginRight:20,
        fontSize:16,
        marginBottom:15
    },

}

export default NoteDetail;