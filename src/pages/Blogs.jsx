import React from 'react';

const Blogs = () => {
    const path = window.location.pathname;
    const isTrends = path.includes('trends');
    const isTours = path.includes('tours');

    let title = "Our Blog";
    let subtitle = "Latest trends, tips, and home tours.";

    if (isTrends) {
        title = "Design Trends";
        subtitle = "Stay updated with the latest in interior design.";
    } else if (isTours) {
        title = "Home Tours";
        subtitle = "Take a peek inside real homes designed by us.";
    }

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title"><span className="accent-text">{title}</span></h1>
                <p className="section-subtitle">{subtitle}</p>

                <div className="grid grid-2" style={{ marginTop: '3rem', textAlign: 'left' }}>
                    {(isTrends || !isTours) && (
                        <div className="feature-card">
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Trend</span>
                            <h3>Top 10 Kitchen Trends for 2026</h3>
                            <p>Discover the latest styles taking over homes this year, from bold colors to smart appliances.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                        </div>
                    )}
                    {(isTrends || !isTours) && (
                        <div className="feature-card">
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Trend</span>
                            <h3>Minimalist Living Rooms</h3>
                            <p>How to achieve the perfect balance of style and function with less clutter.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                        </div>
                    )}
                    {(isTours || !isTrends) && (
                        <div className="feature-card">
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tour</span>
                            <h3>Space Saving Ideas for Small Homes</h3>
                            <p>See how we transformed a 2BHK in Mumbai into a spacious haven.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                        </div>
                    )}
                    {(isTours || !isTrends) && (
                        <div className="feature-card">
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tour</span>
                            <h3>Luxury Villa in Bangalore</h3>
                            <p>Tour this stunning 4BHK villa featuring classical themes and modern amenities.</p>
                            <button className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
