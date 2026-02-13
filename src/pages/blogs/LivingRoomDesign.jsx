import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const LivingRoomDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredIdea, setHoveredIdea] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  
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
    storage: useRef(null),
    compact: useRef(null),
    featureWall: useRef(null),
    openConcept: useRef(null),
    trends: useRef(null),
    process: useRef(null),
    budget: useRef(null),
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
      question: "What is the ideal living room size for modern design?",
      answer: "There is no fixed size — smart layout planning can transform even compact spaces into functional and stylish living areas. The key is optimizing furniture placement, using vertical space, and selecting multi-functional pieces that work with your dimensions."
    },
    {
      id: 2,
      question: "How long does a living room interior project take?",
      answer: "Depending on customization, projects typically range from 4–8 weeks. This includes design finalization (1-2 weeks), material procurement (2 weeks), and installation (2-3 weeks). Complex customizations may take longer."
    },
    {
      id: 3,
      question: "What is the cost of living room interior design?",
      answer: "Costs vary based on materials, finishes, and design complexity. A basic living room design starts from ₹1.5 lakhs, while premium designs with custom furniture and advanced features range from ₹3-6 lakhs. A customized consultation provides accurate estimates."
    },
    {
      id: 4,
      question: "Can you design a living room with existing furniture?",
      answer: "Absolutely! We specialize in blending existing pieces with new design elements. Our designers work with your current furniture to create a cohesive look that respects your preferences while elevating the overall aesthetic."
    },
    {
      id: 5,
      question: "What are the trending living room styles in 2026?",
      answer: "Minimalist luxury, biophilic design, smart integrated spaces, and warm earthy tones with textured accents are dominating 2026 trends. We incorporate these elements based on your personal style preferences."
    }
  ];

  // --- LIVING ROOM IDEAS DATA FOR INTERACTIVE CARDS ---
  const livingIdeas = [
    {
      id: 1,
      title: "Statement Lighting",
      desc: "Chandeliers, pendant clusters, and sculptural lighting instantly elevate a space. Lighting layered across ceiling, walls, and floors adds depth and warmth.",
      icon: "💡",
      category: "lighting"
    },
    {
      id: 2,
      title: "Neutral Palettes",
      desc: "Beige, grey, and warm whites create a calm base. Add contrast with textured cushions, metallic finishes, or a vibrant accent chair.",
      icon: "🎨",
      category: "color"
    },
    {
      id: 3,
      title: "Smart Storage",
      desc: "Hidden cabinets, wall-mounted shelves, and multifunctional furniture keep clutter away while maintaining a clean aesthetic.",
      icon: "📦",
      category: "storage"
    },
    {
      id: 4,
      title: "Open Layouts",
      desc: "Merging dining and living areas creates visual continuity and improves spatial flow — ideal for modern apartments and compact homes.",
      icon: "🏛️",
      category: "layout"
    },
    {
      id: 5,
      title: "Feature Walls",
      desc: "Textured panels, bold wallpapers, or accent colors create focal points that define the room's character.",
      icon: "🧱",
      category: "feature"
    },
    {
      id: 6,
      title: "Smart Integration",
      desc: "Automated lighting, hidden tech, and integrated sound systems for a seamless modern experience.",
      icon: "🤖",
      category: "smart"
    }
  ];

  // --- COLOR TRENDS DATA ---
  const colorTrends = [
    { name: "Earthy Browns", color: "#78350f", textColor: "white", desc: "Warm, grounding, timeless" },
    { name: "Olive Green", color: "#3f6212", textColor: "white", desc: "Natural, calming, versatile" },
    { name: "Terracotta", color: "#c2410c", textColor: "white", desc: "Vibrant, earthy, welcoming" },
    { name: "Warm Beige", color: "#d6d3d1", textColor: "#1e293b", desc: "Neutral, elegant, adaptable" },
    { name: "Muted Blues", color: "#60a5fa", textColor: "white", desc: "Serene, sophisticated, cool" },
    { name: "Sage Green", color: "#84a98c", textColor: "white", desc: "Fresh, organic, peaceful" }
  ];

  // --- PROCESS STEPS DATA ---
  const processSteps = [
    { num: "01", title: "Consultation & Space Assessment", desc: "Understanding your lifestyle, preferences, and spatial requirements", icon: "🗣️" },
    { num: "02", title: "Concept Development & 3D Visualization", desc: "Photorealistic renders to visualize your dream space", icon: "🎨" },
    { num: "03", title: "Material & Finish Selection", desc: "Curated options of premium materials and finishes", icon: "🧱" },
    { num: "04", title: "Execution with Quality Checks", desc: "Professional installation with rigorous quality control", icon: "🔧" }
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
        {['hero', 'intro', 'minimalist', 'luxury', 'storage', 'compact', 'featureWall', 'openConcept', 'trends', 'process', 'budget', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1600&q=80"
            alt="Modern Living Room Design"
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
                LIVING ROOM GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Living Room Design Ideas That Redefine <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Modern Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Smart. Stylish. Seamlessly Yours. Discover design ideas that balance personality, comfort, and functionality.
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
              { id: 'minimalist', label: 'Modern Minimalist', emoji: '🌿' },
              { id: 'luxury', label: 'Luxury Contemporary', emoji: '👑' },
              { id: 'storage', label: 'Smart Storage', emoji: '📦' },
              { id: 'compact', label: 'Compact Living', emoji: '📐' },
              { id: 'featureWall', label: 'Statement Feature Wall', emoji: '🧱' },
              { id: 'openConcept', label: 'Open Concept', emoji: '🏛️' },
              { id: 'trends', label: 'Color Trends', emoji: '🎨' }
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
                Why Your Living Room Deserves Strategic Design
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    The living room is the visual anchor of your home. It sets the tone for your interiors and influences how every other space feels. Today's homeowners are moving beyond basic décor — they want smart storage solutions, multi-functional layouts, minimal yet luxurious finishes, and personalized design concepts.
                  </p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>70%</div>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>of time spent at home is in the living room</p>
                </div>
              </div>
              <div style={{ fontSize: '1.125rem', marginTop: '1.5rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we believe a well-designed living room blends aesthetics with purpose. Every element should serve a role — visually and functionally.
              </div>
            </div>
          </section>

          {/* 1. Modern Minimalist - Interactive Section */}
          <section id="minimalist" ref={sectionRefs.minimalist} data-section="minimalist" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>1</span>
                  Modern Minimalist Living Room Design
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  Clean lines. Neutral palettes. Zero clutter. Minimalism remains one of the most searched living room design trends. But modern minimalism is not about empty spaces — it's about intentional styling.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    'Soft beige, greys, and earthy tones',
                    'Concealed storage units',
                    'Wall-mounted TV panels',
                    'Layered lighting instead of bulky fixtures'
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
                <p style={{ marginTop: '1.5rem', fontStyle: 'italic', color: '#64748b', padding: '1rem', background: lightRed, borderRadius: '12px' }}>
                  This design works exceptionally well for apartments and compact urban homes where space optimization is key.
                </p>
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
                  src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?w=800&q=80"
                  alt="Modern Minimalist Living Room"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* 2. Luxury Contemporary - Interactive */}
          <section id="luxury" ref={sectionRefs.luxury} data-section="luxury" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
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
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80"
                  alt="Luxury Contemporary Living Room"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>2</span>
                  Luxury Contemporary Living Room
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  A luxury living room is about detail, not excess. Luxury today is subtle and curated — not loud. The right balance of textures elevates the entire space.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    'Statement wall panels (marble, fluted, textured)',
                    'Metallic accents (gold, brass, matte black)',
                    'Premium upholstery fabrics',
                    'Custom TV console with ambient lighting'
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

          {/* 3. Smart Storage - Split Layout */}
          <section id="storage" ref={sectionRefs.storage} data-section="storage" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>3</span>
              Smart Storage Living Room Design
            </h2>
            
            <div style={{ 
              background: '#f8fafc', 
              padding: '2.5rem', 
              borderRadius: '30px',
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center'
            }}>
              <div>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                  Urban homes demand intelligent storage. At Kryoss Interior, storage is never an afterthought. It's built into the design blueprint from day one.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {[
                    'Floating shelves',
                    'Built-in wall cabinets',
                    'Hidden drawers in seating',
                    'Modular TV units'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      padding: '1rem', 
                      background: 'white', 
                      borderRadius: '12px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: '1px solid transparent'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.borderColor = primaryRed; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.transform = 'translateY(0)'; }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ 
                borderRadius: '16px', 
                overflow: 'hidden',
                boxShadow: '0 15px 25px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <img
                  src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80"
                  alt="Smart Storage Living Room"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* 4. Compact Design - Interactive Grid */}
          <section id="compact" ref={sectionRefs.compact} data-section="compact" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
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
                  src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80"
                  alt="Compact Living Room"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>4</span>
                  Compact Living Room Design for Small Homes
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                  Small space? Big impact. Smart layout planning is more powerful than square footage.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
                  {[
                    'Light color palettes',
                    'Mirrors for depth',
                    'Wall-mounted units',
                    'Foldable/Modular furniture'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      padding: '1.2rem', 
                      background: '#fff', 
                      borderRadius: '12px',
                      border: '1px solid #e2e8f0',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.borderColor = primaryRed; e.currentTarget.style.transform = 'scale(1.05)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.transform = 'scale(1)'; }}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Feature Wall - Hero Image with Tags */}
          <section id="featureWall" ref={sectionRefs.featureWall} data-section="featureWall" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>5</span>
              Living Room with Statement Feature Wall
            </h2>
            
            <div style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              height: '400px', 
              marginBottom: '2rem',
              boxShadow: '0 20px 30px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              cursor: 'pointer'
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.01)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80"
                alt="Feature Wall Design"
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
                <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: 0 }}>
                  A feature wall transforms an ordinary living room into a design highlight, tying together the entire room theme.
                </p>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {[
                'Fluted wooden panels',
                'Textured wallpapers',
                'Backlit TV panels',
                '3D wall cladding',
                'Stone veneer',
                'Brick effect'
              ].map((item, idx) => (
                <span key={idx} style={{ 
                  padding: '0.8rem 1.5rem', 
                  background: lightRed, 
                  color: darkRed, 
                  borderRadius: '50px', 
                  fontWeight: '600',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = primaryRed; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.color = darkRed; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          {/* 6. Open Concept - Interactive */}
          <section id="openConcept" ref={sectionRefs.openConcept} data-section="openConcept" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>6</span>
                  Open Concept Living Room Layout
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  Modern homes embrace openness. Open layouts combine living, dining, and sometimes kitchen spaces — without losing individuality. The goal is seamless flow without chaos.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}>
                  {[
                    'Use rugs to define zones',
                    'Layered ceiling designs for visual separation',
                    'Coordinated color palettes',
                    'Partition elements like glass or wooden slats'
                  ].map((item, idx) => (
                    <div key={idx} style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '1rem',
                      padding: '1rem 1.5rem',
                      background: '#f8fafc',
                      borderRadius: '12px',
                      borderLeft: `4px solid ${primaryRed}`,
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.transform = 'translateX(8px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.transform = 'translateX(0)'; }}
                    >
                      <span style={{ color: primaryRed, fontSize: '1.2rem' }}>→</span>
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
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
                  alt="Open Concept Living Room"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
            </div>
          </section>

          {/* 7. Color Trends - Interactive Color Cards */}
          <section id="trends" ref={sectionRefs.trends} data-section="trends" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🎨</span>
              Colour Trends for Living Rooms in 2026
            </h2>
            
            <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem', textAlign: 'center' }}>
              The trend is moving toward warmth and comfort. These tones create inviting spaces while maintaining sophistication.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {colorTrends.map((color, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredColor(idx)}
                  onMouseLeave={() => setHoveredColor(null)}
                  onClick={() => setSelectedColor(selectedColor === idx ? null : idx)}
                  style={{
                    padding: '2rem 1.5rem',
                    borderRadius: '20px',
                    background: color.color,
                    color: color.textColor,
                    boxShadow: hoveredColor === idx ? `0 20px 30px ${primaryRed}40` : '0 10px 20px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    transform: hoveredColor === idx ? 'translateY(-8px)' : 'translateY(0)',
                    cursor: 'pointer',
                    border: selectedColor === idx ? `4px solid ${primaryRed}` : '4px solid transparent',
                    textAlign: 'center'
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem' }}>{color.name}</h3>
                  <p style={{ fontSize: '0.95rem', opacity: 0.9 }}>{color.desc}</p>
                  {hoveredColor === idx && (
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', fontWeight: '600' }}>
                      Click to select
                    </div>
                  )}
                  {selectedColor === idx && (
                    <div style={{ marginTop: '1rem', fontSize: '1.2rem' }}>✓ Selected</div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Interactive Ideas Gallery */}
          <section style={{ marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              ✨ Curated Living Room Design Ideas
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {livingIdeas.map((idea) => (
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
              How We Design Your <span style={{ color: primaryRed }}>Living Room</span>
            </h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {processSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '16px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.03)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${primaryRed}20`; e.currentTarget.style.borderLeft = `4px solid ${primaryRed}`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.03)'; e.currentTarget.style.borderLeft = '4px solid transparent'; }}
                >
                  <div style={{ 
                    minWidth: '60px', 
                    height: '60px', 
                    borderRadius: '50%', 
                    background: primaryRed, 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    fontWeight: 'bold',
                    fontSize: '1.5rem'
                  }}>
                    {step.num}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '600', color: '#334155', marginBottom: '0.3rem' }}>{step.title}</h3>
                    <p style={{ color: '#64748b', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p style={{ textAlign: 'center', marginTop: '3rem', color: '#64748b', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
              With <strong style={{ color: darkRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, you get a structured workflow, transparent communication, and precision execution.
            </p>
          </section>

          {/* Budget Friendly Section */}
          <section id="budget" ref={sectionRefs.budget} data-section="budget" style={{ 
            marginBottom: '5rem', 
            background: lightRed, 
            padding: '3rem', 
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
              <div style={{ fontSize: '4rem' }}>💰</div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1rem', color: darkRed }}>
                  Budget-Friendly Yet Premium Living Room Interiors
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1rem' }}>
                  Luxury does not always mean high cost. Strategic material selection, modular execution, and optimized layouts help maintain budget control without compromising design value.
                </p>
                <p style={{ fontSize: '1.125rem', fontWeight: '600', color: darkRed }}>
                  Our goal is to create high-impact interiors that feel custom-built — because they are.
                </p>
              </div>
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
                A living room is more than furniture placement — it's design strategy, smart storage, lighting science, and personalized aesthetics combined.
              </p>
              <div style={{ 
                background: lightRed, 
                padding: '2rem', 
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '2rem auto 0'
              }}>
                <p style={{ fontSize: '1.125rem', color: darkRed, margin: 0 }}>
                  If you're ready to elevate your home with modern living room design ideas that balance style and practicality, <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> is ready to transform your vision into reality.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Ready to Redefine Your Living Space?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Book your consultation today and redefine the way you live.
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
              Book Your Consultation →
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

export default LivingRoomDesign;