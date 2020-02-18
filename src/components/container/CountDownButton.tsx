import React from "react";
import { DECREMENT } from "../../store/actions/counterActions";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  const handleClickDecrement = () => {
    dispatch({ type: DECREMENT });
  };
  return (
    <button data-test="count-down" onClick={handleClickDecrement}>
      ⬇︎
    </button>
  );
};
