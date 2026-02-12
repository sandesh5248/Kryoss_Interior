import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HomeOffice = () => {
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
      title: 'A Modern Home Office With Smart Storage And Minimal Setup',
      images: [
        'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80',
        'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80'
      ]
    },
    {
      id: 2,
      title: 'A Stylish Home Office With Built-In Shelving And Workstation',
      images: [
        'https://images.unsplash.com/photo-1593642532400-2682810df593?w=800&q=80',
        'https://images.unsplash.com/photo-1593642634367-d91a135587b5?w=800&q=80',
        'https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=800&q=80'
      ]
    },
    {
      id: 3,
      title: 'A Cosy Home Office With Wooden Furniture And Natural Lighting',
      images: [
        'https://images.unsplash.com/photo-1492724441997-5dc865305da7?w=800&q=80',
        'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=800&q=80',
        'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=800&q=80'
      ]
    },
    {
      id: 4,
      title: 'An Elegant Home Office With Contemporary Interior Design',
      images: [
        'https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=800&q=80',
        'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80'
      ]
    },
    {
      id: 5,
      title: 'A Creative Home Office With Artistic Wall Decor And Plants',
      images: [
        'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80',
        'https://images.unsplash.com/photo-1555212697-194d092e3b8f?w=800&q=80'
      ]
    },
    {
      id: 6,
      title: 'A Luxurious Home Office With Premium Furniture And Lighting',
      images: [
        'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=800&q=80',
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80',
        'https://images.unsplash.com/photo-1507208773393-40d9fc670c1e?w=800&q=80'
      ]
    }
  ];
  

  return (
    <div className="min-h-screen bg-gray-50 p-5" style={{ paddingTop: '80px', paddingLeft:'35px', paddingRight:'35px' }}>
      {/* Hero Section */}
      <div className="bg-white border-b py-5">
        <div className="px-4 sm:px-6 lg:px-16 xl:px-20 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-3">
            Home Office Designs
          </h1>
          <p className="text-base text-gray-600 max-w-4xl leading-relaxed" style={{padding:'5px'}}>
          Discover smart home office designs that blend creativity, ergonomics and space optimisation for a productive work-from-home setup.
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
              FAQs on Home Office Designs
            </h2>
            <p className="text-gray-600 ">
              Find answers to commonly asked questions about home office room interior design
            </p>
          </div>
          
          <div className="space-y-5 mt-0.5">
  <FAQItem 
    question="What are the best ways to design a home office space?"
    answer="The best ways to design a home office include selecting a quiet and distraction-free area, ensuring ergonomic furniture, maximizing natural lighting, and organizing storage effectively. Incorporate a functional layout that supports productivity while maintaining a comfortable and inspiring atmosphere with personal decor and greenery."
  />
  <FAQItem 
    question="Which colour is best for a home office?"
    answer="Calming and focus-enhancing colors work best for home offices. Popular choices include soft blues, muted greens, warm neutrals like beige or light gray, and pastel tones. These colors promote concentration and reduce stress. You can also add accent walls in darker shades for depth and creativity."
  />
  <FAQItem 
    question="What are the best styles of interior design for home offices?"
    answer="Popular home office styles include Modern Minimalist with clutter-free and clean aesthetics, Scandinavian with natural light and wooden textures, Industrial featuring metal accents and exposed elements, Traditional with classic wooden furniture, and Contemporary which blends comfort and modern design trends."
  />
  <FAQItem 
    question="How do I choose furniture for a small home office?"
    answer="For small home offices, choose compact and multi-functional furniture such as wall-mounted desks, foldable tables, or corner desks. Use vertical storage solutions like floating shelves to save floor space. Ensure ergonomic seating and maintain enough movement space for comfort and productivity."
  />
  <FAQItem 
    question="How can I separate my home office from other living spaces?"
    answer="You can separate your home office using room dividers, bookshelves, curtains, or rugs to define work zones. Positioning the desk facing a wall or window can also create visual separation. Using different lighting or color schemes helps establish a clear boundary between work and living areas."
  />
  <FAQItem 
    question="What type of desk is best for a home office?"
    answer="The best desk depends on your work requirements and space. Writing desks are ideal for minimal setups, L-shaped desks provide extra workspace, standing desks promote better posture and health, and adjustable desks offer flexibility. Choose durable materials like solid wood or metal frames for long-term use."
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

export default HomeOffice;
