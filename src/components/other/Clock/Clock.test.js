import React from 'react';
import { shallow } from "enzyme";

import Clock from './Clock';

describe("Clock", () => {
  it("should render correctly", () => {
    const component = shallow(<Clock />);

    //expect(component).toMatchSnapshot();
  });
});