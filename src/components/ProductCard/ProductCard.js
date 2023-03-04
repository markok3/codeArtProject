import React from "react";
import "./ProductCard.css";
import ProductImage from "../images/Product.png";
import ProudctBadge from "../images/ProductBadge.png";
import ProductSecurity from "../images/ProductSecurity.png";

const ProductCard = () => {
  return (
    <div>
      <div className="product">
        <div className="product-purchase-type">
          <span>One Time Purchase</span>
        </div>
        <div className="product-title">Lean&Green</div>
        <div className="product-image">
          <img src={ProductImage}></img>
          <div className="product-image-overlay">
            <img src={ProudctBadge}></img>
          </div>
        </div>
        <div className="product-price">
          <div className="product-price-savings">Save 20%</div>
          <div className="product-price-amount">$ 39.99</div>
        </div>
        <div className="product-button">
          <button>Buy Now</button>
        </div>
        <div className="product-price-regular">
          Regal Price: <span>$239.54</span>
        </div>
        <div className="product-security">
          <img src={ProductSecurity}></img>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
