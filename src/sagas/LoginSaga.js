import { put, takeLatest, fork, call, all } from "redux-saga/effects";
import { fetchLoginFileDataSuccess, fetchLoginFileDataFailure } from "../redux/login/Action";
import { LoginActionType } from "../types/IsLogin";
import { fetchLogin } from "../services/api";

function* fetchLoginFileData(action){
  try{
    console.log('data...', action.payload)
    const finalPayload = action.payload;
    const response = yield call(fetchLogin.bind(this, finalPayload));
    console.log('data...', response)
    if(response){
      yield put(fetchLoginFileDataSuccess(response));
    }else{
      const error = yield response;
      yield put(fetchLoginFileDataFailure(error));
    }

  } catch(error){
    yield put(fetchLoginFileDataFailure(error));
  }
}

export function* watchAddFileData(){
  yield takeLatest(LoginActionType.FETCH_LOGIN_REQUEST, fetchLoginFileData);
}

function* LoginSaga(){
  yield all([fork(watchAddFileData)]);
}

export default LoginSaga;