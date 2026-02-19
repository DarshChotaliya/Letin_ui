import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, Shield, Zap, Globe, Cpu, ChevronRight, BarChart3 } from 'lucide-react';

const projects = [
    {
        id: "alpha",
        title: "Omni-Channel Logistics",
        client: "Global Supply Chain",
        category: "Infrastructure",
        stats: [
            { label: "Flow Efficiency", value: "+35%" },
            { label: "Fuel Overhead", value: "-22%" }
        ],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1600",
        description: "Executing a predictive logistics engine utilizing real-time stardust-data mapping to optimize global fleet movements."
    },
    {
        id: "neural",
        title: "Secure Ledger Interface",
        client: "Neobank Fintech",
        category: "Security",
        stats: [
            { label: "Vulnerability", value: "0%" },
            { label: "Asset Volume", value: "$40B+" }
        ],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1600",
        description: "Industrial-grade neobanking dashboard with biometric neural-encryption for high-net-worth transactional security."
    },
    {
        id: "delta",
        title: "Adaptive Cloud Mesh",
        client: "Enterprise SaaS",
        category: "Architecture",
        stats: [
            { label: "Availability", value: "99.99%" },
            { label: "Global Nodes", value: "240+" }
        ],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1600",
        description: "Architecting a multi-region cloud fabric with autonomous self-healing protocols to ensure absolute system persistence."
    }
];

const Portfolio = () => {
    const [active, setActive] = useState(0);

    return (
        <section id="portfolio" className="w-full py-24 md:py-48 px-6 md:px-12 relative bg-[#05070a] overflow-hidden">
            {/* Background Narrative Fog */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/[0.05] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/[0.03] blur-[130px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-end mb-24 md:mb-40">
                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                        >
                            <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] md:text-xs uppercase block mb-8">
                                Strategic Deployments
                            </span>
                            <h2 className="cinematic-heading text-5xl md:text-8xl lg:text-9xl text-white leading-[0.85] tracking-tighter uppercase">
                                Elite Case <br />
                                <span className="text-brand-accent">Studies.</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="lg:col-span-4 pb-4">
                        <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed">
                            A curated showcase of industrial-grade technical solutions delivered to global market leaders.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-6">
                        {projects.map((project, i) => (
                            <button
                                key={project.id}
                                onClick={() => setActive(i)}
                                className={`group relative w-full text-left p-10 rounded-[2.5rem] transition-all duration-700 border ${active === i ? 'bg-white/[0.03] border-brand-accent/30 shadow-2xl scale-[1.02]' : 'bg-transparent border-white/5 hover:bg-white/[0.01] hover:border-white/10'}`}
                            >
                                <div className="flex justify-between items-center mb-6">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.4em] transition-colors duration-500 ${active === i ? 'text-brand-accent' : 'text-slate-600 group-hover:text-slate-400'}`}>
                                        Protocol 0{i + 1}
                                    </span>
                                    {active === i && (
                                        <motion.div layoutId="case-active" className="w-2 h-2 bg-brand-accent rounded-full shadow-[0_0_15px_rgba(99,102,241,1)]" />
                                    )}
                                </div>
                                <h3 className={`text-2xl font-orbitron font-black uppercase tracking-tight transition-colors duration-500 ${active === i ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'}`}>
                                    {project.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-700 ${active === i ? 'max-h-32 opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-400 text-sm font-light leading-relaxed">
                                        {project.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Immersive Preview Card */}
                    <div className="lg:col-span-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={active}
                                initial={{ opacity: 0, filter: "blur(20px)", scale: 0.98 }}
                                animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
                                exit={{ opacity: 0, filter: "blur(20px)", scale: 1.02 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="relative h-[600px] md:h-[800px] w-full rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] group border border-white/10"
                            >
                                <img
                                    src={projects[active].image}
                                    alt={projects[active].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />
                                <div className="absolute inset-0 bg-slate-900/40 mix-blend-overlay" />

                                {/* Floating Details */}
                                <div className="absolute bottom-0 left-0 w-full p-12 md:p-20">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
                                        <div className="space-y-8 max-w-2xl">
                                            <div className="flex items-center gap-6">
                                                <div className="px-6 py-2 bg-white/5 backdrop-blur-xl rounded-full border border-white/10">
                                                    <span className="text-white text-[9px] font-black uppercase tracking-[0.4em]">
                                                        {projects[active].client}
                                                    </span>
                                                </div>
                                                <div className="h-px w-10 bg-brand-accent/30" />
                                                <span className="text-brand-accent font-black text-[9px] uppercase tracking-[0.4em]">
                                                    {projects[active].category}
                                                </span>
                                            </div>
                                            <h3 className="text-4xl md:text-6xl font-orbitron font-black text-white uppercase leading-[0.9] tracking-tighter">
                                                {projects[active].title}
                                            </h3>
                                        </div>

                                        <div className="grid grid-cols-2 gap-6 md:gap-8">
                                            {projects[active].stats.map((stat, idx) => (
                                                <div key={idx} className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 group-hover:bg-brand-accent/10 transition-colors duration-500">
                                                    <p className="text-2xl md:text-4xl font-orbitron font-black text-brand-accent mb-2">
                                                        {stat.value}
                                                    </p>
                                                    <p className="text-slate-500 text-[9px] uppercase font-black tracking-[0.3em]">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="absolute top-12 right-12 text-white/10 group-hover:text-brand-accent/20 transition-colors duration-1000">
                                    <Cpu size={64} strokeWidth={1} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
