import { all, fork } from "redux-saga/effects";
import LoginSaga from "./LoginSaga";

export function* rootSaga() {
  yield all([
    fork(LoginSaga),
  ]);
}