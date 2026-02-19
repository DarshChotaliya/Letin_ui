import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Shield, Zap, ArrowRight, Building2, ShoppingBag, HeartPulse, Hammer, Plane, Truck } from 'lucide-react';

const industries = [
    {
        id: 'retail',
        title: "Retail & E-Commerce",
        desc: "Transforming shopping experiences through AI-driven personalization and high-performance logistics automation.",
        icon: <ShoppingBag size={24} />,
        stats: "150+ Stores Powered"
    },
    {
        id: 'manufacturing',
        title: "Industrial Manufacturing",
        desc: "Optimizing supply chains and production lines with enterprise IoT and predictive maintenance systems.",
        icon: <Hammer size={24} />,
        stats: "30% Efficiency Gain"
    },
    {
        id: 'healthcare',
        title: "Healthcare Tech",
        desc: "Engineering secure, compliant portals and patient management systems for modern medical practitioners.",
        icon: <HeartPulse size={24} />,
        stats: "HIPAA Compliant"
    },
    {
        id: 'logistics',
        title: "Transport & Logistics",
        desc: "Next-gen fleet tracking and route optimization engines built for maximum throughput and transparency.",
        icon: <Truck size={24} />,
        stats: "Global Visibility"
    },
    {
        id: 'realestate',
        title: "Real Estate & PropTech",
        desc: "High-end property portals and virtual tour engines designed for premium architectural storytelling.",
        icon: <Building2 size={24} />,
        stats: "10k+ Listings"
    },
    {
        id: 'aviation',
        title: "Aerospace & Defense",
        desc: "Mission-critical software support for navigation, simulation, and strategic infrastructure monitoring.",
        icon: <Plane size={24} />,
        stats: "Military Grade"
    }
];

const IndustriesPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#fbfbfd]">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24">
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-6 block">Our Reach</span>
                        <h1 className="text-slate-900 text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9]">
                            Expertise across <br />
                            <span className="text-brand-accent italic">Every Sector.</span>
                        </h1>
                        <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl">
                            We deliver specialized technology solutions that overcome unique sectoral barriers
                            and drive industry-wide transformation.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="container mx-auto px-6 mb-32">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-slate-200 transition-all group"
                        >
                            <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-white transition-colors duration-500">
                                {item.icon}
                            </div>

                            <span className="text-brand-accent font-black text-[9px] uppercase tracking-widest mb-4 block">{item.stats}</span>
                            <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-slate-500 font-light leading-relaxed mb-10">
                                {item.desc}
                            </p>

                            <button className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover:text-brand-accent transition-colors">
                                Industry Insights <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                            </button>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Expertise Section */}
            <section className="bg-slate-900 py-32 overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <h2 className="text-white text-4xl md:text-6xl font-black tracking-tighter uppercase mb-12 leading-none">
                                Deep technical <span className="text-brand-accent italic">Dominance.</span>
                            </h2>
                            <div className="space-y-8">
                                {[
                                    { title: "Strategic Integration", desc: "We don't just build software; we integrate it into your specific industry workflows." },
                                    { title: "Compliance Mastery", desc: "From GDPR to HIPAA, we ensure your technology stays on the right side of regulation." },
                                    { title: "Global Scalability", desc: "Our solutions are engineered to grow with you, from local startup to global powerhouse." }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex gap-8 group">
                                        <div className="text-brand-accent font-black text-4xl opacity-20 group-hover:opacity-100 transition-opacity">0{idx + 1}</div>
                                        <div>
                                            <h4 className="text-white text-xl font-bold mb-2 uppercase tracking-tight">{item.title}</h4>
                                            <p className="text-slate-400 font-light leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute -inset-10 bg-brand-accent/20 blur-[100px] rounded-full" />
                            <div className="relative border border-white/10 p-4 rounded-[4rem] bg-white/5 backdrop-blur-3xl">
                                <img
                                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1200"
                                    alt="Global Technology"
                                    className="rounded-[3.5rem] opacity-50 grayscale hover:grayscale-0 transition-all duration-1000"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default IndustriesPage;
