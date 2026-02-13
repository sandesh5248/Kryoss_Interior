import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';
import uShapedImg from '../../assets/images/blog/u-shaped-kitchen.jpg';
import parallelImg from '../../assets/images/blog/parallel-kitchen.jpg';
import islandImg from '../../assets/images/blog/island-kitchen.jpg';
import lShapedImg from '../../assets/images/blog/l-shaped-kitchen.jpg';

const ModularKitchenInteriors = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredLayout, setHoveredLayout] = useState(null);
  const [expandedTrend, setExpandedTrend] = useState(null);
  const sectionRefs = {
    hero: useRef(null),
    layouts: useRef(null),
    trends: useRef(null),
    materials: useRef(null),
    process: useRef(null),
    addons: useRef(null),
    budget: useRef(null),
    professional: useRef(null),
    cta: useRef(null)
  };

  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  // --- INTERSECTION OBSERVER: MAKE EACH SECTION VISIBLE SEPARATELY ---
  useEffect(() => {
    const observers = [];
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find which section this is
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observerOptions = {
      threshold: 0.3, // 30% visible = section is active
      rootMargin: '-20px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
    // Observe all main sections
    Object.keys(sectionRefs).forEach(key => {
      if (sectionRefs[key].current) {
        observer.observe(sectionRefs[key].current);
      }
    });

    return () => observer.disconnect();
  }, []);

  // --- SMOOTH SCROLL TO SECTION ---
  const scrollToSection = (sectionId) => {
    if (sectionRefs[sectionId]?.current) {
      sectionRefs[sectionId].current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  // --- TRENDING LAYOUTS DATA FOR INTERACTIVE HOVER ---
  const layoutsData = [
    {
      id: 'lshaped',
      title: 'L-Shaped Modular Kitchen',
      img: lShapedImg,
      features: ['Perfect for compact and mid-sized homes', 'Efficient corner utilization', 'Ideal for open-plan living spaces'],
      bestFor: '1BHK & 2BHK apartments',
      color: primaryRed
    },
    {
      id: 'ushaped',
      title: 'U-Shaped Modular Kitchen',
      img: uShapedImg,
      features: ['Maximum storage and counter space', 'Smooth workflow triangle', 'Ideal for large families'],
      bestFor: 'Spacious homes & villas',
      color: primaryRed
    },
    {
      id: 'parallel',
      title: 'Parallel (Galley) Kitchen',
      img: parallelImg,
      features: ['Efficient for narrow spaces', 'Separate cooking & cleaning zones', 'Highly functional design'],
      bestFor: 'Urban apartments',
      color: primaryRed
    },
    {
      id: 'island',
      title: 'Island Kitchen Design',
      img: islandImg,
      features: ['Adds luxury and flexibility', 'Extra prep & social space', 'Enhances open kitchen aesthetics'],
      bestFor: 'Open-concept homes',
      color: primaryRed
    }
  ];

  // --- DESIGN TRENDS DATA FOR EXPANDABLE CARDS ---
  const trendsData = [
    {
      id: 1,
      title: 'Matte Finish Cabinets',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z',
      points: ['Anti-fingerprint surfaces', 'Elegant and subtle aesthetics', 'Perfect for minimal interiors', 'Soft-touch feel'],
      gradient: redGradient
    },
    {
      id: 2,
      title: 'Handleless & Push-to-Open',
      icon: 'M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z',
      points: ['Seamless look', 'Modern appeal', 'Easy maintenance', 'Child-safe operation'],
      gradient: redGradient
    },
    {
      id: 3,
      title: 'Smart Storage Solutions',
      icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z',
      points: ['Tandem drawers', 'Magic corner units', 'Tall pull-out pantries', 'Built-in organizers'],
      gradient: redGradient
    },
    {
      id: 4,
      title: 'Sustainable Materials',
      icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z',
      points: ['Eco-friendly boards', 'Low-VOC finishes', 'Energy-efficient lighting', 'Recycled components'],
      gradient: 'linear-gradient(135deg, #10b981, #059669)' // Keeping green for sustainable
    },
    {
      id: 5,
      title: 'Two-Tone Color Combinations',
      icon: 'M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z',
      points: ['Neutral base with bold accents', 'Wood + Matte blends', 'White + Grey minimal themes', 'Navy + Oak combos'],
      gradient: 'linear-gradient(135deg, #f59e0b, #d97706)' // Keeping orange for two-tone
    }
  ];

  // --- MATERIALS DATA ---
  const materialsData = [
    { name: 'Marine Plywood', desc: 'Moisture-resistant and long-lasting', icon: '💧' },
    { name: 'HDHMR Boards', desc: 'Budget-friendly and sturdy', icon: '🪵' },
    { name: 'Acrylic Finish', desc: 'High-gloss premium look', icon: '✨' },
    { name: 'PU Finish', desc: 'Smooth, seamless coating', icon: '🎨' },
    { name: 'Laminate', desc: 'Affordable and versatile', icon: '📋' }
  ];

  return (
    <div className="blog-article-container" style={{ paddingTop: '8rem' }}>
      {/* --- FLOATING NAVIGATION (MAKES SECTIONS ACCESSIBLE) --- */}
      <div className="section-navigator" style={{
        position: 'fixed',
        right: '2rem',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 100,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        background: 'rgba(255,255,255,0.9)',
        padding: '1.5rem 0.8rem',
        borderRadius: '40px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
        backdropFilter: 'blur(8px)',
        border: `1px solid ${primaryRed}20`
      }}>
        {['hero', 'layouts', 'trends', 'materials', 'process', 'cta'].map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: activeSection === section ? primaryRed : '#cbd5e1',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              transform: activeSection === section ? 'scale(1.5)' : 'scale(1)',
              boxShadow: activeSection === section ? `0 0 0 4px ${primaryRed}33` : 'none'
            }}
            aria-label={`Scroll to ${section}`}
          />
        ))}
      </div>

      <div className="container">
        {/* --- ENHANCED HERO SECTION --- */}
        <div 
          ref={sectionRefs.hero} 
          data-section="hero"
          className="hero-wrapper interactive-hero" 
          style={{ 
            position: 'relative', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            marginBottom: '4rem',
            boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
            transform: activeSection === 'hero' ? 'scale(1.02)' : 'scale(1)',
            transition: 'transform 0.5s ease'
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=1600&q=80"
            alt="Modern Modular Kitchen Design"
            className="hero-image"
            style={{ width: '100%', height: '600px', objectFit: 'cover', transition: 'transform 8s ease' }}
          />
          <div className="hero-overlay" style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: '0 4rem'
          }}>
            <div style={{ marginBottom: '1rem', animation: 'slideInDown 0.8s ease' }}>
              <span style={{ backgroundColor: primaryRed, color: 'white', padding: '0.6rem 1.5rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '600', letterSpacing: '1px', boxShadow: `0 4px 12px ${primaryRed}4D` }}>
                INTERIOR DESIGN GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Modular Kitchen Ideas That Redefine <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Modern Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Discover smart layouts, sleek finishes, and space-saving innovations crafted for contemporary Indian homes.
            </p>
            <button 
              onClick={() => scrollToSection('layouts')}
              style={{
                background: 'rgba(255,255,255,0.15)',
                backdropFilter: 'blur(10px)',
                border: '2px solid white',
                color: 'white',
                padding: '1rem 2.5rem',
                fontSize: '1.1rem',
                fontWeight: '600',
                borderRadius: '50px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => { e.target.style.background = primaryRed; e.target.style.borderColor = primaryRed; }}
              onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.15)'; e.target.style.borderColor = 'white'; }}
            >
              Explore Layouts <span style={{ fontSize: '1.3rem' }}>→</span>
            </button>
          </div>
        </div>

        {/* --- INTERACTIVE TABLE OF CONTENTS --- */}
        <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ background: primaryRed, color: 'white', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>📋</span>
            Table of Contents
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { id: 'layouts', label: 'Trending Kitchen Layouts', emoji: '🔲' },
              { id: 'trends', label: 'Design Trends 2026', emoji: '✨' },
              { id: 'materials', label: 'Quality Materials Guide', emoji: '🧱' },
              { id: 'process', label: 'Our Design Process', emoji: '⚙️' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: activeSection === item.id ? primaryRed : '#475569',
                  textDecoration: 'none',
                  padding: '0.8rem 1.2rem',
                  background: activeSection === item.id ? `${lightRed}` : '#f8fafc',
                  borderRadius: '12px',
                  border: activeSection === item.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '1rem'
                }}
                onMouseEnter={(e) => { if (activeSection !== item.id) e.currentTarget.style.background = '#f1f5f9'; }}
                onMouseLeave={(e) => { if (activeSection !== item.id) e.currentTarget.style.background = '#f8fafc'; }}
              >
                <span>{item.emoji}</span> {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="blog-content" style={{ maxWidth: '1000px', margin: '0 auto', lineHeight: '1.8' }}>
          {/* Introduction with animation trigger */}
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ background: lightRed, color: primaryRed, padding: '0.4rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>⚡ TRUSTED BY 500+ FAMILIES</span>
          </div>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#334155', fontStyle: 'italic', borderLeft: `4px solid ${primaryRed}`, paddingLeft: '1.5rem' }}>
            "A modular kitchen is no longer a luxury — it's a necessity for organized, functional, and aesthetic living."
          </p>
          <p style={{ fontSize: '1.125rem', marginBottom: '3rem', color: '#475569' }}>
            At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, every kitchen is designed with a balance of functionality, personalization, and long-term durability — built around how you actually use your space.
          </p>

          {/* --- WHY MODULAR: SECTION WITH COUNTER ANIMATION (INTERACTIVE) --- */}
          <section ref={sectionRefs.layouts} data-section="layouts" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'linear-gradient(to right, #fef2f2, #ffffff)', padding: '2.5rem', borderRadius: '24px' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🏆</span>
                Why Modular Kitchens Are the Future of Indian Homes
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Modern kitchens are designed with precision engineering, factory-finished components, and customizable modules.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginTop: '1rem' }}>
                    {['Optimized storage', 'Faster installation', 'Custom finishes', 'Easy maintenance', 'Budget flexibility', 'Future-ready'].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'white', padding: '0.6rem 1rem', borderRadius: '50px', boxShadow: '0 2px 8px rgba(0,0,0,0.02)' }}>
                        <span style={{ color: primaryRed, fontWeight: 'bold' }}>✓</span>
                        <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{ background: 'white', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.03)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>87%</div>
                  <p style={{ fontSize: '1rem', color: '#64748b' }}>of homeowners prefer modular kitchens for better space utilization</p>
                </div>
              </div>
            </div>
          </section>

          {/* --- TRENDING LAYOUTS: INTERACTIVE HOVER CARDS --- */}
          <section style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2.5rem', color: '#1e293b', textAlign: 'center' }}>
              🔥 Trending Modular Kitchen Layout Ideas
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }}>
              {layoutsData.map((layout, index) => (
                <div
                  key={layout.id}
                  onMouseEnter={() => setHoveredLayout(layout.id)}
                  onMouseLeave={() => setHoveredLayout(null)}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    gap: '2rem',
                    alignItems: 'center',
                    padding: '2rem',
                    background: hoveredLayout === layout.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    boxShadow: hoveredLayout === layout.id ? `0 20px 35px ${primaryRed}26` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredLayout === layout.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: hoveredLayout === layout.id ? `2px solid ${primaryRed}` : '2px solid transparent'
                  }}
                >
                  {index % 2 === 0 ? (
                    <>
                      <div>
                        <h3 style={{ fontSize: '1.9rem', fontWeight: '700', marginBottom: '1rem', color: layout.color }}>
                          {index + 1}. {layout.title}
                        </h3>
                        <ul style={{ fontSize: '1.1rem', color: '#475569', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                          {layout.features.map((f, i) => (
                            <li key={i} style={{ marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ color: primaryRed }}>●</span> {f}
                            </li>
                          ))}
                        </ul>
                        <div style={{ background: lightRed, padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'inline-block' }}>
                          <span style={{ fontWeight: '600', color: darkRed }}>🏠 {layout.bestFor}</span>
                        </div>
                      </div>
                      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 25px rgba(0,0,0,0.1)', transform: hoveredLayout === layout.id ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                        <img src={layout.img} alt={layout.title} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
                      </div>
                    </>
                  ) : (
                    <>
                      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 12px 25px rgba(0,0,0,0.1)', transform: hoveredLayout === layout.id ? 'scale(1.03)' : 'scale(1)', transition: 'transform 0.3s ease' }}>
                        <img src={layout.img} alt={layout.title} style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
                      </div>
                      <div>
                        <h3 style={{ fontSize: '1.9rem', fontWeight: '700', marginBottom: '1rem', color: layout.color }}>
                          {index + 1}. {layout.title}
                        </h3>
                        <ul style={{ fontSize: '1.1rem', color: '#475569', paddingLeft: '1.5rem', marginBottom: '1.5rem' }}>
                          {layout.features.map((f, i) => (
                            <li key={i} style={{ marginBottom: '0.7rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                              <span style={{ color: primaryRed }}>●</span> {f}
                            </li>
                          ))}
                        </ul>
                        <div style={{ background: lightRed, padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'inline-block' }}>
                          <span style={{ fontWeight: '600', color: darkRed }}>🏠 {layout.bestFor}</span>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* --- GALLERY: CLICK TO ENLARGE (INTERACTIVE) --- */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              📸 Inspiring Kitchen Designs
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
                'https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=800&q=80',
                'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
              ].map((src, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    borderRadius: '16px', 
                    overflow: 'hidden', 
                    boxShadow: '0 8px 20px rgba(0,0,0,0.08)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)'; e.currentTarget.style.boxShadow = `0 18px 35px ${primaryRed}33`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.08)'; }}
                  onClick={() => window.open(src, '_blank')}
                >
                  <img src={src} alt={`Gallery ${idx+1}`} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '0', left: '0', right: '0', background: 'linear-gradient(transparent, rgba(0,0,0,0.7))', padding: '1.5rem', color: 'white', opacity: '0', transition: 'opacity 0.3s' }} className="gallery-caption">
                    <span style={{ fontWeight: '600' }}>Click to enlarge</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* --- DESIGN TRENDS: EXPANDABLE CARDS --- */}
          <section id="trends" ref={sectionRefs.trends} data-section="trends" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              ✨ Latest Modular Kitchen Design Trends <span style={{ background: primaryRed, color: 'white', padding: '0.2rem 1rem', borderRadius: '50px', fontSize: '1.2rem', marginLeft: '0.8rem' }}>2026</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2rem' }}>
              {trendsData.map(trend => (
                <div
                  key={trend.id}
                  onClick={() => setExpandedTrend(expandedTrend === trend.id ? null : trend.id)}
                  style={{
                    padding: '1.8rem 1.5rem',
                    background: 'white',
                    border: expandedTrend === trend.id ? `2px solid ${trend.gradient.includes('dc2626') ? primaryRed : trend.gradient.includes('10b981') ? primaryRed : primaryRed}` : '2px solid #e2e8f0',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    boxShadow: expandedTrend === trend.id ? '0 15px 30px rgba(0,0,0,0.05)' : 'none',
                    transform: expandedTrend === trend.id ? 'scale(1.02)' : 'scale(1)'
                  }}
                >
                  <div style={{ width: '64px', height: '64px', background: trend.gradient, borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: `0 8px 16px ${primaryRed}33` }}>
                    <svg width="32" height="32" fill="white" viewBox="0 0 24 24">
                      <path d={trend.icon} />
                    </svg>
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b' }}>{trend.title}</h3>
                  <ul style={{ 
                    fontSize: '1rem', 
                    color: '#475569', 
                    paddingLeft: '1.2rem',
                    maxHeight: expandedTrend === trend.id ? '300px' : '100px',
                    overflow: 'hidden',
                    transition: 'max-height 0.5s ease',
                    marginBottom: '0.5rem'
                  }}>
                    {trend.points.map((point, i) => (
                      <li key={i} style={{ marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <span style={{ color: trend.gradient.includes('dc2626') ? primaryRed : trend.gradient.includes('10b981') ? '#10b981' : '#f59e0b', fontSize: '1.2rem' }}>•</span> 
                        {point}
                      </li>
                    ))}
                  </ul>
                  <span style={{ color: primaryRed, fontWeight: '600', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.8rem' }}>
                    {expandedTrend === trend.id ? 'Show less ▲' : 'Click to expand ▼'}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* --- MATERIALS SECTION WITH INTERACTIVE TABS --- */}
          <section id="materials" ref={sectionRefs.materials} data-section="materials" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <span style={{ background: '#10b981', color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🧱</span>
              Materials That Define Quality
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569' }}>
              Choosing the right material ensures durability and performance.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
                <img src="https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=900&h=400&fit=crop" alt="Materials" style={{ width: '100%', height: '320px', objectFit: 'cover' }} />
              </div>
              <div style={{ background: '#f8fafc', padding: '2rem', borderRadius: '20px' }}>
                {materialsData.map((mat, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem', 
                      padding: '1rem', 
                      marginBottom: '0.8rem',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.02)',
                      transition: 'transform 0.2s ease, boxShadow 0.2s',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(8px)'; e.currentTarget.style.boxShadow = `0 8px 16px ${primaryRed}33`; e.currentTarget.style.borderLeft = `4px solid ${primaryRed}`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.02)'; e.currentTarget.style.borderLeft = '4px solid transparent'; }}
                  >
                    <span style={{ fontSize: '1.8rem' }}>{mat.icon}</span>
                    <div>
                      <strong style={{ color: '#0f172a', fontSize: '1.1rem' }}>{mat.name}</strong>
                      <p style={{ margin: '0.2rem 0 0', color: '#64748b', fontSize: '0.9rem' }}>{mat.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p style={{ fontSize: '1.1rem', marginTop: '2rem', color: '#334155', background: '#f1f5f9', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
              <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>: material selection guided by climate, usage, and budget.
            </p>
          </section>

          {/* --- 4-STEP PROCESS: ANIMATED ON SCROLL --- */}
          <section id="process" ref={sectionRefs.process} data-section="process" style={{ marginBottom: '5rem', padding: '4rem 0', borderTop: '2px solid #e2e8f0', borderBottom: '2px solid #e2e8f0', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: '#1e293b', textAlign: 'center' }}>
              Our 4-Step Design <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}` }}>Evolution</span>
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {[
                { num: '01', title: 'Consultation', desc: 'We understand your space, lifestyle, and aesthetic preferences.', icon: '🗣️' },
                { num: '02', title: 'Visualization', desc: 'Detailed 2D/3D layouts showing exactly how your kitchen will look.', icon: '🎨' },
                { num: '03', title: 'Production', desc: 'Factory-finish precision manufacturing using high-grade materials.', icon: '🏭' },
                { num: '04', title: 'Execution', desc: 'Hassle-free professional installation with quality assurance.', icon: '🔧' }
              ].map((step, i) => (
                <div 
                  key={i} 
                  className="process-step"
                  style={{
                    textAlign: 'center',
                    padding: '2rem 1.5rem',
                    background: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.02)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = `0 20px 35px ${primaryRed}33`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.02)'; }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>{step.icon}</div>
                  <div style={{ fontSize: '1.2rem', fontWeight: '700', color: primaryRed, marginBottom: '0.5rem' }}>{step.num}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem', color: '#1e293b' }}>{step.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5' }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* --- SMART ADD-ONS & BUDGET (SIMPLIFIED INTERACTIVE) --- */}
          <section ref={sectionRefs.addons} data-section="addons" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
              ⚙️ Smart Modular Kitchen Add-Ons
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
              {[
                'Built-in microwave & oven units',
                'Under-cabinet LED lighting',
                'Soft-close channels',
                'Sensor-based chimneys',
                'In-built waste segregation',
                'Smart faucets'
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '0.8rem 1.2rem', background: lightRed, borderRadius: '50px' }}>
                  <span style={{ color: primaryRed, fontSize: '1.3rem' }}>✓</span>
                  <span style={{ fontSize: '1rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section ref={sectionRefs.budget} data-section="budget" style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
              💰 Budget Planning for Modular Kitchens
            </h2>
            <div style={{ background: '#fef9e7', padding: '2rem', borderRadius: '24px', border: '1px solid #fde68a' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem' }}>
                {['Layout size', 'Material choice', 'Finish type', 'Hardware quality', 'Customization level', 'Appliances'].map((item, idx) => (
                  <div key={idx} style={{ background: 'white', padding: '1rem', borderRadius: '12px', textAlign: 'center', fontWeight: '500' }}>
                    {item}
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '1rem', color: '#92400e', fontStyle: 'italic' }}>Smart planning avoids overspending. Professional consultation ensures transparency.</p>
            </div>
          </section>

          <section ref={sectionRefs.professional} data-section="professional" style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
              👔 How Professional Interior Designers Make the Difference
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>It's about:</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {['Workflow optimization', 'Ventilation planning', 'Lighting strategy', 'Ergonomic heights', 'Appliance integration', 'Material selection'].map((item, idx) => (
                    <span key={idx} style={{ background: lightRed, padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.95rem', fontWeight: '500' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ background: primaryRed, color: 'white', padding: '1.8rem', borderRadius: '20px' }}>
                <span style={{ fontSize: '2rem', fontWeight: '800' }}>500+</span>
                <p style={{ marginTop: '0.5rem' }}>Happy families transformed with Kryoss Interior</p>
              </div>
            </div>
          </section>
        </div>

        {/* --- ENHANCED CALL TO ACTION --- */}
        <div ref={sectionRefs.cta} data-section="cta" className="blog-cta" style={{
          background: `linear-gradient(135deg, ${darkRed}, ${primaryRed})`,
          padding: '5rem 3rem',
          borderRadius: '40px',
          textAlign: 'center',
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          marginTop: '3rem',
          marginBottom: '3rem',
          boxShadow: `0 30px 50px ${primaryRed}40`
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Ready to Design Your Dream Kitchen?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Join 500+ happy families who transformed their cooking space with Kryoss Interior.
            </p>
            <a 
              href="/contact" 
              className="cta-button"
              style={{
                background: 'white',
                color: primaryRed,
                padding: '1.2rem 3rem',
                fontSize: '1.2rem',
                fontWeight: '700',
                borderRadius: '60px',
                textDecoration: 'none',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
                border: '2px solid transparent'
              }}
              onMouseEnter={(e) => { e.target.style.background = primaryRed; e.target.style.color = 'white'; e.target.style.border = '2px solid white'; }}
              onMouseLeave={(e) => { e.target.style.background = 'white'; e.target.style.color = primaryRed; e.target.style.border = '2px solid transparent'; }}
            >
              Get a Free Design Quote →
            </a>
          </div>
          <div style={{ position: 'absolute', right: '-50px', top: '-50px', width: '300px', height: '300px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
          <div style={{ position: 'absolute', left: '-50px', bottom: '-50px', width: '250px', height: '250px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', zIndex: 1 }}></div>
        </div>
      </div>

      {/* CSS Animations - injected inline for style */}
      <style>{`
        @keyframes slideInDown {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .gallery-caption {
          transition: opacity 0.3s ease;
        }
        div:hover > .gallery-caption {
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default ModularKitchenInteriors;