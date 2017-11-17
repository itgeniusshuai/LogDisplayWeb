import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'antd';
import 'antd/dist/antd.min.css'
import theme from 'react-quill/dist/quill.snow.css';
import ReactQuill, { Quill, Mixin, Toolbar } from 'react-quill';



const Option = Select.Option;
const modules= {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

class NoteAdd extends Component{
    constructor(props){
        super(props);
        this.state={
            title:'',
            author:'',
            content:'',
            noteType:'',
            personalType:'',
        }
    }
    componentDidMount(){
  
    }
    checkType(e){
        console.log(e);
        this.setState({
            noteType:e
        })
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
    handleChange(){

    }

    render(){
        return (
            <div>
                <div>
                    <span>类型：</span>
                    <Select onChange={this.checkType.bind(this)} style={{ width: 120 }}defaultValue='1'>
                        <Option key='1'>原创</Option>
                        <Option key='2'>转载</Option>
                        <Option key='3'>其他</Option>
                    </Select>
                </div>
                <div>
                    <span>标题：</span>
                    <input  type="text" value={this.state.title} onChange={this.changeTitle.bind(this)}/>
                </div>
                <div>
                <ReactQuill value={this.state.content}
                    modules={modules}
                  onChange={this.handleChange} />
                </div>
            </div>
        );
    }
}

export default NoteAdd;