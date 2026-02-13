import React from 'react';
import './BlogArticle.css';

const DCHomeTours = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
                        alt="Home Tours"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Home Tours
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Home Tours: Step Inside Spaces Designed for <span style={{ color: '#0ea5e9' }}>Real Living</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Real Homes. Real Stories. Real Inspiration. Take a peek inside real homes designed by us.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Home Tours Matter
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Every home has a story to tell. Home Tours takes you inside thoughtfully designed spaces that balance beauty, comfort, and everyday functionality. These are not just picture-perfect interiors — they are real homes created for real lifestyles.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Seeing a space in its complete form helps you understand design better than isolated images. Home tours allow you to:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Visualize layouts and spatial flow</li>
                            <li style={{ marginBottom: '0.5rem' }}>Understand how materials work together</li>
                            <li style={{ marginBottom: '0.5rem' }}>See storage and lighting in real settings</li>
                            <li style={{ marginBottom: '0.5rem' }}>Get ideas that suit real homes and budgets</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, every home tour reflects thoughtful planning and attention to detail — designed to support daily living.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            What You’ll Discover in Our Home Tours
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>1. Complete Home Experiences</h3>
                                <p style={{ color: '#475569' }}>From living rooms and kitchens to bedrooms and study areas, each tour showcases the entire home as a cohesive design story.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>2. Smart Space Planning</h3>
                                <p style={{ color: '#475569' }}>Learn how compact apartments, villas, and family homes are designed with efficient layouts and intelligent storage solutions.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>3. Material & Finish Combinations</h3>
                                <p style={{ color: '#475569' }}>Explore how colours, textures, lighting, and finishes are layered to create warmth and balance.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>4. Personalized Design Choices</h3>
                                <p style={{ color: '#475569' }}>Each home reflects the lifestyle, preferences, and personality of its residents — making every tour unique.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Design Styles You’ll See
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Our home tours feature a variety of interior styles, including:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Modern minimalist homes</li>
                            <li style={{ marginBottom: '0.5rem' }}>Contemporary family spaces</li>
                            <li style={{ marginBottom: '0.5rem' }}>Warm, neutral interiors</li>
                            <li style={{ marginBottom: '0.5rem' }}>Functional urban apartments</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            These styles show how design adapts to different needs and spaces.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Inspiration You Can Apply
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Home tours are not about copying designs — they’re about understanding what works. The ideas you see can be adapted to your space, budget, and lifestyle.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Small details like lighting placement, storage integration, or colour balance often make the biggest difference.
                        </p>
                    </section>


                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A well-designed home is best appreciated when experienced as a whole. Home Tours offer a closer look at real interiors that feel comfortable, practical, and personal.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Let these spaces inspire you to imagine what’s possible for your own home.
                        </p>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Are the homes shown real projects?</h3>
                                <p style={{ color: '#64748b' }}>Yes, each tour highlights real homes designed for everyday living.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Can ideas from home tours be customized?</h3>
                                <p style={{ color: '#64748b' }}>Absolutely. Every design element can be adapted to suit individual spaces and needs.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What should I focus on while viewing a home tour?</h3>
                                <p style={{ color: '#64748b' }}>Pay attention to layout planning, storage solutions, lighting, and how the space flows.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Start Your Home Journey</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Ready to transform your home? Get a consultation today.
                        </p>
                        <a href="/contact-us" className="cta-button">
                            Get Started
                        </a>
                    </div>
                    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default DCHomeTours;
