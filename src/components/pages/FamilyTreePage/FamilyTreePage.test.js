import React from 'react';
import { shallow } from "enzyme";

import FamilyTreePage from './FamilyTreePage';

describe("FamilyTreePage", () => {
  it("should render correctly", () => {
    const component = shallow(<FamilyTreePage />);

    expect(component).toMatchSnapshot();
  });
});
