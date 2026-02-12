import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const TwoBHK = () => {
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
      title: 'A Modern 2 BHK With Open Living And Dining Layout',
      images: [
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'A Stylish 2 BHK With Modular Kitchen And Elegant Interiors',
      images: [
        'https://images.unsplash.com/photo-1556911220-bff31c812dba?w=800&q=80',
        'https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'A Cosy 2 BHK With Warm Wooden Interiors',
      images: [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
        'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&q=80',
        'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'An Elegant 2 BHK With Contemporary Bedroom Design',
      images: [
        'https://images.unsplash.com/photo-1617104551722-3b2c5c32f07f?w=800&q=80',
        'https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=800&q=80',
        'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'A Vibrant 2 BHK With Artistic Decor And Smart Storage',
      images: [
        'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80',
        'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498c?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'A Luxurious 2 BHK With Premium Furniture And Lighting',
      images: [
        'https://images.unsplash.com/photo-1616593969747-4797dc75033e?w=800&q=80',
        'https://images.unsplash.com/photo-1616047006789-b7af5afb8c20?w=800&q=80',
        'https://images.unsplash.com/photo-1618221195847-3f6a2dff1b1a?w=800&q=80'
      ]
    }
  ];
  
  

  return (
    <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft:'35px', paddingRight:'35px' }}>
      {/* Hero Section */}
      <div className="bg-white border-b py-5">
        <div className="px-4 sm:px-6 lg:px-16 xl:px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            2 BHK Designs
          </h1>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{padding:'5px'}}>
          Check out popular 2BHK home designs amongst our 15,000+ happy customers.
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
      <div className="bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 " >
          <div className="text-center  flex flex-col align-middle justify-center ">
            <h2 className="text-4xl font-bold text-gray-900 " style={{paddingTop:'40px'}}>
              FAQs on 2 BHK Designs
            </h2>
            <p className="text-gray-600 ">
              Find answers to commonly asked questions about 2 BHK interior design
            </p>
          </div>
          
          <div className="space-y-5 mt-0.5">
  <FAQItem 
    question="What are the best ways to design a 2 BHK apartment?"
    answer="Designing a 2 BHK apartment involves creating functional zones for living, dining, bedrooms, and storage. Use modular furniture, efficient storage solutions, and coordinated colour themes to maintain a spacious and organised layout. Proper lighting and smart furniture placement enhance comfort and aesthetics."
  />
  
  <FAQItem 
    question="Which colour is best for 2 BHK interiors?"
    answer="Neutral and warm colour palettes work best for 2 BHK homes. Shades like beige, cream, pastel blue, light grey, and soft green create a calm and spacious atmosphere. You can introduce accent colours through furniture, curtains, and decor accessories."
  />
  
  <FAQItem 
    question="How can I maximise storage in a 2 BHK apartment?"
    answer="You can maximise storage by using modular wardrobes, storage beds, floating shelves, and built-in cabinets. Utilising vertical storage, multipurpose furniture, and hidden storage compartments helps keep the home clutter-free while saving space."
  />
  
  <FAQItem 
    question="How should I design bedrooms in a 2 BHK?"
    answer="In a 2 BHK, the master bedroom can have premium furniture and larger storage solutions, while the second bedroom can be designed as a guest room, kids bedroom, or home office. Use comfortable furniture, proper lighting, and soothing colour themes for better relaxation."
  />
  
  <FAQItem 
    question="How can I create a functional living and dining space in a 2 BHK?"
    answer="You can create a functional living and dining space by using open layouts, compact dining tables, and sectional sofas. Area rugs, lighting variations, and decorative partitions help define zones while maintaining an open and spacious look."
  />
  
  <FAQItem 
    question="What type of kitchen layout is best for a 2 BHK?"
    answer="L-shaped, parallel, or U-shaped modular kitchens work best for 2 BHK apartments. These layouts improve workflow, storage, and space utilisation while maintaining a modern and organised cooking area."
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

export default TwoBHK;
