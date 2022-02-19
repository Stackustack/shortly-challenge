import s from "./FeaturesList.module.css";

import graphIcon from "../../assets/icon-brand-recognition.svg";
import brandIcon from "../../assets/icon-brand-recognition.svg";
import fullyIcon from "../../assets/icon-fully-customizable.svg";

import Feature from "./Feature/Feature";

const FeatureList = () => {
  return (
    <div>
      <section className={s.featuresListWrapper}>
        <Feature
          icon={graphIcon}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <Feature
          icon={brandIcon}
          title="Detailed Records"
          description="Goin insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions."
        />
        <Feature
          icon={fullyIcon}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement."
        />
      </section>
      <div className={s.lineBehind} />
    </div>
  );
};

export default FeatureList;
