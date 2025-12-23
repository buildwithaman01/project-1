import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialCard = ({ quote, author, role, image }) => (
    <div className="bg-white p-10 rounded-3xl shadow-xl border border-slate-100 flex flex-col h-full relative hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <Quote className="text-amber-100 w-16 h-16 absolute top-8 right-8 group-hover:text-amber-200 transition-colors duration-500" />
        <p className="text-slate-600 italic mb-8 relative z-10 leading-relaxed font-medium text-lg">"{quote}"</p>
        <div className="mt-auto flex items-center gap-5">
            <img src={image} alt={author} className="w-14 h-14 rounded-full object-cover border-2 border-amber-500 shadow-md" />
            <div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">{author}</h4>
                <p className="text-xs text-slate-500 uppercase tracking-wide font-bold">{role}</p>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
