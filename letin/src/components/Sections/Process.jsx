import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Search, Rocket, Code, Infinity, Target, Zap } from 'lucide-react';

const steps = [
    {
        number: "01",
        title: "Industrial Audit",
        tagline: "Perimeter Scan",
        description: "A comprehensive deep-dive into existing legacy structures and technical bottlenecks to define the operational perimeter.",
        icon: <Search size={32} />
    },
    {
        number: "02",
        title: "Strategic Blueprinting",
        tagline: "Architectural DNA",
        description: "Mapping out the technical trajectory, including immutable cloud infrastructure and predictive data modeling.",
        icon: <Target size={32} />
    },
    {
        number: "03",
        title: "Precision Execution",
        tagline: "Agile Sprints",
        description: "Executing industrial-grade code deployments through high-velocity sprints and rigorous CI/CD automation protocols.",
        icon: <Code size={32} />
    },
    {
        number: "04",
        title: "Atomic Deployment",
        tagline: "Zero-Downtime",
        description: "Utilizing advanced blue-green and canary release strategies to ensure seamless, zero-risk transitions of digital assets.",
        icon: <Rocket size={32} />
    },
    {
        number: "05",
        title: "Adaptive Evolution",
        tagline: "Continuous Intelligence",
        description: "Post-deployment neural monitoring and recursive optimization to ensure sustained high-load performance and growth.",
        icon: <Infinity size={32} />
    }
];

const Process = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section id="process" ref={containerRef} className="w-full py-24 md:py-48 px-6 md:px-12 relative bg-white">
            {/* Ambient Background Narrative */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-brand-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />

            <div className="container relative z-10 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 xl:gap-32 items-start">

                    {/* Left Sidebar: Sticky Content */}
                    <div className="lg:col-span-12 xl:col-span-5 lg:sticky lg:top-32 space-y-12 mb-16 lg:mb-0">
                        <motion.div
                            initial={{ x: -30, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="space-y-8"
                        >
                            <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase block">
                                Operational Alpha
                            </span>
                            <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-5xl xl:text-6xl text-slate-900 leading-[1.05] tracking-tight uppercase">
                                The Letin <br />
                                <span className="text-brand-accent">Methodology.</span>
                            </h2>
                            <p className="text-slate-500 text-base md:text-xl font-light leading-relaxed max-w-lg">
                                A systematic, industrial-grade framework engineered for high-stakes
                                digital environments where elite precision is mandatory.
                            </p>
                        </motion.div>

                        <div className="p-10 md:p-12 card-light rounded-[3rem] border border-slate-100 relative overflow-hidden group hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500 bg-white shadow-xl">
                            <div className="absolute -top-4 -right-4 p-8 text-brand-accent/5 group-hover:rotate-12 group-hover:scale-125 transition-all duration-700">
                                <Zap size={80} fill="currentColor" />
                            </div>
                            <div className="flex items-center gap-4 mb-8 relative z-10">
                                <div className="p-3 bg-brand-accent rounded-xl text-white shadow-lg">
                                    <Zap size={20} fill="currentColor" />
                                </div>
                                <span className="text-slate-900 font-black text-[10px] uppercase tracking-[0.3em] font-jakarta">Efficiency Protocol</span>
                            </div>
                            <p className="text-slate-500 text-xl font-light leading-relaxed relative z-10 border-l-2 border-brand-accent/20 pl-8 italic">
                                "Our methodology compresses deployment cycles by 40% while maintaining absolute system stability."
                            </p>
                        </div>
                    </div>

                    {/* Right Stream: Scrollable Content */}
                    <div className="lg:col-span-12 xl:col-span-7 space-y-24 md:space-y-40 relative pl-4 md:pl-0">
                        {/* Process Line Track */}
                        <div className="absolute top-0 left-[31px] md:left-[47px] w-px h-full bg-slate-100 z-0" />

                        {/* Animated Progress Line */}
                        <motion.div
                            style={{ scaleY, originY: 0 }}
                            className="absolute top-0 left-[31px] md:left-[47px] w-px h-full bg-gradient-to-b from-brand-accent via-brand-secondary to-transparent z-0 shadow-[0_0_15px_rgba(99,102,241,0.5)]"
                        />

                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px", once: true }}
                                transition={{ duration: 0.8, delay: i * 0.1 }}
                                className="relative flex gap-10 md:gap-20 group"
                            >
                                {/* Step Indicator */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-[2rem] flex items-center justify-center border border-slate-100 group-hover:border-transparent group-hover:bg-brand-accent group-hover:shadow-2xl transition-all duration-700 relative shadow-lg text-brand-accent group-hover:text-white">
                                        <div className="transition-all duration-500 group-hover:scale-110">
                                            {React.cloneElement(step.icon, { size: 32 })}
                                        </div>
                                    </div>
                                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[11px] font-black font-jakarta text-brand-accent border border-slate-100 group-hover:bg-slate-900 group-hover:text-white group-hover:border-transparent transition-all duration-500 shadow-xl">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Step Content */}
                                <div className="flex-1 space-y-8 pt-4">
                                    <div className="space-y-3">
                                        <span className="text-brand-accent text-[10px] font-black uppercase tracking-[0.6em] block opacity-40 group-hover:opacity-100 transition-opacity">
                                            {step.tagline}
                                        </span>
                                        <h3 className="text-2xl md:text-5xl font-jakarta font-black text-slate-900 uppercase tracking-tight group-hover:text-brand-accent transition-colors duration-500 leading-tight">
                                            {step.title}
                                        </h3>
                                    </div>

                                    <p className="text-slate-500 text-base md:text-2xl font-light leading-relaxed max-w-2xl group-hover:text-slate-700 transition-colors duration-500">
                                        {step.description}
                                    </p>

                                    {/* Tech Tags */}
                                    <div className="flex flex-wrap gap-4">
                                        {['Validated', 'Secure', 'Immutable'].map((tag) => (
                                            <span key={tag} className="px-6 py-2 bg-slate-50 rounded-full text-[10px] font-black uppercase tracking-widest text-slate-400 border border-slate-100 group-hover:border-brand-accent/20 group-hover:text-brand-accent transition-all">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>

            {/* Narrative Ambient Glow */}
            <div className="absolute -bottom-48 -right-48 w-[800px] h-[800px] bg-brand-accent/[0.03] blur-[180px] rounded-full pointer-events-none" />
        </section>
    );
};

export default Process;
