import React, {Component, Fragment} from "react";
import {SetingWropr} from "../style";
import Button from "@material-ui/core/Button";
import storage from "../../statics/storage";
import {Flex} from "antd-mobile";
class Setting extends Component {
    constructor(props){
        super(props);
        this.state=({
            title:"5252000"
        })
    }
    render(){
        return(
            <Fragment>
                <SetingWropr>
                    <Flex>
                        <Flex.Item>
                            版本号
                        </Flex.Item>
                        <Flex.Item>
                           <span className="right"> V1.28</span>
                        </Flex.Item>
                    </Flex>
                {/*   退出 */}
                    <Button variant="contained" size="large" color="primary" className="addlcinButton" onClick={this.register}>
                        退出
                    </Button>
                </SetingWropr>
            </Fragment>
        )
    }
    //判断用户是否登录
    register = () =>{
        // this.user = storage.get("user");
        storage.remove("user");
        if(this.user==null || this.user===undefined){
            this.props.history.push('/');
        }else if(this.user!==null || this.user!==undefined){
            this.setState({
                name:this.realName
            });
            this.props.history.push('/Layout');
        }
    };
    componentDidMount() {
        document.title="设置"
    }
}
export default Setting;
