import { LoginActionType } from "../../types/IsLogin";
import { LoginFileInitialState } from "./InitialState";

const LoginReducer = (state=LoginFileInitialState, action)=>{
  console.log('..action', action)
  switch(action.type){
    case LoginActionType.FETCH_LOGIN_REQUEST:
      return{
        ...state,
        data:null,
        message:null,
      }
    case LoginActionType.FETCH_LOGIN_SUCCESS:
      return{
        ...state,
        data:action.payload,
        message:action.payload,
      }
    case LoginActionType.FETCH_LOGIN_FAILURE:
      return{
        ...state,
        data:null,
        message:action.payload,
      }
    default:
      return state;
  }
};

export {LoginReducer};