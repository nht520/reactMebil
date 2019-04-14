import {INIT_LIST_ACTION,IMDEL_IVER} from "./actionTypes";

//派发数据
export const initListAction = (data) => ({
    type:INIT_LIST_ACTION,
    data
});
//存储id
export const imdeliver = (dataId)=>({
    type:IMDEL_IVER,
    dataId
})
//用redux-thunk的话请求放在action里面  方法2
// export const getList = () =>{
//      return (dispatch) =>{
//          //获取数据将数据存在store
//          //把用户名  密码统一存在_param里面  把_param提交到后台
//          // const _param = new URLSearchParams();
//          //      _param.append("empName",_this.state.username);
//          //      _param.append("empPassword",_this.state.pssword);
//          var api =window.g.LoginApi;
//          Axios.get(api).then((res)=>{
//              // console.log(res);
//              const data = res.data.data;
//              const action = initListAction(data);
//              dispatch(action);
//          },(err)=>{
//              console.log(err)
//          })
//      }
// }
