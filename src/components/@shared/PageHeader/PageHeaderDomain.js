import { pageType } from "../../../constants/PageType";

export const findPage = (selectedPageType) => {
  switch (selectedPageType) {
    case pageType.Home:
      return "/";
    case pageType.Other:
      return "/other";
    default:
      throw new Error(`page for ${selectedPageType} could not be found`);
  }
};