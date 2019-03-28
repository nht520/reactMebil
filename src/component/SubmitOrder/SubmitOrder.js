import React,{ Component,Fragment } from "react";
import {
    SubmitWrapper, Delivery, Take, SubmitList,Commodity,
    OrdeItem, OrdeLeft, OrdeRight, OneLeft, TwoRight, OrdeList,DateilsButton
} from "../style";
import left from "../../statics/asstas/left.png";
import { Flex,Button } from "antd-mobile";
import storage from "../../statics/storage";
class SubmitOrder extends Component{
    constructor(props){
        super(props);
        this.state=({
            orderList:[
                {
                    id:1,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    price:"352.00",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    quantity:"1",
                },
                {
                    id:2,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    price:"352.00",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    quantity:"1",
                },
            ],
            sum:"9999.00",
            displayName:"none",
            displaysite:"block",
            userName:"奈何天",
            ipHone:"15803614645",
            site:"重庆市，城口县，巴山，高楠，8组6号。"
        })
    }
    render(){
        const { orderList,userName,ipHone,site,displayName,displaysite } = this.state;
        return(
            <Fragment>
                <SubmitWrapper>
                    <Delivery >
                        {/*配送方式*/}
                        <Flex className="sbmtDvey">
                            <Flex.Item className="delivery">
                                配送方式
                            </Flex.Item>
                            <Flex.Item className="left">
                                快递发货
                            </Flex.Item>
                        </Flex>
                        {/*收货人信息*/}
                        <Take onClick={this.submit} style={{ display:displayName }}>
                            <ul>
                                <li>
                                    <h2>收货人信息</h2>
                                </li>
                                <li>
                                    姓名：{userName}
                                </li>
                                <li>
                                    电话：{ipHone}<span className="right">
                                <img src={ left } alt="我是图片">
                                </img></span>
                                </li>
                                <li>
                                    地址：{site}
                                </li>
                            </ul>
                        </Take>
                        <Take onClick={this.submit} style={{ display:displaysite }}>
                            <ul>
                                <li>
                                    请选择地址<span className="right">
                                <img src={ left } alt="我是图片">
                                </img></span>
                                </li>
                            </ul>
                        </Take>
                    </Delivery>
                    {/**/}
                    <SubmitList>
                        <h2>累计2件商品</h2>
                        <OrdeList>
                            {
                                orderList.map((v,key)=>(
                                    <OrdeItem key={key}>
                                        <OrdeLeft>
                                            <img src={v.imgurl} alt="img"/>
                                        </OrdeLeft>
                                        <OrdeRight>
                                            <Flex className="title">
                                                <Flex.Item>{v.title}</Flex.Item>
                                                <Flex.Item className="payment">￥{v.price}</Flex.Item>
                                            </Flex>
                                            <OneLeft className="ordDtels">
                                                {v.details}
                                            </OneLeft>
                                            <TwoRight>
                                                X{v.quantity}
                                            </TwoRight>
                                        </OrdeRight>
                                    </OrdeItem>
                                ))
                            }
                        </OrdeList>
                        <Commodity>
                            <ul>
                                <li>
                                    <span className="left">商品数量</span>
                                    <span className="right">5</span>
                                </li>
                                <li>
                                    <span className="left">商品总额</span>
                                    <span className="right">￥352.00</span>
                                </li>
                                <li>
                                    <span className="left">运费</span>
                                    <span className="right">￥352</span>
                                </li>
                                <li className="subsolid">
                                    <span className="left">实付款</span>
                                    <span className="right">￥{this.state.sum}</span>
                                </li>
                            </ul>
                        </Commodity>
                    </SubmitList>
                </SubmitWrapper>
                {/*发货*/}
                <DateilsButton>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item className="shipments">￥{this.state.sum}</Flex.Item>
                        <Flex.Item><Button onClick={this.imdeChange}>提交订单</Button></Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title="提交订单";
        this.submitOrder();
    }
    submit =()=>{
        this.props.history.push('/Location');
    };
    submitOrder=()=>{
        this.site = storage.get("location");
        console.log(this.site+"===========");
        if (this.site==null) {
            this.setState({
                displayName:"none",
                displaysite:"block",
            })
        }else {
            this.setState({
                displayName:"block",
                displaysite:"none",
                userName:this.site.user,
                ipHone:this.site.iphone,
                site:this.site.location,
            })
        }
        storage.remove("location");
    }
}
export default SubmitOrder;
