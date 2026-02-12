import React from 'react';

const BlogTemplate = ({ title, subtitle, category }) => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section">
                <h1 className="section-title text-center">{title} <span className="accent-text">Ideas</span></h1>
                <p className="section-subtitle text-center">{subtitle}</p>

                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>{category}</span>
                        <h3>10 Stunning {category} Ideas for 2026</h3>
                        <p>Get inspired by these trending designs that redefine style and functionality.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tips</span>
                        <h3>How to Choose the Right Colors for Your {category}</h3>
                        <p>Expert advice on selecting color palettes that enhance your space.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Guide</span>
                        <h3>Maximizing Space in Small {category}s</h3>
                        <p>Clever storage solutions and layout hacks for compact homes.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Decor</span>
                        <h3>Budget-Friendly {category} Makeover</h3>
                        <p>Transform your space without breaking the bank with these simple updates.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogTemplate;
