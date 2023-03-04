import React from "react";
import "./TrialComponent.css";
import ProductImage from "../images/Product.png";
import ProudctBadge from "../images/ProductBadge.png";

const TrialComponent = () => {
  return (
    <div className="trial-container">
      <div className="backgroundImage"></div>
      <div className="trial-header">
        <h2>RISK FREE 90 DAY MONEY BACK GUARANTEE </h2>
      </div>
      <div className="trial-body">
        <div className="trial-body-row1">
          <div className="trial-body-text">
            <p>
              Go ahead and take Green&Lean for a well-deserved “test drive” over
              the next 10, 20, even 30 days – as long as you’d like over the
              next six months. If you don’t feel a dramatic improvement in your
              energy, focus, and mood... <br />
              if you don’t tackle your day with a newfound sense of confidence,
              concentration, and an unshakable optimism... and if you feel even
              a single jitter from our energizing formula... You don’t pay a
              dime. Simply shoot us a quick em
              <br />
              ail at customerservice@greenandlean.com and I’ll personally see
              you get a full refund, down to the last penny. No questions. No
              hoops. No weird qualifications or fine print.
            </p>
          </div>
          <div className="trial-body-image">
            <img src={ProductImage}></img>
            <div className="trial-body-image-overlay">
              <img src={ProudctBadge}></img>
            </div>
          </div>
        </div>
        <div className="trial-body-row2">
          <div className="trial-body-row2-text">
            <p>
              You risk nothing other than living a life where you’re just
              surviving... When you should be thriving. So click the button
              below now to give yourself a well-deserved shot at booming,
              natural energy levels with Green&Lean.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialComponent;
