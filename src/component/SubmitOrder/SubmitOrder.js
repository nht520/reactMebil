import React,{ Component,Fragment } from "react";
import {
    SubmitWrapper, Delivery, Take, SubmitList,Commodity,
    OrdeItem, OrdeLeft, OrdeRight, OneLeft, TwoRight, OrdeList,DateilsButton
} from "../style";
import left from "../../statics/asstas/left.png";
import {Flex, Toast,Modal} from "antd-mobile";
import storage from "../../statics/storage";
import Button from "@material-ui/core/Button/Button";
import Axios from "axios";
const alert = Modal.alert;
class SubmitOrder extends Component{
    constructor(props){
        super(props);
        this.state=({
            sum:"9999.00",
            displayName:"none",
            displaysite:"block",
            userName:"",
            ipHone:"",
            site:"",
            orderInfo:[],
            orderGoods:[],
            deliverFreight:100,
            orderNum:0,
            idOrder:0,
            postage:"",
        });
    }
    render(){
        const {orderNum,orderInfo,orderGoods,userName,ipHone,site,displayName,displaysite,deliverFreight,postage } = this.state;
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
                                <li className="detsAdss">
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
                                            <img src={v.goodsEntity.goodsImage} alt="img"/>
                                        </OrdeLeft>
                                        <OrdeRight>
                                            <Flex className="title">
                                                <Flex.Item className="left">{v.goodsEntity.goodsName}</Flex.Item>
                                            </Flex>
                                            <OneLeft className="ordDtels">
                                                {v.goodsEntity.goodsContent}
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
                                    <span className="right">
                                        {orderNum}
                                    </span>
                                </li>
                                <li>
                                    <span className="left">运费</span>
                                    <span className="right">￥{postage}</span>
                                </li>
                                <li className="subsolid">
                                    <span className="left">实付款</span>
                                    <span className="right">￥{postage}</span>
                                </li>
                            </ul>
                        </Commodity>
                    </SubmitList>
                </SubmitWrapper>
                {/*发货*/}
                <DateilsButton>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item className="shipments">￥{deliverFreight}</Flex.Item>
                        <Flex.Item>
                            <Button variant="outlined" size="medium" color="primary" className="ordering"onClick={this.imdeChange}>
                                提交订单
                            </Button>
                        </Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    };
    showToast = () => {
        Toast.info(this.state.text);
    };
    //获取订单信息
    imdeliverList = () =>{
        this.orderDetils = storage.get("imdeliverList");
        this.setState({
            orderGoods:this.orderDetils
        })
        for(var i =0;i<this.orderDetils.length;i++){
            this.state.orderNum=this.state.orderNum+this.orderDetils[i].addNumber;
        }
    };
    //提交订单
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
             // console.log(res)
             // this.props.history.push('/Layout');
             alert('发货成功', '是否返回首页?', [
                 { text: '取消', onPress: () => console.log('cancel') },
                 { text: '确定', onPress: () => this.props.history.push('/Layout')},
             ])
         },(err)=>{
             console.log(err)
         })
    };
    componentDidMount(){
        document.title="提交订单";
        this.submitOrder();
        this.imdeliverList();
        //判断用户是否选择地址
        this.siteLOcation = storage.get("location");
        if(this.siteLOcation === null || this.siteLOcation === undefined){
            console.log("请选择地址")
        }else {
            this.findCost();
        }
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
                userName:this.site.userName,
                ipHone:this.site.userMobile,
                site:this.site.userAddress,
            });
            // storage.remove("location");
        }
    };
    //得到地址邮费
    findCost=()=>{
      const api =window.g.findCost;
      const provinceAddress = storage.get("location").provinceAddress;
      const cityAddress = storage.get("location").cityAddress;
      const countyAddress = storage.get("location").countyAddress;
      let param = {
        params:{
            provine:provinceAddress,
            city:cityAddress,
            county:countyAddress,
            price:this.state.postage,
        }
     };
      Axios.get(api,param).then((res)=>{
          this.postage=res.data.data.price;
          console.log(res);
          this.setState({
              postage:this.postage,
          })
      }).catch((err)=>{
          console.log(err)
      })
    };
    // orderId=()=>{
    //     this.orderId = storage.get("deliverId").id;
    // };
    //得到订单信息
    // getOrderInfo=()=>{
    //     var api = window.g.indent;
    //     // if(!this.orderId){
    //     //    window.location.reload();
    //     // }
    //     var param = {
    //         params:{
    //             id:this.orderId,
    //         }
    //     };
    //     Axios.get(api,param).then((res)=>{
    //         // console.log("订单");
    //         let orderData = res.data.records[0];
    //         let num = 0;
    //         // console.log(orderData);
    //         JSON.parse(orderData.orderGoods).forEach((list)=>{
    //            num = num+list.addNumber;
    //         });
    //         // console.log(num);
    //         this.setState({orderNum:num,orderInfo:orderData,orderGoods:JSON.parse(orderData.orderGoods)});
    //     }).catch((err)=>{
    //         console.log(err);
    //     })
    // };

}

export default SubmitOrder;
