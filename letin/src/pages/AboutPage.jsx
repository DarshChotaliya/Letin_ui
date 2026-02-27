import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Users, Target, Zap, Heart, Shield, Globe,
    MessageSquare, ArrowRight, Github, Twitter, Linkedin
} from 'lucide-react';
import Logo from '../components/Logo';

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
        image: "https://images.unsplash.com/photo-1507537362848-9c7e70b7b5c1?auto=format&fit=crop&q=80&w=1200",
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
    const [hoveredValue, setHoveredValue] = React.useState(0);

    return (
        <div className="min-h-screen bg-[#fbfbfd] pb-32">
            {/* Hero Section */}
            <section className="pt-48 pb-24 relative overflow-hidden bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 relative z-10 mb-16 flex flex-col items-center text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl flex flex-col items-center"
                    >
                        <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] uppercase mb-6 block bg-brand-accent/5 px-6 py-2 rounded-full border border-brand-accent/10 w-fit">
                            Our Identity
                        </span>
                        <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[0.9] mb-8 uppercase tracking-tighter">
                            About <br />
                            <span className="text-brand-accent italic">Us.</span>
                        </h1>
                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            We are team of highly precise engineers, architects, and designers
                            dedicated to building the future of industrial-scale digital solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Hero Feature Image - Full Width Display */}
                <div className="w-full h-[60vh] md:h-[80vh] overflow-hidden relative group">
                    <motion.img
                        initial={{ scale: 1.1, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
                        alt="LetainAI Office"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[1500ms]"
                    />
                    <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-slate-900/0 transition-all duration-1000 pointer-events-none" />
                </div>
            </section>

            {/* Introduction Section - Overlapping Card */}
            <section className="pb-32 container mx-auto px-6 relative z-20 -mt-24 md:-mt-48">
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 md:p-20 rounded-[3rem] shadow-[0_-20px_80px_-20px_rgba(0,0,0,0.1)]"
                >
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div>
                            <div className="flex items-center gap-6 mb-12">
                                <Logo className="h-10 text-slate-900" isDark={false} />
                                <div className="h-8 w-px bg-slate-200" />
                                <span className="text-slate-400 font-black tracking-widest text-xs uppercase">Since 2021</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-10 leading-none">
                                We are <br /> <span className="text-brand-accent">LetainAI.</span>
                            </h2>
                            <div className="space-y-8 text-slate-500 text-lg md:text-xl font-light leading-relaxed">
                                <p>
                                    Born from a passion for technical integrity, LetainAI was founded to bridge
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
                </motion.div>
            </section>

            {/* Mission Vision Value - Full Screen Columns */}
            <section className="w-full h-[600px] md:h-[80vh] bg-slate-950 flex flex-col md:flex-row relative z-20">
                {values.map((v, i) => (
                    <motion.div
                        key={i}
                        onMouseEnter={() => setHoveredValue(i)}
                        onMouseLeave={() => setHoveredValue(null)}
                        animate={{
                            flex: hoveredValue === i ? 2 : 1,
                            opacity: hoveredValue !== null && hoveredValue !== i ? 0.6 : 1
                        }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                        className="relative h-full border-r border-white/10 last:border-r-0 overflow-hidden group cursor-pointer"
                    >
                        {/* Background Image */}
                        <motion.img
                            src={v.image}
                            alt={v.title}
                            animate={{
                                scale: hoveredValue === i ? 1.1 : 1,
                            }}
                            transition={{ duration: 0.8 }}
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                        {/* Content */}
                        <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                            <motion.div
                                animate={{ y: hoveredValue === i ? 0 : 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                <h3 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter mb-4">
                                    {v.title}
                                </h3>

                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{
                                        height: hoveredValue === i ? 'auto' : 0,
                                        opacity: hoveredValue === i ? 1 : 0
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-slate-200 text-lg font-light leading-relaxed max-w-md">
                                        {v.desc}
                                    </p>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* Our Story Section */}
            <section className="py-32 container mx-auto px-6 border-b border-slate-100">
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

            {/* Careers CTA - Full Width Display */}
            <section className="py-32 bg-slate-900 relative overflow-hidden group w-full mt-24">
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

            {/* Areas of Expertise - Grid Layout */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-24">
                        <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-8 block">Domain Mastery</span>
                        <h2 className="text-slate-900 text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
                            Our Areas of <br /> <span className="text-brand-accent italic">Expertise.</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {expertise.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-12 rounded-[2.5rem] shadow-xl hover:shadow-2xl transition-all duration-500 group border border-slate-100"
                            >
                                <div className="w-16 h-16 bg-brand-accent/5 rounded-2xl flex items-center justify-center text-brand-accent mb-8 group-hover:scale-110 transition-transform duration-500">
                                    {idx === 0 && <Target size={32} />}
                                    {idx === 1 && <Zap size={32} />}
                                    {idx === 2 && <Globe size={32} />}
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 group-hover:text-brand-accent transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-slate-500 font-light leading-relaxed mb-8 min-h-[100px]">
                                    {item.desc}
                                </p>
                                <ul className="space-y-4 border-t border-slate-100 pt-8">
                                    {item.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 uppercase tracking-wide">
                                            <span className="text-brand-accent mt-0.5">•</span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Global Map CTA */}
            <section className="py-32 container mx-auto px-6">
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
