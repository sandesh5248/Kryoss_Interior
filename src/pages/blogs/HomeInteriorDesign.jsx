import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const HomeInteriorDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredTrend, setHoveredTrend] = useState(null);
  const [hoveredLivingIdea, setHoveredLivingIdea] = useState(null);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    livingRoom: useRef(null),
    modularKitchen: useRef(null),
    bedroom: useRef(null),
    smallHomes: useRef(null),
    trends: useRef(null),
    process: useRef(null),
    benefits: useRef(null),
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
      question: "What is the average cost of home interior design in India?",
      answer: "Costs vary depending on size, materials, and customization. For a 2BHK, modular interiors typically range from ₹3-5 lakhs for basic designs and ₹6-10 lakhs for premium finishes. Modular solutions offer better cost control compared to traditional carpentry."
    },
    {
      id: 2,
      question: "How long does a home interior project take?",
      answer: "On average, 6–12 weeks depending on scope and complexity. A full home interior includes design finalization (1-2 weeks), material procurement (2-3 weeks), and installation (3-5 weeks). The timeline is clearly communicated during consultation."
    },
    {
      id: 3,
      question: "Is modular interior better than traditional carpentry?",
      answer: "Modular interiors provide precision engineering, faster installation (40% faster), standardized quality, and factory-finished components. They also offer easier maintenance and the flexibility to reconfigure modules in the future. Traditional carpentry offers more on-site customization but takes longer."
    },
    {
      id: 4,
      question: "Do you provide warranty on interiors?",
      answer: "Yes, Kryoss Interior provides comprehensive warranty on modular products - typically 5 years on materials and 1 year on installation. Hardware like channels and hinges come with extended warranties."
    }
  ];

  // --- LIVING ROOM IDEAS DATA ---
  const livingIdeas = [
    {
      id: 1,
      title: "Statement Lighting",
      desc: "Chandeliers, pendant clusters, and sculptural lighting instantly elevate a space. Lighting layered across ceiling, walls, and floors adds depth and warmth.",
      icon: "💡",
      color: primaryRed
    },
    {
      id: 2,
      title: "Neutral Palettes & Accents",
      desc: "Beige, grey, and warm whites create a calm base. Add contrast with textured cushions, metallic finishes, or a vibrant accent chair.",
      icon: "🎨",
      color: primaryRed
    },
    {
      id: 3,
      title: "Smart Storage Integration",
      desc: "Hidden cabinets, wall-mounted shelves, and multifunctional furniture keep clutter away while maintaining a clean aesthetic.",
      icon: "📦",
      color: primaryRed
    },
    {
      id: 4,
      title: "Open-Concept Layouts",
      desc: "Merging dining and living areas creates visual continuity and improves spatial flow — ideal for modern apartments and compact homes.",
      icon: "🏛️",
      color: primaryRed
    }
  ];

  // --- TRENDS DATA ---
  const trendsData = [
    { id: 1, icon: "✨", title: "Minimal Luxe", desc: "Clean lines with premium textures like marble, brushed gold, and velvet accents.", color: primaryRed },
    { id: 2, icon: "🌱", title: "Sustainable", desc: "Eco-friendly materials, recycled wood, energy-efficient lighting, and low-VOC paints.", color: "#10b981" },
    { id: 3, icon: "🏠", title: "Smart Homes", desc: "Integrated lighting automation, smart curtains, and app-controlled appliances.", color: "#f59e0b" },
    { id: 4, icon: "🌿", title: "Biophilic", desc: "Indoor plants, natural textures, and organic materials to improve well-being.", color: "#059669" }
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
        {['hero', 'intro', 'livingRoom', 'modularKitchen', 'bedroom', 'smallHomes', 'trends', 'process', 'benefits', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt="Modern Home Interior Design"
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
                HOME INTERIOR GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Home Interior Design Ideas That Redefine <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Modern Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Design Smarter. Live Better. Discover powerful, practical, and trend-forward ideas that transform everyday living into an experience.
            </p>
            <button 
              onClick={() => scrollToSection('livingRoom')}
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
              Explore Living Room Ideas <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'livingRoom', label: 'Living Room Design', emoji: '🛋️' },
              { id: 'modularKitchen', label: 'Modular Kitchens', emoji: '🍳' },
              { id: 'bedroom', label: 'Bedroom Inspirations', emoji: '🛏️' },
              { id: 'smallHomes', label: 'Space-Saving Ideas', emoji: '📐' },
              { id: 'trends', label: '2026 Design Trends', emoji: '✨' },
              { id: 'process', label: 'Design Process', emoji: '⚙️' }
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
                Why Modern Home Interiors Matter Today
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Your home should not just look beautiful — it should work beautifully. From space-saving layouts to mood-enhancing lighting, modern interior design is about creating homes that adapt to your lifestyle.
                  </p>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    Today's homes are multifunctional. They are offices, entertainment zones, relaxation hubs, and social spaces — all in one.
                  </p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>78%</div>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>of people say home design affects their productivity and mood</p>
                </div>
              </div>
              <p style={{ fontSize: '1.125rem', marginTop: '1.5rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, every home is designed with a balance of aesthetics, practicality, and long-term value.
              </p>
            </div>
          </section>

          {/* Living Room Section - Interactive Cards */}
          <section id="living-room" ref={sectionRefs.livingRoom} data-section="livingRoom" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🛋️</span>
              Living Room Interior Design Ideas
            </h2>
            
            <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
                alt="Modern Living Room Interior"
                style={{ width: '100%', height: '450px', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', padding: '2rem', color: 'white' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: '600' }}>Modern Living Room • Kryoss Interior</span>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {livingIdeas.map((idea) => (
                <div
                  key={idea.id}
                  onMouseEnter={() => setHoveredLivingIdea(idea.id)}
                  onMouseLeave={() => setHoveredLivingIdea(null)}
                  style={{
                    padding: '2rem',
                    background: hoveredLivingIdea === idea.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredLivingIdea === idea.id ? `0 15px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredLivingIdea === idea.id ? 'translateY(-5px)' : 'translateY(0)',
                    border: hoveredLivingIdea === idea.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{idea.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.8rem', color: idea.color }}>{idea.title}</h3>
                  <p style={{ color: '#475569', fontSize: '1rem', lineHeight: '1.6' }}>{idea.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Modular Kitchen Section - Split Interactive Layout */}
          <section id="modular-kitchen" ref={sectionRefs.modularKitchen} data-section="modularKitchen" style={{ marginBottom: '4rem', padding: '3rem', backgroundColor: '#f8fafc', borderRadius: '30px', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🍳</span>
              Modular Kitchen Interior Ideas
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&q=80"
                  alt="Modern Modular Kitchen"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[1,2].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: 'white', borderRadius: '16px', transition: 'all 0.3s ease' }}
                         onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 8px 20px ${primaryRed}20`}
                         onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                      <span style={{ background: primaryRed, color: 'white', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{item}</span>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155', marginBottom: '0.3rem' }}>
                          {item === 1 ? 'Handleless Cabinets' : 'Smart Layout Planning'}
                        </h4>
                        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                          {item === 1 
                            ? 'Minimalistic cabinetry enhances visual flow and keeps the kitchen looking sophisticated.' 
                            : 'Choose from L-shaped, U-shaped, parallel, or island layouts based on space and workflow efficiency.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
              <div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  {[3,4].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: 'white', borderRadius: '16px', transition: 'all 0.3s ease' }}
                         onMouseEnter={(e) => e.currentTarget.style.boxShadow = `0 8px 20px ${primaryRed}20`}
                         onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}>
                      <span style={{ background: primaryRed, color: 'white', width: '32px', height: '32px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>{item}</span>
                      <div>
                        <h4 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#334155', marginBottom: '0.3rem' }}>
                          {item === 3 ? 'High-Utility Storage' : 'Durable Finishes'}
                        </h4>
                        <p style={{ color: '#475569', fontSize: '0.95rem' }}>
                          {item === 3 
                            ? 'Pull-out pantries, corner carousel units, cutlery organizers, and tall cabinets maximize every inch.' 
                            : 'Quartz countertops, anti-scratch laminates, and moisture-resistant boards ensure long-term performance.'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }}
                   onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                   onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                <img
                  src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&q=80"
                  alt="Modular Kitchen Finishes"
                  style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div style={{ marginTop: '2.5rem', padding: '1.5rem', background: lightRed, borderRadius: '16px', textAlign: 'center', borderLeft: `6px solid ${primaryRed}` }}>
              <p style={{ fontSize: '1rem', color: darkRed, fontWeight: '500' }}>
                ✨ Homes designed by Kryoss Interior managed by Clink Consultancy Services Private Limited integrate both elegance and ergonomics in kitchen spaces.
              </p>
            </div>
          </section>

          {/* Bedroom Section - Gallery Style */}
          <section id="bedroom" ref={sectionRefs.bedroom} data-section="bedroom" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🛏️</span>
              Bedroom Interior Design Inspirations
            </h2>
            
            <div style={{ borderRadius: '20px', overflow: 'hidden', marginBottom: '2.5rem', boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}>
              <img
                src="https://images.unsplash.com/photo-1616594039964-40891a90b3b5?w=1200&q=80"
                alt="Cozy Modern Bedroom"
                style={{ width: '100%', height: '400px', objectFit: 'cover' }}
              />
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { title: 'Layered Lighting', desc: 'Warm bedside lamps combined with indirect ceiling lights create a relaxing ambiance.', icon: '💡' },
                { title: 'Sliding Wardrobes', desc: 'Glossy or matte-finish wardrobes with sliding shutters save space while adding style.', icon: '🚪' },
                { title: 'Upholstered Headboards', desc: 'Textured or padded headboards bring luxury and comfort to contemporary bedrooms.', icon: '🛏️' },
                { title: 'Hidden Storage Beds', desc: 'Hydraulic storage beds are perfect for maximizing compact spaces significantly.', icon: '📦' }
              ].map((item, idx) => (
                <div key={idx} style={{ 
                  padding: '2rem', 
                  background: '#fff', 
                  border: '1px solid #e2e8f0', 
                  borderRadius: '20px',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 15px 30px ${primaryRed}20`; e.currentTarget.style.borderColor = primaryRed; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem', color: primaryRed }}>{item.title}</h3>
                  <p style={{ color: '#475569' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Small Homes Space Saving - Interactive Tiles */}
          <section id="small-homes" ref={sectionRefs.smallHomes} data-section="smallHomes" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b' }}>
              📐 Space-Saving Ideas for Small Homes
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
              {[
                { bg: '#fef2f2', color: darkRed, title: 'Smart Furniture', items: ['Wall-Mounted Study Units: Compact desks that fold away', 'Multi-Functional Furniture: Sofa-cum-beds, storage ottomans'] },
                { bg: '#f0fdf4', color: '#16a34a', title: 'Visual Tricks', items: ['Vertical Storage: Tall cabinets maximize limited floor area', 'Mirrors: Strategically placed mirrors create illusion of space'] }
              ].map((section, idx) => (
                <div key={idx} style={{ 
                  padding: '2rem', 
                  backgroundColor: section.bg, 
                  borderRadius: '24px',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; e.currentTarget.style.boxShadow = `0 20px 30px ${primaryRed}20`; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1.5rem', color: section.color }}>{section.title}</h3>
                  <ul style={{ fontSize: '1.125rem', color: '#475569', paddingLeft: '1.5rem' }}>
                    {section.items.map((item, i) => (
                      <li key={i} style={{ marginBottom: '1.2rem', lineHeight: '1.6' }}>
                        <strong>{item.split(':')[0]}:</strong> {item.split(':')[1]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Trends 2026 - Interactive Cards */}
          <section id="trends" ref={sectionRefs.trends} data-section="trends" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', textAlign: 'center' }}>
              ✨ Trending Interior Design Styles in 2026
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
              {trendsData.map((trend) => (
                <div
                  key={trend.id}
                  onMouseEnter={() => setHoveredTrend(trend.id)}
                  onMouseLeave={() => setHoveredTrend(null)}
                  className="trend-card"
                  style={{
                    padding: '2rem 1.5rem',
                    textAlign: 'center',
                    background: hoveredTrend === trend.id ? '#ffffff' : '#f8fafc',
                    border: hoveredTrend === trend.id ? `2px solid ${trend.color}` : '2px solid #e2e8f0',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    transform: hoveredTrend === trend.id ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: hoveredTrend === trend.id ? `0 15px 30px ${trend.color}20` : 'none',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{trend.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.8rem', color: '#334155' }}>{trend.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: '1.5' }}>{trend.desc}</p>
                  {hoveredTrend === trend.id && (
                    <div style={{ marginTop: '1rem', fontSize: '0.9rem', color: trend.color, fontWeight: '600' }}>
                      Learn more →
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Process Section - Timeline Style */}
          <section id="process" ref={sectionRefs.process} data-section="process" style={{ 
            marginBottom: '5rem', 
            padding: '4rem 2rem', 
            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            borderRadius: '40px',
            scrollMarginTop: '6rem' 
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b', textAlign: 'center' }}>
              How a Professional Interior Design Process Works
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 3rem' }}>
              Leading interior brands follow a structured approach that ensures clarity, quality, and timely delivery.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { num: '01', title: 'Consultation & Requirement Analysis', desc: 'Understanding lifestyle, preferences, and budget.', icon: '🗣️' },
                { num: '02', title: 'Concept & 3D Design', desc: 'Photorealistic renders to visualize your dream home before execution.', icon: '🎨' },
                { num: '03', title: 'Material Selection', desc: 'Curated options of finishes, fabrics, laminates, and hardware.', icon: '🧱' },
                { num: '04', title: 'Factory Precision Manufacturing', desc: 'Modular units produced with accuracy for durability.', icon: '🏭' },
                { num: '05', title: 'Hassle-Free Installation', desc: 'On-site execution managed by experienced professionals.', icon: '🔧' }
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="process-row"
                  style={{
                    display: 'flex',
                    gap: '2rem',
                    alignItems: 'center',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateX(10px)'; e.currentTarget.style.boxShadow = `0 10px 25px ${primaryRed}20`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateX(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', minWidth: '60px', textAlign: 'center' }}>{step.icon}</div>
                  <div>
                    <div style={{ fontSize: '1rem', fontWeight: '700', color: primaryRed, marginBottom: '0.3rem' }}>STEP {step.num}</div>
                    <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#334155', marginBottom: '0.3rem' }}>{step.title}</h3>
                    <p style={{ color: '#64748b', margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <p style={{ marginTop: '3rem', textAlign: 'center', fontWeight: '600', color: '#334155', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
              ✅ This systematic process ensures that every project by Kryoss Interior managed by Clink Consultancy Services Private Limited delivers consistent quality and transparency.
            </p>
          </section>

          {/* Benefits Section - Animated */}
          <section id="benefits" ref={sectionRefs.benefits} data-section="benefits" style={{ 
            marginBottom: '4rem', 
            background: 'linear-gradient(135deg, #1e293b, #0f172a)', 
            padding: '3rem', 
            borderRadius: '30px', 
            color: 'white',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', textAlign: 'center' }}>
              ⭐ Benefits of Choosing Expert Interior Designers
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
              {[
                'Optimized space utilization',
                'Budget control with cost transparency',
                'Professional project management',
                'Access to premium materials',
                'Time-bound delivery',
                'Quality assurance & warranty'
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    padding: '1rem',
                    background: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.background = `${primaryRed}4D`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
                >
                  <span style={{ color: primaryRed, fontSize: '1.8rem' }}>✓</span>
                  <span style={{ fontSize: '1rem', fontWeight: '500' }}>{benefit}</span>
                </div>
              ))}
            </div>
            
            <p style={{ textAlign: 'center', marginTop: '2.5rem', opacity: 0.9, fontSize: '1.1rem', fontStyle: 'italic' }}>
              Professional interior design is not an expense — it is an investment in comfort and property value.
            </p>
          </section>

          {/* FAQ Section - Expandable */}
          <section id="faq" ref={sectionRefs.faq} data-section="faq" style={{ marginBottom: '4rem', scrollMarginTop: '6rem' }}>
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

          {/* Conclusion */}
          <section ref={sectionRefs.conclusion} data-section="conclusion" style={{ marginBottom: '6rem', scrollMarginTop: '6rem' }}>
            <div style={{ background: 'white', padding: '3rem', borderRadius: '30px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
              <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b' }}>
                Transform Your Home Into a Timeless Space
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    A well-designed home improves everyday living. Whether you are renovating or designing from scratch, thoughtful planning makes all the difference.
                  </p>
                  <p style={{ fontSize: '1.125rem', color: '#475569' }}>
                    <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> brings innovation, precision, and modern aesthetics together to create homes that feel personal, practical, and premium.
                  </p>
                </div>
                <div style={{ background: lightRed, padding: '2rem', borderRadius: '20px', textAlign: 'center' }}>
                  <span style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed }}>10+</span>
                  <p style={{ color: darkRed, marginTop: '0.5rem' }}>Years of excellence in interior design</p>
                </div>
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Ready to Design Your Dream Home?</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Let's build a space that truly reflects you. Get a consultation today.
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
              Get a Free Consultation →
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
        
        .gallery-caption {
          transition: opacity 0.3s ease;
        }
        
        div:hover > .gallery-caption {
          opacity: 1 !important;
        }
        
        .process-row:hover .step-num {
          color: ${primaryRed} !important;
          transition: color 0.3s ease;
        }
      `}</style>
    </div>
  );
};

export default HomeInteriorDesign;