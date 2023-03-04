import React from "react";
import Product from "../Product/Product";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="product-list-container">
      <h2>12 Potent Super-Nutrient Ingredients</h2>
      <h3>
        Selected to synergistically compound benefits and give you elite energy,
        focus, cognitive retention, and stress relief.
      </h3>

      <div className="product-list-list">
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default ProductList;
