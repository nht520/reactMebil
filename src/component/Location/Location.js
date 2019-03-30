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

class Location extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"123",
            checkedA: false,
            checkedB: true,
            list:[
                {
                    id:1,
                    user:"奈何天",
                    iphone:"158****1345",
                    location:"四川省 泸州市  九龙坡区  杨家坪步行街四川省 泸州市  九龙坡区  杨家坪步行街",
                    lcStatus:"默认",
                    checked:"checkedA",
                },
                {
                    id:2,
                    user:"别经年",
                    iphone:"158****1345",
                    location:"四川省 泸州市  渝中区 泸州市 解放碑步行街",
                    lcStatus:"普通",
                    checked:"checkedB",
                }
            ]
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
                                        <h3>{item.user}<span>{item.iphone}</span></h3>
                                    </li>
                                    <li>
                                        <h5>{item.location}</h5>
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
                                                <Flex.Item onClick={this.compileChang}>
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
    compileChang = () =>{
        this.props.history.push('/AddLocation');
    };
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
    }
}
export default Location;
