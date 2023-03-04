import React from "react";
import "./SafeCard.css";
import { Icon } from "@iconify/react";

const SafeCard = () => {
  return (
    <div className="safe-card">
      <div className="safe-card-icon">
        <Icon
          icon="material-symbols:shield-rounded"
          color="gold"
          height="40px"
          width="40px"
        />
      </div>
      <div className="safe-card-title">Proven Benefits</div>
      <div className="safe-card-text">
        <p>
          We’ve done the research, so you don’t have to. Each of the active
          ingredients in Green&Lean has clinically proven health benefits to
          support thriving and lasting energy.
        </p>
      </div>
    </div>
  );
};

export default SafeCard;
