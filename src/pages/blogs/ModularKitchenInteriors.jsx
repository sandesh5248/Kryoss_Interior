import React from 'react';
import './BlogArticle.css';
import uShapedImg from '../../assets/images/blog/u-shaped-kitchen.jpg';
import parallelImg from '../../assets/images/blog/parallel-kitchen.jpg';
import islandImg from '../../assets/images/blog/island-kitchen.jpg';
import lShapedImg from '../../assets/images/blog/l-shaped-kitchen.jpg';

const ModularKitchenInteriors = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Enhanced Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&q=80"
                        alt="Modern Modular Kitchen Design"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Interior Design Guide
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Modular Kitchen Ideas That Redefine <span style={{ color: '#0ea5e9' }}>Modern Living</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Discover smart layouts, sleek finishes, and space-saving innovations crafted for contemporary Indian homes.
                        </p>
                    </div>
                </div>

                {/* Table of Contents Section */}
                <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>Table of Contents</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        <a href="#layouts" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Trending Kitchen Layouts</a>
                        <a href="#trends" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Design Trends 2026</a>
                        <a href="#materials" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Quality Materials Guide</a>
                        <a href="#process" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Our Design Process</a>
                    </div>
                </div>

                {/* Introduction */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569' }}>
                        A modular kitchen is no longer a luxury — it's a necessity for organized, functional, and aesthetic living. Today's homeowners want intelligent storage, seamless finishes, and layouts that adapt to fast-paced lifestyles. This guide brings you the most practical and trend-forward modular kitchen ideas to transform your space.
                    </p>
                    <p style={{ fontSize: '1.125rem', marginBottom: '3rem', color: '#475569' }}>
                        At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, every kitchen is designed with a balance of functionality, personalization, and long-term durability — built around how you actually use your space.
                    </p>

                    {/* Why Modular Kitchens Section */}
                    <section id="layouts" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Modular Kitchens Are the Future of Indian Homes
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Modern kitchens are designed with precision engineering, factory-finished components, and customizable modules that fit perfectly into your layout.
                        </p>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                            Key Advantages:
                        </h3>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>Optimized storage with minimal clutter</li>
                            <li style={{ marginBottom: '0.75rem' }}>Faster installation timelines</li>
                            <li style={{ marginBottom: '0.75rem' }}>Custom finishes and color palettes</li>
                            <li style={{ marginBottom: '0.75rem' }}>Easy maintenance and replacement</li>
                            <li style={{ marginBottom: '0.75rem' }}>Budget flexibility</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            A modular kitchen adapts to apartments, villas, compact homes, and luxury residences — making it a future-ready investment.
                        </p>
                    </section>

                    {/* Trending Layouts Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Trending Modular Kitchen Layout Ideas
                        </h2>

                        {/* L-Shaped Kitchen */}
                        <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    1. L-Shaped Modular Kitchen
                                </h3>
                                <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Perfect for compact and mid-sized homes</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Efficient corner utilization</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Ideal for open-plan living spaces</li>
                                </ul>
                                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#334155' }}>
                                    Best suited for: 1BHK & 2BHK apartments
                                </p>
                            </div>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={lShapedImg}
                                    alt="L-Shaped Modular Kitchen Layout"
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* U-Shaped Kitchen */}
                        <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={uShapedImg}
                                    alt="U-Shaped Modular Kitchen Layout"
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    2. U-Shaped Modular Kitchen
                                </h3>
                                <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Maximum storage and counter space</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Smooth workflow triangle</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Ideal for large families</li>
                                </ul>
                                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#334155' }}>
                                    Best suited for: Spacious homes & villas
                                </p>
                            </div>
                        </div>

                        {/* Parallel Kitchen */}
                        <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    3. Parallel (Galley) Kitchen
                                </h3>
                                <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Efficient for narrow spaces</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Separate cooking & cleaning zones</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Highly functional design</li>
                                </ul>
                                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#334155' }}>
                                    Best suited for: Urban apartments
                                </p>
                            </div>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={parallelImg}
                                    alt="Parallel Galley Kitchen Layout"
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>

                        {/* Island Kitchen */}
                        <div style={{ marginBottom: '3rem', padding: '2rem', backgroundColor: '#f8fafc', borderRadius: '12px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '8px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src={islandImg}
                                    alt="Luxury Island Kitchen Design"
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: '#0ea5e9' }}>
                                    4. Island Kitchen Design
                                </h3>
                                <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Adds luxury and flexibility</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Extra prep & social space</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Enhances open kitchen aesthetics</li>
                                </ul>
                                <p style={{ fontSize: '1rem', fontWeight: '600', color: '#334155' }}>
                                    Best suited for: Open-concept homes
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Kitchen Showcase Gallery */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
                            Inspiring Kitchen Designs
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
                                    alt="Luxury High-End Modular Kitchen"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80"
                                    alt="Modern Minimalist Dark Kitchen"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80"
                                    alt="Bright Contemporary Modular Kitchen"
                                    style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Design Trends Section */}
                    <section id="trends" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Latest Modular Kitchen Design Trends (2026 Edition)
                        </h2>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div style={{ padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                                    1. Matte Finish Cabinets
                                </h3>
                                <ul style={{ fontSize: '1rem', color: '#475569', paddingLeft: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Anti-fingerprint surfaces</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Elegant and subtle aesthetics</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Perfect for minimal interiors</li>
                                </ul>
                            </div>

                            <div style={{ padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                                        <path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                                    2. Handleless & Push-to-Open Systems
                                </h3>
                                <ul style={{ fontSize: '1rem', color: '#475569', paddingLeft: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Seamless look</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Modern appeal</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Easy maintenance</li>
                                </ul>
                            </div>

                            <div style={{ padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #0ea5e9, #0284c7)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                                    3. Smart Storage Solutions
                                </h3>
                                <ul style={{ fontSize: '1rem', color: '#475569', paddingLeft: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Tandem drawers</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Magic corner units</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Tall pull-out pantries</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Built-in organizers</li>
                                </ul>
                            </div>

                            <div style={{ padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #10b981, #059669)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                                    4. Sustainable Materials
                                </h3>
                                <ul style={{ fontSize: '1rem', color: '#475569', paddingLeft: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Eco-friendly boards</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Low-VOC finishes</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Energy-efficient lighting</li>
                                </ul>
                            </div>

                            <div style={{ padding: '1.5rem', border: '2px solid #e2e8f0', borderRadius: '12px', transition: 'all 0.3s ease' }}>
                                <div style={{ width: '60px', height: '60px', background: 'linear-gradient(135deg, #f59e0b, #d97706)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                                        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
                                    </svg>
                                </div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: '#334155' }}>
                                    5. Two-Tone Color Combinations
                                </h3>
                                <ul style={{ fontSize: '1rem', color: '#475569', paddingLeft: '1.5rem' }}>
                                    <li style={{ marginBottom: '0.5rem' }}>Neutral base with bold accents</li>
                                    <li style={{ marginBottom: '0.5rem' }}>Wood + Matte blends</li>
                                    <li style={{ marginBottom: '0.5rem' }}>White + Grey minimal themes</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* Materials Section */}
                    <section id="materials" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Materials That Define Quality
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569' }}>
                            Choosing the right material ensures durability and performance.
                        </p>

                        {/* Materials Image */}
                        <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', marginBottom: '2rem' }}>
                            <img
                                src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&h=400&fit=crop"
                                alt="Premium Kitchen Materials and Finishes"
                                style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                            />
                        </div>

                        <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '12px', marginBottom: '2rem' }}>
                            <ul style={{ fontSize: '1.125rem', color: '#475569', listStyle: 'none', padding: '0' }}>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <strong style={{ color: '#334155' }}>Marine Plywood:</strong> Moisture-resistant and long-lasting
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <strong style={{ color: '#334155' }}>HDHMR Boards:</strong> Budget-friendly and sturdy
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <strong style={{ color: '#334155' }}>Acrylic Finish:</strong> High-gloss premium look
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <strong style={{ color: '#334155' }}>PU Finish:</strong> Smooth, seamless coating
                                </li>
                                <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                                    <strong style={{ color: '#334155' }}>Laminate:</strong> Affordable and versatile
                                </li>
                            </ul>
                        </div>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, material selection is guided by climate conditions, usage pattern, and budget planning — ensuring performance without compromise.
                        </p>
                    </section>

                    {/* New Section: Our Design Process */}
                    <section id="process" style={{ marginBottom: '5rem', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: '#1e293b', textAlign: 'center' }}>
                            Our 4-Step Design <span style={{ color: '#0ea5e9' }}>Evolution</span>
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                            <div className="process-step">
                                <div className="step-number">01</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Consultation</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>We understand your space, lifestyle, and aesthetic preferences.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">02</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Visualization</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Detailed 2D/3D layouts showing exactly how your kitchen will look.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">03</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Production</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Factory-finish precision manufacturing using high-grade materials.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number">04</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem' }}>Execution</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Hassle-free professional installation with quality assurance.</p>
                            </div>
                        </div>
                    </section>

                    {/* Smart Add-Ons Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Smart Modular Kitchen Add-Ons
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Modern kitchens integrate technology seamlessly:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>Built-in microwave & oven units</li>
                            <li style={{ marginBottom: '0.75rem' }}>Under-cabinet LED lighting</li>
                            <li style={{ marginBottom: '0.75rem' }}>Soft-close channels</li>
                            <li style={{ marginBottom: '0.75rem' }}>Sensor-based chimneys</li>
                            <li style={{ marginBottom: '0.75rem' }}>In-built waste segregation systems</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Functionality meets innovation — without overcomplicating the design.
                        </p>
                    </section>

                    {/* Budget Planning Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Budget Planning for Modular Kitchens
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A modular kitchen budget depends on:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>Layout size</li>
                            <li style={{ marginBottom: '0.75rem' }}>Material choice</li>
                            <li style={{ marginBottom: '0.75rem' }}>Finish type</li>
                            <li style={{ marginBottom: '0.75rem' }}>Hardware quality</li>
                            <li style={{ marginBottom: '0.75rem' }}>Customization level</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Smart planning avoids overspending while maintaining quality standards. Professional consultation ensures transparency in costing and execution.
                        </p>
                    </section>

                    {/* Professional Design Section */}
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            How Professional Interior Designers Make the Difference
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A well-designed modular kitchen isn't just about cabinets. It's about:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '2rem', marginBottom: '2rem' }}>
                            <li style={{ marginBottom: '0.75rem' }}>Workflow optimization</li>
                            <li style={{ marginBottom: '0.75rem' }}>Ventilation planning</li>
                            <li style={{ marginBottom: '0.75rem' }}>Lighting strategy</li>
                            <li style={{ marginBottom: '0.75rem' }}>Ergonomic height adjustments</li>
                            <li style={{ marginBottom: '0.75rem' }}>Appliance integration</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            With <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, the process involves consultation, 3D visualization, factory production, quality checks, and professional installation — ensuring clarity from concept to completion.
                        </p>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Design Your Dream Kitchen?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Join 500+ happy families who transformed their cooking space with Kryoss Interior.
                        </p>
                        <a href="/contact" className="cta-button">
                            Get a Free Design Quote
                        </a>
                    </div>
                    {/* Decorative background element */}
                    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ModularKitchenInteriors;
