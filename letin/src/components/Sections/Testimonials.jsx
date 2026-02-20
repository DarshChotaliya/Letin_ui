import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Quote, Star, ShieldCheck, Award, Activity, Globe } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Marcus Thorne",
        role: "CHIEF TECHNOLOGY OFFICER",
        company: "NexaCorp Global",
        content: "Letin transformed our legacy systems into a high-performance cloud fabric that cut operational overhead by 40%. Their technical precision is surgical and results are immediate.",
        stars: 5,
        label: "AI INFRASTRUCTURE",
        metricValue: "40%",
        metricLabel: "Efficiency Increase",
        status: "Strategic Deployment"
    },
    {
        id: 2,
        name: "Sarah Chen",
        role: "VP OF ENGINEERING",
        company: "Stellar Systems",
        content: "The custom automation protocols developed by Letin have revolutionized our throughput. We've seen a 300% increase in pipeline efficiency since implementation.",
        stars: 5,
        label: "NEURAL AUTOMATION",
        metricValue: "300%",
        metricLabel: "Throughput Boost",
        status: "Core Implementation"
    },
    {
        id: 3,
        name: "David Vance",
        role: "DIRECTOR OF OPERATIONS",
        company: "Prime Infra",
        content: "Industrial-grade stability meets visionary design. Letin delivered a complex ecosystem ahead of schedule without a single protocol failure.",
        stars: 5,
        label: "CORE ARCHITECTURE",
        metricValue: "0%",
        metricLabel: "Protocol Latency",
        status: "Verified Integrity"
    }
];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const containerRef = useRef(null);

    // Auto-rotation Logic
    useEffect(() => {
        if (isPaused) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }, 2000);
        return () => clearInterval(interval);
    }, [isPaused]);

    // 3D Tilt Effect
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };


    return (
        <section id="testimonials" className="w-full pt-32 pb-48 px-6 md:px-12 relative overflow-hidden bg-[#02040a]">
            {/* Ambient Background Lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] bg-brand-accent/5 blur-[160px] rounded-full pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[140px] rounded-full pointer-events-none" />

            {/* Tech Grid */}
            <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:48px_48px]" />

            <div className="container relative z-10 mx-auto px-4">
                {/* Heading Section */}
                <div className="text-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-4"
                    >
                        <span className="text-brand-accent font-black tracking-[1em] text-[10px] md:text-xs uppercase block">
                            GLOBAL VALIDATION
                        </span>
                        <h2 className="cinematic-heading text-5xl md:text-8xl text-white font-black uppercase tracking-tighter leading-none">
                            ARCHITECTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">SUCCESS.</span>
                        </h2>
                        <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-brand-accent/50 to-transparent mx-auto mt-8" />
                    </motion.div>
                </div>

                <div className="max-w-7xl mx-auto relative group">

                    {/* Main Testimonial Stage */}
                    <motion.div
                        ref={containerRef}
                        onMouseMove={(e) => {
                            handleMouseMove(e);
                            setIsPaused(true);
                        }}
                        onMouseLeave={() => {
                            handleMouseLeave();
                            setIsPaused(false);
                        }}
                        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                        className="relative w-full"
                    >
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, filter: "blur(20px)", y: 30 }}
                                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                                exit={{ opacity: 0, filter: "blur(20px)", y: -30 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 30,
                                    restDelta: 0.001
                                }}
                                className="grid grid-cols-1 lg:grid-cols-12 bg-[#ffffff03] backdrop-blur-[40px] rounded-[32px] border border-white/[0.08] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden relative"
                            >
                                {/* Animated Light Reflection Surface */}
                                <motion.div
                                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05),transparent_70%)] pointer-events-none"
                                    animate={{
                                        opacity: [0.3, 0.5, 0.3],
                                        scale: [1, 1.1, 1]
                                    }}
                                    transition={{ duration: 8, repeat: Infinity }}
                                />

                                {/* Internal Shadow for Depth */}
                                <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] rounded-[32px] pointer-events-none" />

                                {/* Left Side: Brand Identity */}
                                <div className="lg:col-span-5 p-12 md:p-16 flex flex-col justify-between relative bg-gradient-to-br from-white/[0.04] to-transparent border-r border-white/5">
                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-accent/30 bg-brand-accent/10 mb-8">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shadow-[0_0_10px_rgba(99,102,241,1)]" />
                                            <span className="text-[10px] font-black text-brand-accent uppercase tracking-widest leading-none">{testimonials[activeIndex].label}</span>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-4xl font-black text-white uppercase tracking-tighter leading-none">
                                                {testimonials[activeIndex].company}
                                            </h4>
                                            <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.4em]">{testimonials[activeIndex].status}</p>
                                        </div>
                                    </div>

                                    <div className="relative z-10 pt-16">
                                        <div className="flex gap-1.5 mb-8">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={14} className="text-brand-accent fill-brand-accent/30 stroke-brand-accent" />
                                            ))}
                                        </div>
                                        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-md relative overflow-hidden group/metric transition-all duration-500 hover:bg-white/[0.05]">
                                            <div className="flex items-center gap-4 relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent">
                                                    <Activity size={20} />
                                                </div>
                                                <div>
                                                    <p className="text-2xl font-black text-white text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-secondary">
                                                        {testimonials[activeIndex].metricValue}
                                                    </p>
                                                    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">{testimonials[activeIndex].metricLabel}</p>
                                                </div>
                                            </div>
                                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover/metric:opacity-10 transition-opacity">
                                                <ShieldCheck size={40} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Subtle Background Watermark Glyph */}
                                    <div className="absolute -bottom-16 -left-16 text-white/[0.02] rotate-12 select-none pointer-events-none">
                                        <Globe size={400} strokeWidth={1} />
                                    </div>
                                </div>

                                {/* Right Side: Eloquent Quote side */}
                                <div className="lg:col-span-7 p-12 md:p-20 flex flex-col justify-between relative">
                                    <div className="relative">
                                        <Quote size={80} className="text-brand-accent/10 absolute -top-10 -left-10" />
                                        <p className="text-2xl md:text-4xl font-light text-slate-200 leading-[1.4] tracking-tight italic mb-16 relative z-10">
                                            "{testimonials[activeIndex].content}"
                                        </p>
                                    </div>

                                    <div className="space-y-12">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-white/10 to-transparent" />

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-6">
                                                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-brand-accent to-brand-secondary p-[1px]">
                                                    <div className="w-full h-full bg-[#02040a] rounded-[calc(1.5rem-1px)] flex items-center justify-center font-black text-white text-3xl font-orbitron">
                                                        {testimonials[activeIndex].name.charAt(0)}
                                                    </div>
                                                </div>
                                                <div>
                                                    <h5 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">{testimonials[activeIndex].name}</h5>
                                                    <p className="text-brand-accent/60 text-[10px] font-black uppercase tracking-[0.4em] mt-2 font-inter">{testimonials[activeIndex].role}</p>
                                                </div>
                                            </div>

                                            {/* Sliding Progress Indicator */}
                                            <div className="hidden md:flex gap-2">
                                                {testimonials.map((_, i) => (
                                                    <button
                                                        key={i}
                                                        onClick={() => setActiveIndex(i)}
                                                        className={`h-[3px] transition-all duration-700 rounded-full ${activeIndex === i ? 'w-10 bg-brand-accent opacity-100' : 'w-4 bg-white/10 opacity-30 hover:opacity-50'}`}
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>

                    {/* Mobile Navigation Indicators */}
                    <div className="flex md:hidden justify-center gap-3 mt-12">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`h-1.5 transition-all duration-500 rounded-full ${activeIndex === i ? 'w-12 bg-brand-accent' : 'w-3 bg-white/10'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Final Stage Decoration */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </section>
    );
};

export default Testimonials;
