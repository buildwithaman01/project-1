import React from 'react';
import { Menu, X, ChevronRight } from 'lucide-react';

const Navbar = ({
    currentPage,
    setCurrentPage,
    isMobileMenuOpen,
    setIsMobileMenuOpen,
    scrolled
}) => {
    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About Us', id: 'about' },
        { label: 'Academics', id: 'academics' },
        { label: 'Admissions', id: 'admissions' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-900 to-blue-800 rounded-lg shadow-lg flex items-center justify-center text-white font-serif font-bold text-2xl group-hover:scale-105 transition-transform border-2 border-amber-500">
                            N
                        </div>
                        <div className="flex flex-col">
                            <span className={`font-serif font-bold text-xl leading-tight tracking-wide transition-colors ${scrolled || currentPage !== 'home' ? 'text-blue-900' : 'text-white'}`}>
                                NEW ERA
                            </span>
                            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-colors ${scrolled || currentPage !== 'home' ? 'text-slate-500' : 'text-blue-200'}`}>
                                Public School
                            </span>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setCurrentPage(item.id)}
                                className={`px-4 py-2 text-sm font-medium transition-all rounded-full hover:bg-white/10 active:scale-95 ${currentPage === item.id
                                        ? 'text-amber-500 font-bold'
                                        : (scrolled || currentPage !== 'home' ? 'text-slate-600 hover:text-blue-900 hover:bg-blue-50' : 'text-white hover:text-amber-300')
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage('admissions')}
                            className={`ml-6 px-6 py-2.5 text-sm font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95 ${scrolled || currentPage !== 'home'
                                    ? 'bg-blue-900 text-white hover:bg-blue-800'
                                    : 'bg-amber-500 text-blue-900 hover:bg-amber-400'
                                }`}
                        >
                            Apply Now
                        </button>
                    </div>

                    <button
                        className={`md:hidden p-2 rounded ${scrolled || currentPage !== 'home' ? 'text-slate-800' : 'text-white'}`}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 shadow-2xl absolute w-full h-screen animate-fade-in top-full left-0 z-50">
                    <div className="px-6 pt-8 space-y-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => { setCurrentPage(item.id); setIsMobileMenuOpen(false); }}
                                className={`block w-full text-left py-4 text-lg font-bold border-b border-slate-100 ${currentPage === item.id ? 'text-blue-900' : 'text-slate-600'
                                    }`}
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
