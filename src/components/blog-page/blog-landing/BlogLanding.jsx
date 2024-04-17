import React from "react";
import './BlogLanding.css';
import BlogLandingData from "../../../data/blog/blog-landing/BlogLandingData";
import { Link } from "react-router-dom";

export default function BlogLanding(){
    return(
        <main>
            <div className="blog-landing-page">
                <div className="blog-landing-container">
                    {BlogLandingData.map((item,index)=>
                   
                    <div className="blog-landing-card" key={index}>
                         <Link to={`/resources/${item.id}`} key={item.id} className="blog-landing-card-inner">
                        <div className="blog-landing-card-image">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="blog-landing-card-category">
                            <h1>{item.category}</h1>
                            <p>{item.read}</p>
                        </div>
                        <div className="blog-landing-card-heading">
                            <h1>{item.title}</h1>
                        </div>
                        <div className="blog-landing-card-description">
                            <p>{item.description}</p>
                        </div>
                        <div className="blog-landing-card-author">
                            <p>{item.author}</p>
                            <p>{item.date}</p>
                        </div>
                        </Link>
                    </div>
                    
                    )}
                </div>
            </div>
        </main>
    )
}