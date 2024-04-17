import react from "react";
import './LandingPage.css';
import Comma from '../../assets/Images/comman/common/comma_white.png';

export default function LandingReview(){
    return(
        <main>
            <div className="landing-review">
                <div className="landing-review-container">
                    <div className="landing-review-top">
                        <h2>Created to Transform Lives</h2>
                        <p>Know what our precious learners have said about the course</p>
                    </div>
                    <div className="landing-review-bottom">
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>Comprehensive UI/UX course! Clear explanations, practical exercises, and great support. Perfect for beginners and professionals alike. Highly recommended! </p>
                            </div>
                            <div className="landing-review-name">
                                <p>Sindhuja Nair</p>
                            </div>
                        </div>
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>Enriching spatial design course! Fosters creativity, insightful lectures, practical projects. Engaging instructors make learning enjoyable.</p>
                            </div>
                            <div className="landing-review-name">
                                <p>Priyanka Gauda</p>
                            </div>
                        </div>
                        <div className="landing-review-card">
                            <div className="landing-reviews">
                            <img src={Comma} alt="" />
                            <p>Informative UX course! Comprehensive curriculum, interactive assignments, valuable insights. Enhanced my understanding of user experience design. Friendly Tutor!</p>
                            </div>
                            <div className="landing-review-name">
                                <p>Bhavish Reddy</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
