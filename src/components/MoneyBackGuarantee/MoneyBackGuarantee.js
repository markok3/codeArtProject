import React from "react";
import "./MoneyBackGuarantee.css";
import ProudctBadge from "../images/ProductBadge.png";

const MoneyBackGuarantee = () => {
  return (
    <div className="money-back-guarantee">
      <img src={ProudctBadge}></img>
      <span>
        90-Day Money Back Guarantee | All transactions secured and encrypted
        Cancel your subscription at any time
      </span>
    </div>
  );
};

export default MoneyBackGuarantee;
