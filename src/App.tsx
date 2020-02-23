import React from "react";
import Counter from "./components/container/Counter";
import ReactRedux from "./components/container/ReactRedux";
import PureReactCounter from "./components/container/PureReactCounter";
// import DirectAccessReduxStore from "./components/container/DirectAccessReduxStore";
import ReduxHooks from "./components/container/ReduxHooks";

const App = () => {
  return (
    <div>
      <Counter />
      <Counter />
      <PureReactCounter />
      <ReactRedux />
      {/* <DirectAccessReduxStore /> */}
      <ReduxHooks />
    </div>
  );
};

export default App;
