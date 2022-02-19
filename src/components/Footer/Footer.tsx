import fbIcon from "../../assets/icon-facebook.svg";
import twitterIcon from "../../assets/icon-twitter.svg";
import pinteresIcon from "../../assets/icon-pinterest.svg";
import instagramIcon from "../../assets/icon-instagram.svg";

import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <section className={s.logo}>
        <h2>Shortly</h2>
      </section>
      <section className={s.sectionWithTextLinks}>
        <h3 className={s.list__header}>Features</h3>
        <ul className={s.list}>
          <li>Link Shortening</li>
          <li>Branded Links</li>
          <li>Analytics</li>
        </ul>
      </section>
      <section className={s.sectionWithTextLinks}>
        <h3 className={s.list__header}>Resources</h3>
        <ul className={s.list}>
          <li>Blog</li>
          <li>Developers</li>
          <li>Support</li>
        </ul>
      </section>
      <section className={s.sectionWithTextLinks}>
        <h3 className={s.list__header}>Company</h3>
        <ul className={s.list}>
          <li>About</li>
          <li>Our Team</li>
          <li>Careers</li>
          <li>Contact</li>
        </ul>
      </section>
      <section className={s.sectionsWithSocials}>
        <img src={fbIcon} className={s.icon} alt="Facebook" />
        <img src={twitterIcon} className={s.icon} alt="Twitter" />
        <img src={pinteresIcon} className={s.icon} alt="Pinteres" />
        <img src={instagramIcon} className={s.icon} alt="Instagram" />
      </section>
    </footer>
  );
};

export default Footer;
