import React,{Component} from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.min.css'


class NoteDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            detailId:this.props.detailId,
            parentId:this.props.parentId
        }
    }
    componentDidMount(){
        this.initData();
    }
    componentWillReceiveProps(nextProps){
        let state = {}
        console.log(nextProps)
        this.setState({
            detailId:nextProps.detailId,
            parentId:nextProps.parentId
        })
        this.initData();
    }
    initData(){
        // 获取属性，详情id
        let detailId = this.props.detailId;
        let parentId = this.props.parentId;
        console.log(detailId);
        // 调用接口查询数据
        let detail = {}
        detail.parentId = parentId;
        detail.author = 'jack'
        detail.createTime = '2017-10-12 12:12:12'
        detail.title = 'java多线程'

        detail.content = parentId +' ' + detailId + `Java安监局地方是否水电
        df
        sdf
        sd
        fs
        df\n<br/>
        sdf
        s
        dfs
        df
        sd
        fs
        f
        sd
        fsd
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份费是的发水电费是的方式地方啥开发看看能否说的分开马赛克发上岛咖啡鼎折覆餗快递费是的那份
        `// 修改属性
        this.setState(detail)

    }
    addNote(){
        alert('父id为'+this.props.parentId+'添加子文档');
    }
    editNote(){
        alert('编辑id为'+this.props.detailId);
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
        justifyContent:'center',
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