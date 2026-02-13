import React, { useState, useEffect, useRef } from 'react';
import './BlogArticle.css';

const KidsBedroomDesign = () => {
  // --- INTERACTIVE STATE MANAGEMENT ---
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [hoveredTheme, setHoveredTheme] = useState(null);
  const [hoveredColor, setHoveredColor] = useState(null);
  const [hoveredIdea, setHoveredIdea] = useState(null);
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('all');
  const [showSafetyChecklist, setShowSafetyChecklist] = useState(false);
  
  // Primary red color
  const primaryRed = '#dc2626';
  const lightRed = '#fee2e2';
  const darkRed = '#b91c1c';
  const redGradient = 'linear-gradient(135deg, #dc2626, #b91c1c)';

  const sectionRefs = {
    hero: useRef(null),
    intro: useRef(null),
    themes: useRef(null),
    study: useRef(null),
    storage: useRef(null),
    bunks: useRef(null),
    safety: useRef(null),
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
      question: "How do I design a room that grows with my child?",
      answer: "Invest in neutral, high-quality furniture (beds, wardrobes) and use easily changeable decor (bedding, rugs, wall art) to update themes. Choose modular furniture that adapts to different ages—like convertible cribs and adjustable desks."
    },
    {
      id: 2,
      question: "Is wallpaper safe for kids' rooms?",
      answer: "Yes! We recommend non-toxic, peel-and-stick wallpapers which are safe and easy to replace as tastes change. These are VOC-free and can be removed without damaging walls when your child outgrows the theme."
    },
    {
      id: 3,
      question: "What is the best flooring for a playroom?",
      answer: "Wooden flooring with large, soft rugs is ideal—it's warm, easy to clean, and provides a soft surface for play. For extra cushioning, consider foam mat tiles that can be arranged in colorful patterns."
    },
    {
      id: 4,
      question: "How can I maximize storage in a small kids' room?",
      answer: "Use vertical space with tall shelving units, under-bed storage drawers, wall-mounted bins, and multi-functional furniture like beds with built-in drawers or loft beds with desk space underneath."
    },
    {
      id: 5,
      question: "What safety features should every kids' room have?",
      answer: "Rounded corners on furniture, anchored heavy furniture to walls, soft-close drawers, window guards, outlet covers, non-toxic paints, and secure cordless window coverings are essential safety features."
    }
  ];

  // --- THEMES DATA ---
  const themesData = [
    {
      id: 1,
      title: "Space Explorer",
      desc: "Starry ceilings, rocket shelves, and glow-in-the-dark planets. Perfect for future astronauts.",
      icon: "🚀",
      ageGroup: "3-10",
      color: "#1e3a8a"
    },
    {
      id: 2,
      title: "Enchanted Forest",
      desc: "Earthy greens, cozy reading nooks, and whimsical animal friends.",
      icon: "🌳",
      ageGroup: "3-8",
      color: "#166534"
    },
    {
      id: 3,
      title: "Underwater Adventure",
      desc: "Ocean blues, fish-shaped pillows, and wave-patterned bedding.",
      icon: "🐠",
      ageGroup: "4-10",
      color: "#075985"
    },
    {
      id: 4,
      title: "Jungle Safari",
      desc: "Animal prints, leafy greens, and adventure-themed decor.",
      icon: "🦁",
      ageGroup: "3-9",
      color: "#854d0e"
    },
    {
      id: 5,
      title: "Princess Castle",
      desc: "Soft pinks, twinkling lights, and canopy beds fit for royalty.",
      icon: "👑",
      ageGroup: "3-8",
      color: "#831843"
    },
    {
      id: 6,
      title: "Minimalist Scandi",
      desc: "Neutral tones with pops of color. Clean, calm, and timeless.",
      icon: "🌿",
      ageGroup: "0-12",
      color: "#64748b"
    }
  ];

  // --- STUDY ZONE IDEAS ---
  const studyIdeas = [
    { icon: "📚", title: "Adjustable Desks", desc: "Ergonomic desks that grow with your child" },
    { icon: "📦", title: "Floating Shelves", desc: "Space-saving storage for books and supplies" },
    { icon: "📌", title: "Pin Boards", desc: "Display art, reminders, and achievements" },
    { icon: "💡", title: "Task Lighting", desc: "Proper lighting for reading and homework" }
  ];

  // --- STORAGE SOLUTIONS ---
  const storageIdeas = [
    { title: "Low-Height Bins", desc: "Easy for little hands to reach", icon: "🧺" },
    { title: "Under-Bed Drawers", desc: "Perfect for puzzles and bulky items", icon: "🛏️" },
    { title: "Display Shelves", desc: "Showcase favorite toys and collections", icon: "📦" },
    { title: "Wall-Mounted Organizers", desc: "Keep items off the floor", icon: "🧸" },
    { title: "Toy Chests", desc: "Bench-style seating with storage inside", icon: "🪑" },
    { title: "Book Ledges", desc: "Face-out book display for easy selection", icon: "📖" }
  ];

  // --- BUNK BED FEATURES ---
  const bunkFeatures = [
    "Space Saving", "Fun Factor", "Built-in Storage", "Adventure Style",
    "Study Space Below", "Tent Canopy", "Slides", "Twin over Full"
  ];

  // --- COLOR PSYCHOLOGY DATA ---
  const colorPsychology = [
    { name: "Blue & Green", desc: "Calming, improves concentration. Great for study zones.", bg: "#eff6ff", accent: "#3b82f6", text: "#1e3a8a" },
    { name: "Yellow & Orange", desc: "Energetic and cheerful. Stimulating creativity.", bg: "#fefce8", accent: "#eab308", text: "#713f12" },
    { name: "Lavender & Pink", desc: "Soothing and comforting. Promotes restful sleep.", bg: "#faf5ff", accent: "#a855f7", text: "#581c87" },
    { name: "Neutrals", desc: "Versatile backdrop for colorful toys and art.", bg: "#f8fafc", accent: "#64748b", text: "#334155" },
    { name: "Red & Warm Tones", desc: "Energizing and attention-grabbing. Use as accents.", bg: "#fee2e2", accent: "#dc2626", text: "#991b1b" },
    { name: "Purple & Magenta", desc: "Creative and imaginative. Sparks artistic expression.", bg: "#f3e8ff", accent: "#9333ea", text: "#581c87" }
  ];

  // --- SAFETY CHECKLIST ---
  const safetyChecklist = [
    "Rounded corners on furniture",
    "Furniture anchored to walls",
    "Soft-close drawers and doors",
    "Non-toxic, low-VOC paints",
    "Secure outlet covers",
    "Window guards on upper floors",
    "Cordless window coverings",
    "Non-slip rugs and mats",
    "Lead-free materials only",
    "Child-safe door stoppers"
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
        {['hero', 'intro', 'themes', 'study', 'storage', 'bunks', 'safety', 'colors', 'process', 'faq', 'cta'].map((section) => (
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
            src="https://images.unsplash.com/photo-1596768783492-9a64e266f07d?w=1600&q=80"
            alt="Creative Kids Bedroom Design"
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
                KIDS ROOM GUIDE 2026
              </span>
            </div>
            <h1 className="blog-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.2rem)', fontWeight: '800', marginBottom: '1.5rem', color: '#ffffff', maxWidth: '900px', lineHeight: '1.2', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
              Kids Bedroom Ideas That Spark <span style={{ color: primaryRed, borderBottom: `4px solid ${primaryRed}`, paddingBottom: '0.2rem' }}>Creativity & Joy</span>
            </h1>
            <p className="blog-subtitle" style={{ fontSize: '1.35rem', color: '#f1f5f9', maxWidth: '700px', lineHeight: '1.6', marginBottom: '2rem', textShadow: '0 1px 5px rgba(0,0,0,0.2)' }}>
              Design a space where imagination runs wild. Explore fun, functional, and safe bedroom ideas that grow with your child.
            </p>
            <button 
              onClick={() => scrollToSection('themes')}
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
              Explore Themes <span style={{ fontSize: '1.3rem' }}>→</span>
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
              { id: 'themes', label: 'Playful Themes', emoji: '🎨' },
              { id: 'study', label: 'Smart Study Zones', emoji: '📚' },
              { id: 'storage', label: 'Toy Storage', emoji: '🧸' },
              { id: 'bunks', label: 'Bunk Beds', emoji: '🛏️' },
              { id: 'safety', label: 'Safety First', emoji: '🛡️' },
              { id: 'colors', label: 'Color Psychology', emoji: '🌈' },
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
                Why Kids Bedroom Design Matters
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem', alignItems: 'center' }}>
                <div>
                  <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem', color: '#475569' }}>
                    A child's room is their universe. It's where they dream, learn, play, and rest. Designing for kids isn't just about bright colors—it's about creating an environment that fosters independence, creativity, and safety.
                  </p>
                </div>
                <div style={{ background: 'white', padding: '2rem', borderRadius: '20px', textAlign: 'center', boxShadow: '0 10px 25px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: '800', color: primaryRed, marginBottom: '0.5rem' }}>85%</div>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>of a child's time at home is spent in their bedroom</p>
                </div>
              </div>
              <div style={{ fontSize: '1.125rem', marginTop: '1.5rem', color: '#475569', background: 'white', padding: '1.5rem', borderRadius: '16px', borderLeft: `6px solid ${primaryRed}` }}>
                At <strong style={{ color: primaryRed }}>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong>, we design spaces that adapt to your child's changing needs, blending whimsical aesthetics with practical durability.
              </div>
            </div>
          </section>

          {/* Age Group Filter for Themes */}
          <section style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontWeight: '600', color: '#475569' }}>Filter by age:</span>
              {['all', '0-12', '3-8', '3-10', '4-10'].map((age) => (
                <button
                  key={age}
                  onClick={() => setSelectedAgeGroup(age)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    background: selectedAgeGroup === age ? primaryRed : 'white',
                    color: selectedAgeGroup === age ? 'white' : '#475569',
                    border: selectedAgeGroup === age ? 'none' : `1px solid #e2e8f0`,
                    borderRadius: '50px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontWeight: selectedAgeGroup === age ? '600' : '400'
                  }}
                >
                  {age === 'all' ? 'All Ages' : `${age} years`}
                </button>
              ))}
            </div>
          </section>

          {/* 1. Playful Themes - Interactive Cards */}
          <section id="themes" ref={sectionRefs.themes} data-section="themes" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center', marginBottom: '3rem' }}>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>1</span>
                  Playful Themes & Adventures
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '1.5rem' }}>
                  From jungle safaris to outer space explorations, themed rooms ignite imagination. The key is to use adaptable decor that can be easily updated as interests change.
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
                  src="https://images.unsplash.com/photo-1522771753035-711a3b942250?w=800&q=80"
                  alt="Themed Kids Bedroom"
                  style={{ width: '100%', height: '350px', objectFit: 'cover' }}
                />
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {themesData
                .filter(theme => selectedAgeGroup === 'all' || theme.ageGroup === selectedAgeGroup)
                .map((theme) => (
                <div
                  key={theme.id}
                  onMouseEnter={() => setHoveredTheme(theme.id)}
                  onMouseLeave={() => setHoveredTheme(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    background: hoveredTheme === theme.id ? '#ffffff' : '#f8fafc',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    boxShadow: hoveredTheme === theme.id ? `0 15px 30px ${primaryRed}20` : '0 5px 15px rgba(0,0,0,0.02)',
                    transform: hoveredTheme === theme.id ? 'translateY(-8px)' : 'translateY(0)',
                    border: hoveredTheme === theme.id ? `2px solid ${primaryRed}` : '2px solid transparent',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{theme.icon}</div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '0.5rem', color: darkRed }}>{theme.title}</h3>
                  <p style={{ color: '#475569', marginBottom: '1rem' }}>{theme.desc}</p>
                  <div style={{ 
                    display: 'inline-block',
                    padding: '0.3rem 1rem', 
                    background: lightRed, 
                    borderRadius: '50px',
                    fontSize: '0.85rem',
                    color: darkRed,
                    fontWeight: '600'
                  }}>
                    Ages {theme.ageGroup}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 2. Smart Study Zones - Interactive */}
          <section id="study" ref={sectionRefs.study} data-section="study" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
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
                  src="https://images.unsplash.com/photo-1558021211-6d1403321394?w=800&q=80"
                  alt="Kids Study Area"
                  style={{ width: '100%', height: '400px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>2</span>
                  Smart Study Zones
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                  As digital learning grows, a dedicated study area is essential. Ergonomic chairs, proper lighting, and distraction-free layouts help improve focus.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                  {studyIdeas.map((idea, idx) => (
                    <div
                      key={idx}
                      onMouseEnter={() => setHoveredIdea(idx)}
                      onMouseLeave={() => setHoveredIdea(null)}
                      style={{
                        padding: '1.5rem',
                        background: hoveredIdea === idx ? lightRed : 'white',
                        borderRadius: '16px',
                        transition: 'all 0.3s ease',
                        boxShadow: hoveredIdea === idx ? `0 10px 20px ${primaryRed}20` : '0 5px 10px rgba(0,0,0,0.02)',
                        transform: hoveredIdea === idx ? 'translateY(-4px)' : 'translateY(0)',
                        border: hoveredIdea === idx ? `2px solid ${primaryRed}` : '1px solid #e2e8f0',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{idea.icon}</div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '0.3rem', color: darkRed }}>{idea.title}</h4>
                      <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{idea.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 3. Toy Storage - Interactive Grid */}
          <section id="storage" ref={sectionRefs.storage} data-section="storage" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>3</span>
              Creative Toy Storage Solutions
            </h2>
            
            <div style={{ background: lightRed, padding: '2.5rem', borderRadius: '30px', marginBottom: '2rem' }}>
              <p style={{ fontSize: '1.2rem', color: darkRed, marginBottom: '2rem', textAlign: 'center' }}>
                "A place for everything, and everything in its place." Teach organization early with accessible storage.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
                {storageIdeas.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      padding: '1.5rem',
                      background: 'white',
                      borderRadius: '16px',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      border: '2px solid transparent'
                    }}
                    onMouseEnter={(e) => { 
                      e.currentTarget.style.transform = 'translateY(-8px)'; 
                      e.currentTarget.style.boxShadow = `0 15px 25px ${primaryRed}30`;
                      e.currentTarget.style.borderColor = primaryRed;
                    }}
                    onMouseLeave={(e) => { 
                      e.currentTarget.style.transform = 'translateY(0)'; 
                      e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.05)';
                      e.currentTarget.style.borderColor = 'transparent';
                    }}
                  >
                    <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{item.icon}</div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.3rem', color: darkRed }}>{item.title}</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* 4. Bunk Beds - Interactive */}
          <section id="bunks" ref={sectionRefs.bunks} data-section="bunks" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
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
                  src="https://images.unsplash.com/photo-1505693314120-0d443867891c?w=800&q=80"
                  alt="Creative Bunk Beds"
                  style={{ width: '100%', height: '450px', objectFit: 'cover' }}
                />
              </div>
              <div>
                <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>4</span>
                  Bunk Beds & Vertical Play
                </h2>
                <p style={{ fontSize: '1.125rem', color: '#475569', marginBottom: '2rem' }}>
                  For shared rooms or sleepovers, bunk beds are a classic space-saver. Modern designs incorporate slides, study desks underneath, or fortress-style railings.
                </p>
                
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem' }}>
                  {bunkFeatures.map((feature, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '0.8rem',
                        background: '#f0fdf4',
                        borderRadius: '8px',
                        color: '#166534',
                        fontWeight: '600',
                        fontSize: '0.9rem',
                        textAlign: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                      onMouseEnter={(e) => { 
                        e.currentTarget.style.background = primaryRed; 
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => { 
                        e.currentTarget.style.background = '#f0fdf4'; 
                        e.currentTarget.style.color = '#166534';
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* 5. Safety First - Interactive Checklist */}
          <section id="safety" ref={sectionRefs.safety} data-section="safety" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '1.5rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>5</span>
              Safety First Design
            </h2>
            
            <div style={{ 
              background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', 
              borderRadius: '30px', 
              padding: '2.5rem',
              marginBottom: '2rem'
            }}>
              <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '2rem', fontWeight: '800', color: darkRed, marginBottom: '1rem' }}>Zero Compromise on Safety</h3>
                <p style={{ fontSize: '1.125rem', color: '#7f1d1d' }}>
                  Rounded corners on furniture. Non-toxic, low-VOC paints. Securely anchored shelving. Soft-close drawers to prevent pinched fingers.
                </p>
              </div>
              
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <button
                  onClick={() => setShowSafetyChecklist(!showSafetyChecklist)}
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
                    boxShadow: `0 5px 15px ${primaryRed}40`
                  }}
                  onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  {showSafetyChecklist ? 'Hide Safety Checklist' : 'Show Safety Checklist'}
                </button>
              </div>
              
              {showSafetyChecklist && (
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '1rem',
                  animation: 'slideInDown 0.5s ease'
                }}>
                  {safetyChecklist.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '1rem',
                        background: 'white',
                        borderRadius: '12px',
                        boxShadow: '0 5px 10px rgba(0,0,0,0.05)'
                      }}
                    >
                      <span style={{ color: '#22c55e', fontSize: '1.3rem' }}>✓</span>
                      <span style={{ color: '#334155', fontWeight: '500' }}>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Color Psychology - Interactive Cards */}
          <section id="colors" ref={sectionRefs.colors} data-section="colors" style={{ marginBottom: '5rem', scrollMarginTop: '6rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: '700', marginBottom: '2rem', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ background: primaryRed, color: 'white', width: '48px', height: '48px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', borderRadius: '16px' }}>🌈</span>
              Color Psychology for Kids
            </h2>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              {colorPsychology.map((color, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredColor(idx)}
                  onMouseLeave={() => setHoveredColor(null)}
                  style={{
                    padding: '2rem 1.5rem',
                    borderRadius: '20px',
                    backgroundColor: color.bg,
                    borderTop: hoveredColor === idx ? `4px solid ${primaryRed}` : `4px solid ${color.accent}`,
                    boxShadow: hoveredColor === idx ? `0 15px 30px ${primaryRed}30` : '0 10px 20px rgba(0,0,0,0.05)',
                    transition: 'all 0.3s ease',
                    transform: hoveredColor === idx ? 'translateY(-8px)' : 'translateY(0)',
                    cursor: 'pointer'
                  }}
                >
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: color.text }}>{color.name}</h3>
                  <p style={{ color: '#475569' }}>{color.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Process Section - Animated */}
          <section id="process" ref={sectionRefs.process} data-section="process" style={{ 
            marginBottom: '5rem', 
            padding: '4rem 2rem', 
            background: 'linear-gradient(145deg, #ffffff, #f8fafc)',
            borderRadius: '40px',
            scrollMarginTop: '6rem' 
          }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1rem', color: '#1e293b', textAlign: 'center' }}>
              Designing Their Dream Space
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '3rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 3rem' }}>
              We involve both you and your child in the process to create a room they will love for years.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', textAlign: 'center' }}>
              {[
                { icon: "🎨", title: "Idea Boarding", desc: "We gather inspiration from your child's interests" },
                { icon: "📐", title: "Safe Planning", desc: "Child-safe layouts and materials" },
                { icon: "🧱", title: "Durable Build", desc: "Quality materials built to last" },
                { icon: "✨", title: "Magic Reveal", desc: "Watch their face light up" }
              ].map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    padding: '2rem',
                    background: 'white',
                    borderRadius: '20px',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => { 
                    e.currentTarget.style.transform = 'translateY(-10px)'; 
                    e.currentTarget.style.boxShadow = `0 20px 30px ${primaryRed}20`;
                  }}
                  onMouseLeave={(e) => { 
                    e.currentTarget.style.transform = 'translateY(0)'; 
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.05)';
                  }}
                >
                  <div style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>{step.icon}</div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: '700', marginBottom: '0.5rem', color: darkRed }}>{step.title}</h3>
                  <p style={{ fontSize: '0.95rem', color: '#64748b' }}>{step.desc}</p>
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
                Create a World of Wonder
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '1.5rem', color: '#475569', maxWidth: '800px', margin: '0 auto 1.5rem' }}>
                A great kids' room sparks joy every single day. Let's build a space where their best memories will be made.
              </p>
              <div style={{ 
                background: lightRed, 
                padding: '2rem', 
                borderRadius: '20px',
                maxWidth: '800px',
                margin: '2rem auto 0'
              }}>
                <p style={{ fontSize: '1.125rem', color: darkRed, margin: 0 }}>
                  Ready to start? <strong>Kryoss Interior</strong> managed by <strong>Clink Consultancy Services Private Limited</strong> is here to bring your child's dream room to life.
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
            <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem' }}>Start Their Adventure Today</h2>
            <p style={{ fontSize: '1.3rem', marginBottom: '2.5rem', opacity: 0.95, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Book a consultation and let's design a room they'll never want to leave.
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
              Get a Free Kids Room Quote →
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

export default KidsBedroomDesign;