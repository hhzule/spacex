import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

test("renders the main div", () => {
  const component = shallow(<Header />);
  expect(component.find("div").length).toBe(1);
});

test("renders the svg", () => {
  const component = shallow(<Header />);
  expect(component.find("svg").length).toBe(1);
});
