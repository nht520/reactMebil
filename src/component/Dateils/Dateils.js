import React,{ Component,Fragment } from "react";
import Carouse from "../Carousel/Carouse";
import {DateilsWrapper, DaetilsList,DatilHeadline,DateilsButton} from "../style";
import { Flex,Button } from "antd-mobile";
import banner from "../../statics/asstas/ydjm.png";
import Axios from "axios";
class Dateils extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"商品详情",
            list:"",
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
                            {/*<h3>商品参数</h3>*/}
                            {/*<ul>*/}
                                {/*<li>*/}
                                    {/*<span>包装：</span>精选不湿纸*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>盒数：</span>1盒10包*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<span>用材：</span>灰面，白糖，陈皮，山泉水，小麦*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                            {/*<h3>图文描述</h3>*/}
                            {/*<ul>*/}
                                {/*<li>*/}
                                    {/*<img src={banner} alt="详情"/>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可*/}
                                    {/*使用于各种料理中的...*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*<img src={banner} alt="详情"/>*/}
                                {/*</li>*/}
                                {/*<li>*/}
                                    {/*鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可*/}
                                    {/*使用于各种料理中的...*/}
                                {/*</li>*/}
                            {/*</ul>*/}
                        </DatilHeadline>
                    </DaetilsList>
                    {/*购买*/}
                    <DateilsButton>
                        <Flex className="title">
                            <Flex.Item></Flex.Item>
                            <Flex.Item></Flex.Item>
                            <Flex.Item><Button>立即购买</Button></Flex.Item>
                        </Flex>
                    </DateilsButton>
                </DateilsWrapper>
            </Fragment>
        )
    }
    componentDidMount (){
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
    }
}

export default Dateils;
