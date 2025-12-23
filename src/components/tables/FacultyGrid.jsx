import React from 'react';

const FacultyGrid = () => (
    <div className="grid md:grid-cols-4 gap-6">
        {[
            { n: "Mrs. Indu Sharma", r: "Vice Principal", i: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400" },
            { n: "Mr. R.K. Verma", r: "HOD Sciences", i: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400" },
            { n: "Ms. Sarah Jenkins", r: "Head of English", i: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400" },
            { n: "Mr. David Chin", r: "Sports Director", i: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400" }
        ].map((s, i) => (
            <div key={i} className="group text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden border-4 border-slate-100 shadow-lg group-hover:border-amber-500 transition-colors">
                    <img src={s.i} alt={s.n} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-lg">{s.n}</h4>
                <p className="text-sm text-slate-500 uppercase tracking-wide">{s.r}</p>
            </div>
        ))}
    </div>
);

export default FacultyGrid;
