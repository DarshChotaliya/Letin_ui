import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer className="relative bg-slate-50 overflow-hidden border-t border-slate-100">
            {/* Accent Line */}
            {/* Accent Line Removed */}

            <div className="container py-20 md:py-28 px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <div className="lg:col-span-4">
                        <Logo className="h-10 mb-8 text-slate-900" isDark={false} />
                        <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-light">
                            Engineering next-generation digital ecosystems for global enterprises.
                            We transform complex challenges into elegant, scalable solutions.
                        </p>
                        <div className="flex gap-5 mt-8">
                            {['X', 'Li', 'Gh', 'Dr'].map((social) => (
                                <a key={social} href="#" className="w-10 h-10 bg-white shadow-sm rounded-xl flex items-center justify-center text-slate-400 hover:text-brand-accent border border-slate-100 hover:border-brand-accent/30 transition-all duration-500 text-xs font-black hover:-translate-y-1">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company Column */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h4 className="font-orbitron font-black text-xs uppercase tracking-[.3em] text-slate-900 mb-10">Company</h4>
                        <ul className="space-y-5">
                            {[{ label: 'About Us', to: '/about' }, { label: 'Services', to: '/services' }, { label: 'Portfolio', to: '/portfolio' }, { label: 'Blog', to: '/blog' }, { label: 'Contact', to: '/contact' }].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-slate-500 hover:text-brand-accent transition-all duration-300 text-sm flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 transition-all group-hover:bg-brand-accent group-hover:scale-125" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div className="lg:col-span-2 lg:ml-auto">
                        <h4 className="font-orbitron font-black text-xs uppercase tracking-[.3em] text-slate-900 mb-10">Solutions</h4>
                        <ul className="space-y-5">
                            {[{ label: 'Enterprise AI', to: '/services' }, { label: 'Cloud Mastery', to: '/services' }, { label: 'Scalable SaaS', to: '/services' }, { label: 'Mobile Ecosystems', to: '/services' }, { label: 'Cyber Resilience', to: '/services' }].map((link) => (
                                <li key={link.label}>
                                    <Link to={link.to} className="text-slate-500 hover:text-brand-accent transition-all duration-300 text-sm flex items-center gap-3 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-200 transition-all group-hover:bg-brand-accent group-hover:scale-125" />
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Column */}
                    <div className="lg:col-span-4 lg:ml-auto">
                        <h4 className="font-orbitron font-black text-xs uppercase tracking-[.3em] text-slate-900 mb-10">Contact</h4>
                        <div className="space-y-8">
                            <div>
                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2">Email</p>
                                <p className="text-slate-700 font-bold text-sm hover:text-brand-accent cursor-pointer transition-colors">hello@letin.tech</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2">Phone</p>
                                <p className="text-slate-700 font-bold text-sm hover:text-brand-accent cursor-pointer transition-colors">+91 22 4500 XXXX</p>
                            </div>
                            <div>
                                <p className="text-slate-400 text-[10px] uppercase font-bold tracking-widest mb-2">Headquarters</p>
                                <p className="text-slate-500 text-sm font-light">Letin Tower, Andheri East, Mumbai 400069</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
                    <p className="text-slate-400 text-xs tracking-widest font-bold uppercase">
                        © {new Date().getFullYear()} Letin Solution. All rights reserved.
                    </p>
                    <div className="flex gap-10">
                        {['Privacy', 'Terms', 'Security'].map((link) => (
                            <a key={link} href="#" className="text-slate-400 text-xs font-bold uppercase tracking-widest hover:text-brand-accent transition-colors">{link}</a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
