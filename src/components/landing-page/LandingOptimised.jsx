import React, { useState } from "react";
import './LandingPage.css';
import ExpandMore from '../../assets/Images/comman/common/expand_more_white.png';

export default function LandingOptimised() {

    const [accordionStates, setAccordionStates] = useState({
        1: false,
        2: false
    });

    function openAccordion(key) {
        setAccordionStates(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    }

    return (
        <main>
            <div className="landing-optimised">
                <div className="landing-optimised-container">
                    <div className="landing-optimised-left">
                        <h3>Optimised for students and working professionals</h3>
                        <p>Our AI powered curriculum builds personalized education goals</p>
                    </div>
                    <div className="landing-optimised-right">
                        <div className="landing-optimised-accordion">
                            <div className="landing-optimised-accordion-contents" onClick={() => openAccordion(1)}>
                                <div className="landing-accordion-heading">
                                    <h4>For Students</h4>
                                    <img src={ExpandMore}  className={`accordion-icon ${accordionStates[1] ? 'rotated' : ''}`} />
                                </div>
                                {accordionStates[1] && <div className="landing-accordion-contents">Hoping for a bright future? Want to get into the core company of your interest? 
                                We got you covered. Our industry recognised career path will help you gain all the essential skills you need and land your first job with an attractive remuneration.
                                </div>}
                            </div>
                            <div className="landing-optimised-accordion-contents" onClick={() => openAccordion(2)}>
                                <div className="landing-accordion-heading">
                                    <h4>For Professionals</h4>
                                    <img src={ExpandMore}  className={`accordion-icon ${accordionStates[2] ? 'rotated' : ''}`} />
                                </div>
                                {accordionStates[2] && <div className="landing-accordion-contents">Feeling detached from the job you are passionate about? Want to transition your career to a treading and growing industry? 
                                We at trafy are here to help. We know transitions are hard, but our career experts will help you choose a high demand course and guide you to get into trending jobs with good CTC</div>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
