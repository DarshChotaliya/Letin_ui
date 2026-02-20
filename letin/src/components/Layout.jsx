import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CookieConsent from '../components/CookieConsent';
import { motion, useScroll, useSpring } from 'framer-motion';
import Lenis from 'lenis';

const Layout = () => {
    const location = useLocation();


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
        <div className="min-h-screen w-full bg-[#02040a] relative font-instrument select-none">

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
