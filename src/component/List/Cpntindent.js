import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    Button,Toast,Modal,
    Flex} from "antd-mobile";
import {withRouter,Link} from "react-router-dom";
import storage from "../../statics/storage";
const alert = Modal.alert;
class Cpntindent extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            list:[ ],
        })
    }
    datsChange =(key)=>{
        let letid = this.props.list;
        //将数据存储在storage
        storage.set("lcList",letid[key]);
        // this.props.history.push('/IndentDateils');
        // console.log(letid[key]);
    };
    listOrder=(key)=>{
        let letid = this.props.list;
        storage.set("lcList",letid[key]);
        if (letid[key].states==="待发货"){
            console.log("待发货");
            let id = letid[key].id;
            this.props.history.push(`/IndentDateils/${id}`);
        }else if(letid[key].states==="待收货"){
            console.log("待收货");
            alert('收货提示！', '是否确认收货 ???', [
                { text: '取消', onPress: () => console.log('取消') },
                {text: '确定',
                    onPress: () =>
                        new Promise((resolve) => {
                            Toast.info('onPress Promise', 1);
                            setTimeout(resolve, 1000);
                        }),
                },
            ])
        }else if(letid[key].states==="已完成"){
            console.log("已完成");
            alert('删除提示！', '是否确认删除 ???', [
                { text: '取消', onPress: () => console.log('取消') },
                {text: '确定',
                    onPress: () =>
                        new Promise((resolve) => {
                            Toast.info('onPress Promise', 1);
                            setTimeout(resolve, 1000);
                        }),
                },
            ])
        }
    };
    render(){
        const { list } = this.props;
        return(
            <Fragment>
                <OrdeWrapper>
                    {list.map((item,key)=>(
                            <OrderList key={key} >
                                <Flex className="header">
                                    <Flex.Item>订单编号:<span>{item.number}</span></Flex.Item>
                                    <Flex.Item className="payment">{item.states}</Flex.Item>
                                </Flex>
                                <OrdeList>
                                    {
                                        item.orderList.map((v,key)=>(
                                            <Link to={`/IndentDateils/${v.id}`}  key={key} onClick={this.datsChange.bind(this,key)}>
                                                <OrdeItem>
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
                                            </Link>
                                        ))
                                    }
                                    <OrdeItem>
                                        <Flex>
                                            <Flex.Item>
                                                总价：￥<span>88989</span>
                                            </Flex.Item>
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
        // console.log(this.props.list)
    }

}
export default withRouter(Cpntindent);
