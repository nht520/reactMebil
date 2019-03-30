import React,{ Component,Fragment } from "react";
import {
    // Button,
    Flex} from "antd-mobile";
import {
    ImdeList, ImdeItem, ImdeLeft,
    ImdeRight, ImdeButton, ImdeAdd,
    ImLeft, ImRight
} from "../style";
import {
    Link
} from "react-router-dom";
import Button from "@material-ui/core/Button/Button";
class Inventory extends Component{
    constructor(props){
        super(props);
        this.state=({
            title:"我的库存",
            list:[
                {
                    id:1,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:"352.00",
                    repertory:"1",
                }, {
                    id:2,
                    imgurl:"https://www.baidu.com/img/bd_logo1.png",
                    title:"炸鸡汉堡王",
                    details:"鸡肉肉质细嫩，滋味鲜美，由于其味较淡，因此可使用于各种料理中的..",
                    price:"352.00",
                    repertory:"1",
                },
            ]
        })
    }
    render(){
        const { list } = this.state;
        return(
            <Fragment>
                {/*<IndentWrapper>*/}
                {
                  list.map((item,key)=>(
                      <ImdeList key={key}>
                          <Link to={`/Detail/${item.id}`}>
                              <ImdeItem>
                                  <ImdeLeft>
                                      <img src={item.imgurl} alt="img"/>
                                  </ImdeLeft>
                                  <ImdeRight>
                                      <Flex className="title">
                                          <Flex.Item>{item.title}</Flex.Item>
                                          <Flex.Item>特惠价:<span>￥{item.price}</span></Flex.Item>
                                      </Flex>
                                      <h5 className="ordDtels">
                                          {item.details}
                                      </h5>
                                  </ImdeRight>
                              </ImdeItem>
                          </Link>
                          <ImdeButton>
                              <ImdeAdd>
                                  <ImLeft>
                                      可用库存<span className="red">({item.repertory})</span>
                                  </ImLeft>
                                  <ImRight>
                                      <Button variant="outlined" size="small" color="primary" className="ordering">
                                          去订货
                                      </Button>
                                  </ImRight>
                              </ImdeAdd>
                          </ImdeButton>
                      </ImdeList>
                  ))
                }
            </Fragment>
        )
    }
    componentDidMount (){
        document.title = this.state.title;
    }
}

export default Inventory;
