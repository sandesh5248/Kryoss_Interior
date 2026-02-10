import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import '../components/Features.css';

const designs = [
    { id: 1, title: 'Modern Minimalist', category: 'Living Room', image: 'https://images.unsplash.com/photo-1540932296235-d84c1f9efab0?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Scandinavian Blue', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Cozy Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Space Saving', category: 'Kids Room', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Industrial Chic', category: 'Living Room', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Modular Function', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80' },
];

const categories = ['All', 'Living Room', 'Kitchen', 'Bedroom', 'Kids Room', 'Wardrobe', 'Study', 'Balcony'];

const DesignGallery = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        const cat = searchParams.get('cat');
        if (cat && categories.includes(cat)) {
            setActiveCategory(cat);
        } else if (cat) {
            // Special handling for URIs that might not match exact display text
            const mappedCat = categories.find(c => c.toLowerCase() === cat.toLowerCase()) || 'All';
            setActiveCategory(mappedCat);
        }
    }, [searchParams]);

    const filteredDesigns = activeCategory === 'All'
        ? designs
        : designs.filter(design => design.category === activeCategory);

    return (
        <div className="page-container">
            <div className="section-header text-center" style={{ paddingTop: '8rem' }}>
                <h1 className="section-title">Design <span className="accent-text">Gallery</span></h1>
                <p className="section-subtitle">Explore our collection of 15,000+ home designs</p>
            </div>

            <div className="container">
                <div className="category-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                            onClick={() => setActiveCategory(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid grid-3 gallery-grid">
                    {filteredDesigns.map(design => (
                        <motion.div
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            key={design.id}
                            className="gallery-item"
                        >
                            <div className="gallery-img">
                                <img src={design.image} alt={design.title} />
                                <div className="gallery-overlay">
                                    <button className="btn btn-outline" style={{ color: 'white', borderColor: 'white' }}>View Details</button>
                                </div>
                            </div>
                            <div className="gallery-info">
                                <h4>{design.title}</h4>
                                <span>{design.category}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default DesignGallery;
