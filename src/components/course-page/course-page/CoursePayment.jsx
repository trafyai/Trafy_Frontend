import React from "react";
import './CoursePage.css';
import {Link} from 'react-router-dom';

export default function CoursePayment(props){
    return(
        <main>
             <div className="course-payment" style={{backgroundColor:props.bgColor}}>
            <div className="course-payment-container">
                <div className="course-payment-heading"><h2>{props.feeH}</h2></div>
                <div className="course-payment-contents">
                    <div className="course-payment-box" style={{boxShadow: props.shadowColor}}>
                        <div className="payment-month"><p>{props.weeks}</p></div>
                        <div className="payment-starting">
                            <p>{props.start}</p>
                            <h3>{props.rate}</h3>
                        </div>
                        
                        <hr />
                        <div className="payment-points"><p>{props.sub}</p>
                        <ul>
                            {props.sublist.map((item,index)=>
                           <li>{item.list}</li>
                           
                            )}
                        </ul>
                        </div>
                        <Link to="/course-enquiry"><button className="course-payment-enroll">Enroll now</button></Link>
                    </div>
                    <div className="course-payment-option">
                        <div className="payment-option-heading"><h3>{props.paymentH}</h3></div>
                        <div className="payment-options-container">
                            {props.payment.map((item,index)=>
                            <div className="payment-options-contents" key={index}>
                                <div className="payment-options-topic"><h4>{item.heading}</h4></div>
                              
                                <div className="payment-options-images">
                                {item.images.map((img,idx)=>
                                    <img src={img.image} alt={img.alt} key={idx} />
                                
                                )}
                                </div>
                            </div>
                           )}
                        </div>
                    </div>
                </div>
            </div>
           </div>
        </main>
    )
}