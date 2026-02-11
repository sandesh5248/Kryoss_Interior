import React from 'react';

const KitchenCalculator = () => {
    const content = {
        title: 'Kitchen Cost Calculator',
        subtitle: 'Create your dream kitchen within your budget',
        steps: ['Select Layout', 'Choose Finish', 'Add Appliances'],
        icon: '🍳',
        stats: [
            { value: '15,000+', label: 'Homes Delivered' },
            { value: '10 Years', label: 'Warranty' },
            { value: '400+', label: 'Design Experts', highlight: true }
        ]
    };

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">{content.title}</h1>
                <p className="section-subtitle">{content.subtitle}</p>

                <div className="grid grid-3" style={{ gap: '2rem', marginTop: '4rem', maxWidth: '1000px', margin: '4rem auto 2rem' }}>
                    {content.stats.map((stat, i) => (
                        <div key={i} style={{
                            padding: '2rem',
                            background: stat.highlight ? 'var(--primary)' : 'white',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            transition: 'transform 0.3s ease'
                        }}>
                            <h2 style={{
                                fontSize: '3rem',
                                fontWeight: '700',
                                color: stat.highlight ? 'white' : 'var(--primary)',
                                marginBottom: '0.5rem'
                            }}>{stat.value}</h2>
                            <p style={{
                                fontSize: '1.1rem',
                                color: stat.highlight ? 'rgba(255,255,255,0.9)' : '#555',
                                fontWeight: '500',
                                margin: 0
                            }}>{stat.label}</p>
                        </div>
                    ))}
                </div>

                <div style={{ padding: '3rem', background: 'var(--surface)', borderRadius: '20px', marginTop: '3rem', maxWidth: '800px', margin: '3rem auto' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{content.icon}</div>
                    <h3>Calculate in 3 Simple Steps</h3>
                    <div className="grid grid-3" style={{ marginTop: '2rem', gap: '1rem' }}>
                        {content.steps.map((step, i) => (
                            <div key={i} style={{ padding: '1rem', background: 'white', borderRadius: '10px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '30px', height: '30px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.5rem' }}>{i + 1}</div>
                                <p>{step}</p>
                            </div>
                        ))}
                    </div>
                    <button className="btn btn-primary" style={{ marginTop: '2rem' }}>Start Calculation</button>
                </div>
            </div>
        </div>
    );
};

export default KitchenCalculator;
