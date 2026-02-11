import React from 'react';

const Blogs = () => {
    let title = "Design Trends";
    let subtitle = "Stay updated with the latest in interior design.";

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title"><span className="accent-text">{title}</span></h1>
                <p className="section-subtitle">{subtitle}</p>

                <div className="grid grid-2" style={{ marginTop: '3rem', textAlign: 'left' }}>

                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Trend</span>
                        <h3>Top 10 Kitchen Trends for 2026</h3>
                        <p>Discover the latest styles taking over homes this year, from bold colors to smart appliances.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>


                    <div className="feature-card">
                        <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Trend</span>
                        <h3>Minimalist Living Rooms</h3>
                        <p>How to achieve the perfect balance of style and function with less clutter.</p>
                        <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
