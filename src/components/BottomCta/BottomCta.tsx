import Button from "../ui/Button/Button";
import s from "./BottomCta.module.css";

const BottomCta = () => {
  return (
    <div className={s.bottomCtaWrapper}>
      <h2 className={s.header}>Boost your links today</h2>
      <a href="#">
        <Button className={s.getStartedButton}>Get Started</Button>
      </a>
    </div>
  );
};

export default BottomCta;
