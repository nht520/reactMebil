import React,{ Component,Fragment } from "react";
import {
    ListWaper,ListItem
} from "../style.js";
import { Tabs,
    // WhiteSpace
} from 'antd-mobile';
import Axios from "axios";
import CpntOrder from "../List/CpntOrder";
const tabs = [
    { title: '全部' },
    { title: '待发货' },
    { title: '待收货' },
    { title: '已完成' },
];
class ShipmentOrder extends Component {
    constructor(props){
        super(props);
        this.state=({
            name:"我的订单",
            odList:[],
            List:[
                {
                    id:1,
                    number:"999999",
                    states:"待收货",
                    freight:"9999",
                    totalprices:"8989",
                    button:"确认收货",
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
                    button:"确认收货",
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
            ],
        })
    }

    componentDidMount (){
    }
    render(){
        const { List} = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <Tabs tabs={tabs} initialPage={0}  useOnPan={false}>
                        <ListItem >
                            <CpntOrder list={ List } />
                        </ListItem>
                    </Tabs>
                </ListWaper>
            </Fragment>
        )
    }
}
export default ShipmentOrder;
