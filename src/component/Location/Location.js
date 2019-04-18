import React,{ Component,Fragment } from "react";
import {
    LoactionWrapper
} from "../style";
import del from "../../statics/asstas/del.png";
import compile from "../../statics/asstas/compile.png";
import {
    Flex
} from "antd-mobile";
import storage from "../../statics/storage";
import Button from "@material-ui/core/Button/Button";
import Axios from "axios";
class Location extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"123",
            checkedA: false,
            checkedB: true,
            list:[ ]
        })
    }
    render(){
        const { list } =  this.state;
        return(
            <Fragment>
                <LoactionWrapper>
                    {
                        list.map((item,key)=>(
                            <ul key={key} >
                                <div onClick={this.locationChange.bind(this,key)}>
                                    <li>
                                        <h3>{item.userName}<span>{item.userMobile}</span></h3>
                                    </li>
                                    <li>
                                        <h5>{item.userAddress}</h5>
                                    </li>
                                    <li>
                                        <div className="hr">
                                        </div>
                                    </li>
                                </div>
                                <li className="loaction">
                                    <Flex>
                                        <Flex.Item>
                                            {/*<Switch*/}
                                                {/*checked={this.state.checkedA}*/}
                                                {/*onChange={this.handleChange('checkedA')}*/}
                                                {/*value={list.checked}*/}
                                            {/*/>*/}
                                            {/*<Switch value={list.checked} onChange={this.locationChange.bind(this,key)}/>*/}
                                            <span className="red">{item.lcStatus}</span>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Flex>
                                                <Flex.Item onClick={this.compileChang.bind(this,key)}>
                                                    <img src={del} alt="编辑"/>
                                                    <span> 编辑</span>
                                                </Flex.Item>
                                                <Flex.Item
                                                    onClick={this.delChang.bind(this,key)}
                                                >
                                                    <img src={compile} alt="删除"/>
                                                    <span> 删除</span>
                                                </Flex.Item>
                                            </Flex>
                                        </Flex.Item>
                                    </Flex>
                                </li>
                            </ul>
                        ))
                    }
                    <Button variant="contained" size="large" color="primary" className="addlcinButton" onClick={this.compileChang}>
                        添加发货地址
                    </Button>
                </LoactionWrapper>
            </Fragment>
        )
    }
    locationChange = (key) =>{
        //获取当前点击的key
        this.locList=this.state.list;
        console.log(this.locList[key]);
        //将数据存储在storage
        storage.set("location",this.locList[key]);
        this.props.history.go(-1)
    };
    compileChang = (key) =>{
        this.locList=this.state.list;
        console.log(this.locList[key]);
        storage.set("compileLocation",this.locList[key]);
        this.props.history.push('/AddLocation');
    };
    //获取地址列表
    addressadd =()=>{
        const api = window.g.addressadd;
        const user = storage.get("user");
        const param = {
              params:{
                  size:"10000",
                  id:user.id
              }
        };
        Axios.get(api,param).then((res)=>{
            console.log(res);
            this.setState({
                list:res.data.records
            })
        }).catch((err)=>{
            console.log(err)
        })
    };
    //编辑地址
    delChang = (key) =>{
        //console.log("删除");
        //console.log(this.locList[key].id);
        let tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
        //console.log(this.state.list);
    };
    componentDidMount(){
        document.title="我的地址";
        this.addressadd();
    }
}
export default Location;
