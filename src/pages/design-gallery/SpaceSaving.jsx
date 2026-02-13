import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SpaceSaving = () => {
    const [activeCategory, setActiveCategory] = useState('Space Saving');

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
            title: 'A Wall-Mounted Study Table for Compact Spaces',
            images: [
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
                'https://images.unsplash.com/photo-1556912167-75b4424375d7?w=800&q=80'
            ]
        },
        {
            id: 2,
            title: 'Sliding Wardrobes With Integrated Mirror',
            images: [
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
                'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
            ]
        },
        {
            id: 3,
            title: 'Compact Parallel Kitchen Layout',
            images: [
                'https://images.unsplash.com/photo-1556912167-75b4424375d7?w=800&q=80',
                'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80',
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80'
            ]
        },
        {
            id: 4,
            title: 'Modular TV Unit with Hidden Storage',
            images: [
                'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
                'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
                'https://images.unsplash.com/photo-1556912167-75b4424375d7?w=800&q=80'
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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=1980&auto=format&fit=crop")',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-16 xl:px-20 py-8 w-full max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg text-center">
                        <span style={{ color: '#000000' }}>Space</span> <span style={{ color: '#c41e3a' }}>Saving</span>
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
                            FAQs on Space Saving Designs
                        </h2>
                        <p className="text-gray-600 ">
                            Find answers to commonly asked questions about Space Saving interior design
                        </p>
                    </div>

                    <div className="space-y-5 mt-0.5">
                        <FAQItem
                            question="What are space-saving furniture options?"
                            answer="Space-saving furniture includes sofa-cum-beds, murphy beds (wall beds), extendable dining tables, nested tables, and ottomans with built-in storage. These pieces serve multiple purposes without taking up extra space."
                        />
                        <FAQItem
                            question="How can I optimize storage in a small apartment?"
                            answer="Use vertical space by installing floor-to-ceiling cabinets, use under-bed storage, opt for multi-functional furniture, and use mirrors to create the illusion of more space."
                        />
                        <FAQItem
                            question="Are space-saving designs more expensive?"
                            answer="Not necessarily. While some high-tech multifunctional furniture can be specialized, many space-saving solutions like wall shelves or clever cabinet layouts are very cost-effective."
                        />
                        <FAQItem
                            question="Can I have a home office in a small room?"
                            answer="Yes, by using wall-mounted desks, foldable workstations, or by transforming a corner of another room using smart zoning and compact furniture."
                        />
                        <FAQItem
                            question="What colors work best for small spaces?"
                            answer="Light colors like white, cream, and soft pastels reflect more light and make a room feel more open. Monochromatic color schemes (using different shades of the same color) also work well."
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
            }`} style={{paddingLeft:'8px'}}>
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

            <div className="p-6 flex flex-col flex-grow" style={{paddingLeft:'10px'}}>
        <h3 className="text-base font-semibold text-gray-900 mb-4 line-clamp-2 min-h-[3rem] leading-relaxed">
          {design.title}
        </h3>

        <div className="mt-auto flex items-center justify-between " style={{paddingBottom:'4px'}}>
          <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1 transition-all hover:gap-2 group" >
            Explore more
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>
        </div>
    );
};

export default SpaceSaving;

