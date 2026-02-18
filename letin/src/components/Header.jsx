import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Services', path: '/services' },
        { label: 'Portfolio', path: '/portfolio' },
        { label: 'Blog', path: '/blog' },
        { label: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/';
        return location.pathname.startsWith(path);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[100] transition-all duration-500">
            <div className="mx-4 md:mx-8 mt-4">
                <nav className="card-light rounded-2xl px-6 md:px-10 py-4 flex items-center justify-between shadow-xl border border-slate-100">
                    <Link to="/">
                        <Logo className="h-8 text-slate-900" isDark={false} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-12">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`text-[11px] font-black uppercase tracking-[0.3em] transition-all duration-500 relative group py-2 ${isActive(item.path) ? 'text-brand-accent' : 'text-slate-400 hover:text-slate-900'}`}
                            >
                                {item.label}
                                <span className={`absolute bottom-0 left-0 h-[2px] bg-brand-accent transition-all duration-500 rounded-full shadow-[0_0_12px_rgba(99,102,241,0.5)] ${isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </Link>
                        ))}
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
