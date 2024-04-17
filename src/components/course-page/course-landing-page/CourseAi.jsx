import React from "react";
import './CourseLanding.css';
import CourseAiData from "../../../data/course-page/course-landing-page/CourseAiData";

export default function CourseAi(){
    return(
        <main>
            <div className="course-landing-ai">
                <div className="course-landing-ai-container">
                    <div className="course-landing-ai-heading"><h2>Artificial Intelligence Course</h2></div>
                    <div className="course-landing-ai-box-container">
                    {CourseAiData.map((item, index) => (
                        <div className="course-landing-ai-box" key={index}>

                            <div className="course-landing-ai-card-title">
                                <h3>{item.title} </h3>
                            </div>

                            <div className="course-landing-ai-contents">
                                <div className="landing-ai-card-description">
                                    <p>{item.description}</p>
                                </div>

                                <div className="landing-ai-card-labels">
                                    <div className="landing-ai-card-labels-contents">
                                        {Object.values(item.label).map((label, index) => (
                                            <p key={index}>{label}</p>
                                        ))}
                                    </div>
                                </div>

                                <hr />

                                <div className="landing-ai-card-ratings">
                                    <img src={item.fullstar} alt="rating" className="fullstar"/>
                                    <img src={item.fullstar} alt="rating" className="fullstar"/>
                                    <img src={item.fullstar} alt="rating" className="fullstar"/>
                                    <img src={item.fullstar} alt="rating" className="fullstar"/>
                                    <img src={item.halfstar} alt="rating" className="halfstar"/>
                                    <p>{item.rating}</p>
                                </div>

                                <div className="landing-ai-card-level">
                                    <p>{item.level}</p>
                                    <p>{item.duration}</p>
                                </div>

                            </div>

                        </div>
                        ))}

                    </div>
                </div>
                
            </div>
        </main>
    )
}
