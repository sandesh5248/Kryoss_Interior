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
            { label: 'Modular Kitchen Designs', path: '/design-gallery/modular-kitchen-designs' },
            { label: 'Customise Your Kitchen', path: '/design-gallery/customise-your-kitchen' },
            { label: 'Wardrobe Designs', path: '/design-gallery/wardrobe-designs' },
            { label: 'Bedroom Designs', path: '/design-gallery/bedroom-designs' },
            { label: 'Living Room Designs', path: '/design-gallery/living-room-designs' },
            { label: 'Space Saving Designs', path: '/design-gallery/space-saving-designs' },
            { label: 'Dining Room Designs', path: '/design-gallery/dining-room-designs' },
            { label: 'Home Office Designs', path: '/design-gallery/home-office-designs' },
            { label: 'Kids Bedroom Designs', path: '/design-gallery/kids-bedroom-designs' },
            { label: 'Bathroom Designs', path: '/design-gallery/bathroom-designs' },
            { label: '1 BHK Interior Designs', path: '/design-gallery/1-bhk-interior-designs' },
            { label: '2 BHK Interior Designs', path: '/design-gallery/2-bhk-interior-designs' },
            { label: '3 BHK Interior Designs', path: '/design-gallery/3-bhk-interior-designs' }
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
            { label: 'Modular Kitchen Guides', path: '/guides/modular-kitchen-guides' },
            { label: 'Bedroom Design Guides', path: '/guides/bedroom-design-guides' },
            { label: 'Living Room Design Guides', path: '/guides/living-room-design-guides' },
            { label: 'Dining Room Design Guides', path: '/guides/dining-room-design-guides' },
            { label: 'Kids Room Design Guides', path: '/guides/kids-room-design-guides' },
            { label: 'Study Room Design Guides', path: '/guides/study-room-design-guides' },
            { label: 'Balcony Design Guides', path: '/guides/balcony-design-guides' },
            { label: 'Bathroom Design Guides', path: '/guides/bathroom-design-guides' },
            { label: 'Materials and Finishes', path: '/guides/materials-and-finishes' }
          ]} />

          <NavDropdown title="Blogs" items={[
            { label: 'Modular Kitchen Interiors Ideas', path: '/blogs/modular-kitchen-interiors-ideas' },
            { label: 'Home Interior Design Ideas', path: '/blogs/home-interior-design-ideas' },
            { label: 'Bedroom Design Ideas', path: '/blogs/bedroom-design-ideas' },
            { label: 'Living Room Design Ideas', path: '/blogs/living-room-design-ideas' },
            { label: 'Dining Room Design Ideas', path: '/blogs/dining-room-design-ideas' },
            { label: 'Kids Bedroom Design Ideas', path: '/blogs/kids-bedroom-design-ideas' },
            { label: 'Study Room Design Ideas', path: '/blogs/study-room-design-ideas' },
            { label: 'Home Decor Ideas', path: '/blogs/home-decor-ideas' },
            { label: 'DC Home Tours', path: '/blogs/dc-home-tours' },
            { label: 'DC Design Stars', path: '/blogs/dc-design-stars' },
            { label: 'DC Updates', path: '/blogs/dc-updates' }
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
            { label: 'Videos', path: '/videos' },
            { label: 'Why Kryoss Interior', path: '/why-kryoss-interior' },
            { label: 'Experience Centres', path: '/experience-centres' },
            { label: 'Refer and Earn', path: '/refer-friend' },
            { label: 'Customer Dashboard', path: '/customer-dashboard' },
            { label: 'Channel Partner Signup/Login', path: '/channel-partner-signup-login' },
            { label: 'Become A Design Partner', path: '/become-a-design-partner' },
            { label: 'Become A Franchisee', path: '/become-a-franchisee' },
            { label: 'FAQs', path: '/faqs' }
          ]} />


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
