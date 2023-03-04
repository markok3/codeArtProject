import React, { useState } from "react";
import { Data } from "./Data";
import "./Accordion.css";
import { Icon } from "@iconify/react";

const Accordion = () => {
  const [clicked, setClicked] = useState(0);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <div className="accordion-section">
      <h1>FAQ</h1>
      <div className="accordion-container">
        {Data.map((item, index) => {
          return (
            <div className="wrapper-accordion">
              <div
                className="wrap-accordion"
                onClick={() => toggle(index)}
                key={index}
              >
                <h4>{item.question}</h4>
                <span>
                  {clicked === index ? (
                    <Icon icon="material-symbols:fitbit-arrow-upward" />
                  ) : (
                    <Icon icon="material-symbols:fitbit-arrow-downward-sharp" />
                  )}
                </span>
              </div>
              {clicked === index ? (
                <div className="dropdown-accordion">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
