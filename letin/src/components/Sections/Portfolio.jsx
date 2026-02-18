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
        <section id="portfolio" className="w-full py-24 md:py-40 px-6 md:px-12 relative bg-slate-50 overflow-hidden">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container relative z-10 mx-auto">
                {/* Section Header */}
                <div className="mb-20 md:mb-32 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase block mb-6">
                            Selected Deployments
                        </span>
                        <h2 className="cinematic-heading text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.9] tracking-tighter uppercase">
                            Elite Case <br />
                            <span className="text-brand-accent stroke-text-light">Studies.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">

                    {/* Navigation Sidebar */}
                    <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
                        {projects.map((project, i) => (
                            <button
                                key={project.id}
                                onClick={() => setActive(i)}
                                className={`group relative w-full text-left p-8 rounded-[2rem] transition-all duration-500 border ${active === i ? 'bg-white shadow-2xl border-brand-accent/20 scale-105' : 'bg-transparent border-transparent hover:bg-white/50 hover:border-slate-200'}`}
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] transition-colors ${active === i ? 'text-brand-accent' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                        0{i + 1}
                                    </span>
                                    {active === i && (
                                        <motion.div layoutId="active-dot" className="w-2 h-2 bg-brand-accent rounded-full animate-pulse" />
                                    )}
                                </div>
                                <h3 className={`text-2xl font-orbitron font-black uppercase tracking-tight transition-colors ${active === i ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-800'}`}>
                                    {project.title}
                                </h3>
                                <div className={`overflow-hidden transition-all duration-500 ${active === i ? 'max-h-20 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-slate-500 text-sm font-light leading-relaxed">
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
                                initial={{ opacity: 0, x: 20, scale: 0.98 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -20, scale: 0.98 }}
                                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="relative h-[600px] md:h-[700px] w-full rounded-[3rem] overflow-hidden shadow-2xl group border border-slate-200 bg-white"
                            >
                                {/* Active Image */}
                                <img
                                    src={projects[active].image}
                                    alt={projects[active].title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                                {/* Floating Details */}
                                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">

                                        <div className="space-y-6 max-w-xl">
                                            <div className="flex items-center gap-4">
                                                <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/10">
                                                    <span className="text-white text-[10px] font-black uppercase tracking-[0.3em]">
                                                        {projects[active].client}
                                                    </span>
                                                </div>
                                                <div className="h-px w-12 bg-white/20" />
                                                <span className="text-brand-accent/80 text-[10px] font-black uppercase tracking-[0.3em]">
                                                    {projects[active].category}
                                                </span>
                                            </div>
                                            <h3 className="text-4xl md:text-5xl font-orbitron font-black text-white uppercase leading-tight">
                                                {projects[active].title}
                                            </h3>
                                        </div>

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4">
                                            {projects[active].stats.map((stat, idx) => (
                                                <div key={idx} className="p-5 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10">
                                                    <p className="text-2xl md:text-3xl font-orbitron font-black text-brand-accent mb-1">
                                                        {stat.value}
                                                    </p>
                                                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">
                                                        {stat.label}
                                                    </p>
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                </div>

                                {/* Tech Decoration */}
                                <div className="absolute top-8 right-8 text-white/20">
                                    <Cpu size={48} strokeWidth={1} />
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>

            {/* Ambient Glows */}
            <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-brand-accent/[0.03] blur-[200px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Portfolio;
