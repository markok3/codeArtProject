import "./App.css";
import Accordion from "./components/Accordion/Accordion";
import FeaturedProducts from "./components/FeaturedProducts/FeaturedProducts";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero";
import MoneyBackGuarantee from "./components/MoneyBackGuarantee/MoneyBackGuarantee";
import ProductList from "./components/ProductList/ProductList";
import Results from "./components/Results/Results";
import ReviewList from "./components/ReviewList/ReviewList";
import SafeAndEffectiveBanner from "./components/SafeAndEffectiveBanner/SafeAndEffectiveBanner";
import SectionBorder from "./components/SectionBorder/SectionBorder";
import TrialComponent from "./components/TrialComponent/TrialComponent";
import WhyGreenBanner from "./components/WhyGreenBanner/WhyGreenBanner";

function App() {
  return (
    <div className="App">
      <Hero />
      <FeaturedProducts />
      <MoneyBackGuarantee />
      <SectionBorder />
      <Results />
      <ProductList />
      <SectionBorder />
      <FeaturedProducts id={1} />
      <MoneyBackGuarantee />
      <ReviewList whiteBackground={true} />
      <TrialComponent />
      <WhyGreenBanner />
      <SafeAndEffectiveBanner />
      <SectionBorder />
      <TrialComponent />
      <FeaturedProducts id={2} />
      <MoneyBackGuarantee />
      <Accordion />
      <Footer />
    </div>
  );
}

export default App;
