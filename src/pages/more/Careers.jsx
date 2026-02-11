import React from 'react';

const Careers = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Join Our <span className="accent-text">Team</span></h1>
                <p className="section-subtitle">Build the future of home interiors with us.</p>
                <div style={{ marginTop: '3rem' }}>
                    <p>We are always looking for talented designers, project managers, and tech enthusiasts.</p>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }}>View Openings</button>
                </div>
            </div>
        </div>
    );
};

export default Careers;
