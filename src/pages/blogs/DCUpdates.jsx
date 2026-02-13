import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const DCUpdates = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredUpdate, setHoveredUpdate] = useState(null);
  const [hoveredTip, setHoveredTip] = useState(null);
  const [selectedTrend, setSelectedTrend] = useState(null);
  const [showNewsletter, setShowNewsletter] = useState(false);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    updates: useRef(null),
    homeowner: useRef(null),
    howToUse: useRef(null),
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
      question: "How often should I follow interior design updates?",
      answer: "It's helpful to check updates while planning or renovating to make informed choices. For ongoing inspiration, monthly check-ins can keep you aware of new materials, color trends, and space-saving innovations that might suit your home."
    },
    {
      id: 2,
      question: "Are all trends suitable for every home?",
      answer: "No. Trends should always be adapted to your space, lifestyle, and budget. What works in a large villa may not suit a compact apartment. Our updates focus on adaptable ideas that can be customized to different home sizes and styles."
    },
    {
      id: 3,
      question: "Do design updates help with budgeting?",
      answer: "Yes. Knowing new materials and solutions can help you plan better and avoid costly changes later. Understanding what's available in different price ranges allows you to make choices that balance quality, aesthetics, and affordability."
    },
    {
      id: 4,
      question: "How do I know which updates are relevant to my home?",
      answer: "Focus on updates that address your specific needs—whether it's maximizing small spaces, incorporating smart technology, or choosing durable materials. Our updates are curated to help you identify what's practical for your situation."
    }
  ];

  // --- UPDATES DATA ---
  const updatesData = [
    {
      id: 1,
      title: "Latest Interior Design Trends",
      desc: "From colour palettes and textures to layout concepts and décor styles, we share trends that are shaping contemporary homes.",
      icon: "✨",
      details: ["Warm earth tones", "Textured walls", "Multi-functional spaces", "Biophilic elements"],
      category: "trends"
    },
    {
      id: 2,
      title: "New Materials & Finishes",
      desc: "Discover innovative materials, sustainable options, and premium finishes that enhance durability, aesthetics, and functionality.",
      icon: "🧱",
      details: ["Sustainable bamboo", "Micro-concrete", "Fluted glass", "Terrazzo"],
      category: "materials"
    },
    {
      id: 3,
      title: "Smart Living Innovations",
      desc: "Technology is redefining interiors. Learn about smart lighting, automation, space-saving solutions, and modern conveniences.",
      icon: "💡",
      details: ["Voice-controlled lighting", "Automated blinds", "Smart storage", "Energy monitoring"],
      category: "smart"
    },
    {
      id: 4,
      title: "Industry Insights",
      desc: "Get updates on interior design practices, evolving preferences, and ideas that influence how homes are designed today.",
      icon: "📊",
      details: ["Work-from-home trends", "Sustainable practices", "Color psychology", "Space optimization"],
      category: "insights"
    }
  ];

  // --- HOMEWOWNER FOCUS DATA ---
  const homeownerFocus = [
    "Practical and adaptable",
    "Suitable for Indian homes",
    "Easy to maintain",
    "Long-lasting in appeal"
  ];

  // --- BENEFITS DATA ---
  const benefits = [
    "Make smarter design decisions",
    "Discover new materials and finishes",
    "Understand evolving lifestyle needs",
    "Plan interiors that stay relevant longer"
  ];

  // --- QUICK TIPS DATA ---
  const quickTips = [
    { icon: "🎨", tip: "Start with a timeless base, add trends in accessories" },
    { icon: "📏", tip: "Measure twice, order once - accuracy saves money" },
    { icon: "💡", tip: "Layer lighting for flexibility and mood" },
    { icon: "🪴", tip: "Add plants for instant freshness and air quality" },
    { icon: "🔄", tip: "Multi-purpose furniture is worth the investment" },
    { icon: "🎯", tip: "Focus on one room at a time for better results" }
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
        {['hero', 'intro', 'updates', 'homeowner', 'howToUse', 'finalThoughts', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1600&q=80"
            alt="DC Updates"
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
                NEWS & UPDATES 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              DC Updates: What's New in Interior Design & <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Home Living</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Trends. Insights. Inspirations. Stay connected to what's new, relevant, and inspiring in the world of interiors.
            </p>
            <button 
              onClick={() => scrollToSection('updates')}
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
              Explore Updates <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'intro', label: 'Why Updates Matter', emoji: '📰' },
              { id: 'updates', label: "What's New", emoji: '✨' },
              { id: 'homeowner', label: 'For Homeowners', emoji: '🏠' },
              { id: 'howToUse', label: 'How to Use', emoji: '💡' },
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
                Why Staying Updated Matters
              </h2>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                Interior design is constantly evolving — shaped by changing lifestyles, new materials, and smarter ways of living. DC Updates keeps you connected to what's new, relevant, and inspiring in the world of interiors.
              </p>
              
              <p style={{ fontSize: '1.125rem', marginBottom: '1rem', color: '#475569', fontWeight: '600' }}>
                Today's homes are more dynamic than ever. Staying informed helps you:
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
                    <span style={{ color: primaryRed, fontSize: '1.3rem' }}>✦</span>
                    <span style={{ fontSize: '0.95rem' }}>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <p style={{ fontSize: '1.125rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, staying updated is part of creating interiors that truly work for modern living.
              </p>
            </div>
          </section>

          {/* Quick Tips Grid */}
          <section style={{ marginBottom: '4rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', textAlign: 'center' }}>
              💡 Quick Design Tips
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {quickTips.map((tip, idx) => (
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

          {/* What You'll Find Section - Interactive Cards */}
          <section id="updates" ref={sectionRefs.updates} data-section="updates" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>✨</span>
              What You'll Find in DC Updates
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
              {updatesData.map((update) => (
                <div
                  key={update.id}
                  onMouseEnter={() => setHoveredUpdate(update.id)}
                  onMouseLeave={() => setHoveredUpdate(null)}
                  onClick={() => setSelectedTrend(selectedTrend === update.id ? null : update.id)}
                  style={{
                    padding: '2rem',
                    background: hoveredUpdate === update.id || selectedTrend === update.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '24px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredUpdate === update.id || selectedTrend === update.id ? `0 20px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredUpdate === update.id || selectedTrend === update.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: selectedTrend === update.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer'
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{update.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.8rem', color: darkRed }}>{update.title}</h3>
                  <p style={{ color: '#475569', fontSize: '1rem', marginBottom: '1.2rem' }}>{update.desc}</p>
                  
                  {(hoveredUpdate === update.id || selectedTrend === update.id) && (
                    <div style={{ marginTop: '1rem' }}>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: darkRed, marginBottom: '0.5rem' }}>Key highlights:</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                        {update.details.map((detail, idx) => (
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
                      {selectedTrend === update.id && (
                        <div style={{ marginTop: '0.8rem', color: primaryRed, fontWeight: '600' }}>✓ Selected</div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Toggle */}
          <section style={{ marginBottom: '4rem', textAlign: 'center' }}>
            <button
              onClick={() => setShowNewsletter(!showNewsletter)}
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
              {showNewsletter ? 'Hide Newsletter Preview' : 'Show Newsletter Preview'}
            </button>
            
            {showNewsletter && (
              <div style={{
                background: lightRed,
                padding: '2rem',
                borderRadius: '20px',
                animation: 'slideInDown 0.5s ease',
                textAlign: 'left'
              }}>
                <h4 style={{ fontSize: '1.3rem', fontWeight: '700', color: darkRed, marginBottom: '1rem' }}>Latest Newsletter: March 2026</h4>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>📌 Top Story</p>
                    <p>Sustainable materials are leading 2026 trends—bamboo flooring, recycled glass countertops, and low-VOC paints.</p>
                  </div>
                  <div>
                    <p style={{ fontWeight: '600', marginBottom: '0.5rem' }}>🎨 Color Spotlight</p>
                    <p>Warm terracotta and sage green combinations are replacing cool greys in modern homes.</p>
                  </div>
                </div>
              </div>
            )}
          </section>

          {/* Design Updates That Matter to Homeowners */}
          <section id="homeowner" ref={sectionRefs.homeowner} data-section="homeowner" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🏠</span>
              Design Updates That Matter to Homeowners
            </h2>
            
            <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
              Not every trend suits every home. DC Updates focuses on ideas that are:
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '2rem' }}>
              {homeownerFocus.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '1.5rem',
                    background: lightRed,
                    borderRadius: '16px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    border: '2px solid transparent'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = primaryRed; e.currentTarget.style.color = 'white'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = lightRed; e.currentTarget.style.color = 'inherit'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>{item}</span>
                </div>
              ))}
            </div>
            
            <p style={{ fontSize: '1.125rem', color: '#475569', fontStyle: 'italic' }}>
              Our goal is to help you choose what works — not what simply looks good online.
            </p>
          </section>

          {/* How to Use These Updates */}
          <section id="howToUse" ref={sectionRefs.howToUse} data-section="howToUse" style={{ 
            marginBottom: '5rem', 
            padding: '3rem',
            background: lightRed,
            borderRadius: '30px',
            scrollMarginTop: '6rem'
          }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: darkRed, textAlign: 'center' }}>
              💡 How to Use These Updates
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
              {[
                { icon: "🏗️", title: "Planning New Home", desc: "Use trends as inspiration, not rules" },
                { icon: "🔨", title: "Renovating", desc: "Focus on updates about materials & layouts" },
                { icon: "🪑", title: "Upgrading Rooms", desc: "Look for room-specific ideas" },
                { icon: "💭", title: "Exploring Ideas", desc: "Save what resonates with your style" }
              ].map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '16px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-8px)'; e.currentTarget.style.boxShadow = `0 15px 25px ${primaryRed}30`; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', color: darkRed }}>{item.title}</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569' }}>{item.desc}</p>
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
                Good design evolves, but comfort and functionality remain timeless. By staying updated with interior trends and innovations, you can design spaces that feel fresh today and relevant tomorrow.
              </p>
              <p style={{ fontSize: '1.2rem', color: darkRed, textAlign: 'center', background: lightRed, padding: '1.5rem', borderRadius: '16px' }}>
                DC Updates is your window into the ideas shaping modern homes — thoughtfully curated for real living.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Stay Updated with Us</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Subscribe to get the latest trends and updates delivered to you.
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
              Get Updates →
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

export default DCUpdates;