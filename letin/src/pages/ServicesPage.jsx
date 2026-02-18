import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Cpu, Zap, ChevronRight, Cloud, Database, Brain, Lock, Settings } from 'lucide-react';

const services = [
    {
        icon: <Brain size={32} />, title: "Enterprise AI", tagline: "Neural Intelligence at Scale",
        desc: "Custom AI/ML solutions that automate complex decision-making, predict market trends, and unlock data-driven insights across your organization.",
        features: ["Predictive Analytics", "NLP Pipelines", "Computer Vision", "Recommendation Engines"],
        stats: [{ label: "Accuracy", value: "99.2%" }, { label: "Speed", value: "10x faster" }]
    },
    {
        icon: <Cloud size={32} />, title: "Cloud Architecture", tagline: "Infinite Scalability",
        desc: "Design and deploy cloud-native microservices architectures that handle millions of requests while maintaining zero downtime.",
        features: ["Multi-Cloud Strategy", "Kubernetes Orchestration", "Serverless Computing", "Edge Deployment"],
        stats: [{ label: "Uptime", value: "99.99%" }, { label: "Scale", value: "10M+ RPS" }]
    },
    {
        icon: <Globe size={32} />, title: "Web Platforms", tagline: "Digital Experiences",
        desc: "Full-stack web applications built with modern frameworks, delivering blazing-fast performance and exceptional user experiences.",
        features: ["React/Next.js", "Progressive Web Apps", "Real-time Systems", "API Development"],
        stats: [{ label: "Performance", value: "98/100" }, { label: "Load", value: "<1s" }]
    },
    {
        icon: <Lock size={32} />, title: "Cyber Security", tagline: "Zero Trust Defense",
        desc: "Comprehensive security solutions including penetration testing, SIEM implementation, and quantum-safe encryption protocols.",
        features: ["Threat Intelligence", "Zero Trust Architecture", "SOC Setup", "Compliance Automation"],
        stats: [{ label: "Threats Blocked", value: "1M+/day" }, { label: "Standard", value: "ISO 27001" }]
    },
    {
        icon: <Database size={32} />, title: "Data Engineering", tagline: "Data at Scale",
        desc: "Build robust data pipelines, lakes, and warehouses that transform raw data into actionable business intelligence.",
        features: ["ETL Pipelines", "Data Lakes", "Real-time Streaming", "BI Dashboards"],
        stats: [{ label: "Data Processed", value: "50TB+/day" }, { label: "Latency", value: "<100ms" }]
    },
    {
        icon: <Settings size={32} />, title: "DevOps & SRE", tagline: "Operational Excellence",
        desc: "Implement CI/CD pipelines, infrastructure as code, and observability stacks that accelerate delivery and ensure reliability.",
        features: ["CI/CD Automation", "Infrastructure as Code", "Monitoring & Alerting", "Chaos Engineering"],
        stats: [{ label: "Deploy Freq", value: "50x/day" }, { label: "MTTR", value: "<5min" }]
    },
];

const ServicesPage = () => {
    const [activeService, setActiveService] = useState(0);

    return (
        <div className="pt-32 pb-20 relative">
            {/* Hero */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">What We Do</span>
                    <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-8 uppercase tracking-tighter">
                        World-Class <span className="text-brand-accent">Solutions</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        We deliver enterprise-grade technology services that drive transformation and competitive advantage.
                    </p>
                </motion.div>
            </section>

            {/* Services Grid + Detail */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32 mx-auto">
                <div className="grid lg:grid-cols-12 gap-12">
                    {/* Service Cards */}
                    <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-6">
                        {services.map((service, i) => (
                            <motion.button
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.05 }}
                                onClick={() => setActiveService(i)}
                                className={`p-8 rounded-[2rem] text-left transition-all duration-700 group relative overflow-hidden ${activeService === i
                                    ? 'bg-white border-brand-accent/40 shadow-2xl scale-[1.02] border'
                                    : 'bg-white/50 border border-slate-100 hover:bg-white hover:shadow-xl hover:border-brand-accent/20 hover:-translate-y-1'
                                    }`}
                            >
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-all duration-500 ${activeService === i ? 'bg-brand-accent text-white shadow-lg' : 'bg-slate-50 text-brand-accent group-hover:bg-brand-accent group-hover:text-white'}`}>
                                    {React.cloneElement(service.icon, { size: 24 })}
                                </div>
                                <h4 className={`font-orbitron font-black text-xs uppercase tracking-[0.2em] transition-colors duration-500 ${activeService === i ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-900'}`}>
                                    {service.title}
                                </h4>
                                {activeService === i && (
                                    <motion.div layoutId="service-indicator" className="absolute top-0 left-0 w-1 h-full bg-brand-accent" />
                                )}
                            </motion.button>
                        ))}
                    </div>

                    {/* Active Detail */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeService}
                                initial={{ opacity: 0, x: 30, filter: "blur(10px)" }}
                                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                                exit={{ opacity: 0, x: -30, filter: "blur(10px)" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                                className="card-light p-12 md:p-20 rounded-[4rem] bg-white border border-slate-100 shadow-2xl relative overflow-hidden h-full flex flex-col justify-center"
                            >
                                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-3xl -z-0" />
                                <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] uppercase mb-8 block relative z-10">
                                    {services[activeService].tagline}
                                </span>
                                <h3 className="font-orbitron font-black text-3xl md:text-5xl text-slate-900 mb-8 uppercase tracking-tighter leading-tight relative z-10">
                                    {services[activeService].title}
                                </h3>
                                <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-12 font-light relative z-10">{services[activeService].desc}</p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-12 mb-12 relative z-10">
                                    {services[activeService].features.map((f, i) => (
                                        <div key={i} className="flex items-center gap-4 text-sm md:text-base text-slate-700 font-bold uppercase tracking-widest">
                                            <div className="w-6 h-6 rounded-lg bg-brand-accent/10 flex items-center justify-center">
                                                <ChevronRight size={14} className="text-brand-accent" />
                                            </div>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="flex flex-wrap gap-8 relative z-10 pt-8 border-t border-slate-50">
                                    {services[activeService].stats.map((stat, i) => (
                                        <div key={i} className="bg-slate-50 px-8 py-6 rounded-2xl border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-500">
                                            <p className="text-brand-accent font-orbitron font-black text-2xl md:text-3xl mb-2">{stat.value}</p>
                                            <p className="text-slate-400 text-[10px] uppercase font-black tracking-[0.2em]">{stat.label}</p>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="container px-4 md:px-6 mx-auto">
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">The Methodology</span>
                    <h2 className="font-orbitron font-black text-4xl md:text-7xl text-slate-900 uppercase tracking-tighter">
                        Operational <br /><span className="text-brand-accent">Precision.</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {['Discovery & Research', 'Architecture & Design', 'Agile Development', 'Deploy & Scale'].map((step, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-light p-10 rounded-[2.5rem] text-center group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 hover:-translate-y-2 shadow-xl"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-900 text-white flex items-center justify-center font-orbitron font-black text-xl mb-8 group-hover:bg-brand-accent group-hover:shadow-lg transition-all duration-500 shadow-xl">
                                {i + 1}
                            </div>
                            <h4 className="font-orbitron font-black text-sm text-slate-900 uppercase tracking-wider mb-4 leading-tight">{step}</h4>
                            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest leading-loose opacity-60">Phase {i + 1}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Background Glows */}
            <div className="fixed top-1/4 left-0 w-[400px] h-[400px] bg-brand-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-1/3 right-0 w-[500px] h-[500px] bg-brand-secondary/5 blur-[130px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default ServicesPage;
