import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './BlogArticle.css';

const categories = [
  {
    title: 'DC Updates',
    tag: 'Updates',
    link: '/blogs/dc-updates',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80',
    desc: 'Latest news and updates from Kryoss Interior'
  },
  {
    title: 'Home Tours',
    tag: 'Tours',
    link: '/blogs/dc-home-tours',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&q=80',
    desc: 'Step inside real homes designed by our team'
  },
  {
    title: 'Design Stars',
    tag: 'People',
    link: '/blogs/dc-design-stars',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80',
    desc: 'Meet the creative minds shaping modern interiors'
  },
  {
    title: 'Home Interior Designs',
    tag: 'Home',
    link: '/blogs/home-interior-design-ideas',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80',
    desc: 'Comprehensive guides for every room in your home'
  },
  {
    title: 'Kitchen Interiors',
    tag: 'Kitchens',
    link: '/blogs/modular-kitchen-interiors-ideas',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=1200&q=80',
    desc: 'Modular kitchen ideas, layouts and design tips'
  },
  {
    title: 'Living Room Designs',
    tag: 'Living',
    link: '/blogs/living-room-design-ideas',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80',
    desc: 'Transform your living space with expert design ideas'
  },
  {
    title: 'Dining Room Designs',
    tag: 'Dining',
    link: '/blogs/dining-room-design-ideas',
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1200&q=80',
    desc: 'Elegant dining spaces for memorable gatherings'
  },
  {
    title: 'Bedroom Ideas',
    tag: 'Bedroom',
    link: '/blogs/bedroom-design-ideas',
    image: 'https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=1200&q=80',
    desc: 'Restful and stylish bedroom design inspirations'
  },
  {
    title: 'Kids Bedroom Designs',
    tag: 'Kids',
    link: '/blogs/kids-bedroom-design-ideas',
    image: 'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=1200&q=80',
    desc: 'Fun, safe and creative spaces for little ones'
  },
  {
    title: 'Study Room Designs',
    tag: 'Study',
    link: '/blogs/study-room-design-ideas',
    image: 'https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=1200&q=80',
    desc: 'Productive and inspiring study room setups'
  },
  {
    title: 'Home Decor Ideas',
    tag: 'Decor',
    link: '/blogs/home-decor-ideas',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1200&q=80',
    desc: 'Finishing touches that elevate every space'
  },
];

const Blogs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="blog-page" style={{ paddingTop: '5.5rem' }}>

      {/* ── HERO ── */}
      <div className="blogs-hero">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
          alt="Kryoss Interior Blog"
          className="blogs-hero__image"
        />
        <div className="blogs-hero__overlay">
          <div style={{ maxWidth: '700px' }}>
            <div className="section-label" style={{ color: '#fff', marginBottom: '1.25rem' }}>
              <span style={{ background: '#fff', display: 'block', width: '20px', height: '1.5px' }}></span>
              Kryoss Interior Journal
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2.8rem, 5vw, 4.5rem)',
              fontWeight: 600,
              color: '#fff',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '1.25rem'
            }}>
              Design <em style={{ fontStyle: 'italic', color: '#c9a96e' }}>Stories</em> &amp; Insights
            </h1>
            <p style={{
              fontSize: '1.1rem',
              color: 'rgba(255,255,255,0.75)',
              lineHeight: 1.75,
              marginBottom: '2rem',
              fontWeight: 300,
              maxWidth: '520px'
            }}>
              Trends, tours and expert tips to inspire thoughtful, beautiful interiors for every home.
            </p>
            <Link to="/contact" className="blog-hero__cta">
              Book a Consultation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
        <div className="blog-hero__scroll">
          <div className="blog-hero__scroll-line"></div>
          <span>Scroll</span>
        </div>
      </div>

      {/* ── STATS STRIP ── */}
      <div className="blog-body" style={{ marginTop: '4rem' }}>
        <div className="blog-stats-strip">
          {[
            { number: '11+', label: 'Design Categories' },
            { number: '50+', label: 'Expert Articles' },
            { number: '10+', label: 'Years of Experience' },
            { number: '500+', label: 'Homes Designed' },
          ].map((stat, i) => (
            <div key={i} className="blog-stat">
              <div className="blog-stat__number">{stat.number}</div>
              <div className="blog-stat__label">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* ── SECTION HEADER ── */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="section-label" style={{ justifyContent: 'center' }}>
            <span style={{ background: 'var(--kr-red)', display: 'block', width: '20px', height: '1.5px' }}></span>
            Explore Our Journal
          </div>
          <h2 className="blog-section-title" style={{ margin: '0 auto 1rem' }}>
            Browse by <em>Category</em>
          </h2>
          <p className="blog-section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
            Curated articles, guides and inspiration across every corner of your home.
          </p>
        </div>

        {/* ── CATEGORY GRID ── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: '1.5rem',
          marginBottom: '6rem'
        }}>
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              to={cat.link}
              className="blogs-category-card"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              <img src={cat.image} alt={cat.title} className="blogs-category-card__image" />
              <div className="blogs-category-card__overlay" />
              <div className="blogs-category-card__content">
                <span className="blogs-category-card__tag">{cat.tag}</span>
                <h3 className="blogs-category-card__title">{cat.title}</h3>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem', lineHeight: 1.5 }}>
                  {cat.desc}
                </p>
                <div className="blogs-category-card__arrow">
                  <span>Explore</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ── CTA ── */}
        <div className="blog-cta-section" style={{ marginBottom: '4rem' }}>
          <h2 className="blog-cta-section__title">Ready to Design Your Dream Home?</h2>
          <p className="blog-cta-section__subtitle">
            Let our experts guide you through every step - from concept to completion.
          </p>
          <Link to="/contact" className="blog-cta-section__btn">
            Get a Free Consultation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
