import Button from "../ui/Button/Button";
import classes from "./Hero.module.css";

import imageGuyWorking from "../../assets/illustration-working.svg";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <article className={classes.hero__content}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insight on how your
          links are performing.
        </p>

        <Button className={classes.get_started_button}>Get Started</Button>
      </article>
      <img src={imageGuyWorking} className={classes.imageGuyWorking} />
    </section>
  );
};

export default Hero;
