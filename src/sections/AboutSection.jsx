import React from 'react';
import { Star, CheckCircle, Layout } from 'lucide-react';
import FadeInSection from '../components/common/FadeInSection';
import SectionHeading from '../components/common/SectionHeading';
import FacultyGrid from '../components/tables/FacultyGrid';
import CampusGallery from '../components/gallery/CampusGallery';

const AboutSection = ({ setLightboxImage }) => (
    <div className="animate-fade-in">
        <div className="bg-slate-900 text-white pt-32 md:pt-48 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-900 opacity-90"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">Our Legacy</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">About Us</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light leading-relaxed">
                    More than just a school, we are a community dedicated to excellence.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-20">
            <div className="grid md:grid-cols-2 gap-16 mb-24 items-center">
                <FadeInSection>
                    <h2 className="text-4xl font-serif font-bold text-slate-800 mb-6">30 Years of Excellence</h2>
                    <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                        Established in 1995, New Era Public School began with a humble mission: to provide world-class education accessible to all.
                    </p>
                    <div className="flex gap-4">
                        {[
                            { val: "1995", l: "Founded" },
                            { val: "20+", l: "Acres" },
                            { val: "10k+", l: "Alumni" }
                        ].map((s, i) => (
                            <div key={i} className="text-center p-4 bg-blue-50 rounded-lg">
                                <span className="block text-3xl font-bold text-blue-900">{s.val}</span>
                                <span className="text-xs uppercase font-bold text-slate-500">{s.l}</span>
                            </div>
                        ))}
                    </div>
                </FadeInSection>

                <FadeInSection delay="200ms">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                        <img
                            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                            alt="School Building"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </FadeInSection>
            </div>

            <div className="bg-slate-50 rounded-3xl p-8 md:p-16 border border-slate-200 mb-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex flex-col md:flex-row gap-12 items-center relative z-10">
                    <div className="w-48 h-48 md:w-64 md:h-64 shrink-0 rounded-full border-8 border-white shadow-xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                            className="w-full h-full object-cover"
                            alt="Principal"
                        />
                    </div>
                    <div>
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">Leadership</span>
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">From the Principal's Desk</h2>
                        <p className="text-slate-600 leading-relaxed mb-6 text-lg italic">
                            "Education is not merely about filling a pail, but the lighting of a fire."
                        </p>
                        <div>
                            <h4 className="font-bold text-xl text-slate-900">Dr. Sarah Mitchell</h4>
                            <p className="text-slate-500 uppercase tracking-wide text-sm">Principal</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mb-24">
                <SectionHeading title="Meet Our Faculty" subtitle="Mentors & Guides" align="center" />
                <FacultyGrid />
            </div>

            <div className="mb-24">
                <SectionHeading title="Our Campus" subtitle="A Glimpse Inside" align="center" />
                <CampusGallery setLightboxImage={setLightboxImage} />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-blue-900 text-white p-10 rounded-2xl">
                    <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <Star className="text-amber-400" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Vision</h3>
                    <p className="text-blue-100 leading-relaxed">
                        To be a center of excellence that nurtures the holistic development of every child.
                    </p>
                </div>

                <div className="bg-amber-500 text-blue-900 p-10 rounded-2xl">
                    <div className="bg-white/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                        <Layout className="text-blue-900" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-4">Our Mission</h3>
                    <ul className="space-y-2 font-medium">
                        <li className="flex items-center gap-2"><CheckCircle size={18} /> Foster critical thinking.</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} /> Instill moral values.</li>
                        <li className="flex items-center gap-2"><CheckCircle size={18} /> Inclusive learning.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;
