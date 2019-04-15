import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    Button,Toast,Modal,
    Flex} from "antd-mobile";
import {withRouter,Link} from "react-router-dom";
import storage from "../../statics/storage";
const alert = Modal.alert;
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
                                        <Link to={`/IndentDateils/${v.id}`}  key={key} onClick={this.datsChange.bind(this,key)}>
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
                                        {/*<Flex.Item>*/}
                                        {/*    总价：￥<span>88989</span>*/}
                                        {/*</Flex.Item>*/}
                                        <Flex.Item>
                                            <Button  size="small" onClick={this.listOrder.bind(this,key)}>
                                                {item.button}
                                            </Button>
                                            {/*<Link to={`/IndentDateils/${item.id}`}  style={{ display:displayNone }}>*/}
                                            {/*    <span className="linkSkip">{item.button}</span>*/}
                                            {/*</Link>*/}
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
        if (list) {
            this.setState({
                dtList: list,
            })
        }
    };
}
export default withRouter(CpntOrder);
