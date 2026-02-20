import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ArrowRight } from 'lucide-react';

const featuredPost = {
    title: "The Future of Enterprise AI: From Predictive to Prescriptive",
    excerpt: "How next-generation AI systems are moving beyond prediction to actively recommend and automate business decisions at enterprise scale.",
    date: "Feb 15, 2026",
    readTime: "8 min read",
    category: "Artificial Intelligence",
    author: "Arjun Mehta",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
};

const posts = [
    {
        title: "Zero Trust Architecture: A Practical Implementation Guide",
        excerpt: "Step-by-step guide to implementing zero trust security in enterprise environments.",
        date: "Feb 10, 2026", readTime: "6 min read", category: "Security", author: "Priya Sharma"
    },
    {
        title: "Kubernetes at Scale: Lessons From Managing 10,000 Pods",
        excerpt: "Real-world insights from running massive Kubernetes clusters in production.",
        date: "Feb 5, 2026", readTime: "10 min read", category: "Cloud", author: "Rohan Kapoor"
    },
    {
        title: "Building Real-time Data Pipelines with Apache Kafka",
        excerpt: "Architecture patterns for high-throughput, low-latency data streaming.",
        date: "Jan 28, 2026", readTime: "7 min read", category: "Data", author: "Aisha Khan"
    },
    {
        title: "The Rise of Edge Computing in IoT Solutions",
        excerpt: "How edge computing is transforming IoT deployments for latency-sensitive applications.",
        date: "Jan 20, 2026", readTime: "5 min read", category: "IoT", author: "Arjun Mehta"
    },
    {
        title: "Microservices vs Monolith: Making the Right Choice",
        excerpt: "A pragmatic guide to choosing the right architecture for your project.",
        date: "Jan 15, 2026", readTime: "9 min read", category: "Architecture", author: "Priya Sharma"
    },
    {
        title: "WebAssembly: The Future of Web Performance",
        excerpt: "Exploring how WASM is enabling near-native performance in web applications.",
        date: "Jan 10, 2026", readTime: "6 min read", category: "Web", author: "Rohan Kapoor"
    },
];

const BlogPage = () => {
    return (
        <div className="pt-40 pb-32 relative bg-[#fbfbfd] min-h-screen overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/[0.02] blur-[120px] rounded-full pointer-events-none" />

            {/* Hero */}
            <section className="container px-6 md:px-12 mb-32 md:mb-56 relative z-10 mx-auto text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                    className="max-w-5xl flex flex-col items-center"
                >
                    <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 block bg-brand-accent/5 px-6 py-2 rounded-full border border-brand-accent/10 w-fit">Intelligence Feed</span>
                    <h1 className="cinematic-heading text-5xl md:text-7xl lg:text-8xl text-slate-900 leading-[0.9] mb-12 uppercase tracking-tighter">
                        Strategic <br />
                        <span className="text-brand-accent">Insights.</span>
                    </h1>
                    <p className="text-slate-500 text-base md:text-xl font-light leading-relaxed max-w-2xl">
                        Deep dives into the technical paradigms and strategic shifts
                        defining the next era of global enterprise technology.
                    </p>
                </motion.div>
            </section>

            {/* Featured Post - The Editorial Showcase */}
            <section className="container px-6 md:px-12 mb-24 mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-1 rounded-[4rem] bg-gradient-to-br from-slate-100 to-transparent shadow-[0_60px_120px_-30px_rgba(0,0,0,0.05)]"
                >
                    <div className="bg-white rounded-[3.8rem] overflow-hidden group cursor-pointer text-center">
                        <div className="grid lg:grid-cols-2">
                            <div className="relative h-80 lg:h-auto overflow-hidden">
                                <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-all duration-[2s]" />
                                <div className="absolute inset-0 bg-slate-900/5 transition-opacity group-hover:opacity-0" />
                                <div className="absolute top-10 left-10">
                                    <span className="bg-slate-950 text-white text-[9px] font-black uppercase tracking-[0.3em] px-8 py-4 rounded-2xl shadow-2xl">
                                        Primary Briefing
                                    </span>
                                </div>
                            </div>
                            <div className="p-12 md:p-20 flex flex-col justify-center items-center">
                                <div className="flex items-center gap-4 mb-8">
                                    <div className="w-8 h-[2px] bg-brand-accent/40" />
                                    <span className="text-brand-accent font-black text-[10px] uppercase tracking-[0.4em]">{featuredPost.category}</span>
                                    <div className="w-8 h-[2px] bg-brand-accent/40" />
                                </div>
                                <h2 className="font-orbitron font-black text-2xl md:text-4xl lg:text-5xl text-slate-900 mb-8 uppercase tracking-tighter leading-[0.9] group-hover:text-brand-accent transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-slate-500 mb-12 text-base md:text-lg leading-relaxed font-light max-w-xl">{featuredPost.excerpt}</p>
                                <div className="flex items-center justify-between w-full pt-10 border-t border-slate-50">
                                    <div className="flex items-center gap-10 text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">
                                        <span className="text-slate-900">{featuredPost.author}</span>
                                        <span className="flex items-center gap-3"><Clock size={16} className="text-brand-accent" /> {featuredPost.readTime}</span>
                                    </div>
                                    <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-2xl transition-all duration-500">
                                        <ArrowRight size={24} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Posts Grid - Architectural Briefs */}
            <section className="container px-6 md:px-12 mx-auto relative z-10">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-12 rounded-[3.5rem] border border-slate-100 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group cursor-pointer flex flex-col items-center text-center"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-4 h-[2px] bg-brand-accent/20" />
                                <span className="text-brand-accent font-black text-[9px] uppercase tracking-[0.3em]">{post.category}</span>
                                <div className="w-4 h-[2px] bg-brand-accent/20" />
                            </div>
                            <h3 className="font-orbitron font-black text-lg text-slate-900 mb-8 uppercase tracking-tighter leading-tight group-hover:text-brand-accent transition-colors flex-grow">
                                {post.title}
                            </h3>
                            <p className="text-slate-500 text-xs mb-12 leading-relaxed font-light line-clamp-3 max-w-[280px]">{post.excerpt}</p>
                            <div className="flex items-center justify-between w-full pt-8 border-t border-slate-50">
                                <div className="flex items-center gap-6 text-slate-400 text-[9px] font-black uppercase tracking-[0.15em]">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={14} className="opacity-50" /> {post.readTime}</span>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default BlogPage;
