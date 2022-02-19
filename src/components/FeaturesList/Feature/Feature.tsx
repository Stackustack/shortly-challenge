import s from "./Feature.module.css";

type FeatureTypes = {
  icon: string;
  title: string;
  description: string;
};

const Feature = ({ title, description, icon }: FeatureTypes) => {
  return (
    <article className={s.featureItem}>
      <div className={s.featureItem__card}>
        <div className={s.circle}>
          <img className={s.icon} src={icon} alt="brand recognition icon" />
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Feature;
