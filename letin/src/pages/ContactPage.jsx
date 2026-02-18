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
        <div className="pt-32 pb-20 relative">
            {/* Hero */}
            <section className="container px-4 md:px-6 mb-20 md:mb-32">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="text-center max-w-5xl mx-auto">
                    <span className="text-brand-accent font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-6 block">Get In Touch</span>
                    <h1 className="cinematic-heading text-4xl md:text-6xl lg:text-7xl text-slate-800 mb-8 uppercase tracking-tighter">
                        Let's <span className="text-brand-accent">Connect</span>
                    </h1>
                    <p className="text-slate-500 text-lg md:text-2xl font-light leading-relaxed max-w-3xl mx-auto">
                        Have a project in mind? Let's discuss how we can help transform your business.
                    </p>
                </motion.div>
            </section>

            {/* Contact Cards */}
            <section className="container px-4 md:px-6 mb-16 mx-auto">
                <div className="grid md:grid-cols-3 gap-8">
                    {contactInfo.map((info, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="card-light p-10 rounded-[2.5rem] text-center group bg-white border border-slate-100 hover:shadow-2xl hover:border-brand-accent/20 transition-all duration-700 hover:-translate-y-2 shadow-lg"
                        >
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center text-brand-accent mb-8 group-hover:bg-brand-accent group-hover:text-white group-hover:shadow-lg transition-all duration-500">
                                {info.icon}
                            </div>
                            <h4 className="font-orbitron font-black text-xs text-slate-400 uppercase tracking-[0.3em] mb-4">{info.title}</h4>
                            <p className="text-slate-900 font-black text-lg mb-2 tracking-tight">{info.detail}</p>
                            <p className="text-slate-500 text-sm font-light">{info.sub}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Form + FAQ */}
            <section className="container px-4 md:px-6 mb-20 mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="card-light p-12 md:p-16 rounded-[3rem] bg-white/80 backdrop-blur-xl border border-slate-100 shadow-2xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] -z-0 rounded-full" />

                        <div className="relative z-10 mb-10">
                            <span className="text-brand-accent font-black tracking-[0.4em] text-[10px] uppercase block mb-4">
                                Secure Channel
                            </span>
                            <h3 className="font-orbitron font-black text-3xl md:text-4xl text-slate-900 uppercase tracking-tighter leading-tight">
                                Initiate <br /><span className="text-brand-accent">Protocol.</span>
                            </h3>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="space-y-3 group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-accent transition-colors">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Ex. Arjun Mehta"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 text-sm focus:border-brand-accent focus:bg-white focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] outline-none transition-all duration-300 placeholder:text-slate-300 font-medium"
                                        required
                                    />
                                </div>
                                <div className="space-y-3 group">
                                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-accent transition-colors">Business Email</label>
                                    <input
                                        type="email"
                                        placeholder="arjun@enterprise.com"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 text-sm focus:border-brand-accent focus:bg-white focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] outline-none transition-all duration-300 placeholder:text-slate-300 font-medium"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-3 group">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-accent transition-colors">Company Name</label>
                                <input
                                    type="text"
                                    placeholder="Your Business Entity"
                                    value={form.company}
                                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 text-sm focus:border-brand-accent focus:bg-white focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] outline-none transition-all duration-300 placeholder:text-slate-300 font-medium"
                                />
                            </div>
                            <div className="space-y-3 group">
                                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1 group-focus-within:text-brand-accent transition-colors">Project Brief</label>
                                <textarea
                                    rows="5"
                                    placeholder="Briefly describe your requirements..."
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-6 py-5 text-slate-900 text-sm focus:border-brand-accent focus:bg-white focus:shadow-[0_0_20px_rgba(99,102,241,0.1)] outline-none transition-all duration-300 placeholder:text-slate-300 resize-none font-medium"
                                    required
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] shadow-[0_20px_40px_rgba(99,102,241,0.2)] hover:shadow-[0_30px_60px_rgba(99,102,241,0.4)] transition-all duration-500 relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center justify-center gap-4">
                                    Transmit Briefing
                                    <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-brand-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </button>
                        </form>
                    </motion.div>

                    {/* FAQ */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="font-orbitron font-black text-2xl text-slate-900 mb-10 uppercase tracking-tighter">Strategic <br /><span className="text-brand-accent">Inquiry.</span></h3>
                        <div className="space-y-4">
                            {faqs.map((faq, i) => (
                                <div
                                    key={i}
                                    className="card-light bg-white border border-slate-100 rounded-[1.5rem] overflow-hidden transition-all duration-500 hover:shadow-xl hover:border-brand-accent/20"
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                        className="w-full flex items-center justify-between p-8 text-left"
                                    >
                                        <span className={`font-orbitron font-black text-sm uppercase tracking-wider transition-colors duration-300 ${openFaq === i ? 'text-brand-accent' : 'text-slate-700'}`}>{faq.q}</span>
                                        <div className={`w-8 h-8 rounded-lg bg-slate-50 flex items-center justify-center transition-all duration-300 ${openFaq === i ? 'bg-brand-accent text-white rotate-180' : 'text-slate-400'}`}>
                                            <ChevronDown size={16} className="flex-shrink-0" />
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {openFaq === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                            >
                                                <div className="px-8 pb-8">
                                                    <p className="text-slate-500 text-sm leading-relaxed font-light border-l-2 border-brand-accent/20 pl-6">{faq.a}</p>
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

            {/* Background Glows */}
            <div className="fixed top-1/3 left-0 w-[500px] h-[500px] bg-brand-accent/5 blur-[150px] rounded-full -z-10 pointer-events-none" />
            <div className="fixed bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-secondary/5 blur-[130px] rounded-full -z-10 pointer-events-none" />
        </div>
    );
};

export default ContactPage;
