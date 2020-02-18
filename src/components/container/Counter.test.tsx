import React from "react";
import Enzyme, { mount } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import { createStore } from "redux";

import Counter from "./Counter";
import reducer from "../../store/reducer";
import { INCREMENT } from "../../store/actions/counterActions";

Enzyme.configure({ adapter: new EnzymeAdapter() });
describe("<Counter /> unit test", () => {
  // mountするのはインテグレーションテストだ
  // ユニットテストではないみたいな論争はもうどうでもいい気がする。
  const getWrapper = (mockStore = createStore(reducer, { count: 0 })) =>
    mount(
      <Provider store={mockStore}>
        <Counter />
      </Provider>
    );
  const sel = (id: string) => `[data-test="${id}"]`;

  it("should add to count and display the correct counts", () => {
    const wrapper = getWrapper();
    expect(wrapper.find("h3").text()).toEqual("count: 0");
    wrapper.find(sel("count-up")).simulate("click");
    expect(wrapper.find("h3").text()).toEqual("count: 1");
  });

  it("should dispatch the correct action on button click", () => {
    const mockStore = createStore(reducer, { count: 0 });
    mockStore.dispatch = jest.fn();

    const wrapper = getWrapper(mockStore);
    wrapper.find(sel("count-up")).simulate("click");
    expect(mockStore.dispatch).toHaveBeenCalledWith({ type: INCREMENT });
  });
});
