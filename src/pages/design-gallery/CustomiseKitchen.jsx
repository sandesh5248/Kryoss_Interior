import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const customizeOptions = {
    'Lacquered Glass': [
        '#1d4e5f', '#54585a', '#2a285a', '#000000', '#5e4b3e',
        '#5a181a', '#4a4f3a', '#9fa1a4', '#bfa568', '#d0d2d3',
        '#2b0a0a', '#3e4e50', '#a49b8f', '#4e4b44', '#3c4e5a'
    ],
    'Acrylics': [
        '#c0392b', '#e74c3c', '#9b59b6', '#8e44ad', '#2980b9',
        '#3498db', '#1abc9c', '#16a085', '#27ae60', '#2ecc71',
        '#f1c40f', '#f39c12', '#e67e22', '#d35400', '#ecf0f1'
    ],
    'Veneers': [
        '#8d6e63', '#795548', '#6d4c41', '#5d4037', '#4e342e',
        '#a1887f', '#bcaaa4', '#d7ccc8', '#efebe9', '#3e2723',
        '#fff3e0', '#ffe0b2', '#ffcc80', '#ffb74d', '#ffa726'
    ],
    'Standard Laminates': [
        '#eceff1', '#cfd8dc', '#b0bec5', '#90a4ae', '#78909c',
        '#607d8b', '#546e7a', '#455a64', '#37474f', '#263238',
        '#ffcdd2', '#ef9a9a', '#e57373', '#ef5350', '#f44336'
    ],
    'Premium Laminates': [
        '#212121', '#424242', '#616161', '#757575', '#9e9e9e',
        '#bdbdbd', '#e0e0e0', '#f5f5f5', '#fafafa', '#ffffff',
        '#3e2723', '#4e342e', '#5d4037', '#6d4c41', '#795548'
    ]
};

const CustomiseKitchen = () => {
    const [activeFinish, setActiveFinish] = useState('Lacquered Glass');

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
                        <span style={{ color: '#000000' }}>Customise</span> <span style={{ color: '#c41e3a' }}>Kitchen</span>
                    </h1>
                </div>
            </div>

            {/* Customization Tool Section */}
            <div className="bg-white py-12 pb-20 mt-10" style={{ paddingTop: '40px' }}>
                <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* Left Image */}
                        <div className="lg:w-3/5">
                            <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl">
                                <img
                                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
                                    alt="Modern Kitchen"
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/5"></div>
                            </div>
                        </div>

                        {/* Right Controls */}
                        <div className="lg:w-2/5 flex flex-col justify-center">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Finish</h2>

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-2 mb-8">
                                {Object.keys(customizeOptions).map((finish) => (
                                    <button
                                        key={finish}
                                        onClick={() => setActiveFinish(finish)}
                                        className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all rounded-lg border-2 ${activeFinish === finish
                                            ? 'bg-teal-600 border-teal-600 text-white shadow-md'
                                            : 'bg-white border-gray-200 text-gray-600 hover:border-teal-300 hover:text-teal-600'
                                            }`}
                                    >
                                        {finish}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-[0.2em]">Select Color</h3>
                            {/* Color Grid */}
                            <div className="grid grid-cols-5 gap-3 mb-8 pr-2 max-h-48 overflow-y-auto custom-scrollbar p-1">
                                {customizeOptions[activeFinish].map((color, idx) => (
                                    <button
                                        key={idx}
                                        className="w-10 h-10 rounded-full shadow-sm cursor-pointer hover:scale-110 transition-transform ring-2 ring-white ring-offset-2 hover:ring-teal-400 border border-gray-100"
                                        style={{ backgroundColor: color }}
                                        title={`Finish option ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col gap-4">
                                <button className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                                    Book a Free Consultation
                                </button>
                                <button className="flex items-center justify-center gap-2 text-teal-600 font-bold hover:text-teal-700 transition-colors">
                                    View More Designs <ChevronRight size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-gradient-to-b from-gray-50 to-gray-100 flex justify-center mt-10">
                <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 " >
                    <div className="text-center  flex flex-col align-middle justify-center ">
                        <h2 className="text-4xl font-bold text-gray-900 " style={{ paddingTop: '40px' }}>
                            FAQs on Kitchen Customisation
                        </h2>
                        <p className="text-gray-600 ">
                            Common questions about materials, finishes, and the customisation process
                        </p>
                    </div>

                    <div className="space-y-5 mt-8">
                        <FAQItem
                            question="What is the difference between Acrylic and Laminate finishes?"
                            answer="Acrylic finishes are high-gloss and offer a mirror-like appearance, which is very premium and scratch-resistant. Laminates are more cost-effective, available in many textures (matt, glossy, wood grain), and are highly durable for daily use."
                        />
                        <FAQItem
                            question="How do I choose the right color for my kitchen?"
                            answer="Consider the size of your kitchen and the amount of natural light. Light colors make small kitchens feel larger, while dark colors add a touch of luxury. You can also use a two-tone combination for a modern look."
                        />
                        <FAQItem
                            question="What is Lacquered Glass used for?"
                            answer="Lacquered glass is commonly used for kitchen cabinet shutters. it is opaque, classy, easy to clean, and handles moisture and heat very well, making it ideal for a kitchen environment."
                        />
                        <FAQItem
                            question="Are customized kitchens more durable?"
                            answer="Yes, because you get to choose high-quality materials like BWR or Marine plywood which are moisture-resistant, ensuring your kitchen lasts for decades with proper maintenance."
                        />
                        <FAQItem
                            question="Can I change my finishes later?"
                            answer="While it's possible to replace cabinet shutters, it's a significant task. We recommend choosing a timeless finish that you'll love for years, or using easily replaceable decor for seasonal changes."
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

export default CustomiseKitchen;

