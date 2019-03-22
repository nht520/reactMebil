import React,{ Component,Fragment }  from "react";
import {
    OrdeList, OrdeItem, OrdeLeft, OrdeRight, OneLeft, TwoRight, OrderList, OrdeWrapper
} from "../style";
import {
    Flex,Button
} from "antd-mobile";
import { Link } from "react-router-dom";
class CpntDistribution extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            list:[
                {
                    id:1,
                    number:"16546454",
                    states:"待付款",
                    freight:"9999",
                    totalprices:"8989",
                    button:"去付款",
                    orderList:[
                        {
                            id:1,
                            path:"",
                            imgurl:"https://www.baidu.com/img/bd_logo1.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        },
                        {
                            id:2,
                            path:"",
                            imgurl:"https://www.baidu.com/img/bd_logo1.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        },
                    ]
                },
                {
                    id:2,
                    number:"16546454",
                    states:"已完成",
                    freight:"9999",
                    totalprices:"8989",
                    button:"删除订单",
                    orderList:[
                        {
                            id:1,
                            path:"",
                            imgurl:"https://www.baidu.com/img/bd_logo1.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        }
                    ]
                }
            ]
        })
    }
    render(){
        const { list } = this.props;
        // const { number,states,id,imgurl,title,price,details,quantity,button } = this.state;
        return(
            <Fragment>
                <OrdeWrapper>
                    {/*{params}*/}
                    {
                        list.map(item=>(
                            <OrderList key={item.id}>
                                <Flex className="header">
                                    <Flex.Item>订单编号:<span>{item.number}</span></Flex.Item>
                                    <Flex.Item className="payment">{item.states}</Flex.Item>
                                </Flex>
                                <OrdeList>
                                    {
                                        item.orderList.map((v,key)=>(
                                            <Link to={`/FxDateils/${v.id}`}  key={key}>
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
                                        <Button size="small">
                                            {item.button}
                                        </Button>
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

export default CpntDistribution;
