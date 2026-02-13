import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Bedroom = () => {
    const [activeCategory, setActiveCategory] = useState('Bedroom');

    // Categories for the filter tabs
    const categories = [
        'All',
        'Modular Kitchen',
        'Living Room',
        'Bedroom',
        'Kids Bedroom',
        'Wardrobe',
        'Dining Room',
        'Pooja Room',
        'Space Saving',
        'Home Office',
        'Bathroom'
    ];

    // Sample design data
    const designs = [
        {
            id: 1,
            title: 'A Suave Master Bedroom With A Designer Bedside Table',
            images: [
                'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
                'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
                'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80'
            ]
        },
        {
            id: 2,
            title: 'A Modern Bedroom Design Optimized For Functionality',
            images: [
                'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
                'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
                'https://images.unsplash.com/photo-1616594891894-f17042593bb2?w=800&q=80'
            ]
        },
        {
            id: 3,
            title: 'A Serene Bedroom With A Minimalist Aesthetic',
            images: [
                'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
                'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
                'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80'
            ]
        },
        {
            id: 4,
            title: 'A Vibrant Kids Bedroom With Smart Storage',
            images: [
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
                'https://images.unsplash.com/photo-1544457070-4cd773b4d71e?w=800&q=80',
                'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80'
            ]
        },
        {
            id: 5,
            title: 'A Luxurious Bedroom With A Walk-In Wardrobe',
            images: [
                'https://images.unsplash.com/photo-1616594891894-f17042593bb2?w=800&q=80',
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
                'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80'
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft: '35px', paddingRight: '35px' }}>
            {/* Hero Section */}
            <div className="relative h-[450px] flex items-center justify-center text-white text-center mb-10">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: 'url("https://images.unsplash.com/photo-1540518614846-7eba43376461?q=80&w=2031&auto=format&fit=crop")',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-16 xl:px-20 py-8 w-full max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg text-center" style={{ color: '#c41e3a' }}>
                        Bedroom
                    </h1>
                </div>
            </div>

            {/* Designs Grid */}
            <div className="bg-white py-12 pb-20 mt-10 flex justify-center align-middle" style={{ paddingTop: '40px' }}>
                <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16 flex flex-col items-center">
                    <div className="mb-20 text-center flex flex-col items-center">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{ padding: '5px' }}>
                            Explore Our Designs
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full mx-auto"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 justify-items-center w-full">
                        {designs.map((design) => (
                            <DesignCard key={design.id} design={design} />
                        ))}
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center">
                <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 " >
                    <div className="text-center  flex flex-col align-middle justify-center ">
                        <h2 className="text-4xl font-bold text-gray-900 " style={{ paddingTop: '40px' }}>
                            FAQs on Bedroom Designs
                        </h2>
                        <p className="text-gray-600 ">
                            Find answers to commonly asked questions about Bedroom interior design
                        </p>
                    </div>

                    <div className="space-y-5 mt-0.5">
                        <FAQItem
                            question="What are the essential elements of a bedroom design?"
                            answer="Essential elements include a comfortable bed, functional storage like wardrobes and bedside tables, appropriate lighting (ambient, task, and accent), and a color palette that promotes relaxation."
                        />
                        <FAQItem
                            question="How can I make a small bedroom look larger?"
                            answer="To make a small bedroom look larger, use light colors, mirror-fronted wardrobes, multi-functional furniture, and keep the floor as clear as possible. Natural light also plays a huge role."
                        />
                        <FAQItem
                            question="What is the best lighting for a bedroom?"
                            answer="A mix of lighting is best. Warm ambient light for general illumination, task lighting for reading (like bedside lamps), and accent lighting to highlight decor or architectural features."
                        />
                        <FAQItem
                            question="How do I choose the right color for my bedroom?"
                            answer="Choose colors based on the atmosphere you want to create. Cool tones like blues and greens are calming, while warm neutrals like beige and cream are cozy. Avoid overly bright or aggressive colors if you want a restful space."
                        />
                        <FAQItem
                            question="What are the latest bedroom design trends?"
                            answer="Recent trends include biophilic design (integrating plants and natural materials), minimalist layouts, smart storage solutions, and textured wall finishes like wallpaper or wainscoting."
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`bg-white rounded-xl border-2 transition-all duration-300 ${isOpen
            ? 'border-teal-500 shadow-lg shadow-teal-100'
            : 'border-gray-200 hover:border-teal-300 shadow-md hover:shadow-lg'
            }`} >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left group transition-colors"
            >
                <h3 className={`text-base font-semibold pr-8 transition-colors ${isOpen ? 'text-teal-700' : 'text-gray-900 group-hover:text-teal-600'
                    }`}>
                    {question}
                </h3>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen
                    ? 'bg-teal-500 rotate-180'
                    : 'bg-gray-100 group-hover:bg-teal-50'
                    }`}>
                    <svg
                        className={`w-5 h-5 transition-colors ${isOpen ? 'text-white' : 'text-gray-600 group-hover:text-teal-600'
                            }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
            </button>

            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 pb-5 pt-1">
                    <div className="w-full h-px bg-gradient-to-r from-teal-500 to-transparent mb-4"></div>
                    <p className="text-gray-700 leading-relaxed">
                        {answer}
                    </p>
                </div>
            </div>
        </div>
    );
};

const DesignCard = ({ design }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextImage = () => {
        setCurrentImageIndex((prev) =>
            prev === design.images.length - 1 ? 0 : prev + 1
        );
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) =>
            prev === 0 ? design.images.length - 1 : prev - 1
        );
    };

    return (
        <div
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-[400px] flex flex-col h-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative h-80 bg-gray-200 overflow-hidden">
                <img
                    src={design.images[currentImageIndex]}
                    alt={design.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${isHovered ? 'scale-105' : 'scale-100'
                        }`}
                />

                <button
                    onClick={prevImage}
                    className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                        }`}
                    aria-label="Previous image"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button
                    onClick={nextImage}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 p-2.5 rounded-full shadow-lg transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                        }`}
                    aria-label="Next image"
                >
                    <ChevronRight className="w-5 h-5 text-white" />
                </button>

                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {design.images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${index === currentImageIndex
                                ? 'bg-white w-8 shadow-md'
                                : 'bg-white/60 w-2 hover:bg-white/80'
                                }`}
                            aria-label={`Go to image ${index + 1}`}
                        />
                    ))}
                </div>

                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
                    {currentImageIndex + 1} / {design.images.length}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem] leading-relaxed">
                    {design.title}
                </h3>

                <div className="mt-auto flex items-center justify-between">
                    <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1 transition-all hover:gap-2 group">
                        Explore more
                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Bedroom;

