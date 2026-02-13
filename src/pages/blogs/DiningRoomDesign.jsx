import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const DiningRoomDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredIdea, setHoveredIdea] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [hoveredMaterial, setHoveredMaterial] = useState(null);
  const [selectedLighting, setSelectedLighting] = useState(null);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    trends: useRef(null),
    layout: useRef(null),
    colors: useRef(null),
    materials: useRef(null),
    professional: useRef(null),
    faq: useRef(null),
    conclusion: useRef(null),
    cta: useRef(null)
  };

  // --- INTERSECTION OBSERVER: MAKE EACH SECTION VISIBLE SEPARATELY ---
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('data-section');
          if (sectionId) {
            setActiveSection(sectionId);
          }
        }
      });
    };

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-20px 0px -20px 0px'
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    
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

  // --- FAQ DATA ---
  const faqData = [
    {
      id: 1,
      question: "What is the ideal size for a dining table?",
      answer: "A 4-seater requires approx 36x48 inches (3x4 feet), while a 6-seater needs around 36x60 inches (3x5 feet). For 8-seaters, consider 36x84 inches. Always leave at least 36 inches of clearance around the table for comfortable movement."
    },
    {
      id: 2,
      question: "How high should dining lights be placed?",
      answer: "Typically 30–36 inches above the tabletop. For pendant lights, the bottom should be at eye level when seated (approx 60-66 inches from floor). For chandeliers, ensure they don't obstruct views across the table."
    },
    {
      id: 3,
      question: "Can small homes have luxury dining spaces?",
      answer: "Absolutely. Smart layout choices, wall-mounted drop-leaf tables, mirrors to create depth, and statement lighting can create a luxurious feel even in compact areas. Built-in banquette seating also saves space while adding elegance."
    },
    {
      id: 4,
      question: "What dining table shape is best for my space?",
      answer: "Round tables work best for square rooms and encourage conversation. Rectangular tables suit long, narrow spaces. Oval tables offer similar seating capacity as rectangular but with better flow around corners."
    },
    {
      id: 5,
      question: "How long does a dining room design project take?",
      answer: "Typically 4-6 weeks from consultation to installation. This includes design development (1 week), material selection (1-2 weeks), furniture fabrication (2-3 weeks), and final installation (1 week)."
    }
  ];

  // --- TRENDING DESIGNS DATA ---
  const trendsData = [
    {
      id: 1,
      title: "Open-Concept Dining Spaces",
      desc: "Seamlessly blending dining with living or kitchen areas creates a sense of openness. Neutral palettes and statement lighting help define the space without closing it off.",
      bestFor: "Urban apartments and modern homes",
      icon: "🏛️",
      image: "https://images.unsplash.com/photo-1617103996702-96ff29b1c467?w=800&q=80"
    },
    {
      id: 2,
      title: "Compact Dining for Small Homes",
      desc: "Not every home has a dedicated dining room. Foldable tables, wall-mounted units, and sleek 4-seater setups maximize space without compromising style.",
      bestFor: "Small apartments and compact homes",
      icon: "📐",
      image: "https://images.unsplash.com/photo-1574864434960-9d0a33116999?w=800&q=80"
    },
    {
      id: 3,
      title: "Statement Lighting",
      desc: "Oversized pendants or linear chandeliers above the table instantly elevate the look and create a focal point.",
      tip: "Hang fixture 30–36 inches above tabletop",
      icon: "💡"
    },
    {
      id: 4,
      title: "Elegant Storage Solutions",
      desc: "Crockery units and sideboards add elegance and utility. Glass shutters and backlit shelves keep clutter away while displaying your finest dinnerware.",
      icon: "📦"
    },
    {
      id: 5,
      title: "Minimalist Scandinavian",
      desc: "Clean lines, wooden textures, and muted tones. The focus is on natural light and functional furniture. Less décor. More intention.",
      icon: "🌿"
    },
    {
      id: 6,
      title: "Luxury Dining",
      desc: "Marble tabletops, upholstered chairs, and metallic accents. Luxury isn't about excess — it's about precision in detailing and quality materials.",
      icon: "👑"
    }
  ];

  // --- COLOR COMBINATIONS DATA ---
  const colorCombos = [
    { name: "Beige & Walnut", desc: "Warm and timeless", bg: "#fef3c7", color: "#92400e" },
    { name: "Grey & White", desc: "Modern and minimal", bg: "#f1f5f9", color: "#475569" },
    { name: "Olive & Gold", desc: "Rich yet subtle", bg: "#ecfccb", color: "#3f6212" },
    { name: "Black & Wood", desc: "Contemporary bold", bg: "#1e293b", color: "#ffffff" },
    { name: "Terracotta & Cream", desc: "Earthy and welcoming", bg: "#fed7aa", color: "#9a3412" },
    { name: "Navy & Brass", desc: "Sophisticated elegance", bg: "#1e3a8a", color: "#ffffff" }
  ];

  // --- MATERIALS DATA ---
  const materialsData = [
    { name: "Engineered Wood", desc: "Durability on a budget", icon: "🪵", durability: "High", cost: "Budget-friendly" },
    { name: "Marble & Quartz", desc: "Premium tabletops", icon: "⛰️", durability: "Very High", cost: "Premium" },
    { name: "Fluted Glass", desc: "Modern crockery units", icon: "🥂", durability: "Medium", cost: "Mid-range" },
    { name: "Upholstered Chairs", desc: "Maximum comfort", icon: "🪑", durability: "Medium-High", cost: "Mid to Premium" },
    { name: "Solid Wood", desc: "Timeless and sturdy", icon: "🌳", durability: "Very High", cost: "Premium" },
    { name: "Metal Accents", desc: "Industrial chic", icon: "⚙️", durability: "High", cost: "Mid-range" }
  ];

  // --- LIGHTING OPTIONS ---
  const lightingOptions = [
    { name: "Pendant Lights", height: "30-36 inches", effect: "Focused, intimate" },
    { name: "Chandeliers", height: "30-36 inches", effect: "Elegant, statement" },
    { name: "Linear Suspension", height: "30-36 inches", effect: "Modern, clean" },
    { name: "Track Lighting", height: "Variable", effect: "Flexible, directional" }
  ];

  return (
    <div className="blog-article-container" style={{ paddingTop: '8rem', background: '#ffffff' }}>
      
      {/* --- FLOATING NAVIGATION (SECTION VISIBILITY INDICATOR) --- */}
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
        {['hero', 'intro', 'trends', 'layout', 'colors', 'materials', 'professional', 'faq', 'cta'].map((section) => (
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
        
        {/* --- ENHANCED HERO SECTION WITH PARALLAX EFFECT --- */}
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
            src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=1600&q=80"
            alt="Modern Dining Room Design"
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
                DINING ROOM GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Dining Room Design Ideas That Redefine <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Modern Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Where conversations flow, celebrations spark, and design meets comfort. Transform your dining space into a stylish centerpiece.
            </p>
            <button 
              onClick={() => scrollToSection('trends')}
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
              Explore Designs <span style={{ fontSize: '1.3rem' }}>→</span>
            </button>
          </div>
        </div>

        {/* --- INTERACTIVE TABLE OF CONTENTS WITH ACTIVE HIGHLIGHT --- */}
        <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ background: primaryRed, color: 'white', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>📋</span>
            Table of Contents
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
            {[
              { id: 'trends', label: '2026 Trends', emoji: '✨' },
              { id: 'layout', label: 'Choosing Layouts', emoji: '📐' },
              { id: 'colors', label: 'Color Schemes', emoji: '🎨' },
              { id: 'materials', label: 'Materials Guide', emoji: '🧱' },
              { id: 'professional', label: 'Why Hire Pros?', emoji: '👔' },
              { id: 'faq', label: 'FAQs', emoji: '❓' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: activeSection === item.id ? primaryRed : '#475569',
                  textDecoration: 'none',
                  padding: '0.8rem 1.2rem',
                  background: activeSection === item.id ? lightRed : '#f8fafc',
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
          
          {/* Introduction Section */}
          <section ref={sectionRefs.intro} data-section="intro" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'linear-gradient(135deg, #fef2f2, #ffffff)', padding: '3rem', borderRadius: '30px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <span style={{ background: primaryRed, color: 'white', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.9rem', fontWeight: '600' }}>⚡ WHY IT MATTERS</span>
              </div>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Why Dining Room Design Deserves Special Attention
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Modern homes are evolving. Open layouts, multifunctional spaces, and smart storage are redefining how we dine. A thoughtfully designed dining room enhances space efficiency, visual harmony, and guest experience.
                  </p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>65%</div>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>of homeowners say dining room design affects entertaining experience</p>
                </div>
              </div>
              <div style={{ fontSize: '1.125rem', marginTop: '1.5rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we approach dining spaces with a balance of aesthetics, functionality, and modern practicality — tailored to your lifestyle.
              </div>
            </div>
          </section>

          {/* Trending Designs Section */}
          <section id="trends" ref={sectionRefs.trends} data-section="trends" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>✨</span>
              Trending Dining Room Design Ideas for 2026
            </h2>

            {/* First two main trends with images */}
            {trendsData.slice(0, 2).map((trend, index) => (
              <div key={trend.id} style={{ marginBottom: '4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: primaryRed }}>
                        {trend.id}. {trend.title}
                      </h3>
                      <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>{trend.desc}</p>
                      <div style={{ background: lightRed, padding: '1rem', borderRadius: '12px', display: 'inline-block' }}>
                        <span style={{ fontWeight: '600', color: darkRed }}>🏠 {trend.bestFor}</span>
                      </div>
                    </div>
                    <div style={{ 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <img src={trend.image} alt={trend.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </div>
                  </>
                ) : (
                  <>
                    <div style={{ 
                      borderRadius: '20px', 
                      overflow: 'hidden', 
                      boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                      transition: 'transform 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      <img src={trend.image} alt={trend.title} style={{ width: '100%', height: '350px', objectFit: 'cover' }} />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem', color: primaryRed }}>
                        {trend.id}. {trend.title}
                      </h3>
                      <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>{trend.desc}</p>
                      <div style={{ background: lightRed, padding: '1rem', borderRadius: '12px', display: 'inline-block' }}>
                        <span style={{ fontWeight: '600', color: darkRed }}>🏠 {trend.bestFor}</span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}

            {/* Grid of 4 smaller trend cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '2rem' }}>
              {trendsData.slice(2, 6).map((trend) => (
                <div
                  key={trend.id}
                  onMouseEnter={() => setHoveredIdea(trend.id)}
                  onMouseLeave={() => setHoveredIdea(null)}
                  style={{
                    padding: '2rem',
                    background: hoveredIdea === trend.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredIdea === trend.id ? `0 15px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredIdea === trend.id ? 'translateY(-5px)' : 'translateY(0)',
                    border: hoveredIdea === trend.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{trend.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: darkRed }}>
                    {trend.id}. {trend.title}
                  </h3>
                  <p style={{ color: '#475569', marginBottom: '1rem' }}>{trend.desc}</p>
                  {trend.tip && (
                    <div style={{ 
                      padding: '0.8rem', 
                      background: lightRed, 
                      borderRadius: '8px', 
                      color: darkRed,
                      fontSize: '0.9rem',
                      fontWeight: '600'
                    }}>
                      💡 {trend.tip}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* How to Choose Layout Section */}
          <section id="layout" ref={sectionRefs.layout} data-section="layout" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>📐</span>
              How to Choose the Right Dining Room Layout
            </h2>
            
            <div style={{ 
              background: lightRed, 
              padding: '2.5rem', 
              borderRadius: '30px',
              border: `1px solid ${primaryRed}20`
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1.5rem', color: darkRed }}>Essential Measurements</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    {[
                      { label: "4-Seater Table", value: "36×48 inches (3×4 ft)" },
                      { label: "6-Seater Table", value: "36×60 inches (3×5 ft)" },
                      { label: "8-Seater Table", value: "36×84 inches (3×7 ft)" },
                      { label: "Clearance Space", value: "36 inches around table" }
                    ].map((item, idx) => (
                      <div key={idx} style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between',
                        padding: '0.8rem 1rem',
                        background: 'white',
                        borderRadius: '8px',
                        transition: 'transform 0.2s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(8px)'}
                      onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                      >
                        <span style={{ fontWeight: '600', color: '#334155' }}>{item.label}</span>
                        <span style={{ color: primaryRed, fontWeight: '700' }}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1.5rem', color: darkRed }}>Key Considerations</h3>
                  <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '1rem' }}>
                    {[
                      "Available Space: Measure circulation area",
                      "Seating Requirement: 4, 6, or 8 seater?",
                      "Storage Needs: Crockery unit, bar, or shelves?",
                      "Lighting Type: Balance natural and artificial light",
                      "Table Shape: Round, rectangular, or oval?"
                    ].map((item, idx) => (
                      <li key={idx} style={{ 
                        display: 'flex', 
                        gap: '1rem', 
                        alignItems: 'center',
                        padding: '0.8rem',
                        background: 'white',
                        borderRadius: '8px',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = primaryRed; e.currentTarget.style.color = 'white'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#475569'; }}
                      >
                        <span style={{ fontWeight: 'bold' }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Colors & Materials - Split Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '5rem' }}>
            {/* Color Combinations Section */}
            <section id="colors" ref={sectionRefs.colors} data-section="colors" style={{ scrollMarginTop: '6rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ background: primaryRed, color: 'white', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>🎨</span>
                Color Combinations That Work
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {colorCombos.map((color, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredColor(idx)}
                    onMouseLeave={() => setHoveredColor(null)}
                    style={{
                      padding: '1.2rem',
                      backgroundColor: color.bg,
                      color: color.color,
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      transform: hoveredColor === idx ? 'translateX(8px)' : 'translateX(0)',
                      boxShadow: hoveredColor === idx ? `0 5px 15px ${primaryRed}30` : 'none',
                      border: hoveredColor === idx ? `2px solid ${primaryRed}` : '2px solid transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <strong style={{ fontSize: '1.1rem' }}>{color.name}:</strong> {color.desc}
                  </div>
                ))}
              </div>
            </section>

            {/* Materials Section */}
            <section id="materials" ref={sectionRefs.materials} data-section="materials" style={{ scrollMarginTop: '6rem' }}>
              <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ background: primaryRed, color: 'white', width: '40px', height: '40px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px' }}>🧱</span>
                Materials That Elevate Interiors
              </h2>
              
              <div style={{ display: 'grid', gap: '1rem' }}>
                {materialsData.map((material, idx) => (
                  <div
                    key={idx}
                    onMouseEnter={() => setHoveredMaterial(idx)}
                    onMouseLeave={() => setHoveredMaterial(null)}
                    style={{
                      padding: '1.2rem',
                      backgroundColor: '#fff',
                      border: hoveredMaterial === idx ? `2px solid ${primaryRed}` : '1px solid #e2e8f0',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      transform: hoveredMaterial === idx ? 'translateY(-4px)' : 'translateY(0)',
                      boxShadow: hoveredMaterial === idx ? `0 10px 20px ${primaryRed}20` : 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem'
                    }}
                  >
                    <span style={{ fontSize: '2rem' }}>{material.icon}</span>
                    <div>
                      <strong style={{ fontSize: '1.1rem', color: darkRed }}>{material.name}</strong>
                      <p style={{ margin: '0.2rem 0', color: '#64748b', fontSize: '0.9rem' }}>{material.desc}</p>
                      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.3rem' }}>
                        <span style={{ fontSize: '0.8rem', background: lightRed, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{material.durability}</span>
                        <span style={{ fontSize: '0.8rem', background: lightRed, padding: '0.2rem 0.5rem', borderRadius: '4px' }}>{material.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Lighting Options Interactive Section */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              💡 Choose Your Perfect Dining Light
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {lightingOptions.map((light, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLighting(selectedLighting === idx ? null : idx)}
                  style={{
                    padding: '2rem 1rem',
                    background: selectedLighting === idx ? primaryRed : 'white',
                    color: selectedLighting === idx ? 'white' : '#475569',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedLighting === idx ? 'none' : `2px solid #e2e8f0`,
                    boxShadow: selectedLighting === idx ? `0 15px 30px ${primaryRed}40` : '0 5px 15px rgba(0,0,0,0.05)',
                    transform: selectedLighting === idx ? 'translateY(-8px)' : 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>{light.name}</h3>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.3rem' }}>Height: {light.height}</p>
                  <p style={{ fontSize: '0.9rem' }}>Effect: {light.effect}</p>
                  {selectedLighting === idx && (
                    <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>✓ Selected</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Why Professional Design */}
          <section id="professional" ref={sectionRefs.professional} data-section="professional" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: 'linear-gradient(145deg, #fef2f2, #ffffff)',
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              Why Professional Dining Room Design Matters
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 2rem' }}>
              Many homeowners invest heavily in living rooms but overlook dining spaces. The result? Poor lighting, cluttered layouts, and uncomfortable seating.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {[
                { title: "Optimized Space", icon: "📐", desc: "Perfect flow and proportions" },
                { title: "Long-lasting Materials", icon: "🧱", desc: "Quality that endures" },
                { title: "Seamless Integration", icon: "🔄", desc: "Harmony with home design" },
                { title: "Perfect Lighting", icon: "💡", desc: "Ambiance and functionality" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '2rem 1rem',
                    border: `2px solid ${primaryRed}`,
                    borderRadius: '16px',
                    textAlign: 'center',
                    color: darkRed,
                    fontWeight: '600',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    background: 'white'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = primaryRed; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = darkRed; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <div style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{item.title}</div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section - Expandable */}
          <section id="faq" ref={sectionRefs.faq} data-section="faq" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>❓</span>
              Frequently Asked Questions
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {faqData.map((faq) => (
                <div
                  key={faq.id}
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  style={{
                    padding: '1.5rem',
                    background: expandedFaq === faq.id ? lightRed : 'white',
                    borderRadius: '16px',
                    boxShadow: expandedFaq === faq.id ? `0 10px 25px ${primaryRed}20` : '0 2px 8px rgba(0,0,0,0.05)',
                    border: expandedFaq === faq.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: '600', color: '#334155', margin: 0 }}>
                      {faq.question}
                    </h3>
                    <span style={{ fontSize: '1.5rem', color: primaryRed }}>
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                  
                  {expandedFaq === faq.id && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '2px dashed #e2e8f0' }}>
                      <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '0.5rem' }}>{faq.answer}</p>
                      <span style={{ color: primaryRed, fontSize: '0.9rem', fontWeight: '600' }}>Was this helpful? ✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Final Thoughts - Conclusion */}
          <section ref={sectionRefs.conclusion} data-section="conclusion" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', textAlign: 'center' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Transform Your Dining Experience
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                Your dining room is more than furniture — it's an experience. Design it thoughtfully. Design it beautifully. And most importantly, design it to reflect your lifestyle.
              </p>
              <div style={{ 
                background: lightRed, 
                padding: '2rem', 
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '2rem auto 0'
              }}>
                <p style={{ fontSize: '1.125rem', color: darkRed, margin: 0 }}>
                  If you're planning to upgrade your dining space, partner with <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> for customized solutions tailored for contemporary homes.
                </p>
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Ready to Host inside a Style?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Let's design a dining space that sparks joy and conversation.
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

      {/* CSS Animations */}
      <style>{`
        @keyframes slideInDown {
          0% { transform: translateY(-30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        .process-step {
          transition: all 0.3s ease;
        }
        
        .process-step:hover .step-number {
          color: ${primaryRed} !important;
        }
      `}</style>
    </div>
  );
};

export default DiningRoomDesign;