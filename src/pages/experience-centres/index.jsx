import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Navigation } from 'lucide-react';
import '../blogs/BlogArticle.css';

const centers = [
    { city: 'Bengaluru', name: 'MG Road', address: 'MG Road, Bengaluru', phone: '080-68065000' },
    { city: 'Bengaluru', name: 'Whitefield', address: 'Whitefield, Bengaluru', phone: '080-68065000' },
    { city: 'Bengaluru', name: 'HSR Layout', address: 'HSR Layout, Bengaluru', phone: '080-68065000' },
    { city: 'Bengaluru', name: 'Hebbal', address: 'Hebbal, Bengaluru', phone: '080-68065000' },
    { city: 'Hyderabad', name: 'Gachibowli', address: 'Gachibowli, Hyderabad', phone: '080-68065000' },
    { city: 'Hyderabad', name: 'Banjara Hills', address: 'Banjara Hills, Hyderabad', phone: '080-68065000' },
    { city: 'Chennai', name: 'Mount Road', address: 'Mount Road, Chennai', phone: '080-68065000' },
    { city: 'Chennai', name: 'OMR', address: 'OMR, Chennai', phone: '080-68065000' },
    { city: 'Mumbai', name: 'Thane', address: 'Thane, Mumbai', phone: '080-68065000' },
    { city: 'Mumbai', name: 'Kharghar', address: 'Kharghar, Navi Mumbai', phone: '080-68065000' },
    { city: 'Pune', name: 'Baner', address: 'Baner, Pune', phone: '080-68065000' },
    { city: 'Pune', name: 'Yerawada', address: 'Yerawada, Pune', phone: '080-68065000' },
    { city: 'Kolkata', name: 'Kolkata', address: 'Kolkata', phone: '080-68065000' },
    { city: 'Ahmedabad', name: 'Ahmedabad', address: 'Ahmedabad', phone: '080-68065000' },
];

const ExperienceCenters = () => {
    const [searchParams] = useSearchParams();
    const cityParam = searchParams.get('city');

    const filteredCenters = cityParam
        ? centers.filter(center => center.city.toLowerCase() === cityParam.toLowerCase())
        : centers;

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85" alt="Experience Centres" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">Experience <br /><em>Centres</em></h1>
                        <p className="blog-hero__subtitle">
                            {cityParam ? `Visit us in ${cityParam}` : 'Touch, Feel, and Experience our Designs in Person.'}
                        </p>
                        {cityParam && (
                            <a href="/experience-centres" style={{
                                display: 'inline-block', marginTop: '1.5rem',
                                color: '#fff', borderBottom: '1px solid var(--kr-red)',
                                paddingBottom: '0.25rem'
                            }}>View All Cities</a>
                        )}
                    </div>
                </div>
            </div>

            <div className="blog-body">
                <div className="blog-feature-grid">
                    {filteredCenters.length > 0 ? (
                        filteredCenters.map((center, i) => (
                            <div key={i} className="blog-feature-card">
                                <div className="blog-feature-icon" style={{
                                    border: 'none', background: 'transparent', width: 'auto', height: 'auto',
                                    color: 'var(--kr-red)', display: 'flex', alignItems: 'center', gap: '0.5rem'
                                }}>
                                    <MapPin size={32} />
                                </div>
                                <h3 className="blog-feature-title" style={{ fontSize: '1.5rem' }}>{center.city}</h3>
                                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 500 }}>{center.name}</h4>
                                <p className="blog-feature-desc" style={{ marginBottom: '1.5rem' }}>{center.address}</p>

                                <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                                    <button style={{
                                        background: 'var(--kr-red)', color: '#fff', padding: '0.6rem 1.2rem',
                                        borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        <Phone size={16} /> Call
                                    </button>
                                    <button style={{
                                        background: 'transparent', border: '1px solid rgba(255,255,255,0.2)', color: '#fff',
                                        padding: '0.6rem 1.2rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.5rem',
                                        fontSize: '0.9rem'
                                    }}>
                                        <Navigation size={16} /> Direction
                                    </button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: '#888' }}>
                            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '1rem' }}>No experience centers found in {cityParam}.</h3>
                            <p>We are expanding soon!</p>
                            <a href="/experience-centres" style={{ color: 'var(--kr-red)', marginTop: '1rem', display: 'inline-block' }}>View All Locations</a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceCenters;
