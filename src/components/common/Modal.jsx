import React from 'react';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-sm transition-opacity" onClick={onClose}></div>
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative z-10 animate-fade-in-up border border-white/10">
                <div className="sticky top-0 bg-white/95 backdrop-blur border-b border-slate-100 p-6 flex justify-between items-center z-20">
                    <h3 className="text-2xl font-serif font-bold text-slate-900">{title}</h3>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="p-6 md:p-10">{children}</div>
            </div>
        </div>
    );
};

export default Modal;
