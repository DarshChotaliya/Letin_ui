import React from 'react';
import { motion } from 'framer-motion';
import { Target, Award, Users, Clock, Rocket, Heart, ShieldCheck, Globe } from 'lucide-react';

const timeline = [
    { year: '2018', title: 'Inception', desc: 'Sown the seeds of a digital revolution with a vision to redefine enterprise architecture.' },
    { year: '2020', title: 'Global Nexus', desc: 'Established critical operation hubs in London, Dubai, and Singapore.' },
    { year: '2022', title: 'AI Hegemony', desc: 'Deployed our proprietary Neural Core for predictive market analytics.' },
    { year: '2024', title: 'Quantum Protocol', desc: 'Patented "Aegis-Q", our first quantum-resistant encryption standard.' },
    { year: '2025', title: 'Neural Grid 2.0', desc: 'Launched the world\'s first self-optimizing, autonomous enterprise network.' },
    { year: '2026', title: 'Singularity', desc: 'Initiating Phase 1 of AGI integration for cognitive corporate governance.' },
];

const values = [
    { icon: <Rocket size={28} />, title: 'Innovation First', desc: 'We push boundaries with cutting-edge technologies.' },
    { icon: <ShieldCheck size={28} />, title: 'Security by Design', desc: 'Enterprise-grade security in every solution we build.' },
    { icon: <Users size={28} />, title: 'Client Centricity', desc: 'Your success is our primary metric of performance.' },
    { icon: <Heart size={28} />, title: 'Passion Driven', desc: 'We love what we do, and it shows in every line of code.' },
];

const team = [
    { name: 'Arjun Mehta', role: 'CEO & Founder', desc: 'Visionary leader with 15+ years in enterprise tech.' },
    { name: 'Priya Sharma', role: 'CTO', desc: 'Architect of our cloud-native platform strategy.' },
    { name: 'Rohan Kapoor', role: 'Head of AI', desc: 'Leading our neural intelligence initiatives.' },
    { name: 'Aisha Khan', role: 'Design Director', desc: 'Crafting experiences that users love.' },
];

