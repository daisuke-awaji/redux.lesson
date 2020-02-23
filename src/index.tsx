import React from "react";
import { render } from "react-dom";
// import ReactDOM from "react-dom";

import App from "./App";
import store from "./store/store";
import { Provider } from "react-redux";

// const render = () => ReactDOM.render(<App />, document.getElementById("root"));
// render();
// store.subscribe(render);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
