import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight, Activity, ShieldCheck, Globe, Server } from 'lucide-react';

const stats = [
    { label: "Data Points Processed", value: 1200, suffix: "M+", icon: <Activity size={24} /> },
    { label: "Security Deployments", value: 480, suffix: "+", icon: <ShieldCheck size={24} /> },
    { label: "Strategic Partners", value: 85, suffix: "+", icon: <Globe size={24} /> },
    { label: "Uptime Reliability", value: 99.99, suffix: "%", icon: <Server size={24} /> }
];

const StatCounter = ({ value, suffix, label, icon }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (value % 1 === 0) {
                setDisplayValue(Math.floor(latest));
            } else {
                setDisplayValue(latest.toFixed(2));
            }
        });
    }, [springValue, value]);

    return (
        <div ref={ref} className="relative group">
            <div className="absolute inset-0 bg-brand-accent/5 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative z-10 p-8 rounded-[2rem] border border-slate-100 bg-white hover:border-brand-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4 opacity-50 group-hover:opacity-100 transition-opacity">
                    <div className="p-2 bg-slate-50 rounded-lg text-brand-accent">
                        {icon}
                    </div>
                </div>
                <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl md:text-5xl font-black font-jakarta text-slate-900 group-hover:text-brand-accent transition-colors duration-500">
                        {displayValue}
                    </span>
                    <span className="text-2xl font-black font-jakarta text-brand-accent">
                        {suffix}
                    </span>
                </div>
                <p className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 group-hover:text-slate-600 transition-colors">
                    {label}
                </p>
            </div>
        </div>
    );
};

const CounterCTA = () => {
    return (
        <section className="w-full py-24 md:py-40 px-6 md:px-12 relative bg-slate-50 overflow-hidden">
            {/* Background Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

            <div className="container mx-auto relative z-10">
                {/* Stats Counter */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-32 md:mb-48">
                    {stats.map((stat, i) => (
                        <StatCounter key={i} {...stat} />
                    ))}
                </div>

                {/* Main Command Center */}
                <div className="rounded-[4rem] p-12 md:p-24 relative overflow-hidden bg-white border border-slate-200 shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/[0.03] blur-[150px] rounded-full -mr-[200px] -mt-[200px] pointer-events-none" />

                    <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center relative z-10">

                        {/* Left: Strategic Context */}
                        <div className="lg:col-span-5 space-y-12">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="space-y-8"
                            >
                                <span className="px-4 py-2 rounded-full border border-brand-accent/20 bg-brand-accent/5 text-brand-accent font-black tracking-[0.2em] text-[10px] uppercase inline-block">
                                    Operational Readiness
                                </span>
                                <h2 className="cinematic-heading text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1] tracking-tight uppercase">
                                    Initiate <br />
                                    <span className="text-brand-accent stroke-text-light">Protocol.</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                                    Deploying high-load infrastructure requires elite strategy. Synchronize with our engineering team to formalize your technical roadmap.
                                </p>
                            </motion.div>

                            <div className="space-y-8 border-t border-slate-100 pt-10">
                                <div className="group cursor-pointer">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Secure Line</p>
                                    <div className="flex items-center gap-4">
                                        <Mail className="text-brand-accent group-hover:scale-110 transition-transform" />
                                        <span className="text-xl md:text-2xl font-jakarta font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                                            communication@letainai.com
                                        </span>
                                    </div>
                                </div>
                                <div className="group cursor-pointer">
                                    <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-2">Global HQ</p>
                                    <div className="flex items-center gap-4">
                                        <Phone className="text-brand-accent group-hover:scale-110 transition-transform" />
                                        <span className="text-xl md:text-2xl font-jakarta font-bold text-slate-900 group-hover:text-brand-accent transition-colors">
                                            +91 (22) 4500 8822
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Tactical Form */}
                        <div className="lg:col-span-7">
                            <form className="space-y-6 relative">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="group relative">
                                        <input
                                            type="text"
                                            placeholder=" "
                                            className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-6 py-6 rounded-t-2xl text-slate-900 font-bold outline-none focus:border-brand-accent focus:bg-slate-50/50 transition-all placeholder-transparent"
                                        />
                                        <label className="absolute left-6 top-6 text-xs font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-brand-accent">
                                            Project Identifier
                                        </label>
                                    </div>
                                    <div className="group relative">
                                        <input
                                            type="email"
                                            placeholder=" "
                                            className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-6 py-6 rounded-t-2xl text-slate-900 font-bold outline-none focus:border-brand-accent focus:bg-slate-50/50 transition-all placeholder-transparent"
                                        />
                                        <label className="absolute left-6 top-6 text-xs font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-brand-accent">
                                            Corporate Vector
                                        </label>
                                    </div>
                                </div>

                                <div className="group relative">
                                    <textarea
                                        rows="4"
                                        placeholder=" "
                                        className="peer w-full bg-slate-50 border-b-2 border-slate-200 px-6 py-6 rounded-t-2xl text-slate-900 font-bold outline-none focus:border-brand-accent focus:bg-slate-50/50 transition-all placeholder-transparent resize-none"
                                    ></textarea>
                                    <label className="absolute left-6 top-6 text-xs font-black uppercase tracking-widest text-slate-400 transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-xs peer-focus:top-2 peer-focus:text-[10px] peer-focus:text-brand-accent">
                                        Strategic Mission
                                    </label>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full bg-slate-900 text-white py-8 rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.5em] shadow-xl hover:shadow-2xl hover:shadow-brand-accent/20 transition-all group overflow-hidden relative"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-4">
                                        Transmit Briefing
                                        <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                </motion.button>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default CounterCTA;
