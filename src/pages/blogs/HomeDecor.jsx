import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const HomeDecor = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoveredTip, setHoveredTip] = useState(null);
  const [selectedDecorStyle, setSelectedDecorStyle] = useState(null);
  const [showMoodBoard, setShowMoodBoard] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState(null);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    keyElements: useRef(null),
    finalThoughts: useRef(null),
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
      question: "How do I start decorating my home?",
      answer: "Start by identifying your personal style, choose a color palette (max 3 colors), and invest in key pieces that reflect your personality. Begin with one room and gradually build from there."
    },
    {
      id: 2,
      question: "What are the essential decor items?",
      answer: "Essential decor items include wall art, soft furnishings (cushions, rugs, curtains), lighting fixtures, indoor plants, and one or two statement pieces that anchor the space."
    },
    {
      id: 3,
      question: "How often should I update my decor?",
      answer: "There's no fixed rule. Some update seasonally with new textiles, others refresh every few years. Focus on timeless base pieces and update accents like cushions, throws, and art as trends or preferences change."
    }
  ];

  // --- KEY ELEMENTS DATA ---
  const decorElements = [
    {
      id: 1,
      title: "Wall Décor & Art",
      desc: "Walls offer opportunities to express creativity. Popular choices include framed artwork, mirrors to expand visual space, statement wall clocks, and textured panels.",
      icon: "🖼️",
      tips: [
        "Create a gallery wall with mixed frame sizes",
        "Use mirrors to make small rooms feel larger",
        "Textured panels add depth and interest",
        "Statement clocks as functional art"
      ]
    },
    {
      id: 2,
      title: "Soft Furnishings",
      desc: "Cushions, curtains, rugs, and throws soften a space and add comfort. Mixing textures like cotton, linen, velvet, or wool creates visual richness.",
      icon: "🛋️",
      tips: [
        "Layer different textures for depth",
        "Use curtains to frame windows elegantly",
        "Rugs define zones in open spaces",
        "Seasonal throws add warmth and variety"
      ]
    },
    {
      id: 3,
      title: "Lighting as Décor",
      desc: "Decorative lighting enhances both function and style. Table lamps, floor lamps, accent lights, and pendant fixtures add warmth and highlight key design elements.",
      icon: "💡",
      tips: [
        "Layer ambient, task, and accent lighting",
        "Use dimmers for mood control",
        "Statement pendants as focal points",
        "Highlight artwork with picture lights"
      ]
    },
    {
      id: 4,
      title: "Indoor Plants & Natural Elements",
      desc: "Greenery instantly refreshes interiors. Indoor plants, wooden accents, and natural materials bring balance and calmness into modern homes.",
      icon: "🌿",
      tips: [
        "Low-maintenance plants like snake plants",
        "Group plants for visual impact",
        "Use natural materials like wood and stone",
        "Create a dedicated plant corner"
      ]
    },
    {
      id: 5,
      title: "Statement Pieces",
      desc: "Sometimes one bold element — a unique chair, a sculptural vase, or a dramatic mirror — can define the entire space.",
      icon: "✨",
      tips: [
        "Choose one focal point per room",
        "Sculptural pieces as conversation starters",
        "Bold colors on accent furniture",
        "Unique art pieces that reflect personality"
      ]
    }
  ];

  // --- DECOR STYLES DATA ---
  const decorStyles = [
    { name: "Minimalist", icon: "⬜", desc: "Clean lines, neutral colors, less is more" },
    { name: "Bohemian", icon: "🌸", desc: "Layered textures, global influences, free-spirited" },
    { name: "Scandinavian", icon: "🪵", desc: "Light woods, cozy textiles, functional beauty" },
    { name: "Industrial", icon: "🏭", desc: "Raw materials, exposed elements, urban edge" },
    { name: "Modern Luxury", icon: "👑", desc: "Premium materials, curated pieces, sophisticated" },
    { name: "Eclectic", icon: "🎨", desc: "Mixed styles, personal expression, creative" }
  ];

  // --- DECOR TIPS DATA ---
  const decorTips = [
    { icon: "🎯", tip: "Start with a focal point in each room" },
    { icon: "🎨", tip: "Use a consistent color palette throughout" },
    { icon: "📏", tip: "Consider scale and proportion" },
    { icon: "🔄", tip: "Mix old and new pieces for character" },
    { icon: "✨", tip: "Less is often more - edit ruthlessly" },
    { icon: "🪴", tip: "Add greenery for life and freshness" }
  ];

  // --- BENEFITS DATA ---
  const benefits = [
    "Reflect your personal style",
    "Add warmth to minimal spaces",
    "Create visual layers",
    "Complete the overall interior look"
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
        {['hero', 'intro', 'keyElements', 'finalThoughts', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1600&q=80"
            alt="Home Decor"
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
                DECOR TIPS 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Home Décor Ideas That Add Personality to <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Every Corner</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Details. Texture. Character. Transform your house into a home with the right accents.
            </p>
            <button 
              onClick={() => scrollToSection('keyElements')}
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
              Explore Décor Ideas <span style={{ fontSize: '1.3rem' }}>→</span>
            </button>
          </div>
        </div>

        {/* --- INTERACTIVE TABLE OF CONTENTS WITH ACTIVE HIGHLIGHT --- */}
        <div className="toc-container" style={{ maxWidth: '900px', margin: '0 auto 4rem', padding: '2rem', background: 'white', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ background: primaryRed, color: 'white', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '8px' }}>📋</span>
            Quick Navigation
          </h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
            {[
              { id: 'intro', label: 'Why Décor Matters', emoji: '🏠' },
              { id: 'keyElements', label: '5 Key Elements', emoji: '🔑' },
              { id: 'finalThoughts', label: 'Final Thoughts', emoji: '✨' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                style={{
                  color: activeSection === item.id ? primaryRed : '#475569',
                  textDecoration: 'none',
                  padding: '0.6rem 1.2rem',
                  background: activeSection === item.id ? lightRed : '#f8fafc',
                  borderRadius: '50px',
                  border: activeSection === item.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                  transition: 'all 0.2s ease',
                  cursor: 'pointer',
                  fontWeight: activeSection === item.id ? '600' : '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  fontSize: '0.95rem'
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
                Why Home Décor Is Important
              </h2>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Décor is what transforms a house into a home. While furniture builds structure, décor adds emotion and personality. The right accents bring warmth, depth, and individuality to any space.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Modern home décor focuses on balance — not overcrowding, but carefully selecting pieces that enhance the overall design.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#475569', fontWeight: '600' }}>
                Thoughtful décor helps:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {benefits.map((benefit, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.8rem',
                      padding: '0.8rem 1rem',
                      background: 'white',
                      borderRadius: '12px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.02)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'translateX(8px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.transform = 'translateX(0)'; }}
                  >
                    <span style={{ color: primaryRed, fontSize: '1.3rem' }}>✓</span>
                    <span style={{ fontSize: '0.95rem' }}>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p style={{ fontSize: '1.125rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, décor is treated as the finishing touch that brings the entire design story together.
              </p>
            </div>
          </section>

          {/* Decor Tips Carousel */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              💡 Quick Decor Tips
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {decorTips.map((tip, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredTip(idx)}
                  onMouseLeave={() => setHoveredTip(null)}
                  style={{
                    padding: '1.5rem',
                    background: hoveredTip === idx ? lightRed : 'white',
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredTip === idx ? `0 10px 20px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.05)',
                    transform: hoveredTip === idx ? 'translateY(-4px)' : 'translateY(0)',
                    border: hoveredTip === idx ? `2px solid ${primaryRed}` : '2px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{tip.icon}</div>
                  <p style={{ fontSize: '0.95rem', color: '#475569' }}>{tip.tip}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Decor Style Selector */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              🎨 Find Your Decor Style
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {decorStyles.map((style, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDecorStyle(selectedDecorStyle === idx ? null : idx)}
                  style={{
                    padding: '1.5rem',
                    background: selectedDecorStyle === idx ? primaryRed : '#f8fafc',
                    color: selectedDecorStyle === idx ? 'white' : '#475569',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedDecorStyle === idx ? 'none' : `2px solid #e2e8f0`,
                    boxShadow: selectedDecorStyle === idx ? `0 15px 30px ${primaryRed}40` : '0 5px 15px rgba(0,0,0,0.05)',
                    transform: selectedDecorStyle === idx ? 'translateY(-4px)' : 'translateY(0)'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{style.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem' }}>{style.name}</h4>
                  <p style={{ fontSize: '0.9rem' }}>{style.desc}</p>
                  {selectedDecorStyle === idx && (
                    <div style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>✓ Selected</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Mood Board Toggle */}
          <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowMoodBoard(!showMoodBoard)}
              style={{
                background: primaryRed,
                color: 'white',
                border: 'none',
                padding: '1rem 2rem',
                borderRadius: '50px',
                fontSize: '1.1rem',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: `0 5px 15px ${primaryRed}40`,
                marginBottom: '2rem'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              {showMoodBoard ? 'Hide Mood Board Ideas' : 'Show Mood Board Ideas'}
            </button>
            
            {showMoodBoard && (
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                animation: 'slideInDown 0.5s ease'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>Creating Your Mood Board</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>📸</div>
                    <p style={{ fontWeight: '600' }}>Step 1: Collect</p>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Gather inspiring images</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎨</div>
                    <p style={{ fontWeight: '600' }}>Step 2: Curate</p>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Identify color schemes</p>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>✨</div>
                    <p style={{ fontWeight: '600' }}>Step 3: Create</p>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>Visualize your space</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* 5 Key Elements - Interactive Cards */}
          <section id="keyElements" ref={sectionRefs.keyElements} data-section="keyElements" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🔑</span>
              5 Key Elements of Home Décor
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {decorElements.map((element) => (
                <div
                  key={element.id}
                  onMouseEnter={() => setHoveredElement(element.id)}
                  onMouseLeave={() => setHoveredElement(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredElement === element.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '24px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredElement === element.id ? `0 20px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredElement === element.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: hoveredElement === element.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{element.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: '700', marginBottom: '0.8rem', color: darkRed }}>{element.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '1.2rem' }}>{element.desc}</p>
                  
                  {hoveredElement === element.id && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: darkRed, marginBottom: '0.5rem' }}>Pro tips:</div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {element.tips.map((tip, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '0.4rem 0.8rem',
                              background: lightRed,
                              borderRadius: '8px',
                              fontSize: '0.85rem',
                              color: darkRed
                            }}
                          >
                            {tip}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Quick Decor Checklist */}
          <section style={{ marginBottom: '4rem', background: lightRed, padding: '2.5rem', borderRadius: '30px' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: darkRed, textAlign: 'center' }}>
              ✓ Quick Decor Checklist
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {[
                "Choose a color palette (max 3 colors)",
                "Select 1-2 statement pieces",
                "Add layers with textiles",
                "Incorporate different light sources",
                "Include personal items",
                "Add greenery for freshness",
                "Create vignettes on shelves",
                "Edit - remove what doesn't work"
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.8rem',
                    padding: '1rem',
                    background: 'white',
                    borderRadius: '12px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = primaryRed; e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#475569'; }}
                >
                  <span style={{ fontSize: '1.2rem' }}>✓</span>
                  <span style={{ fontSize: '0.95rem' }}>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* FAQ Section - Expandable */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              ❓ Frequently Asked Questions
            </h3>
            
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
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#334155', margin: 0 }}>
                      {faq.question}
                    </h4>
                    <span style={{ fontSize: '1.5rem', color: primaryRed }}>
                      {expandedFaq === faq.id ? '−' : '+'}
                    </span>
                  </div>
                  
                  {expandedFaq === faq.id && (
                    <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '2px dashed #e2e8f0' }}>
                      <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '0.5rem' }}>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Final Thoughts */}
          <section ref={sectionRefs.finalThoughts} data-section="finalThoughts" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
                Final Thoughts
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#475569', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                Home décor is not about filling empty spaces — it's about choosing elements that reflect who you are. When done thoughtfully, décor transforms interiors from simple to soulful.
              </p>
              <p style={{ fontSize: '1.2rem', color: darkRed, textAlign: 'center', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
                Small details make a big difference. And the right décor choices ensure your home feels complete, warm, and uniquely yours.
              </p>
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Refresh Your Home</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Ready to add a personal touch to your space?
            </p>
            <a 
              href="/contact-us" 
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
              Contact Us →
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
      `}</style>
    </div>
  );
};

export default HomeDecor;