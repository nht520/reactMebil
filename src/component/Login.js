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
import { Button,Toast } from "antd-mobile";
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
                    <h5>忘记密码？</h5>
                    <Button className="logButton"  onClick={this.handChang}>登录</Button>
                </LoginWrapper>
            </Fragment>
        )
    }
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
        if (that.state.username === '' || that.state.username === null) {
            this.setState({
                text:"请输入账号",
            },()=>that.showToast())
        }
        else if (that.state.password === '' || that.state.password === null) {
            this.setState({
                text:"请输入密码",
            },()=>that.showToast());
        }
        else if (/^[\d\D]{6,12}$/.test(that.state.password) === false) {
            this.setState({
                text:"密码在6-12位英文数字之间",
            },()=>that.showToast());
        }else {
            //把用户名  密码统一存在_param里面  把_param提交到后台
            const _param = new URLSearchParams();
                  _param.append("empName",that.state.username);
                  _param.append("empPassword",that.state.password);
            //获取数据将数据存在store
            var api =window.g.LoginApi;
            Axios.post(api,_param).then((res)=>{
                console.log(res);
                if (res.status===200){
                    const code =res.data.status;
                    if (code === "1"){
                        //将数据存在storage
                        storage.set("user",res.data.data);
                        const data = res.data.data;
                        const action = initListAction(data);
                              store.dispatch(action);
                        //成功并跳转
                        that.props.history.push('/Layout');
                    } else if( code === "0" ){
                        this.setState({
                            text:res.data.message,
                        },()=>that.showToast());
                    }else if( code === "2"){
                        this.setState({
                            text:res.data.message,
                        },()=>that.showToast());
                    }else{
                        //如果登录失败 就返回错误信息
                        this.setState({
                            text:res.data.message,
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
    }
}
export default Login
