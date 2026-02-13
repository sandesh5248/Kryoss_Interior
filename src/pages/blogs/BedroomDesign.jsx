import React from 'react';
import './BlogArticle.css';

const BedroomDesign = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=1600&q=80"
                        alt="Restful Bedroom Design"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Bedroom Design Guide
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Bedroom Design Ideas That Redefine <span style={{ color: '#0ea5e9' }}>Comfort & Luxury</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Smart. Stylish. Soulful. Explore inspiring bedroom interiors that transform everyday living into a luxurious experience.
                        </p>
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>Table of Contents</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <a href="#minimalist" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Minimalist Modern</a>
                        <a href="#luxury" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Luxury Master Suite</a>
                        <a href="#small" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Small Bedroom Ideas</a>
                        <a href="#smart" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Smart Features</a>
                        <a href="#kids" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Kids & Teens</a>
                        <a href="#colors" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Color Trends</a>
                        <a href="#faq" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• FAQs</a>
                    </div>
                </div>

                {/* Introduction */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Bedroom Design Matters More Than Ever
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Your bedroom is not just a space to sleep — it’s your personal sanctuary. From smart storage solutions to mood-enhancing lighting, modern bedroom interiors blend aesthetics with functionality like never before.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569' }}>
                            Today’s homeowners want more than just beautiful walls and furniture. They want clutter-free layouts, smart storage solutions, relaxing colour palettes, and multi-functional furniture.
                        </p>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9' }}>
                            <p style={{ fontSize: '1.125rem', color: '#334155' }}>
                                At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we believe a bedroom should reflect your personality while maximizing space efficiency — whether it’s a compact apartment bedroom or a spacious master suite.
                            </p>
                        </div>
                    </section>

                    {/* 1. Minimalist Modern */}
                    <section id="minimalist" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    1. Minimalist Modern Bedroom Design
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Clean lines, neutral tones, and smart storage define minimalist bedrooms. These designs create a calm and clutter-free environment — perfect for urban homes.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Neutral shades like beige, grey, and ivory
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Platform beds with hidden storage
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Soft ambient lighting
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Sleek wardrobes with handle-less shutters
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
                                    alt="Minimalist Bedroom"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 2. Luxury Master Bedroom */}
                    <section id="luxury" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', order: 2 }}> {/* Image right on desktop, assume CSS order handling implies image first usually, but swapping here for variety */}
                                <img
                                    src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&q=80"
                                    alt="Luxury Master Bedroom"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ order: 1 }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    2. Luxury Master Bedroom Design
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    A luxury bedroom isn’t about excess — it’s about curated elegance. Premium finishes and layered lighting elevate the overall ambience.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Upholstered or panelled headboards
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Cove lighting with false ceilings
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Accent walls with textures or wallpapers
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Statement pendant or chandelier lighting
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. Small Bedroom Design */}
                    <section id="small" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            3. Small Bedroom Design Ideas
                        </h2>
                        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                                Limited space? Smart design makes all the difference. Designing small bedrooms requires intelligent planning — something Kryoss Interior specializes in through functional layouts (like wall-mounted study tables and sliding wardrobes).
                            </p>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Wall-Mounted Units</h3>
                                    <p style={{ color: '#64748b' }}>Compact study tables and shelves maximize floor space.</p>
                                </div>
                                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Mirrors</h3>
                                    <p style={{ color: '#64748b' }}>Create visual depth and make the room feel larger.</p>
                                </div>
                                <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Vertical Storage</h3>
                                    <p style={{ color: '#64748b' }}>Floor-to-ceiling wardrobes utilize every inch of height.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 4. Contemporary Smart Bedroom */}
                    <section id="smart" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    4. Contemporary Bedroom With Smart Features
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Technology is shaping modern interiors. A smart bedroom enhances convenience while maintaining aesthetic appeal.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0ea5e9' }}>
                                        <strong>Automated lighting systems</strong> for mood control
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0ea5e9' }}>
                                        <strong>Motion sensor night lights</strong> for safety
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0ea5e9' }}>
                                        <strong>Built-in charging stations</strong> in nightstands
                                    </li>
                                    <li style={{ marginBottom: '1rem', paddingLeft: '1.5rem', borderLeft: '3px solid #0ea5e9' }}>
                                        <strong>Integrated wardrobe lighting</strong> for visibility
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
                                    alt="Smart Contemporary Bedroom"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 5. Kids & Teen Bedroom */}
                    <section id="kids" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            5. Kids & Teen Bedroom Design
                        </h2>
                        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '400px', marginBottom: '2rem' }}>
                            <img
                                src="https://images.unsplash.com/photo-1526657782861-c948710194e7?w=1200&q=80"
                                alt="Kids Bedroom Design"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                                <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
                                    Children’s bedrooms should grow with them, encouraging creativity while maintaining organization.
                                </p>
                            </div>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Multi-functional furniture</div>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Dedicated study corners</div>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Vibrant yet balanced colors</div>
                            <div style={{ textAlign: 'center', padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Smart toy storage</div>
                        </div>
                    </section>

                    {/* Colour Trends */}
                    <section id="colors" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Trending Bedroom Colour Combinations
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #fdfbf7 0%, #e2e8f0 100%)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '40px', height: '40px', background: '#d1d5db', borderRadius: '50%', marginBottom: '1rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Beige & White</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>For timeless elegance and peace.</p>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '40px', height: '40px', background: '#93c5fd', borderRadius: '50%', marginBottom: '1rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Grey & Blue</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>For calm sophistication.</p>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '40px', height: '40px', background: '#86efac', borderRadius: '50%', marginBottom: '1rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Olive & Wood</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>For warmth and nature vibes.</p>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', background: 'linear-gradient(135deg, #fff1f2 0%, #fce7f3 100%)', boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
                                <div style={{ width: '40px', height: '40px', background: '#f9a8d4', borderRadius: '50%', marginBottom: '1rem' }}></div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Pastel Pink & Gold</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>For modern luxury accents.</p>
                            </div>
                        </div>
                    </section>

                    {/* How We Design */}
                    <section id="process" style={{ marginBottom: '5rem', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: '#1e293b', textAlign: 'center' }}>
                            How We Design Bedrooms at Kryoss
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                            <div className="process-step">
                                <div className="step-number" style={{ color: '#0ea5e9' }}>01</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Consultation</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Understanding lifestyle, space, and budget requirements.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number" style={{ color: '#0ea5e9' }}>02</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Concept & 3D</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Photorealistic renders to help you visualize your dream space.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number" style={{ color: '#0ea5e9' }}>03</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Material Selection</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Premium materials customized to your preferences.</p>
                            </div>
                            <div className="process-step">
                                <div className="step-number" style={{ color: '#0ea5e9' }}>04</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '0.5rem' }}>Execution</h3>
                                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Professional installation with strict quality standards.</p>
                            </div>
                        </div>
                    </section>

                    {/* FAQ */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is the best colour for a bedroom?</h3>
                                <p style={{ color: '#64748b' }}>Soft neutrals, pastel tones, and earthy shades are ideal for creating a relaxing atmosphere.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>How can I make my small bedroom look bigger?</h3>
                                <p style={{ color: '#64748b' }}>Use light colours, mirrors, sliding wardrobes, and multi-functional furniture to enhance the sense of space.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is trending in bedroom design in 2026?</h3>
                                <p style={{ color: '#64748b' }}>Smart lighting, textured walls, sustainable materials, and minimalist aesthetics are leading trends.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>How long does it take to design a bedroom interior?</h3>
                                <p style={{ color: '#64748b' }}>Depending on customization and space, it usually takes 4–8 weeks for complete execution.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final Thoughts */}
                    <section style={{ marginBottom: '6rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            Your bedroom should energize you in the morning and calm you at night. The perfect blend of design, functionality, and personalization creates a space that truly feels like home.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '800px', margin: '0 auto' }}>
                            Whether you prefer minimalist elegance or luxury sophistication, <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> transforms ideas into thoughtfully designed living spaces.
                        </p>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Upgrade Your Bedroom?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Connect with us to start your transformation journey into a stylish sanctuary today.
                        </p>
                        <a href="/contact" className="cta-button">
                            Start Your Transformation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BedroomDesign;
