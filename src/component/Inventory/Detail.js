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
            console.log("====stock===");
            console.log(res.data.records[0]);
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
        console.log(this.state.stockList.goodsId);
        Axios.get(api,param).then((res)=>{
            console.log(res);
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
        const {stockList}=this.state;
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
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                    </DetailUl>
                </DetailWrapper>
            </Fragment>
        )
    }
}

export default Detail;
