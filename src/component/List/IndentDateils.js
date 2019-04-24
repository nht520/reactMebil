import React,{ Component,Fragment } from "react";
import { Flex} from "antd-mobile";
import {
    IndentDts, IntList, Indeslider,
    IntUl, IntLi, IntConte,
} from "../style";
import banner from "../../statics/asstas/touxiang.png";
import Carouse from "../Carousel/Carouse";
import Axios from "axios";
class IndentDateils extends Component{
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
                    src:"http://wx.bomao.xyz/attachment/images/1/2018/07/FZRf1WisfasuF69EWwI9Uib6r6ewLD.png",
                    alt:"1",
                },
                {
                    id:2,
                    src:"http://wx.bomao.xyz/attachment/images/1/2018/07/st1BSZ2t9Sz6gEMsQz91u29xUDe6dr.png",
                    alt:"2",
                },
                {
                    id:3,
                    src:"http://wx.bomao.xyz/attachment/images/1/2018/07/WzfhaSnNFfhhs7FFjASNFZvjjhNNNF.png",
                    alt:"6",
                },
                {
                    id:4,
                    src:"http://wx.bomao.xyz/attachment/images/1/2018/07/y678u07FUc00qRm7m6m8RFVdQ5rR87.png",
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
                               <h5>{item.mealEntity.mealName}</h5>
                               <IntList>
                                   <p> {item.mealEntity.mealContent}</p>
                               </IntList>
                               {/**/}
                               <IntConte>
                                   <IntUl>
                                       <IntLi>
                                           <Flex>
                                               <Flex.Item>份数</Flex.Item>
                                               <Flex.Item className="left">{item.mealEntity.mealNum}</Flex.Item>
                                           </Flex>
                                       </IntLi>
                                       <IntLi>
                                           <Flex>
                                               <Flex.Item>盒数</Flex.Item>
                                               <Flex.Item className="left">{item.buyNum}</Flex.Item>
                                           </Flex>
                                       </IntLi>
                                       <IntLi>
                                           <Flex>
                                               <Flex.Item>单价</Flex.Item>
                                               <Flex.Item className="left">￥{item.mealEntity.mealPrice}</Flex.Item>
                                           </Flex>
                                       </IntLi>
                                       <IntLi>
                                           <Flex className="titDts">
                                               <Flex.Item>实付款</Flex.Item>
                                               <Flex.Item className="left">￥{(item.buyNum*item.mealEntity.mealPrice).toFixed(2)}</Flex.Item>
                                               {/*<Flex.Item className="left">￥{(item.buyNum*item.buyPrice).toFixed(2)}</Flex.Item>*/}
                                           </Flex>
                                       </IntLi>
                                       <IntLi>
                                           <div className="site">
                                               供货商: <span>{item.memberEntity==null?'公司':item.memberEntity.memberName}</span>
                                           </div>
                                       </IntLi>
                                       <IntLi>
                                           <div className="site">
                                               订货日期: <span>{item.buyTime}</span>
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
        let api = window.g.stockLog;
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

export default IndentDateils;
