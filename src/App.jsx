import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import DesignGallery from './pages/DesignGallery';
import Reviews from './pages/Reviews';
import ExperienceCenters from './pages/ExperienceCenters';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Calculators from './pages/Calculators';
import Offerings from './pages/Offerings';
import Guides from './pages/Guides';
import Blogs from './pages/Blogs';
import Careers from './pages/Careers';
import PartnerPolicy from './pages/PartnerPolicy';
import ReferFriend from './pages/ReferFriend';
import '@fontsource/inter';
import '@fontsource/outfit';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/design-gallery" element={<DesignGallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/experience-centres" element={<ExperienceCenters />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />

          {/* New Routes */}
          <Route path="/calculator/*" element={<Calculators />} />
          <Route path="/offering/*" element={<Offerings />} />
          <Route path="/guides/*" element={<Guides />} />
          <Route path="/blogs/*" element={<Blogs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/partner-policy" element={<PartnerPolicy />} />
          <Route path="/refer-friend" element={<ReferFriend />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
