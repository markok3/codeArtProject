import React from "react";
import "./Results.css";
import ResultsCard from "../ResultsCard/ResultsCard";
import MoneyBackGuarantee from "../MoneyBackGuarantee/MoneyBackGuarantee";
import ReviewCard from "../ReviewCard/ReviewCard";
import ReviewList from "../ReviewList/ReviewList";
import { Link } from "react-scroll";

const Results = () => {
  return (
    <div className="results-container">
      <div className="results-grid">
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
        <ResultsCard />
      </div>
      <Link
        to="featuredProducts-scroll-1"
        className="results-grid-buy-button"
        smooth={true}
        duration={500}
      >
        BUY NOW
      </Link>
      <MoneyBackGuarantee />
      <ReviewList whiteBackground={false} />
    </div>
  );
};

export default Results;
