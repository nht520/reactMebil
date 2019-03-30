import React,{ Component,Fragment } from "react";
import {
    // Button,
    Toast,
    Flex,} from "antd-mobile";
import {
     ImdeList,ImdeItem,ImdeLeft,ImdeRight,ImdeButton,DateilsButton,ImdeAdd,
    ImLeft,ImRight
} from "../style";
import {
    Link
} from "react-router-dom";
import storage from "../../statics/storage";
import Button from "@material-ui/core/Button/Button";
class Imdeliver extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"发货",
            sum:"0",
            listNumber:[],
            topic:0,
            list:[
                {
                    id:1,
                    addNumber:0,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:22.00,
                    repertory:"5",
                }, {
                    id:2,
                    addNumber:0,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"草莓汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:100.00,
                    repertory:"5",
                },
                {
                    id:3,
                    addNumber:0,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"汉堡王堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:100.00,
                    repertory:"5",
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
                        <ImdeList key={key} onClick={this.addChange.bind(this,key)}>
                            <Link to={`/Dateils/${item.id}`}>
                                <ImdeItem>
                                    <ImdeLeft>
                                        <img src={item.imgurl} alt="img"/>
                                    </ImdeLeft>
                                    <ImdeRight>
                                        <Flex className="title">
                                            <Flex.Item>{item.title}</Flex.Item>
                                            <Flex.Item>特惠价:<span>￥{item.price}</span></Flex.Item>
                                        </Flex>
                                        <h5 className="ordDtels">
                                            {item.details}
                                        </h5>
                                    </ImdeRight>
                                </ImdeItem>
                            </Link>
                            <ImdeButton>
                                <ImdeAdd>
                                    <ImLeft>
                                        <Flex.Item>可用库存（<font className="red">{item.repertory}</font>）</Flex.Item>
                                    </ImLeft>
                                    <ImRight>
                                        <ul>
                                            <li className="berLeft">
                                                <span  onClick={this.subtractChange.bind(this,key)}>十</span>
                                            </li>
                                            <li className="numberDv">
                                                {item.addNumber}
                                            </li>
                                            <li className="berRight">
                                                <span onClick={this.plusChange.bind(this,key)}>一</span>
                                            </li>
                                        </ul>
                                    </ImRight>
                                </ImdeAdd>
                            </ImdeButton>
                        </ImdeList>
                    ))
                }
                {/*发货*/}
                <DateilsButton>
                    <Flex className="title">
                        <Flex.Item></Flex.Item>
                        <Flex.Item className="shipments">发货单({this.state.sum})</Flex.Item>
                        <Flex.Item>
                            <Button variant="outlined" size="medium" color="primary" className="ordering" onClick={this.imdeChange}>
                                去发货
                            </Button>
                        </Flex.Item>
                    </Flex>
                </DateilsButton>
            </Fragment>
        )
    }
    showToast = () => {
        Toast.info(this.state.text);
    };
    addChange = (key) =>{
        //获取当前点击的key
        let addList=this.state.list;
        console.log(addList[key]);
        // console.log(this.pages)
    };
    //添加
    subtractChange =(key)=>{
        this.addList=this.state.list;
        //点击计算数量
        ++this.addList[key].addNumber;
        if (this.addList[key].addNumber>this.addList[key].repertory){
            this.addList[key].addNumber=this.addList[key].repertory;
        }else{
            var count = 0;
            //点击增加分属，计算价格
            var topicnum =0;
            for( var i = 0;i<this.addList.length;i++){
                count = count+parseInt(this.addList[i].addNumber);
                topicnum += this.addList[i].addNumber* this.addList[i].price;
                console.log(topicnum+"++总价");
            }
            this.setState({
                addNumber:this.addList[key].addNumber,
                sum:count,
                topic:topicnum
            });
        };

    };
    // 减少
    plusChange=(key)=>{
        this.addList=this.state.list;
        // console.log(this.addList[key].addNumber);
        --this.addList[key].addNumber;
        this.sumone=this.state.sum;
        if (this.addList[key].addNumber<0){
            this.addList[key].addNumber=0;
        }else {
            var minusnum =0;
            for( var i = 0;i<this.addList.length;i++){
                minusnum += this.addList[i].addNumber * this.addList[i].price;
                console.log(this.state.topic+"——总价");
            }
            --this.sumone;
            this.setState({
                addNumber:this.addList[key].addNumber,
                sum:this.sumone,
                topic:minusnum
            });
        }
    };
    imdeChange = () =>{
        if (this.state.sum<1){
            this.setState({
                text:"亲 你还没有选择商品哦",
            },()=>this.showToast())
        } else if(this.state.sum>=1){
            var data = new Array();
            for ( var j= 0; j<this.state.list.length; j++){
                if(this.state.list[j].addNumber>=1){
                    var listNumber = { "id": this.state.list[j].id, "addNumber": this.state.list[j].addNumber,"pric":this.state.topic};
                    data.push(listNumber);
                    // console.log("id为"+this.state.list[j].id+"+"+"数量"+ this.state.list[j].addNumber);
                }
            }
            storage.set("listNumber",data);
            this.props.history.push('/SubmitOrder');
        }
    };
    componentDidMount (){
        //获取动态路由传值
        // let _id = this.props.match.params.id;
        // console.log(_id);
        document.title = this.state.title;
    }
}

export default Imdeliver;
