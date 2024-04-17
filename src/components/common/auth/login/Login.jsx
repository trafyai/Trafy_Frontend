import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [emailError, setEmailError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (validateForm()) {
                const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
                // User successfully logged in
                if (userCredential) {
                    navigate('/');
                }
            }
        } catch (error) {
            alert(error.message);
        }
    }

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const handleEmailBlur = () => {
        if (!validateEmail(email)) {
            setEmailError('Invalid email address');
        } else {
            setEmailError('');
        }
    }

    const validateForm = () => {
        let isValid = true;

        // Email validation
        if (!email || !validateEmail(email)) {
            setEmailError('Invalid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        return isValid;
    }

    const handleGoogleSignIn = async () => {
        try {
            const provider = new firebase.auth.GoogleAuthProvider();
            await firebase.auth().signInWithPopup(provider);
            alert("login with Google Successfully");
            navigate('/'); 
        } catch (err) {
            alert(err.message);
        }
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    }

    const navigateToForgotPassword = () => {
        navigate('/forgot-password');
    };

    return (
        <div className="login">
            <Helmet>
                <title>Login</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="canonical" href="https://www.trafyai.com/login" />
            </Helmet>
            <div className="login-container">
                <div className="login-heading">
                    <h1>Login to Your Account</h1>
                </div>

                <form className="form" onSubmit={handleSubmit}>
                    <div className="Email">
                        <input type="email" placeholder="Enter email" required autoComplete="off" name="email" className={`email-holder ${emailError ? 'error' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} onBlur={handleEmailBlur}/>
                        {emailError && <div className="error-message">{emailError}</div>}
                    </div>
                    <div className="Password">
                        <div className="password-input">
                            <div>
                                <input type={showPassword ? "text" : "password"} placeholder="Enter password" required autoComplete="off" name="password" className="password-holder" value={password} onChange={(e) => setPassword(e.target.value)} />
                                <span className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="login-button">
                        <button className="signup-btn" type="submit">Login</button>
                    </div>

                    <div className="divider"></div>

                    <div className="google-signin">
                        <button type="button" className="login-with-google-btn" onClick={handleGoogleSignIn}>Login with Google</button>
                    </div>

                    <p>Don't have an account? <Link to="/signup"> Signup</Link></p>
                </form>

                <div>
                    <p onClick={navigateToForgotPassword} className="forgot-password-link">Forgot your password?</p>
                </div>
            </div>
        </div>
    );
}

export default Login;
