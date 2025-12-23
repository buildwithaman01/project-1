import React from 'react';

const FeeStructure = () => (
    <div className="animate-fade-in overflow-x-auto">
        <table className="w-full text-sm text-left text-slate-600">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 border-b border-slate-200">
                <tr>
                    <th className="px-6 py-3">Grade</th>
                    <th className="px-6 py-3">Admission</th>
                    <th className="px-6 py-3">Annual</th>
                    <th className="px-6 py-3">Tuition (Qtr)</th>
                </tr>
            </thead>
            <tbody>
                {[
                    { g: "Nursery - KG", a: "₹ 25k", an: "₹ 15k", t: "₹ 12.5k" },
                    { g: "Grade 1 - 5", a: "₹ 30k", an: "₹ 18k", t: "₹ 14.5k" },
                    { g: "Grade 6 - 8", a: "₹ 35k", an: "₹ 20k", t: "₹ 16.5k" },
                    { g: "Grade 9 - 10", a: "₹ 40k", an: "₹ 22k", t: "₹ 18.5k" },
                    { g: "Grade 11-12", a: "₹ 45k", an: "₹ 25k", t: "₹ 22.5k" }
                ].map((r, i) => (
                    <tr key={i} className="border-b">
                        <td className="px-6 py-4 font-bold">{r.g}</td>
                        <td className="px-6 py-4">{r.a}</td>
                        <td className="px-6 py-4">{r.an}</td>
                        <td className="px-6 py-4 text-blue-900 font-bold">{r.t}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div className="mt-4 text-xs text-slate-500">* Fees subject to revision. Transport charged separately.</div>
    </div>
);

export default FeeStructure;
