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
            compile:[],
            priker: [
            ],
            site:"",
            checkedA: false,
            locUsernm:"请输入收获人姓名",
            locIphone:"请输入收获人电话",
            locAddress:"请输入详细地址"
        })
    }
    render(){
        const { locUsernm,locIphone,locAddress } =  this.state;
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
                                    placeholder={locUsernm}
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
                                    placeholder={locIphone}
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
                                    placeholder={locAddress}
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
    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
        if ( this.state.checkedA === false ){
            this.chack=1;
            console.log(this.chack)
        }else if ( this.state.checkedA === true ){
            this.chack=0;
            console.log(this.chack)
        }
    };
    addSave=()=>{
        const that =this;
        console.log(this.state);
        //保存并返回地址页面
       if (that.state.username === "" || that.state.username === undefined){
           that.setState({
               text:"请输入收获人姓名",
           },()=>that.showToast())
       }else if(that.state.iphone === "" || that.state.iphone === undefined){
           that.setState({
               text:"请输入收获人电话",
           },()=>that.showToast())
       }else if( that.state.iphone.length <11 || that.state.iphone.length >11){
           that.setState({
               text:"电话号码位数错误",
           },()=>that.showToast())
       }else if(that.state.value === "" || that.state.value === undefined){
           this.setState({
               text:"请选择区域",
           },()=>that.showToast())
       } else if(that.state.site === "" || that.state.site === undefined){
           that.setState({
               text:"请输入详细地址",
           },()=>that.showToast())
       }else {
           const api = window.g.addressadd;
           const lcxvalue =this.state.value;
           const provinceAddress =lcxvalue[0];
           const cityAddress =lcxvalue[1];
           const countyAddress =lcxvalue[2];
           const adresId = storage.get("user");
           const prame =new URLSearchParams();
                 prame.append("distributorId",adresId.id);
                 prame.append("userName",that.state.username);
                 prame.append("userMobile",that.state.iphone);
                 prame.append("provinceAddress",provinceAddress);
                 prame.append("cityAddress",cityAddress);
                 prame.append("countyAddress",countyAddress);
                 prame.append("userAddress",that.state.site);
                 prame.append("isDefault",that.chack);
           Axios.post(api,prame).then((res)=>{
               console.log(res);
                // this.props.history.push("/Location");
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
    compileLocation=()=>{
        const locinads = storage.get("compileLocation");
        if( locinads.locinads==null ||  locinads.locinads===undefined){
            this.setState({
                locUsernm:locinads.userName,
                locIphone:locinads.userMobile,
                locAddress:locinads.userAddress,
            })
        }
        // storage.remove("compileLocation");
    };
    componentDidMount(){
        this.getProvince();
        document.title="添加发货地址";
        // this.compileLocation();
    }
}

export default AddLocation;
