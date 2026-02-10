import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Calculators = () => {
    const type = window.location.pathname.split('/').pop();

    const renderContent = () => {
        switch (type) {
            case 'kitchen':
                return {
                    title: 'Kitchen Cost Calculator',
                    subtitle: 'Create your dream kitchen within your budget',
                    steps: ['Select Layout', 'Choose Finish', 'Add Appliances'],
                    icon: '🍳'
                };
            case 'wardrobe':
                return {
                    title: 'Wardrobe Cost Calculator',
                    subtitle: 'Estimate the cost of your custom wardrobe',
                    steps: ['Select Size', 'Choose Material', 'Add Accessories'],
                    icon: '👕'
                };
            case 'home':
            default:
                return {
                    title: 'Full Home Cost Calculator',
                    subtitle: 'Plan your complete home interior budget',
                    steps: ['Select Rooms', 'Choose Style', 'Get Estimate'],
                    icon: '🏠'
                };
        }
    };

    const content = renderContent();

    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">{content.title}</h1>
                <p className="section-subtitle">{content.subtitle}</p>

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

export default Calculators;
