import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Home, DollarSign, Award } from 'lucide-react';
import '../../components/Features.css';

const About = () => {
    return (
        <div className="page-container" style={{ paddingTop: '6rem' }}>
            <div className="hero section" style={{ height: '60vh', backgroundPosition: 'center', backgroundImage: 'url(https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1600&q=80)' }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content text-center">
                    <h1>Why <span className="accent-text">KryossInterior</span>?</h1>
                    <p className="section-subtitle" style={{ color: 'white' }}>Real Homes, For Real People - Like You</p>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-2">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-block"
                    >
                        <div className="feature-icon"><Heart size={40} /></div>
                        <h3>It’s Your Sanctuary. It’s Personal.</h3>
                        <p>India is home to a wonderful diversity of regions and customs, and 1.3 billion unique individuals. Your KryossInterior home is personalised for whatever makes you, uniquely you. Why should your home be cut from a template, when you’re not?</p>
                    </motion.div>
                    <div className="img-block">
                        <img src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80" alt="Personalized Home" style={{ width: '100%', borderRadius: '20px' }} />
                    </div>
                </div>
            </div>

            <div className="section" style={{ background: 'var(--surface)' }}>
                <div className="container">
                    <div className="grid grid-2 reverse-responsive">
                        <div className="img-block">
                            <img src="https://images.unsplash.com/photo-1502005229766-3c8ef9550bb6?auto=format&fit=crop&w=800&q=80" alt="Space Saving" style={{ width: '100%', borderRadius: '20px' }} />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-block"
                        >
                            <div className="feature-icon"><Home size={40} /></div>
                            <h3>More Space, More Delight, More Joy.</h3>
                            <p>We have spent countless hours on design, to make your life simpler. Why go down on your knees to reach the back of the bottom shelf, when it can be a pull-out drawer? Left with an odd unusable space on the wall? Our slim end-units add storage or showcase display pieces.</p>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="container section">
                <div className="grid grid-3 text-center">
                    <div className="feature-card">
                        <div className="feature-icon"><DollarSign size={32} /></div>
                        <h3>Of Course You Can Afford Great Design</h3>
                        <p>Our designs have won many awards. But our biggest reward is seeing satisfied customers move into their new homes across a range of budgets – from affordable to high-end.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><Award size={32} /></div>
                        <h3>Control Freaks About Quality</h3>
                        <p>Our own designers. Our own factory. Our own workforce. Yes, we are control freaks about quality.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon"><Heart size={32} /></div>
                        <h3>Design Democracy</h3>
                        <p>We believe great design should be accessible to everyone, irrespective of their budget.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default About;
