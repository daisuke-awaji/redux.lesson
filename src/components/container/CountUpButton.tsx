import React from "react";
import { INCREMENT } from "../../store/actions/counterActions";
import { useDispatch } from "react-redux";

export default () => {
  const dispatch = useDispatch();

  const handleClickIncrement = () => {
    dispatch({ type: INCREMENT });
  };
  return (
    <button data-test="count-up" onClick={handleClickIncrement}>
      ⬆︎
    </button>
  );
};
