import React from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const Blogs = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section text-center">
                <h1 className="section-title">Design <span className="accent-text">Blogs</span> & Insights</h1>
                <p className="section-subtitle">Discover trends, tips, and tours to inspire your dream home.</p>

                <div className="grid grid-3" style={{ marginTop: '3rem', textAlign: 'left' }}>

                    {/* Category: DC Updates */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" alt="DC Updates" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Updates</span>
                            <h3>DC Updates</h3>
                            <p>Latest news and updates from the Design Cafe world.</p>
                            <Link to="/blogs/dc-updates" className="btn btn-outline" style={{ marginTop: '1rem' }}>View Updates</Link>
                        </div>
                    </div>

                    {/* Category: Home Tours */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=80" alt="Home Tours" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Tours</span>
                            <h3>Home Tours</h3>
                            <p>Step inside spaces designed for real living. Real homes, real stories.</p>
                            <Link to="/blogs/dc-home-tours" className="btn btn-outline" style={{ marginTop: '1rem' }}>Take a Tour</Link>
                        </div>
                    </div>

                    {/* Category: Design Stars */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" alt="Design Stars" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>People</span>
                            <h3>Design Stars</h3>
                            <p>Meet the creative minds behind our inspiring interiors.</p>
                            <Link to="/blogs/dc-design-stars" className="btn btn-outline" style={{ marginTop: '1rem' }}>Meet Designers</Link>
                        </div>
                    </div>

                    {/* Category: Home Interiors */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&q=80" alt="Home Interiors" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Home</span>
                            <h3>Home Interior Designs</h3>
                            <p>Complete guides for designing every part of your home.</p>
                            <Link to="/blogs/home-interior-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Modular Kitchens */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=600&q=80" alt="Modular Kitchen" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Kitchens</span>
                            <h3>Kitchen Interiors</h3>
                            <p>Detailed guides and ideas for designing your perfect modular kitchen.</p>
                            <Link to="/blogs/modular-kitchen-interiors-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Living Rooms */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=600&q=80" alt="Living Room" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Living</span>
                            <h3>Living Room Designs</h3>
                            <p>Create a living space that balances comfort and style.</p>
                            <Link to="/blogs/living-room-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Dining Rooms */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80" alt="Dining Room" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Dining</span>
                            <h3>Dining Room Designs</h3>
                            <p>Elegant and practical solutions for your dining area.</p>
                            <Link to="/blogs/dining-room-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Bedrooms */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=600&q=80" alt="Bedroom" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Bedroom</span>
                            <h3>Bedroom Ideas</h3>
                            <p>Transform your bedroom into a cozy and personal sanctuary.</p>
                            <Link to="/blogs/bedroom-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Kids Rooms */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=600&q=80" alt="Kids Room" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Kids</span>
                            <h3>Kids Bedroom Designs</h3>
                            <p>Fun and functional design ideas for your little ones.</p>
                            <Link to="/blogs/kids-bedroom-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Study Room */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=600&q=80" alt="Study Room" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Study</span>
                            <h3>Study Room Designs</h3>
                            <p>Design a productive and focused workspace at home.</p>
                            <Link to="/blogs/study-room-design-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                    {/* Category: Home Decor */}
                    <div className="feature-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=600&q=80" alt="Home Decor" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem' }}>
                            <span className="hero-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>Decor</span>
                            <h3>Home Decor Ideas</h3>
                            <p>Add personality to every corner with these decor tips.</p>
                            <Link to="/blogs/home-decor-ideas" className="btn btn-outline" style={{ marginTop: '1rem' }}>Read More</Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blogs;
