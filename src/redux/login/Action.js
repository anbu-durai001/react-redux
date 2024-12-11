import {action} from "typesafe-actions";
import { LoginActionType } from "../../types/IsLogin";

export const fetchLoginfileDataRequest = (finalPayload)=>({
  type: LoginActionType.FETCH_LOGIN_REQUEST,
  payload: finalPayload,
});

export const fetchLoginFileDataSuccess = (data) => ({
    type: LoginActionType.FETCH_LOGIN_SUCCESS,
    payload: data,
  });
  
  export const fetchLoginFileDataFailure = (message) => ({
    type: LoginActionType.FETCH_LOGIN_FAILURE,
    payload: message,
  });
