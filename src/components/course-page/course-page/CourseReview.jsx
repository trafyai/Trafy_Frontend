import React from "react";
import './CoursePage.css';

export default function CourseReview(props){
    return(
        <main>
            <div className="course-review" style={{backgroundColor:props.bgColor}}>
                <div className="course-review-container">
                    <div className="course-review-heading">
                        <h2>{props.heading}</h2>
                    </div>
                   <div className="course-review-contents">
                  {props.review.map((item,index)=>
                           <div className="review-box" key={index}>
                              <div className="review-box-description">
                                <p>{item.content}</p>
                              </div>
                              <div className="review-box-name"><p>{item.name}</p></div>
                           </div>
                     )}
                       
                   </div>
                </div>
            </div>
        </main>
    )
}