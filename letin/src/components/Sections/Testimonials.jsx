import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star, ArrowLeft, ArrowRight } from 'lucide-react';

const testimonials = [
    {
        name: "Marcus Thorne",
        role: "Chief Technology Officer",
        company: "NexaCorp Global",
        content: "Letin transformed our legacy systems into a high-performance cloud fabric that cut operational overhead by 40%. Their technical precision is surgical and results are immediate.",
        stars: 5,
        id: 1
    },
    {
        name: "Sarah Chen",
        role: "VP of Engineering",
        company: "Stellar Systems",
        content: "The custom automation protocols developed by Letin have revolutionized our throughput. We've seen a 300% increase in pipeline efficiency since implementation.",
        stars: 5,
        id: 2
    },
    {
        name: "David Vance",
        role: "Director of Operations",
        company: "Prime Infrastructure",
        content: "Industrial-grade stability meets visionary design. Letin delivered a complex ecosystem ahead of schedule without a single protocol failure.",
        stars: 5,
        id: 3
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const next = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section id="testimonials" className="w-full py-24 md:py-40 px-6 md:px-12 relative overflow-hidden bg-white">
            <div className="container relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 lg:gap-32 items-center">

                    {/* Content Column */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-12">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="text-brand-accent font-black tracking-[0.7em] text-[10px] md:text-xs uppercase block">
                                Strategic Advocacy
                            </span>
                            <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-5xl xl:text-7xl text-slate-900 leading-[1.05] tracking-tight uppercase">
                                Trusted by <br />
                                <span className="text-brand-accent">Market Leaders.</span>
                            </h2>
                            <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed">
                                Our partnerships are forged in high-performance delivery and technical integrity.
                                We don't just sign clients; we secure their digital future.
                            </p>
                        </motion.div>

                        <div className="flex gap-6">
                            <button onClick={prev} className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-900 hover:shadow-2xl transition-all border border-slate-100 active:scale-90 shadow-lg group">
                                <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
                            </button>
                            <button onClick={next} className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:bg-brand-accent hover:border-brand-accent hover:shadow-2xl transition-all border border-slate-100 active:scale-90 shadow-lg group">
                                <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Testimonial Stage */}
                    <div className="lg:col-span-12 xl:col-span-7">
                        <div className="relative">
                            {/* Decorative Background Quote */}
                            <div className="absolute -top-16 -left-16 text-slate-100 pointer-events-none hidden md:block">
                                <Quote size={280} fill="currentColor" />
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 1.05, y: -40 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="card-light p-12 md:p-20 rounded-[4rem] border border-slate-100 relative z-10 bg-white shadow-2xl"
                                >
                                    <div className="flex gap-3 mb-12">
                                        {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                                            <Star key={i} size={20} className="text-brand-accent fill-brand-accent shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
                                        ))}
                                    </div>

                                    <p className="text-slate-700 text-2xl md:text-4xl font-light italic leading-tight mb-16 tracking-tight">
                                        "{testimonials[activeIndex].content}"
                                    </p>

                                    <div className="flex items-center gap-8 pt-12 border-t border-slate-100">
                                        <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-brand-accent font-black text-3xl border border-slate-200 shadow-md">
                                            {testimonials[activeIndex].name.charAt(0)}
                                        </div>
                                        <div>
                                            <h4 className="text-slate-900 font-orbitron font-black text-xl md:text-2xl uppercase tracking-wider mb-2">
                                                {testimonials[activeIndex].name}
                                            </h4>
                                            <p className="text-brand-accent/80 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
                                                {testimonials[activeIndex].role} <span className="text-slate-300 mx-3">|</span> {testimonials[activeIndex].company}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>
            </div>

            {/* Background Narrative Glow */}
            <div className="absolute -top-48 right-0 w-[800px] h-[800px] bg-brand-accent/[0.04] blur-[180px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Testimonials;
