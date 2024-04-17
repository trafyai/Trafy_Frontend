import React, {useState} from "react";
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import './CoursePage.css';

export default function CourseHero(props){
    const [showShare, setShowShare] = useState(false);
    const [pageUrl, setPageUrl] = useState(window.location.href);
    const [showAlert, setShowAlert] = useState(false);

   
    function courseShare() {
        setShowShare(!showShare);
        document.body.classList.toggle('overflow');
    }
    
function shareToLinkedIn() {
    const postTitle = encodeURIComponent('UI/UX Designing');
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${postUrl}&title=${postTitle}`, '_blank', 'width=600,height=400');
  }
  
  function shareToTwitter() {
    const postTitle = encodeURIComponent('UI/UX Designing');
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://twitter.com/intent/tweet?text=${postTitle}&url=${postUrl}`, '_blank', 'width=600,height=400');
}
  
  function shareToFacebook() {
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${postUrl}`, '_blank', 'width=600,height=400');
  }
  function shareToWhatsApp() {
    const postUrl = encodeURIComponent('https://trafyai.com/uiux-course');
    window.open(`https://api.whatsapp.com/send?text=${postUrl}`, '_blank');
  }

    function copyUrlToClipboard() {
        navigator.clipboard.writeText(pageUrl)
            .then(() => {
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 3000); // Hide alert after 3 seconds
                
                // Select the input element and highlight the text
                const inputElement = document.querySelector('.course-share-link input');
                inputElement.select();
                inputElement.setSelectionRange(0, inputElement.value.length);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    }

    return(
       <main>
            
             <div className="hero-section" style={{backgroundColor:props.bgColor}}>
                <div className="hero-section-container">

                    <div className="hero-main">
                        <div className="hero-label">
                            <div className="hero-category"><p>{props.category}</p></div>
                            <div className="hero-popularity"><p>{props.popularity}</p></div>
                            <div className="share">
                                <img src={props.shareIcon} alt="" onClick={courseShare}/>
                            </div>

                        </div>
                        <div className="hero-main-heading">
                            <h1>{props.courseHeading}</h1>
                        </div>
                        <div className="hero-description">
                            <p>{props.courseDescription} </p>
                        </div>
                        <div className="hero-rating">
                            <div className="hero-rating-number">{props.rating}</div>
                            <div className="hero-rating-star">
                                <img src={props.ratingIcon} alt="" />
                            </div>
                        </div>
                        <div className="hero-cta">
                            <Link to="/course-enquiry"><button className="hero-enroll">Join now</button></Link>
                            <Link to="/demo-enquiry"> <button className="hero-demo">Free Demo</button></Link>
                        </div>
                    </div>
                    {showShare &&
                        <div className="course-share">
                            <div className="course-share-exit">
                                <p>Share</p>
                                <img src={props.closeIcon} alt=""  onClick={courseShare}/>
                            </div>
                            <div className="course-share-container">
                                <div className="course-share-socials">
                                    <img src={props.whatsappIcon} alt="whatsapp"  onClick={shareToWhatsApp}/>
                                    <img src={props.facebookIcon} alt="facebook" onClick={shareToFacebook}/>
                                    <img src={props.linkedinIcon} alt="linkedin" onClick={shareToLinkedIn}/>
                                    <img src={props.xIcon} alt="x" onClick={shareToTwitter}/>
                                </div>
                                <div className="course-share-link">
                                    <input type="text"   value={pageUrl} readOnly/>
                                    <button onClick={copyUrlToClipboard}>Copy</button>
                                </div>
                            </div>
                        </div>
                    }
                    {showAlert &&
                        <div className="alert">Link copied to clipboard</div>
                    }
                    <div className="hero-sub">
                        <div className="hero-platform">
                            <div className="platform-heading"><p>{props.platform}</p></div>
                            <div className="platform-images">
                                <img src={props.iphoneIcon} alt="iphone" />
                                <img src={props.macIcon} alt="imac" />
                                <img src={props.tabIcon} alt="ipad" />
                                <img src={props.visionICon} alt="vison" />
                                <img src={props.watchIcon} alt="iwatch" />

                            </div>
                        </div>
                        <div className="hero-start-date">
                            <div className="start-date-heading"><p>{props.startDateH}</p></div>
                            <div className="start-date"><p>{props.startDate}</p></div>
                        </div>
                        <div className="hero-level">
                            <div className="level-heading"><p>{props.levelH}</p></div>
                            <div className="level"><p>{props.level}</p></div>
                        </div>
                        <div className="hero-duration">
                            <div className="duration-heading"><p>{props.durationH}</p></div>
                            <div className="duration"><p>{props.duration}</p></div>
                        </div>

                    </div>

                </div>
            </div>
           
        
           

       </main>
    )
}

