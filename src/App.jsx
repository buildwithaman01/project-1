import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle, Phone } from 'lucide-react';
import Preloader from './components/common/Preloader';
import Modal from './components/common/Modal';
import Lightbox from './components/common/Lightbox';
import Navbar from './components/navigation/Navbar';
import Footer from './components/navigation/Footer';
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import AcademicsSection from './sections/AcademicsSection';
import AdmissionsSection from './sections/AdmissionsSection';
import ContactSection from './sections/ContactSection';
import FeeStructure from './components/tables/FeeStructure';
import useParallax from './hooks/useParallax';

const App = () => {
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState('home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [showAdmissionForm, setShowAdmissionForm] = useState(false);
    const [showFeeModal, setShowFeeModal] = useState(false);
    const [showTourModal, setShowTourModal] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);
    const [contactFormSubmitted, setContactFormSubmitted] = useState(false);

    const parallaxOffset = useParallax();

    useEffect(() => {
        window.scrollTo(0, 0);
        setIsMobileMenuOpen(false);
        setShowAdmissionForm(false);
        setContactFormSubmitted(false);
    }, [currentPage]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            setShowScrollTop(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactSubmit = (e) => {
        e.preventDefault();
        setContactFormSubmitted(true);
    };

    if (loading) return <Preloader onFinish={() => setLoading(false)} />;

    return (
        <div className="min-h-screen font-sans text-slate-800 bg-white selection:bg-amber-200 selection:text-amber-900 relative">
            {/* Film Grain Effect */}
            <div className="fixed inset-0 opacity-[0.02] pointer-events-none z-[100]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")` }}></div>

            <Modal isOpen={showFeeModal} onClose={() => setShowFeeModal(false)} title="Fee Structure (2024-25)">
                <FeeStructure />
            </Modal>

            <Modal isOpen={showTourModal} onClose={() => setShowTourModal(false)} title="Virtual Campus Tour">
                <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
                    <p className="text-white/70">Video Placeholder</p>
                </div>
            </Modal>

            <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />

            {showScrollTop && (
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="fixed bottom-24 right-8 z-40 p-3 bg-white border border-slate-200 rounded-full shadow-lg text-slate-600 hover:text-blue-900 hover:border-blue-900 transition-all animate-fade-in-up active:scale-95"
                >
                    <ArrowUp size={20} />
                </button>
            )}

            <div className="fixed bottom-8 left-8 z-50 flex flex-col gap-4 animate-slide-in-left">
                <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noreferrer"
                    className="group w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg shadow-green-500/30 flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95"
                >
                    <MessageCircle size={30} />
                    <span className="absolute left-16 bg-slate-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Chat on WhatsApp
                    </span>
                </a>
            </div>

            <div className="fixed bottom-8 right-8 z-50 animate-slide-in-right">
                <a
                    href="tel:+919876543210"
                    className="group w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center text-white transition-all transform hover:scale-110 active:scale-95"
                >
                    <Phone size={28} />
                    <span className="absolute right-16 bg-slate-800 text-white text-xs py-1 px-3 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                        Call Admissions
                    </span>
                </a>
            </div>

            <Navbar
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isMobileMenuOpen={isMobileMenuOpen}
                setIsMobileMenuOpen={setIsMobileMenuOpen}
                scrolled={scrolled}
            />

            <main className="min-h-screen">
                {currentPage === 'home' && (
                    <HomeSection
                        setCurrentPage={setCurrentPage}
                        setShowTourModal={setShowTourModal}
                        setLightboxImage={setLightboxImage}
                        parallaxOffset={parallaxOffset}
                    />
                )}
                {currentPage === 'about' && <AboutSection setLightboxImage={setLightboxImage} />}
                {currentPage === 'academics' && <AcademicsSection />}
                {currentPage === 'admissions' && (
                    <AdmissionsSection
                        showAdmissionForm={showAdmissionForm}
                        setShowAdmissionForm={setShowAdmissionForm}
                        setShowFeeModal={setShowFeeModal}
                    />
                )}
                {currentPage === 'contact' && (
                    <ContactSection
                        handleContactSubmit={handleContactSubmit}
                        contactFormSubmitted={contactFormSubmitted}
                        setContactFormSubmitted={setContactFormSubmitted}
                    />
                )}
            </main>

            <Footer setCurrentPage={setCurrentPage} />
        </div>
    );
};

export default App;
