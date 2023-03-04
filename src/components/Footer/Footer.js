import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        <div className="top-row">
          <span>Terms And Conditions</span>
          <span>Privacy Policy</span>
          <span>Return Policy</span>
          <span>Shipping Policy</span>
        </div>
        <div className="line-break"></div>

        <div className="middle-row">
          <div className="middle-row-contact-info">
            <a>For Product Support, please contact the seller HERE. </a>
            <a>For Product Support, please contact the seller HERE. </a>
          </div>
          <p className="middle-row-info">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu
            fermentum augue, sit amet convallis augue. Integer eu iaculis sem,
            sed euismod eros. Nulla facilisi. Proin luctus odio nunc, sed
            laoreet est bibendum vitae. Sed a eleifend ex. Integer varius
            rhoncus euismod. Aliquam ac ultricies turpis, vitae eleifend ligula.
            Aliquam faucibus erat ut tincidunt cursus.
          </p>
        </div>

        <div className="bottom-row">
          <button className="bottom-row-button">
            Cras et ullamcorper velit. In hac habitasse platea dictumst. Nunc
            vitae dui quis risus elementum auctor.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
