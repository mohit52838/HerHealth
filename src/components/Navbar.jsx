import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    FiHome,
    FiBookOpen,
    FiPlayCircle,
    FiLayers,
    FiHeart,
    FiInfo
} from 'react-icons/fi';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/', icon: FiHome },
        { name: 'Chapters', path: '/chapters', icon: FiBookOpen },
        { name: 'Videos', path: '/videos', icon: FiPlayCircle },
        { name: 'Resources', path: '/resources', icon: FiLayers },
        { name: 'Find Doctors', path: '/find-doctors', icon: FiHeart },
        { name: 'About', path: '/about', icon: FiInfo },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav
            className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out
                ${isScrolled ? 'top-4 w-[95%] max-w-6xl' : 'top-0 w-full max-w-6xl'}
            `}
        >
            <div
                className={`
                    relative mx-auto px-6 transition-all duration-500 ease-in-out
                    ${isScrolled
                        ? 'h-16 rounded-xl bg-white/80 shadow-lg shadow-pink-300/50 border border-white/40'
                        : 'h-20 rounded-b-xl md:rounded-xl bg-white/60 shadow-lg shadow-pink-200/40 border border-white/40'
                    }
                    backdrop-blur-xl
                `}
            >
                {/* Soft Pink Gradient Glow */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-50/40 via-white/60 to-pink-50/40 pointer-events-none -z-10" />

                <div className="flex justify-between h-full items-center relative z-10">
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/" className="text-2xl font-extrabold text-brand-primary font-display tracking-tight flex items-center gap-2 hover:opacity-80 transition-opacity">
                            <span className="text-3xl filter drop-shadow-sm">🌸</span>
                            <span className="bg-gradient-to-r from-pink-600 to-rose-500 bg-clip-text text-transparent">
                                HerHealth
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-2 lg:space-x-4">
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            const active = isActive(link.path);
                            return (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`
                                        group relative px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2
                                        ${active ? 'text-brand-primary font-bold' : 'text-slate-600 hover:text-brand-primary'}
                                        hover:scale-[1.03]
                                    `}
                                >
                                    {/* Hover Background */}
                                    <span className={`absolute inset-0 rounded-xl bg-pink-50 transition-opacity duration-300 ${active ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />

                                    <Icon
                                        size={18}
                                        className={`relative z-10 transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-60 group-hover:opacity-100'}`}
                                    />
                                    <span className="relative z-10">{link.name}</span>

                                    {active && (
                                        <motion.div
                                            layoutId="navbar-indicator"
                                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-primary rounded-full mx-3"
                                            initial={false}
                                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-xl text-gray-500 hover:text-brand-primary hover:bg-pink-50 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 right-0 mt-2 mx-auto w-full md:hidden"
                    >
                        <div className="bg-white/90 backdrop-blur-xl border border-white/40 shadow-lg shadow-pink-200/40 rounded-xl overflow-hidden mx-4">
                            <div className="px-4 pt-2 pb-4 space-y-2">
                                {navLinks.map((link) => {
                                    const Icon = link.icon;
                                    const active = isActive(link.path);
                                    return (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`
                                                flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors
                                                ${active
                                                    ? 'text-brand-primary bg-pink-50'
                                                    : 'text-slate-600 hover:text-brand-primary hover:bg-pink-50'
                                                }
                                            `}
                                        >
                                            <Icon
                                                size={20}
                                                className={`transition-opacity duration-300 ${active ? 'opacity-100' : 'opacity-60'}`}
                                            />
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;