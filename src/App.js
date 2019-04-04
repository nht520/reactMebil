import React,{ Component,Fragment } from "react";
//引用路由
import {
    BrowserRouter  as Router,
    Route,
    // HashRouter
    // Link
} from "react-router-dom";
import { Globalstyle } from "./style";
import Login from "./component/Login";
import Register from "./component/Register/Register";
import Layout from "./component/Layout";
import Home from "./component/Home/Home";
import List from "./component/List/List";
import Carousel from "./component/Carousel/Carouse";
import CarouseDts from "./component/Carousel/CarouseDts";
import Header from "./component/Header/Header";
import Dateils from "./component/Dateils/Dateils";
//订单
// import OrderAll from "./component/List/OrderAll";
import IndentDateils from "./component/List/IndentDateils";
import Imdeliver from "./component/Imdeliver/Imdeliver";
import Retail from "./component/Retail/Retail";
import Dstribution from "./component/Distribution/Dstribution";
import Location from "./component/Location/Location";
import AddLocation from "./component/Location/AddLocation";
import RetailDetails from "./component/Dateils/RetailDetails";
//库存
import Inventory from "./component/Inventory/Inventory";
import Detail from "./component/Inventory/Detail";
import FxDateils from "./component/Dateils/FxDateils";
//提交订单
import SubmitOrder from "./component/SubmitOrder/SubmitOrder";
//设置
import Setting from "./component/Setting/Setting";
class App extends Component {
    render(){
        return(
            <Router>
                <Fragment>
                    {/*引用全局样式*/}
                    <Globalstyle/>
                        <Router>
                            <div>
                                <Route path='/' exact component={Login}/>
                                <Route path='/Layout' exact component={Layout}/>
                                <Route path='/Register' exact component={Register}/>
                                <Route path='/Home' exact component={Home}/>
                                <Route path='/List' exact component={List}/>
                                <Route path='/Carousel' exact component={Carousel}/>
                                <Route path='/CarouseDts/:id' exact component={CarouseDts}/>
                                <Route path='/Header' exact component={Header}/>
                                <Route path='/Dateils/:id' exact component={Dateils}/>
                                <Route path='/IndentDateils/:id' exact component={IndentDateils}/>
                                <Route path='/Imdeliver' exact component={Imdeliver}/>
                                <Route path='/Retail' exact component={Retail}/>
                                <Route path='/Dstribution' exact component={Dstribution}/>
                                <Route path='/Location' exact component={Location}/>
                                <Route path='/AddLocation' exact component={AddLocation}/>
                                <Route path='/RetailDetails/:id' exact component={RetailDetails}/>
                                <Route path='/Inventory' exact component={Inventory}/>
                                <Route path='/Detail/:id' exact component={Detail}/>
                                <Route path='/FxDateils/:id' exact component={FxDateils}/>
                                <Route path='/SubmitOrder' exact component={SubmitOrder}/>
                                <Route path='/Setting' exact component={Setting}/>
                            </div>
                        </Router>
                </Fragment>
            </Router>
        )
    }
    componentDidMount (){

    }
}
export default App;
