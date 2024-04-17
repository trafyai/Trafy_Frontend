import React from "react";
import { useParams, Navigate } from 'react-router-dom';
import './CoursePage.css';
import { CourseHeroData, CourseAboutData, CourseSyllabusData , CourseProjectData , CourseReviewData ,CourseCertificateData , CoursePaymentData, CourseFaqData} from "../../../data/course-page/course-single-page/CoursePageData";
import CourseHero from "./CourseHero";
import CourseAbout from "./CourseAbout";
import CourseSyllabus from "./CourseSyllabus";
import CourseProject from "./CourseProject";
import CourseReview from "./CourseReview";
import CourseCertificate from "./CourseCertificate";
import CoursePayment from "./CoursePayment";
import CourseFaq from "./CourseFaq";

export default function CoursePage() {
    const { courseId } = useParams();

    // Find the course data based on the course ID
    const HeroData = CourseHeroData.find(course => course.id === courseId);
    const AboutData = CourseAboutData.find(course => course.id === courseId);
    const SyllabusData = CourseSyllabusData.find(course => course.id === courseId);
    const ProjectData = CourseProjectData.find(course => course.id === courseId);
    const ReviewData = CourseReviewData.find(course => course.id === courseId);
    const CertificateData = CourseCertificateData.find(course => course.id === courseId);
    const PaymentData=CoursePaymentData.find(course => course.id === courseId);
    const FaqData=CourseFaqData.find(course => course.id === courseId);

    if (!HeroData || !AboutData || !SyllabusData || !ProjectData || !ReviewData || !CertificateData || !PaymentData || !FaqData) {
        // Handle case when course data is not found
        return <Navigate to="/error" />;
    }

    return (
        <main>
            <CourseHero {...HeroData} />
            <CourseAbout {...AboutData} />
            <CourseSyllabus {...SyllabusData} />
            <CourseProject {...ProjectData}/>
            <CourseReview {...ReviewData}/>
            <CourseCertificate {...CertificateData}/>
            <CoursePayment {...PaymentData}/>
            <CourseFaq {...FaqData}/>
        </main>
    );
}




 



 

            {/* ----------------------------------Project----------------------------------- */}

        {/* <div className="course-project">
        <div className="course-project-container">
          <div className="course-project-heading">
            <h2>Projects</h2>
          </div>
          <div className="course-projects-contents">
            {CourseProjectData.map((item, index) => (
              <div className="project-box" key={index} >
                <div className="project-box-heading" style={{ transition: "opacity 100s ease" }}>
                <h3 style={{ opacity: 1, backgroundColor: item.bg_color }}>{item.title}</h3>
              </div>
                <div className="project-box-description" style={{ transition: "opacity 0.5s ease" }}>
                <p style={{ opacity: 1, padding:"16px" }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}

      {/* ------------------------------Review--------------------------------------------------- */}

      {/* <div className="course-review">
                <div className="course-review-container">
                    <div className="course-review-heading">
                        <h2>Review</h2>
                    </div>
                   <div className="course-review-contents">
                   {[
                            { name: "Divya Nair", content: "This course exceeded my expectations! The instructors were knowledgeable and provided practical insights that I could immediately apply to my business. Highly recommended!" },
                            {name: "Dinesh Kumar", content: "I've taken several digital marketing courses before, but this one stands out for its comprehensive coverage and hands-on approach. I feel much more confident in my digital marketing skills now!" },
                            { name: "Abishek", content: "As someone new to digital marketing, I found this course incredibly helpful in demystifying the complex world of online promotion. The instructors were engaging, and the content was well-structured. Thank you!" },
                            
                        ].map((item, index) => (
                           <div className="review-box" key={index}>
                              <div className="review-box-description">
                                <p>{item.content}</p>
                              </div>
                              <div className="review-box-name"><p>{item.name}</p></div>
                           </div>

                        ))}
                   </div>
                </div>
            </div>
           */}
          {/* -------------------------------------Certificate------------------------------- */}
          {/* <div className="course-certificate">
                <div className="course-certificate-container">
                    <div className="course-certificate-contents">
                        <div className="course-certificate-image">
                            <img src={Image} alt="" />
                        </div>
                        <div className="course-certificate-description">
                        <div className="course-certificate-heading"><h2>Earn Industry Recognised Certificate </h2></div>
                            <p>Add this credential to your LinkedIn profile, resume, or CV to showcase your expertise. Share your achievement on social media and during performance reviews to underscore your commitment to professional growth and success.</p>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* -----------------------------------------------Payment------------------------------ */}

            {/* <div className="course-payment">
            <div className="course-payment-container">
                <div className="course-payment-heading"><h2>Course Fee</h2></div>
                <div className="course-payment-contents">
                    <div className="course-payment-box">
                        <div className="payment-month"><p>3 weeks</p></div>
                        <div className="payment-starting">
                            <p>Starting at</p>
                            <h3>INR 15,000</h3>
                        </div>
                        <hr />
                        <div className="payment-points"><p>Including</p>
                        <ul>
                        <li>Lifetime access to course materials</li>
                            <li>Doubt clearing sessions</li>
                            <li>Career guidance and Mock Interviews</li>
                        </ul>
                        </div>
                        <Link to="/course-enquiry"><button className="course-payment-enroll">Enroll now</button></Link>
                    </div>
                    <div className="course-payment-option">
                        <div className="payment-option-heading"><h3>Payment options</h3></div>
                        <div className="payment-options-container">
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>UPI</h4></div>
                                <div className="payment-options-images">
                                    <img src={Gpay} alt="gpay" />
                                    <img src={PhonePe} alt="phonepe" />
                                    <img src={Upi} alt="upi" />
                                </div>
                            </div>
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>Card</h4></div>
                                <div className="payment-options-images">
                                    <img src={Visa} alt="visa" />
                                    <img src={Mastercard} alt="Mastercard" />
                                    <img src={Rupay} alt="Rupay" />
                                </div>
                            </div>
                            <div className="payment-options-contents">
                                <div className="payment-options-topic"><h4>Wallet</h4></div>
                                <div className="payment-options-images">
                                    <img src={Mobikwik} alt="Mobikwik" />
                                    <img src={Ola} alt="Ola" />
                                    <img src={Airtel} alt="Airtel" />
                                    <img src={Freecharge} alt="Freecharge" />
                                    <img src={Jio} alt="Jio" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           </div> */}

           {/* --------------------------------------FAQ----------------------------------- */}
{/* 
           <div className="course-faq">
                <div className="course-faq-container">
                    <div className="course-faq-heading"><h2>Frequently Asked Questions</h2></div>
                    <div className="course-faq-accordion-container">
                        {[
                            { title: "Who is this course for?", content: "This course is ideal for marketing professionals, business owners, entrepreneurs, or anyone looking to enhance their digital marketing skills and effectively promote their products or services online." },
                            { title: "Do I need any prior experience in digital marketing?", content: "No prior experience is required. This course is designed to accommodate beginners as well as those with some background in marketing looking to expand their knowledge in the digital realm." },
                            { title: "What software/tools will I need?", content: "Participants will need access to a computer with internet connectivity. Additionally, we'll utilise various digital marketing tools and platforms throughout the course, many of which offer free versions or trials." },
                            { title: "Will there be any assignments or assessments?", content: "Yes, participants will engage in practical exercises and projects throughout the course to reinforce learning and apply digital marketing concepts in real-world scenarios." }
                        
                        ].map((item, index) => (
                            <div className="course-faq-accordion" key={index} onClick={() => toggleAccordion(index)}>
                                <div className="faq-accordion-title">
                                    <h2>{item.title}</h2>
                                    <img src={ExpandMore} style={{width: "13px", height: "19.200px" }} className={`accordion-icon ${accordionState[index]?.isRotated ? 'rotated' : ''}`} />
                                </div>
                                {accordionState[index]?.isOpen && (
                                    <div className="faq-accordion-contents">
                                        <p>{item.content}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div> */}