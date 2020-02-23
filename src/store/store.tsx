import { createStore } from "redux";
import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
export const reducer = combineReducers({ count: counterReducer });
export default createStore(reducer);

export interface IRootState {
  count: number;
}

// Redux dev-tool を typescriptで使用する
// https://qiita.com/AshSuzuki/items/111d5a7c5d30fd1123c3
// interface ExtendedWindow extends Window {
//   __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
// }
// declare var window: ExtendedWindow;

// const composeReduxDevToolsEnhancers =
//   (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

// const middlewares: never[] = [];

// const store = createStore(
//   reducer,
//   composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
// );

// export default store;
