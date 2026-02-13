import React from 'react';
import './BlogArticle.css';

const LivingRoomDesign = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
                        alt="Modern Living Room Design"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Living Room Guide
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Living Room Design Ideas That Redefine <span style={{ color: '#0ea5e9' }}>Modern Living</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Smart. Stylish. Seamlessly Yours. Discover design ideas that balance personality, comfort, and functionality.
                        </p>
                    </div>
                </div>

                {/* Table of Contents */}
                <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>Table of Contents</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        <a href="#minimalist" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Modern Minimalist</a>
                        <a href="#luxury" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Luxury Contemporary</a>
                        <a href="#storage" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Smart Storage</a>
                        <a href="#compact" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Compact Living</a>
                        <a href="#feature-wall" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Statement Feature Wall</a>
                        <a href="#open-concept" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• Open Concept Layout</a>
                        <a href="#trends" style={{ color: '#475569', textDecoration: 'none', transition: 'color 0.3s' }}>• 2026 Color Trends</a>
                    </div>
                </div>

                {/* Introduction */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Your Living Room Deserves Strategic Design
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            The living room is the visual anchor of your home. It sets the tone for your interiors and influences how every other space feels. Today’s homeowners are moving beyond basic décor — they want smart storage solutions, multi-functional layouts, minimal yet luxurious finishes, and personalized design concepts.
                        </p>
                        <div style={{ backgroundColor: '#f0f9ff', padding: '2rem', borderRadius: '12px', borderLeft: '4px solid #0ea5e9' }}>
                            <p style={{ fontSize: '1.125rem', color: '#334155' }}>
                                At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we believe a well-designed living room blends aesthetics with purpose. Every element should serve a role — visually and functionally.
                            </p>
                        </div>
                    </section>

                    {/* 1. Modern Minimalist */}
                    <section id="minimalist" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    1. Modern Minimalist Living Room Design
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Clean lines. Neutral palettes. Zero clutter. Minimalism remains one of the most searched living room design trends. But modern minimalism is not about empty spaces — it’s about intentional styling.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Soft beige, greys, and earthy tones
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Concealed storage units
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Wall-mounted TV panels
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Layered lighting instead of bulky fixtures
                                    </li>
                                </ul>
                                <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#64748b' }}>
                                    This design works exceptionally well for apartments and compact urban homes where space optimization is key.
                                </p>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80"
                                    alt="Modern Minimalist Living Room"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 2. Luxury Contemporary */}
                    <section id="luxury" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', order: 2 }}>
                                <img
                                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                                    alt="Luxury Contemporary Living Room"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                            <div style={{ order: 1 }}>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    2. Luxury Contemporary Living Room
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    A luxury living room is about detail, not excess. Luxury today is subtle and curated — not loud. The right balance of textures elevates the entire space.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Statement wall panels (marble, fluted, textured)
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Metallic accents (gold, brass, matte black)
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Premium upholstery fabrics
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Custom TV console with ambient lighting
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    {/* 3. Smart Storage */}
                    <section id="storage" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            3. Smart Storage Living Room Design
                        </h2>
                        <div style={{ backgroundColor: '#f8fafc', padding: '2rem', borderRadius: '16px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                            <div>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Urban homes demand intelligent storage. At Kryoss Interior, storage is never an afterthought. It’s built into the design blueprint from day one.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Floating shelves
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Built-in wall cabinets
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Hidden drawers in seating
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Modular TV units
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
                                    alt="Smart Storage Living Room"
                                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 4. Compact Design */}
                    <section id="compact" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
                                    alt="Compact Living Room"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    4. Compact Living Room Design for Small Homes
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Small space? Big impact. Smart layout planning is more powerful than square footage.
                                </p>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                                    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Light color palettes</div>
                                    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Mirrors for depth</div>
                                    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Wall-mounted units</div>
                                    <div style={{ padding: '1rem', backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>Foldable/Modular furniture</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* 5. Feature Wall */}
                    <section id="feature-wall" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            5. Living Room with Statement Feature Wall
                        </h2>
                        <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '350px', marginBottom: '2rem' }}>
                            <img
                                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                                alt="Feature Wall Design"
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '2rem', background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', color: 'white' }}>
                                <p style={{ fontSize: '1.25rem', maxWidth: '800px' }}>
                                    A feature wall transforms an ordinary living room into a design highlight, tying together the entire room theme.
                                </p>
                            </div>
                        </div>
                        <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', listStyle: 'none', padding: 0 }}>
                            <li style={{ padding: '0.5rem 1rem', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '50px', fontWeight: '600' }}>Fluted wooden panels</li>
                            <li style={{ padding: '0.5rem 1rem', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '50px', fontWeight: '600' }}>Textured wallpapers</li>
                            <li style={{ padding: '0.5rem 1rem', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '50px', fontWeight: '600' }}>Backlit TV panels</li>
                            <li style={{ padding: '0.5rem 1rem', backgroundColor: '#e0f2fe', color: '#0284c7', borderRadius: '50px', fontWeight: '600' }}>3D wall cladding</li>
                        </ul>
                    </section>

                    {/* 6. Open Concept */}
                    <section id="open-concept" style={{ marginBottom: '5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                            <div>
                                <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                                    6. Open Concept Living Room Layout
                                </h2>
                                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                                    Modern homes embrace openness. Open layouts combine living, dining, and sometimes kitchen spaces — without losing individuality. The goal is seamless flow without chaos.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0 }}>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Use rugs to define zones
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Layered ceiling designs for visual separation
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Coordinated color palettes
                                    </li>
                                    <li style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                        <span style={{ color: '#0ea5e9' }}>•</span> Partition elements like glass or wooden slats
                                    </li>
                                </ul>
                            </div>
                            <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
                                <img
                                    src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                                    alt="Open Concept Living Room"
                                    style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    </section>

                    {/* 7. Color Trends */}
                    <section id="trends" style={{ marginBottom: '5rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            7. Colour Trends for Living Rooms in 2026
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                            The trend is moving toward warmth and comfort. These tones create inviting spaces while maintaining sophistication.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#78350f', color: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Earthy Browns</h3>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#3f6212', color: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Olive Green</h3>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#c2410c', color: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Terracotta</h3>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#d6d3d1', color: '#1e293b', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Warm Beige</h3>
                            </div>
                            <div style={{ padding: '1.5rem', borderRadius: '12px', backgroundColor: '#60a5fa', color: 'white', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>Muted Blues</h3>
                            </div>
                        </div>
                    </section>

                    {/* How We Design */}
                    <section id="process" style={{ marginBottom: '5rem', padding: '4rem 0', borderTop: '1px solid #e2e8f0', borderBottom: '1px solid #e2e8f0' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: '#1e293b', textAlign: 'center' }}>
                            How We Design Your Living Room
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0ea5e9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>Consultation & Space Assessment</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0ea5e9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>Concept Development & 3D Visualization</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0ea5e9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>Material & Finish Selection</h3>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#0ea5e9', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155' }}>Execution with Quality Checks</h3>
                            </div>
                        </div>
                        <p style={{ textAlign: 'center', marginTop: '3rem', color: '#64748b' }}>
                            With <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, you get a structured workflow, transparent communication, and precision execution.
                        </p>
                    </section>

                    {/* Budget Friendly Section */}
                    <section id="budget" style={{ marginBottom: '5rem', backgroundColor: '#f0fdf4', padding: '3rem', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#15803d' }}>
                            Budget-Friendly Yet Premium Living Room Interiors
                        </h2>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            Luxury does not always mean high cost. Strategic material selection, modular execution, and optimized layouts help maintain budget control without compromising design value.
                        </p>
                        <p style={{ fontSize: '1.125rem', fontWeight: '600', color: '#166534' }}>
                            Our goal is to create high-impact interiors that feel custom-built — because they are.
                        </p>
                    </section>

                    {/* FAQ */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is the ideal living room size for modern design?</h3>
                                <p style={{ color: '#64748b' }}>There is no fixed size — smart layout planning can transform even compact spaces into functional and stylish living areas.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>How long does a living room interior project take?</h3>
                                <p style={{ color: '#64748b' }}>Depending on customization, projects typically range from 4–8 weeks.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: '#fff', borderRadius: '12px', border: '1px solid #e2e8f0' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is the cost of living room interior design?</h3>
                                <p style={{ color: '#64748b' }}>Costs vary based on materials, finishes, and design complexity. A customized consultation provides accurate estimates.</p>
                            </div>
                        </div>
                    </section>

                    {/* Final Thoughts */}
                    <section style={{ marginBottom: '6rem', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                            A living room is more than furniture placement — it’s design strategy, smart storage, lighting science, and personalized aesthetics combined.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', maxWidth: '800px', margin: '0 auto' }}>
                            If you’re ready to elevate your home with modern living room design ideas that balance style and practicality, <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> is ready to transform your vision into reality.
                        </p>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Ready to Redefine Your Living Space?</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Book your consultation today and redefine the way you live.
                        </p>
                        <a href="/contact" className="cta-button">
                            Book Your Consultation
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LivingRoomDesign;
