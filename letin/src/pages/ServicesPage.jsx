import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';

const allSolutions = [
    {
        id: 'cms',
        category: 'CMS Development',
        title: "CMS Development",
        desc: "Build better with Letin Solution. We deliver flexible Headless CMS solutions for seamless omnichannel publishing, high data integrity, and smarter workflows.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="40" y="20" width="120" height="80" rx="8" />
                <path d="M40 40h120M70 20v80M40 70h30" />
                <circle cx="100" cy="60" r="10" />
                <path d="M120 50l10 10-10 10" />
            </svg>
        )
    },
    {
        id: 'erp',
        category: 'ERP Services',
        title: "ERP Services",
        desc: "Letin Solution provides ERP Services for integrated business management. We offer Odoo implementation, customization, and support to unify data, streamline workflows, and ensure stability.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20l60 30-60 30-60-30z" />
                <path d="M40 50v30l60 30 60-30V50" />
                <path d="M100 80v30" />
                <circle cx="100" cy="50" r="5" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'ai-ml',
        category: 'Artificial Intelligence & Machine Learning',
        title: "Artificial Intelligence & Machine Learning",
        desc: "Artificial Intelligence & Machine Learning systems mimic human intelligence for tasks like decision-making and pattern recognition. Letin Solution provides AI solutions for business, enabling predictive modeling and automation.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="100" cy="60" r="30" />
                <path d="M100 30v60M70 60h60" />
                <path d="M80 40l40 40M80 80l40-40" />
                <circle cx="100" cy="60" r="15" className="animate-pulse" />
            </svg>
        )
    },
    {
        id: 'automation',
        category: 'Automation & Integration',
        title: "Automation & Integration",
        desc: "Our solutions streamline business operations. We implement automated workflows and integrate systems for seamless data flow, reducing manual effort and driving efficiency.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="70" cy="60" r="20" />
                <circle cx="130" cy="60" r="20" />
                <path d="M90 60h40" />
                <path d="M70 40v40M130 40v40" />
                <path d="M50 60l10 10 10-10" />
            </svg>
        )
    },
    {
        id: 'mvp',
        category: 'MVP Development',
        title: "MVP Development",
        desc: "Letin Solution MVP development focuses on building core product features quickly. We help startups launch faster, test ideas with real users, and refine their strategy based on direct feedback.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M100 20l20 60h-40z" />
                <path d="M80 80h40v20h-40z" />
                <path d="M70 50l-30 30M130 50l30 30" />
            </svg>
        )
    },
    {
        id: 'gen-ai',
        category: 'Generative AI',
        title: "Generative AI",
        desc: "Generative AI transforms complex data into actionable outputs. We leverage LLMs and neural networks to create custom AI agents that enhance productivity and creative workflows.",
        illustration: (
            <svg viewBox="0 0 200 120" className="w-full h-auto text-slate-900" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M60 40c20-20 60-20 80 0v40c-20 20-60 20-80 0z" />
                <path d="M80 60h40M80 70h40M80 50h20" />
                <circle cx="140" cy="30" r="5" fill="currentColor" />
            </svg>
        )
    }
];

const categories = [
    'All', 'CMS Development', 'ERP Services', 'Artificial Intelligence & Machine Learning',
    'Automation & Integration', 'MVP Development', 'Generative AI', 'Software Testing',
    'Mobile Application Development', 'Managed IT Services', 'Enterprise Software Development',
    'Cloud and Infrastructure Services'
];

