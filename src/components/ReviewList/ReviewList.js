import React from "react";
import "./ReviewList.css";
import ReviewCard from "../ReviewCard/ReviewCard";

const ReviewList = (props) => {
  console.log(props.whiteBackground + " who REVIEW LISTA");
  return (
    <div className="reviews-container">
      <div className="reviews-card-grid">
        <ReviewCard whiteBackground={props.whiteBackground} />
        <ReviewCard whiteBackground={props.whiteBackground} />
      </div>
    </div>
  );
};

export default ReviewList;
