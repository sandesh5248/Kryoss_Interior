import React from 'react';
import Hero from '../../components/Hero';
import Features from '../../components/Features';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, PlayCircle, Calculator, ChevronRight } from 'lucide-react';
import '../../components/Features.css';
import './Home.css';

const Home = () => {
    return (
        <>
            <Hero />

            {/* Design Gallery Preview */}
            <section className="section" style={{ backgroundColor: '#f9f9f9', padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Explore Our <span className="accent-text">Designs</span></h2>
                        <p className="section-subtitle">Curated interiors for every room in your home</p>
                    </div>
                    <div className="grid grid-3 gallery-preview">
                        <Link to="/design-gallery/modular-kitchen-designs" className="gallery-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" alt="Modular Kitchen" />
                            </div>
                            <div className="content">
                                <h3>Modular Kitchens</h3>
                                <div className="link-text">View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                        <Link to="/design-gallery/bedroom-designs" className="gallery-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80" alt="Bedroom" />
                            </div>
                            <div className="content">
                                <h3>Bedroom Designs</h3>
                                <div className="link-text">View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                        <Link to="/design-gallery/living-room-designs" className="gallery-card">
                            <div className="img-container">
                                <img src="https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80" alt="Living Room" />
                            </div>
                            <div className="content">
                                <h3>Living Room Designs</h3>
                                <div className="link-text">View Designs <ChevronRight size={16} /></div>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: '2.5rem' }}>
                        <Link to="/design-gallery" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem' }}>View All Designs</Link>
                    </div>
                </div>
            </section>

            <Features />

            {/* Offerings Section */}
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Our <span className="accent-text">Offerings</span></h2>
                        <p className="section-subtitle">End-to-end interior services tailored for you</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="feature-card text-center">
                            <div className="img-container" style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80" alt="Full Home" style={{ margin: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Full Home Interiors</h3>
                            <p>Complete home makeovers including false ceiling, wall treatments, flooring, lighting, and custom furniture tailored to your style.</p>
                            <Link to="/offering/full-home" className="btn btn-outline" style={{ marginTop: 'auto' }}>Learn More</Link>
                        </div>
                        <div className="feature-card text-center">
                            <div className="img-container" style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80" alt="Modular Kitchens" style={{ margin: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Modular Kitchens</h3>
                            <p>Ergonomic, functional, and stunning modular kitchens. Choose from L-shaped, U-shaped, parallel, or island kitchens in various finishes.</p>
                            <Link to="/offering/modular-kitchens" className="btn btn-outline" style={{ marginTop: 'auto' }}>Learn More</Link>
                        </div>
                        <div className="feature-card text-center">
                            <div className="img-container" style={{ overflow: 'hidden', borderRadius: '12px', marginBottom: '1.5rem' }}>
                                <img src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80" alt="Wardrobes" style={{ margin: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3>Wardrobes</h3>
                            <p>Maximize your storage with sliding, hinged, or walk-in wardrobes. Multiple internal configurations to suit your specific needs.</p>
                            <Link to="/offering/wardrobes" className="btn btn-outline" style={{ marginTop: 'auto' }}>Learn More</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Calculators Banner */}
            {/* Calculators Banner */}
            <section className="section" style={{
                position: 'relative',
                backgroundImage: "url('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1920&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                padding: '8rem 0',
                color: 'white',
                marginTop: '4rem',
                marginBottom: '4rem'
            }}>
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7))',
                    zIndex: 1
                }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>Plan Your <span className="accent-text">Budget</span></h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '3rem', opacity: 0.9, color: '#f0f0f0', lineHeight: '1.6' }}>
                            Get an instant estimate for your home interiors with our accurate, easy-to-use calculators. <br />No hidden costs or surprises.
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <Link to="/calculator/home" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                <Calculator size={20} /> Home Calculator
                            </Link>
                            <Link to="/calculator/kitchen" className="btn btn-outline" style={{ borderColor: 'white', color: 'white', padding: '1rem 2.5rem', fontSize: '1.1rem' }}>
                                Kitchen Calculator
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Recent Projects */}
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Recent <span className="accent-text">Projects</span></h2>
                        <p className="section-subtitle">Real homes, designed for real people</p>
                    </div>
                    <div className="grid grid-3">
                        <Link to="/projects" className="project-card">
                            <div className="img-wrapper" style={{ overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80" alt="Project 1" />
                            </div>
                            <div className="project-card-content">
                                <h3>Modern Villa in Bangalore</h3>
                                <p className="accent-text" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Full Home Interior</p>
                            </div>
                        </Link>
                        <Link to="/projects" className="project-card">
                            <div className="img-wrapper" style={{ overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80" alt="Project 2" />
                            </div>
                            <div className="project-card-content">
                                <h3>Luxury Apartment in Mumbai</h3>
                                <p className="accent-text" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Kitchen & Living</p>
                            </div>
                        </Link>
                        <Link to="/projects" className="project-card">
                            <div className="img-wrapper" style={{ overflow: 'hidden' }}>
                                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80" alt="Project 3" />
                            </div>
                            <div className="project-card-content">
                                <h3>Contemporary Flat in Pune</h3>
                                <p className="accent-text" style={{ fontSize: '0.9rem', fontWeight: '600' }}>Full Home Interior</p>
                            </div>
                        </Link>
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/projects" className="btn btn-primary" style={{ padding: '0.8rem 2.5rem' }}>See All Projects</Link>
                    </div>
                </div>
            </section>

            {/* Reviews Section */}
            <section className="section" style={{ backgroundColor: '#fff5f5', padding: '6rem 0' }}>
                <div className="container">
                    <div className="section-header text-center">
                        <h2 className="section-title">Happy <span className="accent-text">Stories</span></h2>
                        <p className="section-subtitle">Hear from our delighted customers</p>
                    </div>
                    <div className="grid grid-3">
                        <div className="feature-card" style={{ background: 'white', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', color: '#ffb400', marginBottom: '1rem' }}>
                                <Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} />
                            </div>
                            <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.7' }}>"KryossInterior transformed our empty flat into a beautiful home. The team was professional, adhered to timelines, and the finish is simply outstanding. Highly recommended!"</p>
                            <div style={{ marginTop: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ color: 'var(--secondary)' }}>Rahul & Priya</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 'normal' }}>Bangalore</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card" style={{ background: 'white', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', color: '#ffb400', marginBottom: '1rem' }}>
                                <Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} />
                            </div>
                            <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.7' }}>"The space-saving designs suggested by the architect were brilliant. We now have so much more storage space without compromising on the aesthetics. Great job!"</p>
                            <div style={{ marginTop: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ color: 'var(--secondary)' }}>Amit Singh</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 'normal' }}>Mumbai</div>
                                </div>
                            </div>
                        </div>
                        <div className="feature-card" style={{ background: 'white', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                            <div style={{ display: 'flex', color: '#ffb400', marginBottom: '1rem' }}>
                                <Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} /><Star fill="#ffb400" size={18} />
                            </div>
                            <p style={{ fontStyle: 'italic', fontSize: '1.05rem', lineHeight: '1.7' }}>"Transparency in pricing was the best part. No hidden costs, everything was explained upfront. The execution quality is top-notch compared to others."</p>
                            <div style={{ marginTop: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                                <div>
                                    <div style={{ color: 'var(--secondary)' }}>Sneha Gupta</div>
                                    <div style={{ fontSize: '0.8rem', color: '#888', fontWeight: 'normal' }}>Pune</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center" style={{ marginTop: '3rem' }}>
                        <Link to="/reviews" className="btn btn-outline" style={{ padding: '0.8rem 2.5rem' }}>Read More Reviews</Link>
                    </div>
                </div>
            </section>

            {/* Youtube Video Section */}
            <section className="section" style={{ padding: '6rem 0' }}>
                <div className="container text-center">
                    <h2 className="section-title">Design <span className="accent-text">Inspiration</span></h2>
                    <p className="section-subtitle">Watch our latest home tours and design tips</p>

                    <div className="video-wrapper">
                        <img src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80" alt="Video Cover" />
                        <Link to="/videos" className="play-button">
                            <PlayCircle size={80} fill="rgba(0,0,0,0.6)" stroke="white" strokeWidth={1} />
                            <span style={{ marginTop: '1rem', fontWeight: 'bold', fontSize: '1.2rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Watch Our Story</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA / Booking Form */}
            <section className="section" style={{ background: 'var(--primary)', color: 'white', padding: '6rem 0' }}>
                <div className="container">
                    <div className="grid grid-2 reverse-responsive" style={{ alignItems: 'center', gap: '4rem' }}>
                        <div>
                            <h2 style={{ color: 'white', fontSize: '3rem', lineHeight: '1.1', marginBottom: '1.5rem' }}>Ready to Design Your Dream Home?</h2>
                            <p style={{ margin: '1rem 0', fontSize: '1.2rem', opacity: 0.9, lineHeight: '1.6' }}>Book a free consultation with our expert designers today. Get personalized designs, rough estimates, and more.</p>
                            <ul style={{ listStyle: 'none', marginTop: '2.5rem' }}>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'white', color: 'var(--primary)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} /></div> 400+ Designers
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'white', color: 'var(--primary)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} /></div> 45-Days Move-in Guarantee
                                </li>
                                <li style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '15px', fontSize: '1.1rem' }}>
                                    <div style={{ background: 'white', color: 'var(--primary)', padding: '8px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} /></div> 10 Year Warranty
                                </li>
                            </ul>
                        </div>
                        <div className="booking-form-card">
                            <h3 className="text-center" style={{ marginBottom: '2rem', fontSize: '1.8rem', color: 'var(--secondary)' }}>Book Free Consultation</h3>
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="Name" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" placeholder="Mobile Number" className="form-input" />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Property Location" className="form-input" />
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
                                    <input type="checkbox" id="whatsapp" /> <label htmlFor="whatsapp">Enable WhatsApp updates</label>
                                </div>
                                <div style={{ textAlign: 'center' }}>
                                    <button className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.1rem' }}>Get Free Quote</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
