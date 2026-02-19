import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronRight, ArrowRight, Globe, Github, Layout, Layers, Target, Shield, Smartphone, HeartPulse, Zap, X } from 'lucide-react';

const projects = [
    {
        id: 'le-gourmand',
        title: "Le Gourmand: Shopify Store for Bakery E Commerce",
        desc: "A comprehensive Shopify-powered digital storefront for a high-end bakery. We focused on delivering a buttery-smooth user experience with integrated inventory management and artisan visual storytelling.",
        category: "E-Commerce",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&q=80&w=1200",
        tech: ["Shopify Plus", "React", "Liquid", "Tailwind CSS"],
        link: "#"
    },
    {
        id: 'baseline11',
        title: "BaseLine11: Automated Testing SaaS",
        desc: "An advanced cloud platform designed for mission-critical software verification. Features include real-time CI/CD integration, automated regression reporting, and high-performance serverless architecture.",
        category: "SaaS / QA",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        tech: ["AWS", "Node.js", "Python", "Kubernetes"],
        link: "#"
    },
    {
        id: 'quicksos',
        title: "Quick SOS: Safety First Application",
        desc: "A rapid-response emergency application built for personal and public safety. Implements ultra-fast location sharing, encrypted alert protocols, and offline-first data synchronization.",
        category: "Mobile App",
        image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&q=80&w=1200",
        tech: ["React Native", "Firebase", "Geolocation API", "Node.js"],
        link: "#"
    },
    {
        id: 'soulmat',
        title: "Soulmat: Website for Mindful Parenting Support",
        desc: "A digital sanctuary for modern parents. This platform combines educational curricula with a supportive community hub, designed for peace of mind and shared wisdom.",
        category: "Community / EdTech",
        image: "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?auto=format&fit=crop&q=80&w=1200",
        tech: ["Next.js", "Strapi CMS", "PostgreSQL", "Framer Motion"],
        link: "#"
    },
    {
        id: 'orthomed',
        title: "Orthomed Products: Healthcare Website",
        desc: "A specialized medical portal providing practitioners with seamless access to high-precision orthopedic equipment and clinical documentation systems.",
        category: "Healthcare",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
        tech: ["React", "GraphQL", "Enterprise ERP", "Docker"],
        link: "#"
    },
    {
        id: 'zen-mobility',
        title: "Zen Mobility: Electric Vehicle Website",
        desc: "The digital gateway for sustainable urban transport. We engineered an interactive product showcase with 3D visualizations to reflect the future of emission-free mobility.",
        category: "Clean Tech / EV",
        image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=1200",
        tech: ["Three.js", "React", "AWS", "Vite"],
        link: "#"
    }
];

