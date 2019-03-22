import React,{ Component,Fragment } from "react";
import { Carousel, WingBlank } from 'antd-mobile';
import Banner from "../../statics/asstas/banner.png"
import {  Link } from "react-router-dom";
import {CarouseWrapper} from "../style";
// import Axios from "axios";
class Carouse extends Component{
    constructor(props){
        super(props);
        this.state=({
            banner: [
                {
                    id:1,
                    src:Banner,
                    alt:"1",
                    path:"CarouseDts",
                },
                {
                    id:2,
                    src:Banner,
                    alt:"2",
                    path:"CarouseDts",
                },
                {
                    id:10,
                    src:Banner,
                    alt:"6",
                    path:"CarouseDts",
                },
            ],
            imgHeight: 176,
        })
    }
    componentDidMount(){
        console.log(this.props.list+"222");
    }
    render(){
        const { list } = this.props;
        return(
            <Fragment>
                <CarouseWrapper>
                    <WingBlank>
                        <Carousel
                            // autoplay={true}
                            infinite
                        >
                            {list.map((item,key) => (
                                <Link
                                    // to={{ pathname:item.path,${item.id}  }}
                                    key={key}
                                    to={`${item.path}${item.id}`}
                                >
                                    <img src={item.src}  alt="11"/>
                                </Link>
                            ))}
                        </Carousel>
                    </WingBlank>
                </CarouseWrapper>
            </Fragment>
        )
    }
}
export default Carouse;
