import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Signup.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCqL7lnooyjmNGAOB5nc4yZcb6FKu8e-2A",
    authDomain: "trafyai-loginsignup.firebaseapp.com",
    projectId: "trafyai-loginsignup",
    storageBucket: "trafyai-loginsignup.appspot.com",
    messagingSenderId: "344792634329",
    appId: "1:344792634329:web:d343ac2461dd2a731dffc8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const Signup = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State to toggle confirm password visibility
    const [fnameError, setFnameError] = useState('');
    const [lnameError, setLnameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    // eslint-disable-next-line
    const [allFieldError, setAllFieldError] = useState('');
    const navigate = useNavigate();

    const handleSumbit = async (e) => {
        e.preventDefault();

        // Reset previous error messages
        setFnameError('');
        setLnameError('');
        setEmailError('');
        setPasswordError('');
        setConfirmPasswordError('');
        setAllFieldError('');

        // Form validation
        if (!fname.trim() || !lname.trim() || !email.trim() || !password.trim() || !confirmpassword.trim()) {
            setAllFieldError("Please fill in all fields.");
            return;
        }

        if (!/^[a-zA-Z]*$/.test(fname)) {
            setFnameError("First name should contain only alphabets.");
            return;
        }

        if (!/^[a-zA-Z]*$/.test(lname)) {
            setLnameError("Last name should contain only alphabets.");
            return;
        }

        if (!/^\w+([-]?\w+)@\w+([-]?\w+)(\.\w{2,3})+$/.test(email)) {
            setEmailError("Please enter a valid email address.");
            return;
        }

        if (password.length < 8) {
            setPasswordError("Password should be at least 8 characters long.");
            return;
        }

        if (password !== confirmpassword) {
            setConfirmPasswordError("Passwords do not match.");
            return;
        }

        try {
            const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if (user) {
                alert("Account Created");
                navigate('/login');
            }
        } catch (err) {
            alert(err.message);
        }
    }

    const handleGoogleSignIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            alert("Signup with Google Successfully");
            navigate('/login'); // Redirect to dashboard after successful sign in
        } catch (err) {
            alert(err.message);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    }

    return (
        <div className="signup">
            <Helmet>
        <title>Login</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://www.trafyai.com/login" />
      
      </Helmet>
            <div className="signup-container">
                <div className="signup-heading"><h1>Create Your Account</h1></div>

                <form className="form" onSubmit={handleSumbit}>
                    <div className="Name">
                        <div className="fname"><input type="text" value={fname} placeholder="Enter first name" autoComplete="off" name="fname"
                            className="fname-holder" onChange={(e) => setFname(e.target.value)} />
                        {fnameError && <span className="error-message" style={{width:"100%"}}>{fnameError}</span>}</div>
                        <div className="lname"><input type="text" value={lname} placeholder="Enter last name" autoComplete="off" name="lname"
                            className="lname-holder" onChange={(e) => setLname(e.target.value)} />
                        {lnameError && <span className="error-message">{lnameError}</span>}</div>
                    </div>
                    <div className="Email">
                        <input type="text" value={email} placeholder="Enter email" required autoComplete="off" name="email"
                            className="email-holder" onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <span className="error-message">{emailError}</span>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"} // Toggle input type based on showPassword state
                                value={password} 
                                placeholder="Enter password" 
                                required autoComplete="off"
                                name="password" 
                                className="password-holder" 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                            <span className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        {passwordError && <span className="error-message">{passwordError}</span>}
                    </div>
                    <div className="Password">
                        <div className="confirm-password-input">
                            <input 
                                type={showConfirmPassword ? "text" : "password"} // Toggle input type based on showConfirmPassword state
                                value={confirmpassword} 
                                placeholder="Confirm password" 
                                required autoComplete="off"
                                name="confirmpassword" 
                                className="password-holder" 
                                onChange={(e) => setConfirmPassword(e.target.value)} 
                            />
                            <span className="password-toggle" onClick={toggleConfirmPasswordVisibility}>
                                <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
                        {confirmPasswordError && <span className="error-message">{confirmPasswordError}</span>}
                    </div>
                    <div className="SignUp-button">
                        <button className="signup-btn" type="submit">Sign Up</button>
                    </div>

                    <div className="divider"></div>

                    <div className="google-signin">
                     <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Sign up with Google</button>
                    </div>
                    
                    <p>Already have an account? <Link to="/login"> Login </Link></p>
                </form>
            </div>
        </div>
    );
}

export default Signup;