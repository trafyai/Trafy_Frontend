import React from "react";
import './CoursePage.css';

export default function CourseAbout(props){
    return(
        <main>
            
            <div className="course-description" style={{backgroundColor:props.bgColor}}>
                <div className="course-description-container">
                    <div className="left-description-container">
                    <div className="about-course">
                        <div className="about-course-heading"><h2>{props.aboutH}</h2></div>
                        <div className="about-course-description">
                            <p>{props.description}</p>
                        </div>
                    </div>
                        <div className="course-tools">
                            <div className="tools-covered"><h2>{props.toolsH}</h2></div>
                            <div className="tools-img">
                            {props.toolsimg.map((tool, idx) => (
                            <img key={idx} src={tool.url} alt={tool.alt} />
                            ))}
                               
                            </div>
                        </div>
                    </div>

                    <div className="course-skills">
                        <div className="course-skills-heading"><h2>{props.skillsH}</h2></div>
                        <div className="course-skills-description">
                            <ul>
                            {props.skillP.map((skill, idx) => (
                            <li key={idx}>{skill}</li>
                        ))}
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
           
        </main>
    )
}