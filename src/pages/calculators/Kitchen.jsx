import React from 'react';
import {
    ShieldCheck,
    MessageSquare,
    ChefHat,
    CheckCircle2,
    Star,
    Award,
    Utensils,
    Layout,
    Layers,
    ChevronRight,
    ArrowRight,
    Search,
    PiggyBank,
    Clock,
    Heart,
    Box,
    Maximize,
    Zap
} from 'lucide-react';
import { motion } from 'framer-motion';

const KitchenCalculator = () => {
    return (
        <div className="bg-white font-sans text-gray-900 w-full overflow-x-hidden">
            {/* HERO SECTION */}
            <div className="relative min-h-[85vh] flex items-center justify-center py-32 w-full overflow-hidden mb-24">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=2400&q=80"
                        alt="Modern Modular Kitchen"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center space-y-10 max-w-5xl">
                    <div className="inline-block px-6 py-2 bg-red-50 text-[#c41e3a] rounded-full font-bold text-sm tracking-widest uppercase leading-none shadow-sm">
                        Design Innovation 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase mx-auto">
                        Modular Kitchen Ideas That <br />
                        <span className="text-[#c41e3a]">Redefine Modern Living</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 w-full max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
                        Design a kitchen that works as beautifully as it looks. Discover smart layouts, sleek finishes, and space-saving innovations crafted for contemporary homes.
                    </p>

                    <div className="pt-6 flex flex-wrap justify-center gap-6">
                        <button className="bg-[#c41e3a] hover:bg-[#a0182f] text-white text-lg font-black py-6 px-12 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105">
                            CALCULATE KITCHEN COST
                        </button>
                        <button className="bg-white border-2 border-gray-100 hover:border-[#c41e3a] text-gray-900 text-lg font-black py-6 px-12 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105">
                            BOOK FREE CONSULTATION
                        </button>
                    </div>
                </div>
            </div>

            {/* INTRODUCTION */}
            <div className="py-48 bg-white w-full border-t border-gray-50 mb-24">
                <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row gap-20 items-center">
                    <div className="w-full md:w-1/2 space-y-10 text-center md:text-left">
                        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight">A Necessity, <br /><span className="text-[#c41e3a]">Not A Luxury.</span></h2>
                        <p className="text-2xl text-gray-500 font-light leading-relaxed">
                            A modular kitchen is no longer a luxury — it’s a necessity for organized, functional, and aesthetic living. Today’s homeowners want intelligent storage, seamless finishes, and layouts that adapt to fast-paced lifestyles.
                        </p>
                        <p className="text-2xl text-gray-400 font-light leading-relaxed">
                            At Kryoss Interior, every kitchen is designed with a balance of functionality, personalization, and long-term durability.
                        </p>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1556912176-12bb89db2c5a?auto=format&fit=crop&w=1200&q=80"
                            alt="Functional Design"
                            className="w-full h-[550px] object-cover rounded-[50px] shadow-2xl"
                        />
                    </div>
                </div>
            </div>

            {/* WHY MODULAR SECTION */}
            <div className="py-48 bg-gray-50/50 w-full text-center mb-24 border-y border-gray-100">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="mb-32 space-y-4 text-center">
                        <h2 className="text-5xl font-black text-gray-900 uppercase tracking-tighter">Why Modular is the Future</h2>
                        <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">Precision engineering meets personalized style for Indian homes.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            { title: 'Optimized Storage', desc: 'Maximum function with minimal clutter.', icon: <Box className="w-10 h-10" /> },
                            { title: 'Fast Installation', desc: 'Factory-finished modules assembled in days.', icon: <Clock className="w-10 h-10" /> },
                            { title: 'Custom Finishes', desc: 'Any color or texture you can imagine.', icon: <Layers className="w-10 h-10" /> },
                            { title: 'Easy Maintenance', desc: 'Simple to clean units are replaceable.', icon: <ShieldCheck className="w-10 h-10" /> },
                            { title: 'Budget Flexibility', desc: 'Scale your design based on your investment plan.', icon: <PiggyBank className="w-10 h-10" /> },
                            { title: 'Future Ready', icon: <Zap className="w-10 h-10" />, desc: 'Adapts to apartments, villas, and luxury residences.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-16 rounded-[40px] shadow-sm border border-gray-50 flex flex-col items-center text-center space-y-6 group hover:border-[#c41e3a] transition-all duration-500">
                                <div className="text-[#c41e3a] bg-red-50 w-20 h-20 rounded-2xl flex items-center justify-center transition-colors group-hover:bg-[#c41e3a] group-hover:text-white">
                                    {item.icon}
                                </div>
                                <h3 className="text-3xl font-black uppercase tracking-tighter text-gray-900 leading-none">{item.title}</h3>
                                <p className="text-xl text-gray-500 font-light leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* TRENDING LAYOUTS SECTION */}
            <div className="py-48 bg-white w-full mb-24 border-b border-gray-100">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="mb-32 space-y-4 text-center">
                        <h2 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Trending Layout <span className="text-[#c41e3a]">Ideas</span></h2>
                        <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">Every space has a story. Select the layout that fits your workflow triangle.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        {[
                            { title: 'L-Shaped Kitchen', sub: 'For 1BHK & 2BHK', img: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=1200&q=80' },
                            { title: 'U-Shaped Kitchen', sub: 'For Large Families', img: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80' },
                            { title: 'Parallel Kitchen', sub: 'For Urban Flats', img: 'https://images.unsplash.com/photo-1556912167-75b4424375d7?auto=format&fit=crop&w=1200&q=80' },
                            { title: 'Island Kitchen', sub: 'For Luxury Villas', img: 'https://images.unsplash.com/photo-1620614815463-30f81abb17ba?auto=format&fit=crop&w=1200&q=80' }
                        ].map((layout, i) => (
                            <div key={i} className="space-y-8 group">
                                <div className="overflow-hidden rounded-[50px] shadow-2xl h-[400px]">
                                    <img src={layout.img} alt={layout.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                </div>
                                <div className="space-y-4 text-center">
                                    <h3 className="text-4xl font-black text-gray-900 uppercase tracking-tighter">
                                        {layout.title}
                                    </h3>
                                    <p className="text-base font-bold bg-red-50 text-[#c41e3a] px-6 py-2 rounded-full inline-block uppercase tracking-widest leading-none">{layout.sub}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* DESIGN TRENDS */}
            <div className="py-48 bg-gray-900 text-white w-full text-center mb-24">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="mb-32 space-y-8">
                        <h2 className="text-6xl font-black tracking-tighter uppercase leading-tight">Design Trends <br /> <span className="text-[#c41e3a]">2026 Edition</span></h2>
                        <p className="text-2xl text-gray-400 font-light max-w-3xl mx-auto">The intersection of elegance and high-tech utility.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {[
                            { title: 'Matte Finish', desc: 'Anti-fingerprint surfaces and elegant, subtle aesthetics perfect for minimal interiors.' },
                            { title: 'Handleless', desc: 'Sleek push-to-open systems for a seamless look and easy maintenance.' },
                            { title: 'Smart Storage', desc: 'Tandem drawers, magic corner units, and tall pull-out pantries.' },
                            { title: 'Sustainable', desc: 'Eco-friendly boards and low-VOC finishes with energy-efficient systems.' },
                            { title: 'Two-Tone', desc: 'Neutral bases with bold accents or White + Grey minimal themes.' },
                            { title: 'Intelligent LED', desc: 'Under-cabinet LEDs and sensor-based systems that adapt to usage.' }
                        ].map((trend, i) => (
                            <div key={i} className="p-12 border border-white/10 rounded-[30px] hover:border-[#c41e3a] transition-all group">
                                <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 text-[#c41e3a]">{trend.title}</h3>
                                <p className="text-xl text-gray-400 font-light leading-relaxed">{trend.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MATERIALS SECTION */}
            <div className="py-48 bg-white w-full mb-24">
                <div className="container mx-auto px-8 max-w-7xl flex flex-col lg:flex-row gap-24 items-center">
                    <div className="w-full lg:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1200&q=80"
                            alt="Material Quality"
                            className="w-full h-[600px] object-cover rounded-[60px] shadow-2xl"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 space-y-12 text-center lg:text-left">
                        <h2 className="text-6xl font-black uppercase tracking-tighter leading-tight text-gray-900">The Science of <br /><span className="text-[#c41e3a]">Materials</span></h2>
                        <div className="space-y-10">
                            {[
                                { name: 'Marine Plywood', desc: 'Moisture-resistant for humid climates.' },
                                { name: 'HDHMR Boards', desc: 'Budget-friendly, sturdy, and moisture-resistant.' },
                                { name: 'Acrylic Finish', desc: 'Mirror-like high gloss for a luxury look.' },
                                { name: 'PU Finish', desc: 'Smooth coating for designer aesthetics.' }
                            ].map((mat, i) => (
                                <div key={i} className="flex gap-8 items-start pb-10 border-b border-gray-100 last:border-0">
                                    <div className="bg-red-50 p-5 rounded-xl text-[#c41e3a] font-black text-2xl">{i + 1}</div>
                                    <div className="space-y-2 text-left">
                                        <h4 className="text-3xl font-black uppercase tracking-tighter text-gray-900">{mat.name}</h4>
                                        <p className="text-xl text-gray-400 font-light">{mat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* SMART ADD-ONS */}
            <div className="py-48 bg-gray-50/30 w-full text-center mb-24 border-y border-gray-100">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h2 className="text-6xl font-black uppercase tracking-tighter text-gray-900 mb-32">Smart Kitchen <span className="text-[#c41e3a]">Add-Ons</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {[
                            'Built-in Microwave',
                            'Cabinet Lighting',
                            'Soft-close',
                            'Smart Chimneys',
                            'Waste Systems',
                            'Magic Corner'
                        ].map((add, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 flex flex-col items-center justify-center text-center gap-8 group hover:border-[#c41e3a] transition-all">
                                <CheckCircle2 className="w-12 h-12 text-[#c41e3a]" />
                                <span className="text-2xl font-black uppercase tracking-tighter text-gray-700">{add}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* BUDGET PLANNING */}
            <div className="py-48 bg-white w-full mb-24">
                <div className="container mx-auto px-8 max-w-5xl bg-gray-900 rounded-[50px] p-16 md:p-24 text-white flex flex-col items-center text-center space-y-12 shadow-2xl">
                    <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">Budget <span className="text-[#c41e3a]">Planning</span></h2>
                    <p className="text-2xl text-gray-400 font-light leading-relaxed max-w-3xl">
                        Our professional consultation ensures transparency in costing and execution. Plan based on layout, material, and finish preferences.
                    </p>
                    <button className="bg-[#c41e3a] text-white text-xl font-black py-8 px-16 rounded-full shadow-2xl hover:scale-105 transition-all uppercase tracking-widest">ESTIMATE COST</button>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-center text-gray-400 pt-8 border-t border-white/10">
                        {['Layout', 'Material', 'Finish', 'Hardware'].map((item, i) => (
                            <div key={i} className="p-8 border border-white/5 rounded-[30px]">
                                <div className="text-4xl font-black text-white mb-2 leading-none">30%</div>
                                <div className="text-[10px] font-bold uppercase tracking-widest opacity-60">{item}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FINAL CTA */}
            <div className="py-64 bg-[#c41e3a] text-white text-center w-full">
                <div className="container mx-auto px-8 max-w-5xl space-y-12">
                    <h2 className="text-7xl md:text-8xl font-black text-white uppercase tracking-tighter leading-tight">Reflect Your <br /><span className="text-red-100">Lifestyle</span></h2>
                    <p className="text-2xl text-red-50 font-light leading-relaxed max-w-3xl mx-auto">
                        Your kitchen should reflect your lifestyle, not limit it. Whether you prefer a minimal setup or a luxury villa kitchen.
                    </p>
                    <div className="pt-8">
                        <button className="bg-white text-[#c41e3a] text-3xl font-black py-8 px-24 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all leading-none uppercase tracking-tighter">
                            Start Now
                        </button>
                    </div>
                    <p className="text-xs font-bold text-red-200 uppercase tracking-widest opacity-60 pt-8">Kryoss Interior Managed by Clink Consultancy Services Private Limited.</p>
                </div>
            </div>
        </div>
    );
};

export default KitchenCalculator;
