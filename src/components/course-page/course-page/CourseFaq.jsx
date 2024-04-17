import React, { useState } from "react";
import "./CoursePage.css";

export default function CourseFaq(props) {
  const [accordionState, setAccordionState] = useState({});

  function toggleAccordion(index) {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: {
        isOpen: !prevState[index]?.isOpen,
        isRotated: !prevState[index]?.isRotated,
      },
    }));
  }

  return (
    <main>
      <div className="course-faq" style={{backgroundColor:props.bgColor}}>
        <div className="course-faq-container">
          <div className="course-faq-heading">
            <h2>{props.heading}</h2>
          </div>
          <div className="course-faq-accordion-container">
            {/* Corrected the map function */}
            {props.faq.map((item, index) => (
              <div
                className="course-faq-accordion"
                onClick={() => toggleAccordion(index)}
                key={index} // Added key prop
              >
                <div className="faq-accordion-title">
                  <h2>{item.title}</h2>
                  <img
                    src={props.dropIcon}
                    alt="Expand More Icon"
                    style={{ width: "13px", height: "19.200px" }}
                    className={`accordion-icon ${
                      accordionState[index]?.isRotated ? "rotated" : ""
                    }`}
                  />
                </div>
                {accordionState[index]?.isOpen && (
                  <div className="faq-accordion-contents">
                    <p>{item.contents}</p> {/* Corrected property name */}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
