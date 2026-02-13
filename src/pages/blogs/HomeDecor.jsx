import React from 'react';
import './BlogArticle.css';

const HomeDecor = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600&q=80"
                        alt="Home Decor"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Decor Tips
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Home Décor Ideas That Add Personality to <span style={{ color: '#0ea5e9' }}>Every Corner</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Details. Texture. Character. Transform your house into a home with the right accents.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Home Décor Is Important
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Décor is what transforms a house into a home. While furniture builds structure, décor adds emotion and personality. The right accents bring warmth, depth, and individuality to any space.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Modern home décor focuses on balance — not overcrowding, but carefully selecting pieces that enhance the overall design.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Thoughtful décor helps:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>Reflect your personal style</li>
                            <li>Add warmth to minimal spaces</li>
                            <li>Create visual layers</li>
                            <li>Complete the overall interior look</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Even simple spaces feel elevated with the right decorative elements.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginTop: '1.5rem' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, décor is treated as the finishing touch that brings the entire design story together.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            5 Key Elements of Home Décor
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>1. Wall Décor & Art</h3>
                                <p style={{ color: '#475569' }}>Walls offer opportunities to express creativity. Popular choices include framed artwork, mirrors to expand visual space, statement wall clocks, and textured panels.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>2. Soft Furnishings</h3>
                                <p style={{ color: '#475569' }}>Cushions, curtains, rugs, and throws soften a space and add comfort. Mixing textures like cotton, linen, velvet, or wool creates visual richness.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>3. Lighting as Décor</h3>
                                <p style={{ color: '#475569' }}>Decorative lighting enhances both function and style. Table lamps, floor lamps, accent lights, and pendant fixtures add warmth and highlight key design elements.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>4. Indoor Plants & Natural Elements</h3>
                                <p style={{ color: '#475569' }}>Greenery instantly refreshes interiors. Indoor plants, wooden accents, and natural materials bring balance and calmness into modern homes.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>5. Statement Pieces</h3>
                                <p style={{ color: '#475569' }}>Sometimes one bold element — a unique chair, a sculptural vase, or a dramatic mirror — can define the entire space.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Home décor is not about filling empty spaces — it’s about choosing elements that reflect who you are. When done thoughtfully, décor transforms interiors from simple to soulful.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Small details make a big difference. And the right décor choices ensure your home feels complete, warm, and uniquely yours.
                        </p>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Refresh Your Home</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Ready to add a personal touch to your space?
                        </p>
                        <a href="/contact-us" className="cta-button">
                            Contact Us
                        </a>
                    </div>
                    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default HomeDecor;
