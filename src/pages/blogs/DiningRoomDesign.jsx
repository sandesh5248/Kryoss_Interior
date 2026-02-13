import React from 'react';
import './BlogArticle.css';

const DiningRoomDesign = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=80"
                        alt="Modern Dining Room Design"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Dining Room Guide
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Dining Room Design Ideas That Redefine <span style={{ color: '#0ea5e9' }}>Modern Living</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Where conversations flow, celebrations spark, and design meets comfort. Transform your dining space into a stylish centerpiece.
                        </p>
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>Table of Contents</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <a href="#trends" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• 2026 Trends</a>
                        <a href="#layout" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Choosing Layouts</a>
                        <a href="#colors" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Color Schemes</a>
                        <a href="#materials" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Materials Guide</a>
                        <a href="#professional" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Why Hire Pros?</a>
                        <a href="#faq" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• FAQs</a>
                    </div>
                </div>

                {/* Introduction */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Dining Room Design Deserves Special Attention
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Modern homes are evolving. Open layouts, multifunctional spaces, and smart storage are redefining how we dine. A thoughtfully designed dining room enhances space efficiency, visual harmony, and guest experience.
                        </p>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9' }}>
                            <p style={{ fontSize: '1.125rem', color: '#334155' }}>
                                At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we approach dining spaces with a balance of aesthetics, functionality, and modern practicality — tailored to your lifestyle.
                            </p>
                        </div>
                    </section>

                    {/* Trending Designs */}
                    <section id="trends" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Trending Dining Room Design Ideas for 2026
                        </h2>

                        {/* 1. Open Concept */}
                        <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    1. Open-Concept Dining Spaces
                                </h3>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>
                                    Seamlessly blending dining with living or kitchen areas creates a sense of openness. Neutral palettes and statement lighting help define the space without closing it off.
                                </p>
                                <p style={{ fontWeight: '600', color: '#64748b' }}>Best For: Urban apartments and modern homes.</p>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img src="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80" alt="Open Concept Dining" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* 2. Compact Dining */}
                        <div style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', order: 2 }}>
                                <img src="https://images.unsplash.com/photo-1574864434960-9d0a33116999?w=800&q=80" alt="Compact Dining Nook" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                            </div>
                            <div style={{ order: 1 }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    2. Compact Dining for Small Homes
                                </h3>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>
                                    Not every home has a dedicated dining room. Foldable tables, wall-mounted units, and sleek 4-seater setups maximize space without compromising style.
                                </p>
                            </div>
                        </div>

                        {/* 3 & 4 Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '4rem' }}>
                            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>3. Statement Lighting</h3>
                                <p style={{ color: '#475569', marginBottom: '1rem' }}>
                                    Oversized pendants or linear chandeliers above the table instantly elevate the look.
                                </p>
                                <div style={{ fontSize: '0.9rem', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                                    <strong>Pro Tip:</strong> Hang fixture 30–36 inches above tabletop.
                                </div>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>4. Elegant Storage Solutions</h3>
                                <p style={{ color: '#475569', marginBottom: '1rem' }}>
                                    Crockery units and sideboards add elegance and utility. Glass shutters and backlit shelves keep clutter away.
                                </p>
                            </div>
                        </div>

                        {/* 5 & 6 Grid */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>5. Minimalist Scandinavian</h3>
                                <p style={{ color: '#475569' }}>
                                    Clean lines, wooden textures, and muted tones. The focus is on natural light and functional furniture. Less décor. More intention.
                                </p>
                            </div>
                            <div style={{ padding: '2rem', backgroundColor: '#fff', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>6. Luxury Dining</h3>
                                <p style={{ color: '#475569' }}>
                                    Marble tabletops, upholstered chairs, and metallic accents. Luxury isn’t about excess — it’s about precision in detailing.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* How to Choose Layout */}
                    <section id="layout" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            How to Choose the Right Dining Room Layout
                        </h2>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '16px', border: '1px solid #bae6fd' }}>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>✓</span>
                                    <span><strong>Available Space:</strong> Measure circulation area (min 36 inches around table).</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>✓</span>
                                    <span><strong>Seating Requirement:</strong> 4, 6, or 8 seater?</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>✓</span>
                                    <span><strong>Storage Needs:</strong> Crockery unit, bar, or shelves?</span>
                                </li>
                                <li style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <span style={{ color: '#0ea5e9', fontWeight: 'bold' }}>✓</span>
                                    <span><strong>Lighting Type:</strong> Balance natural and artificial light.</span>
                                </li>
                            </ul>
                        </div>
                    </section>

                    {/* Colors & Materials */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '5rem' }}>
                        <section id="colors">
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                Color Combinations That Work
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                <li style={{ padding: '1rem', backgroundColor: '#fef3c7', borderRadius: '8px', color: '#92400e' }}><strong>Beige & Walnut:</strong> Warm and timeless</li>
                                <li style={{ padding: '1rem', backgroundColor: '#f1f5f9', borderRadius: '8px', color: '#475569' }}><strong>Grey & White:</strong> Modern and minimal</li>
                                <li style={{ padding: '1rem', backgroundColor: '#ecfccb', borderRadius: '8px', color: '#3f6212' }}><strong>Olive & Gold:</strong> Rich yet subtle</li>
                                <li style={{ padding: '1rem', backgroundColor: '#1e293b', borderRadius: '8px', color: '#fff' }}><strong>Black & Wood:</strong> Contemporary bold</li>
                            </ul>
                        </section>
                        <section id="materials">
                            <h2 style={{ fontSize: '1.75rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                Materials That Elevate Interiors
                            </h2>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                                <li style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}><strong>Engineered Wood:</strong> Durability on a budget</li>
                                <li style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}><strong>Marble & Quartz:</strong> Premium tabletops</li>
                                <li style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}><strong>Fluted Glass:</strong> Modern crockery units</li>
                                <li style={{ padding: '1rem', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px' }}><strong>Upholstered Chairs:</strong> Maximum comfort</li>
                            </ul>
                        </section>
                    </div>

                    {/* Why Professional Design */}
                    <section id="professional" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Professional Dining Room Design Matters
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            Many homeowners invest heavily in living rooms but overlook dining spaces. The result? Poor lighting, cluttered layouts, and uncomfortable seating.
                        </p>
                        <ul style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '1rem', border: '2px solid #0ea5e9', borderRadius: '8px', textAlign: 'center', color: '#0284c7', fontWeight: '600' }}>Optimized Space</li>
                            <li style={{ padding: '1rem', border: '2px solid #0ea5e9', borderRadius: '8px', textAlign: 'center', color: '#0284c7', fontWeight: '600' }}>Long-lasting Materials</li>
                            <li style={{ padding: '1rem', border: '2px solid #0ea5e9', borderRadius: '8px', textAlign: 'center', color: '#0284c7', fontWeight: '600' }}>Seamless Integration</li>
                            <li style={{ padding: '1rem', border: '2px solid #0ea5e9', borderRadius: '8px', textAlign: 'center', color: '#0284c7', fontWeight: '600' }}>Perfect Lighting</li>
                        </ul>
                    </section>

                    {/* FAQs */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is the ideal size for a dining table?</h3>
                                <p style={{ color: '#64748b' }}>A 4-seater requires approx 36x48 inches, while a 6-seater needs around 36x60 inches.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>How high should dining lights be placed?</h3>
                                <p style={{ color: '#64748b' }}>Typically 30–36 inches above the tabletop.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Can small homes have luxury dining spaces?</h3>
                                <p style={{ color: '#64748b' }}>Yes. Smart layout, mirrors, and statement lighting create a luxurious feel even in compact areas.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final Thoughts */}
                    <section style={{ marginBottom: '6rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Transform Your Dining Experience
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Your dining room is more than furniture — it’s an experience. Design it thoughtfully. Design it beautifully. And most importantly, design it to reflect your lifestyle.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '800px', margin: '0 auto' }}>
                            If you’re planning to upgrade your dining space, partner with <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> for customized solutions tailored for contemporary homes.
                        </p>
                    </section>
                </div>

                {/* Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Host inside a Style?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Let’s design a dining space that sparks joy and conversation.
                        </p>
                        <a href="/contact" className="cta-button">
                            Get a Free Design Quote
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiningRoomDesign;
