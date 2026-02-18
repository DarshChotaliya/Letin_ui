import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Zap, Shield, BarChart, Globe } from 'lucide-react';

const strengths = [
    {
        icon: <Target size={36} />,
        title: "Visionary Architecture",
        tag: "Strategic DNA",
        description: "We don't just solve immediate problems; we architect long-term digital supremacy with scalable enterprise DNA."
    },
    {
        icon: <Zap size={36} />,
        title: "High-Velocity Engineering",
        tag: "Kinetic Ops",
        description: "Bypassing industry bottlenecks with elite DevSecOps protocols and rapid-integration cycles that kill latency."
    },
    {
        icon: <Shield size={36} />,
        title: "Industrial-Grade Rigor",
        tag: "Zero-Trust",
        description: "Military-grade encryption and protocol compliance baked into every deployment, ensuring unbreakable resilience."
    },
    {
        icon: <BarChart size={36} />,
        title: "Data Intelligence",
        tag: "Neural Logic",
        description: "Turning raw operational metadata into predictive business assets through advanced ML-driven insights."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="w-full py-24 md:py-40 px-6 md:px-12 relative overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 items-center">

                    {/* Content Column */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                        <motion.div
                            initial={{ x: -40, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="text-brand-accent font-black tracking-[0.7em] text-[10px] md:text-xs uppercase block">
                                The Operational Alpha
                            </span>
                            <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-5xl xl:text-7xl text-slate-900 leading-[1.05] tracking-tight uppercase">
                                Engineered for <br />
                                <span className="text-brand-accent">Superiority.</span>
                            </h2>
                            <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed max-w-2xl">
                                Letin bridges the critical void between complex enterprise requirements and
                                frictionless, elite-tier digital performance.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { val: "100%", label: "Uptime Integrity", desc: "Enterprise SLA Grade" },
                                { val: "40%", label: "Latency Reduction", desc: "Operational Efficiency" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2, duration: 0.8 }}
                                    className="p-10 card-light rounded-[2.5rem] border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-500 bg-white shadow-xl"
                                >
                                    <div className="text-4xl md:text-6xl font-orbitron font-black text-brand-accent mb-3">
                                        {stat.val}
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em]">{stat.label}</p>
                                        <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">{stat.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99,102,241,0.2)" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-slate-900 text-white px-14 py-7 rounded-full font-black text-xs uppercase tracking-[0.4em] shadow-2xl transition-all relative overflow-hidden group"
                        >
                            <span className="relative z-10">View Technical Dossier</span>
                            <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.button>
                    </div>

                    {/* Strengths Grid */}
                    <div className="lg:col-span-12 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-10">
                        {strengths.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ y: 50, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                className="card-light p-10 lg:p-14 rounded-[3.5rem] border border-slate-100 hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-700 group relative overflow-hidden bg-white shadow-xl"
                            >
                                {/* Background Glow Pattern */}
                                <div className="absolute -top-4 -right-4 p-8 text-brand-accent/5 scale-[3] -rotate-12 transition-transform duration-1000 group-hover:scale-[3.5] group-hover:text-brand-accent/10">
                                    {item.icon}
                                </div>

                                <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                <div className="relative z-10 space-y-16">
                                    <div className="w-16 h-16 bg-slate-50 text-brand-accent rounded-2xl flex items-center justify-center border border-slate-100 group-hover:bg-brand-accent group-hover:border-transparent group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] transition-all duration-500 group-hover:scale-110 group-hover:text-white">
                                        <div>
                                            {React.cloneElement(item.icon, { size: 30 })}
                                        </div>
                                    </div>
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                                            <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.5em]">{item.tag}</span>
                                        </div>
                                        <h4 className="text-slate-900 font-black font-orbitron text-2xl uppercase tracking-wider leading-tight group-hover:text-brand-accent transition-colors duration-500">
                                            {item.title}
                                        </h4>
                                        <p className="text-slate-500 text-base leading-relaxed font-light group-hover:text-slate-700 transition-colors duration-500">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Background Narrative Glow */}
            <div className="absolute top-1/4 -right-48 w-[800px] h-[800px] bg-brand-accent/[0.05] blur-[180px] rounded-full pointer-events-none" />
            <div className="absolute bottom-1/4 -left-48 w-[600px] h-[600px] bg-brand-secondary/[0.03] blur-[150px] rounded-full pointer-events-none" />
        </section>
    );
};

export default WhyChooseUs;
