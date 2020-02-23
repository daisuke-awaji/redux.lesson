import React from "react";
import { shallow, mount } from "enzyme";
import Counter from "./DirectAccessReduxStore";

import testConfigure from "../../testConfigure";
testConfigure();

const sel = (id: string) => `[data-test="${id}"]`;
describe("<Counter /> コンポーネント", () => {
  describe("Shallowレンダリング", () => {
    const Component = shallow(<Counter />);
    it("ボタンをクリックしてカウントアップする", () => {
      expect(Component.find("h3").text()).toEqual("count: 0");
      Component.find(sel("count-up")).simulate("click");
      expect(Component.find("h3").text()).toEqual("count: 1");
    });
  });
  describe("Fullレンダリング", () => {
    const Component = mount(<Counter />);
    it("ボタンをクリックしてカウントアップする", () => {
      expect(Component.find("h3").text()).toEqual("count: 0");
      Component.find(sel("count-up")).simulate("click");
      expect(Component.find("h3").text()).toEqual("count: 1");
    });
  });
});
