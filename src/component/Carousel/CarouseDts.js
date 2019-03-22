import React,{ Component,Fragment } from "react";
class CarouseDts extends Component {
    constructor(props){
        super(props);
        this.state=({
            title:"我是轮播详情"
        })
    }
    render(){
        return(
            <Fragment>
                {/*<Header title={title} history ={this.props.history}/>*/}
                <h1>{this.props.title}</h1>
                <h2>2222222222</h2>
            </Fragment>
        )
    }
    componentDidMount (){
        //获取动态路由传值
        let _id = this.props.match.params.id;
        console.log(_id);
        document.title = "详情";
    }
}
export default CarouseDts;
