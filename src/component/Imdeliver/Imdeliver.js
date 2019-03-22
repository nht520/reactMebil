import React,{ Component,Fragment } from "react";
import {
    Button,
    Flex,
    Toast} from "antd-mobile";
import {
     ImdeList,ImdeItem,ImdeLeft,ImdeRight,ImdeLimit,ImdeButton,DateilsButton,ImdeAdd
} from "../style";
import {
    Link
} from "react-router-dom";
// import banner from "../../statics/asstas/touxiang.png";
class Imdeliver extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"发货",
            page:0,
            list:[
                {
                    id:1,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:"352.00",
                    repertory:"1",
                }, {
                    id:2,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"草莓汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:"352.00",
                    repertory:"1",
                },
            ]
        })
    }
    render(){
        const { list } = this.state;
        return(
            <Fragment>
                {/*<IndentWrapper>*/}
                {
                    list.map((item,key)=>(
                        <ImdeList key={key}>
                            <Link to={`/Dateils/${item.id}`}>
                                <ImdeItem>
                                    <ImdeLeft>
                                        <img src={item.imgurl} alt="img"/>
                                    </ImdeLeft>
                                    <ImdeRight>
                                        <Flex className="title">
                                            <Flex.Item>{item.title}</Flex.Item>
                                        </Flex>
                                        <h5 className="ordDtels">
                                            {item.details}
                                        </h5>
                                    </ImdeRight>
                                </ImdeItem>
                            </Link>
                            <ImdeLimit>
                                可用库存<span className="red">（{item.repertory}）</span>  特惠价:<span>￥{item.price}</span>
                            </ImdeLimit>
                            <ImdeButton>
                                <ImdeAdd>
                                    <ul>
                                         <li>
                                            <span>-</span>
                                         </li>
                                        <li>
                                            100
                                        </li>
                                        <li>
                                            <span>+</span>
                                        </li>
                                        <li>
                                            加入发货单
                                            {/*<Button size="small" className="shipments" onClick={this.adliveChange}>加入发货单</Button>*/}
                                        </li>
                                    </ul>
                                </ImdeAdd>
                                {/*<Button size="small" className="shipments" onClick={this.adliveChange}>加入发货单</Button>*/}
                            </ImdeButton>
                        </ImdeList>
                    ))
                }
                {/*发货*/}
                <DateilsButton>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item className="shipments">发货单({this.state.page})</Flex.Item>
                        <Flex.Item><Button onClick={this.imdeChange}>去发货</Button></Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    }
    showToast = () => {
        Toast.info(this.state.text);
    };
    adliveChange = () =>{
        // console.log("222")
        this.pages = this.state.page;
        ++this.pages;
        this.setState({
            page:this.pages
        });
        // console.log(this.pages)
    };
    imdeChange = () =>{
        console.log("111");
        this.pages = this.state.page;
        if (this.pages<1){
            this.setState({
                text:"你还没有选择商品哦",
            },()=>this.showToast())
        } else if(this.pages>=1){
            this.props.history.push('/SubmitOrder');
        }
    };
    componentDidMount (){
        //获取动态路由传值
        let _id = this.props.match.params.id;
        console.log(_id);
        document.title = this.state.title;
    }
}

export default Imdeliver;
