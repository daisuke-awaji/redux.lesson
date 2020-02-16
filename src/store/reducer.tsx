import { ICountReducerAction, INCREMENT, DECREMENT } from "./counter/types";

export const reducer = (state = 0, action: ICountReducerAction) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};
