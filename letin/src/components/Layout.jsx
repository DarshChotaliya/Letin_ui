import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

const Layout = () => {
    const location = useLocation();
    const { scrollYProgress } = useScroll();

    // High-precision spring for scroll bar
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    useEffect(() => {
        // Initialize Lenis for buttery smooth scrolling
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            smoothTouch: false,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen w-full bg-[#02040a] relative font-inter select-none">
            {/* Ultra-smooth Scroll Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-brand-accent z-[9999] origin-left shadow-[0_0_10px_rgba(99,102,241,1)]"
                style={{ scaleX }}
            />

            {/* Global Visual Overlays */}
            <div className="fixed inset-0 bg-grid z-0 opacity-20 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-brand-accent/[0.03] via-transparent to-brand-accent/[0.03] pointer-events-none z-0" />

            <Header />

            <main className="relative z-10 w-full">
                <Outlet />
            </main>

            <Footer />
            <CookieConsent />
        </div>
    );
};

export default Layout;
