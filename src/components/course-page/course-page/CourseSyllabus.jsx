import React, { useState } from "react";

export default function CourseSyllabus(props) {
  const [accordionState, setAccordionState] = useState({});
  const [showAll, setShowAll] = useState(false);
  const [hovered, setHovered] = useState(false);

  function toggleAccordion(index) {
    setAccordionState((prevState) => ({
      ...prevState,
      [index]: {
        isOpen: !prevState[index]?.isOpen,
        isRotated: !prevState[index]?.isRotated,
      },
    }));
  }

  function handleViewMore() {
    setShowAll(true);
  }

  function handleViewLess() {
    setShowAll(false);
  }

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const visibleSyllabus = showAll ? props.syllabus : props.syllabus.slice(0, 5);

  return (
    <main>
      <div className="course-syllabus" style={{ backgroundColor: props.bgColor }}>
        <div className="course-syllabus-container">
          <div className="course-syllabus-heading">
            <h2>{props.heading}</h2>
          </div>
          <div className="course-syllabus-accordion-container">
            {visibleSyllabus.map((item, index) => (
              <div
                className="course-syllabus-accordion"
                onClick={() => toggleAccordion(index)}
                key={index} // Added key prop
              >
                <div className="syllabus-accordion-title">
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
                  <div className="syllabus-accordion-contents">
                    <p>{item.contents}</p> {/* Corrected property name */}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="course-view-container">
            {showAll ? (
              <button
                onClick={handleViewLess}
                style={{
                  color: hovered ? props.hoverColor : props.viewMore,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                View Less
              </button>
            ) : (
              <button
                onClick={handleViewMore}
                style={{
                  color: hovered ? props.hoverColor : props.viewMore,
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                View More
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
