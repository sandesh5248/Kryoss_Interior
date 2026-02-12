import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Wardrobe = () => {
    const [activeCategory, setActiveCategory] = useState('Wardrobe');

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
            title: 'A Wardrobe With Attached Study-Cum-Dressing Unit',
            images: [
                'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
                'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80',
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80'
            ]
        },
        {
            id: 2,
            title: 'A Suave Wardrobe With An Attached Open Shelf For Bags And Shoes',
            images: [
                'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80',
                'https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&q=80',
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
            ]
        },
        {
            id: 3,
            title: 'A Sliding-Door Wardrobe Design Finished With White And Light Wood',
            images: [
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
                'https://images.unsplash.com/photo-1614608675393-542b58d0497c?w=800&q=80',
                'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=800&q=80'
            ]
        },
        {
            id: 4,
            title: 'A Frosty White And Wooden Wardrobe With A Dressing Unit',
            images: [
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
                'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
                'https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=800&q=80'
            ]
        },
        {
            id: 5,
            title: 'A Kids Wardrobe In High Gloss Laminate',
            images: [
                'https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&q=80',
                'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80'
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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1558997519-53bb89092cbb?q=80&w=2034&auto=format&fit=crop")',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-16 xl:px-20 py-8 w-full max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg text-center" style={{ color: '#c41e3a' }}>
                        Wardrobe
                    </h1>
                </div>
            </div>

            {/* Designs Grid */}
            <div className="bg-white py-12 pb-20 mt-10" style={{ paddingTop: '40px' }}>
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
                            FAQs on Wardrobe Designs
                        </h2>
                        <p className="text-gray-600 ">
                            Find answers to commonly asked questions about Wardrobe interior design
                        </p>
                    </div>

                    <div className="space-y-5 mt-0.5">
                        <FAQItem
                            question="What are the different types of wardrobes?"
                            answer="Common types of wardrobes include hinged door wardrobes, sliding door wardrobes, walk-in wardrobes, and L-shaped or corner wardrobes. The choice depends on your space and storage requirements."
                        />
                        <FAQItem
                            question="How do I choose between sliding and hinged doors?"
                            answer="Sliding doors are ideal for small rooms where there isn't enough space for doors to swing open. Hinged doors are better for larger rooms and offer full access to the wardrobe at once."
                        />
                        <FAQItem
                            question="What materials are best for wardrobes?"
                            answer="Common materials include BWR plywood, HDHMR, or MDF for the carcass. For shutters, you can choose between laminate, acrylic, membrane, or even tinted glass for a modern look."
                        />
                        <FAQItem
                            question="How can I organize the inside of my wardrobe effectively?"
                            answer="Use a combination of hanging rods, shelves, and drawers. Incorporate accessories like pull-out trouser racks, tie and belt organizers, and jewelry drawers to keep everything in its place."
                        />
                        <FAQItem
                            question="What is the standard depth of a wardrobe?"
                            answer="The standard depth for a wardrobe is typically 22 to 24 inches. This allows enough space for hangers and clothes to fit comfortably without getting crushed when the doors are closed."
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


export default Wardrobe;

