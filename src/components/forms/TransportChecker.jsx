import React, { useState } from 'react';
import { Bus } from 'lucide-react';

const TransportChecker = () => {
    const [query, setQuery] = useState("");
    const [result, setResult] = useState(null);

    const checkRoute = (e) => {
        e.preventDefault();
        setResult("Checking...");
        setTimeout(() => {
            const id = Math.ceil(Math.random() * 8);
            setResult(query.length > 2 ? `Service Available: Route No. ${id} covers ${query}.` : "Please enter a valid area name.");
        }, 800);
    };

    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-xl">
            <h3 className="text-xl font-serif font-bold text-slate-800 mb-4 flex items-center gap-3">
                <Bus className="text-amber-500" /> Transport Check
            </h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Enter your locality to check real-time bus availability and route details.
            </p>
            <form onSubmit={checkRoute} className="flex gap-3">
                <input
                    type="text"
                    placeholder="e.g. Sector 45"
                    className="flex-1 px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 text-sm transition-all"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors shadow-lg">
                    Check
                </button>
            </form>
            {result && (
                <div className={`mt-6 p-4 rounded-xl text-sm font-medium border-l-4 animate-fade-in ${result.includes("Available") ? "bg-green-50 text-green-800 border-green-500" : "bg-red-50 text-red-800 border-red-500"
                    }`}>
                    {result}
                </div>
            )}
        </div>
    );
};

export default TransportChecker;
