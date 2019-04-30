// const besurl = "http://192.168.3.45:8899";
const besurl = "http://wx.bomao.xyz:8181/distributor";
window.g = {
  AXIOS_TIMEOUT: 10000,
  login:besurl+"/distributor/member/login",
  findById:besurl+"/distributor/member/findById",
  register:besurl+'/distributor/member/updatePass',
  mcMembers:besurl+'/distributor/mcMembers/findById',
  //我的库存
  getBoxNum:besurl+"/distributor/stock/getBoxNum",
  //订货订单
  stockLog:besurl+'/distributor/stockLog',
    //库存
  stock:besurl+'/distributor/stock',
    //  套餐
  meal:besurl+"/distributor/meal",
  mealDts:besurl+"/distributor/meal/findById?id=",
  //自己发货订单
  indent:besurl+"/distributor/order",
  update:besurl+"/distributor/order/update",
  //地址
  // 省
   getProvince:besurl+"/distributor/systemAddress/getProvince",
  //市province
  getCity:besurl+"/distributor/systemAddress/getCity",
  //区city
  getCounty:besurl+"/distributor/systemAddress/getCounty",
  //添加地址
  addressadd:besurl+"/distributor/address",
//  修改地址
   adsupdate:besurl+"/distributor/address/update",
  //
  //分销订单
   subordinate:besurl+"/distributor/subordinate",
  //查询邮费
   findCost:besurl+"/distributor/addressCost/findCost",
  ParentPage: {
    // http://wx.bomao.xyz:8080/distributor
    // ApiUrl: 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=', // 配置服务器地址,
    // DeteailsApi:'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=',
  },
};
