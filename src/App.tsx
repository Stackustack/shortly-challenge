import s from "./App.module.css";
import AdvancedStats from "./components/AdvancedStats/AdvancedStats";
import BottomCta from "./components/BottomCta/BottomCta";
import FeatureList from "./components/FeaturesList/FeaturesList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import LinksList from "./components/LinksList/LinksList";
import ShortenerForm from "./components/ShortenerForm/ShortenerForm";

function App() {
  return (
    <div className={s.app}>
      <Header />
      <main>
        <Hero />
        <section className={s.more}>
          <div className={s.more_movedUp}>
            <ShortenerForm />
            <LinksList />
            <AdvancedStats />
            <FeatureList />
          </div>
        </section>
      </main>
      <BottomCta />
      <Footer />
    </div>
  );
}

export default App;
