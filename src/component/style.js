import styled from 'styled-components';
//登录
export const HomeWrapper = styled.div`
     padding:5% 4% 5% 4%;
     h1{
        color:#252433;
        margin:0px;
        font-weight: bold;
        font-size: 24px;
     }
     .am-wingblank.am-wingblank-lg{
        margin:0px;
        // margin-top:6%;
     }
     .imgRight{
        text-align: right;
     }
     .user img{
        width: 55px;
        height: 55px;
        border-radius: 100%;
     }
     .am-flexbox-item img{
        width: 50px;
        height: 50px;
        border-radius: 100%;
        float: right;
     }
     h4{
        color:#8f8f8f;
        font-weight: 500;
        font-size: 13px;
     }
     h3{
        color:#8f8f8f;
        font-weight: 500;
        font-size: 13px;
        margin-top: 10%;
     }
     .About{
        margin-top:6%;
     }
     .About h4{
        color:#292b33;
        margin-top:10px;
        padding:0px;
        font-weight: 500;
     }
      .About h2{
        margin:10px 0px 0px 0px;
        font-size: 18px;
        font-weight:bold;
        color:#292b33;
     }
      .message{
        color: #8f8f8f;
        background: #f5f6fa;
        padding: 6% 10%;
        float: right;
        text-align: center;
        border-radius: 20px 0px 20px  0px;
        font-size: 12px;s
     }
     .am-tabs-content-wrap{
        margin-top:8% !important;
     }
`;

export const HomeList = styled.div`
     padding: 0% 4% 0% 4%;
      ul li{
       list-style: none;
       width:48%;
       float:left;
       margin-bottom:3%;
       height: 210px;
     }
     .childTwo:nth-child(even){
        margin-left:4% !important;
     }
     ul{
        margin:0px;
        padding:0px;
     }
     ul li img{
      width: 100%;
      height:150px;
      border-radius:5px;
     }
     ul li h3{
        margin:8px 0px 3px 0px;
        color:#252433;
        font-weight: bold;
        font-size: 14px;
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
         overflow:hidden
         height:18px;
         line-height:18px;
     }
    ul li h5{
        color:#8f8f8f;
        margin:6px 0px;
        font-weight: 400;
        font-size: 12px;
        display:block;
        text-overflow:ellipsis;
        white-space:nowrap;
        overflow:hidden
     }
`;
//
export const HomeLayout = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    bottom: 0px;
    background: #ffffff;
`;
//订单
export const ListWaper = styled.div`
    // margin-top: 45px;
    .am-tabs-default-bar-tab-active font{
        color:#f00
    }
    .am-tabs-default-bar-underline{
        border: 1px #F00 solid;
    }
    .am-tabs-default-bar-tab-active{
        color:#f00;
    }
    .am-tabs-tab-bar-wrap{
      position: fixed;
      width: 100%;
      background: #ffffff;
      z-index: 999;  
    }
    .am-tabs-content-wrap{
       margin-top:45px !important;
    }
    .am-tabs-default-bar-tab{
        font-size:13px;
       font-weight: bold;
    }
`;
export const ListItem = styled.div`
    .am-whitespace.am-whitespace-md{
        height:0px;
    }
    
`;
//头部
export const HeaWaper = styled.div`
    // position: fixed;
    // z-index: 9999;
    // width: 100%;
    // top:0px;
    .am-flexbox{
        height:45px;
        font-size:16px;
        text-align: center;
    }
    img{    
        width: 9px;
         height: 15px;
    }
    .am-flexbox .am-flexbox-item{
        line-height:45px;
    }
    .left{
        padding-left: 15px;
        font-size: 16px;
        text-align: left;
        margin-top: 6px;
    }
    .am-navbar-light .am-navbar-title{
        color:#292b33;
        font-weight:600;
    }
    .am-navbar-left-icon{
        color:#f00;
    }
`;
//轮播
export const CarouseWrapper = styled.div`
 // .slider-frame{
 //    border-radius:10px;
 // }
 img{
    width:100%;
    height:160px;
    border-radius: 5px;
 }
 .slider-decorator-0{
    bottom:8px !important;
    opacity: 0.5;
 }
 .am-carousel-wrap-dot-active span{
    background:#f00;
 }
