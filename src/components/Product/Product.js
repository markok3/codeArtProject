import React from "react";
import "./Product.css";
import ProductImage from "../images/ProductImageForList.png";

const Product = () => {
  return (
    <div className="product-long-list">
      <div className="product-for-list">
        <div className="product-left">
          <h3 className="product-title">Neurofactor®</h3>
          <p className="product-description">
            An all-natural, patented extract of the whole coffee arabica fruit.
            Inside the skin of this fruit is a rare nutrient that boosts levels
            of brain derived neurotrophic factor (BDNF). [5] BDNF nourishes your
            brai n’s existing neurons, which leads to:
          </p>
          <div className="product-details-ul">
            <ul> </ul>
            <li>Maximizes memory - and gives you lightning-quick thinking.</li>
            <li>Encourages growth of neurons in the brain - at any age. </li>
            <li>Increase BDNF levels by 143% naturally</li>
          </div>
        </div>
        <div className="product-right">
          <img className="product-image-for-list" src={ProductImage}></img>
        </div>
      </div>
    </div>
  );
};

export default Product;
