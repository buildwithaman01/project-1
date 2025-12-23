import React from 'react';
import FadeInSection from '../components/common/FadeInSection';
import SectionHeading from '../components/common/SectionHeading';
import DayTimeline from '../components/timeline/DayTimeline';

const AcademicsSection = () => (
    <div className="animate-fade-in">
        <div className="bg-slate-900 text-white pt-32 md:pt-48 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-950 to-slate-900 opacity-90"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">Academic Life</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Curriculum & Pedagogy</h1>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
                    A blend of academic rigour and creative freedom.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="mb-32">
                <SectionHeading title="A Day at New Era" subtitle="Student Life" align="center" />
                <DayTimeline />
            </div>

            <div className="space-y-24">
                {[
                    { t: "Primary Wing", g: "Grades 1-5", d: "Focus on foundational literacy and curiosity.", c: "amber" },
                    { t: "Middle School", g: "Grades 6-8", d: "Structured subject-based learning.", c: "blue" },
                    { t: "Senior School", g: "Grades 9-12", d: "Focus on academic rigour and career prep.", c: "emerald" }
                ].map((l, i) => (
                    <FadeInSection key={i}>
                        <div className={`flex flex-col md:flex-row ${i % 2 === 1 ? 'md:flex-row-reverse' : ''} gap-12 items-center`}>
                            <div className="flex-1">
                                <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">{l.t}</h2>
                                <p className="text-slate-600 text-lg leading-relaxed mb-8">{l.d}</p>
                            </div>
                            <div className="flex-1 h-64 bg-slate-200 rounded-2xl"></div>
                        </div>
                    </FadeInSection>
                ))}
            </div>
        </div>
    </div>
);

export default AcademicsSection;
