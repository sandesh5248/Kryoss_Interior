import React from 'react';
import { useSearchParams } from 'react-router-dom';

const DCHomeTours = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">DC Home <span className="accent-text">Tours</span></h1>
                <p className="section-subtitle">Take a peek inside real homes designed by us.</p>

                <div className="grid grid-2" style={{ marginTop: '3rem', textAlign: 'left' }}>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tour</span>
                        <h3>Space Saving Ideas for Small Homes</h3>
                        <p>See how we transformed a 2BHK in Mumbai into a spacious haven.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>

                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tour</span>
                        <h3>Luxury Villa in Bangalore</h3>
                        <p>Tour this stunning 4BHK villa featuring classical themes and modern amenities.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DCHomeTours;
