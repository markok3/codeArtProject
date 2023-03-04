import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./FeaturedProducts.css";

const FeaturedProducts = ({ id }) => {
  return (
    <div className="featuredProducts" id={`featuredProducts-scroll-${id}`}>
      <div className="heading">
        <h2>
          The revolutionary way to <span>enriched energy, </span>
          <br /> <span> razor sharp focus </span>, and
          <span> Mental Clarity</span>.
        </h2>
        <p>
          Tear through your schedule with ease: No jitters, crashes or upset
          stomach.
        </p>
      </div>
      <div className="featuredProducts-grid">
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
};

export default FeaturedProducts;
