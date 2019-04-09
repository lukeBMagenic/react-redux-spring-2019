import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from "enzyme";

import App from './App';
import PageHeader from "./components/@shared/PageHeader/PageHeader";
import HomePage from "./components/pages/HomePage/HomePage";
import OtherPage from "./components/pages/OtherPage/OtherPage";

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
  it("should find Home Page by default", () => {
    const mountedApp = mount(<App />);
    expect(mountedApp.find(HomePage).length).toBe(1);
  });
  it("should find Home Page when Home icon clicked", () => {
    const mountedApp = mount(<App />);
    mountedApp
      .find('button#home-button')
      .simulate('click')
    expect(mountedApp.find(HomePage).length).toBe(1);
  });
  it("should find Other Page when Other icon clicked", () => {
    const mountedApp = mount(<App />);
    mountedApp
      .find('button#other-button')
      .simulate('click')
    expect(mountedApp.find(OtherPage).length).toBe(1);
  });
});
