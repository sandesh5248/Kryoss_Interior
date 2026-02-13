import React from 'react';
import './BlogArticle.css';

const StudyRoomDesign = () => {
    return (
        <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
            <div className="container">
                {/* Hero Section */}
                <div className="hero-wrapper">
                    <img
                        src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=1600&q=80"
                        alt="Study Room Design"
                        className="hero-image"
                    />
                    <div className="hero-overlay">
                        <div style={{ marginBottom: '1rem' }}>
                            <span style={{ backgroundColor: '#0ea5e9', color: 'white', padding: '0.4rem 1rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>
                                Productivity
                            </span>
                        </div>
                        <h1 className="blog-title" style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem', color: '#ffffff', maxWidth: '800px' }}>
                            Study Room Design That Enhances <span style={{ color: '#0ea5e9' }}>Focus & Productivity</span>
                        </h1>
                        <p className="blog-subtitle" style={{ fontSize: '1.25rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6' }}>
                            Calm. Organized. Purposeful. Create a space designed for concentration, creativity, and growth.
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="blog-content" style={{ maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Why Study Room Design Matters
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A study room is more than just a desk and a chair — it’s a space designed for concentration, creativity, and growth. Whether used for work, academics, or personal projects, a well-designed study area helps improve focus and reduce distractions.
                        </p>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            The right study environment can:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4" style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                            <li>Improve concentration and efficiency</li>
                            <li>Reduce visual and mental clutter</li>
                            <li>Support long working or study hours</li>
                            <li>Encourage organized habits</li>
                            <li>Create a dedicated space for learning</li>
                        </ul>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            In today’s world, where work and learning often happen at home, having a defined study space makes a significant difference.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569', marginTop: '1.5rem' }}>
                            At <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, study rooms are designed with a balance of ergonomics, storage efficiency, and aesthetic simplicity.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Key Elements of a Well-Designed Study Room
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>1. Ergonomic Furniture</h3>
                                <p style={{ color: '#475569' }}>Comfort is essential for long hours of work or study. Proper desk height, supportive seating, and adjustable chairs help maintain posture and reduce strain.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>2. Smart Storage Solutions</h3>
                                <p style={{ color: '#475569' }}>An organized study room supports clear thinking. Wall-mounted shelves, drawer units, and cable management systems keep the desk surface clean and clutter-free.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>3. Balanced Lighting</h3>
                                <p style={{ color: '#475569' }}>Lighting plays a crucial role in productivity. Natural light, task lighting, and soft ambient light reduce eye strain and enhance focus.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>4. Calm Colour Palette</h3>
                                <p style={{ color: '#475569' }}>Neutral tones like soft greys or whites create a peaceful atmosphere that promotes concentration without distractions.</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>5. Functional Layout Planning</h3>
                                <p style={{ color: '#475569' }}>The layout should allow easy movement while clearly defining the work zone. Compact rooms benefit from wall-mounted desks.</p>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '16px' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Study Room Design for Different Needs
                        </h2>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>For Students</h3>
                                <ul className="list-disc pl-4 space-y-1" style={{ color: '#475569' }}>
                                    <li>Dedicated study desk</li>
                                    <li>Open shelving for books</li>
                                    <li>Notice boards or pin-up walls</li>
                                </ul>
                            </div>
                            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>For Professionals</h3>
                                <ul className="list-disc pl-4 space-y-1" style={{ color: '#475569' }}>
                                    <li>Minimal desk setup</li>
                                    <li>Concealed storage</li>
                                    <li>Organized cable management</li>
                                </ul>
                            </div>
                            <div style={{ padding: '1.5rem', background: '#fff', border: '1px solid #e2e8f0', borderRadius: '12px' }}>
                                <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#0ea5e9' }}>For Creative Spaces</h3>
                                <ul className="list-disc pl-4 space-y-1" style={{ color: '#475569' }}>
                                    <li>Larger desk surface</li>
                                    <li>Display shelves</li>
                                    <li>Flexible seating arrangements</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Creating a Distraction-Free Environment
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A study room should feel calm and structured. Reducing noise, maintaining proper lighting, and keeping essentials within reach helps build consistency and focus.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Simple design choices often have the greatest impact on productivity.
                        </p>
                    </section>

                    <section style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                            Final Thoughts
                        </h2>
                        <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                            A thoughtfully designed study room enhances both efficiency and comfort. When ergonomics, storage, lighting, and layout work together, the space becomes supportive rather than distracting.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                            Design your study room with intention — and it will support your goals every day.
                        </p>
                    </section>

                    {/* FAQ Section */}
                    <section id="faq" style={{ marginBottom: '4rem' }}>
                        <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
                            Frequently Asked Questions
                        </h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>What is the ideal size for a study room?</h3>
                                <p style={{ color: '#64748b' }}>Even compact spaces can function well with smart layout planning.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Which colour is best for study rooms?</h3>
                                <p style={{ color: '#64748b' }}>Neutral and soft shades promote calmness and focus.</p>
                            </div>
                            <div style={{ padding: '1.5rem', backgroundColor: 'white', borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '0.5rem', color: '#334155' }}>Is natural light important in study rooms?</h3>
                                <p style={{ color: '#64748b' }}>Yes, natural light improves mood and reduces eye strain.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Enhanced Call to Action */}
                <div className="blog-cta">
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>Design Your Workspace</h2>
                        <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                            Boost your productivity with a custom study room.
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

export default StudyRoomDesign;
