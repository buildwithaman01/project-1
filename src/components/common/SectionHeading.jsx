import React from 'react';

const SectionHeading = ({ title, subtitle, align = "center", light = false }) => (
    <div className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}>
        <span className={`font-bold tracking-[0.2em] uppercase text-xs mb-4 block ${light ? "text-amber-400" : "text-amber-600"}`}>
            {subtitle}
        </span>
        <h2 className={`text-4xl md:text-6xl font-serif font-bold ${light ? "text-white" : "text-slate-900"} mb-6`}>
            {title}
        </h2>
        <div className={`h-1 w-20 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full ${align === "center" ? "mx-auto" : ""}`}></div>
    </div>
);

export default SectionHeading;
