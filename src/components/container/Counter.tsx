// import React, { useState } from "react";
import React from "react";
// import { connect } from "react-redux";
// import { Dispatch } from "redux";

// (1) 馬鹿正直に reducer を使う
// const Counter = () => {
//   const count = store.getState().counter;
//   return (
//     <div>
//       <button onClick={() => store.dispatch({ type: INCREMENT })}>⬆︎</button>
//       <button onClick={() => store.dispatch({ type: DECREMENT })}>⬇︎</button>
//     </div>
//   );
// };

// (2) reducerを使わない
// const Counter = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <div data-testid="count">count: {count}</div>
//       <button onClick={() => setCount(count + 1)}>⬆︎</button>
//       <button onClick={() => setCount(count - 1)}>⬇︎</button>
//     </div>
//   );
// };

// const Counter = ({ store }: any) => {
//   const count = store.getState().counter;
//   return (
//     <div>
//       <div data-testid="count">count: {count}</div>
//       <button onClick={() => store.dispatch({ type: INCREMENT })}>⬆︎</button>
//       <button onClick={() => store.dispatch({ type: DECREMENT })}>⬇︎</button>
//     </div>
//   );
// };

// (3) Counter Component からstoreへの依存度を剥がす
// interface ICounterState {
//   counter: number;
// }

// interface ICounterProps {
//   count: number;
//   increment: any;
//   decrement: any;
// }

// export const Counter = (store: ICounterProps) => {
//   const { count, increment, decrement } = store;
//   return (
//     <div>
//       <div data-testid="count">count: {count}</div>
//       <button onClick={increment}>⬆︎</button>
//       <button onClick={decrement}>⬇︎</button>
//     </div>
//   );
// };

// const mapStateToProps = (state: ICounterState) => ({
//   count: state.counter
// });
// const mapDespatchToProps = (dispatch: Dispatch) => ({
//   increment: () => dispatch({ type: INCREMENT }),
//   decrement: () => dispatch({ type: DECREMENT })
// });

// // 第一引数の mapStateToProps はcomponentに渡すpropsを制御する
// // 第二引数の mapDespatchToProps はreducerを呼び出して、reduxで管理しているstateを更新する
// // Counterは取得したデータをpropsとして扱いたいcomponentを指定する
// export default connect(mapStateToProps, mapDespatchToProps)(Counter);

// (4) react-redux の hooks を使用してみる
// また Stateless Component から少し遠ざかるが connect を使用しなくて良いし、記述量は減って良い感じ
// https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd
// import { useSelector, useDispatch } from "react-redux";
// import CountUpButton from "./CountUpButton";
// import CountDownButton from "./CountDownButton";
// import { IRootState } from "../../store/reducer";
// import { INCREMENT } from "../../store/actions/counterActions";

// export default () => {
//   const count = useSelector((state: any) => state.count);
//   return (
//     <div>
//       <h3>count: {count}</h3>
//       <CountUpButton />
//       <CountDownButton />
//     </div>
//   );
// };

// (5) Reduxhookを使用しても Redux と React を分離する
import { useSelector, useDispatch } from "react-redux";
import { IRootState } from "../../store/store";
import { INCREMENT, DECREMENT } from "../../store/actions/counterActions";
import { Dispatch } from "redux";

interface ICounterProps {
  count: number;
  increment: Dispatch;
  decrement: Dispatch;
}
// Storybookなどでコンポーネントの振る舞いを検証しやすくするために
// StatelessでPresentatinaComponentを作っておく。
// Reduxとの接合はDIする。
export const Counter = (props: ICounterProps) => {
  const { count, increment, decrement } = props;
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

export default (props: any) => {
  const count = useSelector<IRootState>(state => state.count);
  const dispatch = useDispatch();
  const _props = {
    count,
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
    ...props
  };
  return <Counter {..._props} />;
};
