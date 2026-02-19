import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Target, Zap, Heart, Shield, Globe,
    MessageSquare, ArrowRight, Github, Twitter, Linkedin
} from 'lucide-react';
import Logo from '../components/Logo';

const founders = [
    {
        name: "Abhishek Mevada",
        role: "Founder & CEO",
        desc: "Leading the vision and strategic direction of Letin Solution. Abhishek brings a wealth of experience in enterprise architecture and digital transformation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
        social: { twitter: "#", linkedin: "#", github: "#" }
    },
    {
        name: "Darshit Mevada",
        role: "Co-Founder & CTO",
        desc: "Engineering lead focused on technical excellence and next-generation product development. Darshit oversees our R&D and core infrastructure.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
        social: { twitter: "#", linkedin: "#", github: "#" }
    }
];

const values = [
    {
        title: "Mission",
        desc: "We help businesses grow by building reliable technology and strong partnerships based on trust, clear thinking, and real understanding.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
        icon: <Target size={24} />
    },
    {
        title: "Vision",
        desc: "Our vision is to build a strong and trusted business ecosystem where companies grow with confidence through the right guidance, meaningful partnerships, and reliable technology.",
        image: "https://images.unsplash.com/photo-1497366754035-7c702683ba5a?auto=format&fit=crop&q=80&w=1200",
        icon: <Globe size={24} />
    },
    {
        title: "Value",
        desc: "Trust First, People Before Technology, Think Like Owners, Keep Learning",
        image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200",
        icon: <Heart size={24} />
    }
];

const expertise = [
    {
        title: "Bit to Market",
        desc: "We understand that software is more than code—it's the lifeblood of modern commerce. From the first bit of architected logic to the final market launch, we ensure every technical decision drives business value.",
        bullets: [
            "Real product focus, not just service delivery",
            "High-precision CI/CD pipelines as standard",
            "Adaptive architecture that grows with your users"
        ]
    },
    {
        title: "Developer Driven Frameworks",
        desc: "Our culture is rooted in engineering excellence. We build tools that developers love to use, ensuring your internal teams can maintain and scale the solutions we deliver.",
        bullets: [
            "Clean, self-documenting codebases",
            "Automated testing and documentation regimes",
            "Modern tech stack selection (React, Node, Go, AI)"
        ]
    },
    {
        title: "Global Reach",
        desc: "Scaling worldwide requires more than just cloud deployment. We specialize in internationalization, localized high-availability clusters, and region-specific regulatory compliance.",
        bullets: [
            "Multi-region deployment strategies",
            "Edge computing for low-latency global access",
            "GDPR, HIPAA, and industry-standard security"
        ]
    }
];

