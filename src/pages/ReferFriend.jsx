import React from 'react';

const ReferFriend = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Refer a <span className="accent-text">Friend</span></h1>
                <p className="section-subtitle">Spread the love and earn rewards!</p>

                <div style={{ marginTop: '3rem', padding: '3rem', border: '2px dashed var(--primary)', borderRadius: '20px', display: 'inline-block' }}>
                    <h3>Give ₹5000, Get ₹5000</h3>
                    <p>Refer your friends to KryossInterior and you both get rewards when they book.</p>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Start Referring</button>
                </div>
            </div>
        </div>
    );
};

export default ReferFriend;
