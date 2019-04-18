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
import Axios from  "axios";
import storage from "../../statics/storage";
class AddLocation extends Component {
    constructor(props){
        super(props);
        this.state=({
            username:"",
            iphone:"",
            priker: [
            ],
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
        console.log(this.state.label)
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
       if (this.state.username === "" || this.state.username === undefined){
           this.setState({
               text:"请输入收获人姓名",
           },()=>this.showToast())
       }else if(this.state.iphone === "" || this.state.iphone === undefined){
           this.setState({
               text:"请输入收获人电话",
           },()=>this.showToast())
       }else if( this.state.iphone.length <11 || this.state.iphone.length >11){
           this.setState({
               text:"电话号码位数错误",
           },()=>this.showToast())
       }else if(this.state.value === "" || this.state.value === undefined){
           this.setState({
               text:"请选择区域",
           },()=>this.showToast())
       } else if(this.state.site === "" || this.state.site === undefined){
           this.setState({
               text:"请输入详细地址",
           },()=>this.showToast())
       }else {
           const userId = storage.get("user");
           const api = window.g.addressadd;
           const lcxvalue =this.state.value;
           const provinceAddress =lcxvalue[0];
           const cityAddress =lcxvalue[1];
           const countyAddress =lcxvalue[2];
           const prame =new URLSearchParams();
                 prame.append("distributorId",userId.id);
                 prame.append("userName",this.state.username);
                 prame.append("userMobile",this.state.iphone);
                 prame.append("provinceAddress",provinceAddress);
                 prame.append("cityAddress",cityAddress);
                 prame.append("countyAddress",countyAddress);
                 prame.append("userAddress",this.state.site);
           Axios.post(api,prame).then((res)=>{
               console.log(res)
           }).catch((err)=>{
               console.log(err)
           })
       }
    };
    getProvince=()=>{
        var url = window.g.getProvince;
        var province = [];
        Axios.get(url).then((res)=>{
            var data = res.data.data;
            for(var i =0;i<data.length;i++){
                var json = {};
                json['label'] = data[i];
                json['value']=data[i];
                json['children'] = this.getCity(data[i]);
                province.push(json);
            }
            this.setState({priker:province});
        }).catch((err)=>{
            console.log(err);
        })
    };
    getCity=(province)=>{
        var url = window.g.getCity;
        var param = {
            params:{
                province:province,
            }
        };
        var city = [];
        Axios.get(url,param).then((res)=>{
            var data = res.data.data;
            for(var i =0;i<data.length;i++){
                var json = {};
                json['label'] = data[i];
                json['value'] = data[i];
                json['children'] = this.getCounty(data[i]);
                city.push(json);
            }
        }).catch((err)=>{
            console.log(err);
        });
        return city;
    };
    getCounty=(city)=>{
        var url = window.g.getCounty;
        var param = {
            params:{
                city:city,
            }
        };
        var county = [];
        Axios.get(url,param).then((res)=>{
            var data = res.data.data;
            for(var i =0;i<data.length;i++){
                var json = {};
                json['label'] = data[i];
                json['value'] = data[i];
                county.push(json);
            }
        }).catch((err)=>{
            console.log(err);
        });
        return county;
    };
    componentDidMount(){
        this.getProvince();
        document.title="添加发货地址";
    }
}

export default AddLocation;
