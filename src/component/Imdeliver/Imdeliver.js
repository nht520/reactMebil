import React,{ Component,Fragment } from "react";
import {
    // Button,
    Toast,
    Flex,} from "antd-mobile";
import {
     ImdeList,ImdeItem,ImdeLeft,ImdeRight,ImdeButton,DateilsButton,ImdeAdd,
    ImLeft,ImRight
} from "../style";
// import {
//     Link
// } from "react-router-dom";
import storage from "../../statics/storage";
import Button from "@material-ui/core/Button/Button";
import Axios from "axios";
class Imdeliver extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"发货",
            sum:"0",
            listNumber:[],
            topic:0,
            list:[]
        })
    }
    render(){
        const { list } = this.state;
        return(
            <Fragment>
                {
                    list.map((item,key)=>(
                        <ImdeList key={key} onClick={this.addChange.bind(this,key)}>
                            {/*<Link to={`/Dateils/${item.id}`}>*/}
                                <ImdeItem>
                                    <ImdeLeft>
                                        <img src={item.goodsEntity.goodsImage} alt="img"/>
                                    </ImdeLeft>
                                    <ImdeRight>
                                        <Flex className="title">
                                            <Flex.Item className="invTitle">{item.goodsEntity.goodsName}</Flex.Item>
                                        </Flex>
                                        <h5 className="ordDtels">
                                            {item.goodsEntity.goodsContent}
                                        </h5>
                                    </ImdeRight>
                                </ImdeItem>
                            {/*</Link>*/}
                            <ImdeButton>
                                <ImdeAdd>
                                    <ImLeft>
                                        <Flex.Item>可用库存（<font className="red">{item.boxNum}</font>）</Flex.Item>
                                    </ImLeft>
                                    <ImRight>
                                        <ul>
                                            <li className="berLeft" onClick={this.subtractChange.bind(this,key)}>
                                                <span>十</span>
                                            </li>
                                            <li className="numberDv">
                                                {item.addNumber}
                                            </li>
                                            <li className="berRight" onClick={this.plusChange.bind(this,key)}>
                                                <span>一</span>
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
                        <Flex.Item>发货单 <span className="shipments">({this.state.sum})</span></Flex.Item>
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
        // console.log(addList[key]);
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
                //计算总价
                topicnum += this.addList[i].addNumber * this.addList[i].mealEntity.mealPrice;
                console.log(topicnum+"++总价");
            }
            this.setState({
                addNumber:this.addList[key].addNumber,
                sum:count,
                topic:topicnum
            });
        }
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
                minusnum += this.addList[i].addNumber * this.addList[i].mealEntity.mealPrice;
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
            //将数量大于1的商品储存在listNumber并放在storage
            var data = new Array();
            for ( var j= 0; j<this.state.list.length; j++){
                if(this.state.list[j].addNumber>=1){
                    var listNumber =this.state.list[j];
                    //     {
                    //     "list": this.state.list[j],
                    //     // "id": this.state.list[j].id,
                    //     // "addNumber": this.state.list[j].addNumber,
                    //     // "pric":this.state.topic};
                    // };
                    data.push(listNumber);
                    // console.log("id为"+this.state.list[j].id+"+"+"数量"+ this.state.list[j].addNumber);
                }
            }
            //存所选订单数据
            storage.set("imdeliverList",data);
            var param = new URLSearchParams();
                param.append("orderGoods",JSON.stringify(data));
                // param.append("distributorId",this.userid);
                param.append("distributorId",this.userid);
                param.append("orderPrice",this.state.topic);
                param.append("orderStatus",0);//未付款
                const api = window.g.indent;
            Axios.post(api,param).then((res)=>{
                storage.remove("deliverId");
                //存h获取订单数据
                storage.set("deliverId",res.data.data);
            },(err)=>{
                console.log(err)
            });
            // storage.set("listNumber",data);
            this.props.history.push('/SubmitOrder');
        }

    };
    stock=()=>{
        const api = window.g.stock;
        this.id = storage.get("user");
        this.userid=this.id.id;
        var param = {
            params:{
                distributorId:this.id.id,
            }
        };
        Axios.get(api,param).then((res)=>{
            this.setState({
                list:res.data.records
            });
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
        this.stock();
        //获取动态路由传值
        // let _id = this.props.match.params.id;
        // console.log(_id);
        document.title = this.state.title;
        // storage.remove("deliverId"); storage.remove("deliverId");
    }
}

export default Imdeliver;
