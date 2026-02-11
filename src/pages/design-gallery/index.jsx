import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import '../../components/Features.css';

const designs = [
    { id: 1, title: 'Modern Minimalist', category: 'Living Room', image: 'https://images.unsplash.com/photo-1540932296235-d84c1f9efab0?auto=format&fit=crop&w=800&q=80' },
    { id: 2, title: 'Scandinavian Blue', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80' },
    { id: 3, title: 'Cozy Bedroom', category: 'Bedroom', image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80' },
    { id: 4, title: 'Space Saving', category: 'Kids Room', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80' },
    { id: 5, title: 'Industrial Chic', category: 'Living Room', image: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=800&q=80' },
    { id: 6, title: 'Modular Function', category: 'Kitchen', image: 'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?auto=format&fit=crop&w=800&q=80' },
    // Mock data for new categories
    { id: 7, title: 'Luxury Wardrobe', category: 'Wardrobe', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80' },
    { id: 8, title: 'Modern Dining', category: 'Dining Room', image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=800&q=80' },
    { id: 9, title: 'Home Office Setup', category: 'Home Office', image: 'https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80' },
    { id: 10, title: 'Compact Bathroom', category: 'Bathroom', image: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=800&q=80' },
    { id: 11, title: '1 BHK Complete', category: '1 BHK', image: 'https://images.unsplash.com/photo-1502005229766-3c8ef9550bb6?auto=format&fit=crop&w=800&q=80' },
    { id: 12, title: '2 BHK Classic', category: '2 BHK', image: 'https://images.unsplash.com/photo-1531835551805-16d864c8d311?auto=format&fit=crop&w=800&q=80' },
    { id: 13, title: '3 BHK Premium', category: '3 BHK', image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80' },
    { id: 14, title: 'Smart Storage', category: 'Space Saving', image: 'https://images.unsplash.com/photo-1600607688960-e095ff83135c?auto=format&fit=crop&w=800&q=80' },
];

const categories = [
    'All',
    'Kitchen',
    'Wardrobe',
    'Bedroom',
    'Living Room',
    'Space Saving',
    'Dining Room',
    'Home Office',
    'Kids Room',
    'Bathroom',
    '1 BHK',
    '2 BHK',
    '3 BHK'
];

const DesignGallery = ({ initialCategory }) => {
    const [activeCategory, setActiveCategory] = useState(initialCategory || 'All');
    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (initialCategory) {
            setActiveCategory(initialCategory);
            return;
        }
        const cat = searchParams.get('cat');
        if (cat) {
            const mappedCat = categories.find(c => c.toLowerCase() === cat.toLowerCase().replace('-', ' ')) || 'All';
            setActiveCategory(mappedCat);
        }
    }, [searchParams, initialCategory]);

    const filteredDesigns = activeCategory === 'All'
        ? designs
        : designs.filter(design => design.category === activeCategory);

    return (
        <div className="page-container">
            <div className="section-header text-center" style={{ paddingTop: '8rem' }}>
                <h1 className="section-title">Design <span className="accent-text">Gallery</span></h1>
                <p className="section-subtitle">
                    {activeCategory === 'All' ? 'Explore our collection of 15,000+ home designs' : `Explore our  ${activeCategory} Designs`}
                </p>
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
