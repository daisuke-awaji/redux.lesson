import React from "react";
import { mount } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import ConnectedCounter from "./ReduxHooks";
import { reducer } from "../../store/store";
import testConfigure from "../../testConfigure";
testConfigure();
const sel = (id: string) => `[data-test="${id}"]`;
describe("<Counter /> コンポーネント", () => {
  describe("Fullレンダリング", () => {
    const getWrapper = (mockStore = createStore(reducer, { count: 0 })) =>
      mount(
        <Provider store={mockStore}>
          <ConnectedCounter />
        </Provider>
      );
    it("ボタンをクリックしてカウントアップする", () => {
      const wrapper = getWrapper();
      expect(wrapper.find("h3").text()).toEqual("count: 0");
      wrapper.find(sel("count-up")).simulate("click");
      expect(wrapper.find("h3").text()).toEqual("count: 1");
    });
  });
});
