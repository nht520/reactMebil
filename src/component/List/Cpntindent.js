import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    Flex} from "antd-mobile";
import {withRouter,Link} from "react-router-dom";
import storage from "../../statics/storage";
class Cpntindent extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            dtList:[],
            pricer:[],
        })
    }
    render(){
        const { dtList } = this.state;
        return(
            <Fragment>
                <OrdeWrapper>
                    {
                        dtList.map((item,key)=>(
                            <OrderList key={key} >
                                <Flex className="header">
                                    <Flex.Item>供货商：<span>{item.memberEntity==null?'公司':item.memberEntity.memberName}</span></Flex.Item>
                                    <Flex.Item className="payment">{item.buyTime}</Flex.Item>
                                </Flex>
                                <OrdeList>
                                    <Link to={`/IndentDateils/${item.id}`}  key={key} onClick={this.datsChange.bind(this,key)}>
                                        <OrdeItem>
                                            <OrdeLeft>
                                                <img src={item.mealEntity.mealImage} alt="img"/>
                                            </OrdeLeft>
                                            <OrdeRight>
                                                <Flex className="title">
                                                    <Flex.Item>{item.mealEntity.mealName}</Flex.Item>
                                                    <Flex.Item className="payment">￥{item.mealEntity.mealPrice}</Flex.Item>
                                                </Flex>
                                                <OneLeft className="ordDtels">
                                                    {item.mealEntity.mealDetail}
                                                </OneLeft>
                                                <TwoRight>
                                                    X{item.mealEntity.mealNum}
                                                </TwoRight>
                                            </OrdeRight>
                                        </OrdeItem>
                                    </Link>
                                    <OrdeItem>
                                        <Flex>
                                            <Flex.Item>
                                                总价：￥<span>{(item.buyPrice).toFixed(2)}</span>
                                            </Flex.Item>
                                            <Flex.Item>
                                                {/*<Button  size="small" onClick={this.listOrder.bind(this,key)}>*/}
                                                    {/*查看详情*/}
                                                {/*</Button>*/}
                                                <Link to={`/IndentDateils/${item.id}`} >
                                                    <span className="linkSkip">查看详情</span>
                                                </Link>
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
    datsChange =(key)=>{
        let letid = this.state.dtList;
        //将数据存储在storage
        storage.set("lcList",letid[key]);
        // this.props.history.push('/IndentDateils');
        // console.log(letid[key]);
    };
    // listOrder=(key)=>{
    //     let letid = this.state.dtList;
    //     // storage.set("lcList",letid[key]);
    //     console.log(letid[key]);
    //     if (letid[key].states==="待发货"){
    //         console.log("待发货");
    //         let id = letid[key].id;
    //         this.props.history.push(`/IndentDateils/${id}`);
    //     }else if(letid[key].states==="待收货"){
    //         console.log("待收货");
    //         alert('收货提示！', '是否确认收货 ???', [
    //             { text: '取消', onPress: () => console.log('取消') },
    //             {text: '确定',
    //                 onPress: () =>
    //                     new Promise((resolve) => {
    //                         Toast.info('onPress Promise', 1);
    //                         setTimeout(resolve, 1000);
    //                     }),
    //             },
    //         ])
    //     }else if(letid[key].states==="已完成"){
    //         console.log("已完成");
    //         alert('删除提示！', '是否确认删除 ???', [
    //             { text: '取消', onPress: () => console.log('取消') },
    //             {text: '确定',
    //                 onPress: () =>
    //                     new Promise((resolve) => {
    //                         Toast.info('onPress Promise', 1);
    //                         setTimeout(resolve, 1000);
    //                     }),
    //             },
    //         ])
    //     }
    // };
    componentWillReceiveProps(nextProps) {
        let list = nextProps.list;
        if (list) {
            this.setState({
                dtList: list,
            })
        }
    };
    componentDidMount(){

    }

}
export default withRouter(Cpntindent);
