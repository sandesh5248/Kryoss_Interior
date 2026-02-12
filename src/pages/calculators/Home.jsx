import React, { useState } from 'react';
import { ShieldCheck, Box, PiggyBank, CheckCircle2, Star, Award, ChevronRight, Layout, Maximize, Clock, Zap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const HomeCalculator = () => {
    const mainCategories = [
        {
            title: "Modular Kitchen",
            desc: "Smart, ergonomic layouts designed for modern Indian homes.",
            img: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&q=80",
            icon: <Box className="w-8 h-8" />
        },
        {
            title: "Wardrobe Designs",
            desc: "20% more storage with ceiling-high premium finishes.",
            img: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=800&q=80",
            icon: <Maximize className="w-8 h-8" />
        },
        {
            title: "Living Room",
            desc: "Innovative TV units and partitions that redefine your space.",
            img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
            icon: <Layout className="w-8 h-8" />
        },
        {
            title: "Master Bedroom",
            desc: "Sophisticated interiors with integrated study and dressing units.",
            img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80",
            icon: <Star className="w-8 h-8" />
        }
    ];

    return (
        <div className="bg-white font-sans text-gray-900 w-full overflow-x-hidden">
            {/* HERO SECTION */}
            <div className="relative min-h-[90vh] flex items-center justify-center py-40 w-full overflow-hidden mb-32">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2400&q=80"
                        alt="Minimal Home Interior"
                        className="w-full h-full object-cover opacity-10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center space-y-10 max-w-5xl">
                    <div className="inline-block px-6 py-2 bg-red-50 text-[#c41e3a] rounded-full font-bold text-sm tracking-widest uppercase leading-none shadow-sm">
                        Design Excellence 2026
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase">
                        Your Dream Home <br />
                        <span className="text-[#c41e3a]">Estimated In Seconds</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 w-full mx-auto leading-relaxed font-light tracking-tight max-w-3xl">
                        Transforming spaces with precision. Get a transparent, no-hidden-cost budget for your dream home interiors using our advanced calculator.
                    </p>

                    <div className="pt-8 flex flex-wrap justify-center gap-6">
                        <button className="bg-[#c41e3a] hover:bg-[#a0182f] text-white text-lg font-black py-6 px-12 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105">
                            START INTERIOR CALCULATOR
                        </button>
                        <button className="bg-white border-2 border-gray-100 hover:border-[#c41e3a] text-gray-900 text-lg font-black py-6 px-12 rounded-full shadow-xl transition-all duration-500 transform hover:scale-105">
                            BOOK EXPERT VISIT
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 pt-16 w-full opacity-60">
                        <div className="flex flex-col items-center gap-3">
                            <Box className="w-8 h-8 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">20% More Space</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <ShieldCheck className="w-8 h-8 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">10-Year Warranty</span>
                        </div>
                        <div className="flex flex-col items-center gap-3">
                            <PiggyBank className="w-8 h-8 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Best Value Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* DESIGN CATEGORIES */}
            <div className="py-48 bg-white w-full border-t border-gray-50 mb-32">
                <div className="container mx-auto px-8 text-center max-w-7xl">
                    <div className="mb-32 space-y-4">
                        <h2 className="text-5xl md:text-6xl font-black text-gray-900 uppercase tracking-tighter">Explore <span className="text-[#c41e3a]">Solutions</span></h2>
                        <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">Premium designs crafted for every corner of your domestic sanctuary.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {mainCategories.map((item, index) => (
                            <div key={index} className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col aspect-[4/5] group relative">
                                <div className="relative h-[55%] overflow-hidden">
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-12 flex flex-col flex-grow bg-white items-center text-center justify-between">
                                    <div className="space-y-6">
                                        <div className="text-[#c41e3a] p-4 bg-red-50 rounded-2xl w-fit mx-auto group-hover:bg-[#c41e3a] group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <h3 className="text-3xl font-black text-gray-900 uppercase tracking-tighter leading-tight">{item.title}</h3>
                                        <p className="text-lg text-gray-400 font-light leading-relaxed line-clamp-2">{item.desc}</p>
                                    </div>
                                    <button className="bg-gray-900 hover:bg-[#c41e3a] text-white px-10 py-4 rounded-xl font-black text-sm transition-all uppercase tracking-widest mt-6">
                                        Get Estimate
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* THE PROCESS */}
            <div className="py-48 bg-gray-50/50 w-full mb-32 border-y border-gray-100">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row gap-24 items-center">
                        <div className="w-full md:w-1/2 space-y-12">
                            <h2 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-tight">
                                THE <br />
                                <span className="text-[#c41e3a]">WAY</span>
                            </h2>
                            <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                                Our transparent, technology-driven approach ensures your home interior journey is smooth and predictable.
                            </p>
                            <div className="space-y-12">
                                {[
                                    { step: '01', title: 'Calculated Vision', desc: 'Use our AI to map your budget and material preferences instantly.' },
                                    { step: '02', title: 'Consultant Logic', desc: 'Meet our design experts to refine every detail with a free dedicated visit.' },
                                    { step: '03', title: 'Master Build', desc: 'Watch your vision come alive with German-engineered factory precision.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 items-start group">
                                        <span className="text-5xl font-black text-gray-100 group-hover:text-[#c41e3a] transition-colors leading-none">{item.step}</span>
                                        <div className="space-y-2 text-left">
                                            <h4 className="text-2xl font-black uppercase tracking-tighter text-gray-900">{item.title}</h4>
                                            <p className="text-lg text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
                                alt="Process Workflow"
                                className="w-full h-[600px] object-cover rounded-[50px] shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* PRICING SECTION */}
            <div className="py-48 bg-white w-full mb-32 border-b border-gray-50">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="text-center mb-40 space-y-4">
                        <h2 className="text-6xl font-black text-gray-900 uppercase tracking-tighter leading-none">Investment <span className="text-[#c41e3a]">Plans</span></h2>
                        <p className="text-xl text-gray-400 font-light max-w-3xl mx-auto">Transparent packages for every floor plan, inclusive of materials and labor.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full items-stretch">
                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col space-y-8 group hover:border-[#c41e3a] transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <h3 className="text-xl font-black text-gray-100 group-hover:text-[#c41e3a] uppercase tracking-widest leading-none">1BHK</h3>
                            <p className="text-5xl font-black text-gray-900 tracking-tighter leading-none">6.5<span className="text-2xl text-[#c41e3a] ml-1">L*</span></p>
                            <p className="text-lg text-gray-400 font-light italic">Smart compact living.</p>
                            <ul className="space-y-4 text-lg text-gray-500 font-light flex-grow py-6 border-y border-gray-50">
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> Full Kitchen</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> Living TV Unit</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> Master Bedroom</li>
                            </ul>
                            <button className="w-full py-5 rounded-xl font-black text-sm text-[#c41e3a] border-2 border-[#c41e3a] hover:bg-[#c41e3a] hover:text-white transition-all uppercase tracking-widest">ESTIMATE</button>
                        </div>

                        <div className="bg-gray-900 p-10 rounded-[40px] flex flex-col space-y-8 text-white transform md:scale-105 relative z-10 shadow-[0_40px_80px_rgba(0,0,0,0.3)]">
                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#c41e3a] text-white px-8 py-2 rounded-full font-black text-[10px] tracking-widest uppercase shadow-xl">MOST LOVED</div>
                            <h3 className="text-xl font-black text-red-100 uppercase tracking-widest leading-none">2BHK</h3>
                            <p className="text-5xl font-black text-white tracking-tighter leading-none">8.0<span className="text-2xl text-red-400 ml-1">L*</span></p>
                            <p className="text-lg text-red-50 font-light italic">Luxury balanced with utility.</p>
                            <ul className="space-y-4 text-lg text-red-50 font-light flex-grow py-6 border-y border-white/10">
                                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-red-400" /> Premium Kitchen</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-red-400" /> 2 Wardrobes</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-red-400 w-6 h-6" /> False Ceiling</li>
                            </ul>
                            <button className="w-full py-5 rounded-xl font-black text-sm bg-[#c41e3a] text-white hover:bg-[#a0182f] transition-all uppercase tracking-widest">GET QUOTE</button>
                        </div>

                        <div className="bg-white p-10 rounded-[40px] border border-gray-100 flex flex-col space-y-8 group hover:border-[#c41e3a] transition-all duration-500 shadow-sm hover:shadow-2xl">
                            <h3 className="text-xl font-black text-gray-100 group-hover:text-[#c41e3a] uppercase tracking-widest leading-none">3BHK</h3>
                            <p className="text-5xl font-black text-gray-900 tracking-tighter leading-none">14.<span className="text-2xl text-[#c41e3a]">0L*</span></p>
                            <p className="text-lg text-gray-400 font-light italic">Grandeur reimagined.</p>
                            <ul className="space-y-4 text-lg text-gray-500 font-light flex-grow py-6 border-y border-gray-50">
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> Luxury Finishes</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> 3 Wardrobes</li>
                                <li className="flex items-center gap-4"><CheckCircle2 className="text-[#c41e3a] w-5 h-5" /> Smart Home</li>
                            </ul>
                            <button className="w-full py-5 rounded-xl font-black text-sm text-[#c41e3a] border-2 border-[#c41e3a] hover:bg-[#c41e3a] hover:text-white transition-all uppercase tracking-widest">ESTIMATE</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* INTEGRITY SECTION */}
            <div className="py-48 bg-gray-900 text-white w-full mb-32 border-t border-white/5">
                <div className="container mx-auto px-8 max-w-7xl flex flex-col md:flex-row items-center gap-24">
                    <div className="w-full md:w-1/2 space-y-12">
                        <h2 className="text-6xl font-black uppercase tracking-tighter leading-tight">Absolute <br /> <span className="text-[#c41e3a]">Transparency</span></h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="space-y-4">
                                <ShieldCheck className="text-[#c41e3a] w-12 h-12" />
                                <h4 className="text-3xl font-black uppercase tracking-tighter leading-tight">No Hidden Charges</h4>
                                <p className="text-lg text-gray-400 font-light leading-relaxed">What you see on the estimate is exactly what you pay. No surprises.</p>
                            </div>
                            <div className="space-y-4">
                                <Clock className="text-[#c41e3a] w-12 h-12" />
                                <h4 className="text-3xl font-black uppercase tracking-tighter leading-tight">45-Day Delivery</h4>
                                <p className="text-lg text-gray-400 font-light leading-relaxed">From design sign-off to handover in record time or we pay you.</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <img
                            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
                            alt="Quality Assurance"
                            className="w-full h-[500px] object-cover rounded-[50px] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
                        />
                    </div>
                </div>
            </div>

            {/* FINAL CTA */}
            <div className="py-64 bg-[#c41e3a] text-white text-center w-full">
                <div className="container mx-auto px-8 max-w-4xl space-y-12">
                    <h2 className="text-6xl md:text-8xl font-black leading-tight tracking-tighter uppercase text-white">Start Your <br /><span className="text-red-100">Story</span></h2>
                    <p className="text-2xl md:text-3xl text-red-50 font-light leading-relaxed max-w-3xl mx-auto">
                        Ready to transform your vision into a German-engineered reality? Estimate your dream home in seconds.
                    </p>
                    <div className="pt-8">
                        <button className="bg-white text-[#c41e3a] text-2xl font-black py-8 px-20 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all leading-none uppercase tracking-tighter">
                            Estimate Cost
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeCalculator;
