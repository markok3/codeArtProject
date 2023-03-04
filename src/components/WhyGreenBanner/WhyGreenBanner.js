import React from "react";
import "./WhyGreenBanner.css";
import ProductBanner from "../images/ProductBannerImage.png";

const WhyGreenBanner = () => {
  return (
    <div className="wrapper">
      <div className="banner-container">
        <div className="banner-row">
          <div className="banner-left">
            <div className="banner-left-text">
              <ul>
                <li>12 Potent Super-Nutrient Ingredients</li>
                <li>Comprehensive Formulation</li>
                <li> Extensively Researched Ingredients</li>
                <li>12 Potent Super-Nutrient Ingredients</li>
                <li>Comprehensive Formulation</li>
                <li> Extensively Researched Ingredients</li>
              </ul>
            </div>
          </div>
          <div className="banner-center">
            <img src={ProductBanner}></img>
          </div>
          <div className="banner-right">
            <div className="banner-right-text">
              <ul>
                <li>12 Potent Super-Nutrient Ingredients</li>
                <li>Comprehensive Formulation</li>
                <li> Extensively Researched Ingredients</li>
                <li>12 Potent Super-Nutrient Ingredients</li>
                <li>Comprehensive Formulation</li>
                <li> Extensively Researched Ingredients</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyGreenBanner;
