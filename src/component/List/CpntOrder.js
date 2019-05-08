import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    Button,
    Flex} from "antd-mobile";
import {withRouter,Link} from "react-router-dom";
import storage from "../../statics/storage";
import Axios from "axios";
class CpntOrder extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"发货订单",
            dtList:[ ],
        })
    }
    datsChange =(key)=>{
        let letid = this.props.list;
        //将数据存储在storage
        storage.set("lcList",letid[key]);
        // this.props.history.push('/IndentDateils');
        console.log(letid[key]);
    };
    //存h获取订单数据
    listOrder=(key)=>{
        console.log(key);
        var host = window.g.indent;
        var param = {
            params:{
                id:key,
            }
        };
        Axios.get(host,param).then((res)=>{
            if(res.data.records[0].orderStatus==0){
                const orderObj = JSON.parse(res.data.records[0].orderGoods);
                const shpName = orderObj[0].mealEntity;
                console.log(shpName);
                //存h获取订单数据
                storage.set("deliverId",shpName);
                this.props.history.push(`/SubmitOrder`);
            }else if(res.data.records[0].orderStatus==1){
                // console.log("查看详情");
                const list = res.data.records[0];
                this.props.history.push(`/Shipdetails/${list.id}`);
            }
        }).catch((err)=>{
            console.log(err);
        });
    };
    render(){
        const { dtList } = this.state;
        return(
            <Fragment>
                <OrdeWrapper>
                    {dtList.map((item,key)=>(
                        <OrderList key={key} >
                            <Flex className="header">
                                <div className="paymentleft">订单编号：<span>{item.orderNo}</span></div>
                                <div className="payment">收货人：{item.deliverName}</div>
                            </Flex>
                            <OrdeList>
                                {
                                    JSON.parse(item.orderGoods).map((v,key)=>(
                                        <Link to={`/Shipdetails/${item.id}`}  key={key} onClick={this.datsChange.bind(this,key)}>
                                            <OrdeItem>
                                                <OrdeLeft>
                                                    <img src={v.goodsEntity.goodsImage} alt="img"/>
                                                </OrdeLeft>
                                                <OrdeRight>
                                                    <Flex className="title">
                                                        <Flex.Item>{v.goodsEntity.goodsName}</Flex.Item>
                                                    </Flex>
                                                    <OneLeft className="ordDtels">
                                                        {v.goodsEntity.goodsContent}
                                                    </OneLeft>
                                                    <TwoRight>
                                                        X{v.addNumber}
                                                    </TwoRight>
                                                </OrdeRight>
                                            </OrdeItem>
                                        </Link>
                                    ))
                                }
                                <OrdeItem>
                                    <Flex>
                                        <Flex.Item>
                                            <Button  size="small" onClick={this.listOrder.bind(this,item.id)}>
                                                {item.button}
                                            </Button>
                                        </Flex.Item>
                                    </Flex>
                                    {/*点击跳转*/}
                                </OrdeItem>
                            </OrdeList>
                        </OrderList>
                    ))
                    }
                </OrdeWrapper>
            </Fragment>
        )
    };
    componentDidMount() {
        // this.listOrder();
        // console.log(this.state.list)
    }
    componentWillReceiveProps(nextProps) {
        let list = nextProps.list;
        var orderList = [];
        for(var i = 0;i<list.length;i++){
            if (list[i].orderStatus === undefined || list[i].orderStatus === ""){
                this.setState({
                    button:"查看详情"
                });
                list[i]['button'] = '查看详情';
            }else if(list[i].orderStatus === 0){
                this.setState({
                    button:"去发货"
                });
                list[i]['button'] = '去发货';
            }else if (list[i].orderStatus === 1) {
                this.setState({
                    button:"查看详情"
                })
                list[i]['button'] = '查看详情';
            }
            orderList.push(list[i]);
        }
        this.setState({
            dtList: orderList,
        });
    };
}
export default withRouter(CpntOrder);
