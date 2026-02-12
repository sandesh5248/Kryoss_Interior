import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DiningRoom = () => {
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
      title: 'A Modern Dining Room With A Smart Crockery Unit',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
        'https://images.unsplash.com/photo-1617806118843-c704c1717232?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'A Modern Dining Room With A Stylish Bar Unit With A Wine Rack',
      images: [
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'A Cosy Dining Area With Simple Wooden Furniture',
      images: [
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'An Elegant Dining Room With Contemporary Design',
      images: [
        'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80',
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'A Vibrant Dining Space With Artistic Wall Decor',
      images: [
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        'https://images.unsplash.com/photo-1617806118843-c704c1717232?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'A Luxurious Dining Room With Crystal Chandelier',
      images: [
        'https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?w=800&q=80',
        'https://images.unsplash.com/photo-1615529328331-f8917597711f?w=800&q=80',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft:'35px', paddingRight:'35px' }}>
      {/* Hero Section */}
      <div className="bg-white border-b py-5">
        <div className="px-4 sm:px-6 lg:px-16 xl:px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Dining Room Designs
          </h1>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{padding:'5px'}}>
            Stylish dining room designs with 20% extra space, crafted for modern Indian homes. 
            Trusted by 15,000+ families for functional, elegant interiors.
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
              FAQs on Dining Room Designs
            </h2>
            <p className="text-gray-600 ">
              Find answers to commonly asked questions about dining room interior design
            </p>
          </div>
          
          <div className="space-y-5 mt-0.5">
            <FAQItem 
              question="What are the best ways to design a dining room space?"
              answer="The best ways to design a dining room include optimizing space utilization, choosing the right furniture scale, incorporating adequate lighting, and creating a cohesive color scheme. Consider the room's flow, ensure comfortable seating arrangements, and add personal touches through decor and artwork."
            />
            <FAQItem 
              question="Which colour is best for dining room?"
              answer="Warm and inviting colors work best for dining rooms. Popular choices include warm neutrals like beige and cream, soft grays, sage green, or warm terracotta. These colors create a welcoming atmosphere that encourages conversation and dining. You can also consider accent walls in deeper tones for added visual interest."
            />
            <FAQItem 
              question="What are the best styles of interior design for dining rooms?"
              answer="Popular dining room styles include Modern Contemporary with clean lines and minimalist aesthetics, Traditional with classic furniture and rich woods, Scandinavian with light colors and natural materials, Industrial featuring exposed elements and metal accents, and Transitional that blends traditional and contemporary elements for a timeless look."
            />
            <FAQItem 
              question="How do I choose a dining room table for a small home?"
              answer="For small homes, opt for round or oval tables that maximize space and improve flow. Consider extendable tables that can be adjusted based on needs, glass-top tables that create an illusion of more space, or wall-mounted drop-leaf tables. Measure your space carefully and ensure at least 36 inches of clearance around the table."
            />
            <FAQItem 
              question="How do you divide a living room and dining room?"
              answer="You can divide living and dining rooms using area rugs to define separate zones, open shelving or bookcases as subtle dividers, different lighting fixtures for each area, varied flooring or ceiling treatments, or low-height furniture like a console table or sofa positioned strategically between the spaces."
            />
            <FAQItem 
              question="What type of dining table should I get?"
              answer="Choose a dining table based on your space, needs, and style. Rectangular tables suit larger spaces and formal dining, round tables are ideal for small spaces and conversation, square tables work well in compact dining areas, and extendable tables offer flexibility for entertaining. Consider materials like solid wood for durability, glass for a modern look, or marble for luxury."
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
  className="w-full pl-10 pr-6 py-5 flex items-center justify-between text-left group transition-colors"
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

export default DiningRoom;