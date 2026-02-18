import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

const categories = ['All', 'Web', 'AI', 'Cloud', 'Mobile'];

const projects = [
    {
        title: "QuantumFlow Analytics",
        industry: "Financial Services",
        category: "AI",
        outcome: "40% faster fraud detection",
        description: "Real-time AI-powered fraud detection system processing millions of transactions daily with sub-millisecond latency.",
        tech: ["Python", "TensorFlow", "Apache Kafka", "Kubernetes"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
        title: "CloudNova Platform",
        industry: "Healthcare",
        category: "Cloud",
        outcome: "99.99% uptime achieved",
        description: "HIPAA-compliant cloud infrastructure serving 50M+ patient records with zero-downtime deployments.",
        tech: ["AWS", "Terraform", "Docker", "Node.js"],
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop"
    },
    {
        title: "NexusCommerce",
        industry: "E-Commerce",
        category: "Web",
        outcome: "3x conversion uplift",
        description: "Headless commerce platform with AI-powered personalization engine driving record conversion rates.",
        tech: ["Next.js", "GraphQL", "Elasticsearch", "Redis"],
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
    },
    {
        title: "SentinelGuard",
        industry: "Cybersecurity",
        category: "AI",
        outcome: "1M+ threats blocked daily",
        description: "AI-driven threat intelligence platform with behavioral analysis and automated incident response.",
        tech: ["Python", "SIEM", "Machine Learning", "Go"],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop"
    },
    {
        title: "MediTrack Pro",
        industry: "Healthcare",
        category: "Mobile",
        outcome: "500K+ active users",
        description: "Cross-platform mobile app for patient monitoring with real-time vital sign tracking and alerts.",
        tech: ["React Native", "Firebase", "HealthKit", "WebSocket"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
    },
    {
        title: "DataVault Enterprise",
        industry: "Finance",
        category: "Cloud",
        outcome: "50TB processed daily",
        description: "Enterprise data lakehouse platform with real-time analytics and automated compliance reporting.",
        tech: ["Snowflake", "dbt", "Airflow", "Spark"],
        image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop"
    },
];

const PortfolioPage = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState(null);

    const filtered = activeCategory === 'All' ? projects : projects.filter(p => p.category === activeCategory);

    return (
        <div className="pt-32 pb-20 relative">
            {/* Hero */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">Our Work</span>
                    <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-8 uppercase tracking-tighter">
                        Featured <span className="text-brand-accent">Projects</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        Explore our portfolio of enterprise solutions that have transformed businesses worldwide.
                    </p>
                </motion.div>
            </section>

            {/* Filter */}
            <section className="container px-4 md:px-6 mb-12 mx-auto">
                <div className="flex flex-wrap justify-center gap-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] font-black transition-all duration-500 ${activeCategory === cat
                                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200 scale-105'
                                : 'bg-white border border-slate-100 text-slate-400 hover:text-brand-accent hover:border-brand-accent/30 hover:shadow-lg'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="container px-4 md:px-6 mb-20 mx-auto">
                <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence>
                        {filtered.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setSelectedProject(project)}
                                className="card-light rounded-[2.5rem] overflow-hidden cursor-pointer group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 hover:-translate-y-2 shadow-xl"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-60" />
                                    <span className="absolute top-6 right-6 bg-white/90 backdrop-blur-md text-brand-accent text-[9px] font-black uppercase tracking-widest px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                                        {project.category}
                                    </span>
                                </div>
                                <div className="p-8">
                                    <p className="text-brand-accent text-[10px] font-black uppercase tracking-[0.2em] mb-3">{project.industry}</p>
                                    <h4 className="font-orbitron font-black text-xl text-slate-900 uppercase mb-4 tracking-tighter group-hover:text-brand-accent transition-colors duration-500">{project.title}</h4>
                                    <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                        <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">{project.outcome}</p>
                                        <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                            <ExternalLink size={16} />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[200] bg-slate-900/60 backdrop-blur-xl flex items-center justify-center p-4"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white rounded-[3rem] max-w-4xl w-full overflow-hidden shadow-2xl border border-white/20 relative"
                        >
                            <div className="grid md:grid-cols-2">
                                <div className="relative h-64 md:h-auto overflow-hidden">
                                    <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                    <button onClick={() => setSelectedProject(null)} className="absolute top-8 left-8 w-12 h-12 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-slate-900 hover:bg-brand-accent hover:text-white transition-all duration-500 shadow-xl border border-slate-100">
                                        <X size={20} />
                                    </button>
                                </div>
                                <div className="p-10 md:p-16 flex flex-col justify-center bg-white">
                                    <span className="text-brand-accent font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">{selectedProject.industry}</span>
                                    <h3 className="font-orbitron font-black text-3xl md:text-4xl text-slate-900 mb-6 uppercase tracking-tight leading-tight">{selectedProject.title}</h3>
                                    <p className="text-slate-500 mb-8 leading-relaxed font-light text-lg">{selectedProject.description}</p>

                                    <div className="card-light bg-slate-50 p-8 rounded-3xl mb-10 border border-slate-100">
                                        <p className="text-brand-accent font-orbitron font-black text-lg uppercase tracking-tight mb-2">Performance Yield</p>
                                        <p className="text-slate-900 font-black text-sm uppercase tracking-widest opacity-60">{selectedProject.outcome}</p>
                                    </div>

                                    <div className="flex flex-wrap gap-3">
                                        {selectedProject.tech.map((t) => (
                                            <span key={t} className="bg-white border border-slate-100 text-slate-400 text-[10px] font-black uppercase tracking-widest px-5 py-2.5 rounded-xl shadow-sm">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Background Glows */}
            <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default PortfolioPage;
