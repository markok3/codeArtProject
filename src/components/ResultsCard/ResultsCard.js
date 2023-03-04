import React from "react";
import "./ResultsCard.css";
import ResultsCardImage from "../images/ResultsCardImage.png";

const ResultsCard = () => {
  return (
    <div className="card">
      <img className="card-image" src={ResultsCardImage}></img>
      <div className="card-content">
        <div className="card-header">ALL-DAY ENERGY</div>
        <div className="card-text">
          Feel a calm yet dominant energy surge t hroughout your body.
          Green&Lean is not just a quick rise and fall. The ing redients inside
          this blend assist you in experiencing energy throu ghout your entire
          day.{" "}
        </div>
        <div className="card-text-important">
          <p>Feel younger and more invincible </p>
        </div>
      </div>
    </div>
  );
};

export default ResultsCard;
