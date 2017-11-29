import React,{Component} from 'react';
import { Input, Button } from 'antd';
import 'antd/dist/antd.min.css'
import theme from 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';

const modules= {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
};

const styles = {
    container:{
        width:'80%',
        margin: 'auto',
        padding:10,
        height:'100%',
    },
    item:{
        marginTop:10,
        flexDirection:'column'
    },
    itemContent:{
        marginTop:10,
        flexDirection:'column',
        padding:2,
        height:500
    },
    subItemContent:{
        marginTop:5,
        marginBottom:2,
        height:450,
        borderRadius:40
    },
    subItem:{
        marginTop:5,
       
    },
    subItemText:{
        marginLeft:2,
        fontSize:18
    },
    noteType:{
        marginTop:10,
        width:'100%'
    },
    itemBtn:{
        display:'flex',
        marginTop:50,
        flex:1,
        flexDirection:'row-reverse',
        justifyContent:'right',
        width:'100%',
        height:50
    },
    commitBtn:{
        width:100,
        height:40
    }
}

class NoteAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            content:'',
            isEdit:this.props.isEdit?true:false
        }
    }
    componentDidMount(){
  
    }
    changeTitle(e){
        this.setState({
            title:e.target.value
        })
    }
    uploadImg(file,callback){
        const fileUrl = "http://tupian.enterdesk.com/2013/lxy/12/9/3/1.jpg"
        callback(fileUrl)
    }
    handleChange(text){
        this.setState({
            "content":text
        })
    }
    commitNote(e){
        // httpGet('http://www.baidu.com')
        // 父级目录由调用者通过属性传入
        const parentDir = this.props.parentDir;
        alert(JSON.stringify(this.state));
    }

    render(){
        return (
            <div style={styles.container}>
                <div style={styles.item}>
                    <span style={styles.subItemText}>标题：</span>
                    <Input style={styles.subItem} type="text" value={this.state.title} onChange={this.changeTitle.bind(this)}/>
                </div>
                <div style={styles.itemContent}>
                    <span style={styles.subItemText}>内容：</span>
                    <ReactQuill  style={styles.subItemContent} value={this.state.content}
                        modules={modules}
                    onChange={this.handleChange.bind(this)} />
                </div>
                <div style={styles.itemBtn}>
                    <Button style={styles.commitBtn} type="primary" onClick={this.commitNote.bind(this)}>确定</Button>
                </div> 
            </div>
        );
    }
}

export default NoteAdd;