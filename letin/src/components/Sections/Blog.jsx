import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight, Clock, Hash } from 'lucide-react';

const posts = [
    {
        date: "MAR 15, 2026",
        title: "Neural Architectures in Enterprise Automation",
        excerpt: "Analyzing the transition from linear scripts to autonomous neural decision-making in global supply chains.",
        category: "Intelligence",
        readTime: "12 min read"
    },
    {
        date: "MAR 10, 2026",
        title: "Distributed Systems: The Scalability Zero-Point",
        excerpt: "Critical strategies for engineering software that handles millions of concurrent global transactions.",
        category: "Infrastructure",
        readTime: "15 min read"
    },
    {
        date: "MAR 05, 2026",
        title: "Quantum-Safe Encryption Protocols",
        excerpt: "Preparing the corporate digital perimeter for the era of high-performance cryptographic threats.",
        category: "Security",
        readTime: "10 min read"
    }
];

const Blog = () => {
    return (
        <section id="blog" className="w-full h-full min-w-full flex items-center justify-center py-20 md:py-32 px-6 md:px-12 relative overflow-hidden bg-transparent">
            <div className="container relative z-10">

                {/* Header Block */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-12">
                    <div className="space-y-6">
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            className="flex items-center gap-4"
                        >
                            <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase block">
                                Operational Intelligence
                            </span>
                            <div className="h-[1px] w-12 bg-brand-accent/30" />
                        </motion.div>
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-900 leading-[1.1]"
                        >
                            Corporate <br />
                            <span className="text-brand-accent">Insights Hub</span>
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="max-w-xs space-y-6"
                    >
                        <p className="text-slate-500 text-sm md:text-base font-light leading-relaxed">
                            Deep-dive analysis into the technological shifts defining the next
                            decade of industrial and digital supremacy.
                        </p>
                        <button className="flex items-center gap-4 text-brand-accent text-[10px] uppercase font-black tracking-widest hover:gap-6 transition-all group">
                            Access Full Archives
                            <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                        </button>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {posts.map((post, i) => (
                        <motion.div
                            key={i}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.8 }}
                            className="card-light p-10 rounded-[3rem] border border-slate-100 hover:border-brand-accent/30 transition-all duration-700 group flex flex-col h-full bg-white relative overflow-hidden shadow-lg"
                        >
                            {/* Accent Corner */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-brand-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="flex justify-between items-start mb-10 relative z-10">
                                <div className="flex items-center gap-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse shadow-[0_0_10px_#6366f1]" />
                                    <span className="text-slate-400 font-black text-[10px] uppercase tracking-widest">{post.category}</span>
                                </div>
                                <div className="flex items-center gap-2 text-slate-300">
                                    <Clock size={12} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest">{post.readTime}</span>
                                </div>
                            </div>

                            <h3 className="text-2xl md:text-3xl font-orbitron font-black text-slate-900 mb-6 group-hover:text-brand-accent transition-colors duration-500 leading-tight uppercase tracking-wide relative z-10">
                                {post.title}
                            </h3>

                            <p className="text-slate-500 text-base md:text-lg mb-10 font-light leading-relaxed flex-grow group-hover:text-slate-700 transition-colors duration-500 relative z-10">
                                {post.excerpt}
                            </p>

                            <div className="pt-8 border-t border-slate-100 flex justify-between items-center group-hover:border-brand-accent/20 transition-all duration-500 relative z-10">
                                <span className="text-[10px] text-slate-300 font-black uppercase tracking-[0.2em]">{post.date}</span>
                                <button className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-brand-accent transition-all duration-500 group-hover:scale-110">
                                    <BookOpen size={18} />
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>

            {/* Background Narrative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-accent/5 blur-[180px] rounded-full pointer-events-none" />
        </section >
    );
};

export default Blog;
