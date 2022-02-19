import cn from "classnames";
import copy from "copy-to-clipboard";
import { useEffect, useState } from "react";

import s from "./LinksList.module.css";

import Button from "../ui/Button/Button";
import { loadLinksItemsFromStorage } from "./utils/utils";
import ILinkData from "./utils/ILinkData";

const LinksList = () => {
  const [links, setLinks] = useState<ILinkData[]>([]);

  // Watch changes to LocalStorage and update them on change event
  useEffect(() => {
    const loadLinksOnChange = () => {
      loadLinksItemsFromStorage(setLinks);
    };

    window.addEventListener("localStorageUpdated", loadLinksOnChange);

    return () => {
      window.removeEventListener("localStorageUpdated", loadLinksOnChange);
    };
  }, []);

  // Load Items on initial render
  useEffect(() => {
    loadLinksItemsFromStorage(setLinks);
  }, []);

  const copyUrlHandler = (i: ILinkData) => {
    copy(i.shortenedUrl);
    setLinks((prevState) => {
      const updatedState = prevState.map((prevStateItem) => {
        const updatedItem = { ...prevStateItem };
        updatedItem.isCopied = updatedItem.id === i.id ? true : false;
        return updatedItem;
      });
      return updatedState;
    });
  };

  const listItems = links.map((i) => {
    if (links.length !== 0) {
      return (
        <li className={s.listItem} key={i.id}>
          <div className={s.listItem__originalUrl}>{i.originalUrl}</div>
          <div className={s.listItem__shortenedUrl}>{i.shortenedUrl}</div>
          <Button
            className={cn(s.listItem__copyButton, {
              [s["listItem__copyButton--active"]]: i.isCopied,
            })}
            onClick={copyUrlHandler.bind(null, i)}
          >
            {i.isCopied ? "Copied!" : "Copy!"}
          </Button>
        </li>
      );
    }

    return false;
  });

  return (
    <section className="shortened-links">
      <ul className={s.list}>
        {listItems}

        {/* <li className={s.listItem}>
          <div className={s.listItem__originalUrl}>
            https://wwww.frontendmentor.io/something/else/bla/longurl/text.xt
          </div>
          <div className={s.listItem__shortenedUrl}>https://reLink/k44lKyk</div>
          <Button className={s.listItem__copyButton}>Copy</Button>
        </li>

        <li className={s.listItem}>
          <div className={s.listItem__originalUrl}>
            https://wwww.frontendmentor.io
          </div>
          <div className={s.listItem__shortenedUrl}>https://reLink/k44lKyk</div>
          <Button className={s.listItem__copyButton}>Copy</Button>
        </li> */}
      </ul>
    </section>
  );
};

export default LinksList;
