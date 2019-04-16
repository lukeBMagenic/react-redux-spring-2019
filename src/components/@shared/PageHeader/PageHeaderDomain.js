import { pageType } from "../../../constants/PageType";

export const findPage = (selectedPageType) => {
  switch (selectedPageType) {
    case pageType.FamilyTree:
      return "/";
    case pageType.Data:
      return "/data";
    default:
      throw new Error(`page for ${selectedPageType} could not be found`);
  }
};