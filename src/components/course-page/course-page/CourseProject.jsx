import React, {useState} from "react";
import './CoursePage.css';

export default function CourseProject(props){
    return(
        <main>
            <div className="course-project" >
            <div className="course-project-container">
            <div className="course-project-heading">
                <h2>{props.heading}</h2>
            </div>
            <div className="course-projects-contents">
                {props.project.map((item,index)=>
                <div className="project-box" key={index} >
                    <div className="project-box-heading" style={{ transition: "opacity 100s ease" }}>
                    <h3 style={{ backgroundColor: props.bgColor }}>{item.title}</h3>
                    </div>
                    <div className="project-box-description" style={{ transition: "opacity 0.5s ease" }}>
                    <p style={{  padding:"16px" }}>{item.description}</p>
                    
                    </div>
                </div>
                )}
                
            </div>
            </div>
      </div>
        </main>
    )
}