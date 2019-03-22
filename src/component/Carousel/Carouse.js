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
                    path:"/Login/",
                },
                {
                    id:2,
                    src:Banner,
                    alt:"2",
                    path:"/Login/",
                },
                {
                    id:10,
                    src:Banner,
                    alt:"6",
                    path:"/Login/",
                },
            ],
            imgHeight: 176,
        })
    }
    render(){
        const { banner } = this.state;
        return(
            <Fragment>
                <CarouseWrapper>
                    <WingBlank>
                        <Carousel
                            // autoplay={true}
                            infinite
                        >
                            {banner.map((item,key) => (
                                <Link
                                    // to={{ pathname:`/CarouseDts`, state:{id:item.id}  }}
                                    key={key}
                                    to={`/CarouseDts/${item.id}`}
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
