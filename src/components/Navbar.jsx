import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
    const location = useLocation();

    const getLinkClasses = (path) => {
        const active = location.pathname === path;
        const baseClass = "text-sm font-semibold transition-colors duration-300";
        return `${baseClass} ${active ? 'text-white' : 'text-white/70 hover:text-white'}`;
    };

    return (
        <header className="fixed top-0 left-0 w-full z-50 px-4 py-4 flex justify-center pointer-events-none">
            {/* The Floating Island - Solid Blue for visibility */}
            <nav
                className="pointer-events-auto flex items-center justify-between px-6 py-3 rounded-[3rem] transition-all duration-500 w-full max-w-5xl overflow-hidden bg-primary backdrop-blur-xl border border-blue-800 shadow-xl"
            >
                <Link to="/" className="text-xl font-heading font-bold text-white tracking-widest">
                    MTS
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link to="/" className={getLinkClasses('/')}>Home</Link>
                    <Link to="/about" className={getLinkClasses('/about')}>About</Link>
                    <Link to="/services" className={getLinkClasses('/services')}>Services</Link>
                    <Link to="/case-studies" className={getLinkClasses('/case-studies')}>Case Studies</Link>
                    <Link to="/contact" className={getLinkClasses('/contact')}>Contact</Link>
                </div>

                <Link
                    to="/contact"
                    className="magnetic-btn px-6 py-2.5 text-sm font-semibold text-primary bg-accent border-none rounded-[2rem] shadow-sm"
                >
                    <span className="relative z-10 text-white font-bold tracking-wide">Get Started</span>
                    <span className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-out z-0"></span>
                </Link>
            </nav>
        </header>
    );
}
