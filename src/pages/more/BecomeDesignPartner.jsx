import React from 'react';

const BecomeDesignPartner = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Become A <span className="accent-text">Design Partner</span></h1>
                <p className="section-subtitle">Join our network of talented designers.</p>

                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <h3>Why Join Us?</h3>
                        <p>Get access to a steady stream of leads, advanced design tools, and a supportive community.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Who We Are Looking For</h3>
                        <p>Experienced interior designers with a passion for creating beautiful homes.</p>
                    </div>
                </div>
                <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Apply Now</button>
            </div>
        </div>
    );
};

export default BecomeDesignPartner;
