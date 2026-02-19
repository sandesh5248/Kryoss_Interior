import React from 'react';

const CustomerDashboard = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Customer <span className="accent-text">Dashboard</span></h1>
                <p className="section-subtitle">Log in to track your project status.</p>

                <div style={{ maxWidth: '400px', margin: '3rem auto', padding: '2rem', border: '1px solid #ddd', borderRadius: '8px' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Login</h3>
                    <input type="email" placeholder="Email Address" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <input type="password" placeholder="Password" style={{ width: '100%', padding: '0.8rem', marginBottom: '1rem', borderRadius: '4px', border: '1px solid #ccc' }} />
                    <button className="btn btn-primary" style={{ width: '100%' }}>Login</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerDashboard;
