import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const BedroomDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredIdea, setHoveredIdea] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [selectedView, setSelectedView] = useState('all');
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    minimalist: useRef(null),
    luxury: useRef(null),
    small: useRef(null),
    smart: useRef(null),
    kids: useRef(null),
    colors: useRef(null),
    process: useRef(null),
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
      question: "What is the best colour for a bedroom?",
      answer: "Soft neutrals, pastel tones, and earthy shades are ideal for creating a relaxing atmosphere. Light blues and greens promote calmness, while warm beiges and taupes add coziness. The key is choosing shades that help you unwind after a long day."
    },
    {
      id: 2,
      question: "How can I make my small bedroom look bigger?",
      answer: "Use light colours on walls, incorporate large mirrors to reflect light, choose sliding wardrobes instead of swing doors, opt for multi-functional furniture like storage beds, and keep window treatments minimal to maximize natural light."
    },
    {
      id: 3,
      question: "What is trending in bedroom design in 2026?",
      answer: "Smart lighting systems with mood control, textured accent walls, sustainable materials like bamboo and reclaimed wood, minimalist aesthetics with hidden storage, and biophilic elements with indoor plants are leading trends in 2026."
    },
    {
      id: 4,
      question: "How long does it take to design a bedroom interior?",
      answer: "Depending on customization level and space size, a bedroom interior typically takes 4-8 weeks. This includes design finalization (1 week), material procurement (2 weeks), and installation (2-3 weeks). Complex customizations may take longer."
    },
    {
      id: 5,
      question: "Do you offer custom wardrobes for bedrooms?",
      answer: "Yes, Kryoss Interior offers fully customized wardrobes in various finishes—laminate, acrylic, PU, and wood. We design based on your storage needs, space constraints, and aesthetic preferences."
    }
  ];

  // --- BEDROOM IDEAS DATA FOR INTERACTIVE CARDS ---
  const bedroomIdeas = [
    {
      id: 1,
      title: "Statement Headboards",
      desc: "Upholstered, panelled, or uniquely shaped headboards become the focal point while adding comfort and luxury.",
      icon: "🛏️",
      category: "luxury"
    },
    {
      id: 2,
      title: "Layered Lighting",
      desc: "Combine ambient ceiling lights, task reading lamps, and accent LED strips for complete mood control.",
      icon: "💡",
      category: "smart"
    },
    {
      id: 3,
      title: "Smart Wardrobes",
      desc: "Sensor-activated lights, internal organizers, and soft-close mechanisms enhance functionality.",
      icon: "🚪",
      category: "smart"
    },
    {
      id: 4,
      title: "Window Seats",
      desc: "Built-in seating with storage underneath creates cozy reading nooks while maximizing space.",
      icon: "🪟",
      category: "small"
    },
    {
      id: 5,
      title: "Floating Nightstands",
      desc: "Wall-mounted nightstands free up floor space and create a modern, uncluttered look.",
      icon: "⬆️",
      category: "minimalist"
    },
    {
      id: 6,
      title: "Accent Walls",
      desc: "Textured wallpaper, wood slats, or bold paint colors add depth and personality.",
      icon: "🎨",
      category: "trends"
    }
  ];

  // --- COLOR TRENDS DATA ---
  const colorTrends = [
    { name: "Beige & White", desc: "Timeless elegance and peace", color1: "#d1d5db", color2: "#ffffff", gradient: "linear-gradient(135deg, #f5f5f4 0%, #ffffff 100%)" },
    { name: "Grey & Blue", desc: "Calm sophistication", color1: "#93c5fd", color2: "#6b7280", gradient: "linear-gradient(135deg, #dbeafe 0%, #9ca3af 100%)" },
    { name: "Olive & Wood", desc: "Warmth and nature vibes", color1: "#86efac", color2: "#92400e", gradient: "linear-gradient(135deg, #dcfce7 0%, #d97706 100%)" },
    { name: "Pastel Pink & Gold", desc: "Modern luxury accents", color1: "#f9a8d4", color2: "#fbbf24", gradient: "linear-gradient(135deg, #fce7f3 0%, #fcd34d 100%)" },
    { name: "Terracotta & Cream", desc: "Earthy warmth", color1: "#c2410c", color2: "#fef3c7", gradient: "linear-gradient(135deg, #fed7aa 0%, #ffedd5 100%)" },
    { name: "Sage & White", desc: "Fresh and calming", color1: "#86efac", color2: "#ffffff", gradient: "linear-gradient(135deg, #bbf7d0 0%, #ffffff 100%)" }
  ];

  // --- KIDS ROOM IDEAS ---
  const kidsIdeas = [
    "Multi-functional furniture", "Dedicated study corners", "Vibrant yet balanced colors", "Smart toy storage",
    "Wall murals & decals", "Adjustable desks", "Creative play areas", "Soft flooring"
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
        {['hero', 'intro', 'minimalist', 'luxury', 'small', 'smart', 'kids', 'colors', 'process', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=1600&q=80"
            alt="Restful Bedroom Design"
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
                BEDROOM DESIGN GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Bedroom Design Ideas That Redefine <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Comfort & Luxury</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Smart. Stylish. Soulful. Explore inspiring bedroom interiors that transform everyday living into a luxurious experience.
            </p>
            <button 
              onClick={() => scrollToSection('minimalist')}
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
              { id: 'minimalist', label: 'Minimalist Modern', emoji: '🌿' },
              { id: 'luxury', label: 'Luxury Master Suite', emoji: '👑' },
              { id: 'small', label: 'Small Bedroom Ideas', emoji: '📐' },
              { id: 'smart', label: 'Smart Features', emoji: '💡' },
              { id: 'kids', label: 'Kids & Teens', emoji: '🧸' },
              { id: 'colors', label: 'Color Trends', emoji: '🎨' },
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
                Why Bedroom Design Matters More Than Ever
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Your bedroom is not just a space to sleep — it's your personal sanctuary. From smart storage solutions to mood-enhancing lighting, modern bedroom interiors blend aesthetics with functionality like never before.
                  </p>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Today's homeowners want more than just beautiful walls and furniture. They want clutter-free layouts, smart storage solutions, relaxing colour palettes, and multi-functional furniture.
                  </p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>67%</div>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>of people say bedroom design affects sleep quality</p>
                </div>
              </div>
              <div style={{ fontSize: '1.125rem', marginTop: '1.5rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we believe a bedroom should reflect your personality while maximizing space efficiency — whether it's a compact apartment bedroom or a spacious master suite.
              </div>
            </div>
          </section>

          {/* 1. Minimalist Modern - Interactive Section */}
          <section id="minimalist" ref={sectionRefs.minimalist} data-section="minimalist" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>1</span>
                  Minimalist Modern Bedroom Design
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  Clean lines, neutral tones, and smart storage define minimalist bedrooms. These designs create a calm and clutter-free environment — perfect for urban homes.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    'Neutral shades like beige, grey, and ivory',
                    'Platform beds with hidden storage',
                    'Soft ambient lighting',
                    'Sleek wardrobes with handle-less shutters'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '0.8rem 1rem',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'translateX(8px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: primaryRed, fontSize: '1.2rem' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
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
                <img
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80"
                  alt="Minimalist Bedroom"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* 2. Luxury Master Bedroom - Interactive */}
          <section id="luxury" ref={sectionRefs.luxury} data-section="luxury" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div style={{ 
                borderRadius: '20px', 
                overflow: 'hidden', 
                boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease',
                cursor: 'pointer',
                order: { xs: 1, md: 1 }
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src="https://images.unsplash.com/photo-1560448204-61dc36dc98c8?w=800&q=80"
                  alt="Luxury Master Bedroom"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>2</span>
                  Luxury Master Bedroom Design
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  A luxury bedroom isn't about excess — it's about curated elegance. Premium finishes and layered lighting elevate the overall ambience.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    'Upholstered or panelled headboards',
                    'Cove lighting with false ceilings',
                    'Accent walls with textures or wallpapers',
                    'Statement pendant or chandelier lighting'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '0.8rem 1rem',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'translateX(8px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: primaryRed, fontSize: '1.2rem' }}>✨</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Small Bedroom Design - Interactive Cards */}
          <section id="small" ref={sectionRefs.small} data-section="small" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>3</span>
              Small Bedroom Design Ideas
            </h2>
            
            <div style={{ background: '#f8fafc', padding: '2.5rem', borderRadius: '30px', marginTop: '1.5rem' }}>
              <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                Limited space? Smart design makes all the difference. Designing small bedrooms requires intelligent planning — something Kryoss Interior specializes in through functional layouts.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {[
                  { title: 'Wall-Mounted Units', desc: 'Compact study tables and shelves maximize floor space.', icon: '📚' },
                  { title: 'Mirrors', desc: 'Create visual depth and make the room feel larger.', icon: '🪞' },
                  { title: 'Vertical Storage', desc: 'Floor-to-ceiling wardrobes utilize every inch of height.', icon: '📦' }
                ].map((item, idx) => (
                  <div key={idx} style={{ 
                    background: 'white', 
                    padding: '2rem 1.5rem', 
                    borderRadius: '20px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 15px 30px ${primaryRed}20`; e.currentTarget.style.border = `2px solid ${primaryRed}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.03)'; e.currentTarget.style.border = '2px solid transparent'; }}
                  >
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{item.icon}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: darkRed }}>{item.title}</h3>
                    <p style={{ color: '#64748b', fontSize: '0.95rem' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Contemporary Smart Bedroom - Interactive */}
          <section id="smart" ref={sectionRefs.smart} data-section="smart" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>4</span>
                  Contemporary Bedroom With Smart Features
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  Technology is shaping modern interiors. A smart bedroom enhances convenience while maintaining aesthetic appeal.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {[
                    'Automated lighting systems for mood control',
                    'Motion sensor night lights for safety',
                    'Built-in charging stations in nightstands',
                    'Integrated wardrobe lighting for visibility'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      padding: '1rem 1.5rem', 
                      borderLeft: `4px solid ${primaryRed}`,
                      background: '#f8fafc',
                      borderRadius: '0 12px 12px 0',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'scale(1.02)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                      <strong style={{ color: darkRed }}>{item.split(' ')[0]}</strong> {item.substring(item.indexOf(' '))}
                    </div>
                  ))}
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
                <img
                  src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=800&q=80"
                  alt="Smart Contemporary Bedroom"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* 5. Kids & Teen Bedroom - Gallery with Filter */}
          <section id="kids" ref={sectionRefs.kids} data-section="kids" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>5</span>
              Kids & Teen Bedroom Design
            </h2>
            
            <div style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '450px', 
              marginBottom: '2.5rem',
              boxShadow: '0 20px 30px rgba(0,0,0,0.1)'
            }}>
              <img
                src="https://images.unsplash.com/photo-1526657782861-c948710194e7?w=1200&q=80"
                alt="Kids Bedroom Design"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '2.5rem', 
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
                color: 'white' 
              }}>
                <p style={{ fontSize: '1.3rem', maxWidth: '600px', margin: 0 }}>
                  Children's bedrooms should grow with them, encouraging creativity while maintaining organization.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
              {kidsIdeas.map((idea, idx) => (
                <div key={idx} style={{ 
                  textAlign: 'center', 
                  padding: '1rem', 
                  background: '#fff', 
                  borderRadius: '12px',
                  border: '1px solid #e2e8f0',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.borderColor = primaryRed; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {idea}
                </div>
              ))}
            </div>
          </section>

          {/* Colour Trends - Interactive Cards */}
          <section id="colors" ref={sectionRefs.colors} data-section="colors" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🎨</span>
              Trending Bedroom Colour Combinations
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {colorTrends.map((color, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredColor(idx)}
                  onMouseLeave={() => setHoveredColor(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    borderRadius: '20px',
                    background: color.gradient,
                    boxShadow: hoveredColor === idx ? `0 20px 30px ${primaryRed}30` : '0 10px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    transform: hoveredColor === idx ? 'translateY(-8px)' : 'translateY(0)',
                    cursor: 'pointer',
                    border: hoveredColor === idx ? `2px solid ${primaryRed}` : '2px solid transparent'
                  }}
                >
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <div style={{ width: '30px', height: '30px', background: color.color1, borderRadius: '50%', border: '2px solid white' }}></div>
                    <div style={{ width: '30px', height: '30px', background: color.color2, borderRadius: '50%', border: '2px solid white' }}></div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: '#1e293b' }}>{color.name}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569' }}>{color.desc}</p>
                  {hoveredColor === idx && (
                    <div style={{ marginTop: '1rem', color: darkRed, fontWeight: '600' }}>Popular choice ✓</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Ideas Gallery */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              ✨ Curated Bedroom Design Ideas
            </h2>
            
            {/* Filter Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
              {['all', 'luxury', 'smart', 'small', 'minimalist', 'trends'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedView(filter)}
                  style={{
                    padding: '0.6rem 1.5rem',
                    background: selectedView === filter ? primaryRed : 'white',
                    color: selectedView === filter ? 'white' : '#475569',
                    border: selectedView === filter ? 'none' : '1px solid #e2e8f0',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: selectedView === filter ? '600' : '400',
                    transition: 'all 0.3s ease',
                    textTransform: 'capitalize'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {bedroomIdeas
                .filter(idea => selectedView === 'all' || idea.category === selectedView)
                .map((idea) => (
                <div
                  key={idea.id}
                  onMouseEnter={() => setHoveredIdea(idea.id)}
                  onMouseLeave={() => setHoveredIdea(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredIdea === idea.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredIdea === idea.id ? `0 15px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredIdea === idea.id ? 'translateY(-5px)' : 'translateY(0)',
                    border: hoveredIdea === idea.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{idea.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: darkRed }}>{idea.title}</h3>
                  <p style={{ color: '#475569', fontSize: '0.95rem' }}>{idea.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How We Design - Process Steps */}
          <section id="process" ref={sectionRefs.process} data-section="process" style={{ 
            marginBottom: '5rem', 
            padding: '4rem 2rem', 
            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            borderRadius: '40px',
            scrollMarginTop: '6rem' 
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '3rem', color: '#1e293b', textAlign: 'center' }}>
              How We Design Bedrooms at <span style={{ color: primaryRed }}>Kryoss</span>
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {[
                { num: '01', title: 'Consultation', desc: 'Understanding lifestyle, space, and budget requirements.', icon: '🗣️' },
                { num: '02', title: 'Concept & 3D', desc: 'Photorealistic renders to help you visualize your dream space.', icon: '🎨' },
                { num: '03', title: 'Material Selection', desc: 'Premium materials customized to your preferences.', icon: '🧱' },
                { num: '04', title: 'Execution', desc: 'Professional installation with strict quality standards.', icon: '🔧' }
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
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-12px)'; e.currentTarget.style.boxShadow = `0 20px 35px ${primaryRed}20`; }}
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
                Final Thoughts
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                Your bedroom should energize you in the morning and calm you at night. The perfect blend of design, functionality, and personalization creates a space that truly feels like home.
              </p>
              <div style={{ 
                background: lightRed, 
                padding: '2rem', 
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '2rem auto 0'
              }}>
                <p style={{ fontSize: '1.125rem', color: darkRed, margin: 0 }}>
                  Whether you prefer minimalist elegance or luxury sophistication, <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> transforms ideas into thoughtfully designed living spaces.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Ready to Upgrade Your Bedroom?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Connect with us to start your transformation journey into a stylish sanctuary today.
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
              Start Your Transformation →
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

export default BedroomDesign;