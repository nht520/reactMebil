import React,{ Component,Fragment } from "react";
// import {Route, Link } from "react-router-dom";
//引用样式
//引用redux
import store from "../store/index";
// import { actionCreators } from '../store';
import { initListAction } from '../store/actiocnCreators';
import {
    LoginWrapper
} from "./style.js";
// //引用ui组件
import Button from '@material-ui/core/Button';
import {
    Link
} from "react-router-dom";
import { Toast } from "antd-mobile";
import Axios from "axios";
import storage from "../statics/storage";
class Login extends Component{
    constructor(props){
        super(props);
        this.state=({
            username:"",
            password:""
        })
    }
    render(){
        return(
            <Fragment>
                <LoginWrapper>
                    <h1>登录</h1>
                    <input type="text" onChange={this.username} placeholder="请输入账号"/>
                    <input type="password" onKeyDown={this.inputKeyDown} onChange={this.password} placeholder="请输入密码"/>
                    <Button  className="logButton" onClick={this.handChang}>
                        登录
                    </Button>
                    <h5><span className="register"><Link to="/Register">注册</Link></span><Link to="/Register">忘记密码？</Link></h5>
                </LoginWrapper>
            </Fragment>
        )
    }
    //判断用户是否登录
    register = () =>{
        this.user = storage.get("user");
        if(this.user==null || this.user===undefined){
            this.props.history.push('/');
        }else if(this.user!==null || this.user!==undefined){
            this.setState({
                name:this.realName
            });
            this.props.history.push('/Layout');
        }
    };
    //判断是否按下了回车
    inputKeyDown = (e) =>{
        if (e.keyCode === 13) {
            this.handChang()
        }
    };
    username = (e) =>{
        this.setState({
            username:e.target.value
        })
    };
    password = (e) =>{
        this.setState({
            password:e.target.value
       })
    };
    showToast = () => {
        Toast.info(this.state.text);
    };
    handChang =() => {
        const that = this;
        const { username,password } = this.state;
        if (username === '' || username === null) {
            this.setState({
                text:"请输入账号",
            },()=>that.showToast())
        }
        else if (password === '' || password === null) {
            this.setState({
                text:"请输入密码",
            },()=>that.showToast());
        }
        else if (/^[\d\D]{6,12}$/.test(password) === false) {
            this.setState({
                text:"密码在6-12位英文数字之间",
            },()=>that.showToast());
        }else {
            //把用户名  密码统一存在_param里面  把_param提交到后台
            const _param = new URLSearchParams();
                  _param.append("memberPhone",username);
                  _param.append("memberPassword",password);
            //获取数据将数据存在store
            var api =window.g.login;
            Axios.post(api,_param).then((res)=>{
                console.log(res);
                if (res.status===200){
                    const code =res.data.code;
                    if (code === "200"){
                        //将数据存在storage
                        storage.set("user",res.data.data);
                        const data = res.data.data;
                        const action = initListAction(data);
                              store.dispatch(action);
                        //成功并跳转
                        that.props.history.push('/Layout');
                    } else if( code === "0" ){
                        this.setState({
                            text:res.data.msg,
                        },()=>that.showToast());
                    }else if( code === "500"){
                        this.setState({
                            text:res.data.msg,
                        },()=>that.showToast());
                    }else{
                        //如果登录失败 就返回错误信息
                        this.setState({
                            text:res.data.msg,
                        },()=>that.showToast());
                    }
                }
            },(err)=>{
                console.log(err)
            })
        }
    };
    componentDidMount(){
        document.title = "登录";
        this.register();
    }
}
export default Login
