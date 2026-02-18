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
        <div className="pt-32 pb-20 relative">
            {/* Hero */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">Blog & Insights</span>
                    <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-8 uppercase tracking-tighter">
                        Tech <span className="text-brand-accent">Insights</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        Deep dives into enterprise technology, architecture patterns, and industry trends.
                    </p>
                </motion.div>
            </section>

            {/* Featured Post */}
            <section className="container px-4 md:px-6 mb-16 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="card-light rounded-[3rem] overflow-hidden group cursor-pointer bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 shadow-xl"
                >
                    <div className="grid md:grid-cols-2">
                        <div className="relative h-64 md:h-auto overflow-hidden">
                            <img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                            <span className="absolute top-8 left-8 bg-brand-accent text-white text-[10px] font-black uppercase tracking-widest px-6 py-2 rounded-full shadow-lg">Featured Article</span>
                        </div>
                        <div className="p-10 md:p-20 flex flex-col justify-center">
                            <span className="text-brand-accent font-black text-xs uppercase tracking-[0.3em] mb-6">{featuredPost.category}</span>
                            <h2 className="font-orbitron font-black text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-6 uppercase tracking-tight leading-tight group-hover:text-brand-accent transition-colors duration-500">{featuredPost.title}</h2>
                            <p className="text-slate-500 mb-10 text-lg leading-relaxed font-light">{featuredPost.excerpt}</p>
                            <div className="flex items-center gap-6 text-slate-400 text-xs font-bold uppercase tracking-widest">
                                <span>{featuredPost.author}</span>
                                <span className="text-slate-200">/</span>
                                <span className="flex items-center gap-2"><Clock size={14} /> {featuredPost.readTime}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Posts Grid */}
            <section className="container px-4 md:px-6 mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.05 }}
                            className="card-light p-10 rounded-[2.5rem] cursor-pointer group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 hover:-translate-y-2 shadow-lg"
                        >
                            <span className="text-brand-accent font-black text-[10px] uppercase tracking-[0.3em] mb-6 block">{post.category}</span>
                            <h3 className="font-orbitron font-black text-lg text-slate-900 mb-6 uppercase tracking-tight group-hover:text-brand-accent transition-colors duration-500 leading-tight">{post.title}</h3>
                            <p className="text-slate-500 text-sm mb-10 leading-relaxed font-light">{post.excerpt}</p>
                            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                                <div className="flex items-center gap-4 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                                    <span>{post.date}</span>
                                    <span className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</span>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500">
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </section>

            {/* Background Glows */}
            <div className="fixed top-1/4 right-0 w-[400px] h-[400px] bg-brand-secondary/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default BlogPage;
