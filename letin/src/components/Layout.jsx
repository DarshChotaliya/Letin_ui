import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';

const Layout = () => {
    const location = useLocation();


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div className="min-h-screen w-full bg-brand-light relative font-inter select-none">
            {/* Scroll Progress Bar */}


            {/* Global Visual Overlays */}
            <div className="fixed inset-0 bg-grid z-0 opacity-40 pointer-events-none" />
            <div className="fixed inset-0 bg-gradient-to-b from-brand-accent/[0.015] via-transparent to-brand-accent/[0.015] pointer-events-none z-0" />

            <Header />

            <main className="relative z-10 w-full">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
