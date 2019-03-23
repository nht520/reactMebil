import React,{ Component,Fragment } from "react";
import {
    LoactionWrapper,AddButton
} from "../style";
import del from "../../statics/asstas/del.png";
import compile from "../../statics/asstas/compile.png";
import {
    Flex
} from "antd-mobile";
import { Link } from "react-router-dom";
import storage from "../../statics/storage";
class Location extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"123",
            list:[
                {
                    id:1,
                    user:"奈何天",
                    clsName:"dd",
                    iphone:"158****1345",
                    location:"四川省 泸州市  九龙坡区  杨家坪步行街四川省 泸州市  九龙坡区  杨家坪步行街",
                    lcStatus:"默认",
                },
                {
                    id:2,
                    clsName:"ff",
                    user:"别经年",
                    iphone:"158****1345",
                    location:"四川省 泸州市  九龙坡区  杨家坪步行街四川省 泸州市  九龙坡区  杨家坪步行街",
                    lcStatus:"普通",
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
                            <ul key={key} onClick={this.locationChange.bind(this,key)}>
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
                                <li className="loaction">
                                    <Flex>
                                        <Flex.Item>
                                            <span className={item.clsName}>{item.lcStatus}</span>
                                        </Flex.Item>
                                        <Flex.Item>
                                            <Flex>
                                                <Flex.Item onClick={this.compileChang}>
                                                    <img src={del} alt="编辑"/>
                                                    <span> 编辑</span>
                                                </Flex.Item>
                                                <Flex.Item
                                                    onClick={this.delChang}
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
                     <AddButton>
                         <Link to="/AddLocation">添加发货地址</Link>
                     </AddButton>
                </LoactionWrapper>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title="我的地址";
        this.locationChange();
    }
    locationChange = (key) =>{
        //获取当前点击的key
        let tempList=this.state.list;
        console.log(tempList[key]);
        //将数据存储在storage
        storage.set("location",tempList[key]);
        // console.log(tempList.lcStatus);
        // console.log(this.state.list.lcStatus)
        // if (tempList[key].lcStatus==="默认"){
        //     this.setState({
        //         clsName:red
        //     })
        // }
    };
    compileChang = () =>{
        this.props.history.push('/AddLocation');
    };
    delChang = (key) =>{
        // console.log("删除");
        let tempList=this.state.list;
        tempList.splice(key,1);
        this.setState({
            list:tempList
        })
    }
}
export default Location;
