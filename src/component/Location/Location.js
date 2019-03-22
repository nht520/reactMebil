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
class Location extends Component{
    constructor(props){
        super(props);
        this.state=({
            list:[
                {
                    id:1,
                    title:"奈何天",
                    loctitle:"158****1345",
                    location:"四川省 泸州市  九龙坡区  杨家坪步行街",
                }
            ]
        })
    }
    render(){
        return(
            <Fragment>
                <LoactionWrapper>
                    <ul>
                        <li>
                            <h3>奈何天<span>158****1345</span></h3>
                        </li>
                        <li>
                            <h5>四川省 泸州市  九龙坡区  杨家坪步行街四川省 泸州市  九龙坡区  杨家坪步行街</h5>
                        </li>
                        <li>
                            <div className="hr">
                            </div>
                        </li>
                        <li className="loaction">
                            <Flex>
                                <Flex.Item>
                                    <span className="default">默认</span>
                                </Flex.Item>
                                <Flex.Item>
                                    <Flex>
                                        <Flex.Item onClick={this.compileChang}>
                                            <img src={del} alt="编辑"/>
                                            <span> 编辑</span>
                                        </Flex.Item>
                                        <Flex.Item onClick={this.delChang}>
                                            <img src={compile} alt="删除"/>
                                            <span> 删除</span>
                                        </Flex.Item>
                                    </Flex>
                                </Flex.Item>
                            </Flex>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <h3>奈何天<span>158****1345</span></h3>
                        </li>
                        <li>
                            <h5>四川省 泸州市  九龙坡区  杨家坪步行街四川省 泸州市  九龙坡区  杨家坪步行街</h5>
                        </li>
                        <li>
                            <div className="hr">
                            </div>
                        </li>
                        <li className="loaction">
                            <Flex>
                                <Flex.Item>
                                    <span className="common">普通</span>
                                </Flex.Item>
                                <Flex.Item>
                                    <Flex>
                                        <Flex.Item onClick={this.compileChang}>
                                            <img src={del} alt="编辑"/>
                                            <span> 编辑</span>
                                        </Flex.Item>
                                        <Flex.Item onClick={this.delChang}>
                                            <img src={compile} alt="删除"/>
                                            <span> 删除</span>
                                        </Flex.Item>
                                    </Flex>
                                </Flex.Item>
                            </Flex>
                        </li>
                    </ul>
                     <AddButton>
                         <Link to="/AddLocation">添加发货地址</Link>
                     </AddButton>
                </LoactionWrapper>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title="我的地址"
    }
    compileChang = () =>{
        console.log("compileChang")
    }
    delChang = () =>{
        console.log("delChang")
    }
}
export default Location;
