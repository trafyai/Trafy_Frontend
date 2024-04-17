import React, { useState } from "react";


const DemoEnquiry = () => {

    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const [errorMessages, setErrorMessages] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { fname, lname, email, phone, message } = formData;

        const namePattern = /^[A-Za-z]+$/;
        const phonePattern = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;

        const newErrorMessages = {
            fname: !namePattern.test(fname) ? "First name should contain alphabetic characters only." : "",
            lname: !namePattern.test(lname) ? "Last name should contain alphabetic characters only." : "",
            email: !validateEmail(email) ? "Please enter a valid email address." : "",
            phone: !phonePattern.test(phone) ? "Please enter a valid phone number." : "",
            message: "" // No validation for the message field
        };

        setErrorMessages(newErrorMessages);

        if (Object.values(newErrorMessages).some(message => message !== "")) {
            return;
        }

        // Proceed with form submission
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        };

        try {
            const res = await fetch('https://courseenquiryform-default-rtdb.firebaseio.com/EnquiryFormData.json', options);
            if (res.ok) {
                alert("Thank You For Submitting the Form ");
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    phone: "",
                    message: ""
                });
            } else {
                alert("Error: " + res.status);
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Error: " + error.message);
        }
    };

    return (
        <main>
            <div className="course-enquiry-form">
                <div className="course-enquiry-form-container">
                    <div className="course-enquiry-form-contents">

                        <form className="enquiryform" onSubmit={handleSubmit} autoComplete="off" method="POST">
                            <div className="enquiryform-heading">
                                <h2>Ready to get started?</h2>
                            </div>

                            <div className="enquiryfname">
                                <input type="text" placeholder="First name" name="fname" className="enquiry-fname" required onChange={handleChange} value={formData.fname}  />
                                {errorMessages.fname && <p className="error-message">{errorMessages.fname}</p>}
                            </div>
                            <div className="enquirylname">
                                <input type="text" placeholder="Last name" className="enquiry-lname" name="lname" required onChange={handleChange} value={formData.lname}  />
                                {errorMessages.lname && <p className="error-message">{errorMessages.lname}</p>}
                            </div>
                            <div className="enquiryemail">
                                <input type="email" placeholder="Email" required className="enquiry-email" name="email" onChange={handleChange} value={formData.email} />
                                {errorMessages.email && <p className="error-message">{errorMessages.email}</p>}
                            </div>
                            <div className="enquiryphone">
                                <input type="tel" placeholder="Phone Number (e.g., 123-456-7890)" required className="enquiry-phone" name="phone" onChange={handleChange} value={formData.phone} />
                                {errorMessages.phone && <p className="error-message">{errorMessages.phone}</p>}
                            </div>
                            <div className="enquirymessage">
                                <textarea type="text" placeholder="Message" className="enquiry-message" name="message" style={{ width: "100%" }}  value={formData.message} onChange={handleChange} />
                                
                            </div>

                            <button type="submit" className="course-enquiry-button">Get in touch</button>

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default DemoEnquiry;