import { pageType } from "../../../constants/PageType";

export const changePage = (selectedPageType, history) => {
  switch (selectedPageType) {
    case pageType.Home:
      history.push("/");
      break;
    case pageType.Other:
      history.push("/other");
      break;
    default:
      break;
  }
};