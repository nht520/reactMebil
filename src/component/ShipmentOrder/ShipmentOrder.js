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
    {
        id:"",
        title: '全部'
    },
    {
        id:0,
        title: '待发货'
    },
    {
        id:1,
        title: '已发货'
    },
];
class ShipmentOrder extends Component {
    constructor(props){
        super(props);
        this.state=({
            name:"我的订单",
            odList:[],
            List:[],
            ListOne:[],
            ListTwo:[],
            orderTitle:"全部",
        })
    }
    tabsChange=(e)=>{
        var param = {
            params:{
                orderStatus:e.id
            }
        };
        const api = window.g.indent;
        Axios.get(api,param).then((res)=>{
            console.log(res);
            this.setState({
                List:res.data.records
            })
        },(err)=>{
            console.log(err)
        })
    };
    stnsChange=()=>{
        const api = window.g.indent;
        Axios.get(api).then((res)=>{
            this.setState({
                List:res.data.records
            })
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
        this.stnsChange();
    }
    render(){
        const { List} = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <Tabs tabs={tabs} initialPage={0}   useOnPan={false} onChange={this.tabsChange} >
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
