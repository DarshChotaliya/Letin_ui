import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 1500);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (type) => {
        localStorage.setItem('cookie-consent', type);
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    className="fixed bottom-6 left-6 right-6 md:right-auto md:w-[450px] z-[1000]"
                >
                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 p-8">
                        <h4 className="text-slate-900 font-bold text-lg mb-4">We value your privacy</h4>
                        <p className="text-slate-500 text-sm leading-relaxed mb-8">
                            We use cookies on our website to provide you with a more personalized digital experience.
                            To learn more about how we use cookies and how you can change your cookie settings,
                            please refer to the Privacy Policy and Cookie Policy pages.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={() => handleConsent('all')}
                                className="w-full bg-slate-950 text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-brand-accent transition-colors shadow-lg"
                            >
                                Accept all
                            </button>
                            <button
                                onClick={() => handleConsent('reject')}
                                className="w-full bg-slate-800 text-white py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-slate-700 transition-colors"
                            >
                                Reject all
                            </button>
                            <button
                                onClick={() => handleConsent('manage')}
                                className="w-full bg-slate-100 text-slate-500 py-3 rounded-xl font-bold text-sm tracking-wide hover:bg-slate-200 transition-colors"
                            >
                                Manage preferences
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default CookieConsent;
