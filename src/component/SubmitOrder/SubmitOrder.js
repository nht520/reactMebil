import React,{ Component,Fragment } from "react";
import {
    SubmitWrapper, Delivery, Take, SubmitList,Commodity,
    OrdeItem, OrdeLeft, OrdeRight, OneLeft, TwoRight, OrdeList,DateilsButton
} from "../style";
import left from "../../statics/asstas/left.png";
import { Flex } from "antd-mobile";
import storage from "../../statics/storage";
import Button from "@material-ui/core/Button/Button";
import Axios from "axios";
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
            site:"重庆市，城口县，巴山，高楠，8组6号。",
            orderInfo:[],
            orderGoods:[],
            deliverFreight:100,
            orderNum:0,
        })
    }
    render(){
        const {orderNum,orderInfo,orderGoods,userName,ipHone,site,displayName,displaysite,deliverFreight } = this.state;
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
                        <h2>累计{orderGoods.length}商品</h2>
                        <OrdeList>
                            {
                                orderGoods.map((v,key)=>(
                                    <OrdeItem key={key}>
                                        <OrdeLeft>
                                            <img src={v.mealEntity.mealImage} alt="img"/>
                                        </OrdeLeft>
                                        <OrdeRight>
                                            <Flex className="title">
                                                <Flex.Item className="left">{v.mealEntity.mealName}</Flex.Item>
                                                <Flex.Item className="payment">￥{v.mealEntity.mealPrice}</Flex.Item>
                                            </Flex>
                                            <OneLeft className="ordDtels">
                                                {v.mealEntity.mealContent}
                                            </OneLeft>
                                            <TwoRight>
                                                X{v.addNumber}
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
                                    <span className="right">{orderNum}</span>
                                </li>
                                <li>
                                    <span className="left">商品总额</span>
                                    <span className="right">￥{orderInfo.orderPrice}</span>
                                </li>
                                <li>
                                    <span className="left">运费</span>
                                    <span className="right">￥{deliverFreight}</span>
                                </li>
                                <li className="subsolid">
                                    <span className="left">实付款</span>
                                    <span className="right">￥{orderInfo.orderPrice+deliverFreight}</span>
                                </li>
                            </ul>
                        </Commodity>
                    </SubmitList>
                </SubmitWrapper>
                {/*发货*/}
                <DateilsButton>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item className="shipments">￥{orderInfo.orderPrice+deliverFreight}</Flex.Item>
                        <Flex.Item>
                            <Button variant="outlined" size="medium" color="primary" className="ordering"onClick={this.imdeChange}>
                                提交订单
                            </Button>
                        </Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    }
    imdeChange = ()=>{
        this.id = storage.get("deliverId");
        this.orderId=this.id.id;
        this.userid = storage.get("user").id;
        var param = new URLSearchParams();
            param.append("id",this.orderId);
            param.append("distributorId",this.userid);
            param.append("orderGoods",JSON.stringify(this.state.orderGoods));
            param.append("deliverFreight",this.state.deliverFreight);
            param.append("deliverName",this.state.userName);
            param.append("deliverPhone",this.state.ipHone);
            param.append("deliverAddress",this.state.site);
            param.append("orderStatus",1);//待发货
            // param.append("orderNo",this.state.orderInfo.orderNo);
            // param.append("orderTime",this.state.orderInfo.orderTime);
            // param.append("orderPrice",this.state.orderInfo.orderPrice+this.state.deliverFreight);
         const  api = window.g.update;
         Axios.post(api,param).then((res)=>{
             console.log(res)
         },(err)=>{
             console.log(err)
         })
    };
    componentDidMount(){
        document.title="提交订单";
        this.submitOrder();
        this.getOrderInfo();
    }
    submit =()=>{
        this.props.history.push('/Location');
    };
    //判断是否有地址
    submitOrder=()=>{
        this.site = storage.get("location");
        if (this.site==null || this.site===undefined) {
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
            });
            // storage.remove("location");
        }
    }
    //得到订单信息
    getOrderInfo=()=>{
        var api = window.g.indent;
        this.orderId = storage.get("deliverId");
        // if(!this.orderId){
        //    window.location.reload();
        // }
        this.idOrder=this.orderId.id;
        console.log(this.orderId.id);
        // this.orderId=this.id.id;
        var param = {
            params:{
                id:this.idOrder,
            }
        };
        Axios.get(api,param).then((res)=>{
            console.log("订单");
            let orderData = res.data.records[0];
            let num = 0;
            console.log(orderData);
            JSON.parse(orderData.orderGoods).forEach((list)=>{
               num = num+list.addNumber;
            });
            console.log(num);
            this.setState({orderNum:num,orderInfo:orderData,orderGoods:JSON.parse(orderData.orderGoods)});
        }).catch((err)=>{
            console.log(err);
        })
    };

}

export default SubmitOrder;
