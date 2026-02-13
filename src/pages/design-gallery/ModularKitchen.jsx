import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ModularKitchen = () => {
    const [activeCategory, setActiveCategory] = useState('Modular Kitchen');

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
            title: 'A Striking Kitchen With A Foldable Breakfast Table',
            images: [
                'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
                'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800&q=80',
                'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?w=800&q=80'
            ]
        },
        {
            id: 2,
            title: 'A Blue Modular Kitchen With A Tiled Backsplash',
            images: [
                'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
                'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=800&q=80',
                'https://images.unsplash.com/photo-1556912167-75b8039ed6fb?w=800&q=80'
            ]
        },
        {
            id: 3,
            title: 'An L-Shaped Kitchen With An Appliance Garage',
            images: [
                'https://images.unsplash.com/photo-1541604193435-22287d32c2c2?w=800&q=80',
                'https://images.unsplash.com/photo-1556909212-d5b604ad9290?w=800&q=80',
                'https://images.unsplash.com/photo-1556909190-7053335db157?w=800&q=80'
            ]
        },
        {
            id: 4,
            title: 'A Chic L-Shaped Kitchen In Grey And White',
            images: [
                'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&q=80',
                'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80',
                'https://images.unsplash.com/photo-1600607687644-c7171dd3f396?w=800&q=80'
            ]
        },
        {
            id: 5,
            title: 'A Vibrant Red Parallel Kitchen Layout',
            images: [
                'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
                'https://images.unsplash.com/photo-1600585154637-975975e533c3?w=800&q=80'
            ]
        },
        {
            id: 6,
            title: 'A Minimalist White Island Kitchen',
            images: [
                'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
                'https://images.unsplash.com/photo-1600607687355-6663f7215357?w=800&q=80'
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
                        backgroundImage: 'url("https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=2070&auto=format&fit=crop")',
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>

                <div className="relative z-10 px-4 sm:px-6 lg:px-16 xl:px-20 py-8 w-full max-w-5xl">
                    <h1 className="text-5xl md:text-6xl font-bold drop-shadow-lg text-center">
                        <span style={{ color: '#000000' }}>Modular</span> <span style={{ color: '#c41e3a' }}>Kitchen</span>
                    </h1>
                </div>
            </div>

            {/* Designs Grid */}
            <div className="bg-white py-12 pb-20 mt-10 flex justify-center align-middle" style={{ paddingTop: '40px'}}>
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
                            FAQs on Modular Kitchen Designs
                        </h2>
                        <p className="text-gray-600 ">
                            Find answers to commonly asked questions about Modular Kitchen interior design
                        </p>
                    </div>

                    <div className="space-y-5 mt-0.5">
                        <FAQItem
                            question="What is a modular kitchen?"
                            answer="A modular kitchen is a modern kitchen furniture layout consisting of pre-made cabinet modules that are assembled together to create a functional and efficient kitchen space. These modules come in various sizes and can be customized to suit different kitchen shapes and user requirements."
                        />
                        <FAQItem
                            question="What are the different types of modular kitchen layouts?"
                            answer="Common modular kitchen layouts include Straight (In-line), L-shaped, U-shaped, Parallel (Galley), and Island kitchens. The best layout depends on the available space and how you use your kitchen."
                        />
                        <FAQItem
                            question="Which materials are best for modular kitchens?"
                            answer="Popular materials include Boiling Water Resistant (BWR) plywood, Marine plywood, and High-Density High-Moisture Resistant (HDHMR) boards for the carcass. For finishes, you can choose from laminate, acrylic, PU, or membrane finishes depending on your budget and aesthetic preference."
                        />
                        <FAQItem
                            question="How can I maximize storage in a small modular kitchen?"
                            answer="To maximize storage in small kitchens, use tall units, corner solutions like magic corners or lemanz, pull-out drawers instead of cabinets, and wall-mounted organizers. Utilizing vertical space up to the ceiling also helps significantly."
                        />
                        <FAQItem
                            question="What is the golden triangle in kitchen design?"
                            answer="The golden triangle refers to the strategic placement of the three most used areas in the kitchen: the sink, the stove, and the refrigerator. Ideally, they should form a triangle to minimize movement and maximize efficiency during cooking."
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


export default ModularKitchen;

