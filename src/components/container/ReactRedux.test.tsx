import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import sinon from "sinon";
import ConnectedCounter, { Counter } from "./Counter";
import { reducer } from "../../store/store";
import testConfigure from "../../testConfigure";
testConfigure();
const sel = (id: string) => `[data-test="${id}"]`;
describe("<Counter /> コンポーネント", () => {
  describe("Shallowレンダリング", () => {
    // shallow レンダリングしてコンポーネントのテストをすると早い
    // が、テストのためにプロダクトコードをかなり気を配って依存度を減らす必要がある。
    const props = {
      count: 0,
      increment: sinon.spy(),
      decrement: sinon.spy()
    };
    const shallowComponent = shallow(<Counter {...props} />);
    it("ボタンをクリックしてカウントアップする", () => {
      expect(shallowComponent.find("h3").text()).toEqual("count: 0");
      shallowComponent.find(sel("count-up")).simulate("click");
      expect(props.increment).toHaveProperty("callCount", 1);
    });
  });
  describe("Fullレンダリング", () => {
    // mountするのはインテグレーションテストだユニットテストではない
    // みたいな論争はもうどうでもいい気がする。
    // shallow のほうが少し早いが、mountで
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
