import React from "react";
import "./SafeAndEffectiveBanner.css";
import SafeCard from "./SafeAndEffectiveCard/SafeCard";
import MoneyBackGuarantee from "../MoneyBackGuarantee/MoneyBackGuarantee";
import ReviewList from "../ReviewList/ReviewList";
import { Link } from "react-scroll";

const SafeAndEffectiveBanner = () => {
  return (
    <div className="safe-banner-container">
      <h2 className="safe-banner-header">SAFE AND EFFECTIVE</h2>
      <div className="safe-banner-grid">
        <SafeCard />
        <SafeCard />
        <SafeCard />
        <SafeCard />
      </div>

      <Link
        to="featuredProducts-scroll-2"
        className="results-grid-buy-button"
        smooth={true}
        duration={500}
      >
        BUY NOW
      </Link>
      <MoneyBackGuarantee />
    </div>
  );
};

export default SafeAndEffectiveBanner;
