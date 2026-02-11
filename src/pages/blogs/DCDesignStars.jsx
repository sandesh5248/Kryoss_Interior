import React from 'react';
import BlogTemplate from './BlogTemplate';

const DCDesignStars = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">DC Design <span className="accent-text">Stars</span></h1>
                <p className="section-subtitle">Meet the brilliant minds behind our designs.</p>

                <div className="grid grid-3" style={{ marginTop: '3rem', textAlign: 'left' }}>
                    <div className="feature-card">
                        <div style={{ width: '100px', height: '100px', background: '#ddd', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <h3>Ar. Anjali Rao</h3>
                        <p className="accent-text">Senior Interior Designer</p>
                        <p>Specialist in minimalist and contemporary home interiors with 10+ years experience.</p>
                    </div>
                    <div className="feature-card">
                        <div style={{ width: '100px', height: '100px', background: '#ddd', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <h3>Ar. Rohan Gupta</h3>
                        <p className="accent-text">Kitchen Specialist</p>
                        <p>Expert in modular kitchen functionality and space optimization.</p>
                    </div>
                    <div className="feature-card">
                        <div style={{ width: '100px', height: '100px', background: '#ddd', borderRadius: '50%', marginBottom: '1rem' }}></div>
                        <h3>Ar. Meera Nair</h3>
                        <p className="accent-text">Decor Stylist</p>
                        <p>Brings homes to life with the perfect selection of decor and furnishings.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DCDesignStars;
