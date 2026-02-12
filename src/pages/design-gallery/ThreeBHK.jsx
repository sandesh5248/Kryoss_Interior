import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ThreeBHK = () => {
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
      title: 'A Modern 3 BHK With Spacious Living And Dining Area',
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'A Stylish 3 BHK With Modular Kitchen And Elegant Interiors',
      images: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
        'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'A Cosy 3 BHK With Warm Wooden Bedroom Interiors',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80',
        'https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'An Elegant 3 BHK With Contemporary Bedroom And Wardrobe Design',
      images: [
        'https://images.unsplash.com/photo-1617104551722-3b2c5c32f07f?w=800&q=80',
        'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80',
        'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'A Vibrant 3 BHK With Artistic Decor And Smart Storage Solutions',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'A Luxurious 3 BHK With Premium Furniture And Designer Lighting',
      images: [
        'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80',
        'https://images.unsplash.com/photo-1618221195847-3f6a2dff1b1a?w=800&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80'
      ]
    }
  ];
  
  
  

  return (
    <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft:'35px', paddingRight:'35px' }}>
      {/* Hero Section */}
      <div className="bg-white border-b py-5">
        <div className="px-4 sm:px-6 lg:px-16 xl:px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            3 BHK Designs
          </h1>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{padding:'5px'}}>
          Check out popular 3BHK home designs amongst our 15,000+ happy customers.
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
              FAQs on 3 BHK Designs
            </h2>
            <p className="text-gray-600 ">
              Find answers to commonly asked questions about 3 BHK interior design
            </p>
          </div>
          
          <div className="space-y-5 mt-0.5">
  <FAQItem 
    question="What are the best ways to design a 3 BHK apartment?"
    answer="Designing a 3 BHK apartment involves creating dedicated zones for living, dining, bedrooms, and additional functional spaces like home offices or guest rooms. Use cohesive colour themes, modular furniture, and smart storage solutions to maintain balance between aesthetics and functionality while ensuring spacious layouts."
  />
  
  <FAQItem 
    question="Which colour combinations work best for 3 BHK interiors?"
    answer="Neutral and elegant colour palettes work best for 3 BHK homes. Shades like ivory, beige, soft grey, pastel blue, and sage green create a spacious and calming atmosphere. Accent colours like navy blue, terracotta, or emerald green can add depth and sophistication."
  />
  
  <FAQItem 
    question="How should bedrooms be planned in a 3 BHK?"
    answer="In a 3 BHK, one bedroom is usually designed as the master bedroom with premium furniture and wardrobes, the second bedroom can be a kids or family bedroom, and the third bedroom can function as a guest room, home office, or multi-purpose space depending on lifestyle needs."
  />
  
  <FAQItem 
    question="How can I maximise storage in a 3 BHK apartment?"
    answer="Storage can be maximised by using modular wardrobes, storage beds, loft cabinets, and built-in shelving units. Using vertical storage and multipurpose furniture helps maintain organisation while keeping interiors clutter-free."
  />
  
  <FAQItem 
    question="What is the best layout for living and dining areas in a 3 BHK?"
    answer="Open layouts are commonly used in 3 BHK homes to create spacious living and dining zones. Sectional sofas, compact dining tables, decorative partitions, and layered lighting can help define functional spaces while maintaining openness."
  />
  
  <FAQItem 
    question="Which kitchen layout is ideal for a 3 BHK?"
    answer="U-shaped, L-shaped, or island modular kitchens work well in 3 BHK homes. These layouts provide efficient workflow, increased storage capacity, and better accessibility, making cooking and dining more convenient."
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

export default ThreeBHK;
