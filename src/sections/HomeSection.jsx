import React from 'react';
import { ChevronRight, Play, Globe, Zap, ShieldCheck, Activity, Users, Palette, ArrowRight } from 'lucide-react';
import FadeInSection from '../components/common/FadeInSection';
import SectionHeading from '../components/common/SectionHeading';
import StatsBand from '../components/stats/StatsBand';
import CampusGallery from '../components/gallery/CampusGallery';
import TestimonialCard from '../components/cards/TestimonialCard';

const HomeSection = ({ setCurrentPage, setShowTourModal, setLightboxImage, parallaxOffset }) => (
    <>
        <section className="relative h-screen min-h-[850px] flex items-center overflow-hidden bg-slate-900">
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-60 scale-105"
                    style={{ transform: `scale(1.05) translateY(${parallaxOffset * 0.5}px)` }}
                >
                    <source src="https://assets.mixkit.co/videos/preview/mixkit-university-campus-students-walking-4560-large.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-blue-950/60 to-transparent"></div>
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 w-full pt-32 md:pt-40 pb-32 flex flex-col justify-center h-full">
                <div className="max-w-4xl" style={{ transform: `translateY(-${parallaxOffset * 0.2}px)` }}>
                    <FadeInSection>
                        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/10 text-amber-300 border border-white/10 backdrop-blur-md mb-8 shadow-xl">
                            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shadow-[0_0_10px_#f59e0b]"></span>
                            <span className="text-xs font-bold tracking-[0.15em] uppercase">Admissions Open 2024-25</span>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay="200ms">
                        <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-8 leading-[1.1] md:leading-[1] tracking-tight drop-shadow-2xl">
                            Tradition Meets <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-200 animate-gradient-x">
                                Innovation
                            </span>
                        </h1>
                    </FadeInSection>
                    <FadeInSection delay="400ms">
                        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl font-light leading-relaxed border-l-4 border-amber-500 pl-8 drop-shadow-md">
                            Cultivating intellect, character, and global perspective in a state-of-the-art environment designed for the leaders of tomorrow.
                        </p>
                    </FadeInSection>
                    <FadeInSection delay="600ms">
                        <div className="flex flex-col sm:flex-row gap-6">
                            <button
                                onClick={() => setCurrentPage('admissions')}
                                className="px-10 py-5 bg-amber-500 hover:bg-amber-400 text-blue-950 font-bold rounded-xl shadow-[0_0_40px_rgba(245,158,11,0.4)] transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-3 text-lg z-20"
                            >
                                Apply Now <ChevronRight size={22} />
                            </button>
                            <button
                                onClick={() => setShowTourModal(true)}
                                className="px-10 py-5 bg-white/5 border border-white/20 backdrop-blur-md text-white font-semibold rounded-xl hover:bg-white hover:text-blue-950 transition-all active:scale-95 flex items-center justify-center gap-3 text-lg z-20 group"
                            >
                                <Play size={20} fill="currentColor" className="group-hover:scale-110 transition-transform" /> Virtual Tour
                            </button>
                        </div>
                    </FadeInSection>
                </div>
            </div>
        </section>

        <FadeInSection delay="300ms"><StatsBand /></FadeInSection>

        <section className="py-24 bg-white overflow-hidden relative">
            <div className="absolute top-0 left-0 w-64 h-64 bg-amber-50 rounded-br-full -z-10 opacity-50"></div>
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <FadeInSection>
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 bg-blue-900/5 rounded-[2rem] transform rotate-3 transition-transform group-hover:rotate-6"></div>
                            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg" alt="Dr. APJ Abdul Kalam" className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-blue-950 to-transparent p-8 pt-20">
                                    <p className="text-white font-serif font-bold text-xl">Dr. A.P.J. Abdul Kalam</p>
                                    <p className="text-amber-400 text-sm uppercase tracking-widest font-bold">Our Guiding Light</p>
                                </div>
                            </div>
                        </div>
                    </FadeInSection>
                    <FadeInSection delay="200ms">
                        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-2 block">The Philosophy</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mb-8">"Learning gives creativity..."</h2>
                        <blockquote className="text-2xl text-slate-600 italic leading-relaxed mb-8 border-l-4 border-blue-900 pl-6">
                            "...creativity leads to thinking, thinking provides knowledge, and knowledge makes you great."
                        </blockquote>
                        <p className="text-slate-600 leading-relaxed text-lg mb-8">
                            New Era Public School is founded on the visionary principles of the Missile Man of India.
                        </p>
                        <button onClick={() => setCurrentPage('about')} className="text-blue-900 font-bold border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors flex items-center gap-2">
                            Read Our Full Vision <ArrowRight size={18} />
                        </button>
                    </FadeInSection>
                </div>
            </div>
        </section>

        <section className="py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4">
                <SectionHeading title="The New Era Advantage" subtitle="Why Parents Trust Us" />
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { i: <Globe className="w-10 h-10" />, t: "Global Curriculum", d: "International standards blended with core Indian values." },
                        { i: <Zap className="w-10 h-10" />, t: "Future Ready", d: "Coding, Robotics, and AI integration from Middle School." },
                        { i: <ShieldCheck className="w-10 h-10" />, t: "Safe Campus", d: "GPS-enabled transport and 24/7 CCTV surveillance." },
                        { i: <Activity className="w-10 h-10" />, t: "Holistic Health", d: "Mandatory sports, yoga, and mental wellness programs." },
                        { i: <Users className="w-10 h-10" />, t: "Expert Mentors", d: "Highly qualified faculty who act as mentors." },
                        { i: <Palette className="w-10 h-10" />, t: "Creative Arts", d: "State-of-the-art studios for music, dance, theatre." }
                    ].map((item, idx) => (
                        <FadeInSection key={idx} delay={`${idx * 100}ms`}>
                            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all border border-slate-100 group h-full hover:-translate-y-1">
                                <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-amber-400 transition-colors">
                                    {item.i}
                                </div>
                                <h3 className="text-xl font-serif font-bold text-slate-800 mb-3">{item.t}</h3>
                                <p className="text-slate-600 leading-relaxed text-sm">{item.d}</p>
                            </div>
                        </FadeInSection>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 bg-blue-900 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-end mb-12">
                    <div>
                        <span className="text-amber-400 font-bold uppercase tracking-widest text-sm mb-2 block">Beyond the Classroom</span>
                        <h2 className="text-4xl font-serif font-bold">Life at New Era</h2>
                    </div>
                    <button className="hidden md:flex items-center gap-2 border px-6 py-2 rounded-full hover:bg-white hover:text-blue-900 transition-all font-semibold active:scale-95">
                        View All <ArrowRight size={16} />
                    </button>
                </div>
                <CampusGallery setLightboxImage={setLightboxImage} />
            </div>
        </section>

        <section className="py-24 bg-amber-50 relative">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <SectionHeading title="Voices of Trust" subtitle="What Parents Say" align="center" />
                <div className="grid md:grid-cols-3 gap-8">
                    <FadeInSection delay="0ms">
                        <TestimonialCard
                            quote="The transformation in my son has been remarkable."
                            author="Mrs. Priya Sharma"
                            role="Parent"
                            image="https://randomuser.me/api/portraits/women/44.jpg"
                        />
                    </FadeInSection>
                    <FadeInSection delay="200ms">
                        <TestimonialCard
                            quote="New Era provides a perfect balance of academics and sports."
                            author="Mr. Rajesh Gupta"
                            role="Parent"
                            image="https://randomuser.me/api/portraits/men/32.jpg"
                        />
                    </FadeInSection>
                    <FadeInSection delay="400ms">
                        <TestimonialCard
                            quote="The safety protocols are top-notch. I feel completely at peace."
                            author="Mrs. Anita Desai"
                            role="Parent"
                            image="https://randomuser.me/api/portraits/women/68.jpg"
                        />
                    </FadeInSection>
                </div>
            </div>
        </section>
    </>
);

export default HomeSection;
