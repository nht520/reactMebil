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
class Home extends Component {
    constructor(props){
        super(props);
        //
        this.state=({
            title:"Nai he,tian",
            name:"",
            list:[],
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
            // src:"https://www.baidu.com/img/bd_logo1.png",
        })
    }
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
    componentDidMount (){
        this.homeDate();
        document.title = "健简";
        // this.reduxDate();
        // console.log(this.state.title);
        //获取数据将数据存在store
        var api =window.g.meal;
        Axios.get(api).then((res)=>{
            // console.log(res);
            let homeList=res.data.records;
            this.setState({
                list:homeList
            })
        },(err)=>{
            console.log(err);
        })
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
                        {/*{list.map((item,key)=>(*/}
                        {/*    <li className="childTwo" key={key}>*/}
                        {/*        <Link to={`/Dateils/${item.id}`} >*/}
                        {/*            <img src={item.mealImage} alt="我是图片">*/}
                        {/*            </img>*/}
                        {/*            <h3>{item.mealName}</h3>*/}
                        {/*            <h5>{item.mealContent}</h5>*/}
                        {/*        </Link>*/}
                        {/*    </li>*/}
                        {/*    ))*/}
                        {/*}*/}
                    </ul>
                </HomeList>
            </Fragment>
        )
    }
}
export default Home;
