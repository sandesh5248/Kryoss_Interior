import React from 'react';

const BecomeFranchisee = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Become A <span className="accent-text">Franchisee</span></h1>
                <p className="section-subtitle">Start your own interior design business with our proven model.</p>
                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <h3>Proven Business Model</h3>
                        <p>Leverage our successful business strategies and brand reputation.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Comprehensive Support</h3>
                        <p>We provide training, marketing, and operational support.</p>
                    </div>
                    <div className="feature-card">
                        <h3>High ROI</h3>
                        <p>Benefit from a high return on investment with our franchise program.</p>
                    </div>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Enquire Now</button>
            </div>
        </div>
    );
};

export default BecomeFranchisee;
