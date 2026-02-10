import React from 'react';

const Offerings = () => {
    const type = window.location.pathname.split('/').pop();

    const content = {
        'full-home': {
            title: 'Full Home Interiors',
            subtitle: 'End-to-end interior solutions for your home',
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=80',
            features: ['Living Room Design', 'Bedroom Design', 'Bathroom Design', 'Dining Area', 'Foyer Design', 'Balcony Design']
        },
        'modular-kitchens': {
            title: 'Modular Kitchens',
            subtitle: 'Functional & Stylish Kitchens',
            image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1000&q=80',
            features: ['L-Shaped Layouts', 'U-Shaped Layouts', 'Island Kitchens', 'Parallel Kitchens', 'Straight Kitchens', 'Custom Cabinets']
        },
        'wardrobes': {
            title: 'Wardrobes',
            subtitle: 'Smart Storage Solutions',
            image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1000&q=80',
            features: ['Sliding Wardrobes', 'Hinged Wardrobes', 'Walk-in Closets', 'Loft Storage', 'Mirror Wardrobes', 'Kids Wardrobes']
        }
    };

    const data = content[type] || content['full-home'];

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

export default Offerings;
