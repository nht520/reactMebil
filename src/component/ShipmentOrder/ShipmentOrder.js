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
    { title: '已发货' },
];
class ShipmentOrder extends Component {
    constructor(props){
        super(props);
        this.state=({
            name:"我的订单",
            odList:[],
            List:[],
        })
    }
    // tabsChange=(e)=>{
    //     const listId = e.id;
    //     this.setState({
    //         id:listId
    //     });
    //     if (listId===0){
    //         this.indent();
    //     } else if(listId===1){
    //         this.listOne();
    //     }else if(listId===2){
    //         // this.ListTwo();
    //     }
    // };
    shipMent=()=>{
      const api = window.g.indent;
      Axios.get(api).then((res)=>{
          // this.state.List = res.data.records;
          this.setState({
              List:res.data.records
          })
      },(err)=>{
          console.log(err)
      })
    };
    componentDidMount (){
        this.shipMent();
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
