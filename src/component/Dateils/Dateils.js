import React,{ Component,Fragment } from "react";
import Carouse from "../Carousel/Carouse";
import {DateilsWrapper, DaetilsList, DatilHeadline, DateilsButton} from "../style";
import {Flex, Toast} from "antd-mobile";
import Button from "@material-ui/core/Button/Button";
import banner from "../../statics/asstas/ydjm.png";
import Axios from "axios";
import storage from "../../statics/storage";
class Dateils extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"商品详情",
            topic:0,
            sum:0,
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
        const { bannerOne,list } = this.state;
        return(
            <Fragment>
                {/*引用提示组件*/}
                <DateilsWrapper>
                    {/*轮播*/}
                    <Carouse list={bannerOne}/>
                    <DaetilsList>
                        <Flex className="title">
                            <Flex.Item><h3>{list.mealName}</h3></Flex.Item>
                        </Flex>
                        <Flex className="title">
                            <Flex.Item><h5>{list.mealContent}</h5></Flex.Item>
                        </Flex>
                        <Flex className="headline">
                            <Flex.Item>
                                <span className="original">￥352</span><strong className="strong">￥{list.mealPrice}</strong>
                                <span> 盒数：{list.mealNum}</span>
                            </Flex.Item>
                        </Flex>
                        {/*参数*/}
                        <DatilHeadline
                            dangerouslySetInnerHTML={{__html:list.mealDetail}}
                        >
                        </DatilHeadline>
                    </DaetilsList>
                    {/*购买*/}
                    <DateilsButton>
                        <Flex className="title">
                            <Flex.Item>
                            </Flex.Item>
                            <Flex.Item>
                                <ul>
                                    <li className="berLeft" onClick={this.subtractChange}>
                                        <span>十</span>
                                    </li>
                                    <li className="numberDv">
                                        {this.state.sum}
                                    </li>
                                    <li className="berRight" onClick={this.plusChange}>
                                        <span>一</span>
                                    </li>
                                </ul>
                            </Flex.Item>
                            <Flex.Item>
                                <Button  onClick={this.affIrm}  variant="outlined" size="medium" color="primary" className="ordering">
                                    立即购买
                                </Button>
                            </Flex.Item>
                        </Flex>
                    </DateilsButton>
                </DateilsWrapper>
            </Fragment>
        )
    }
    //提示
    showToast = () => {
        Toast.info(this.state.text);
    };
    //添加
    subtractChange =()=>{
        //点击计算数量
        let numberSum =  this.state.sum;
        ++numberSum;
        // console.log(numberSum);
        // //点击增加分属，计算价格
        var topicnum =0;
        topicnum += numberSum * this.state.list.mealNum;
        // console.log(numberSum);
        // console.log(topicnum);
        this.setState({
            sum:numberSum,
            topic:topicnum
        });
        // if (numberSum>this.state.list.mealNum){
        //     numberSum=this.state.list.mealNum;
        // }else{
        //
        // };
    };
    // 减少
    plusChange=()=>{
        //点击计算数量
        let numberSum =  this.state.sum;
        --numberSum;
        if (numberSum<0){
            numberSum=0;
        }else{
            // //点击增加分属，计算价格
            var topicnum =0;
            topicnum = numberSum * this.state.list.mealNum;
            console.log(numberSum+"=====数量");
            console.log(topicnum+"----价格");
            this.setState({
                sum:numberSum,
                topic:topicnum
            });
        };
    };
    //获取余额
    mcMembers =()=>{
        this.id = storage.get("user");
        this.Uid=this.id.memberUid;
        let param = {
            params:{
                uid:this.Uid,
            }
        };
        var api =window.g.mcMembers;
        Axios.get(api,param).then((res)=>{
            let credit2=res.data.data.credit2;
            console.log(res);
            //将余额存的storage
            storage.set("pricerNumber",res.data.data);
            this.setState({
                pric:credit2
            })
        },(err)=>{
            console.log(err)
        })
    };
    affIrm = () => {
        if (this.state.sum < 1) {
            this.setState({
                text: "亲 你还没有选择数量哦！",
            }, () => this.showToast())
        } else if (this.state.sum >= 1) {
            //获取余额，并且和商品价格比较，如果余额大于商品价格则可以买
            this.picer =this.state.list.mealPrice;
            this.purchase = storage.get("pricerNumber").credit2;
            // console.log("购买"+this.purchase);
            if (this.purchase>=this.picer){
                //goodsId  商品编号   stockNum 份数  distributorId 当前用户id   boxNum  总份数
                // mealNum盒数
                this.user = storage.get("user");
                this.dgsId = this.state.list.goodsId;
                this.usernameId=this.user.id;
                const _param = new URLSearchParams();
                      _param.append("mealId",this.state.list.id);
                      _param.append("stockNum",this.state.sum);
                      _param.append("distributorId",this.usernameId);
                      _param.append("boxNum",this.state.topic);
                      _param.append("goodsId",this.dgsId);
                var api =window.g.stock;
                Axios.post(api,_param).then((res)=>{
                    // console.log(res);
                    // alert('购买提示！', '是否确认购买 ???', [
                    //     { text: '取消', onPress: () => console.log('取消') },
                    //     { text: '确定',
                    //         onPress: () =>
                    //             new Promise((resolve) => {
                    //                 this.props.history.push('/Inventory');
                    //                 Toast.info('购买成功', 1);
                    //                 setTimeout(resolve, 1000);
                    //             }),
                    //     },
                    // ]);
                    this.setState({
                        text: "购买成功！",
                    }, () => this.showToast());
                    // this.props.history.push('/Inventory');
                },(err)=>{
                    console.log(err)
                });
            }else if (this.purchase<this.picer){
                this.setState({
                    text:"亲 你的余额不足了哦！",
                },()=>this.showToast())
            }

        }
    };
    details = () =>{
        //获取动态路由传值
        let _id = this.props.match.params.id;
        console.log(_id);
        document.title = this.state.title;
        var api =window.g.mealDts+_id;
        Axios.get(api).then((res)=>{
            console.log("+++++");
            console.log(res);
            let dtList=res.data.data;
            this.setState({
                list:dtList
            })
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
       this.details();
       this.mcMembers();
    }
}

export default Dateils;
