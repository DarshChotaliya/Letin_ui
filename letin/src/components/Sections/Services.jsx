import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Globe, Cpu, Zap, BarChart3, ShieldCheck, ChevronRight, Binary, Fingerprint, Layers } from 'lucide-react';

const services = [
    {
        id: 'enterprise',
        icon: <Binary size={40} />,
        title: "Enterprise AI & ML",
        tagline: "Neural Supremacy",
        description: "Deploying proprietary neural architectures and predictive models to automate mission-critical decision-making at global scale.",
        features: ["Predictive Analytics", "Natural Language Processing", "Custom LLM Fine-tuning", "Autonomous Logic Fabric"]
    },
    {
        id: 'software',
        icon: <Layers size={40} />,
        title: "High-Load Infrastructure",
        tagline: "Atomic Stability",
        description: "Engineering scalable distributed systems capable of handling billions of concurrent operations with zero-latency overhead.",
        features: ["Microservices Mesh", "Kubernetes Orchestration", "Edge Intelligence", "Real-time Data Fabric"]
    },
    {
        id: 'security',
        icon: <Fingerprint size={40} />,
        title: "Cyber Resilience",
        tagline: "Proactive Defense",
        description: "Hardening your digital perimeter with advanced threat intelligence and zero-trust security frameworks that stay ahead of the curve.",
        features: ["Zero-Trust Architecture", "Continuous Monitoring", "Quantum-Safe Encryption", "Identity Management"]
    }
];

const Services = () => {
    const [activeSvc, setActiveSvc] = useState(0);

    return (
        <section id="services" className="w-full py-24 md:py-40 px-6 md:px-12 relative overflow-hidden bg-white">
            {/* Background Narrative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-brand-accent/[0.03] blur-[180px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-start">

                    {/* Left: Content Hierarchy */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase block">
                                Core Capabilities
                            </span>
                            <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-5xl xl:text-7xl text-slate-900 leading-[1.05] tracking-tight uppercase">
                                Elite Digital <br />
                                <span className="text-brand-accent">Engineering.</span>
                            </h2>
                            <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-xl">
                                We don't just build software; we engineer competitive advantages
                                through technical supremacy and industrial-grade reliability.
                            </p>
                        </motion.div>

                        <div className="space-y-6">
                            {services.map((svc, i) => (
                                <button
                                    key={svc.id}
                                    onClick={() => setActiveSvc(i)}
                                    className={`w-full p-8 md:p-12 flex items-center justify-between rounded-[3rem] transition-all duration-700 group relative overflow-hidden border ${activeSvc === i ? 'bg-white border-brand-accent/40 shadow-2xl' : 'bg-transparent border-slate-100 hover:border-brand-accent/20'}`}
                                >
                                    {/* Active/Hover Glow Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-accent/[0.08] to-transparent transition-opacity duration-700 ${activeSvc === i ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                                    <div className="flex items-center gap-8 relative z-10 w-full">
                                        <div className={`transition-all duration-700 p-5 rounded-2xl border flex-shrink-0 ${activeSvc === i ? 'scale-110 text-white bg-gradient-to-br from-brand-accent to-brand-secondary border-transparent shadow-[0_0_30px_rgba(99,102,241,0.3)]' : 'bg-slate-50 border-slate-100 text-brand-accent opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:bg-brand-accent group-hover:text-white group-hover:border-transparent'}`}>
                                            {React.cloneElement(svc.icon, { size: 32 })}
                                        </div>
                                        <div className="text-left">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-1.5 h-1.5 rounded-full bg-brand-accent transition-all duration-700 ${activeSvc === i ? 'animate-pulse opacity-100' : 'opacity-0 group-hover:opacity-30'}`} />
                                                <p className={`font-jakarta font-black text-xl md:text-2xl uppercase tracking-wider transition-colors duration-500 ${activeSvc === i ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                                                    {svc.title}
                                                </p>
                                            </div>
                                            <p className={`text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mt-2 transition-colors duration-500 ${activeSvc === i ? 'text-brand-accent' : 'text-slate-300'}`}>
                                                {svc.tagline}
                                            </p>
                                        </div>
                                    </div>
                                    <ChevronRight className={`relative z-10 transition-all duration-700 ${activeSvc === i ? 'text-brand-accent translate-x-0 opacity-100' : '-translate-x-4 opacity-0 group-hover:opacity-40 group-hover:translate-x-[-8px]'}`} />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right: Dynamic Feature Display */}
                    <div className="lg:col-span-7 h-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeSvc}
                                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                                animate={{ opacity: 1, x: 0, scale: 1 }}
                                exit={{ opacity: 0, x: -50, scale: 1.05 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="card-light p-12 md:p-24 rounded-[4rem] border border-slate-100 relative overflow-hidden h-full flex flex-col justify-center min-h-[700px] bg-white shadow-2xl"
                            >
                                <div className="absolute -top-10 -right-10 p-24 opacity-[0.03] scale-[4] rotate-12 transition-transform duration-1000 text-brand-accent">
                                    {services[activeSvc].icon}
                                </div>

                                <div className="relative z-10 space-y-16">
                                    <div className="space-y-8">
                                        <h3 className="text-4xl md:text-7xl font-jakarta font-black text-slate-900 uppercase tracking-tighter leading-tight">
                                            {services[activeSvc].title}
                                        </h3>
                                        <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-2xl">
                                            {services[activeSvc].description}
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-16">
                                        {services[activeSvc].features.map((feature, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, y: 15 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + idx * 0.1, duration: 0.6 }}
                                                className="flex items-center gap-6 group"
                                            >
                                                <div className="w-4 h-4 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:border-brand-accent transition-colors">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_15px_rgba(99,102,241,0.5)]" />
                                                </div>
                                                <span className="text-slate-700 font-bold text-sm md:text-lg tracking-widest uppercase group-hover:text-brand-accent transition-colors">
                                                    {feature}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="pt-12">
                                        <motion.button
                                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.2)" }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-6 bg-slate-900 text-white px-16 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all relative overflow-hidden group"
                                        >
                                            <span className="relative z-10">Consultation Dispatch</span>
                                            <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            <ChevronRight size={20} className="relative z-10" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
