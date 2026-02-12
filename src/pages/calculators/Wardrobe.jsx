import React from 'react';
import { ShieldCheck, MessageSquare, Shirt, CheckCircle2, Star, Award, Columns, Maximize2, Archive } from 'lucide-react';

const WardrobeCalculator = () => {
    return (
        <div className="bg-white font-sans text-gray-900 w-full overflow-x-hidden">
            {/* HERO SECTION */}
            <div className="relative min-h-[85vh] flex items-center justify-center py-32 w-full overflow-hidden mb-24">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1558997519-83ea9252edf8?auto=format&fit=crop&w=2400&q=80"
                        alt="Elegant Wardrobe"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
                </div>

                <div className="container mx-auto px-8 relative z-10 text-center space-y-10 max-w-5xl">
                    <div className="inline-block px-6 py-2 bg-red-50 text-[#c41e3a] rounded-full font-bold text-sm tracking-widest uppercase mb-4 leading-none">
                        Storage Optimization
                    </div>
                    <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter uppercase mx-auto">
                        Wardrobe <br />
                        <span className="text-[#c41e3a]">Estimator</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 w-full max-w-3xl mx-auto leading-relaxed font-light tracking-tight">
                        Maximize your space with personalized storage solutions. Fast, itemized, and honest pricing for your custom wardrobe.
                    </p>

                    <div className="pt-8 flex flex-wrap justify-center gap-6">
                        <button className="bg-[#c41e3a] hover:bg-[#a0182f] text-white text-lg font-black py-6 px-12 rounded-full shadow-2xl transition-all duration-500 transform hover:scale-105">
                            Estimate Wardrobe Cost
                        </button>
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 pt-16 opacity-60">
                        <div className="flex flex-col items-center gap-4">
                            <Shirt className="w-10 h-10 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Space Optimized</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <ShieldCheck className="w-10 h-10 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Durable Materials</span>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <MessageSquare className="w-10 h-10 text-[#c41e3a]" />
                            <span className="font-bold uppercase tracking-[0.2em] text-[10px]">Design Guidance</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* PROCESS SECTION */}
            <div className="py-48 bg-white border-t border-gray-50 mb-24">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="max-w-4xl mx-auto text-center mb-32 space-y-6">
                        <h2 className="text-6xl font-black text-gray-900 tracking-tighter uppercase">How To Plan Your Storage</h2>
                        <p className="text-2xl text-gray-400 font-light max-w-2xl mx-auto">Everything you need to know about customizing your wardrobe budget.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                        {[
                            { step: '01', title: 'Enter Dimensions', desc: 'Provide the height and width of your wall space to get a baseline structure estimate.' },
                            { step: '02', title: 'Select Door Type', desc: 'Choose between classic Swing Doors or space-saving Sliding mechanisms.' },
                            { step: '03', title: 'Add Accessories', desc: 'Configure drawers, pull-outs, and organizers to see the final itemized cost.' }
                        ].map((item, i) => (
                            <div key={i} className="space-y-8 group text-center md:text-left">
                                <h3 className="text-8xl font-black text-gray-50 group-hover:text-red-50 transition-colors leading-[0.8]">
                                    {item.step}
                                </h3>
                                <div className="space-y-4">
                                    <h4 className="text-3xl font-black text-[#c41e3a] uppercase tracking-tighter leading-tight">{item.title}</h4>
                                    <p className="text-xl text-gray-400 font-light leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* OPTIONS SECTION */}
            <div className="py-48 bg-red-50/10 w-full mb-24 border-y border-red-50">
                <div className="container mx-auto px-8 max-w-7xl">
                    <h2 className="text-6xl font-black mb-32 text-center text-gray-900 tracking-tighter uppercase leading-none">Wardrobe <span className="text-[#c41e3a]">Alternatives</span></h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                        {[
                            { title: 'Sliding', desc: 'Ideal for narrow walkways and compact rooms.', bg: 'bg-white', text: 'text-gray-900', sub: 'text-gray-400' },
                            { title: 'Swing Door', desc: 'Timeless design with complete inner visibility.', bg: 'bg-[#c41e3a]', text: 'text-white', sub: 'text-red-100', highlight: true },
                            { title: 'Walk-In', desc: 'The ultimate luxury storage for your collections.', bg: 'bg-white', text: 'text-gray-900', sub: 'text-gray-400' },
                            { title: 'Glass Shutter', desc: 'Add depth and elegance with tinted or clear glass.', bg: 'bg-white', text: 'text-gray-900', sub: 'text-gray-400' }
                        ].map((item, i) => (
                            <div key={i} className={`${item.bg} p-16 rounded-[40px] text-center shadow-sm border border-gray-50 flex flex-col items-center justify-center space-y-6 group hover:-translate-y-2 transition-all duration-500`}>
                                <h3 className={`text-4xl font-black uppercase tracking-tighter ${item.text}`}>{item.title}</h3>
                                <p className={`text-xl font-light ${item.sub} max-w-sm mx-auto`}>{item.desc}</p>
                                <div className={`w-16 h-1.5 ${item.highlight ? 'bg-white' : 'bg-[#c41e3a]'} rounded-full`}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ART OF STORAGE */}
            <div className="py-48 bg-white w-full mb-24">
                <div className="container mx-auto px-8 max-w-7xl">
                    <div className="flex flex-col md:flex-row-reverse gap-24 items-center">
                        <div className="w-full md:w-1/2">
                            <img
                                src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&w=1200&q=80"
                                alt="Wardrobe Organization"
                                className="w-full h-[600px] object-cover rounded-[50px] shadow-2xl"
                            />
                        </div>
                        <div className="w-full md:w-1/2 space-y-12 text-center md:text-left">
                            <h2 className="text-6xl font-black leading-tight tracking-tighter uppercase">The Art of <br /> <span className="text-[#c41e3a]">Storage</span></h2>
                            <p className="text-2xl text-gray-500 font-light leading-relaxed">
                                We don't just build furniture; we engineer storage. Our wardrobes provide up to 20% more space using smart internal partitioning.
                            </p>

                            <div className="space-y-10 pt-8">
                                {[
                                    { icon: <Columns className="w-10 h-10" />, title: 'Vertical Efficiency', desc: 'Floor-to-ceiling designs for maximum utility.' },
                                    { icon: <Maximize2 className="w-10 h-10" />, title: 'Smart Depth', desc: 'Standardized 24-inch depth for optimal folding space.' },
                                    { icon: <Archive className="w-10 h-10" />, title: 'Modular Internal', desc: 'Rearrange shelves as your needs evolve over time.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 items-center border-b border-gray-100 pb-10 group hover:translate-x-4 transition-all duration-500">
                                        <div className="p-4 bg-red-50 rounded-2xl text-[#c41e3a] group-hover:bg-[#c41e3a] group-hover:text-white transition-colors">
                                            {item.icon}
                                        </div>
                                        <div className="text-left">
                                            <h4 className="text-3xl font-black uppercase tracking-tighter text-gray-900">{item.title}</h4>
                                            <p className="text-xl text-gray-400 font-light">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* STORAGE FAQ */}
            <div className="py-48 bg-gray-50/50 w-full mb-24 border-y border-gray-100">
                <div className="container mx-auto px-8 max-w-6xl">
                    <h2 className="text-6xl font-black mb-32 text-center text-gray-900 tracking-tighter uppercase leading-none">Storage <span className="text-[#c41e3a]">FAQ</span></h2>

                    <div className="space-y-8">
                        {[
                            { q: 'Sliding vs Swing: Which is better?', a: 'Sliding wardrobes save space in tight rooms as they don\'t need clearance to open. Swing doors allow you to view the entire contents at once.' },
                            { q: 'What is the standard wardrobe height?', a: 'Standard wardrobes are 7 feet tall, but we recommend ceiling-height (8 or 9 feet) units with lofts for maximizing storage.' },
                            { q: 'Can I choose my internal layout?', a: 'Absolutely. Our designers work with you to customize every shelf, drawer, and hanger rod position.' }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-50 space-y-4 shadow-sm">
                                <h3 className="text-3xl font-black text-[#c41e3a] uppercase tracking-tighter leading-tight">{item.q}</h3>
                                <p className="text-xl text-gray-500 leading-relaxed font-light">{item.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* FINAL CTA */}
            <div className="py-64 bg-[#c41e3a] text-white text-center w-full">
                <div className="container mx-auto px-8 max-w-5xl space-y-12">
                    <h2 className="text-7xl md:text-8xl font-black tracking-tighter leading-tight uppercase">Unclutter <br /> <span className="text-red-100">Your Life.</span></h2>
                    <p className="text-2xl md:text-3xl text-red-50 max-w-4xl mx-auto font-light leading-relaxed">
                        Design a wardrobe that understands your lifestyle. Get your instant price estimate now.
                    </p>
                    <div className="pt-8">
                        <button className="bg-white text-[#c41e3a] text-3xl font-black py-8 px-24 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all uppercase leading-none tracking-tighter">
                            YES, PRICE MY WARDROBE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WardrobeCalculator;
