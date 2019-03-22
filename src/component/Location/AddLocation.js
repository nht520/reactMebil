import React,{ Component,Fragment } from "react";
import {
    AddWrapper
} from "../style";
import {
    // Button,
    InputItem
} from "antd-mobile";
class AddLocation extends Component {
    constructor(props){
        super(props);
        this.state=({

        })
    }
    render(){
        return(
            <Fragment>
                <AddWrapper>
                    <InputItem
                        clear
                        placeholder="请输入收货人姓名"
                    >收货人 :</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入联系电话"
                    >联系电话 :</InputItem>
                    <InputItem
                        clear
                        placeholder="auto focus"
                    >详细地址 :</InputItem>
                    {/**/}
                </AddWrapper>
            </Fragment>
        )
    }
    componentDidMount(){
        document.title="添加发货地址"
    }
}

export default AddLocation;
