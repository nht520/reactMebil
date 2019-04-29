import React,{ Component,Fragment }  from "react";
import {
    OrdeList, OrdeItem, OrdeLeft, OrdeRight, OneLeft, TwoRight, OrderList, OrdeWrapper
} from "../style";
import {
    Button,
    Flex
} from "antd-mobile";
import { Link } from "react-router-dom";
class CpntDistribution extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            dtList:[],
            button:"查看详情",
        })
    }
    render(){
        const { dtList } = this.state;
        // const { number,states,id,imgurl,title,price,details,quantity,button } = this.state;
        return(
            <Fragment>
                <OrdeWrapper>
                    {/*{params}*/}
                    {
                        dtList.map((item,key)=>(
                            <OrderList key={key}>
                                <Flex className="header">
                                    <Flex.Item>收货人:<span>{item.memberEntity.memberName}</span></Flex.Item>
                                    <Flex.Item className="payment">电话：{item.memberEntity.memberPhone}</Flex.Item>
                                </Flex>
                                <OrdeList>
                                    {/*<Link to={`/FxDateils/${item.id}`}  >*/}
                                        <OrdeItem>
                                            <OrdeLeft>
                                                <img src={item.mealEntity.mealImage} alt="img"/>
                                            </OrdeLeft>
                                            <OrdeRight>
                                                <Flex className="title">
                                                    <Flex.Item>{item.mealEntity.mealName}</Flex.Item>
                                                    {/*<Flex.Item className="payment">￥{}</Flex.Item>*/}
                                                </Flex>
                                                <OneLeft className="fenxiao">
                                                    {item.mealEntity.mealDetail+item.mealEntity.mealContent}
                                                </OneLeft>
                                            </OrdeRight>
                                        </OrdeItem>
                                    {/*</Link>*/}
                                </OrdeList>
                                <Flex className="pricer" >
                                    <Flex.Item>数量:<span>{item.mealEntity.mealNum}</span></Flex.Item>
                                    <Flex.Item>价格：{item.mealEntity.mealPrice}</Flex.Item>
                                </Flex>
                            </OrderList>
                        ))
                    }
                </OrdeWrapper>
            </Fragment>
        )
    };
    componentWillReceiveProps(nextProps) {
        const List = nextProps.list;
        console.log(List);
        if (List) {
            this.setState({
                dtList: List,
            })
        }
    };

}

export default CpntDistribution;
