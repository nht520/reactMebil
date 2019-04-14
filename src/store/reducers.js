import {INIT_LIST_ACTION,IMDEL_IVER} from './actionTypes'
const defaultStore = {
  user:[],
  dataId:[]
};
export default  (state=defaultStore,action) =>{

    //将list更换成请求过来的数据
    if (action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
              newState.user = action.data;
              return newState;
    }
    if (action.type === IMDEL_IVER){
        const newState = JSON.parse(JSON.stringify(state));
              newState.dataId = action.dataId;
        return newState;
    }




    return state;
}
