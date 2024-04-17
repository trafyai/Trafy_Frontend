import React, { useState } from "react";
import './LandingPage.css';

const LandingNewsletter = () => {
    const [userData, setUserData] = useState({
        email: ""
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [subscribed, setSubscribed] = useState(false); // State to track if the user has subscribed

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email } = userData;

        if (!email) {
            setErrorMessage("Please fill in the required fields.");
            return;
        }

        // Validation of email format can be added here if needed

        try {
            const response = await fetch('https://newsletter-form-9e6c9-default-rtdb.firebaseio.com/NewsLetterForm.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email })
            });

            if (response.ok) {
                setSubscribed(true); // Set subscribed state to true
                setErrorMessage(""); // Clear error message
                setUserData({ email: "" }); // Clear the input field
            } else {
                setErrorMessage("Error submitting the form. Please try again later.");
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setErrorMessage("Error submitting the form. Please try again later.");
        }
    };

    // Function to render the form or the thank you message
    const renderFormOrMessage = () => {
        if (subscribed) {
            return (
                <div className="landing-newsletter-heading">
                    <p>Thank you for subscribing to our newsletter!</p>
                </div>
            );
        }
        
        else {
            return (
                <div className="landing-newsletter-container-inner">
                    <div className="landing-newsletter-heading">
                        <p>Get instant alerts on new breakthroughs and openings in your industry.</p>
                   </div>
                   <div className="landing-newsletter-form">
                      <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            value={userData.email}
                            onChange={handleInputChange}
                            required
                            autoComplete="off"
                            name="email"
                            className="landing-newsletter-email"
                        />
                        {errorMessage && <p className="error-message">{errorMessage}</p>}
                        <button type="submit">Submit</button>
                     </form>
                </div>
                </div>
            );
        }
    };

    return (
        <main>
            <div className="landing-newsletter">
                <div className="landing-newsletter-container">
                {renderFormOrMessage()} {/* Render form or thank you message */}
                </div>
            </div>
        </main>
    );
};

export default LandingNewsletter;
