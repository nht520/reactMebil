import React, {Component, Fragment} from "react";
import {OneLeft, OrdeItem, OrdeLeft, OrdeList, OrdeRight, OrderList, OrdeWrapper, TwoRight} from "../style";
import {
    // Button,
    Flex} from "antd-mobile";
import {Link} from "react-router-dom";
import storage from "../../statics/storage";
class Cpntindent extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            list:[ ]
        })
    }
    locationChange =(key)=>{
        let letid = this.props.list;
        //将数据存储在storage
        storage.set("lcList",letid[key]);
        // this.props.history.push('/IndentDateils');
        console.log(letid[key]);
        // if (letid[key].states==="待付款"){
        //     //如果状态是待付款就跳转到付款界面
        //     // this.props.history.push('/');
        //     console.log("123456")
        // }
    };
    render(){
        const { list } = this.props;
        return(
            <Fragment>
                <OrdeWrapper>
                    {
                        list.map((item,key)=>(
                            <OrderList key={key} onClick={this.locationChange.bind(this,key)}>
                                <Flex className="header">
                                    <Flex.Item>订单编号:<span>{item.number}</span></Flex.Item>
                                    <Flex.Item className="payment">{item.states}</Flex.Item>
                                </Flex>
                                <OrdeList>
                                    {
                                        item.orderList.map((v,key)=>(
                                            <Link to={`/IndentDateils/${v.id}`}  key={key}>
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
                                        {/*<Button size="small">*/}
                                            {/*{item.button}*/}
                                        {/*</Button>*/}
                                        <Link to={`/IndentDateils/${item.id}`}>
                                            <span className="linkSkip">{item.button}</span>
                                        </Link>
                                    </OrdeItem>
                                </OrdeList>
                            </OrderList>
                        ))
                    }
                </OrdeWrapper>
            </Fragment>
        )
    }
}
export default Cpntindent;
