import React from "react";
import store from "../store/store";
import { INCREMENT, DECREMENT } from "../store/counter/types";

const Counter = () => {
  return (
    <div>
      <div>count: {store.getState()}</div>
      <button onClick={() => store.dispatch({ type: INCREMENT })}>⬆︎</button>
      <button onClick={() => store.dispatch({ type: DECREMENT })}>⬇︎</button>
    </div>
  );
};

export default Counter;
