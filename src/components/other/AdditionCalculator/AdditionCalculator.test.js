import React from 'react';
import { shallow } from "enzyme";

import AdditionCalculator from './AdditionCalculator';

describe("AdditionCalculator", () => {
  it("should render correctly", () => {
    const component = shallow(<AdditionCalculator />);

    expect(component).toMatchSnapshot();
  });
});
