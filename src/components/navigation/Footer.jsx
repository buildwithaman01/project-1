import React from 'react';
import { Globe, ChevronRight } from 'lucide-react';

const Footer = ({ setCurrentPage }) => {
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About Us', id: 'about' },
        { label: 'Academics', id: 'academics' },
        { label: 'Admissions', id: 'admissions' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <footer className="bg-slate-950 text-slate-400 py-20 border-t border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-3 mb-6 text-white">
                            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center font-bold text-xl border border-amber-500">
                                N
                            </div>
                            <span className="font-serif font-bold text-xl tracking-wide">NEW ERA PUBLIC SCHOOL</span>
                        </div>
                        <p className="max-w-sm text-slate-400 leading-relaxed mb-8">
                            Empowering students with knowledge, character, and integrity since 1995.
                        </p>
                        <div className="flex gap-4">
                            {[1, 2, 3, 4].map(i => (
                                <div
                                    key={i}
                                    className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center hover:bg-amber-500 hover:text-blue-900 transition-all cursor-pointer transform hover:-translate-y-1"
                                >
                                    <Globe size={18} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
                        <ul className="space-y-3 text-sm">
                            {navItems.map(item => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => setCurrentPage(item.id)}
                                        className="hover:text-amber-500 transition-colors flex items-center gap-2"
                                    >
                                        <ChevronRight size={12} /> {item.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
                        <p className="text-xs mb-4">Subscribe to our newsletter for the latest news and admission updates.</p>
                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-2">
                            <input
                                type="email"
                                placeholder="Your Email Address"
                                className="px-4 py-2 bg-slate-900 border border-slate-800 rounded text-white text-sm focus:outline-none focus:border-amber-500"
                            />
                            <button className="bg-amber-500 text-blue-900 font-bold py-2 rounded hover:bg-amber-400 transition-colors text-sm">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                    <p>&copy; 2024 New Era Public School. All rights reserved.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-slate-400">Privacy Policy</a>
                        <a href="#" className="hover:text-slate-400">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
