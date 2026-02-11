import React from 'react';

const GuideTemplate = ({ title, subtitle, category }) => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section">
                <h1 className="section-title text-center">{title} <span className="accent-text">Guides</span></h1>
                <p className="section-subtitle text-center">{subtitle}</p>

                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <h3>Getting Started with {category}</h3>
                        <p>Essential tips and tricks for planning your perfect {category.toLowerCase()}.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Article</button>
                    </div>
                    <div className="feature-card">
                        <h3>Top 5 Trends in {category}</h3>
                        <p>Discover the latest design trends for {category.toLowerCase()} in 2026.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Article</button>
                    </div>
                    <div className="feature-card">
                        <h3>{category} Layout Ideas</h3>
                        <p>Maximize space and functionality with these expert layout suggestions.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Article</button>
                    </div>
                    <div className="feature-card">
                        <h3>Budgeting for your {category}</h3>
                        <p>How to get the best design without breaking the bank.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read Article</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideTemplate;
