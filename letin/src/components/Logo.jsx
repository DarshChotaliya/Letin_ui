import React from 'react';
import { motion } from 'framer-motion';

const Logo = ({ className = "h-8", isDark = false }) => {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <div className="h-full aspect-square relative flex items-center justify-center">
                <motion.svg
                    viewBox="0 0 100 100"
                    className="h-full w-auto max-h-full max-w-full"
                    initial="initial"
                    animate="animate"
                >
                    <motion.path
                        d="M20 50 L50 20 L80 50 L50 80 Z"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="4"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 2, ease: "easeInOut" }}
                    />
                    <motion.path
                        d="M50 20 L50 80"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        animate={{ strokeDashoffset: [0, -20] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <motion.circle
                        cx="50"
                        cy="50"
                        r="8"
                        className="fill-brand-accent"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.svg>
            </div>
            <span className={`font-orbitron font-black text-2xl tracking-[0.2em] ${isDark ? 'text-white' : 'text-slate-800'}`}>
                LETIN
            </span>
        </div>
    );
};

export default Logo;
