import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const KidsBedroom = () => {
  const [activeCategory, setActiveCategory] = useState('Dining Room');

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

  // Sample design data - replace with your actual data
  const designs = [
    {
      id: 1,
      title: 'A Colourful Kids Bedroom With Study And Storage Unit',
      images: [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'A Space Saving Kids Bedroom With Bunk Bed Setup',
      images: [
        'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80',
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'A Cosy Kids Bedroom With Wooden Furniture And Play Area',
      images: [
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
        'https://images.unsplash.com/photo-1505691723518-36a5ac3b2f6d?w=800&q=80',
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'An Elegant Kids Bedroom With Smart Storage Solutions',
      images: [
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80',
        'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80',
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'A Creative Kids Bedroom With Artistic Wall Decor And Shelves',
      images: [
        'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&q=80',
        'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80',
        'https://images.unsplash.com/photo-1588854337221-4cf9fa96059c?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'A Modern Kids Bedroom With Storage Beds And Soft Lighting',
      images: [
        'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=800&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80',
        'https://images.unsplash.com/photo-1505691723518-36a5ac3b2f6d?w=800&q=80'
      ]
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft:'35px', paddingRight:'35px' }}>
      {/* Hero Section */}
      <div className="bg-white border-b py-5">
        <div className="px-4 sm:px-6 lg:px-16 xl:px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Kids Bedroom Designs
          </h1>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{padding:'5px'}}>
          Explore kids bedroom designs with fun décor, functional layouts, and space-saving storage for the perfect child-friendly room—trusted by 15,000+ families.
          </p>
          <p className="text-xs text-gray-500 mt-3" style={{padding:'2px'}}>
            Last updated: February 12, 2026
          </p>
        </div>
      </div>

 

      {/* Designs Grid */}
      <div className="bg-white py-12 pb-20 mt-10" style={{paddingTop:'40px'}}>
        <div className="max-w-350 mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          {/* Optional Section Header */}
          <div className="mb-20">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2" style={{padding:'5px'}}>
              Explore Our Designs
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-teal-300 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
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
            <h2 className="text-4xl font-bold text-gray-900 " style={{paddingTop:'40px'}}>
              FAQs on Kids Bedroom Designs
            </h2>
            <p className="text-gray-600 ">
              Find answers to commonly asked questions about kids bedroom interior design
            </p>
          </div>
          
          <div className="space-y-5">
  <FAQItem 
    question="What are the best ways to design a kids bedroom space?"
    answer="The best ways to design a kids bedroom include creating a balance between sleep, study, and play areas. Use multifunctional furniture, ensure sufficient storage for toys and books, incorporate safe and child-friendly materials, and choose a layout that allows free movement. Adding fun themes, bright colours, and personalised decor helps make the room engaging and comfortable for children."
  />
  
  <FAQItem 
    question="Which colour is best for a kids bedroom?"
    answer="Soft pastel shades like light blue, mint green, lavender, peach, and pastel yellow work well for kids bedrooms as they create a calming yet cheerful atmosphere. You can also use brighter accent colours or themed wall designs to add creativity and energy without overwhelming the space."
  />
  
  <FAQItem 
    question="What are the best interior design styles for kids bedrooms?"
    answer="Popular kids bedroom styles include Theme-Based Designs such as cartoon, superhero, or princess themes, Scandinavian style with minimal clutter and natural tones, Modern designs with smart storage solutions, and Playful Contemporary styles that combine colour, creativity, and comfort."
  />
  
  <FAQItem 
    question="How do I choose furniture for a small kids bedroom?"
    answer="For small kids bedrooms, choose space-saving furniture like bunk beds, loft beds with study desks underneath, foldable tables, and wall-mounted shelves. Use vertical storage and multifunctional furniture to maximise space while keeping the room organised and spacious for play and study."
  />
  
  <FAQItem 
    question="How can I make a kids bedroom safe?"
    answer="To make a kids bedroom safe, use rounded furniture edges, secure heavy furniture to walls, choose non-toxic paints and materials, install proper lighting, and avoid sharp or breakable decor items. Adding anti-slip rugs and child-safe storage solutions also helps create a safe environment."
  />
  
  <FAQItem 
    question="What type of bed is best for a kids bedroom?"
    answer="The best bed depends on the child’s age and room size. Single beds are suitable for young children, bunk beds or loft beds are ideal for shared or small rooms, and storage beds help keep toys and essentials organised. Always choose sturdy and child-safe designs with guard rails when needed."
  />
</div>

        </div>
      </div>


    </div>
  );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-xl border-2 transition-all duration-300 ${
      isOpen 
        ? 'border-teal-500 shadow-lg shadow-teal-100' 
        : 'border-gray-200 hover:border-teal-300 shadow-md hover:shadow-lg'
    }`} >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left group transition-colors"
      >
        <h3 className={`text-base font-semibold pr-8 transition-colors ${
          isOpen ? 'text-teal-700' : 'text-gray-900 group-hover:text-teal-600'
        }`}>
          {question}
        </h3>
        <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
          isOpen 
            ? 'bg-teal-500 rotate-180' 
            : 'bg-gray-100 group-hover:bg-teal-50'
        }`}>
          <svg
            className={`w-5 h-5 transition-colors ${
              isOpen ? 'text-white' : 'text-gray-600 group-hover:text-teal-600'
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>
      
      <div className={`overflow-hidden transition-all duration-300 ${
        isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
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

// Design Card Component with Image Carousel
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
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Carousel */}
      <div className="relative h-80 bg-gray-200 overflow-hidden p-4">
        <img
          src={design.images[currentImageIndex]}
          alt={design.title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        />
        
        {/* Navigation Arrows */}
        <button
          onClick={prevImage}
          className={`absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white p-2.5 rounded-full shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
          }`}
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={nextImage}
          className={`absolute right-3 top-1/2 -translate-y-1/2 bg-teal-500 hover:bg-teal-600 p-2.5 rounded-full shadow-lg transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 text-white" />
        </button>

        {/* Image Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {design.images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? 'bg-white w-8 shadow-md'
                  : 'bg-white/60 w-2 hover:bg-white/80'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>

        {/* Image counter overlay */}
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium">
          {currentImageIndex + 1} / {design.images.length}
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6" style={{padding:'30px'}}>
        <h3 className="text-base font-semibold text-gray-900 mb-5 line-clamp-2 min-h-[3rem] leading-relaxed">
          {design.title}
        </h3>
        
        <div className="flex items-center justify-between gap-4">
          <button className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center gap-1 transition-all hover:gap-2 group mb-2 p-4">
            Explore more
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          
          <button className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition-all shadow-md hover:shadow-lg transform hover:scale-105 mb-2 p-4" style={{padding:'5px'}}>
            Get a Quote
          </button>
        </div>
      </div>

      
    </div>
  );
};

export default KidsBedroom;
