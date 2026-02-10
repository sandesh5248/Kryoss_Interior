import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="container section">
                <div className="grid grid-2 reverse-responsive">
                    <div className="contact-info">
                        <h1 className="section-title">Get In <span className="accent-text">Touch</span></h1>
                        <p className="section-subtitle" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            Have a question or want to book a consultation? We'd love to hear from you.
                        </p>

                        <div className="contact-methods">
                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3>Call Us</h3>
                                    <p>1800 120 1234</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Mon-Sat, 10am - 7pm</p>
                                </div>
                            </div>

                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3>Email Us</h3>
                                    <p>hello@designcafe.com</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>We reply within 24 hours</p>
                                </div>
                            </div>

                            <div className="contact-method-item" style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
                                <div className="icon-box" style={{ background: 'rgba(196, 30, 58, 0.1)', padding: '1rem', borderRadius: '50%', color: 'var(--primary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3>Head Office</h3>
                                    <p>St. Marks Road, Bengaluru</p>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-light)' }}>Karnataka, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container" style={{ background: 'var(--white)', padding: '2.5rem', borderRadius: '20px', boxShadow: 'var(--shadow)' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Send us a message</h3>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Phone</label>
                                <input type="tel" placeholder="+91 98765 43210" style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }} />
                            </div>
                            <div className="form-group">
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                                <textarea rows="4" placeholder="Tell us about your requirements..." style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', border: '1px solid #ddd', fontFamily: 'inherit' }}></textarea>
                            </div>
                            <button type="button" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
