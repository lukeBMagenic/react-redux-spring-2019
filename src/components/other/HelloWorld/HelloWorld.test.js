import React from 'react';
import { shallow } from "enzyme";

import HelloWorld from './HelloWorld';

describe("HelloWorld", () => {
  it("should render correctly", () => {
    const component = shallow(<HelloWorld />);

    expect(component).toMatchSnapshot();
  });
});