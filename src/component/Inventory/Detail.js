import React,{ Component,Fragment } from "react";
import {
    DetailWrapper,DetailUl,DetailLi,DetailAll
} from "../style";
import {
    Flex
} from "antd-mobile";
import details from "../../statics/asstas/details.png"
class Detail extends Component{
    constructor(props){
        super(props);
        this.state=({

        })
    }
    componentDidMount(){
        document.title="库存明细"
    }
    render(){
        return(
            <Fragment>
                <DetailWrapper>
                    {/*库存*/}
                    <DetailAll>
                        <img src={details} alt="details"/>
                        剩余库存量 : 70
                    </DetailAll>
                    {/**/}
                    <DetailUl>
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                        <DetailLi>
                            <h3>剩余库存量 : 80</h3>
                            <Flex>
                                <Flex.Item className="time">2015-03-16    16:40:15 </Flex.Item>
                                <Flex.Item className="left">-10 </Flex.Item>
                            </Flex>
                        </DetailLi>
                    </DetailUl>
                </DetailWrapper>
            </Fragment>
        )
    }
}

export default Detail;
