import React from 'react';
import { shallow } from "enzyme";

import OtherPage from './OtherPage';

describe("OtherPage", () => {
  it("should render correctly", () => {
    const component = shallow(<OtherPage />);

    expect(component).toMatchSnapshot();
  });
});
