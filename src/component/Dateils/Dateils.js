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
        if (numberSum>this.state.list.mealNum){
            numberSum=this.state.list.mealNum;
        }else{
            // //点击增加分属，计算价格
            var topicnum =0;
            topicnum += numberSum * this.state.list.mealNum;
            console.log(numberSum);
            console.log(topicnum);
            this.setState({
                sum:numberSum,
                topic:topicnum
            });
        };
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
    affIrm = () => {
        if (this.state.sum < 1) {
            this.setState({
                text: "亲 你还没有选择数量哦！",
            }, () => this.showToast())
        } else if (this.state.sum >= 1) {
            //获取余额，并且和商品价格比较，如果余额大于商品价格则可以买
            this.picer =this.state.list.mealPrice;
            this.purchase = storage.get("listNumber");
            if (this.purchase>=this.picer){
                console.log("购买");
                //goodsId  商品编号   stockNum 份数  distributorId 当前用户id   boxNum  总份数
                // mealNum盒数
                this.user = storage.get("user");
                this.usernameId=this.user.id;
                const _param = new URLSearchParams();
                    _param.append("goodsId",this.state.list.id);
                    _param.append("stockNum",this.state.sum);
                    _param.append("distributorId",this.usernameId);
                    _param.append("boxNum",this.state.topic);
                var api =window.g.stock;
                Axios.post(api,_param).then((res)=>{
                    console.log(res);
                    this.setState({
                        text: "购买成功！",
                    }, () => this.showToast())
                    this.props.history.push('/Inventory');
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
            console.log(res);
            let dtList=res.data.data;
            this.setState({
                list:dtList
            })
        },(err)=>{
            console.log(err)
        })
    };
    // purChase = () =>{
    //     //获取余额，并且和商品价格比较，如果余额大于商品价格则可以买
    //     this.purchase = 10;
    //     if (this.purchase>=this.state.list.mealPrice){
    //         console.log("跳转");
    //         // this.setState({
    //         //     text:"购买成功！",
    //         // },()=>this.showToast())
    //     }else if (this.purchase<this.state.list.mealPrice){
    //         // this.setState({
    //         //     text:"亲 你的余额不足了哦！",
    //         // },()=>this.showToast())
    //     }
    // };
    componentDidMount (){
       this.details();
    }
}

export default Dateils;
