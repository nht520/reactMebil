import React,{ Component,Fragment }  from "react";
import Cpntindent from "./Cpntindent";
class OrderAll extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"全部订单",
            List:[
                {
                    id:1,
                    number:"123456",
                    states:"待付款",
                    freight:"9999",
                    totalprices:"8989",
                    button:"去付款",
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
                    ]
                },
                {
                    id:2,
                    number:"16546454",
                    states:"待发货",
                    freight:"9999",
                    totalprices:"8989",
                    button:"查看详情",
                    orderList:[
                        {
                            id:1,
                            imgurl:"https://www.baidu.com/img/bd_logo1.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        }
                    ]
                },
                {
                    id:3,
                    number:"16546454",
                    states:"已完成",
                    freight:"9999",
                    totalprices:"8989",
                    button:"删除订单",
                    orderList:[
                        {
                            id:1,
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
        const { List } = this.state;
        return(
            <Fragment>
                <Cpntindent list={List}
                />
            </Fragment>
        )
    }

}

export default OrderAll;
