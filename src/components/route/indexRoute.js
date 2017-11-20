import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router,Link,Switch} from 'react-router-dom';
import HeaderRoute from './headerRoute';
import MenuRoute from './menuRoute';

const Group = ({match:{params}}) => {
    // 请求日志对应的路由信息，引用第三方组件,带分组框
    let group = params.group;
}
// 详情页的路由以detail为开头，后面跟着父组件id和详情的id
const Detail = ({match:{params}}) => {
    let parentId = params.parentId;
    let detailId = params.detailId;
}
// 修改右键的默认行为，增加添加功能，添加时时候先调接口创建一个空文档，并且返回对应id，在已有的路由里面添加对应的路由
class IndexRouter extends Component{
    render(){
        return (
            <div>
                <Router>
                    <div>
                        <ul>
                            <li><Link to="/menu/note">note</Link></li>
                            <li><Link to='/menu/user'>user</Link></li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <Switch>
                                <Route exact path='/' component={}/>
                                <Route path='/menu/:group' Component={Group}></Route>
                            </Switch>
                        </div>
                        <div>
                        <Switch>
                                <Route path='/detail/:parentId/:detailId' Component={Detail}></Route>
                            </Switch>
                        </div>
                    </div>
                </Router>
            </div>
        );
    }
}