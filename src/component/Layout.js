import React,{ Component,Fragment } from "react";
import { TabBar } from 'antd-mobile';
import {
    HomeLayout
} from "./style.js"
import Home from "./Home/Home";
import List from "./List/List";
import About from "./About/About";
import tabHome from "../statics/asstas/home.png"
import tabHomeOne from "../statics/asstas/homeOne.png"
import about from "../statics/asstas/about.png"
import aboutOne from "../statics/asstas/aboutOne.png"
import tabList from "../statics/asstas/List.png"
import tabListone from "../statics/asstas/Listone.png"
import shorder from "../statics/asstas/shorder.png"
import shordero from "../statics/asstas/shordero.png"
import ShipmentOrder from "./ShipmentOrder/ShipmentOrder";
class Layout extends Component {
    constructor(props){
        super(props);
        this.state=({
            title:"我是Layout",
            selectedTab: 'redTab',
            value: 0,
        })
    }
    render(){
        return(
            <Fragment>
                <HomeLayout>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#f00"
                        barTintColor="white"
                    >
                        <TabBar.Item
                            icon={{ uri: tabHome }}
                            selectedIcon={{ uri: tabHomeOne }}
                            title="首页"
                            key="首页"
                            selected={this.state.selectedTab === 'redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'redTab',
                                });
                            }}
                        >
                            {/*{this.Home()}*/}
                            <Home history={this.props.history}/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri:tabListone  }}
                            selectedIcon={{ uri: tabList }}
                            title="发货订单"
                            key="发货订单"
                            selected={this.state.selectedTab === 'greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'greenTab',
                                });
                            }}
                        >
                            {/*<List/>*/}
                            <ShipmentOrder/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri:shorder  }}
                            selectedIcon={{ uri: shordero }}
                            title="订货订单"
                            key="订货订单"
                            selected={this.state.selectedTab === 'blueTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'blueTab',
                                });
                            }}
                        >
                            <List/>
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: about }}
                            selectedIcon={{ uri: aboutOne }}
                            title="我的"
                            key="我的"
                            selected={this.state.selectedTab === 'yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: 'yellowTab',
                                });
                            }}
                        >
                            <About/>
                        </TabBar.Item>
                    </TabBar>
                </HomeLayout>
            </Fragment>
        )
    }

    componentDidMount(){
    }

}
export default Layout;