const AboutPage = () => {
    return (
        <div className="pt-32 pb-20 relative">
            {/* Hero Section */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">
                        About Letin Solution
                    </span>
                    <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-8 uppercase tracking-tighter">
                        Engineering The <span className="text-brand-accent">Future</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        We are a global technology firm dedicated to building industrial-grade digital solutions that transform how enterprises operate.
                    </p>
                </motion.div>
            </section>

            {/* Mission & Vision */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32 mx-auto">
                <div className="grid md:grid-cols-2 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-light p-10 md:p-16 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 shadow-xl"
                    >
                        <Target className="text-brand-accent mb-6" size={36} />
                        <h3 className="font-orbitron font-black text-2xl text-slate-900 mb-6 uppercase tracking-wider">Our Mission</h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-light">
                            To empower enterprises with technology solutions that drive measurable impact, reduce operational complexity, and unlock new revenue streams through innovation.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-light p-10 md:p-16 rounded-[2.5rem] bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 shadow-xl"
                    >
                        <Globe className="text-brand-accent mb-6" size={36} />
                        <h3 className="font-orbitron font-black text-2xl text-slate-900 mb-6 uppercase tracking-wider">Our Vision</h3>
                        <p className="text-slate-500 text-lg leading-relaxed font-light">
                            To be the world's most trusted technology partner for enterprises seeking to digitally transform and compete at scale in the global marketplace.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Timeline */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block">Timeline</span>
                    <h2 className="font-orbitron font-black text-3xl md:text-6xl text-slate-900 uppercase tracking-wider">
                        Our <span className="text-brand-accent">Journey</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {timeline.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-light p-10 rounded-[2rem] bg-white border border-slate-100 group hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 shadow-lg"
                        >
                            <span className="text-brand-accent font-orbitron font-black text-3xl">{item.year}</span>
                            <h4 className="font-orbitron font-black text-xl text-slate-900 mt-6 mb-4 uppercase tracking-tighter">{item.title}</h4>
                            <p className="text-slate-500 text-base leading-relaxed font-light">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Values */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block">What Drives Us</span>
                    <h2 className="font-orbitron font-black text-3xl md:text-6xl text-slate-900 uppercase tracking-wider">
                        Core <span className="text-brand-accent">Values</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {values.map((val, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-light p-10 rounded-[2.5rem] text-center group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-500 hover:-translate-y-2 shadow-lg"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-lg transition-all duration-500">
                                {val.icon}
                            </div>
                            <h4 className="font-orbitron font-black text-sm text-slate-900 mb-4 uppercase tracking-wider">{val.title}</h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">{val.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Strategic Impact Stats */}
            <section className="container px-4 md:px-6 mb-32 mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 card-light p-12 rounded-[3rem] bg-slate-900 text-white shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-brand-accent/10 blur-[100px] pointer-events-none" />
                    {[
                        { label: 'Global Offices', val: '15+' },
                        { label: 'Enterprise Clients', val: '500+' },
                        { label: 'Revenue Generated', val: '$5B+' },
                        { label: 'Uptime Delivered', val: '99.99%' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, type: "spring" }}
                            className="text-center relative z-10"
                        >
                            <h3 className="font-orbitron font-black text-4xl md:text-5xl text-brand-accent mb-2">{stat.val}</h3>
                            <p className="text-slate-400 text-[10px] uppercase tracking-[0.2em] font-bold">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Technological Supremacy */}
            <section className="container px-4 md:px-6 mb-32 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block">Innovation</span>
                    <h2 className="font-orbitron font-black text-3xl md:text-6xl text-slate-900 uppercase tracking-wider">
                        Technological <span className="text-brand-accent">Supremacy</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { title: 'Quantum-Ready Architecture', desc: 'Future-proofing enterprise systems for the post-silicon era with quantum-resistant encryption and algorithms.' },
                        { title: 'Neural Ad-Hoc Networks', desc: 'Self-healing infrastructure that predicts failures before they occur using proprietary deep learning models.' },
                        { title: 'Hyper-Scale Cloud Mesh', desc: 'Distributed computing fabric that spans edge devices to core mainframes with zero latency overhead.' },
                    ].map((tech, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                            className="group p-10 border-l-2 border-slate-100 hover:border-brand-accent transition-all duration-500 bg-gradient-to-br from-white to-slate-50 hover:to-white shadow-lg rounded-r-3xl"
                        >
                            <div className="w-12 h-1 bg-brand-accent mb-6 group-hover:w-24 transition-all duration-500" />
                            <h4 className="font-orbitron font-black text-xl text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-brand-accent transition-colors">
                                {tech.title}
                            </h4>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">
                                {tech.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Team */}
            <section className="container px-4 md:px-6 mb-20 mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 block">Leadership</span>
                    <h2 className="font-orbitron font-black text-3xl md:text-6xl text-slate-900 uppercase tracking-wider">
                        Our <span className="text-brand-accent">Team</span>
                    </h2>
                </motion.div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {team.map((member, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-light p-10 rounded-[3rem] text-center group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 shadow-xl"
                        >
                            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-brand-accent to-brand-secondary flex items-center justify-center text-white font-orbitron font-black text-2xl mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg">
                                {member.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <h4 className="font-orbitron font-black text-lg text-slate-900 mb-2 uppercase tracking-tighter">{member.name}</h4>
                            <p className="text-brand-accent text-xs font-black uppercase tracking-widest mb-6">{member.role}</p>
                            <p className="text-slate-500 text-sm leading-relaxed font-light">{member.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Background Glow */}
            <div className="fixed top-1/3 right-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-1/4 left-0 w-[400px] h-[400px] bg-brand-secondary/5 blur-[130px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default AboutPage;
