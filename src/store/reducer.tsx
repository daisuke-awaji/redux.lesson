import { combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";

export default combineReducers({ count: counterReducer });

export interface IRootState {
  count: number;
}
