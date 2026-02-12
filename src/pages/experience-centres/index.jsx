import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { MapPin, Phone, Navigation } from 'lucide-react';

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
        <div className="page-container">
            <div className="section-header text-center" style={{ paddingTop: '8rem' }}>
                <h1 className="section-title">Experience <span className="accent-text">Centres</span></h1>
                <p className="section-subtitle">
                    {cityParam ? `Visit us in ${cityParam}` : 'Visit us to see and feel our designs in person'}
                </p>
                {cityParam && (
                    <a href="/experience-centres" className="btn btn-outline" style={{ marginTop: '1rem' }}>View All Cities</a>
                )}
            </div>

            <div className="container section">
                {filteredCenters.length > 0 ? (
                    <div className="grid grid-3">
                        {filteredCenters.map((center, i) => (
                            <div key={i} className="feature-card" style={{ textAlign: 'left' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
                                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{center.city}</h3>
                                    <MapPin size={24} color="var(--primary)" />
                                </div>
                                <h4 style={{ fontSize: '1rem', opacity: 0.8, marginBottom: '1rem' }}>{center.name}</h4>
                                <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem' }}>{center.address}</p>

                                <div style={{ display: 'flex', gap: '1rem' }}>
                                    <button className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        <Phone size={16} /> Call
                                    </button>
                                    <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>
                                        <Navigation size={16} /> Direction
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center">
                        <h3>No experience centers found in {cityParam}.</h3>
                        <p>We are expanding soon!</p>
                        <a href="/experience-centres" className="btn btn-primary" style={{ marginTop: '1rem' }}>View All Locations</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ExperienceCenters;
