import React from 'react';
import { motion } from 'framer-motion';

const logos = [
    { name: "NVIDIA", id: 1, industry: "AI Compute" },
    { name: "CISCO", id: 2, industry: "Networking" },
    { name: "DATABRICKS", id: 3, industry: "Data Intelligence" },
    { name: "SNOWFLAKE", id: 4, industry: "Cloud Data" },
    { name: "PALANTIR", id: 5, industry: "Analytics" },
    { name: "MONGODB", id: 6, industry: "Database" },
    { name: "HASHICORP", id: 7, industry: "Infrastructure" },
    { name: "ELASTIC", id: 8, industry: "Search" }
];

const KineticLogo = ({ logo, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-4 px-12 group cursor-pointer"
        >
            <div className="relative">
                {/* 3D Container */}
                <motion.div
                    whileHover={{ rotateY: 20, rotateX: -10, scale: 1.1 }}
                    className="w-20 h-20 md:w-28 md:h-28 bg-white rounded-[2rem] flex items-center justify-center border border-slate-100 group-hover:border-brand-accent/50 group-hover:shadow-lg transition-all duration-500 relative shadow-md backface-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                >
                    <div className="text-3xl md:text-5xl font-black italic select-none text-slate-100 group-hover:text-brand-accent transition-colors duration-500" style={{ transform: "translateZ(30px)" }}>
                        {logo.name.charAt(0)}
                    </div>
                    {/* Inner Glow */}
                    <div className="absolute inset-4 rounded-2xl bg-brand-accent/5 blur-xl group-hover:bg-brand-accent/10 transition-all" />
                </motion.div>

                {/* Floating Shadow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-12 h-2 bg-slate-900/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="text-center mt-4">
                <span className="text-slate-400 font-orbitron font-black text-xs md:text-sm uppercase tracking-[0.3em] group-hover:text-slate-900 transition-colors">
                    {logo.name}
                </span>
                <div className="h-px w-0 bg-brand-accent group-hover:w-full transition-all duration-500 mx-auto mt-2" />
            </div>
        </motion.div>
    );
};

const LogoSlider = () => {
    const duplicatedLogos = [...logos, ...logos, ...logos];

    return (
        <section id="ecosystem" className="w-full pt-8 md:pt-12 pb-12 md:pb-16 relative overflow-hidden bg-white">

            <div className="container relative z-10 mx-auto">
                <div className="text-center mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2 }}
                        className="space-y-6"
                    >
                        <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] md:text-xs uppercase block">
                            Strategic Ecosystem
                        </span>
                        <h2 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-tight uppercase tracking-tight">
                            Powering Global <br />
                            <span className="text-brand-accent">Infrastructure.</span>
                        </h2>
                    </motion.div>
                </div>
            </div>

            {/* The Kinetic Stream */}
            <div className="relative flex items-center group/slider">
                {/* Ambient Fog Masks */}
                <div className="absolute inset-y-0 left-0 w-1/5 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-1/5 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: [0, -1800] }}
                    transition={{
                        duration: 40,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    {duplicatedLogos.map((logo, i) => (
                        <KineticLogo key={i} logo={logo} index={i} />
                    ))}
                </motion.div>
            </div>

            {/* Neural Background Grid (Subtle) */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

            {/* Drifting Light Particles */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-accent/20 to-transparent" />
        </section>
    );
};

export default LogoSlider;