`;
//个人中心
export const AboutWrapper = styled.div` 
    padding: 0% 5%;
    margin-top: 5%;
`;
export const AboutDtae = styled.div`
    border-radius: 5px ;
    box-shadow:2px 4px 21px #efefef;
`;
export const AboutList =styled.div`
    margin-top:5%;
    .my-list .am-list-body::before{
        background-color:#ffffff;
    }
    .my-list .am-list-body::after{
        background-color:#ffffff;
    }
    .am-list-item{
        line-height:50px;
        padding:0px;
    }
    .am-list-item .am-list-line .am-list-content{
        color:#292b33;
        font-size:14px;
    }
    .am-list-item .am-list-line .am-list-arrow{
        width:12px;
        height:12px;
    }
    .am-list-item img{
        width:20px;
        height:20px;
    }
`;
export const SettingWropr = styled.div`
    padding:5%;
    
`;
//全部订单
export const OrdeWrapper = styled.div`
    padding:5%;
    .title{
       font-weight: bold;
    }
     .payment{
        text-align:right;
     }
     .deliver{
        color:#f00;
        text-align: right;
     }
     .img{
        width:20px;
        height:20px;
     }
`;
export const OrdeList  = styled.ul`
    width:100%;
    padding:0px;
    .sc-gqjmRU:last-child{
        border-bottom: 1px solid #e5e5e5;
        padding-bottom: 3%;
    }
    .am-button{
        float:right;
        // border-radius: 0px !important;
        height:35px;
        line-height: 35px;
        padding: 0 18px;
        // width: 95px;
    }
`;
export const OrderList= styled.div`
    width:100%;
    float:left;
    margin-bottom:5%;
    .freight{
        text-align: right;
        color:#252433;
    }
    .title{
        color:#252433;
        height: 20px;
         line-height: 20px;
    }
    .header{
        margin-bottom:5%;
        font-size: 13px;
        height: 20px;
        line-height: 20px;
        font-weight: bold;
    }
`;
export const OrdeItem  = styled.li`
    list-style: none;
    margin: 0% 0% 5% 0%;
    width: 100%;
    float: left;
    .linkSkip{
        border: 1PX solid #ddd;
        padding: 2.5% 5%;
        border-radius: 5px;
        color:#252433;
        float: right;
        font-size: 13px;
    }
`;
export const OrdeLeft = styled.div`
    width:30%;
    float:left;
    height: 78px;
     img{
        width:100%;
        height: 75px;
        border-radius: 3px;
    }
`;
export const OrdeRight = styled.div`
   width:70%;
   float:left;
   box-sizing: border-box;
   height: 78px;
   padding: 2% 0% 0% 3%;
   .am-flexbox-item{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
   }
   font-size: 13px;
`;
export const OneLeft = styled.div`
    width: 85%;
    float: left;
    color: #8f8f8f;
    margin-top: 4%;
    line-height: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
`;
export const TwoRight = styled.div`
    width:15%;
    float:right;
    text-align:right;
    color:#8f8f8f;
    margin-top: 32px;
`;


//登录
export const LoginWrapper = styled.div`
    padding:5% 4%;
    text-align: center;
    input{
        width: 97%;
        border: none;
        margin-top: 6%;
        height:45px;
        line-height: 45px;
        text-align: CENTER;
        background: #f8f8f8;
        border-radius: 100px;
    }
    h1{
        margin-top: 30%;
        margin-bottom:8%;
        font-weight: bold;
    }
    .logButton{
        background:#292b33;
        color:#ffffff;
        margin-top:12%;
        width:100%;
        height:50px;
    }
    .logButton:hover{
        background:#303032;
        transition: 1s;
    }
    h5{
       text-align: right; 
       color:#8f8f8f;
       font-weight: 100;
       margin-top: 8%;
    }
    .register{
         float:left;
         a{
          color:#8f8f8f;
         }
    }
    .retuout a{
     color:#8f8f8f;
    }
