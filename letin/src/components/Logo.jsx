import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-8", isDark = false }) => {
    return (
        <div className={`flex items-center gap-3 ${className}`}>
            <div className="h-full aspect-square relative flex items-center justify-center">
                <motion.svg
                    viewBox="0 0 100 100"
                    className="h-full w-auto"
                    initial="initial"
                    animate="animate"
                >
                    <defs>
                        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#0ea5e9" />
                            <stop offset="100%" stopColor="#8b5cf6" />
                        </linearGradient>
                    </defs>

                    {/* V-Shape / Inverted Triangle */}
                    <motion.path
                        d="M15 20 L50 85 L85 20 Z"
                        fill="url(#logoGradient)"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />

                    {/* Lightning Bolt */}
                    <motion.path
                        d="M52 35 L62 35 L48 50 L58 50 L42 70 L48 50 L38 50 Z"
                        fill="#ffea00"
                        stroke="#ffea00"
                        strokeWidth="1"
                        strokeLinejoin="round"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
                    />
                </motion.svg>
            </div>
            <span className={`font-black tracking-tighter text-2xl uppercase ${isDark ? 'text-white' : 'text-slate-900'}`}>
                Letin <span className="font-light italic text-brand-accent">Solution</span>
            </span>
        </div>
    );
};

export default Logo;
