import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const StudyRoomDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [hoveredNeed, setHoveredNeed] = useState(null);
  const [showErgonomics, setShowErgonomics] = useState(false);
  const [selectedLighting, setSelectedLighting] = useState(null);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    keyElements: useRef(null),
    differentNeeds: useRef(null),
    distractionFree: useRef(null),
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
      question: "What is the ideal size for a study room?",
      answer: "Even compact spaces can function well with smart layout planning. A minimum of 5x6 feet works well for a single-person study. For shared studies, aim for at least 8x10 feet. The key is optimizing vertical space with wall-mounted shelves and choosing compact, multi-functional furniture."
    },
    {
      id: 2,
      question: "Which colour is best for study rooms?",
      answer: "Neutral and soft shades promote calmness and focus. Light blues, soft greys, warm beiges, and muted greens are excellent choices. These colors reduce eye strain and create a serene environment. Avoid bright, stimulating colors like vibrant reds or oranges in the main workspace."
    },
    {
      id: 3,
      question: "Is natural light important in study rooms?",
      answer: "Yes, natural light improves mood, reduces eye strain, and boosts productivity. Position your desk perpendicular to windows to avoid glare on screens. Supplement with task lighting for evening work. If natural light is limited, use full-spectrum LED lights that mimic daylight."
    },
    {
      id: 4,
      question: "How do I organize a small study room?",
      answer: "Use vertical space with wall-mounted shelves, choose a corner desk to maximize floor area, install floating shelves above the desk, use magnetic boards for supplies, and opt for furniture with built-in storage like drawers under the desk or ottomans with hidden compartments."
    },
    {
      id: 5,
      question: "What ergonomic features should I look for?",
      answer: "Look for an adjustable chair with lumbar support, a desk at elbow height (28-30 inches typically), monitor at eye level, keyboard tray for proper wrist position, and footrest if needed. Your feet should rest flat on the floor with knees at 90 degrees."
    }
  ];

  // --- KEY ELEMENTS DATA ---
  const keyElements = [
    {
      id: 1,
      title: "Ergonomic Furniture",
      desc: "Comfort is essential for long hours of work or study. Proper desk height, supportive seating, and adjustable chairs help maintain posture and reduce strain.",
      icon: "🪑",
      tips: ["Adjustable height", "Lumbar support", "Armrests", "Footrest option"],
      color: primaryRed
    },
    {
      id: 2,
      title: "Smart Storage Solutions",
      desc: "An organized study room supports clear thinking. Wall-mounted shelves, drawer units, and cable management systems keep the desk surface clean and clutter-free.",
      icon: "📚",
      tips: ["Wall-mounted shelves", "Cable management", "Drawer organizers", "Floating cabinets"],
      color: primaryRed
    },
    {
      id: 3,
      title: "Balanced Lighting",
      desc: "Lighting plays a crucial role in productivity. Natural light, task lighting, and soft ambient light reduce eye strain and enhance focus.",
      icon: "💡",
      tips: ["Task lighting", "Natural light", "Ambient light", "Glare reduction"],
      color: primaryRed
    },
    {
      id: 4,
      title: "Calm Colour Palette",
      desc: "Neutral tones like soft greys or whites create a peaceful atmosphere that promotes concentration without distractions.",
      icon: "🎨",
      tips: ["Soft neutrals", "Muted tones", "Accent colors", "Matte finishes"],
      color: primaryRed
    },
    {
      id: 5,
      title: "Functional Layout Planning",
      desc: "The layout should allow easy movement while clearly defining the work zone. Compact rooms benefit from wall-mounted desks.",
      icon: "📐",
      tips: ["Traffic flow", "Zone definition", "Wall-mounted options", "Corner utilization"],
      color: primaryRed
    }
  ];

  // --- NEEDS-BASED DESIGN DATA ---
  const needsData = [
    {
      type: "For Students",
      icon: "🎓",
      features: ["Dedicated study desk", "Open shelving for books", "Notice boards or pin-up walls", "Task lighting", "Storage for stationery"],
      bg: "#fef2f2",
      color: darkRed
    },
    {
      type: "For Professionals",
      icon: "💼",
      features: ["Minimal desk setup", "Concealed storage", "Organized cable management", "Ergonomic chair", "File storage"],
      bg: "#fef2f2",
      color: darkRed
    },
    {
      type: "For Creative Spaces",
      icon: "🎨",
      features: ["Larger desk surface", "Display shelves", "Flexible seating", "Inspiration board", "Natural light priority"],
      bg: "#fef2f2",
      color: darkRed
    },
    {
      type: "For Home Office",
      icon: "🏠",
      features: ["Privacy considerations", "Video call background", "Storage for supplies", "Comfortable seating", "Good lighting"],
      bg: "#fef2f2",
      color: darkRed
    }
  ];

  // --- LIGHTING OPTIONS ---
  const lightingOptions = [
    { type: "Natural Light", benefit: "Mood enhancement, vitamin D", icon: "☀️", position: "Desk perpendicular to windows" },
    { type: "Task Lighting", benefit: "Focused illumination for work", icon: "💡", position: "Desk lamp at 15-20 inches" },
    { type: "Ambient Light", benefit: "Overall room illumination", icon: "✨", position: "Ceiling fixtures, dimmable" },
    { type: "Accent Light", benefit: "Highlight features", icon: "🔦", position: "Shelves, artwork" }
  ];

  // --- BENEFITS OF STUDY ROOM ---
  const benefits = [
    "Improve concentration and efficiency",
    "Reduce visual and mental clutter",
    "Support long working or study hours",
    "Encourage organized habits",
    "Create a dedicated space for learning"
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
        {['hero', 'intro', 'keyElements', 'differentNeeds', 'distractionFree', 'finalThoughts', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1497215842964-222b4bef97ed?w=1600&q=80"
            alt="Study Room Design"
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
                PRODUCTIVITY GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Study Room Design That Enhances <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Focus & Productivity</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Calm. Organized. Purposeful. Create a space designed for concentration, creativity, and growth.
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
              Explore Key Elements <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'intro', label: 'Why It Matters', emoji: '🎯' },
              { id: 'keyElements', label: 'Key Elements', emoji: '🔑' },
              { id: 'differentNeeds', label: 'For Different Needs', emoji: '👥' },
              { id: 'distractionFree', label: 'Distraction-Free', emoji: '🧘' },
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
                Why Study Room Design Matters
              </h2>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                A study room is more than just a desk and a chair — it's a space designed for concentration, creativity, and growth. Whether used for work, academics, or personal projects, a well-designed study area helps improve focus and reduce distractions.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#475569', fontWeight: '600' }}>
                The right study environment can:
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
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, study rooms are designed with a balance of ergonomics, storage efficiency, and aesthetic simplicity.
              </p>
            </div>
          </section>

          {/* Key Elements Section - Interactive Cards */}
          <section id="keyElements" ref={sectionRefs.keyElements} data-section="keyElements" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🔑</span>
              Key Elements of a Well-Designed Study Room
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {keyElements.map((element) => (
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
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: darkRed, marginBottom: '0.5rem' }}>Key tips:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {element.tips.map((tip, idx) => (
                          <span
                            key={idx}
                            style={{
                              padding: '0.3rem 0.8rem',
                              background: lightRed,
                              borderRadius: '50px',
                              fontSize: '0.8rem',
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

          {/* Lighting Options Interactive Section */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              💡 Choose Your Perfect Lighting Setup
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              {lightingOptions.map((light, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedLighting(selectedLighting === idx ? null : idx)}
                  style={{
                    padding: '1.5rem',
                    background: selectedLighting === idx ? primaryRed : 'white',
                    color: selectedLighting === idx ? 'white' : '#475569',
                    borderRadius: '16px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    border: selectedLighting === idx ? 'none' : `2px solid #e2e8f0`,
                    boxShadow: selectedLighting === idx ? `0 15px 30px ${primaryRed}40` : '0 5px 15px rgba(0,0,0,0.05)'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{light.icon}</div>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.3rem' }}>{light.type}</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: '0.5rem' }}>{light.benefit}</p>
                  <p style={{ fontSize: '0.8rem', opacity: 0.8 }}>{light.position}</p>
                  {selectedLighting === idx && (
                    <div style={{ marginTop: '0.5rem', fontSize: '1.2rem' }}>✓</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Ergonomics Interactive Toggle */}
          <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowErgonomics(!showErgonomics)}
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
              {showErgonomics ? 'Hide Ergonomics Guide' : 'Show Ergonomics Guide'}
            </button>
            
            {showErgonomics && (
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                animation: 'slideInDown 0.5s ease',
                textAlign: 'left'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>Ergonomic Setup Guide</h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Chair height: Feet flat on floor
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Desk height: Elbows at 90°
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Monitor at eye level
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Keyboard wrist support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Lumbar back support
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Armrests at relaxed height
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Screen 20-40 inches away
                      </li>
                      <li style={{ marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span> Take breaks every 30 min
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Different Needs Section */}
          <section id="differentNeeds" ref={sectionRefs.differentNeeds} data-section="differentNeeds" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: '#f8fafc',
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              Study Room Design for Different Needs
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {needsData.map((need, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredNeed(idx)}
                  onMouseLeave={() => setHoveredNeed(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredNeed === idx ? 'white' : need.bg,
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    transform: hoveredNeed === idx ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredNeed === idx ? `0 20px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    border: hoveredNeed === idx ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{need.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '1rem', color: need.color }}>{need.type}</h3>
                  
                  {hoveredNeed === idx ? (
                    <ul style={{ margin: 0, paddingLeft: '1.2rem', color: '#475569' }}>
                      {need.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: '0.3rem', fontSize: '0.9rem' }}>{feature}</li>
                      ))}
                    </ul>
                  ) : (
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
                      {need.features.length} key features for {need.type.toLowerCase()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Distraction-Free Environment */}
          <section id="distractionFree" ref={sectionRefs.distractionFree} data-section="distractionFree" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: 'linear-gradient(135deg, #fef2f2, #ffffff)',
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              🧘 Creating a Distraction-Free Environment
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                  A study room should feel calm and structured. Reducing noise, maintaining proper lighting, and keeping essentials within reach helps build consistency and focus.
                </p>
                <p style={{ fontSize: '1.125rem', color: '#475569', fontStyle: 'italic' }}>
                  Simple design choices often have the greatest impact on productivity.
                </p>
                
                <div style={{ marginTop: '2rem' }}>
                  <h4 style={{ fontSize: '1.2rem', fontWeight: '600', marginBottom: '1rem', color: darkRed }}>Quick Checklist:</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                    {[
                      'Noise reduction',
                      'Proper lighting',
                      'Essentials within reach',
                      'Clean desk policy',
                      'Cable management',
                      'Comfortable seating'
                    ].map((item, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: primaryRed }}>✓</span>
                        <span style={{ fontSize: '0.95rem' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div style={{
                background: 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 15px 30px rgba(0,0,0,0.05)'
              }}>
                <h4 style={{ fontSize: '1.2rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>Productivity Tips</h4>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '1rem', padding: '0.8rem', background: lightRed, borderRadius: '8px' }}>
                    <strong>Morning:</strong> Position desk to receive natural light
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.8rem', background: lightRed, borderRadius: '8px' }}>
                    <strong>Afternoon:</strong> Use task lighting to reduce eye strain
                  </li>
                  <li style={{ marginBottom: '1rem', padding: '0.8rem', background: lightRed, borderRadius: '8px' }}>
                    <strong>Evening:</strong> Warm ambient light for relaxation
                  </li>
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
                A thoughtfully designed study room enhances both efficiency and comfort. When ergonomics, storage, lighting, and layout work together, the space becomes supportive rather than distracting.
              </p>
              <p style={{ fontSize: '1.2rem', color: darkRed, textAlign: 'center', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
                Design your study room with intention — and it will support your goals every day.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Design Your Workspace</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Boost your productivity with a custom study room.
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

export default StudyRoomDesign;