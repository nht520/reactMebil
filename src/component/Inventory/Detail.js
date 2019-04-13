import React,{ Component,Fragment } from "react";
import {
    DetailWrapper,DetailUl,DetailLi,DetailAll
} from "../style";
import {
    Flex
} from "antd-mobile";
import details from "../../statics/asstas/details.png";
import Axios from "axios";
import storage from "../../statics/storage"
class Detail extends Component{
    constructor(props){
        super(props);
        this.state=({
            stockList:[],
            list:[],
        })
    }
    getStock=()=>{
        //得到但商品的库存
        let api = window.g.stock;
        let _id = this.props.match.params.id;
        var param = {
            params:{
                id:_id,
            }
        };
        Axios.get(api,param).then((res)=>{
            this.setState({
                stockList:res.data.records[0],
            });
            this.getList();
        })
    };
    //得到明细
    getList=()=>{
        let api = window.g.stockLog;
        var param ={
            params:{
                distributorId:storage.get("user").id,
                buyGoods:this.state.stockList.goodsId,
            }
        };
        // console.log(this.state.stockList.goodsId);
        Axios.get(api,param).then((res)=>{
            console.log(res);
            const dtlist = res.data.records;
            // if (dtlist.logType===0) {
            //     dtlist.surplusStock="-"+dtlist.surplusStock
            // }else if(dtlist.logType===1){
            //     dtlist.surplusStock="+"+dtlist.surplusStock
            // }
            this.setState({
                list:dtlist
            });
        }).catch((ex)=>{
            console.log(ex);
        });

    };
    componentDidMount(){
        document.title="库存明细";
        this.getStock();
        //获取动态路由传值
        // let _id = this.props.match.params.id;
    }
    render(){
        const {stockList,list}=this.state;
        return(
            <Fragment>
                <DetailWrapper>
                    {/*库存*/}
                    <DetailAll>
                        <img src={details} alt="details"/>
                        剩余库存量 :{stockList.boxNum}
                    </DetailAll>
                    {/**/}
                    <DetailUl>
                        {
                            list.map((item,key)=>(
                            <DetailLi key={key}>
                                <h3>剩余库存量 : {item.surplusStock}</h3>
                                    <Flex>
                                        <Flex.Item className="time">{item.buyTime} </Flex.Item>
                                        <Flex.Item className="left">
                                            {item.logType===0?'+'+[item.surplusStock]:'-'+[item.surplusStock]}
                                        </Flex.Item>
                                    </Flex>
                            </DetailLi>
                            ))
                        }
                    </DetailUl>
                </DetailWrapper>
            </Fragment>
        )
    }
}
export default Detail;
