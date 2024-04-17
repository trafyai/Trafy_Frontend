import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './forgot-password.css';
import { Helmet } from 'react-helmet';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      // Attempt to send a password reset email
      await firebase.auth().sendPasswordResetEmail(email);
      setResetSent(true);
      setError('');
    } catch (error) {
      // Check if the error is due to user not found
      if (error.code === 'auth/user-not-found') {
        setError('User does not exist. Please create an account.');
      } else {
        setError(error.message);
      }
    }
  };

  return (
    <div className="forgot-password-center">
      <Helmet>
        <title>Forgot Password</title>
      </Helmet>
      <div className="forgot-password-container">
        <h2>Forgot Password</h2> {/* Updated heading */}
        {!resetSent ? (
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Reset Password</button>
            {error && <div className="error-message">{error}</div>} {/* Added CSS class for error message */}
          </form>
        ) : (
          <div>
            <p className="reset-success-message">Password reset email sent. Please check your inbox.</p> {/* Added CSS class for success message */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
