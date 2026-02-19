import React from 'react';

const Videos = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Design <span className="accent-text">Videos</span></h1>
                <p className="section-subtitle">Watch our latest design transformations and tips.</p>
                <div className="grid grid-2" style={{ marginTop: '3rem' }}>
                    <div className="feature-card">
                        <div style={{ width: '100%', aspectRatio: '16/9', background: '#ddd', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Video Placeholder</div>
                        <h3>Home Tour: Modern 3BHK in Mumbai</h3>
                        <p>See how we transformed this space into a modern haven.</p>
                    </div>
                    <div className="feature-card">
                        <div style={{ width: '100%', aspectRatio: '16/9', background: '#ddd', marginBottom: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Video Placeholder</div>
                        <h3>Tips for Small Kitchens</h3>
                        <p>Maximize space in your compact kitchen with these expert tips.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Videos;
