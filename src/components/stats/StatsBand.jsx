import React from 'react';
import { Users, Award, GraduationCap, Clock } from 'lucide-react';
import AnimatedStat from './AnimatedStat';

const StatsBand = () => (
    <div className="relative z-20 -mt-20 md:-mt-32 mx-4 md:mx-auto max-w-7xl">
        <div className="bg-slate-900 rounded-3xl shadow-2xl border border-white/10 p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/10 backdrop-blur-3xl"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen"></div>

            {[
                { val: "1500+", label: "Future Leaders", icon: <Users className="w-8 h-8" /> },
                { val: "100%", label: "Board Pass Rate", icon: <Award className="w-8 h-8" /> },
                { val: "1:20", label: "Teacher Ratio", icon: <GraduationCap className="w-8 h-8" /> },
                { val: "30+", label: "Years of Trust", icon: <Clock className="w-8 h-8" /> }
            ].map((stat, idx) => (
                <React.Fragment key={idx}>
                    <AnimatedStat {...stat} />
                    {idx !== 3 && <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-24 bg-gradient-to-b from-transparent via-white/20 to-transparent"></div>}
                </React.Fragment>
            ))}
        </div>
    </div>
);

export default StatsBand;
