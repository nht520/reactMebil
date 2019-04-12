window.g = {
  AXIOS_TIMEOUT: 10000,
  login:"http://wx.bomao.xyz:8080/distributor/distributor/member/login",
  register:'http://wx.bomao.xyz:8080/distributor/distributor/member/updatePass',
  mcMembers:'http://wx.bomao.xyz:8080/distributor/distributor/mcMembers/findById',
  //我的库存
  getBoxNum:"http://192.168.2.104:8899/distributor/stock/getBoxNum",
  //订货订单
  stockLog:'http://192.168.2.104:8899/distributor/stockLog',
    //库存
  stock:'http://192.168.2.104:8899/distributor/stock',
    //  套餐
  meal:"http://wx.bomao.xyz:8080/distributor/distributor/meal",
  mealDts:"http://wx.bomao.xyz:8080/distributor/distributor/meal/findById?id=",
  //自己发货订单
  // indent:"http://192.168.2.104:8899/distributor/order",
  ParentPage: {
    // http://wx.bomao.xyz:8080/distributor
    // ApiUrl: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=', // 配置服务器地址,
    // DeteailsApi:'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=',
  },
};
