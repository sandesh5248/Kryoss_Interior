import React from 'react';

const Guides = () => {
    const path = window.location.pathname;
    const isMaintenance = path.includes('maintenance');

    if (isMaintenance) {
        return (
            <div className="page-container" style={{ paddingTop: '8rem' }}>
                <div className="container section">
                    <h1 className="section-title text-center">Maintenance <span className="accent-text">Guides</span></h1>
                    <p className="section-subtitle text-center">Keep your interiors looking new forever</p>
                    <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                        <div className="feature-card">
                            <h3>Kitchen Maintenance</h3>
                            <p>Tips for cleaning modular cabinets and countertops to ensure longevity.</p>
                        </div>
                        <div className="feature-card">
                            <h3>Wardrobe Care</h3>
                            <p>How to prevent moisture and maintain smooth sliding mechanisms.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Design <span className="accent-text">Guides</span></h1>
                <p className="section-subtitle">Everything you need to know about home interiors</p>
                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <h3>Maintenance Guide</h3>
                        <p>How to keep your interiors looking new.</p>
                        <a href="/guides/maintenance" className="btn btn-outline" style={{ marginTop: '1rem', display: 'inline-block' }}>Read More</a>
                    </div>
                    <div className="feature-card">
                        <h3>Material Guide</h3>
                        <p>Understanding plywood vs MDF.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                    <div className="feature-card">
                        <h3>Style Guide</h3>
                        <p>Modern vs Contemporary designs.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guides;
