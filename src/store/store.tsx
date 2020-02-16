import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducer";

// Redux dev-tool を typescriptで使用する
// https://qiita.com/AshSuzuki/items/111d5a7c5d30fd1123c3
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;

const composeReduxDevToolsEnhancers =
  (typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const middlewares: never[] = [];

const store = createStore(
  reducer,
  composeReduxDevToolsEnhancers(applyMiddleware(...middlewares))
);

export default store;
