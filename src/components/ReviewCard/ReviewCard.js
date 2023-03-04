import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./ReviewCard.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BackgroundImage from "../images/ReviewCardBackground.png";

const ReviewCard = (props) => {
  console.log(props.whiteBackground + " who REVIEW CARD");
  return (
    <div className="review-card" id={props.whiteBackground ? "white" : ""}>
      <div className="top">
        <div className="review-card-background"></div>

        <div className="text">
          <p>
            "I am really satisfied with it. I'm good to go. I t really saves me
            time and e ffort. It's is exactly what my body has been lacking."
          </p>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <span className="initials">B.J.</span>
        </div>
        <div className="bottom-right">
          <FontAwesomeIcon className="fa-star-checked" icon={faStar} />
          <FontAwesomeIcon className="fa-star-checked" icon={faStar} />
          <FontAwesomeIcon className="fa-star-checked" icon={faStar} />
          <FontAwesomeIcon className="fa-star-checked" icon={faStar} />
          <FontAwesomeIcon className="fa-star-checked" icon={faStar} />
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
