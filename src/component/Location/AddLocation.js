import React,{ Component,Fragment } from "react";
import {
    AddWrapper, Addleft, Addright
} from "../style";
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import Button from "@material-ui/core/Button/Button";
import {Toast,
    List,Picker
} from "antd-mobile";
class AddLocation extends Component {
    constructor(props){
        super(props);
        this.state=({
            username:"",
            iphone:"",
            priker: [
                {
                    label: '北京',
                    value: '01',
                    children: [
                        {
                            label: '东城区',
                            value: '01-1',
                        },
                        {
                            label: '西城区',
                            value: '01-2',
                        },
                        {
                            label: '崇文区',
                            value: '01-3',
                        },
                        {
                            label: '宣武区',
                            value: '01-4',
                        },
                    ],
                },
                {
                label: '浙江',
                value: '02',
                children: [
                {
                    label: '杭州',
                    value: '02-1',
                    children: [
                        {
                            label: '西湖区',
                            value: '02-1-1',
                        },
                        {
                            label: '上城区',
                            value: '02-1-2',
                        },
                        {
                            label: '江干区',
                            value: '02-1-3',
                        },
                        {
                            label: '下城区',
                            value: '02-1-4',
                        },
                    ],
                },
                {
                    label: '宁波',
                    value: '02-2',
                    children: [
                        {
                            label: 'xx区',
                            value: '02-2-1',
                        },
                        {
                            label: 'yy区',
                            value: '02-2-2',
                        },
                    ],
                },
                {
                    label: '温州',
                    value: '02-3',
                },
                {
                    label: '嘉兴',
                    value: '02-4',
                },
                {
                    label: '湖州',
                    value: '02-5',
                },
                {
                    label: '绍兴',
                    value: '02-6',
                },
              ],
            }],
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
                                <Picker
                                    title="选择地区"
                                    data={this.state.priker}
                                    value={this.state.value}
                                    onChange={v => this.setState({ value: v })}
                                    onOk={v => this.setState({ value: v })}
                                >
                                    <List.Item onClick={this.addChange}>
                                    </List.Item>
                                </Picker>
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
    addChange=()=>{
        console.log(this.state.value)
    };
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
       }else if(this.state.value === "" || this.state.value === undefined){
           this.setState({
               text:"请选择区域",
           },()=>this.showToast())
       } else if(this.state.site === "" || this.state.site === undefined){
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
