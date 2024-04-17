import React from "react";
import './LandingPage.css';
import Amazon from '../../assets/Images/landing-page/better-together/amazon.png';
import Clickup from '../../assets/Images/landing-page/better-together/clickup.png';
import Hostinger from '../../assets/Images/landing-page/better-together/hostinger.png';
import Graphy from '../../assets/Images/landing-page/better-together/grphy.png';
import Hubspot from '../../assets/Images/landing-page/better-together/hubspot.png';
import Mailercloud from '../../assets/Images/landing-page/better-together/mailercloud.png';
import Semrush from '../../assets/Images/landing-page/better-together/semrush.png';
import Shopify from '../../assets/Images/landing-page/better-together/shopify.png';
import Wati from '../../assets/Images/landing-page/better-together/wati.png';


export default function LandingBetterTogether(){
    return(
        <main>
            <div className="landing-better">
                <div className="landing-better-container">
                    <div className="landing-better-left">
                        <h3>Expand with trafy</h3>
                        <h4>Better Together</h4>
                        <p>Harness the power of collaboration and watch your business growth with our integrated solutions. 
                            A new era of expansion begins here!</p>
                    </div>
                    <div className="landing-better-right">
                        <div className="landing-better-image"><img src={Amazon} alt="Amazon" /></div>
                        <div className="landing-better-image"><img src={Hostinger} alt="Hostinger" /></div>
                        <div className="landing-better-image"><img src={Semrush} alt="Semrush"  style={{ height: "24px" }} /></div>
                        <div className="landing-better-image"><img src={Clickup} alt="Clickup" /></div>
                        <div className="landing-better-image"><img src={Hubspot}alt="Hubspot" /></div>
                        <div className="landing-better-image"> <img src={Graphy} alt="Graphy" style={{ height: "24px" }} /></div>
                        <div className="landing-better-image"><img src={Shopify} alt="Shopify" /></div>
                        <div className="landing-better-image"><img src={Mailercloud} alt="Mailercloud" /></div>
                        <div className="landing-better-image"><img src={Wati} alt="Wati" /></div>
                           
                    </div>
                </div>
            </div>
        </main>
    )
}