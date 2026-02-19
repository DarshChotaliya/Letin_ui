import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Zap, Heart, Globe, UserCheck } from 'lucide-react';

const CareersPage = () => {
    const benefits = [
        "Work on real products, not just repetitive client tasks",
        "A flexible work culture with a strong get things done mindset",
        "A fast learning environment where your growth matches the company's growth",
        "A team that values honesty, curiosity, and innovation",
        "Opportunities to move between projects and learn multiple technologies",
        "A voice in shaping what we build next, your ideas truly matter"
    ];

    return (
        <div className="min-h-screen bg-[#fbfbfd]">
            {/* Hero Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-brand-accent">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] border border-white rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white rounded-full shadow-[0_0_100px_rgba(255,255,255,0.2)]" />
                </div>

                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-10 text-white border border-white/20">
                            <Sparkles size={32} />
                        </div>
                        <h1 className="text-white text-6xl md:text-9xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Careers
                        </h1>
                        <p className="text-white/80 text-xl font-light leading-relaxed max-w-2xl mx-auto italic">
                            "We're building a place where quality matters, ideas are heard, and growth is real.
                            If you want to work on meaningful projects with modern technology, we'd like to talk."
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Impact Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Build. <br />
                            Innovate. <br />
                            <span className="text-brand-accent italic">Make an Impact.</span>
                        </h2>
                        <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                            We build real products and systems at Letin Solution, from high-performance software
                            platforms to mission-critical AI solutions. You will work in a close-knit team
                            where ownership matters and your work reaches users everywhere.
                        </p>
                        <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-xl">
                            Current Openings
                        </button>
                    </motion.div>

                    <div className="relative group">
                        <div className="absolute -inset-4 bg-brand-accent/20 blur-2xl rounded-[3rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200"
                                alt="Team Culture"
                                className="w-full h-80 lg:h-[500px] object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Culture List Section */}
            <section className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-24"
                    >
                        <h2 className="text-slate-900 text-4xl md:text-6xl font-black tracking-tighter uppercase mb-6">
                            Life at Letin Solution
                        </h2>
                        <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
                            We are building a culture where people grow by doing meaningful work.
                            Here, learning, ownership, and impact go hand in hand.
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        <div className="space-y-4">
                            {benefits.map((benefit, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    className="flex items-center gap-8 py-8 border-b border-slate-50 group hover:pl-6 transition-all duration-500"
                                >
                                    <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-accent group-hover:text-white transition-all">
                                        <ArrowRight size={20} />
                                    </div>
                                    <span className="text-slate-600 text-lg md:text-xl font-medium group-hover:text-slate-900 transition-colors">
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Application CTA */}
            <section className="py-24 container mx-auto px-6 mb-32">
                <div className="bg-slate-950 rounded-[5rem] p-12 md:p-32 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_70%)]" />

                    <div className="relative z-10 max-w-4xl">
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-10 block">Join the Mission</span>
                        <h2 className="text-white text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Don't just watch <br /> <span className="text-brand-accent italic">Create what's next.</span>
                        </h2>
                        <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all shadow-2xl flex items-center gap-6 group mx-auto">
                            View Opportunities <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;
