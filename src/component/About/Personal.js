import React,{ Component,Fragment } from "react";
import {InputItem } from 'antd-mobile';
import { PersonalWrapper } from "../style.js";
import Button from "@material-ui/core/Button";
import { Upload, message } from 'antd';
import storage from "../../statics/storage";
function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

function beforeUpload(file) {
    const isJPG = file.type === 'image/jpeg';
    if (!isJPG) {
        message.error('You can only upload JPG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
    }
    return isJPG && isLt2M;
}
class Personal extends Component {
    constructor(props){
        super(props);
        this.state=({
            preac:"个人中心",
            loading: false,
            username:"",
            url:require("../../statics/asstas/banner.png"),
            files:[
                {
                    url:require("../../statics/asstas/banner.png"),
                    id: '1',
                },
            ],
        })
    }
    handleChange = (info) => {
        if (info.file.status === 'uploading') {
            this.setState({ loading: true });
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => this.setState({
                imageUrl,
                loading: false,
            }));
        }
    };
    saveChange=()=>{
      const user = storage.get("user");
      this.setState({
          username:user.memberName,
          iphone:user.memberPhone,
      })
      console.log(user)
    };
    componentDidMount() {
        this.saveChange()
    };

    render() {
        const { url } = this.state;
        const uploadButton = (
            <div className="imgProfile">
                <img src={url}></img>
            </div>
        );
        const imageUrl = this.state.imageUrl;
        return(
            <Fragment>
                <PersonalWrapper>
                    <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="//jsonplaceholder.typicode.com/posts/"
                        beforeUpload={beforeUpload}
                        onChange={this.handleChange}
                    >
                        {imageUrl ? <img src={imageUrl} alt="avatar" /> : uploadButton}
                    </Upload>
                {/*    */}
                    <h5>ID :{this.state.iphone}</h5>
                    <br/>
                    <InputItem
                        placeholder={this.state.username}
                        moneyKeyboardAlign="left"
                    >昵称：</InputItem>
                    <Button variant="contained" size="large" color="primary" className="addlcinButton" onClick={this.addSave}>
                        保存
                    </Button>
                </PersonalWrapper>
            </Fragment>
        )
    }
}
export default Personal;
