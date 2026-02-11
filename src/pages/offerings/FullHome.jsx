import React from 'react';

const FullHome = () => {
    const data = {
        title: 'Full Home Interiors',
        subtitle: 'End-to-end interior solutions for your home',
        image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
        features: ['Living Room Design', 'Bedroom Design', 'Bathroom Design', 'Dining Area', 'Foyer Design', 'Balcony Design']
    };

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">{data.title}</h1>
                <p className="section-subtitle">{data.subtitle}</p>

                <div style={{ margin: '3rem 0', borderRadius: '20px', overflow: 'hidden', height: '400px' }}>
                    <img src={data.image} alt={data.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>

                <div className="grid grid-3" style={{ marginTop: '3rem' }}>
                    {data.features.map((feature, i) => (
                        <div key={i} className="feature-card">
                            <h3>{feature}</h3>
                            <p>Premium designs customized for your space and requirements.</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullHome;
