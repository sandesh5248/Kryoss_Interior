import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Folder } from 'lucide-react';
import '../components/Features.css';

const projects = [
    { id: 1, title: 'Bhanu’s Hyderabad Villa', tag: 'Villa', location: 'Hyderabad', image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80', description: 'Modern interiors with a touch of luxury, featuring a spacious living area and a custom modular kitchen.' },
    { id: 2, title: 'Mr. Ruban Prasanth’s 2BHK', tag: '2BHK', location: 'Coimbatore', image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=80', description: 'Earthy home interiors with functional furniture and warm lighting.' },
    { id: 3, title: '3BHK Bren Imperia', tag: '3BHK', location: 'Bengaluru', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80', description: 'A seamless blend of contemporary design and comfort for a growing family.' },
    { id: 4, title: 'Spacious 4BHK Apartment', tag: '4BHK', location: 'Mumbai', image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=800&q=80', description: 'Sophisticated design with premium finishes and smart storage solutions.' },
    { id: 5, title: 'Minimalist Studio', tag: 'Studio', location: 'Pune', image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=80', description: 'Clever use of space with multifunctional furniture and clean lines.' },
    { id: 6, title: 'Luxury Penthouse', tag: 'Penthouse', location: 'Chennai', image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80', description: 'Grand interiors with bespoke furniture and panoramic views.' },
];

const Projects = () => {
    return (
        <div className="page-container" style={{ paddingTop: '8rem' }}>
            <div className="section-header text-center">
                <h1 className="section-title">Recent <span className="accent-text">Projects</span></h1>
                <p className="section-subtitle">A glimpse into some of the 15,000+ homes we've delivered</p>
            </div>

            <div className="container section">
                <div className="grid grid-3">
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -5 }}
                            className="feature-card project-card"
                            style={{ padding: 0, overflow: 'hidden', textAlign: 'left' }}
                        >
                            <div className="project-img" style={{ height: '250px', background: `url(${project.image}) center/cover` }}></div>
                            <div className="project-content" style={{ padding: '1.5rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.8rem', background: 'var(--surface)', padding: '0.2rem 0.6rem', borderRadius: '20px', fontWeight: 600 }}>{project.tag}</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}><MapPin size={12} /> {project.location}</span>
                                </div>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', marginBottom: '1rem' }}>{project.description}</p>
                                <button className="btn btn-outline" style={{ width: '100%', padding: '0.6rem', fontSize: '0.9rem' }}>View Project</button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
import { MapPin } from 'lucide-react';

export default Projects;
