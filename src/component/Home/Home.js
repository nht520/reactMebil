import React,{ Component,Fragment } from "react";
import Carouse from "../Carousel/Carouse";
//引用路由
import {Link } from "react-router-dom";
//
import { HomeWrapper,HomeList} from "../style";
import banner from "../../statics/asstas/bna1.png"
// import {
//      Flex
// } from 'antd-mobile';
import storage from "../../statics/storage";
import Banner from "../../statics/asstas/banner.png";
// import store from "../../store"
class Home extends Component {
    constructor(props){
        super(props);
        //
        this.state=({
            title:"Nai he,tian",
            name:"",
            banner: [
                {
                    id:1,
                    src:banner,
                    alt:"1",
                    path:"CarouseDts/",
                },
                {
                    id:2,
                    src:banner,
                    alt:"2",
                    path:"CarouseDts/",
                },
                {
                    id:10,
                    src:banner,
                    alt:"6",
                    path:"CarouseDts/",
                },
            ],
            list:[
                {
                    id:1,
                    title:"粉色小蛋糕",
                    url_img:Banner,
                    content:"樱桃酒味从巧克力卷的缝隙飘..."
                },
                {
                    id:2,
                    title:"好久没吃到草莓了",
                    url_img:Banner,
                    content:"色泽鲜艳,肉嫩多汁,酸甜可口。"
                },
                {
                    id:3,
                    title:"好久没吃到草莓了",
                    url_img:Banner,
                    content:"鸡肉有增强体力、强壮身体的..."
                },
                {
                    id:4,
                    title:"好久没吃到草莓了",
                    url_img:Banner,
                    content:"有丰富的柠檬酸，因此被誉为“..."
                }
            ]
            // src:"https://www.baidu.com/img/bd_logo1.png",
        })
    }
    homeDate(){
        //从storage获取数据 判断用户是否登录、如果未登录则返回登录页
        this.user = storage.get("user");
        this.realName=this.user.realName;
        if(this.realName.length>=1){
            this.setState({
                name:this.realName
            });
        }else if(this.realName.length<1){
            this.props.history.push('/');
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
    componentDidMount (){
        this.homeDate();
        document.title = "健简";
        // this.reduxDate();
        console.log(this.state.title)
    }

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
                    <ul>
                        {list.map((item,key)=>(
                            <li className="childTwo" key={key}>
                                <Link to={`/Dateils/${item.id}`} >
                                    <img src={item.url_img} alt="我是图片">
                                    </img>
                                    <h3>{item.title}</h3>
                                    <h5>{item.content}</h5>
                                </Link>
                            </li>
                            ))
                        }
                    </ul>
                </HomeList>
            </Fragment>
        )
    }
}
export default Home;
