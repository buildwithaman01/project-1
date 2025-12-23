import React, { useState } from 'react';
import { Check, Loader, ArrowRight, Star } from 'lucide-react';

const AdmissionForm = ({ onCancel }) => {
    const [step, setStep] = useState(1);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => { setIsSubmitting(false); setIsSubmitted(true); }, 2000);
    };

    if (isSubmitted) {
        return (
            <div className="text-center animate-fade-in py-12">
                <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check size={48} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-serif font-bold text-slate-900 mb-4">Application Received!</h3>
                <p className="text-slate-600 mb-8 max-w-md mx-auto">
                    Thank you for applying. Reference: <span className="font-bold text-blue-900">#NEPS-2024-8921</span>.
                </p>
                <button onClick={onCancel} className="px-8 py-3 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-colors">
                    Return to Home
                </button>
            </div>
        );
    }

    return (
        <div className="animate-fade-in">
            <div className="w-full bg-slate-100 h-2 mb-8 rounded-full overflow-hidden">
                <div className="bg-amber-500 h-full transition-all duration-500 ease-out" style={{ width: step === 1 ? '33%' : step === 2 ? '66%' : '100%' }}></div>
            </div>
            <form onSubmit={step === 3 ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1); }}>
                {step === 1 && (
                    <div className="space-y-6 animate-slide-in-right">
                        <h4 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">Step 1: Student Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">First Name</label>
                                <input required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Last Name</label>
                                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Date of Birth</label>
                                <input required type="date" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Grade</label>
                                <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500">
                                    <option>Nursery</option>
                                    <option>Grade 1</option>
                                    <option>Grade 6</option>
                                    <option>Grade 11</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex justify-end pt-6">
                            <button type="submit" className="px-8 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                                Next Step <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
                {step === 2 && (
                    <div className="space-y-6 animate-slide-in-right">
                        <h4 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">Step 2: Parent Details</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Father's Name</label>
                                <input required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Email</label>
                                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Phone</label>
                                <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-amber-500 transition-all" />
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button type="button" onClick={() => setStep(1)} className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200">
                                Back
                            </button>
                            <button type="submit" className="px-8 py-3 bg-blue-900 text-white font-bold rounded-xl hover:bg-blue-800 transition-all flex items-center gap-2 shadow-lg">
                                Next Step <ArrowRight size={18} />
                            </button>
                        </div>
                    </div>
                )}
                {step === 3 && (
                    <div className="space-y-6 animate-slide-in-right">
                        <h4 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-4">Step 3: Submit</h4>
                        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
                            <p className="text-sm text-amber-800 flex items-start gap-3 font-medium">
                                <Star size={18} className="shrink-0 mt-0.5" /> Please review all details carefully before submitting.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <input type="checkbox" required className="mt-1 w-5 h-5 rounded text-blue-900 focus:ring-amber-500" />
                                <label className="text-sm text-slate-600">I declare that the information provided is true and correct.</label>
                            </div>
                        </div>
                        <div className="flex justify-between pt-6">
                            <button type="button" onClick={() => setStep(2)} className="px-6 py-3 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200">
                                Back
                            </button>
                            <button disabled={isSubmitting} type="submit" className="px-10 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-blue-900 font-bold rounded-xl hover:shadow-xl transition-all flex items-center gap-2 disabled:opacity-70 shadow-lg">
                                {isSubmitting ? <><Loader size={18} className="animate-spin" /> Processing...</> : 'Submit Application'}
                            </button>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
};

export default AdmissionForm;
