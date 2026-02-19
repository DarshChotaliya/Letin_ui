import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronRight, Zap, Target, Cpu, Shield, Database, LayoutGrid } from 'lucide-react';

const solutions = [
    {
        id: 'automation',
        title: 'Automation & Integration',
        icon: <Zap size={18} />,
        desc: 'Explore our automation & integration to help your business grow and succeed.',
        services: [
            { name: 'Workflow Automation Services', path: '/services/workflow-automation' },
            { name: 'Business Process Automation', path: '/services/bpa' },
            { name: 'System Integration Services', path: '/services/system-integration' },
            { name: 'AI Powered Automation', path: '/services/ai-automation' },
            { name: 'Third Party Tool Integrations', path: '/services/third-party' },
            { name: 'Data Sync & Automation', path: '/services/data-sync' }
        ]
    },
    {
        id: 'ai',
        title: 'Artificial Intelligence & ML',
        icon: <Cpu size={18} />,
        desc: 'Leverage cutting-edge neural networks to transform your enterprise data into intelligence.',
        services: [
            { name: 'Neural Network Design', path: '/services/neural-networks' },
            { name: 'Predictive Analytics', path: '/services/predictive-analytics' },
            { name: 'Natural Language Processing', path: '/services/nlp' },
            { name: 'Computer Vision Solutions', path: '/services/computer-vision' }
        ]
    },
    {
        id: 'cloud',
        title: 'Cloud & Infrastructure',
        icon: <Database size={18} />,
        desc: 'Scale your operations with resilient, high-performance cloud architecture.',
        services: [
            { name: 'Cloud Migration', path: '/services/cloud-migration' },
            { name: 'Serverless Infrastructure', path: '/services/serverless' },
            { name: 'DevOps Optimization', path: '/services/devops' },
            { name: 'High-Availability Design', path: '/services/high-availability' }
        ]
    }
];

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSolution, setActiveSolution] = useState(solutions[0]);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const location = useLocation();
    const closeTimeout = React.useRef(null);

    const handleMouseEnter = (isMega) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        if (isMega) setIsMegaMenuOpen(true);
        else setIsMegaMenuOpen(false);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 300); // 300ms delay for stability
    };

    const navItems = [
        { label: 'Home', path: '/' },
        // ...
        { label: 'About', path: '/about' },
        { label: 'Solution', path: '/services', mega: true },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Product', path: '/products' },
        { label: 'Industries', path: '/industries' },
        { label: 'Careers', path: '/careers' },
        { label: 'Blog', path: '/blog' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className="fixed top-0 left-0 w-full z-[100] transition-all duration-500"
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="mx-4 md:mx-8 mt-4 pb-2"> {/* Added pb-2 here to bridge the hover gap */}
                <nav className="bg-white/95 backdrop-blur-xl rounded-2xl px-6 md:px-10 py-4 flex items-center justify-between shadow-xl border border-slate-100">
                    <Link to="/">
                        <Logo className="h-8 text-slate-900" isDark={false} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        {navItems.map((item) => (
                            <div
                                key={item.path}
                                onMouseEnter={() => handleMouseEnter(item.mega)}
                                onMouseLeave={handleMouseLeave}
                                className="relative py-2"
                            >
                                <Link
                                    to={item.path}
                                    className={`text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 group ${isActive(item.path) ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-900'}`}
                                >
                                    {item.label}
                                    <span className={`absolute -bottom-1 left-0 h-[2px] bg-brand-accent transition-all duration-500 rounded-full ${isActive(item.path) ? 'w-1/2' : 'w-0 group-hover:w-1/2'}`}></span>
                                </Link>
                            </div>
                        ))}

                        <Link
                            to="/contact"
                            className="bg-slate-900 text-white px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.2em] hover:bg-brand-accent transition-all duration-300 shadow-lg shadow-slate-200/50"
                        >
                            Get In Touch
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-slate-900 p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </nav>
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
                {isMegaMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.4, ease: "circOut" }}
                        className="absolute top-full left-0 w-full px-4 md:px-8" // Removed mt-2 to prevent dead zone
                        onMouseEnter={() => handleMouseEnter(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-7xl mx-auto bg-white border border-slate-100 rounded-3xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex min-h-[500px]">
                            {/* Sidebar Categories */}
                            <div className="w-[300px] bg-slate-50/50 border-r border-slate-100 p-8">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 block">Our Solutions</span>
                                <div className="space-y-4">
                                    {solutions.map((sol) => (
                                        <button
                                            key={sol.id}
                                            onMouseEnter={() => setActiveSolution(sol)}
                                            className={`w-full flex items-center justify-between p-4 rounded-2xl transition-all duration-300 group ${activeSolution.id === sol.id ? 'bg-white shadow-lg shadow-slate-200/50 translate-x-2' : 'hover:bg-white/50 hover:translate-x-1'}`}
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className={`p-2 rounded-lg transition-colors ${activeSolution.id === sol.id ? 'bg-brand-accent text-white' : 'bg-slate-100 text-slate-400 group-hover:text-brand-accent'}`}>
                                                    {sol.icon}
                                                </div>
                                                <span className={`text-[12px] font-bold text-left tracking-wide ${activeSolution.id === sol.id ? 'text-slate-900' : 'text-slate-500'}`}>
                                                    {sol.title}
                                                </span>
                                            </div>
                                            <ChevronRight size={16} className={`transition-transform ${activeSolution.id === sol.id ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-45 group-hover:opacity-50'}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Main Content Area */}
                            <div className="flex-1 p-12 bg-white">
                                <motion.div
                                    key={activeSolution.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{activeSolution.title}</h2>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed max-w-2xl mb-12 italic border-l-4 border-brand-accent pl-6">
                                        "{activeSolution.desc}"
                                    </p>

                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-8 block">Featured Services</span>

                                    <div className="grid grid-cols-2 gap-x-12 gap-y-6">
                                        {activeSolution.services.map((service, idx) => (
                                            <Link
                                                key={idx}
                                                to={service.path}
                                                className="group flex items-center gap-4 py-3 border-b border-slate-50 hover:border-brand-accent/30 transition-all"
                                            >
                                                <div className="w-1.5 h-1.5 rounded-full bg-slate-200 group-hover:bg-brand-accent transition-colors" />
                                                <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900 transition-colors">
                                                    {service.name}
                                                </span>
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden mx-4 md:mx-8 mt-2 card-light rounded-2xl p-6 shadow-2xl border border-slate-100"
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={() => setMobileMenuOpen(false)}
                                    className={`text-base font-medium py-3 px-4 rounded-xl transition-all duration-300 ${isActive(item.path) ? 'bg-brand-accent/10 text-brand-accent' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'}`}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
