import React from 'react';

const MaintenanceGuide = () => {
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
};

export default MaintenanceGuide;
