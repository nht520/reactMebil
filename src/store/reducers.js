import {INIT_LIST_ACTION} from './actionTypes'
const defaultStore = {
  user:[],
};
export default  (state=defaultStore,action) =>{

    //将list更换成请求过来的数据
    if (action.type === INIT_LIST_ACTION){
        const newState = JSON.parse(JSON.stringify(state));
              newState.user = action.data;
              return newState;
    }
    return state;
}
