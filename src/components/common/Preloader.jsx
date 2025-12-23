import React, { useState, useEffect } from 'react';

const Preloader = ({ onFinish }) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
            setTimeout(onFinish, 800);
        }, 2500);
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <div className={`fixed inset-0 z-[100] bg-slate-950 flex items-center justify-center transition-all duration-700 ease-in-out ${loading ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}`}>
            <div className="text-center relative">
                <div className="absolute inset-0 bg-amber-500/20 blur-3xl animate-pulse rounded-full"></div>
                <div className="relative w-28 h-28 border-2 border-slate-800 border-t-amber-500 rounded-full animate-spin mx-auto mb-6"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[70%] text-white font-serif font-bold text-4xl tracking-tighter">N</div>
                <h2 className="text-white font-serif text-lg tracking-[0.3em] uppercase animate-pulse mt-4">New Era</h2>
                <p className="text-slate-500 text-xs mt-2 font-medium tracking-widest">EST. 1995</p>
            </div>
        </div>
    );
};

export default Preloader;
