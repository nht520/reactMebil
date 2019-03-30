import React,{ Component,Fragment } from "react";
import {
    AddWrapper, Addleft, Addright
} from "../style";
// import {
//     Button,
//     InputItem
// } from "antd-mobile";
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button/Button";
import {Toast} from "antd-mobile";
class AddLocation extends Component {
    constructor(props){
        super(props);
        this.state=({
            username:"",
            iphone:"",
            site:"",
            checkedA: false,
        })
    }
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };
    render(){
        return(
            <Fragment>
                <AddWrapper>
                    <ul>
                        <li>
                            <Addleft>
                                收 货 人 :
                            </Addleft>
                            <Addright>
                                <Input
                                    onChange={this.username}
                                    className="adlcwidth"
                                    placeholder="请输入收货人姓名"
                                />
                            </Addright>
                        </li>
                        <li>
                            <Addleft>
                                联系电话 :
                            </Addleft>
                            <Addright>
                                <Input
                                    onChange={this.iphone}
                                    className="adlcwidth"
                                    placeholder="请输入联系电话"
                                />
                            </Addright>
                        </li>
                        <li>
                            <Addleft>
                                选择区域 :
                            </Addleft>
                            <Addright>
                                <Input
                                    className="adlcwidth"
                                    placeholder="请输入联系电话"
                                />
                            </Addright>
                        </li>
                        <li>
                            <Addleft>
                                详细地址 :
                            </Addleft>
                            <Addright>
                                <Input
                                    onChange={this.site}
                                    className="adlcwidth"
                                    placeholder="请输入详细地址"
                                />
                            </Addright>
                        </li>
                        <li>
                            <Addleft>
                                设为默认 :
                            </Addleft>
                            <Addright>
                                <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange('checkedA')}
                                    value="checkedA"
                                />
                            </Addright>
                        </li>
                    </ul>
                    {/**/}
                    <Button variant="contained" size="large" color="primary" className="addlcinButton" onClick={this.addSave}>
                        保存
                    </Button>
                </AddWrapper>
            </Fragment>
        )
    }
    //提示
    showToast = () => {
        Toast.info(this.state.text);
    };
    username=(e)=>{
        this.setState({
            username:e.target.value
        })
    };
    iphone=(e)=>{
        this.setState({
            iphone:e.target.value
        })
    };
    site=(e)=>{
        this.setState({
            site:e.target.value
        })
    };
    addSave=()=>{
        //保存并返回地址页面
        console.log(this.state);
       if (this.state.username === "" || this.state.username === undefined){
           this.setState({
               text:"请输入收获人姓名",
           },()=>this.showToast())
       }else if(this.state.iphone === "" || this.state.iphone === undefined){
           this.setState({
               text:"请输入收获人电话",
           },()=>this.showToast())
       }else if(this.state.site === "" || this.state.site === undefined){
           this.setState({
               text:"请输入详细地址",
           },()=>this.showToast())
       }
    };
    componentDidMount(){
        document.title="添加发货地址";
    }
}

export default AddLocation;
