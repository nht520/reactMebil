import React,{ Component,Fragment } from "react";
import {
    ListWaper,ListItem
} from "../style.js";
import { Tabs,
    // WhiteSpace
} from 'antd-mobile';
import CpntDistribution from "../List/CpntDistribution";
import Axios from "axios";
import storage from "../../statics/storage";
class Dstribution extends Component {
    constructor(props){
        super(props);
        this.state=({
            List:[],
        })
    }
    dstributon=()=>{
        const api = window.g.subordinate;
        const id =storage.get("user");
        const param ={
            params:{
                memberUid:id.memberUid
            }
        };
      Axios.get(api,param).then((res)=>{
          // console.log(res.data.records);
          this.setState({
              List:res.data.records,
          })
      }).catch((err)=>{
          console.log(err);
      })
    }
    componentDidMount (){
        this.dstributon();
        document.title="分销订单";
    }
    render(){
        const { List } = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <ListItem >
                        <CpntDistribution list={List} />
                    </ListItem>
                </ListWaper>
            </Fragment>
        )
    }
}
export default Dstribution;
