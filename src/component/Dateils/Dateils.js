import React,{ Component,Fragment } from "react";
import Carouse from "../Carousel/Carouse";
import {DateilsWrapper, DaetilsList,DatilHeadline,DateilsButton} from "../style";
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
                <DateilsWrapper>
                    {/*轮播*/}
                    <Carouse list={bannerOne}/>
                    <DaetilsList>
                        <Flex className="title">
                            <Flex.Item><h3>{list.mealNum}</h3></Flex.Item>
                        </Flex>
                        <Flex className="title">
                            <Flex.Item><h5>{list.mealContent}</h5></Flex.Item>
                        </Flex>
                        <Flex className="headline">
                            <Flex.Item><span className="original">￥352</span><strong className="strong">￥{list.mealPrice}</strong></Flex.Item>
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
                            <Flex.Item></Flex.Item>
                            <Flex.Item></Flex.Item>
                            <Flex.Item>
                                <Button onClick={this.purChase}  variant="outlined" size="medium" color="primary" className="ordering">
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
    purChase = () =>{
        //获取余额，并且和商品价格比较，如果余额大于商品价格则可以买
        this.purchase = storage.get("listNumber");
        if (this.purchase>=this.state.list.mealPrice){
            console.log("跳转");
            this.setState({
                text:"购买成功！",
            },()=>this.showToast())
        }else if (this.purchase<this.state.list.mealPrice){
            this.setState({
                text:"亲 你的余额不足了哦！",
            },()=>this.showToast())
        }
    };
    componentDidMount (){
       this.details();
    }
}

export default Dateils;
