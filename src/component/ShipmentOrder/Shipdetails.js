import React,{ Component,Fragment } from "react";
import { Flex} from "antd-mobile";
import {
    IndentDts, IntList, Indeslider,
    IntUl, IntLi, IntConte,
} from "../style";
import banner from "../../statics/asstas/touxiang.png";
import Carouse from "../Carousel/Carouse";
import Axios from "axios";
class Shipdetails extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"订单详情",
            show:true,
            id:0,
            list:[],
            bannerOne: [
                {
                    id:1,
                    src:banner,
                    alt:"1",
                },
                {
                    id:2,
                    src:banner,
                    alt:"2",
                },
                {
                    id:10,
                    src:banner,
                    alt:"6",
                },
            ],
        })
    }
    render(){
        const {bannerOne,list} = this.state;
        return(
            <Fragment>
                {/*<IndentWrapper>*/}
                <Indeslider>
                    <Carouse list={bannerOne}/>
                </Indeslider>
                <IndentDts>
                    {
                        list.map((item,key)=>(
                            <div key={key}>
                                <h5>{item.deliverAddress}</h5>
                                <IntList>
                                    <p> {item.deliverAddress}</p>
                                </IntList>
                                {/**/}
                                <IntConte>
                                    <IntUl>
                                        <IntLi>
                                            <Flex>
                                                <Flex.Item>数量</Flex.Item>
                                                <Flex.Item className="left">{item.buyNum}</Flex.Item>
                                            </Flex>
                                        </IntLi>
                                        <IntLi>
                                            <Flex>
                                                <Flex.Item>价格</Flex.Item>
                                                <Flex.Item className="left">￥{item.buyPrice}</Flex.Item>
                                            </Flex>
                                        </IntLi>
                                        <IntLi>
                                            <Flex className="titDts">
                                                <Flex.Item>实付款</Flex.Item>
                                                <Flex.Item className="left">￥{(item.buyNum*item.buyPrice).toFixed(2)}</Flex.Item>
                                            </Flex>
                                        </IntLi>
                                        <IntLi>
                                            <div className="site">
                                                供货商: <span>{item.memberEntity==null?'公司':item.memberEntity.memberName}</span>
                                            </div>
                                        </IntLi>
                                        <IntLi>
                                            <div className="site">
                                                收货人: <span>{item.deliverName}</span>
                                            </div>
                                        </IntLi>
                                        <IntLi>
                                            <div className="site">
                                                收货人电话: <span>{item.deliverPhone}</span>
                                            </div>
                                        </IntLi>
                                        <IntLi>
                                            <div className="site">
                                                收货人地址: <span>{item.deliverAddress}</span>
                                            </div>
                                        </IntLi>
                                        <IntLi>
                                            <div className="site">
                                                订货日期: <span>{item.orderTime}</span>
                                            </div>
                                        </IntLi>
                                    </IntUl>
                                </IntConte>
                                {/*联系*/}
                            </div>
                        ))
                    }
                </IndentDts>
            </Fragment>
        )
    }
    condition=()=>{
        //获取动态路由传值
        const _id = this.props.match.params.id;
        //获取当前点击的状态值
        let param = {
            params:{
                id:_id
            }
        };
        console.log(_id+"----");
        let api = window.g.indent;
        Axios.get(api,param).then((res)=>{
            console.log(res);
            let data = res.data.records;
            this.setState({
                list:data,
            });
            // console.log(this.state.list.mealEntity.mealName);
        },(err)=>{
            console.log(err)
        });
    };
    componentDidMount (){
        document.title = this.state.title;
        //
        this.condition();
    }
}

export default Shipdetails;