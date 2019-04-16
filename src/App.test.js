import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";

import App from './App';
import PageHeader from "./components/@shared/PageHeader/PageHeader";
import FamilyTreePage from "./components/pages/FamilyTreePage/FamilyTreePage";
import DataPage from "./components/pages/DataPage/DataPage";

describe("App", () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("should render correctly", () => {
    const shallowApp = shallow(<App />);
    expect(shallowApp).toMatchSnapshot();
  });
  it("should find page header when rendered", () => {
    const mountedApp = mount(<App />);
    expect(mountedApp.find(PageHeader).length).toBe(1);
  });
  it("should find Family Tree Page by default", () => {
    const mountedApp = mount(<App />);
    expect(mountedApp.find(FamilyTreePage).length).toBe(1);
  });
  it("should find Family Tree Page when Tree icon clicked", () => {
    const mountedApp = mount(<App />);
    mountedApp
      .find('button#family-tree-button')
      .simulate('click')
    expect(mountedApp.find(FamilyTreePage).length).toBe(1);
  });
  it("should find Data Page when Data icon clicked", () => {
    const mountedApp = mount(<App />);
    mountedApp
      .find('button#data-button')
      .simulate('click')
    expect(mountedApp.find(DataPage).length).toBe(1);
  });
});
