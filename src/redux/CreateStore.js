import { useSelector } from "react-redux";
import { combineReducers } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {logger} from "redux-logger";
import { LoginFileInitialState } from "./login/InitialState";
import { LoginReducer } from "./login/Reducer"; 
import { rootSaga } from "../sagas/index";

export const initialState = {
  data: LoginFileInitialState,
},
sagaMiddleware = createSagaMiddleware(),
rootReducer = combineReducers({
  LoginReducer, 
}),

store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(rootSaga);
export const useTypedSelector = useSelector;

export default store;