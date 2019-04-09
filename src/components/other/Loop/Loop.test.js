import React from 'react';
import { shallow } from "enzyme";

import Loop from './Loop';

describe("Loop", () => {
  it("should render correctly", () => {
    const component = shallow(<Loop />);

    expect(component).toMatchSnapshot();
  });
});