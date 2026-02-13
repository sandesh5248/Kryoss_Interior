import React from 'react';
import './BlogArticle.css';

const DCDesignStars = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
                        alt="Design Stars"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                People
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Design Stars: The Creative Minds Behind <span style={{ color: '#0ea5e9' }}>Inspiring Interiors</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Vision. Craft. Innovation. Meet the visionaries who shape modern living through thoughtful design.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Designers Matter in Interior Design
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Every beautifully designed space begins with a creative mind that understands people, purpose, and detail. Design Stars is a celebration of designers who turn ideas into meaningful interiors — spaces that are not only visually stunning but also deeply functional.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Interior design is more than selecting colours and furniture. It is about:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>Understanding lifestyle needs</li>
                            <li>Translating ideas into functional layouts</li>
                            <li>Balancing aesthetics with usability</li>
                            <li>Creating spaces that feel personal</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, design is driven by people — their routines, preferences, and aspirations.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            What Makes a Design Star
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>1. A Clear Design Vision</h3>
                                <p style={{ color: '#475569' }}>Every design star has a distinct perspective. Whether minimal, contemporary, or luxury-driven, their work reflects clarity, consistency, and purpose.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>2. Attention to Detail</h3>
                                <p style={{ color: '#475569' }}>From material selection to lighting placement, great design lies in the details. Thoughtful finishes and precise execution elevate spaces from ordinary to exceptional.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>3. Smart Problem Solving</h3>
                                <p style={{ color: '#475569' }}>Design is about solving real challenges — limited space, storage needs, or multifunctional requirements. Design stars create solutions that feel effortless and intuitive.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>4. Adaptability & Innovation</h3>
                                <p style={{ color: '#475569' }}>The best designers evolve with changing lifestyles, technology, and sustainability needs while maintaining timeless appeal.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Exploring Signature Design Styles
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Design stars bring diverse styles to life, including:
                        </p>
                        <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                            <li style={{ marginBottom: '0.5rem' }}>Minimalist modern interiors</li>
                            <li style={{ marginBottom: '0.5rem' }}>Contemporary luxury spaces</li>
                            <li style={{ marginBottom: '0.5rem' }}>Warm, functional family homes</li>
                            <li style={{ marginBottom: '0.5rem' }}>Smart and space-efficient urban designs</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Each style reflects not just visual beauty but thoughtful planning.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Learning from the Best
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Design Stars is not just about showcasing work — it’s about learning:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>How designers approach space planning</li>
                            <li>How materials and textures are chosen</li>
                            <li>How functionality is blended with beauty</li>
                            <li>How homes are designed for real life</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            These insights help homeowners make informed design decisions.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Design Stories That Inspire
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Behind every project is a story — a client’s vision, a design challenge, or a creative breakthrough. Design Stars shares these journeys to inspire homeowners and design enthusiasts alike.
                        </p>
                    </section>


                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            Great interiors are shaped by thoughtful minds and skilled hands. Design Stars celebrates creativity, craftsmanship, and the passion that goes into building beautiful, livable spaces.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Because behind every inspiring home, there’s a designer who made it possible.
                        </p>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What defines a great interior designer?</h3>
                                <p style={{ color: '#64748b' }}>A strong vision, problem-solving ability, attention to detail, and understanding of client needs.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Can design styles be mixed?</h3>
                                <p style={{ color: '#64748b' }}>Yes, when done thoughtfully, blending styles can create unique and personalized interiors.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Why should homeowners learn about design processes?</h3>
                                <p style={{ color: '#64748b' }}>Understanding design helps in making better decisions and achieving more satisfying results.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Find Your Designer</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Ready to work with the best? Contact us today.
                        </p>
                        <a href="/contact-us" className="cta-button">
                            Get in Touch
                        </a>
                    </div>
                    <div style={{ position: 'absolute', right: '-100px', top: '-100px', width: '300px', height: '300px', background: 'rgba(14, 165, 233, 0.1)', borderRadius: '50%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default DCDesignStars;
