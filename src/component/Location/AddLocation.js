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
        // this.props.history.go(-1)
        console.log(this.state)
    };
    componentDidMount(){
        document.title="添加发货地址";
    }
}

export default AddLocation;
