import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-pink-50 via-white to-white py-20 lg:py-32 overflow-hidden">
                <div className="max-w-6xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-left"
                        >
                            <span className="inline-block py-1.5 px-4 rounded-full bg-white border border-pink-100 text-brand-primary text-xs font-bold mb-8 tracking-widest shadow-sm uppercase">
                                Women's Health Awareness
                            </span>
                            <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1] font-display">
                                Know Your Body.<br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-purple-400">Own Your Health.</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg font-medium">
                                A comprehensive, judgment-free guide to menstrual health, reproductive wellness, and holistic self-care. Backed by science, designed for you.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    to="/chapters"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-brand-primary hover:bg-pink-700 shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-1"
                                >
                                    Start Reading
                                </Link>
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-bold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm"
                                >
                                    Our Mission
                                </Link>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative hidden md:block perspective-1000"
                        >
                            {/* Abstract Illustration Placeholder */}
                            <div className="aspect-square rounded-full bg-gradient-to-tr from-pink-200 to-purple-100 opacity-60 blur-3xl absolute inset-0 animate-pulse"></div>
                            <img
                                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Women's Health Illustration"
                                className="relative rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-all duration-700 object-cover h-[500px] w-full border-4 border-white"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-24 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-20">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4 font-display">Why HerHealth?</h2>
                        <p className="text-slate-500 max-w-2xl mx-auto text-lg">We break down complex medical topics into easy-to-understand chapters.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { icon: "📚", title: "Structured Learning", desc: "19 progressive chapters covering the entire spectrum of women's health." },
                            { icon: "🔬", title: "Medically Verified", desc: "Content backed by authoritative sources like WHO, NHS, and CDC." },
                            { icon: "💝", title: "Holistic Approach", desc: "Focusing on physical, mental, and emotional well-being." }
                        ].map((feature, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-slate-50 hover:bg-pink-50/50 transition-all duration-300 border border-transparent hover:border-pink-100 hover:shadow-lg group"
                            >
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{feature.title}</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
