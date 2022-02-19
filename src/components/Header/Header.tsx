import cn from "classnames";

import s from "./Header.module.css";
import hamburgerIcon from "../../assets/hamburger.svg";
import { useState } from "react";
import classNames from "classnames";

const Header = () => {
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false);

  const menuClickHandler = () => {
    setIsMenuDisplayed(!isMenuDisplayed);
  };

  const hide = s["header__nav--hide"];
  const active = s["header__nav--active"];

  const navClass = classNames(s.header__nav, {
    [active]: isMenuDisplayed,
    [hide]: !isMenuDisplayed,
  });

  return (
    <header className={s.header}>
      <a href="#" className={s.header__logo}>
        Shortly
      </a>
      <nav className={navClass}>
        <ul className={cn(s.ul, s.nav__left)}>
          <li>
            <a className={s.link} href="#">
              Features
            </a>
          </li>
          <li>
            <a className={s.link} href="#">
              Pricing
            </a>
          </li>
          <li>
            <a className={s.link} href="#">
              Resources
            </a>
          </li>
        </ul>
        <ul className={cn(s.ul, s.nav__right)}>
          <li>
            <a className={s.link} href="#">
              Login
            </a>
          </li>
          <li className={s.sign_up_button__wrapper}>
            <a href="#" className={s.sign_up_button}>
              Sign Up
            </a>
          </li>
        </ul>
      </nav>
      <img
        onClick={menuClickHandler}
        src={hamburgerIcon}
        alt="Menu"
        className={s.header__hamburger}
      />
    </header>
  );
};

export default Header;
