import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const DCHomeTours = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredStyle, setHoveredStyle] = useState(null);
  const [selectedTour, setSelectedTour] = useState(null);
  const [showVirtualTour, setShowVirtualTour] = useState(false);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    discover: useRef(null),
    designStyles: useRef(null),
    inspiration: useRef(null),
    finalThoughts: useRef(null),
    faq: useRef(null),
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
      question: "Are the homes shown real projects?",
      answer: "Yes, each tour highlights real homes designed for everyday living. These are actual client projects that showcase how thoughtful design transforms spaces into functional, beautiful homes."
    },
    {
      id: 2,
      question: "Can ideas from home tours be customized?",
      answer: "Absolutely. Every design element can be adapted to suit individual spaces and needs. Our designers work with you to modify layouts, colors, and materials to match your specific requirements."
    },
    {
      id: 3,
      question: "What should I focus on while viewing a home tour?",
      answer: "Pay attention to layout planning, storage solutions, lighting placement, material combinations, and how the space flows from one area to another. These details reveal the thinking behind each design."
    },
    {
      id: 4,
      question: "How often are new home tours added?",
      answer: "We regularly update our home tour collection with fresh projects. Each new tour showcases different styles, sizes, and design approaches to inspire your own home transformation."
    }
  ];

  // --- DISCOVER ITEMS DATA ---
  const discoverItems = [
    {
      id: 1,
      title: "Complete Home Experiences",
      desc: "From living rooms and kitchens to bedrooms and study areas, each tour showcases the entire home as a cohesive design story.",
      icon: "🏠",
      details: ["Living & dining flow", "Kitchen functionality", "Bedroom comfort", "Study area efficiency"]
    },
    {
      id: 2,
      title: "Smart Space Planning",
      desc: "Learn how compact apartments, villas, and family homes are designed with efficient layouts and intelligent storage solutions.",
      icon: "📐",
      details: ["Compact layouts", "Storage integration", "Traffic flow", "Multi-functional zones"]
    },
    {
      id: 3,
      title: "Material & Finish Combinations",
      desc: "Explore how colours, textures, lighting, and finishes are layered to create warmth and balance.",
      icon: "🎨",
      details: ["Color palettes", "Texture layering", "Lighting design", "Finish selections"]
    },
    {
      id: 4,
      title: "Personalized Design Choices",
      desc: "Each home reflects the lifestyle, preferences, and personality of its residents — making every tour unique.",
      icon: "✨",
      details: ["Custom elements", "Personal touches", "Lifestyle integration", "Unique features"]
    }
  ];

  // --- DESIGN STYLES DATA ---
  const designStyles = [
    { name: "Modern Minimalist", icon: "⬜", desc: "Clean lines, neutral colors, clutter-free spaces", image: "minimalist" },
    { name: "Contemporary Family", icon: "👪", desc: "Warm, functional spaces for everyday living", image: "contemporary" },
    { name: "Warm Neutral", icon: "🪵", desc: "Earthy tones, cozy textures, timeless appeal", image: "neutral" },
    { name: "Functional Urban", icon: "🏙️", desc: "Smart layouts, efficient storage, city living", image: "urban" }
  ];

  // --- BENEFITS DATA ---
  const benefits = [
    "Visualize layouts and spatial flow",
    "Understand how materials work together",
    "See storage and lighting in real settings",
    "Get ideas that suit real homes and budgets"
  ];

  // --- TOUR HIGHLIGHTS DATA ---
  const tourHighlights = [
    { room: "Living Room", feature: "Open concept with natural light", icon: "🛋️" },
    { room: "Kitchen", feature: "Modular design with smart storage", icon: "🍳" },
    { room: "Bedroom", feature: "Warm tones with hidden storage", icon: "🛏️" },
    { room: "Study", feature: "Ergonomic workspace with views", icon: "📚" }
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
        {['hero', 'intro', 'discover', 'designStyles', 'inspiration', 'finalThoughts', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=80"
            alt="Home Tours"
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
                HOME TOURS 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Home Tours: Step Inside Spaces Designed for <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Real Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Real Homes. Real Stories. Real Inspiration. Take a peek inside real homes designed by us.
            </p>
            <button 
              onClick={() => scrollToSection('discover')}
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
              Explore Home Tours <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'intro', label: 'Why Tours Matter', emoji: '🏠' },
              { id: 'discover', label: 'What You\'ll Discover', emoji: '🔍' },
              { id: 'designStyles', label: 'Design Styles', emoji: '🎨' },
              { id: 'inspiration', label: 'Inspiration', emoji: '✨' },
              { id: 'faq', label: 'FAQs', emoji: '❓' }
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
                Why Home Tours Matter
              </h2>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Every home has a story to tell. Home Tours takes you inside thoughtfully designed spaces that balance beauty, comfort, and everyday functionality. These are not just picture-perfect interiors — they are real homes created for real lifestyles.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Seeing a space in its complete form helps you understand design better than isolated images. Home tours allow you to:
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
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, every home tour reflects thoughtful planning and attention to detail — designed to support daily living.
              </p>
            </div>
          </section>

          {/* Virtual Tour Toggle */}
          <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowVirtualTour(!showVirtualTour)}
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
              {showVirtualTour ? 'Hide Virtual Tour Tips' : 'Show Virtual Tour Tips'}
            </button>
            
            {showVirtualTour && (
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                animation: 'slideInDown 0.5s ease'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>How to Take a Virtual Home Tour</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                  {tourHighlights.map((item, idx) => (
                    <div key={idx} style={{ textAlign: 'center', padding: '1rem', background: 'white', borderRadius: '12px' }}>
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                      <p style={{ fontWeight: '600', marginBottom: '0.3rem' }}>{item.room}</p>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{item.feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* What You'll Discover Section - Interactive Cards */}
          <section id="discover" ref={sectionRefs.discover} data-section="discover" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🔍</span>
              What You'll Discover in Our Home Tours
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {discoverItems.map((item) => (
                <div
                  key={item.id}
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    padding: '2rem',
                    background: hoveredItem === item.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '24px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredItem === item.id ? `0 20px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredItem === item.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: hoveredItem === item.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', color: darkRed }}>{item.title}</h3>
                  <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '1.2rem' }}>{item.desc}</p>
                  
                  {hoveredItem === item.id && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: darkRed, marginBottom: '0.5rem' }}>Key features:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {item.details.map((detail, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '0.3rem 0.8rem',
                              background: lightRed,
                              borderRadius: '50px',
                              fontSize: '0.85rem',
                              color: darkRed
                            }}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Design Styles Section - Interactive Cards */}
          <section id="designStyles" ref={sectionRefs.designStyles} data-section="designStyles" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🎨</span>
              Design Styles You'll See
            </h2>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569', textAlign: 'center' }}>
              Our home tours feature a variety of interior styles, including:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {designStyles.map((style, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStyle(idx)}
                  onMouseLeave={() => setHoveredStyle(null)}
                  onClick={() => setSelectedTour(selectedTour === idx ? null : idx)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredStyle === idx || selectedTour === idx ? lightRed : 'white',
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredStyle === idx || selectedTour === idx ? `0 15px 25px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.05)',
                    transform: hoveredStyle === idx || selectedTour === idx ? 'translateY(-4px)' : 'translateY(0)',
                    border: selectedTour === idx ? `2px solid ${primaryRed}` : '2px solid #e2e8f0',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{style.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', color: darkRed }}>{style.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>{style.desc}</p>
                  {selectedTour === idx && (
                    <div style={{ marginTop: '0.5rem', color: primaryRed, fontWeight: '600' }}>✓ Selected</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Inspiration Section */}
          <section id="inspiration" ref={sectionRefs.inspiration} data-section="inspiration" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: lightRed,
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: darkRed, textAlign: 'center' }}>
              ✨ Inspiration You Can Apply
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                  Home tours are not about copying designs — they're about understanding what works. The ideas you see can be adapted to your space, budget, and lifestyle.
                </p>
                <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                  Small details like lighting placement, storage integration, or colour balance often make the biggest difference.
                </p>
              </div>
              
              <div style={{ background: 'white', padding: '2rem', borderRadius: '20px' }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>Key Takeaways</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    "Notice how lighting creates mood",
                    "Observe storage solutions in action",
                    "See how colors flow between rooms",
                    "Watch for multi-functional furniture"
                  ].map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{ color: primaryRed }}>•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Final Thoughts */}
          <section ref={sectionRefs.finalThoughts} data-section="finalThoughts" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
                Final Thoughts
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#475569', textAlign: 'center', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                A well-designed home is best appreciated when experienced as a whole. Home Tours offer a closer look at real interiors that feel comfortable, practical, and personal.
              </p>
              <p style={{ fontSize: '1.2rem', color: darkRed, textAlign: 'center', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
                Let these spaces inspire you to imagine what's possible for your own home.
              </p>
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Start Your Home Journey</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Ready to transform your home? Get a consultation today.
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
              Get Started →
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

export default DCHomeTours;