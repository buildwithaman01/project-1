import React from 'react';
import useCounter from '../../hooks/useCounter';

const AnimatedStat = ({ val, label, icon }) => {
    const num = parseInt(val.replace(/\D/g, '')) || 0;
    const suffix = val.replace(/[0-9]/g, '');
    const [ref, count] = useCounter(num, 2500);

    return (
        <div ref={ref} className="flex flex-col items-center justify-center text-center p-6 relative group hover:-translate-y-2 transition-transform duration-500">
            <div className="mb-6 p-4 bg-white/5 text-amber-400 rounded-2xl backdrop-blur-sm border border-white/10 shadow-lg group-hover:bg-white/10 transition-colors">
                {icon}
            </div>
            <div className="text-4xl md:text-6xl font-serif font-bold text-white mb-2 tabular-nums drop-shadow-lg bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {num > 0 ? count : val}{suffix}
            </div>
            <div className="text-xs font-bold text-blue-200 uppercase tracking-widest mt-2">{label}</div>
        </div>
    );
};

export default AnimatedStat;
