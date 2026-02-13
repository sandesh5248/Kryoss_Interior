import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const DCDesignStars = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredQuality, setHoveredQuality] = useState(null);
  const [hoveredStyle, setHoveredStyle] = useState(null);
  const [selectedStar, setSelectedStar] = useState(null);
  const [showStarStory, setShowStarStory] = useState(false);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    qualities: useRef(null),
    styles: useRef(null),
    learning: useRef(null),
    stories: useRef(null),
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
      question: "What defines a great interior designer?",
      answer: "A strong vision, problem-solving ability, attention to detail, and deep understanding of client needs. Great designers balance aesthetics with functionality while respecting budget and timeline constraints."
    },
    {
      id: 2,
      question: "Can design styles be mixed?",
      answer: "Yes, when done thoughtfully, blending styles can create unique and personalized interiors. The key is maintaining a cohesive thread—through color palette, material choices, or recurring design elements that tie different styles together."
    },
    {
      id: 3,
      question: "Why should homeowners learn about design processes?",
      answer: "Understanding design helps in making better decisions, communicating effectively with designers, and achieving more satisfying results. It empowers you to participate actively in creating a home that truly reflects your personality."
    },
    {
      id: 4,
      question: "How do I choose the right designer for my project?",
      answer: "Review their portfolio to ensure their style aligns with your vision, check client testimonials, discuss your budget openly, and ensure good communication. The right designer should understand your lifestyle needs and translate them into functional design."
    }
  ];

  // --- DESIGNER QUALITIES DATA ---
  const designerQualities = [
    {
      id: 1,
      title: "A Clear Design Vision",
      desc: "Every design star has a distinct perspective. Whether minimal, contemporary, or luxury-driven, their work reflects clarity, consistency, and purpose.",
      icon: "👁️",
      details: ["Consistent aesthetic", "Purpose-driven", "Original perspective"]
    },
    {
      id: 2,
      title: "Attention to Detail",
      desc: "From material selection to lighting placement, great design lies in the details. Thoughtful finishes and precise execution elevate spaces.",
      icon: "🔍",
      details: ["Material mastery", "Precise execution", "Finishing touches"]
    },
    {
      id: 3,
      title: "Smart Problem Solving",
      desc: "Design is about solving real challenges — limited space, storage needs, or multifunctional requirements. Stars create solutions that feel effortless.",
      icon: "🧩",
      details: ["Space optimization", "Storage innovation", "Functional beauty"]
    },
    {
      id: 4,
      title: "Adaptability & Innovation",
      desc: "The best designers evolve with changing lifestyles, technology, and sustainability needs while maintaining timeless appeal.",
      icon: "⚡",
      details: ["Trend-aware", "Sustainable focus", "Future-ready"]
    }
  ];

  // --- DESIGN STYLES DATA ---
  const designStyles = [
    { name: "Minimalist Modern", icon: "⬜", desc: "Clean lines, neutral tones, clutter-free elegance", color: "#334155" },
    { name: "Contemporary Luxury", icon: "👑", desc: "Premium materials, curated pieces, sophisticated", color: "#854d0e" },
    { name: "Warm Family Homes", icon: "🏠", desc: "Comfortable, functional, welcoming spaces for all", color: "#166534" },
    { name: "Smart Urban Design", icon: "🏙️", desc: "Space-efficient, tech-integrated, city living", color: "#075985" }
  ];

  // --- LEARNING POINTS DATA ---
  const learningPoints = [
    "How designers approach space planning",
    "How materials and textures are chosen",
    "How functionality is blended with beauty",
    "How homes are designed for real life"
  ];

  // --- DESIGN STORIES DATA ---
  const designStories = [
    { title: "The Compact Family Home", desc: "Transforming a small apartment into a functional family haven with smart storage and flexible spaces." },
    { title: "The Luxury Villa Project", desc: "Blending contemporary elegance with warm, livable spaces for a growing family." },
    { title: "The Urban Studio", desc: "Creating a multifunctional workspace that doubles as a cozy home retreat." }
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
        {['hero', 'intro', 'qualities', 'styles', 'learning', 'stories', 'finalThoughts', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
            alt="Design Stars"
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
                PEOPLE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Design Stars: The Creative Minds Behind <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Inspiring Interiors</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Vision. Craft. Innovation. Meet the visionaries who shape modern living through thoughtful design.
            </p>
            <button 
              onClick={() => scrollToSection('qualities')}
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
              Meet the Stars <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'intro', label: 'Why Designers Matter', emoji: '💡' },
              { id: 'qualities', label: 'Star Qualities', emoji: '⭐' },
              { id: 'styles', label: 'Design Styles', emoji: '🎨' },
              { id: 'learning', label: 'Learning', emoji: '📚' },
              { id: 'stories', label: 'Stories', emoji: '📖' },
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
                Why Designers Matter in Interior Design
              </h2>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Every beautifully designed space begins with a creative mind that understands people, purpose, and detail. Design Stars is a celebration of designers who turn ideas into meaningful interiors — spaces that are not only visually stunning but also deeply functional.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#475569', fontWeight: '600' }}>
                Interior design is more than selecting colours and furniture. It is about:
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  "Understanding lifestyle needs",
                  "Translating ideas into functional layouts",
                  "Balancing aesthetics with usability",
                  "Creating spaces that feel personal"
                ].map((item, idx) => (
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
                    <span style={{ color: primaryRed, fontSize: '1.3rem' }}>✦</span>
                    <span style={{ fontSize: '0.95rem' }}>{item}</span>
                  </div>
                ))}
              </div>
              
              <p style={{ fontSize: '1.125rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, design is driven by people — their routines, preferences, and aspirations.
              </p>
            </div>
          </section>

          {/* Designer Qualities Section - Interactive Cards */}
          <section id="qualities" ref={sectionRefs.qualities} data-section="qualities" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>⭐</span>
              What Makes a Design Star
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {designerQualities.map((quality) => (
                <div
                  key={quality.id}
                  onMouseEnter={() => setHoveredQuality(quality.id)}
                  onMouseLeave={() => setHoveredQuality(null)}
                  style={{
                    padding: '2rem',
                    background: hoveredQuality === quality.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '24px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredQuality === quality.id ? `0 20px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredQuality === quality.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: hoveredQuality === quality.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{quality.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', color: darkRed }}>{quality.title}</h3>
                  <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '1.2rem' }}>{quality.desc}</p>
                  
                  {hoveredQuality === quality.id && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: darkRed, marginBottom: '0.5rem' }}>Key traits:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {quality.details.map((detail, idx) => (
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

          {/* Design Styles Section */}
          <section id="styles" ref={sectionRefs.styles} data-section="styles" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: lightRed,
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: darkRed, textAlign: 'center' }}>
              🎨 Exploring Signature Design Styles
            </h2>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569', textAlign: 'center' }}>
              Design stars bring diverse styles to life, including:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {designStyles.map((style, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredStyle(idx)}
                  onMouseLeave={() => setHoveredStyle(null)}
                  onClick={() => setSelectedStar(selectedStar === idx ? null : idx)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredStyle === idx || selectedStar === idx ? 'white' : 'rgba(255,255,255,0.7)',
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredStyle === idx || selectedStar === idx ? `0 15px 25px ${primaryRed}30` : '0 5px 15px rgba(0,0,0,0.05)',
                    transform: hoveredStyle === idx || selectedStar === idx ? 'translateY(-4px)' : 'translateY(0)',
                    border: selectedStar === idx ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{style.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', color: style.color }}>{style.name}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>{style.desc}</p>
                  {selectedStar === idx && (
                    <div style={{ marginTop: '0.5rem', color: primaryRed, fontWeight: '600' }}>✓ Selected</div>
                  )}
                </div>
              ))}
            </div>
            
            <p style={{ fontSize: '1.125rem', marginTop: '2rem', color: '#475569', textAlign: 'center', fontStyle: 'italic' }}>
              Each style reflects not just visual beauty but thoughtful planning.
            </p>
          </section>

          {/* Star Story Toggle */}
          <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowStarStory(!showStarStory)}
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
              {showStarStory ? 'Hide Star Story' : 'Show Star Story'}
            </button>
            
            {showStarStory && (
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                animation: 'slideInDown 0.5s ease',
                textAlign: 'left'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>The Journey of a Design Star</h4>
                <p style={{ marginBottom: '1rem' }}>Meet Priya Sharma, one of our lead designers at Kryoss Interior. With over 12 years of experience, she believes that every home tells a story.</p>
                <p>"Design is not just about making spaces look beautiful—it's about understanding how people live, what they value, and translating that into environments that nurture them daily."</p>
                <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                  <span style={{ background: 'white', padding: '0.3rem 1rem', borderRadius: '50px' }}>🏆 50+ projects</span>
                  <span style={{ background: 'white', padding: '0.3rem 1rem', borderRadius: '50px' }}>🎨 Modern specialist</span>
                </div>
              </div>
            )}
          </section>

          {/* Learning Section */}
          <section id="learning" ref={sectionRefs.learning} data-section="learning" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>📚</span>
              Learning from the Best
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                  Design Stars is not just about showcasing work — it's about learning:
                </p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {learningPoints.map((point, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1rem',
                        background: '#f8fafc',
                        borderRadius: '12px',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'translateX(8px)'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: primaryRed, fontSize: '1.3rem' }}>✦</span>
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                borderLeft: `4px solid ${primaryRed}`
              }}>
                <p style={{ fontSize: '1.1rem', color: darkRed, fontStyle: 'italic' }}>
                  "These insights help homeowners make informed design decisions and communicate better with their designers."
                </p>
              </div>
            </div>
          </section>

          {/* Design Stories Section */}
          <section id="stories" ref={sectionRefs.stories} data-section="stories" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>📖</span>
              Design Stories That Inspire
            </h2>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem', color: '#475569', textAlign: 'center' }}>
              Behind every project is a story — a client's vision, a design challenge, or a creative breakthrough.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {designStories.map((story, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '2rem 1.5rem',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '1px solid #e2e8f0'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 15px 30px ${primaryRed}20`; e.currentTarget.style.borderColor = primaryRed; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  <div style={{ fontSize: '2rem', marginBottom: '1rem', color: primaryRed }}>📌</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.8rem', color: darkRed }}>{story.title}</h4>
                  <p style={{ color: '#475569', fontSize: '0.95rem' }}>{story.desc}</p>
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
                Great interiors are shaped by thoughtful minds and skilled hands. Design Stars celebrates creativity, craftsmanship, and the passion that goes into building beautiful, livable spaces.
              </p>
              <p style={{ fontSize: '1.2rem', color: darkRed, textAlign: 'center', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
                Because behind every inspiring home, there's a designer who made it possible.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Find Your Designer</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Ready to work with the best? Contact us today.
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
              Get in Touch →
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

export default DCDesignStars;