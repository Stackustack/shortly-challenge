import { Dispatch, SetStateAction } from "react";
import ILinkData from "./ILinkData";

const loadLinksItemsFromStorage = (
  dispatch: Dispatch<SetStateAction<ILinkData[]>>
) => {
  const links = localStorage.getItem("links");

  if (links) {
    dispatch(JSON.parse(links));
  }
};

export { loadLinksItemsFromStorage };
