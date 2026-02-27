import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ChevronRight, Zap, Target, Cpu, Shield, Database, LayoutGrid, ArrowRight } from 'lucide-react';

const solutions = [
    {
        id: 'automation',
        title: 'Automation & Integration',
        icon: <Zap size={18} />,
        desc: 'Streamline your operations with intelligent, cross-platform automation that scales with your ambition.',
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
        desc: 'Unleash the power of neural intelligence to drive decision-making and innovation.',
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
        desc: 'High-performance architecture built for ultimate resilience and global scale.',
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
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const location = useLocation();
    const closeTimeout = React.useRef(null);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    const handleMouseEnter = (isMega) => {
        if (closeTimeout.current) clearTimeout(closeTimeout.current);
        if (isMega) setIsMegaMenuOpen(true);
        else setIsMegaMenuOpen(false);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setIsMegaMenuOpen(false);
        }, 300);
    };

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Solution', path: '/services', mega: true },
        { label: 'Product', path: '/products' },
        { label: 'Industries', path: '/industries' },
        { label: 'Careers', path: '/careers' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 ease-in-out ${isScrolled ? 'py-2 md:py-4' : 'py-4 md:py-8'}`}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
            <div className="max-w-[1600px] mx-auto px-4 md:px-8">
                <nav
                    className={`relative transition-all duration-700 ease-in-out flex items-center justify-between px-6 md:px-10 py-3 md:py-4 overflow-hidden rounded-[2.5rem] border
                        ${isScrolled
                            ? 'bg-white/80 backdrop-blur-2xl border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.05)]'
                            : 'bg-white/40 backdrop-blur-md border-white/20 shadow-none'}`}
                >
                    {/* Background Shimmer Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer-fast opacity-30 pointer-events-none" />

                    <Link to="/" className="relative z-10">
                        <Logo className="h-8 md:h-9" isDark={false} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-2 xl:gap-4 relative z-10">
                        {navItems.map((item) => (
                            <div
                                key={item.path}
                                onMouseEnter={() => handleMouseEnter(item.mega)}
                                onMouseLeave={handleMouseLeave}
                                className="relative py-2 px-1"
                            >
                                <Link
                                    to={item.path}
                                    className={`relative px-4 py-2 text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-500 rounded-full group flex items-center gap-1
                                        ${isActive(item.path) ? 'text-brand-accent' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-900/5'}`}
                                >
                                    {item.label}
                                    {item.mega && <ChevronRight size={10} className={`transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-90' : 'group-hover:translate-x-0.5'}`} />}

                                    {isActive(item.path) && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className="absolute inset-0 bg-brand-accent/5 rounded-full -z-10"
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className={`absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-accent scale-0 transition-transform duration-500 ${isActive(item.path) ? 'scale-100' : 'group-hover:scale-100'}`} />
                                </Link>
                            </div>
                        ))}

                        <div className="ml-4 pl-4 border-l border-slate-200/50">
                            <Link
                                to="/contact"
                                className="group relative overflow-hidden bg-slate-900 text-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(15,23,42,0.3)] flex items-center gap-3"
                            >
                                <span className="relative z-10">Get Started</span>
                                <ArrowRight size={14} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                                <div className="absolute inset-0 bg-gradient-to-r from-brand-accent to-brand-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden relative z-10 p-3 bg-slate-900/5 hover:bg-slate-900/10 rounded-2xl transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} className="text-slate-900" /> : <Menu size={20} className="text-slate-900" />}
                    </button>
                </nav>
            </div>

            {/* Mega Menu */}
            <AnimatePresence>
                {isMegaMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-0 w-full pt-4 md:pt-6"
                        onMouseEnter={() => handleMouseEnter(true)}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="max-w-[1200px] mx-auto px-4 md:px-8">
                            <div className="bg-white border border-slate-100/50 rounded-[3rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] overflow-hidden flex min-h-[550px]">
                                {/* Sidebar Categories */}
                                <div className="w-[320px] bg-slate-50/80 border-r border-slate-100/50 p-10 flex flex-col justify-between">
                                    <div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10 block">Navigation</span>
                                        <div className="space-y-4">
                                            {solutions.map((sol) => (
                                                <button
                                                    key={sol.id}
                                                    onMouseEnter={() => setActiveSolution(sol)}
                                                    className={`w-full flex items-center justify-between p-5 rounded-2xl transition-all duration-500 group relative
                                                        ${activeSolution.id === sol.id
                                                            ? 'bg-white shadow-xl shadow-slate-200/50 translate-x-3 text-slate-900'
                                                            : 'hover:bg-white/50 hover:translate-x-1 text-slate-500'}`}
                                                >
                                                    <div className="flex items-center gap-5">
                                                        <div className={`p-3 rounded-xl transition-all duration-500 ${activeSolution.id === sol.id ? 'bg-slate-900 text-white' : 'bg-slate-200/50 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600'}`}>
                                                            {sol.icon}
                                                        </div>
                                                        <span className="text-[13px] font-black tracking-widest text-left uppercase">
                                                            {sol.title.split(' ')[0]}
                                                        </span>
                                                    </div>
                                                    <ChevronRight size={16} className={`transition-all duration-500 ${activeSolution.id === sol.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`} />
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-slate-900 rounded-3xl text-white mt-10">
                                        <p className="text-[11px] font-medium opacity-60 mb-3 tracking-wider">LATEST UPDATES</p>
                                        <p className="text-sm font-bold mb-4 leading-tight">New Enterprise AI Tools just launched!</p>
                                        <Link to="/industries" className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-accent hover:text-white transition-colors flex items-center gap-2">
                                            Learn More <ArrowRight size={12} />
                                        </Link>
                                    </div>
                                </div>

                                {/* Main Content Area */}
                                <div className="flex-1 p-14 bg-white relative">
                                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-accent/5 blur-[100px] rounded-full -mr-48 -mt-48" />

                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeSolution.id}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            exit={{ opacity: 0, x: -20 }}
                                            transition={{ duration: 0.5, ease: "easeOut" }}
                                            className="relative z-10 h-full flex flex-col"
                                        >
                                            <div className="mb-14">
                                                <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter uppercase leading-[0.9]">
                                                    {activeSolution.title.split(' ').map((word, i) => (
                                                        <span key={i} className={i % 2 !== 0 ? 'text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500' : ''}>
                                                            {word}{' '}
                                                        </span>
                                                    ))}
                                                </h2>
                                                <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-2xl">
                                                    {activeSolution.desc}
                                                </p>
                                            </div>

                                            <div className="grid grid-cols-2 gap-x-16 gap-y-4 flex-1">
                                                {activeSolution.services.map((service, idx) => (
                                                    <motion.div
                                                        key={idx}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: idx * 0.05 }}
                                                    >
                                                        <Link
                                                            to={service.path}
                                                            className="group flex items-center justify-between py-4 border-b border-slate-100 hover:border-brand-accent/50 transition-all"
                                                        >
                                                            <div className="flex items-center gap-4">
                                                                <span className="text-[10px] font-bold text-slate-300 group-hover:text-brand-accent transition-colors">0{idx + 1}</span>
                                                                <span className="text-sm font-bold text-slate-600 group-hover:text-slate-900 transition-colors uppercase tracking-wider">
                                                                    {service.name}
                                                                </span>
                                                            </div>
                                                            <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                                <ArrowRight size={14} className="text-brand-accent" />
                                                            </div>
                                                        </Link>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="lg:hidden fixed inset-0 z-[110] bg-white p-8 pt-24"
                    >
                        <button
                            className="absolute top-8 right-8 p-3 bg-slate-900/5 rounded-2xl"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <X size={24} className="text-slate-900" />
                        </button>

                        <div className="flex flex-col gap-2">
                            {navItems.map((item, idx) => (
                                <motion.div
                                    key={item.path}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <Link
                                        to={item.path}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className={`text-4xl font-black uppercase tracking-tighter py-2 block ${isActive(item.path) ? 'text-brand-accent' : 'text-slate-900'}`}
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-auto pt-10">
                            <Link
                                to="/contact"
                                onClick={() => setMobileMenuOpen(false)}
                                className="w-full bg-slate-900 text-white h-16 rounded-3xl text-sm font-black uppercase tracking-[0.2em] flex items-center justify-center gap-3"
                            >
                                Get Started <ArrowRight size={18} />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

export default Header;
