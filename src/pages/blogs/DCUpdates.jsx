import React from 'react';
import './BlogArticle.css';

const DCUpdates = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
                        alt="DC Updates"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                News & Updates
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            DC Updates: What’s New in Interior Design & <span style={{ color: '#0ea5e9' }}>Home Living</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Trends. Insights. Inspirations. Stay connected to what’s new, relevant, and inspiring in the world of interiors.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Staying Updated Matters
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Interior design is constantly evolving — shaped by changing lifestyles, new materials, and smarter ways of living. DC Updates keeps you connected to what’s new, relevant, and inspiring in the world of interiors.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Today’s homes are more dynamic than ever. Staying informed helps you:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>Make smarter design decisions</li>
                            <li>Discover new materials and finishes</li>
                            <li>Understand evolving lifestyle needs</li>
                            <li>Plan interiors that stay relevant longer</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Design updates are not just about trends — they help homeowners design spaces that are practical, future-ready, and comfortable.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginTop: '1.5rem' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, staying updated is part of creating interiors that truly work for modern living.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            What You’ll Find in DC Updates
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>1. Latest Interior Design Trends</h3>
                                <p style={{ color: '#475569' }}>From colour palettes and textures to layout concepts and décor styles, we share trends that are shaping contemporary homes.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>2. New Materials & Finishes</h3>
                                <p style={{ color: '#475569' }}>Discover innovative materials, sustainable options, and premium finishes that enhance durability, aesthetics, and functionality.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>3. Smart Living Innovations</h3>
                                <p style={{ color: '#475569' }}>Technology is redefining interiors. Learn about smart lighting, automation, space-saving solutions, and modern conveniences designed for everyday ease.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>4. Industry Insights</h3>
                                <p style={{ color: '#475569' }}>Get updates on interior design practices, evolving preferences, and ideas that influence how homes are designed today.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Design Updates That Matter to Homeowners
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Not every trend suits every home. DC Updates focuses on ideas that are:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>Practical and adaptable</li>
                            <li>Suitable for Indian homes</li>
                            <li>Easy to maintain</li>
                            <li>Long-lasting in appeal</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Our goal is to help you choose what works — not what simply looks good online.
                        </p>
                    </section>


                    <section style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            How to Use These Updates
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Whether you’re planning a new home interior, renovating an existing space, upgrading one room at a time, or simply exploring ideas, DC Updates helps you stay informed and inspired throughout your interior journey.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Good design evolves, but comfort and functionality remain timeless. By staying updated with interior trends and innovations, you can design spaces that feel fresh today and relevant tomorrow.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            DC Updates is your window into the ideas shaping modern homes — thoughtfully curated for real living.
                        </p>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>How often should I follow interior design updates?</h3>
                                <p style={{ color: '#64748b' }}>It’s helpful to check updates while planning or renovating to make informed choices.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Are all trends suitable for every home?</h3>
                                <p style={{ color: '#64748b' }}>No. Trends should always be adapted to your space, lifestyle, and budget.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Do design updates help with budgeting?</h3>
                                <p style={{ color: '#64748b' }}>Yes. Knowing new materials and solutions can help you plan better and avoid costly changes later.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Stay Updated with Us</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Subscribe to get the latest trends and updates delivered to you.
                        </p>
                        <a href="/contact-us" className="cta-button">
                            Get Updates
                        </a>
                    </div>
                    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default DCUpdates;
