import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, ChevronDown, Send } from 'lucide-react';

const contactInfo = [
    { icon: <Mail size={24} />, title: "Email Us", detail: "hello@letin.tech", sub: "Response within 24 hours" },
    { icon: <Phone size={24} />, title: "Call Us", detail: "+91 22 4500 XXXX", sub: "Mon-Fri, 9AM-6PM IST" },
    { icon: <MapPin size={24} />, title: "Visit Us", detail: "Letin Tower, Mumbai", sub: "Andheri East, 400069" },
];

const faqs = [
    { q: "What industries do you specialize in?", a: "We work across finance, healthcare, e-commerce, manufacturing, and emerging tech sectors, delivering tailored enterprise solutions." },
    { q: "What is your typical project timeline?", a: "Projects typically range from 2-6 months depending on scope. We use agile methodology with 2-week sprint cycles for transparency and rapid delivery." },
    { q: "Do you offer ongoing support?", a: "Yes, we provide 24/7 SLA-backed support, proactive monitoring, and regular updates for all deployed solutions." },
    { q: "What technologies do you use?", a: "We're technology agnostic but specialize in React, Node.js, Python, AWS/Azure/GCP, Kubernetes, TensorFlow, and modern data stacks." },
    { q: "How do you handle data security?", a: "All solutions follow ISO 27001 standards with end-to-end encryption, regular penetration testing, and GDPR/HIPAA compliance where applicable." },
];

const ContactPage = () => {
    const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
    const [openFaq, setOpenFaq] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you! We will get back to you within 24 hours.');
    };

    return (
        <div className="pt-40 pb-32 relative bg-[#fbfbfd] min-h-screen overflow-hidden">
            {/* Ambient Lighting */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/[0.03] blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-secondary/[0.02] blur-[120px] rounded-full pointer-events-none" />

            {/* Hero */}
            <section className="container px-6 md:px-12 mb-32 md:mb-56 relative z-10 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 40, damping: 20 }}
                    className="max-w-6xl"
                >
                    <span className="text-brand-accent font-black tracking-[0.6em] text-[10px] md:text-xs uppercase mb-8 block">Communications Hub</span>
                    <h1 className="cinematic-heading text-5xl md:text-8xl lg:text-9xl text-slate-900 leading-[0.9] mb-12 uppercase tracking-tighter">
                        Initiate <br />
                        <span className="text-brand-accent">Dialogue.</span>
                    </h1>
                    <p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed max-w-4xl">
                        Ready to architect your next competitive advantage?
                        Establish a high-bandwidth connection with our technical strategists.
                    </p>
                </motion.div>
            </section>

            {/* Contact Cards - Trio of Excellence */}
            <section className="container px-6 md:px-12 mb-32 mx-auto relative z-10">
                <div className="grid md:grid-cols-3 gap-6 md:gap-12">
                    {contactInfo.map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="p-12 rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.08)] transition-all duration-700 group text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center text-brand-accent mb-10 group-hover:bg-brand-accent group-hover:text-white transition-all duration-500 shadow-sm">
                                {info.icon}
                            </div>
                            <h4 className="font-orbitron font-black text-[10px] text-slate-400 uppercase tracking-[0.4em] mb-6">{info.title}</h4>
                            <p className="text-slate-900 font-black text-xl mb-3 tracking-tighter uppercase">{info.detail}</p>
                            <p className="text-slate-500 text-sm font-light leading-relaxed">{info.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Form + FAQ - The Bridge */}
            <section className="container px-6 md:px-12 mb-32 mx-auto relative z-10">
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7 p-12 md:p-20 rounded-[4rem] bg-white border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] relative overflow-hidden"
                    >
                        <div className="relative z-10 mb-16">
                            <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] uppercase block mb-4">
                                Strategic Brief
                            </span>
                            <h3 className="font-orbitron font-black text-3xl md:text-5xl text-slate-900 uppercase tracking-tighter leading-tight">
                                Transmit <br /><span className="text-brand-accent">Briefing.</span>
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-12 relative z-10">
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Operator Name</label>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        className="w-full bg-slate-50 border-b-2 border-slate-100 px-6 py-6 text-slate-900 text-sm focus:border-brand-accent outline-none transition-all duration-300 font-medium placeholder:text-slate-300 bg-transparent"
                                        required
                                    />
                                </div>
                                <div className="space-y-4">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Secure Email</label>
                                    <input
                                        type="email"
                                        placeholder="business@nexus.com"
                                        className="w-full bg-slate-50 border-b-2 border-slate-100 px-6 py-6 text-slate-900 text-sm focus:border-brand-accent outline-none transition-all duration-300 font-medium placeholder:text-slate-300 bg-transparent"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Organization</label>
                                <input
                                    type="text"
                                    placeholder="Entity Name"
                                    className="w-full bg-slate-50 border-b-2 border-slate-100 px-6 py-6 text-slate-900 text-sm focus:border-brand-accent outline-none transition-all duration-300 font-medium placeholder:text-slate-300 bg-transparent"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Objective</label>
                                <textarea
                                    rows="4"
                                    placeholder="Outline your requirements..."
                                    className="w-full bg-slate-50 border-b-2 border-slate-100 px-6 py-6 text-slate-900 text-sm focus:border-brand-accent outline-none transition-all duration-300 font-medium placeholder:text-slate-300 resize-none bg-transparent"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="group flex items-center gap-6 bg-slate-950 text-white px-12 py-7 rounded-full font-black text-[10px] uppercase tracking-[0.4em] hover:bg-brand-accent transition-all duration-500 shadow-2xl"
                            >
                                <span>Initiate Uplink</span>
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <h3 className="font-orbitron font-black text-2xl text-slate-900 mb-12 uppercase tracking-tighter">Intelligence <br /><span className="text-brand-accent">Repository.</span></h3>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="bg-white border border-slate-100 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-lg"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-8 text-left"
                                    >
                                        <span className={`font-orbitron font-black text-xs uppercase tracking-[0.15em] transition-colors duration-300 ${openFaq === i ? 'text-brand-accent' : 'text-slate-700'}`}>{faq.q}</span>
                                        <ChevronDown size={14} className={`text-slate-400 transition-transform duration-500 ${openFaq === i ? 'rotate-180 text-brand-accent' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ type: "spring", stiffness: 50, damping: 20 }}
                                            >
                                                <div className="px-8 pb-8">
                                                    <p className="text-slate-500 text-sm leading-relaxed font-light border-l border-brand-accent/30 pl-6">{faq.a}</p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>

    );
};

export default ContactPage;
