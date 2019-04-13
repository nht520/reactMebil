import React,{ Component,Fragment } from "react";
import {
    ListWaper,ListItem
} from "../style.js";
import Cpntindent from "./Cpntindent";
import Axios from "axios";
import storage from "../../statics/storage";
class List extends Component {
    constructor(props){
        super(props);
        this.state=({
            id:0,
            List:[ ],
        })
    }
    indent=()=>{
        let api =window.g.stockLog;
        this.id = storage.get("user");
        this.userid=this.id.id;
        let param = {
            params:{
                distributorId:this.userid,
                logType:0
            }
        };
        Axios.get(api,param).then((res)=>{
            console.log(res);
            this.setState({
                List:res.data.records,
            });
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
        this.indent();
    };
    render(){
        const { List } = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <ListItem >
                        <Cpntindent list={List}  />
                    </ListItem>
                </ListWaper>
            </Fragment>
        )
    }
}
export default List;
