import React, { useState } from 'react';
import { ChevronDown, ChevronUp, PenTool, FileText, Download } from 'lucide-react';
import FadeInSection from '../components/common/FadeInSection';
import AdmissionForm from '../components/forms/AdmissionForm';

const AdmissionsSection = ({ showAdmissionForm, setShowAdmissionForm, setShowFeeModal }) => {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <div className="animate-fade-in">
            <div className="relative pt-32 md:pt-48 pb-24 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                        className="w-full h-full object-cover"
                        alt="Admissions"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-amber-900/20"></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <FadeInSection>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 backdrop-blur-md mb-6">
                            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
                            <span className="text-xs font-bold tracking-widest uppercase">Enrollment 2024-25</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500">Family</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-blue-100 max-w-2xl font-light leading-relaxed mb-10 border-l-4 border-amber-500 pl-6">
                            A transparent, seamless journey to your child's future.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={() => setShowAdmissionForm(true)}
                                className="px-8 py-4 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold rounded-lg shadow-lg flex items-center justify-center gap-2"
                            >
                                <PenTool size={20} /> Start Application
                            </button>
                            <button
                                onClick={() => setShowFeeModal(true)}
                                className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 flex items-center justify-center gap-2 backdrop-blur-sm"
                            >
                                <FileText size={20} /> View Fees
                            </button>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-24">
                {showAdmissionForm ? (
                    <AdmissionForm onCancel={() => setShowAdmissionForm(false)} />
                ) : (
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <div className="mb-20">
                                <h2 className="text-3xl font-serif font-bold text-blue-900 mb-10">The Process</h2>
                                <div className="space-y-8">
                                    {[
                                        { t: "Registration", d: "Online form" },
                                        { t: "Interaction", d: "Grade-appropriate assessment" },
                                        { t: "Fee Payment", d: "Secure seat" }
                                    ].map((s, i) => (
                                        <div key={i} className="flex gap-4">
                                            <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold">
                                                {i + 1}
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-lg">{s.t}</h3>
                                                <p className="text-slate-600">{s.d}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h2 className="text-3xl font-serif font-bold text-blue-900 mb-8">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {[
                                        { q: "Nursery Criteria?", a: "3+ Years as of March 31st." },
                                        { q: "Transport?", a: "Available within 25km radius." }
                                    ].map((f, i) => (
                                        <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 overflow-hidden">
                                            <button
                                                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                                className="w-full flex justify-between p-6 hover:bg-slate-100"
                                            >
                                                <h4 className="font-bold text-slate-800">{f.q}</h4>
                                                {openFaq === i ? <ChevronUp /> : <ChevronDown />}
                                            </button>
                                            {openFaq === i && (
                                                <div className="px-6 pb-6 text-slate-600 text-sm">{f.a}</div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 sticky top-28 h-fit">
                            <h3 className="text-xl font-serif font-bold text-blue-900 mb-8 border-b border-slate-100 pb-4">Downloads</h3>
                            <div className="space-y-4">
                                <button
                                    onClick={() => setShowFeeModal(true)}
                                    className="w-full flex items-center justify-between p-4 bg-blue-50 border border-blue-100 rounded-lg text-sm font-semibold text-blue-900 hover:bg-blue-900 hover:text-white transition-all group"
                                >
                                    View Fee Structure <FileText size={16} />
                                </button>
                                <button className="w-full flex items-center justify-between p-4 bg-slate-50 rounded-lg text-sm font-semibold text-slate-700 hover:bg-blue-900 hover:text-white transition-all group">
                                    Transport Routes <Download size={16} />
                                </button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-slate-100 bg-blue-50 -mx-8 -mb-8 p-8 rounded-b-2xl">
                                <h4 className="font-bold text-blue-900 mb-2">Admissions Office</h4>
                                <p className="text-sm text-slate-600 mb-4">Mon-Sat: 9:00 AM - 4:00 PM</p>
                                <button
                                    onClick={() => setShowAdmissionForm(true)}
                                    className="w-full py-3 bg-amber-500 text-blue-900 font-bold rounded shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 active:scale-95 transform"
                                >
                                    <PenTool size={18} /> Apply Online
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdmissionsSection;
