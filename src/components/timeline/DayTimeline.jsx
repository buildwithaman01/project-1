import React from 'react';
import { Sun, BookOpen, Coffee, Zap, Activity } from 'lucide-react';

const DayTimeline = () => (
    <div className="py-12 relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2"></div>
        <div className="space-y-12">
            {[
                { time: "08:00 AM", title: "Assembly & Yoga", desc: "Starting the day with mindfulness and community.", icon: <Sun size={18} /> },
                { time: "09:30 AM", title: "Core Academics", desc: "Intensive learning blocks in Science & Math.", icon: <BookOpen size={18} /> },
                { time: "12:30 PM", title: "Nutritious Lunch", desc: "Organic, balanced meals for all students.", icon: <Coffee size={18} /> },
                { time: "02:00 PM", title: "STEM & Arts", desc: "Lab sessions, music practice, or coding.", icon: <Zap size={18} /> },
                { time: "03:30 PM", title: "Sports Hour", desc: "Team sports and physical training.", icon: <Activity size={18} /> },
            ].map((slot, i) => (
                <div key={i} className={`flex flex-col md:flex-row gap-8 items-center relative ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="flex-1 md:text-right pl-12 md:pl-0 md:pr-12">
                        {i % 2 !== 0 && (
                            <div className="hidden md:block">
                                <h4 className="text-xl font-bold text-slate-800">{slot.title}</h4>
                                <p className="text-slate-600 text-sm">{slot.desc}</p>
                            </div>
                        )}
                        <div className="md:hidden">
                            <span className="text-amber-600 font-bold text-xs">{slot.time}</span>
                            <h4 className="text-xl font-bold text-slate-800">{slot.title}</h4>
                            <p className="text-slate-600 text-sm">{slot.desc}</p>
                        </div>
                    </div>
                    <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-900 border-4 border-white shadow-md flex items-center justify-center text-white z-10">
                        {slot.icon}
                    </div>
                    <div className="flex-1 pl-12 md:pl-12">
                        {i % 2 === 0 && (
                            <div className="hidden md:block">
                                <h4 className="text-xl font-bold text-slate-800">{slot.title}</h4>
                                <p className="text-slate-600 text-sm">{slot.desc}</p>
                            </div>
                        )}
                        <span className={`hidden md:block text-amber-600 font-bold text-sm tracking-widest ${i % 2 === 0 ? '' : 'text-right'}`}>{slot.time}</span>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default DayTimeline;
