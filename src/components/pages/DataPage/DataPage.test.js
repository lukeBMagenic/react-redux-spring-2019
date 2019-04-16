import React from 'react';
import { shallow } from "enzyme";

import DataPage from './DataPage';

describe("DataPage", () => {
  it("should render correctly", () => {
    const component = shallow(<DataPage />);

    expect(component).toMatchSnapshot();
  });
});
