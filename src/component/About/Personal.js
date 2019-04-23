import React,{ Component,Fragment } from "react";
import { ImagePicker,WingBlank } from 'antd-mobile';
import { PersonalWrapper } from "../style.js";
class Personal extends Component {
    constructor(props){
        super(props);
        this.state=({
            preac:"个人中心",
            files:[
                {
                    url:require("../../statics/asstas/banner.png"),
                    id: '1',
                },
            ],
            multiple: false,
        })
    }
    onChange = (files, type, index) => {
        console.log(files, type, index);
        this.setState({
            files,
        });
    }
    render() {
        const { files } = this.state;
        return(
            <Fragment>
                <PersonalWrapper>
                    <WingBlank>
                        <ImagePicker
                            length="1"
                            files={files}
                            onChange={this.onChange}
                            onImageClick={(index, fs) => console.log(index, fs)}
                            selectable={files.length < 1}
                            multiple={this.state.multiple}
                        />
                    </WingBlank>
                {/*    */}
                <h5>昵称 : 奈何天</h5>

                </PersonalWrapper>
            </Fragment>
        )
    }
}
export default Personal;
