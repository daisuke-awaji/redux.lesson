import React from "react";
import store from "../../store/store";
import { INCREMENT, DECREMENT } from "../../store/actions/counterActions";

export default () => {
  const count = store.getState().count;
  return (
    <div>
      <h3 data-test="count">count: {count}</h3>
      <button
        data-test="count-up"
        onClick={() => store.dispatch({ type: INCREMENT })}
      >
        ⬆︎
      </button>
      <button
        data-test="count-down"
        onClick={() => store.dispatch({ type: DECREMENT })}
      >
        ⬇︎
      </button>
    </div>
  );
};
