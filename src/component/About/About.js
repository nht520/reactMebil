import React,{ Component,Fragment } from "react";
//引用路由
import { Link  } from "react-router-dom";
import {AboutWrapper, AboutDtae, HomeWrapper,AboutList} from "../style";
import yhujua from "../../statics/asstas/yhujua.png";
import scan from "../../statics/asstas/scan.png";
import dindan from "../../statics/asstas/dindan.png";
import laxi from "../../statics/asstas/laxi.png";
import site from "../../statics/asstas/site.png";
import {
    Flex,List
} from 'antd-mobile';
import storage from "../../statics/storage";
import Axios from "axios";
class About extends Component {
    constructor(props){
        super(props);
        this.state=({
            name:"",
            iphone:"",
            pric:"",
            uid:"",
            kucun:"999",
            urlImg:"",
            list:[
                {
                    id:1,
                    title:"商城零售记录",
                    thumb:scan,
                    path:"/Retail",
                },
                {
                    id:2,
                    title:"分销客户订单",
                    thumb:yhujua,
                    path:"/Dstribution",
                },
                {
                    id:3,
                    title:"我要发货",
                    thumb:dindan,
                    path:"/Imdeliver",
                },
                {
                    id:4,
                    title:"我的地址",
                    thumb:laxi,
                    path:"/Location",
                },
                {
                    id:5,
                    title:"关于我们",
                    thumb:site,
                    path:"/Setting",
                }
            ]
        })
    }
    render(){
        const Item = List.Item;
        const { list,urlImg } = this.state;
        return(
            <Fragment>
                <AboutWrapper>
                   <AboutDtae>
                       <HomeWrapper>
                           <Flex className="user">
                               <Flex.Item>
                                   <h1>{this.state.name}</h1>
                                   <h3>电话：{this.state.iphone}</h3>
                               </Flex.Item>
                               <Flex.Item>
                                   <img src={ urlImg } alt="我是图片"></img>
                               </Flex.Item>
                           </Flex>
                           {/**/}
                           <Flex className="About">
                               <Flex.Item>
                                   <h2>{this.state.pric}</h2>
                                   <h4>我的余额</h4>
                               </Flex.Item>
                               <Flex.Item>
                                   <Link to="/Inventory">
                                       <h2>{this.state.kucun}</h2>
                                       <h4>我的库存</h4>
                                   </Link>
                               </Flex.Item>
                               <Flex.Item>
                                   {/*<Link to="/Header">*/}
                                       <span className="message">个人信息</span>
                                   {/*</Link>*/}
                               </Flex.Item>
                           </Flex>
                       </HomeWrapper>
                   </AboutDtae>
                    {/**/}
                    <AboutList>
                        <List className="my-list">
                            {
                                list.map((item,key)=>(
                                    <Link to={item.path} key={key}>
                                        <Item
                                            arrow="horizontal"
                                            thumb={item.thumb}
                                            multipleLine
                                        >
                                            {item.title}
                                        </Item>
                                    </Link>
                                ))
                            }
                        </List>
                    </AboutList>
                </AboutWrapper>
            </Fragment>
        )
    }
    //从storage获取数据
    homeDate = () =>{
        this.user = storage.get("user");
        this.realName=this.user.memberName;
        this.iphone=this.user.memberPhone;
        this.urlImg=this.user.memberHead;
        this.Uid=this.user.memberUid;
        console.log(this.Uid+"===");
        this.setState({
            name:this.realName,
            iphone:this.iphone,
            urlImg:this.urlImg,
            uid:this.Uid,
        });
    };
    //获取余额
    mcMembers =()=>{
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
            storage.set("listNumber",res.data.data.credit2);
            this.setState({
                pric:credit2
            })
        },(err)=>{
            console.log(err)
        })
    };
    componentDidMount (){
        // document.title = "个人中心";
        this.homeDate();
        this.mcMembers();
    }
}
export default About;
