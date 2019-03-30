import React,{ Component,Fragment } from "react";
import { Modal, Button, } from 'antd-mobile';
const alert = Modal.alert;
class Dialogs extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"我是提示",
            open: false
        })
    }

    render(){
        return(
            <Fragment>
                <Button
                    onClick={() =>
                        alert('提示！', '是否确认购买???', [
                            { text: '取消', onPress: () => console.log('cancel') },
                            { text: '确认', onPress: () => console.log('ok') },
                        ])
                    }
                >
                    confirm
                </Button>
            </Fragment>
        )
    }
    componentDidMount() {
        console.log("我是提示")
    }
}
export default Dialogs;