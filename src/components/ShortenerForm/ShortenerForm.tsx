import axios from "axios";
import { useRef, useState } from "react";
import Button from "../ui/Button/Button";
import s from "./ShortenerForm.module.css";
import ILinkData from "../LinksList/utils/ILinkData";
import cn from "classnames";

const ShortenerForm = () => {
  const [isFormValid, setIsFormValid] = useState<boolean>(true);
  const textInput = useRef<HTMLInputElement>(null);

  const onShortenHandler = async (event: any) => {
    event.preventDefault();

    const inputValid = () => {
      return textInput.current && !!textInput.current.value.trim();
    };

    // VALIDATION
    if (!inputValid()) {
      setIsFormValid(false);
    }

    // PASSES VALIDATION
    if (inputValid()) {
      setIsFormValid(true);

      try {
        const response = await axios.get(
          `https://api.shrtco.de/v2/shorten?url=${textInput.current?.value}`
        );

        const dataToPush: ILinkData = {
          id: new Date().getTime().toString(),
          originalUrl: response.data.result.original_link,
          shortenedUrl: response.data.result.short_link,
          isCopied: false,
        };

        const prevLinks = localStorage.getItem("links");

        if (!prevLinks) {
          localStorage.setItem("links", JSON.stringify([dataToPush]));
        }

        if (prevLinks) {
          const parsedStorage = JSON.parse(prevLinks);
          parsedStorage.push(dataToPush);
          localStorage.setItem("links", JSON.stringify(parsedStorage));
        }

        // Fire event to changes can be picked up by listeners
        window.dispatchEvent(new Event("localStorageUpdated"));
      } catch (e) {
        console.log(e);
      }
    }
  };

  const formInputClasses = cn(s.form__input, {
    [s[`form__input--invalid`]]: !isFormValid,
  });

  const formValidationClasses = cn(s.form__validation, {
    [s[`form__validation--active`]]: !isFormValid,
  });

  const onChangeHandler = () => {
    setIsFormValid(true);
  };

  return (
    <form className={s.form}>
      <input
        placeholder="Shorten a link here..."
        className={formInputClasses}
        ref={textInput}
        onChange={onChangeHandler}
      />
      <div className={formValidationClasses}>Please add a link</div>
      <Button className={s.shorten_it_button} onClick={onShortenHandler}>
        Shorten it!
      </Button>
    </form>
  );
};

export default ShortenerForm;
