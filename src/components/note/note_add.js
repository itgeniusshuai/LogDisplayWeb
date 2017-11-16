import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { Select } from 'antd';
import Simditor from 'simditor';
import $ from 'jquery';
import 'simditor/styles/simditor.css';



const Option = Select.Option;


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
        var textbox = ReactDOM.findDOMNode(this.refs.textarea);
        this.editor = new Simditor({
          textarea: $(textbox),
          toolbar: ['title', 'bold', 'italic', 'underline', 'strikethrough', 'fontScale', 'color',
            'ol', 'ul', 'blockquote', 'code', 'table', 'link', 'image', 'indent', 'outdent', 'alignment', 'hr']
        });
        this.editor.on("valuechanged", (e, src) => {
          this.props.fields.body.onChange(this.editor.getValue());
        });
    }
    checkType(e){
        console.log(e)
    }
    render(){
        return (
            <div>
                <div>
                    <span>类型：</span>
                    <Select onChange={this.checkType}>
                        <Option key='1'></Option>
                        <Option key='2'></Option>
                        <Option key='3'></Option>
                    </Select>
                </div>
                <div>
                    <span>标题：</span>
                    <input  type="text" value={this.state.title}/>
                </div>
                <div>
                    <textarea className="form-control" ref='textarea' rows="50" />
                </div>
            </div>
        );
    }
}

export default NoteAdd;