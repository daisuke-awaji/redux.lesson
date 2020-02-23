import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { INCREMENT, DECREMENT } from "../../store/actions/counterActions";

// (3) Counter Component からstoreへの依存度を剥がす
interface ICounterState {
  count: number;
}

interface ICounterProps {
  count: number;
  increment: any;
  decrement: any;
}

export const Counter = (store: ICounterProps) => {
  const { count, increment, decrement } = store;
  return (
    <div>
      <h3 data-test="count">count: {count}</h3>
      <button data-test="count-up" onClick={increment}>
        ⬆︎
      </button>
      <button data-test="count-down" onClick={decrement}>
        ⬇︎
      </button>
    </div>
  );
};

const mapStateToProps = (state: ICounterState) => ({
  count: state.count
});
const mapDespatchToProps = (dispatch: Dispatch) => ({
  increment: () => dispatch({ type: INCREMENT }),
  decrement: () => dispatch({ type: DECREMENT })
});

// 第一引数の mapStateToProps はcomponentに渡すpropsを制御する
// 第二引数の mapDespatchToProps はreducerを呼び出して、reduxで管理しているstateを更新する
// Counterは取得したデータをpropsとして扱いたいcomponentを指定する
export default connect(mapStateToProps, mapDespatchToProps)(Counter);
