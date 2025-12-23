import React from 'react';

const CampusGallery = ({ setLightboxImage }) => (
    <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
        {[
            { span: "md:col-span-2 md:row-span-2", h: "h-[300px] md:h-full", title: "Academic Focus", img: "https://images.unsplash.com/photo-1577896334614-5e3715386e55?auto=format&fit=crop&w=800" },
            { span: "md:col-span-1 md:row-span-1", h: "h-[200px] md:h-full", title: "Athletics", img: "https://images.unsplash.com/photo-1541252260730-0412e8e2108e?auto=format&fit=crop&w=400" },
            { span: "md:col-span-1 md:row-span-1", h: "h-[200px] md:h-full", title: "Creative Arts", img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400" },
            { span: "md:col-span-2 md:row-span-1", h: "h-[200px] md:h-full", title: "Community Events", img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800" }
        ].map((item, i) => (
            <div
                key={i}
                className={`${item.span} relative rounded-3xl overflow-hidden group ${item.h} cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500`}
                onClick={() => setLightboxImage(item.img)}
            >
                <img
                    src={item.img}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={item.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                <div className="absolute bottom-8 left-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="text-amber-400 text-xs font-bold uppercase tracking-wider mb-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">Explore</div>
                    <div className="text-white font-serif font-bold text-2xl md:text-3xl">{item.title}</div>
                </div>
            </div>
        ))}
    </div>
);

export default CampusGallery;
