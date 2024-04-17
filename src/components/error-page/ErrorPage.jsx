import React from "react";
import './ErrorPage.css';
import {Link} from 'react-router-dom';

export default function ErrorPage(){
    return(
        <div className="error-page">
            <div className="error-page-container">
                <p className="error-404">404 Error</p>
                <p className="error-404-description">Oh no! Something went wrong.</p>
                <p className="page-doesnt-exist">This page doesn't exist or is unavailable</p>
               <Link to="/"><button className="back-to-home">Back to Trafy</button></Link> 
            </div>
        </div>
    )
}