const AboutPage = () => {
    const [hoveredValue, setHoveredValue] = React.useState(null);

    return (
        <div className="min-h-screen bg-[#fbfbfd]">
            {/* Hero Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-6xl"
                    >
                        <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] uppercase mb-12 block bg-brand-accent/5 px-6 py-2 rounded-full border border-brand-accent/10 w-fit">
                            Our Identity
                        </span>
                        <h1 className="cinematic-heading text-6xl md:text-9xl text-slate-900 leading-[0.85] mb-12 uppercase tracking-tighter">
                            About <br />
                            <span className="text-brand-accent italic">Us.</span>
                        </h1>
                        <p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed max-w-4xl">
                            We are team of highly precise engineers, architects, and designers
                            dedicated to building the future of industrial-scale digital solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Feature Image - Full Width Edge-to-Edge */}
                <div className="mt-24 w-full h-[500px] lg:h-[800px] overflow-hidden relative group">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="Letin Office"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2000ms] scale-105 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-1000 pointer-events-none" />

                    {/* Architectural Overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent" />
                </div>
            </section>

            {/* Introduction Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-24 items-center">
                    <div>
                        <div className="flex items-center gap-6 mb-12">
                            <Logo className="h-10 text-slate-900" isDark={false} />
                            <div className="h-8 w-px bg-slate-200" />
                            <span className="text-slate-400 font-black tracking-widest text-xs uppercase">Since 2021</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-10 leading-none">
                            We are <br /> <span className="text-brand-accent">Letin Solution.</span>
                        </h2>
                        <div className="space-y-8 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                            <p>
                                Born from a passion for technical integrity, Letin Solution was founded to bridge
                                the gap between rapid startup growth and robust enterprise stability.
                            </p>
                            <p>
                                Today, we are a global partner for businesses that demand more from their technology.
                                We don't just deliver projects; we engineer lasting digital legacies.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-accent/5 blur-[100px] rounded-full" />
                        <div className="relative p-1 bg-gradient-to-br from-slate-100 to-transparent rounded-[3rem]">
                            <div className="bg-white p-12 rounded-[2.9rem] shadow-sm border border-slate-50">
                                <div className="grid grid-cols-2 gap-12">
                                    {[
                                        { label: "Active Countries", val: "12+" },
                                        { label: "Products Launched", val: "45+" },
                                        { label: "Lines of Code", val: "2M+" },
                                        { label: "Engineer Hours", val: "150k+" }
                                    ].map((stat, i) => (
                                        <div key={i} className="group">
                                            <div className="text-brand-accent text-4xl font-black mb-2 group-hover:scale-110 transition-transform origin-left">{stat.val}</div>
                                            <div className="text-slate-400 text-[10px] uppercase font-bold tracking-widest">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Vision Value Interactive Accordion */}
            <section className="py-32 bg-slate-950 overflow-hidden relative">
                <div className="absolute inset-0 bg-grid opacity-5 pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-4 h-[600px] lg:h-[700px]">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                onMouseEnter={() => setHoveredValue(i)}
                                onMouseLeave={() => setHoveredValue(null)}
                                animate={{
                                    flex: hoveredValue === i ? 2.5 : 1,
                                }}
                                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                className="relative rounded-[3rem] overflow-hidden group cursor-pointer border border-white/5"
                            >
                                <motion.img
                                    src={v.image}
                                    alt={v.title}
                                    animate={{
                                        scale: hoveredValue === i ? 1.1 : 1,
                                        filter: hoveredValue === i ? "grayscale(0%)" : "grayscale(100%)",
                                        opacity: hoveredValue === i ? 0.6 : 0.3
                                    }}
                                    transition={{ duration: 0.8 }}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                                <div className="absolute inset-0 p-12 flex flex-col justify-end">
                                    <motion.div
                                        animate={{
                                            y: hoveredValue === i ? 0 : 20,
                                            opacity: hoveredValue === i ? 1 : 0.5
                                        }}
                                        className="w-fit"
                                    >
                                        <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-brand-accent mb-6 border border-white/20">
                                            {v.icon}
                                        </div>
                                        <h3 className="text-white text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-4">
                                            {v.title}
                                        </h3>
                                    </motion.div>

                                    <AnimatePresence>
                                        {hoveredValue === i && (
                                            <motion.p
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.4, delay: 0.1 }}
                                                className="text-slate-300 text-lg lg:text-xl font-light leading-relaxed max-w-xl"
                                            >
                                                {v.desc}
                                            </motion.p>
                                        )}
                                    </AnimatePresence>
                                </div>

                                {/* Vertical Line Divider for non-hovered Desktop */}
                                <div className="absolute right-0 top-1/4 bottom-1/4 w-px bg-white/10 hidden lg:block group-last:hidden" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-32 container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-12 block">The Narrative</span>
                    <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter uppercase mb-12 leading-none">
                        Our <span className="text-brand-accent italic">Story.</span>
                    </h2>
                    <div className="space-y-12 text-slate-500 text-xl font-light leading-relaxed text-left md:text-center">
                        <p>
                            It began with a simple observation: mid-market companies were being underserved by
                            generic SaaS platforms and overpriced, slow-moving consulting giants.
                        </p>
                        <p>
                            We saw a need for a new kind of technical partner—one that is as agile as a startup
                            but as disciplined as a world-class engineering firm. We spent our first years
                            perfecting internal frameworks that allow us to build twice as fast without
                            compromising on security or quality.
                        </p>
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-32 bg-white border-y border-slate-100">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <h2 className="text-slate-900 text-4xl md:text-6xl font-black tracking-tighter uppercase">
                            Meet Our <span className="text-brand-accent italic">Leadership.</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
                        {founders.map((person, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="group relative"
                            >
                                <div className="relative rounded-[4rem] overflow-hidden mb-8 h-80 lg:h-[500px]">
                                    <img src={person.image} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                                    <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900 via-transparent to-transparent flex gap-6 justify-center translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                        <a href={person.social.twitter} className="text-white hover:text-brand-accent transition-colors"><Twitter size={20} /></a>
                                        <a href={person.social.linkedin} className="text-white hover:text-brand-accent transition-colors"><Linkedin size={20} /></a>
                                        <a href={person.social.github} className="text-white hover:text-brand-accent transition-colors"><Github size={20} /></a>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h3 className="text-2xl font-black text-slate-900 uppercase mb-2 group-hover:text-brand-accent transition-colors">{person.name}</h3>
                                    <p className="text-brand-accent font-black tracking-widest text-[9px] uppercase mb-6">{person.role}</p>
                                    <p className="text-slate-500 font-light leading-relaxed max-w-sm mx-auto">{person.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Careers CTA - Full Width Display */}
            <section className="py-32 bg-[#4f46e5] relative overflow-hidden group w-full mt-24">
                {/* Background Patterns */}
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                    <svg className="w-full h-full scale-150 transform translate-x-1/4" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M400 0L0 400M440 40L40 440M480 80L80 480M360 -40L-40 360M320 -80L-80 320" stroke="white" strokeWidth="40" strokeLinecap="round" />
                    </svg>
                </div>

                <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-white text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 leading-[0.9] max-w-4xl"
                        >
                            Help us build the <br /> <span className="text-white/40 italic">Technical Future.</span>
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-white/90 text-2xl font-light max-w-2xl mb-0"
                        >
                            We are always looking for high-precision engineers and visionary designers
                            to join our elite global units.
                        </motion.p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative z-10 mt-16 lg:mt-0 bg-white text-slate-950 px-16 py-8 rounded-full font-black text-sm uppercase tracking-[0.3em] hover:bg-slate-950 hover:text-white transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] whitespace-nowrap"
                    >
                        View Careers
                    </motion.button>
                </div>
            </section>

            {/* Areas of Expertise */}
            <section className="py-32 container mx-auto px-6">
                <div className="text-center mb-32">
                    <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Domain Mastery</span>
                    <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                        Our Areas of <br /> <span className="text-brand-accent italic">Expertise.</span>
                    </h2>
                </div>

                <div className="space-y-24 max-w-6xl mx-auto">
                    {expertise.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col lg:flex-row gap-16 items-start ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
                        >
                            <div className="flex-1">
                                <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter mb-10 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-10">
                                    {item.desc}
                                </p>
                                <div className="space-y-4">
                                    {item.bullets.map((bullet, i) => (
                                        <div key={i} className="flex items-center gap-6 group">
                                            <div className="w-10 h-px bg-slate-200 transition-all group-hover:w-20 group-hover:bg-brand-accent" />
                                            <span className="text-slate-700 font-medium text-sm uppercase tracking-wide">{bullet}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 w-full bg-slate-50 rounded-[4rem] aspect-video animate-pulse-slow border border-slate-100" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Global Map CTA */}
            <section className="py-32 container mx-auto px-6 mb-32">
                <div className="bg-slate-950 rounded-[5rem] p-12 md:p-32 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0,transparent_70%)]" />

                    <div className="relative z-10 max-w-4xl">
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-10 block">Global Infrastructure</span>
                        <h2 className="text-white text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Built for today <br /> <span className="text-brand-accent italic">Scaled for tomorrow.</span>
                        </h2>
                        <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all shadow-2xl flex items-center gap-6 group mx-auto">
                            Connect With Us <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="absolute -bottom-[20%] right-0 opacity-10 pointer-events-none">
                        <Globe size={600} strokeWidth={0.5} className="text-brand-accent" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
