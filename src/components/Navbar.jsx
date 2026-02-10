import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, User, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Always use white background style for this specific request to match the screenshot provided
  // which shows a white navbar with teal text.
  // However, keeping the scroll logic for shadow is good.

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navClass = `navbar ${scrolled ? 'scrolled' : ''}`;

  const NavDropdown = ({ title, items }) => (
    <div className="nav-item-dropdown">
      <span className="nav-link-text">{title} <ChevronDown size={14} style={{ marginLeft: '4px' }} /></span>
      <div className="dropdown-menu">
        {items.map((item, idx) => (
          <Link key={idx} to={item.path} className="dropdown-item" onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <nav className={navClass}>
      <div className="container nav-content">
        <Link to="/" className="logo" onClick={() => setIsOpen(false)}>
          <span className="logo-text">Kryoss<span className="accent-text">Interior</span></span>
        </Link>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>

          <NavDropdown title="Design Gallery" items={[
            { label: 'All Designs', path: '/design-gallery' },
            { label: 'Modular Kitchen', path: '/design-gallery?cat=Kitchen' },
            { label: 'Living Room', path: '/design-gallery?cat=Living%20Room' },
            { label: 'Bedroom', path: '/design-gallery?cat=Bedroom' },
            { label: 'Kids Bedroom', path: '/design-gallery?cat=Kids%20Room' }
          ]} />

          <Link to="/projects" className="nav-link-text" onClick={() => setIsOpen(false)}>Recent Projects</Link>
          <Link to="/reviews" className="nav-link-text" onClick={() => setIsOpen(false)}>Reviews</Link>

          <NavDropdown title="Cost Calculators" items={[
            { label: 'Kitchen Cost Calculator', path: '/calculator/kitchen' },
            { label: 'Wardrobe Cost Calculator', path: '/calculator/wardrobe' },
            { label: 'Full Home Cost Calculator', path: '/calculator/home' }
          ]} />

          <NavDropdown title="Offering" items={[
            { label: 'Full Home Interiors', path: '/offering/full-home' },
            { label: 'Modular Kitchens', path: '/offering/modular-kitchens' },
            { label: 'Wardrobes', path: '/offering/wardrobes' }
          ]} />

          <NavDropdown title="Guides" items={[
            { label: 'Interior Design Guides', path: '/guides' },
            { label: 'Maintenance Guides', path: '/guides/maintenance' }
          ]} />

          <NavDropdown title="Blogs" items={[
            { label: 'Design Trends', path: '/blogs/trends' },
            { label: 'Home Tours', path: '/blogs/tours' }
          ]} />

          <NavDropdown title="Cities" items={[
            { label: 'Bengaluru', path: '/experience-centres?city=Bengaluru' },
            { label: 'Mumbai', path: '/experience-centres?city=Mumbai' },
            { label: 'Hyderabad', path: '/experience-centres?city=Hyderabad' },
            { label: 'Chennai', path: '/experience-centres?city=Chennai' },
            { label: 'Pune', path: '/experience-centres?city=Pune' },
            { label: 'Mysore', path: '/experience-centres?city=Mysore' }
          ]} />

          <NavDropdown title="More" items={[
            { label: 'About Us', path: '/about-us' },
            { label: 'Careers', path: '/careers' },
            { label: 'Partner Policy', path: '/partner-policy' },
            { label: 'Refer a Friend', path: '/refer-friend' }
          ]} />

          <div className="nav-actions mobile-only">
            <button className="nav-btn-icon"><Phone size={20} /></button>
            <button className="nav-btn-icon"><User size={20} /></button>
          </div>
        </div>

        <div className="nav-actions desktop-only">
          {/* Hiding these as per screenshot which only shows links, but typically search/cart/profile might be there. 
                   Keeping it clean as per screenshot request. */}
          <Link to="/contact-us" className="btn btn-primary" style={{ padding: '0.5rem 1.2rem', fontSize: '0.9rem' }}>Get Quote</Link>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
