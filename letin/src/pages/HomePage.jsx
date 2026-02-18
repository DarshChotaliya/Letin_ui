import React from 'react';
import Hero from '../components/Hero';
import LogoSlider from '../components/Sections/LogoSlider';
import Services from '../components/Sections/Services';
import WhyChooseUs from '../components/Sections/WhyChooseUs';
import Process from '../components/Sections/Process';
import Portfolio from '../components/Sections/Portfolio';
import Testimonials from '../components/Sections/Testimonials';

const HomePage = () => {
    return (
        <div className="bg-gradient-animate text-slate-900 w-full relative">
            <Hero />

            {/* Social Proof Strip */}
            <div className="relative z-10 border-b border-slate-100">
                <LogoSlider />
            </div>

            {/* Value Proposition */}
            <WhyChooseUs />

            {/* Core Offerings */}
            <Services />

            {/* Methodology */}
            <Process />

            {/* Recent Work */}
            <Portfolio />

            {/* Client Success */}
            <Testimonials />

        </div>
    );
};

export default HomePage;
