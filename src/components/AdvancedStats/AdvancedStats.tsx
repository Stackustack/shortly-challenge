import s from "./AdvancedStats.module.css";

const AdvancedStats = () => {
  return (
    <section className={s.advStats}>
      <h2 className={s.header}>Advanced Statistics</h2>
      <p className={s.paragraph}>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
    </section>
  );
};

export default AdvancedStats;
