import { CloudinaryContext, Image } from 'cloudinary-react';
import landing_page_video from '../assets/landing_page_video.mp4';
import React from 'react';

const LandingPage = () => {
    return (
        <div>
            <div className="vid-container">
                <video id="background-video" loop autoPlay muted>
                    <source src={landing_page_video} type="video/mp4" />
                </video>
            </div>
            {/* <div class="navbar-landing">
                <div class="left-title">
                    <h1>Fine Fettling</h1>
                </div>
                <div class="landing-buttons">
                    <a href="/" className="tab home-tab">Home</a>
                    <a href="/" className="tab garage-tab">Garage</a>
                    <a href="/" className="tab pricing-tab">Pricing</a>
                </div>
            </div> */}
            <CloudinaryContext cloudName={"dy6wiutks"}>
                <div className="top-banner">
                    <div className="logo-container">
                        <Image publicId="mph2-logo.jpg" className="logo" />
                    </div>
                    <div className="enter-container">
                        <div className="text-center title-container">
                            <h1>MPH2</h1>
                            <h1>Classic Car Club</h1>
                        </div>
                        <a href="/" className="enter-btn">Enter</a>
                        <h2>Members Only</h2>
                    </div>
                    <div className="pitlane-container">
                        <Image publicId="328-pitlane.jpg" className="ferrari-pitlane" />
                    </div>
                </div>
                <div className="lp-wrapper">
                    <div className="car-icons">
                        <Image publicId="jaguar.png" className="jag-badge" />
                        <Image publicId="ferrari.png" className="car-badge" />
                        <Image publicId="triumph.png" className="car-badge" />
                        <Image publicId="porsche.png" className="car-badge" />
                        <Image publicId="alfaromeo.png" className="car-badge" />
                    </div>
                    <div className="paddock-pic">
                        <Image publicId="paddock.jpg" className="paddock-image" />
                    </div>
                </div>
                <div className="mo">
                    <div className="momoe-image">
                        <Image publicId="momoe.jpg" className="momoe" />
                        {/* <%= cl_image_tag("momoe.jpg", className: "momoe") %> */}
                </div>
                    <div className="strapline-container">
                        <h2 className="strapline text-center">The one and only classic car club in the Midhurst-Petworth-Haslemere area</h2>
                    </div>
                </div>
                <div className="goodwood-bird">
                        <Image publicId="goodwood-girl.jpg" className="goodwood-girl" />
                </div>
            </CloudinaryContext>
        </div>
    );
};

export default LandingPage;
