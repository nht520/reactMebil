import React,{ Component,Fragment } from "react";
import Carouse from "../Carousel/Carouse";
//引用路由
import {Link } from "react-router-dom";
//
import { HomeWrapper,HomeList} from "../style";
import banner from "../../statics/asstas/bna1.png"
// import {
//     PullToRefresh
// } from 'antd-mobile';
import storage from "../../statics/storage";
// import store from "../../store"
import Axios from "axios";
import {Toast} from "antd-mobile";
class Home extends Component {
    constructor(props){
        super(props);
        //
        this.state=({
            title:"Nai he,tian",
            name:"",
            list:[],
            buyClass:"childTwo",
            banner: [
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
            // src:"https://www.baidu.com/img/bd_logo1.png",
        })
    }
    showToast = () => {
        Toast.info(this.state.text);
    };
    homeDate(){
        //从storage获取数据 判断用户是否登录、如果未登录则返回登录页
        this.user = storage.get("user");
        if(this.user==null || this.user===undefined){
            this.props.history.push('/');
        }else if(this.user!==null || this.user!==undefined){
            this.setState({
                name:this.realName
            });
        }
    //从redux获取值
    // reduxDate = () =>{
    //     // //store.getState()拿到store里面的数据
    //     this.user = store.getState();
    //     console.log(this.user.user.realName,);
    //     this.setState({
    //         name:this.user.user.realName,
    //     });
    //     //感知store的变化 当数据变化的时候便重新去更新一次store的数据
    //     store.subscribe(this.storeMonitor);
    // };
    // storeMonitor = () =>{
    //     this.setState(store.getState())
    };
    homeList =()=>{
        var api =window.g.meal;
        Axios.get(api).then((res)=>{
            let homeList=res.data.records;
            this.setState({
                list:homeList
            });
        },(err)=>{
            console.log(err);
        })
    };
    componentDidMount (){
        this.homeList();
        this.homeDate();
        this.unernameId();
        document.title = "健简";
        // this.reduxDate();
        // console.log(this.state.title);
        //获取数据将数据存在store
    }
    ipClass=(id,buyLevel)=>{
        this.mbid = storage.get("user");
        this.buyLevel=buyLevel;
        // console.log(this.memberLevel.memberLevel);
        // this.props.history.push(`/IndentDateils/${id}`);
        if ((this.mbid.memberLevel === 1 && (this.buyLevel === 1 || this.buyLevel === 1)) || this.buyLevel === 0 ){
            this.props.history.push(`/Dateils/${id}`);
        }else{
            this.setState({
                text:"亲 你不能购买此套餐哦！",
            },()=>this.showToast())
        }
        if  ((this.mbid.memberLevel === 2 && (this.buyLevel === 2 || this.buyLevel === 2)) || this.buyLevel === 0 ){
            this.props.history.push(`/Dateils/${id}`);
        }else{
            this.setState({
                text:"亲 你不能购买此套餐哦！",
            },()=>this.showToast())
        }
        if ((this.mbid.memberLevel === 3 && (this.buyLevel === 3 || this.buyLevel === 3)) || this.buyLevel === 0 ){
            this.props.history.push(`/Dateils/${id}`);
        }else{
            this.setState({
                text:"亲 你不能购买此套餐哦！",
            },()=>this.showToast())
        }
        if ((this.mbid.memberLevel === 4 && (this.buyLevel === 4)) || this.buyLevel === 0 ){
            this.props.history.push(`/Dateils/${id}`);
        }else{
            this.setState({
                text:"亲 你不能购买此套餐哦！",
            },()=>this.showToast())
        }
    };
    unernameId=()=>{
        const api = window.g.findById;
        this.id = storage.get("user");
        this.Uid=this.id.id;
        let param = {
            params:{
                id:this.Uid,
            }
        };
        Axios.get(api,param).then((res)=>{
            storage.set("user",res.data.data)
        })
    };

    render(){
        const { list,banner } = this.state;
        return(
            <Fragment>
                <HomeWrapper>
                    {/*<Flex className="user">*/}
                        {/*<Flex.Item>*/}
                            {/*<h1>{this.state.name}</h1>*/}
                        {/*</Flex.Item>*/}
                        {/*<Flex.Item>*/}
                            {/*<img src={banner} alt="我是图片"></img>*/}
                        {/*</Flex.Item>*/}
                    {/*</Flex>*/}
                    {/*引用轮播*/}
                    <Carouse list={banner} />
                </HomeWrapper>
                <HomeList>
                    {/*套餐列表*/}
                    {/*<ul>*/}
                    {/*    {list.map((item,key)=>(*/}
                    {/*        <li className={this.state.buyClass} key={key} onClick={this.ipClass.bind(this,item.id,item.buyLevel)}>*/}
                    {/*            /!*{item.id}*!/*/}
                    {/*            <img src={item.mealImage} alt="我是图片">*/}
                    {/*            </img>*/}
                    {/*            <h3>{item.mealName}</h3>*/}
                    {/*            <h5>{item.mealContent}</h5>*/}
                    {/*        </li>*/}
                    {/*    ))*/}
                    {/*    }*/}
                    {/*</ul>*/}
                </HomeList>
            </Fragment>
        )
    }
}

export default Home;
