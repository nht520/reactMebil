import React,{ Component,Fragment } from "react";
import { NavBar} from 'antd-mobile';
import src from "../../statics/asstas/ruent.png"
import {
    HeaWaper
} from "../style.js"
class Header extends Component{
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
                        // leftContent="left"
                        mode="light"
                        icon={<img src={src} className="am-icon am-icon-md" alt="" />}
                        onLeftClick={this.handleClick}
                        className="top-nav-bar"
                    >
                        {this.props.title}
                    </NavBar>
                </HeaWaper>
            </Fragment>
        )
    }
    handleClick=()=>{
        this.props.history.go(-1)
        // history.back()
    }

}
export default Header;
