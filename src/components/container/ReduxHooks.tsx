import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { INCREMENT, DECREMENT } from "../../store/actions/counterActions";

export default () => {
  const count = useSelector((state: any) => state.count);
  const dispatch = useDispatch();
  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };
  return (
    <div>
      <h3>count: {count}</h3>
      <button data-test="count-up" onClick={increment}>
        ⬆︎
      </button>
      <button data-test="count-down" onClick={decrement}>
        ⬇︎
      </button>
    </div>
  );
};
