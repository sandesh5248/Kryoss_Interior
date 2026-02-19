import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../blogs/BlogArticle.css';
import livingRoom from '../../assets/design-gallery/living-room.jpg';

const ideas = [
    { icon: '', title: 'Sectional Sofas', desc: 'L-shaped or U-shaped sectionals anchor the living room and create a cozy, conversation-friendly layout.', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80' },
    { icon: '', title: 'Statement Walls', desc: 'A bold accent wall with wallpaper, textured panels or a gallery arrangement adds personality and depth.', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80' },
    { icon: '', title: 'Layered Lighting', desc: 'Combine floor lamps, table lamps and ceiling fixtures to create a warm, flexible and inviting atmosphere.', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80' },
    { icon: '', title: 'Indoor Plants', desc: 'Strategically placed plants add life, colour and natural air purification to your living space.', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80' },
    { icon: '', title: 'TV Unit Design', desc: 'A custom TV unit with integrated storage, display niches and cable management keeps the room tidy and stylish.', image: 'https://images.unsplash.com/photo-1593696140826-c58b021acf8b?w=600&q=80' },
    { icon: '', title: 'Curated Decor', desc: 'Art pieces, sculptures and carefully chosen accessories tell your story and make the space uniquely yours.', image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&q=80' },
];

const faqs = [
    { q: 'How do I choose the right sofa for my living room?', a: 'Consider the room size, traffic flow and your lifestyle. Sectionals work well for large rooms and families; a classic 3-seater is versatile for smaller spaces. Choose durable, easy-to-clean fabrics for everyday use.' },
    { q: 'What is the ideal living room layout?', a: 'Arrange furniture to create a focal point (TV, fireplace or view), ensure comfortable conversation distances (6-10 ft between seats) and maintain clear pathways of at least 3 ft.' },
    { q: 'How can I make a small living room feel larger?', a: 'Use light colours, mirrors, multi-functional furniture and vertical storage. Keep the floor as clear as possible and choose furniture with legs to create a sense of openness.' },
    { q: 'What flooring works best for a living room?', a: 'Hardwood or engineered wood flooring is timeless and durable. Large-format tiles work well in contemporary homes. Area rugs can define zones and add warmth to any flooring type.' },
];

const LivingRoom = () => {
    const [activeSection, setActiveSection] = useState('intro');
    const [expandedFaq, setExpandedFaq] = useState(null);
    const refs = useRef({});
    const reg = (id) => (el) => { if (el) refs.current[id] = el; };

    useEffect(() => {
        const obs = new IntersectionObserver(
            (entries) => entries.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.dataset.section); }),
            { threshold: 0.2, rootMargin: '-10% 0px -10% 0px' }
        );
        Object.values(refs.current).forEach(el => obs.observe(el));
        return () => obs.disconnect();
    }, []);

    const scrollTo = (id) => {
        const el = refs.current[id] || document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const navSections = ['intro', 'ideas', 'styles', 'faq', 'cta'];
    const toc = [
        { id: 'ideas', label: 'Design Ideas', emoji: '' },
        { id: 'styles', label: 'Living Styles', emoji: '' },
        { id: 'faq', label: 'FAQs', emoji: '' },
    ];

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <img src={livingRoom} alt="Living Room Design" className="blog-hero__image" />
                <div className="blog-hero__overlay">
                    <div className="blog-hero__content">
                        <h1 className="blog-hero__title">The Art of <em>Living Well</em></h1>
                        <p className="blog-hero__subtitle">Create a living room that is beautiful, comfortable and a true reflection of your personality and lifestyle.</p>
                        <button onClick={() => scrollTo('ideas')} className="blog-hero__cta" style={{ border: 'none', cursor: 'pointer' }}>
                            Explore Ideas <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                        </button>
                    </div>
                </div>
                <div className="blog-hero__scroll"><div className="blog-hero__scroll-line" /><span>Scroll</span></div>
            </div>

            <nav className="blog-nav-dots">
                {navSections.map(id => <button key={id} className={`blog-nav-dot${activeSection === id ? ' active' : ''}`} onClick={() => scrollTo(id)} aria-label={id} />)}
            </nav>

            <div className="blog-body">
                <div className="blog-toc">
                    <div className="blog-toc__title">Table of Contents</div>
                    <div className="blog-toc__grid">
                        {toc.map(item => <button key={item.id} className={`blog-toc__btn${activeSection === item.id ? ' active' : ''}`} onClick={() => scrollTo(item.id)}><span>{item.emoji}</span>{item.label}</button>)}
                    </div>
                </div>

                <section ref={reg('intro')} data-section="intro" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-intro">
                        <div className="blog-intro-grid">
                            <div>
                                <div className="section-label" style={{ color: 'rgba(255,255,255,0.6)' }}><span style={{ background: 'rgba(255,255,255,0.5)', display: 'block', width: '20px', height: '1.5px' }}></span>Living Room Design</div>
                                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem,3vw,2.5rem)', fontWeight: 600, color: '#fff', marginBottom: '1.25rem', lineHeight: 1.2 }}>The Soul of Your Home</h2>
                                <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.72)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
                                    The living room is where life happens - where families gather, guests are entertained and memories are made. A thoughtfully designed living room balances beauty with everyday functionality.
                                </p>
                                <div className="blog-quote" style={{ background: 'rgba(255,255,255,0.07)', borderColor: '#c9a96e' }}>
                                    <p className="blog-quote__text" style={{ color: 'rgba(255,255,255,0.85)' }}>At <strong style={{ color: '#c9a96e' }}>Kryoss Interior</strong>, we design living rooms that feel like a luxury hotel lobby - in your own home.</p>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center' }}>
                                <div className="blog-intro__stat">600+</div>
                                <p className="blog-intro__stat-label">Living rooms designed across India</p>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="blog-wide-image" style={{ marginBottom: '5rem' }}>
                    <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80" alt="Luxury Living Room - Kryoss Interior" />
                    <div className="blog-wide-image__caption">Contemporary Luxury Living Room â€¢ Kryoss Interior</div>
                </div>

                <section ref={reg('ideas')} data-section="ideas" id="ideas" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Design Ideas</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2.5rem' }}>Living Room <em>Design Ideas</em></h2>
                    <div className="blog-img-grid">
                        {ideas.map((idea, i) => (
                            <div key={i} className="blog-img-card">
                                <img src={idea.image} alt={idea.title} className="blog-img-card__image" />
                                <div className="blog-img-card__body">
                                    <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{idea.icon}</div>
                                    <h3 className="blog-img-card__title">{idea.title}</h3>
                                    <p className="blog-img-card__desc">{idea.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <section ref={reg('styles')} data-section="styles" id="styles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="blog-split">
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Contemporary Style</div>
                            <h2 className="blog-section-title">Contemporary <em>Living Rooms</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Contemporary living rooms are defined by clean lines, neutral palettes and a focus on comfort. They feel fresh, uncluttered and effortlessly stylish.
                            </p>
                            <div className="blog-checklist">
                                {['Neutral base with bold accent colours', 'Low-profile furniture with clean lines', 'Statement lighting as a focal point', 'Integrated storage to minimize clutter', 'Large windows for natural light'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=900&q=80" alt="Contemporary Living Room" />
                        </div>
                    </div>

                    <div className="blog-split blog-split--reverse" style={{ marginTop: '4rem' }}>
                        <div>
                            <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>Classic Style</div>
                            <h2 className="blog-section-title">Classic & <em>Traditional Living</em></h2>
                            <p style={{ fontSize: '1.05rem', color: 'var(--kr-slate-3)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                                Classic living rooms exude warmth and timeless elegance with rich fabrics, ornate details and a curated collection of art and antiques.
                            </p>
                            <div className="blog-checklist">
                                {['Tufted sofas and wingback chairs', 'Rich wood tones and warm colours', 'Ornate ceiling mouldings and cornices', 'Persian or traditional area rugs', 'Gallery wall with framed artwork'].map((item, i) => (
                                    <div key={i} className="blog-checklist__item">
                                        <div className="blog-checklist__icon"><svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12" /></svg></div>
                                        <span className="blog-checklist__text">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="blog-image-wrap" style={{ height: '480px' }}>
                            <img src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=900&q=80" alt="Classic Living Room" />
                        </div>
                    </div>
                </section>

                <div className="blog-stats-strip" style={{ marginBottom: '5rem' }}>
                    {[{ number: '6+', label: 'Design Styles' }, { number: '600+', label: 'Living Rooms Designed' }, { number: '5yr', label: 'Service Warranty' }, { number: '4-6wk', label: 'Avg. Completion' }].map((stat, i) => (
                        <div key={i} className="blog-stat">
                            <div className="blog-stat__number">{stat.number}</div>
                            <div className="blog-stat__label">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <section ref={reg('faq')} data-section="faq" id="faq" className="blog-faq__section" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
                    <div className="section-label"><span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>FAQs</div>
                    <h2 className="blog-section-title" style={{ marginBottom: '2rem' }}>Frequently Asked <em>Questions</em></h2>
                    <div className="blog-faq__list">
                        {faqs.map((faq, i) => (
                            <div key={i} className={`blog-faq__item${expandedFaq === i ? ' open' : ''}`} onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}>
                                <div className="blog-faq__question"><span className="blog-faq__question-text">{faq.q}</span><span className="blog-faq__toggle">+</span></div>
                                {expandedFaq === i && <div className="blog-faq__answer">{faq.a}</div>}
                            </div>
                        ))}
                    </div>
                </section>

                <div ref={reg('cta')} data-section="cta" className="blog-cta-section" style={{ marginBottom: '4rem' }}>
                    <h2 className="blog-cta-section__title">Design Your Dream <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Living Room</em></h2>
                    <p className="blog-cta-section__subtitle">Let our experts create a living room that is beautiful, comfortable and uniquely yours.</p>
                    <Link to="/contact" className="blog-cta-section__btn">Get a Free Consultation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg></Link>
                </div>
            </div>
        </div>
    );
};

export default LivingRoom;
