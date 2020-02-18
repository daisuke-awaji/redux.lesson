import React from "react";
import { mount, shallow } from "enzyme";
import { Provider } from "react-redux";
import { createStore } from "redux";
import sinon from "sinon";

import Counter, { StatelessPresentationalCounterComponent } from "./Counter";
import reducer from "../../store/reducer";
import { INCREMENT } from "../../store/actions/counterActions";
import CountUpButton from "./CountUpButton";

import testConfigure from "../../testConfigure";

testConfigure();
const sel = (id: string) => `[data-test="${id}"]`;

describe("<StatelessCounterComponent /> unit test shallow", () => {
  // shallow レンダリングしてコンポーネントのテストをすると早い
  // が、テストのためにプロダクトコードをかなり気を配って依存度を減らす必要がある。
  const props = {
    count: 0,
    handleClickIncrement: sinon.spy(),
    handleClickDecrement: sinon.spy()
  };
  const shallowComponent = shallow(
    <StatelessPresentationalCounterComponent {...props} />
  );
  it("should add to count and display the correct counts", () => {
    expect(shallowComponent.find("h3").text()).toEqual("count: 0");
    shallowComponent.find(sel("count-up")).simulate("click");
    expect(props.handleClickIncrement).toHaveProperty("callCount", 1);
  });
});

describe("<Counter /> unit test", () => {
  // mountするのはインテグレーションテストだユニットテストではない
  // みたいな論争はもうどうでもいい気がする。
  // shallow のほうが少し早いが、mountで
  const getWrapper = (
    mockStore = createStore(reducer, {
      count: 0
    })
  ) =>
    mount(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );
  it("should add to count and display the correct counts", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("h3").text()).toEqual("count: 0");
    wrapper.find(sel("count-up")).simulate("click");
    expect(wrapper.find("h3").text()).toEqual("count: 1");
  });
});
describe("<CountUpButton /> unit test", () => {
  const getWrapper = (mockStore = createStore(reducer, { count: 0 })) =>
    mount(
      <Provider store={mockStore}>
        <CountUpButton />
      </Provider>
    );
  describe("Should dispatch the correct action on button click.", () => {
    it("Using jest.fn() append into dispatch", () => {
      const mockStore = createStore(reducer, { count: 0 });
      mockStore.dispatch = jest.fn();

      const wrapper = getWrapper(mockStore);
      wrapper.find(sel("count-up")).simulate("click");
      expect(mockStore.dispatch).toHaveBeenCalledWith({ type: INCREMENT });
    });
    it("Unusing jest.fn(), flankly use simutate('click') twice.", () => {
      const mockStore = createStore(reducer, { count: 0 });
      const wrapper = getWrapper(mockStore);
      wrapper.find(sel("count-up")).simulate("click");
      expect(mockStore.getState().count).toBe(1);
      wrapper.find(sel("count-up")).simulate("click");
      expect(mockStore.getState().count).toBe(2);
    });
  });
});