`;
//商品详情
export const DateilsWrapper = styled.div`
    .am-wingblank.am-wingblank-lg{
        margin:0px;        
    }
    .iFAthZ img{
        border-radius: 0px;
    }
`;
export const DaetilsList = styled.div`
    padding:4% 5%;
    margin-bottom:65px;
    h3{
        margin:0px;
        color:#252433;
        font-weight: bold;
        font-size: 16px;
        margin: 3% 0%;
    }
    h5{
        color:#8f8f8f;
        font-weight: 100;
        line-height: 21px;
        font-size: 14px;
    }
    .original{
       text-decoration:line-through;
       color:#8f8f8f;
    }
    .strong{
        margin-left:4%;
        color:#f00;
        font-size:18px;
    }
    .headline{
        margin-top:5%;
    }
`;
export const DatilHeadline =styled.div`
    margin-top:6%;
    // ul{
    //     padding:0px;
    // }
    // ul li{
    //     list-style: none;
    //     color:#252433;
    //      line-height:25px;   
    // }
    // ul li span{
    //     color:#8f8f8f;
    // }
    p{
        line-height:30px;
    }
    img{
        width:100%;
    }
`;
export const DateilsButton = styled.div`
        height: 60px;
        line-height: 60px;
        border-top: 1px solid #e5e5e5;
        position: fixed;
        z-index: 999;
        width: 100%;
        bottom: 0px;
        background: #ffffff;
         button{
            border:1px solid #ddd;
            color: #f00;
            width:100px;
            height:40px;
            border-radius: 3px;
            text-align: center;
            font-size:12px;
        }
        button:hover{
           border:1px solid #ddd;
        }
     .cancel{
        color:#252433;
         // border: 1px solid #e5e5e5 !important;
     }
     .shipments{
         font-weight: bold;
         color:#f00;
         font-size:16px;
     }
     .am-modal-button{
        color:#f00 !important;
     }
     ul li{
        width: 20%;
        float: right;
        border: 1px solid #f3f3f3;
        text-align: center;
        height: 37px;
        line-height: 37px;
     }
    .numberDv{
        width: 18%;
        text-align: center; 
        border-left:0px;
        border-right:0px;
    }
    .berLeft{
       border-left: 0px;
       span{
          color:#252433;
          font-weight: bold;
       }
    }
    .berRight{
        border-right:0px;
    }
     
     
     
     
     
`;
//订货
export const ImdeAdd =styled.div`
    width:100%;
    float:right;
    line-height: 30px;
    ul li{
       width: 20%;
        float: right;
        /* padding: 15% 35%; */
        /* border-radius: 5px; */
        border: 1px solid #f3f3f3;
        text-align: center;
        height: 30px;
        line-height: 30px;
    }
    span{
        color:#8f8f8f;
        font-size:12px;
    }
    .addJoin{
        width:50%;
        margin-left:3%;
    }
    .joinSpan{
        padding:5% 10%;
        width: 50%;
        margin-left: 5%;
    }
    .numberDv{
        width: 18%;
        text-align: center; 
        border-left:0px;
        border-right:0px;
    }
    .berLeft{
       border-left: 0px;
       span{
          color:#252433;
          font-weight: bold;
       }
    }
    .berRight{
        border-right:0px;
    }
`;
export const ImLeft = styled.div`
    width:60%;
    float:left;
    .red{
        color:#F00;
    }
`;
export const ImRight = styled.div`
     width:40%;
     float:right;   
     text-align: right;
