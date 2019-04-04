import React,{ Component,Fragment } from "react";
import {
    ListWaper,ListItem
} from "../style.js";
import { Tabs,
    // WhiteSpace
} from 'antd-mobile';
import CpntDistribution from "../List/CpntDistribution";
const tabs = [
    { title: '全部' },
    { title: '待付款' },
    { title: '待发货' },
    { title: '待收货' },
];
class Dstribution extends Component {
    constructor(props){
        super(props);
        this.state=({
            List:[
                {
                    id:1,
                    number:"123456",
                    states:"待付款",
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
                }
            ],
            OtionList:[
                {
                    id:1,
                    number:"123456",
                    states:"待付款",
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
                    states:"待付款",
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
                    states:"待付款",
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
                }
            ],
            shmentsList:[
                {
                    id:1,
                    number:"123456",
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
                }
            ],
            Delivery:[
                {
                    id:1,
                    number:"123456",
                    states:"待收货",
                    freight:"9999",
                    totalprices:"8989",
                    button:"查看详情",
                    orderList:[
                        {
                            id:1,
                            imgurl:"http://wx.bomao.xyz/attachment/images/1/2018/07/du4046PU9Y8z9w1rL9wprE6L6Lrz3L.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        },
                        {
                            id:2,
                            imgurl:"http://wx.bomao.xyz/attachment/images/1/2018/07/du4046PU9Y8z9w1rL9wprE6L6Lrz3L.png",
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
                    states:"待收货",
                    freight:"9999",
                    totalprices:"8989",
                    button:"查看详情",
                    orderList:[
                        {
                            id:1,
                            imgurl:"http://wx.bomao.xyz/attachment/images/1/2018/07/du4046PU9Y8z9w1rL9wprE6L6Lrz3L.png",
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
                    states:"待收货",
                    freight:"9999",
                    totalprices:"8989",
                    button:"查看详情",
                    orderList:[
                        {
                            id:1,
                            imgurl:"http://wx.bomao.xyz/attachment/images/1/2018/07/du4046PU9Y8z9w1rL9wprE6L6Lrz3L.png",
                            title:"炸鸡汉堡王",
                            price:"352.00",
                            details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                            quantity:"1",
                        }
                    ]
                }
            ],
        })
    }
    componentDidMount (){
        document.title="分销订单";
    }
    render(){
        const { List,OtionList,shmentsList,Delivery } = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <Tabs tabs={tabs} initialPage={0} animated={true} useOnPan={false}>
                        <ListItem >
                            <CpntDistribution list={List} />
                        </ListItem>
                        <ListItem >
                            <CpntDistribution list={OtionList} />
                            {/*<Refresh/>*/}
                        </ListItem>
                        <ListItem >
                            <CpntDistribution list={shmentsList} />
                        </ListItem>
                        <ListItem >
                            <CpntDistribution list={Delivery} />
                        </ListItem>
                    </Tabs>
                </ListWaper>
            </Fragment>
        )
    }
}
export default Dstribution;
