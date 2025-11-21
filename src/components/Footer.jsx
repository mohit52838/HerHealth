import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-pink-100 pt-16 pb-8">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <Link to="/" className="text-2xl font-extrabold text-brand-primary font-display tracking-tight flex items-center gap-2 mb-4">
                            <span className="text-3xl">🌸</span> HerHealth
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            Empowering women through knowledge. A safe, judgment-free space to learn about your body and health.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 font-display">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-slate-500">
                            <li><Link to="/chapters" className="hover:text-brand-primary transition-colors">Library</Link></li>
                            <li><Link to="/resources" className="hover:text-brand-primary transition-colors">Resources</Link></li>
                            <li><Link to="/about" className="hover:text-brand-primary transition-colors">About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-slate-900 mb-4 font-display">Disclaimer</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">
                            The content on this website is for informational purposes only and does not constitute medical advice. Always consult with a qualified healthcare provider for diagnosis and treatment.
                        </p>
                    </div>
                </div>

                <div className="border-t border-slate-100 pt-8 text-center">
                    <p className="text-xs text-slate-400">
                        &copy; {new Date().getFullYear()} HerHealth Platform. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
