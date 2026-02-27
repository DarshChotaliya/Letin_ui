import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="w-full h-full min-w-full flex items-center justify-center py-24 md:py-40 relative overflow-hidden bg-white">
            {/* Background Narrative Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-brand-accent/5 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-brand-secondary/5 blur-[150px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                    {/* Content Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="text-brand-accent text-[10px] md:text-xs font-black tracking-[0.6em] uppercase mb-8 block">
                            Meet LetainAI
                        </span>

                        <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1] mb-8 uppercase tracking-tighter">
                            Transforming Ideas Into <br />
                            <span className="text-brand-accent">Digital Reality</span>
                        </h2>

                        <div className="space-y-6 md:space-y-8 mb-12 md:mb-16">
                            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                                At LetainAI, we believe technology should simplify, not complicate. Our mission is to help businesses grow with innovative digital solutions, custom software development, and intelligent automation.
                            </p>
                            <p className="text-slate-400 text-base md:text-lg font-light leading-relaxed max-w-2xl italic">
                                From strategy to execution, we blend creativity with technical expertise to deliver scalable, future-ready IT services that drive real business transformation.
                            </p>
                        </div>

                        {/* Glass Stats Modules */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {[
                                { val: "10+", label: "Years Experience", desc: "Proven track record" },
                                { val: "150+", label: "Projects Done", desc: "Global deployments" }
                            ].map((stat, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5, scale: 1.02 }}
                                    className="card-light p-10 rounded-[2.5rem] relative group overflow-hidden bg-white border border-slate-100 shadow-xl"
                                >
                                    <div className="absolute top-0 left-0 w-1 h-full bg-slate-200 group-hover:bg-brand-accent transition-colors duration-500" />
                                    <div className="relative z-10">
                                        <h4 className="text-slate-900 font-jakarta font-black text-4xl md:text-5xl mb-3 group-hover:text-brand-accent transition-colors duration-500">
                                            {stat.val}
                                        </h4>
                                        <p className="text-slate-500 text-[10px] md:text-xs font-black tracking-widest uppercase mb-1">
                                            {stat.label}
                                        </p>
                                        <p className="text-slate-300 text-[9px] uppercase font-bold tracking-widest">
                                            {stat.desc}
                                        </p>
                                    </div>
                                    <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-brand-accent/5 rounded-full blur-2xl group-hover:bg-brand-accent/10 transition-colors" />
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side: Digital Core */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5 }}
                        className="relative hidden lg:block"
                    >
                        <div className="aspect-square relative flex items-center justify-center">
                            {/* Orbital Rings */}
                            {[1, 2, 3].map((ring) => (
                                <motion.div
                                    key={ring}
                                    animate={{ rotate: ring % 2 === 0 ? 360 : -360 }}
                                    transition={{ duration: 15 + ring * 5, repeat: Infinity, ease: "linear" }}
                                    className="absolute border border-slate-100 rounded-full border-dashed"
                                    style={{
                                        width: `${40 + ring * 20}%`,
                                        height: `${40 + ring * 20}%`
                                    }}
                                />
                            ))}

                            {/* Center Energy Core */}
                            <div className="relative w-56 h-56 flex items-center justify-center">
                                <motion.div
                                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute w-full h-full bg-brand-accent/10 rounded-full blur-[60px]"
                                />
                                <div className="bg-white w-40 h-40 rounded-full flex items-center justify-center relative z-20 border border-slate-100 shadow-2xl">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                                        className="w-32 h-32 border-2 border-brand-accent/20 rounded-full border-t-brand-accent shadow-[0_0_50px_rgba(99,102,241,0.1)]"
                                    />
                                    <div className="absolute w-6 h-6 bg-slate-900 rounded-xl shadow-lg flex items-center justify-center">
                                        <div className="w-1.5 h-1.5 bg-brand-accent rounded-full animate-pulse" />
                                    </div>
                                </div>
                            </div>

                            {/* Floating Tech Modules */}
                            {[
                                { label: "Cloud Ready", pos: "top-10 right-10", delay: 0 },
                                { label: "Secure Core", pos: "bottom-10 left-10", delay: 1 },
                                { label: "Scalable BI", pos: "top-1/4 left-0", delay: 0.5 }
                            ].map((mod, i) => (
                                <motion.div
                                    key={i}
                                    animate={{ y: [0, -15, 0] }}
                                    transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: mod.delay }}
                                    className={`absolute ${mod.pos} bg-white/80 backdrop-blur-xl px-8 py-5 rounded-3xl border border-slate-100 shadow-xl z-30`}
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="w-2.5 h-2.5 bg-brand-accent rounded-full animate-ping" />
                                        <p className="text-slate-900 font-black text-xs tracking-[0.2em] uppercase">
                                            {mod.label}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
