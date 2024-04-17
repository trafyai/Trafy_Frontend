import React from "react";
import './CoursePage.css';


export default function CourseCertificate(props){
    return(
        <main>
           <div className="course-certificate" style={{backgroundColor:props.bgColor}}>
                <div className="course-certificate-container">
                    <div className="course-certificate-contents">
                        <div className="course-certificate-image">
                            <img src={props.image} alt="" />
                        </div>
                        <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>{props.heading}</h2></div>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}