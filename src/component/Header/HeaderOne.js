import React,{ Component,Fragment } from "react";
import {
    NavBar,
} from 'antd-mobile';
import {
    HeaWaper
} from "../style.js"
class HeaderOne extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"我是头部",
        })
    }
    render(){
        return(
            <Fragment>
                <HeaWaper>
                    <NavBar
                        mode="light"
                    >{this.props.title}</NavBar>
                </HeaWaper>
            </Fragment>
        )
    }
}
export default HeaderOne;