const PortfolioPage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = projects.filter(project =>
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="bg-[#fbfbfd] min-h-screen">
            {/* Header Section */}
            <section className="pt-48 pb-32 relative overflow-hidden bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-6xl"
                    >
                        <span className="text-brand-accent font-black tracking-[0.8em] text-[10px] uppercase mb-12 block bg-brand-accent/5 px-6 py-2 rounded-full border border-brand-accent/10 w-fit">
                            Success Stories
                        </span>
                        <h1 className="cinematic-heading text-5xl md:text-8xl lg:text-9xl text-slate-900 leading-[0.85] mb-12 uppercase tracking-tighter">
                            Engineering <br />
                            <span className="text-brand-accent italic">Impact.</span>
                        </h1>
                        <p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed max-w-4xl">
                            Every project we undertake is an opportunity to prove that quality work, modern
                            technology, and on-time delivery aren't just promises. From startups to fast-growing
                            businesses, we build solutions that help you achieve your goals.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Project List Section */}
            <section className="py-24 container mx-auto px-6 md:px-12">
                {/* Search Bar */}
                <div className="mb-24 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-slate-100 pb-16">
                    <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase whitespace-nowrap">
                        Projects <span className="text-brand-accent italic">Archive</span>
                    </h2>
                    <div className="relative w-full max-w-xl self-end">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input
                            type="text"
                            placeholder="Search by tech, category or name..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white border border-slate-100 py-5 pl-16 pr-8 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/20 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Projects Rows */}
                <div className="space-y-32">
                    <AnimatePresence>
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "circOut" }}
                                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 lg:gap-24`}
                            >
                                {/* Text Side */}
                                <div className="flex-1 space-y-10 order-2 lg:order-none">
                                    <div>
                                        <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">{project.category}</span>
                                        <h3 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight tracking-tighter uppercase mb-8 group cursor-pointer hover:text-brand-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed mb-12 italic">
                                            "{project.desc}"
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {project.tech.slice(0, 3).map(t => (
                                            <span key={t} className="bg-slate-50 text-slate-400 text-[9px] font-black uppercase tracking-widest px-5 py-3 rounded-xl border border-slate-100 hover:border-brand-accent/30 transition-colors">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <button
                                        onClick={() => setSelectedProject(project)}
                                        className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 hover:text-brand-accent transition-all group pt-6 border-t border-slate-100 w-fit"
                                    >
                                        Detailed Insight <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                    </button>
                                </div>

                                {/* Image Side */}
                                <div className="flex-1 w-full order-1 lg:order-none">
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.5 }}
                                        className="relative rounded-[4rem] overflow-hidden shadow-2xl shadow-slate-200 aspect-[16/10] bg-slate-50 border border-slate-100 group cursor-pointer"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-2 bg-brand-accent scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-700" />
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>

            {/* Modal for Details */}
            <AnimatePresence>
                {selectedProject && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 md:p-12">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-white rounded-[3rem] p-12 md:p-20 max-w-4xl w-full shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute top-8 right-8 text-slate-400 hover:text-slate-900 transition-colors"
                            >
                                <X size={32} />
                            </button>

                            <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Project Brief</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-8 leading-none">
                                {selectedProject.title}
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                                {selectedProject.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-8 mb-12 pt-12 border-t border-slate-100">
                                <div>
                                    <p className="text-brand-accent font-black text-[9px] uppercase tracking-widest mb-4">Core Technology</p>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map(t => (
                                            <span key={t} className="bg-slate-50 px-4 py-2 rounded-lg text-[9px] font-black uppercase text-slate-400">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-brand-accent font-black text-[9px] uppercase tracking-widest mb-4">Project Scope</p>
                                    <p className="text-slate-900 font-black text-lg uppercase tracking-tight italic">Technical Excellence</p>
                                </div>
                            </div>

                            <button className="bg-slate-900 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-accent transition-all shadow-xl flex items-center gap-4">
                                View Case Study <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* World Map CTA Section */}
            <section className="py-24 container mx-auto px-6 md:px-12 mb-32">
                <div className="bg-slate-950 rounded-[5rem] p-12 md:p-32 relative overflow-hidden flex flex-col items-center text-center shadow-2xl">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.15)_0,transparent_70%)]" />

                    <div className="relative z-10 max-w-4xl">
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-10 block">Partner with Us</span>
                        <h2 className="text-white text-4xl md:text-8xl font-black tracking-tighter uppercase mb-10 leading-none">
                            Build technology that <br /> <span className="text-brand-accent italic">works everywhere.</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-light leading-relaxed mb-16 max-w-3xl mx-auto">
                            We partner with startups, growing businesses, and established companies
                            worldwide. From navigating regulatory requirements to building scalable solutions
                            we understand what it takes to succeed in diverse markets.
                        </p>
                        <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center gap-6 group mx-auto">
                            Scale Your Vision <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </div>

                    <div className="absolute -bottom-[20%] right-0 opacity-10 pointer-events-none">
                        <Globe size={600} strokeWidth={0.5} className="text-brand-accent animate-pulse-slow" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PortfolioPage;
