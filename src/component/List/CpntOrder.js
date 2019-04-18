import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    Button,
    Flex} from "antd-mobile";
import {withRouter,Link} from "react-router-dom";
import storage from "../../statics/storage";
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
    listOrder=(key)=>{
        let orderList = this.state.list;
        if (orderList[key].orderStatus===0){
            console.log("待发货");
            this.setState({
                button:"待发货"
            })
            // this.props.history.push(`/IndentDateils/${id}`);
        }else if(orderList[key].orderStatus===1){
            console.log("已发货");
            this.setState({
                button:"已发货"
            })
        }
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
                                                        X{v.boxNum}
                                                    </TwoRight>
                                                </OrdeRight>
                                            </OrdeItem>
                                        </Link>
                                    ))
                                }
                                <OrdeItem>
                                    <Flex>
                                        <Flex.Item>
                                            <Button  size="small" onClick={this.listOrder.bind(this,key)}>
                                                {this.state.button}
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
        console.log(list);
        this.setState({
            dtList: list,
        });
        if (list.orderStatus === undefined || list.orderStatus === ""){
            // this.state.button
            this.setState({
                button:"查看详情"
            })
        }else if(list.orderStatus === 0){
            this.setState({
                button:"去发货"
            })
        }else if (list.orderStatus === 1) {
            this.setState({
                button:"查看详情"
            })
        }

    };
}
export default withRouter(CpntOrder);
