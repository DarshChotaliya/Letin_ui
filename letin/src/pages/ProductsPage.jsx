import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Laptop, Globe, Shield, Zap, ArrowRight, Cpu, Layers } from 'lucide-react';

const products = [
    {
        id: 'scrap-master',
        title: "Scrap Management System",
        subtitle: "Global Trading Engine",
        desc: "An enterprise-grade platform specifically engineered for the complex dynamics of global scrap trading. Features real-time price tracking, automated LC management, and multi-currency billing.",
        icon: <Layers size={24} />,
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
        features: ["Smart Inventory Management", "Regulatory Compliance", "Logistics Integration"]
    },
    {
        id: 'letin-pos',
        title: "Letin Omni-Retail POS",
        subtitle: "Retail Reinvented",
        desc: "A powerful, unified commerce solution that connects your physical and digital storefronts. Real-time inventory sync, advanced customer analytics, and seamless payment processing.",
        icon: <Smartphone size={24} />,
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=1200",
        features: ["Cloud-First Architecture", "Offline Support", "Detailed Reporting"]
    },
    {
        id: 'core-erp',
        title: "CoreX ERP Solution",
        subtitle: "Enterprise Backbone",
        desc: "A modular, scalable ERP designed for growth-stage companies. Automate your finance, human resources, and supply chain with a single, secure source of truth.",
        icon: <Cpu size={24} />,
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200",
        features: ["A.I. Insights", "Multi-Entity Support", "Custom Workflows"]
    }
];

const ProductsPage = () => {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-[#fbfbfd]">
            {/* Hero Section */}
            <section className="container mx-auto px-6 mb-24 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="max-w-4xl mx-auto"
                >
                    <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] uppercase mb-6 block">Our Innovations</span>
                    <h1 className="text-slate-900 text-5xl md:text-8xl font-black font-jakarta tracking-tighter uppercase mb-8 leading-[0.9]">
                        Technology that <br />
                        <span className="text-brand-accent italic">Defines Markets.</span>
                    </h1>
                    <p className="text-slate-500 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                        We build high-performance products designed to solve complex business challenges
                        with elegance and precision.
                    </p>
                </motion.div>
            </section>

            {/* Product Grid */}
            <section className="container mx-auto px-6">
                <div className="grid gap-16">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}
                        >
                            {/* Text Content */}
                            <div className="flex-1 space-y-8">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <div className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 text-brand-accent">
                                            {product.icon}
                                        </div>
                                        <span className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">{product.subtitle}</span>
                                    </div>
                                    <h2 className="text-4xl font-black font-jakarta text-slate-900 tracking-tight uppercase leading-none">{product.title}</h2>
                                    <p className="text-slate-500 text-lg font-light leading-relaxed italic border-l-4 border-brand-accent pl-6">
                                        "{product.desc}"
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 py-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-brand-accent" />
                                            <span className="text-slate-600 font-medium text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <button className="group flex items-center gap-6 text-[11px] font-black uppercase tracking-[0.3em] text-slate-900 hover:text-brand-accent transition-all pt-8 border-t border-slate-100 w-fit">
                                    Product Deep Dive <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                                </button>
                            </div>

                            {/* Image/Device Side */}
                            <div className="flex-1 w-full">
                                <motion.div
                                    className="relative rounded-[3rem] overflow-hidden shadow-2xl bg-white p-4 border border-slate-200"
                                    whileHover={{ y: -10 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <div className="rounded-[2.5rem] overflow-hidden aspect-[4/3]">
                                        <img
                                            src={product.image}
                                            alt={product.title}
                                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-32 container mx-auto px-6">
                <div className="bg-slate-950 rounded-[4rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.1)_0,transparent_70%)]" />
                    <div className="relative z-10">
                        <h2 className="text-white text-4xl md:text-7xl font-black font-jakarta tracking-tighter uppercase mb-10 leading-none">
                            Ready for your <br /> <span className="text-brand-accent italic">Custom Solution?</span>
                        </h2>
                        <button className="bg-white text-slate-950 px-12 py-5 rounded-full font-black text-xs uppercase tracking-[0.3em] hover:bg-brand-accent hover:text-white transition-all">
                            Start Building Now
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
