import React from "react";
import store from "../store/store";
import { INCREMENT, DECREMENT } from "../store/reducers/counter/types";

const Counter = () => {
  const count = store.getState().counter;
  return (
    <div>
      <div>count: {count}</div>
      <button onClick={() => store.dispatch({ type: INCREMENT })}>⬆︎</button>
      <button onClick={() => store.dispatch({ type: DECREMENT })}>⬇︎</button>
    </div>
  );
};

export default Counter;
