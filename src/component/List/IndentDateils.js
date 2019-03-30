import React,{ Component,Fragment } from "react";
import { Flex} from "antd-mobile";
import Button from "@material-ui/core/Button/Button";
import {
    IndentDts, IntList, IntItem, IntLeft, IntRight, InOLeft, InTRight,
    IntUl, IntLi, IntConte, DateilsButton
} from "../style";
// import {
//     Link
// } from "react-router-dom";
import banner from "../../statics/asstas/touxiang.png";
import storage from "../../statics/storage";
class IndentDateils extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"订单详情",
            displayName:"none",
            show:true
        })
    }
    render(){
        const {displayName} = this.state;
        return(
            <Fragment>
                {/*<IndentWrapper>*/}
                <IndentDts>
                        <Flex className="indentHeader">
                            <Flex.Item>供货商：<span>华佗医药</span></Flex.Item>
                            <Flex.Item className="religion">待收货</Flex.Item>
                        </Flex>
                        <IntList>
                            <IntItem>
                                <IntLeft>
                                    <img src={banner} alt="img"/>
                                </IntLeft>
                                <IntRight>
                                    <Flex className="title">
                                        <Flex.Item>炸鸡汉堡王</Flex.Item>
                                        <Flex.Item className="state">￥352.00</Flex.Item>
                                    </Flex>
                                    <InOLeft className="indDtels">
                                        鸡肉肉质细嫩，滋味鲜美，由于其味
                                        较淡，因此可使用于各种料理中的...
                                    </InOLeft>
                                    <InTRight>
                                        X1
                                    </InTRight>
                                </IntRight>
                            </IntItem>
                        </IntList>
                       {/**/}
                        <IntConte>
                            <IntUl>
                                <IntLi>
                                    <Flex>
                                        <Flex.Item>商品总额</Flex.Item>
                                        <Flex.Item className="left">￥352.00</Flex.Item>
                                    </Flex>
                                </IntLi>
                                <IntLi>
                                    <Flex>
                                        <Flex.Item>运费</Flex.Item>
                                        <Flex.Item className="left">￥3</Flex.Item>
                                    </Flex>
                                </IntLi>
                                <IntLi>
                                    <Flex className="titDts">
                                        <Flex.Item>实付款</Flex.Item>
                                        <Flex.Item className="left">￥999.99</Flex.Item>
                                    </Flex>
                                </IntLi>
                                <IntLi>
                                    <div className="site">
                                        姓名: <span>奈何天</span>
                                    </div>
                                </IntLi>
                                <IntLi>
                                    <div className="site">
                                      电话: <span>15803614645</span>
                                    </div>
                                </IntLi>
                                <IntLi className="site">
                                    <div className="site">
                                    地址: <span className="location">重庆市-南岸区-高年轻椒曙曙  南岸区。响水路28号 </span>
                                    </div>
                                </IntLi>

                               <IntLi>
                                   订单编号：<span>548547878787</span>
                               </IntLi>
                                <IntLi>
                                    订单编号：<span>2015-02-06  16:40</span>
                                </IntLi>
                                <IntLi>
                                    支付方式：<span>在线支付</span>
                                </IntLi>
                            </IntUl>
                        </IntConte>
                       {/*联系*/}
                </IndentDts>
                {/*购买*/}
                <DateilsButton style={{ display:displayName }}>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item>
                            {/*<Button className="cancel"></Button>*/}
                            <Button variant="outlined" size="medium" color="primary" className="cancel" >
                                取消订单
                            </Button>
                        </Flex.Item>
                        <Flex.Item>
                            <Button variant="outlined" size="medium" color="primary" className="ordering">
                                去付款
                            </Button>
                            {/*<Button></Button>*/}
                        </Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    }
    condition=()=>{
        //获取当前点击的状态值
        this.lcList = storage.get("lcList");
        this.realName=this.lcList.states;
        // console.log(this.realName);
        if (this.realName==="待发货"){
            this.setState({
                displayName:"none"
            })
        }else if(this.realName==="待付款"){
            this.setState({
                displayName:"block"
            })
        }else if(this.realName==="已完成"){
            this.setState({
                displayName:"none"
            })
        }
    }
    componentDidMount (){
        //获取动态路由传值
        let _id = this.props.match.params.id;
        console.log(_id);
        document.title = this.state.title;
        //
        this.condition();
    }
}

export default IndentDateils;
