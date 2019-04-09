import { findPage } from "./PageHeaderDomain";
import { pageType } from "../../../constants/PageType";

describe("PageHeaderDomain", () => {
  it("when call find page it should return home address", () => {
    const HomePage = findPage(pageType.Home);
    expect(HomePage).toEqual("/");
  });
  it("when call find page it should return other page address", () => {
    const OtherPage = findPage(pageType.Other);
    expect(OtherPage).toEqual("/other");
  });
});