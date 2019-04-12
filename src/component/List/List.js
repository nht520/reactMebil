import React,{ Component,Fragment } from "react";
import {
    ListWaper,ListItem
} from "../style.js";
import { Tabs,
    // WhiteSpace
} from 'antd-mobile';
import Cpntindent from "./Cpntindent";
import Axios from "axios";
const tabs = [
    {
        id:0,
        title: '全部' },
    {
        id:1,
        title: '待付款' },
    {
        id:2,
        title: '待发货' },
    {
        id:3,
        title: '待收货' },
    {
        id:4,
        title: '已完成' },
];
class List extends Component {
    constructor(props){
        super(props);
        this.state=({
            id:0,
            List:[ ],
            ListOne:[],
            ListTwo:[],
            ListThree:[],
            ListFor:[],
        })
    }
    tabsChange=(e)=>{
        const listId = e.id;
        this.setState({
            id:listId
        });
        if (listId===0){
            this.indent();
        } else if(listId===1){
            this.listOne();
        }else if(listId===2){
            // this.ListTwo();
        }
    };
    listOne=()=>{
        let api =window.g.indent;
        const _date = new URLSearchParams();
              _date.append("orderStatus",this.state.id);
        Axios.get(api,_date).then((res)=>{
            console.log(res);
            let orderList=res.data.records;
            this.setState({
                ListOne:orderList,
            });
        },(err)=>{
            console.log(err)
        })
    };
    indent=()=>{
        let api =window.g.indent;
        const _date = new URLSearchParams();
              _date.append("orderStatus",this.state.id);
        Axios.get(api,_date).then((res)=>{
            console.log(res);
            let orderList=res.data.records;
            this.setState({
                List:orderList,
            });
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
        this.indent();
    };
    render(){
        const { List,ListOne,ListFor,ListTwo,ListThree } = this.state;
        return(
            <Fragment>
                <ListWaper>
                    <Tabs tabs={tabs} initialPage={0}   useOnPan={false} onChange={this.tabsChange} >
                        <ListItem >
                            <Cpntindent list={List}  />
                        </ListItem>
                        <ListItem >
                            <Cpntindent list={ListOne}  />
                        </ListItem>
                        <ListItem >
                            <Cpntindent list={ListTwo}  />
                        </ListItem>
                        <ListItem >
                            <Cpntindent list={ListThree}  />
                        </ListItem>
                        <ListItem >
                            <Cpntindent list={ListFor}  />
                        </ListItem>
                    </Tabs>
                </ListWaper>
            </Fragment>
        )
    }
}
export default List;
