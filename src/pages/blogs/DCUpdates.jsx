import React from 'react';
import BlogTemplate from './BlogTemplate';

const DCUpdates = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">DC <span className="accent-text">Updates</span></h1>
                <p className="section-subtitle">Latest news and announcements from KryossInterior.</p>

                <div className="grid grid-2" style={{ marginTop: '3rem', textAlign: 'left' }}>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>News</span>
                        <h3>New Experience Center in Pune</h3>
                        <p>We are excited to announce the opening of our largest experience center in Baner, Pune.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>

                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Award</span>
                        <h3>Best Design Start-up 2025</h3>
                        <p>KryossInterior has been awarded the prestigious Best Design Start-up award.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DCUpdates;