`;
//订单详情
export const IndentDts = styled.div`
    padding:4% 5%;
    .title{
        color: #252433;
        font-weight: bold;
    }
    .indentHeader{
        line-height:40px;
        font-weight: bold;
    }
    .state{
        text-align: right;
    }
    .religion{
        color:#f00;
        text-align: right;
    }
    .indDtels{
        width: 85%;
        float: left;
        color: #8f8f8f;
        margin-top: 5%;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
`;
export const IntList = styled.ul`
    padding:0px;
`;
export const IntItem = styled.li`
    list-style: none;
`;
export const IntLeft = styled.div`
    img{
        width: 100%;
        height: 75px;
        border-radius: 3px;
    }
    width:30%;
    float:left;
`;
export const IntRight = styled.div`
    float:right;
    width:70%;
    padding:3% 0% 3% 3%;
    box-sizing:border-box
`;
export const InOLeft = styled.span`
    
`;
export const InTRight = styled.span`
    width: 15%;
    float: right;
    text-align: right;
    color: #8f8f8f;
    margin-top: 32px;
`;
export const IntConte = styled.div`

`;
export const IntUl = styled.ul`
    width:100%;
    float:left;
    padding:0px;
`;
export const IntLi = styled.li`
        list-style: none;
        color:#8f8f8f;
        line-height:30px;
        font-size: 12px;
    .site{
        color: #292b33;
        font-weight: bold;
        // font-size: 16px;
    }
    .location{
        font-size:14px;
    }
    span{
        color:#292b33;
    }
    .left{
        text-align: right;
    }
    .titDts{
        color:#292b33;
        font-weight: bold;
        font-size: 16px;
        margin:0% 0% 3% 0%;
    }
`;
//我要发货
export const ImdeList = styled.div`
    padding: 5%;
    border-bottom: 1px solid #f3f3f3;
    overflow: hidden;
    .title{
        color:#252433;
        height:20px;
        line-height:20px;
    }
    .limit{
        widht:100%;
        text-align: right;
        color:#252433;
    }
`;
export const ImdeItem = styled.div`
    overflow: hidden;
    h5{
        line-height: 20px;
        color: #8f8f8f;
        font-weight: 100;
        margin: 0px;
        margin-top: 5%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        font-weight: 400;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }
`;
export const ImdeLeft = styled.div`
    width:30%;
    float:left;
    img{
        width:100%;
        border-radius: 3px;
        height: 80px;
    }
`;
export const ImdeRight = styled.div`
    width: 70%;
    float: right;
    padding: 2% 0% 3% 3%;
    box-sizing: border-box;
    .title{
        font-weight: bold;
        // display: inline-block;
        // white-space: nowrap;
        // overflow: hidden;
        // text-overflow: ellipsis;
        font-size: 13px;
    }
    .invTitle{
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis; 
    }
    .ordDtels{
        font-size: 13px;
    }
`;
export const ImdeLimit = styled.div`
    width:100%;
    line-height: 20px;
    text-align: right;
    .red{
        color:#f00;
    }
`;
export const ImdeButton = styled.div`
    button{
        color:#f00 !important;
        float: right;
        border:1PX solid #ddd;
        margin-top: 2%
        width:90px;
        height: 35px;
    }
    button span{
        color:#F00;
    }
    button:hover{
        border:1px solid #ddd;;
    }
`;
//我的地址
export const LoactionWrapper = styled.div`
    padding:2% 5% 5% 5%;
    ul{
        box-shadow: -1px 5px 10px #dadada;
        border-radius: 5px;
        padding: 4% 4% 5% 4%;
        margin-top:3%;
    }
    ul:first-child{
        .red{
             color: #f00;
            font-weight: bold;
            text-align: center;
        }
    }
    .hr{
       height: 1px;
       background: #ebebeb;
    }
    ul li{
       list-style: none;
       line-height:20px;
       margin-top:4%;
       font-size: 16px;
    }
    h3{
        color:#292b33;
        font-weight: bold;
        margin:0px;
        span{
            margin-left: 5%;
        }
    }
    h5{
      margin:0px;
      color:#8f8f8f;
      font-weight:100;  
      font-size: 14px;
    }
    .my-radio .am-radio {
      padding: 2.5px;
      border: 1px solid #ccc;
      border-radius: 50%;
      margin-right: 5px;
    }
    img{
        width:12px;
        height:12px;
    }
    .loaction{
        margin-top:5%;
    }
    .common{
        color:#8f8f8f;
    }
    .location{
        margin-top:18%;
        background:#292b33;
        color:#ffffff;
    }
    .MuiSwitch-switchBase-4{
        height:22px;
    }
    button{
        width: 100% !important;
        background: #292b33 !important;
        color: #ffffff;
        width:100%;
        margin-top: 12%;
        height: 50px;
        border-radius: 3px;
        text-align: center;
    }
    button:hover{
        background-color: #292b33;
    }
`;
export  const AddButton = styled.div`
    background: #292b33;
    color: #ffffff;
    margin-top: 12%;
    height: 50px;
    line-height: 50px;
    border-radius: 3px;
    text-align: center;
    a{
        color: #ffffff;
        display : block;
    }
 
`;
//添加地址
export const AddWrapper = styled.div`
    padding:5%;
    ul li{
        height: 45px;
        line-height: 45px;
        margin-bottom:6%;
    }
    .MuiSwitch-colorSecondary-37.MuiSwitch-checked-35{
        color:#f00;
    }
    .MuiSwitch-colorSecondary-37.MuiSwitch-checked-35 + .MuiSwitch-bar-39{
        background-color:#f00 !important;
        theme.spacing.unit;
    }
    button{
        width: 100% !important;
        background: #292b33 !important;
        color: #ffffff;
        width:100%;
        margin-top: 12%;
        height: 50px;
        border-radius: 3px;
        text-align: center;
    }
    button:hover{
        background-color: #292b33;
    }
`;
export const Addright = styled.div`
    width:75%;
    float:left;
    .MuiInput-root-1{
        width:100% !important;
        font-size:13px;
    }
    .adlcwidth{
         width:100% !important;
    }
    
`;
export const Addleft = styled.div`
    width:25%;
    float:left;
`;
//库存明细
export const DetailWrapper =styled.div`
    padding:5%;
`;
export const DetailUl = styled.ul`
    padding:0px;
`;
export const DetailLi = styled.li`
    list-style: none;
    color:#292b33;
    font-size:14px;
    margin-bottom:5%;
    line-height: 28px;
       h3{
        margin-bottom:0px;
        font-weight:bold;
       }
    .left{
        text-align: right;
        color:#f00;
    }
    .time{
        color:#8f8f8f;
    }
`;
export  const  DetailAll = styled.div`
    box-shadow: 2px 4px 21px #efefef;
    text-align: center;
    height: 55px;
    line-height: 55px;
    border-radius: 150px;
    margin-bottom: 12%;
    color:#f00;
    font-size:16px;
    font-weight: bold;
    img{
        width:13px;
        height:13px;
        margin-right:3%;
    }
`;
export const SubmitWrapper = styled.div`
     padding: 0% 4%;
     margin-top: 5%;
`;
export const Delivery = styled.div`
    box-shadow:2px 4px 21px #efefef;
    color:#8f8f8f;
    padding: 5% 4%;
    line-height: 40px;
    .sbmtDvey{
        border-bottom:1px solid #f1f1f1;
    }
    .delivery{
        color:#292b33;
        font-weight: bold;
    }
    .left{
        text-align: right;
    }
`;
export const Take = styled.div`
    margin-top:5%;
    h2{
        font-weight:bold;
    }
    color:#292b33;
    ul li{
        line-height: 30px;
        .right{
            float:right;
            font-size:24px;
            color:#d2d2d2;
            font-weight:bold;
            img{
                width:10px;
                height:16px;
            }
        }
    }
`;
export const SubmitList = styled.div`
    h2{
       font-weight:bold;
       margin:8% 0% 3% 0%; 
       color:#292b33; 
    }
    .payment{
        text-align: right;
    }
`;
//商品数量
export const Commodity = styled.div`
    margin:10% 0% 70px 0%;
    .subsolid{
        color:#292b33;
        font-weight:bold;
        font-size:16px;
    }
    ul li{
        color:#8f8f8f;
        line-height: 28px;
        .right{
            float:right;
        }
    }
`;
//设置

export const SetingWropr = styled.div`
    padding:15% 5% 5% 5%;
    Button{
        width: 100% !important;
        background: #292b33 !important;
        color: #ffffff;
        width: 100%;
        margin-top: 20%;
        height: 50px;
        border-radius: 3px;
        text-align: center;
    }
    .MuiGrid-container-1{
        line-height: 30px;
    }
    .MuiPaper-elevation2-102{
        box-shadow:none;
    }
    .right{
       float: right;
    }
`;




