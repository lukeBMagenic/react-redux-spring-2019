import { findPage } from "./PageHeaderDomain";
import { pageType } from "../../../constants/PageType";

describe("PageHeaderDomain", () => {
  it("when call find page it should return family tree address", () => {
    const FamilyTreePage = findPage(pageType.FamilyTree);
    expect(FamilyTreePage).toEqual("/");
  });
  it("when call find page it should return data page address", () => {
    const DataPage = findPage(pageType.Data);
    expect(DataPage).toEqual("/data");
  });
});