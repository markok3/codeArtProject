import React from "react";
import "./SectionBorder.css";
import ScrollButton from "../images/scrollButton.png";

const SectionBorder = () => {
  return (
    <div className="section-border">
      <div className="section-border-content">
        <div className="section-border-header">
          <h3>Experience</h3>
          <h2>POWERFUL section-border</h2>
          <img className="scroll-button" src={ScrollButton}></img>
        </div>
      </div>
    </div>
  );
};

export default SectionBorder;
