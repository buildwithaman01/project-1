import React from 'react';
import { X } from 'lucide-react';

const Lightbox = ({ src, onClose }) => {
    if (!src) return null;

    return (
        <div className="fixed inset-0 z-[70] bg-black/95 flex items-center justify-center p-4 backdrop-blur-xl" onClick={onClose}>
            <button className="absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-colors">
                <X size={40} />
            </button>
            <img
                src={src}
                alt="Gallery Fullscreen"
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl animate-scale-up"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
};

export default Lightbox;
