import React from 'react';
import { MapPin, Check, Send } from 'lucide-react';
import TransportChecker from '../components/forms/TransportChecker';

const ContactSection = ({ handleContactSubmit, contactFormSubmitted, setContactFormSubmitted }) => (
    <div className="animate-fade-in">
        <div className="bg-slate-900 text-white pt-32 md:pt-48 pb-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-900 opacity-90"></div>
            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <span className="text-amber-500 font-bold tracking-widest uppercase mb-4 block">Get in Touch</span>
                <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Contact Us</h1>
                <p className="text-xl text-blue-200 max-w-2xl mx-auto font-light leading-relaxed">
                    We are here to answer your questions and welcome you to our campus.
                </p>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 py-24">
            <div className="grid md:grid-cols-2 gap-16 items-start mb-16">
                <div className="space-y-8">
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex items-start gap-6 hover:shadow-md transition-all">
                        <div className="bg-amber-100 p-4 rounded-full text-amber-600">
                            <MapPin size={24} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-800 mb-2 font-serif">Our Campus</h3>
                            <p className="text-slate-600">
                                123 Knowledge Park, Education City<br />
                                Sector 45, State - 560001
                            </p>
                        </div>
                    </div>
                    <TransportChecker />
                </div>

                <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full"></div>
                    {contactFormSubmitted ? (
                        <div className="text-center py-12">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-6 mx-auto">
                                <Check size={40} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">Message Sent!</h3>
                            <button
                                onClick={() => setContactFormSubmitted(false)}
                                className="text-blue-600 font-bold hover:underline"
                            >
                                Send another
                            </button>
                        </div>
                    ) : (
                        <form className="space-y-6" onSubmit={handleContactSubmit}>
                            <h3 className="text-3xl font-serif font-bold text-slate-800 mb-8">Send a Message</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600">Name</label>
                                    <input
                                        required
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-slate-600">Email</label>
                                    <input
                                        required
                                        type="email"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500"
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-slate-600">Message</label>
                                <textarea
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:border-amber-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-blue-900 text-white font-bold rounded-lg hover:bg-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 active:scale-95 transform"
                            >
                                Submit Enquiry <Send size={18} />
                            </button>
                        </form>
                    )}
                </div>
            </div>

            <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.562083398717!2d77.38245631508216!3d28.61291298242553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a43173357b%3A0x37ffce30c87cc03f!2sNoida%2C%20Uttar%20Pradesh%2C%20India!5e0!3m2!1sen!2sus"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    className="rounded-xl"
                    title="School Location"
                ></iframe>
            </div>
        </div>
    </div>
);

export default ContactSection;