const ServicesPage = () => {
    const [filter, setFilter] = useState('All');
    const [selectedSolution, setSelectedSolution] = useState(null);

    const filteredSolutions = filter === 'All'
        ? allSolutions
        : allSolutions.filter(s => s.category.includes(filter) || s.title.includes(filter));

    return (
        <div className="bg-[#fbfcff] min-h-screen font-inter select-none">
            {/* Modal for Details */}
            <AnimatePresence>
                {selectedSolution && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedSolution(null)}
                            className="absolute inset-0 bg-slate-900/40 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 30 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 30 }}
                            className="relative bg-white rounded-[4rem] p-10 md:p-20 max-w-4xl w-full shadow-2xl border border-white/20 overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedSolution(null)}
                                className="absolute top-10 right-10 p-4 rounded-full bg-slate-50 text-slate-400 hover:text-slate-900 transition-all hover:rotate-90"
                            >
                                <X size={24} />
                            </button>

                            <div className="mb-12 w-28 h-28 transform -rotate-12">
                                {selectedSolution.illustration}
                            </div>

                            <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase mb-4 block">Strategic Briefing</span>
                            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-6 leading-none">
                                {selectedSolution.title}
                            </h2>
                            <p className="text-slate-500 text-xl font-light leading-relaxed mb-12">
                                {selectedSolution.desc}
                            </p>

                            <div className="flex flex-wrap gap-4 mb-16">
                                {['Advanced Architecture', 'Scalable Ecosystem', 'AI Optimized'].map((tag) => (
                                    <span key={tag} className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-widest text-slate-400">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
                                Request Access
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Header Section */}
            <section className="pt-48 pb-24 relative overflow-hidden bg-white border-b border-slate-100">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                    style={{ backgroundImage: 'radial-gradient(#6366f1 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

                <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl"
                    >
                        <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-8 block bg-brand-accent/5 w-fit px-6 py-2 rounded-full border border-brand-accent/10">Solutions Portfolio</span>
                        <h1 className="text-slate-900 text-6xl md:text-9xl font-black tracking-tighter mb-12 leading-[0.85] uppercase">
                            What we can <br /> <span className="text-brand-accent italic">Solve for you.</span>
                        </h1>
                        <p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed max-w-3xl">
                            We engineer technical ecosystems that define industry standards.
                            From intelligent CMS to enterprise-scale AI, our protocol is absolute.
                        </p>
                    </motion.div>

                    {/* Filter Navigation */}
                    <div className="mt-20 flex flex-wrap gap-3">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest border transition-all duration-500 ${filter === cat
                                    ? 'bg-slate-950 text-white border-slate-950 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.3)]'
                                    : 'bg-white text-slate-400 border-slate-100 hover:border-brand-accent/30 hover:text-slate-900 hover:shadow-xl hover:shadow-slate-100'
                                    }`}
                            >
                                {cat === 'All' ? 'Genesis (All)' : cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Display Grid */}
            <section className="py-24 container mx-auto px-6 max-w-7xl">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100 rounded-[3rem] overflow-hidden">
                    <AnimatePresence mode='popLayout'>
                        {filteredSolutions.map((solution, idx) => (
                            <motion.div
                                layout
                                key={solution.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="bg-white p-12 md:p-16 flex flex-col group hover:bg-slate-50 transition-all duration-700 relative overflow-hidden"
                            >
                                {/* Background Accent */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-3xl rounded-full translate-x-16 -translate-y-16 group-hover:bg-brand-accent/10 transition-colors" />

                                <div className="mb-12 w-full max-w-[200px] h-[120px] transform group-hover:scale-110 transition-transform duration-1000">
                                    {solution.illustration}
                                </div>

                                <span className="text-brand-accent font-black text-[9px] uppercase tracking-widest mb-4 opacity-0 group-hover:opacity-100 transition-opacity">Protocol Ready</span>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 tracking-tight uppercase leading-none group-hover:text-brand-accent transition-colors">
                                    {solution.title}
                                </h3>
                                <p className="text-slate-500 text-base font-light leading-relaxed mb-12 flex-grow line-clamp-4 group-hover:text-slate-700 transition-colors">
                                    {solution.desc}
                                </p>

                                <button
                                    onClick={() => setSelectedSolution(solution)}
                                    className="flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-slate-900 transition-all"
                                >
                                    Detailed Brief <ArrowRight size={14} className="group-hover:translate-x-3 transition-transform duration-500 text-brand-accent" />
                                </button>

                                {/* Hover Border */}
                                <div className="absolute bottom-0 left-0 h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left w-full" />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;
