import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const TermsOfService = () => {
    const [activeSection, setActiveSection] = useState('acceptance');

    const sections = [
        { id: 'acceptance', title: '1. Acceptance of Terms' },
        { id: 'account', title: '2. User Accounts' },
        { id: 'device', title: '3. Device & App Usage' },
        { id: 'medical', title: '4. Medical Disclaimer' },
        { id: 'intellectual', title: '5. Intellectual Property' },
        { id: 'liability', title: '6. Limitation of Liability' },
        { id: 'changes', title: '7. Changes to Terms' }
    ];

    // Handle scroll spy
    useEffect(() => {
        const handleScroll = () => {
            const sectionElements = sections.map(s => document.getElementById(s.id));
            const scrollPosition = window.scrollY + 200; // Offset for header

            // Check if user has scrolled to the bottom of the page
            if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
                setActiveSection(sections[sections.length - 1].id);
                return;
            }

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element && element.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i].id);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="bg-gradient-to-br from-primary-900 to-secondary-900 pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                        Terms of Service
                    </h1>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col lg:flex-row gap-12">
                    
                    {/* Sidebar Navigation (Desktop) */}
                    <div className="hidden lg:block w-64 shrink-0">
                        <div className="sticky top-24 bg-surface rounded-organic shadow-soft-elevation-1 p-6 border border-border-light">
                            <h3 className="font-heading font-semibold text-text-primary mb-4 text-lg">Contents</h3>
                            <ul className="space-y-3">
                                {sections.map((section) => (
                                    <li key={section.id}>
                                        <button
                                            onClick={() => scrollToSection(section.id)}
                                            className={`text-left text-sm transition-colors duration-200 ${
                                                activeSection === section.id 
                                                ? 'text-primary font-medium' 
                                                : 'text-text-secondary hover:text-text-primary'
                                            }`}
                                        >
                                            {section.title}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 bg-surface rounded-organic-lg shadow-soft-elevation-1 p-8 lg:p-12 border border-border-light">
                        <div className="prose prose-lg max-w-none text-text-secondary">
                            
                            <p className="lead text-xl text-text-primary mb-8 font-medium">
                                Welcome to InnerPulse. By accessing our website, purchasing our smart ring, or using our mobile application, you agree to be bound by these Terms of Service.
                            </p>

                            <section id="acceptance" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    1. Acceptance of Terms
                                </h2>
                                <p className="mb-4">
                                    These Terms of Service ("Terms") constitute a legally binding agreement between you and InnerPulse Technologies Inc. ("we," "us," or "our"). Please read these Terms carefully before using our services. If you do not agree to these terms, you must not use our website, products, or services.
                                </p>
                            </section>

                            <section id="account" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    2. User Accounts
                                </h2>
                                <p className="mb-4">
                                    To access certain features of our app and ring, you must create an account. You agree to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Provide accurate, current, and complete information during registration.</li>
                                    <li>Maintain the security of your password and accept all risks of unauthorized access to your account.</li>
                                    <li>Immediately notify us if you discover or suspect any security breaches related to our services.</li>
                                </ul>
                            </section>

                            <section id="device" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    3. Device & App Usage
                                </h2>
                                <p className="mb-4">
                                    The InnerPulse Smart Ring and companion application are designed to help you track and manage your wellness. You agree not to:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Use the device for any illegal or unauthorized purpose.</li>
                                    <li>Reverse engineer, decompile, or disassemble any aspect of the ring or app.</li>
                                    <li>Interfere with or disrupt the integrity or performance of the services.</li>
                                </ul>
                            </section>

                            <section id="medical" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    4. Medical Disclaimer
                                </h2>
                                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-organic mb-6">
                                    <div className="flex items-start">
                                        <Icon name="ShieldAlert" size={24} className="text-amber-600 mr-3 shrink-0" />
                                        <div>
                                            <h3 className="font-heading font-bold text-amber-900 mb-2">Not Medical Advice</h3>
                                            <p className="text-amber-800 text-sm leading-relaxed">
                                                The InnerPulse Smart Ring is a general wellness device, not a medical device. Our services and data are not intended to diagnose, treat, cure, or prevent any disease. Always consult with a qualified healthcare professional regarding any medical condition or before making changes to your diet, sleep, or exercise routines.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="intellectual" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    5. Intellectual Property
                                </h2>
                                <p className="mb-4">
                                    All content, features, hardware designs, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by InnerPulse, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                                </p>
                            </section>

                            <section id="liability" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    6. Limitation of Liability
                                </h2>
                                <p className="mb-4 font-bold uppercase tracking-wider text-sm text-text-primary">
                                    To the fullest extent permitted by applicable law, in no event will InnerPulse be liable for any indirect, special, incidental, punitive, or consequential damages arising out of or related to these terms or your use of the services.
                                </p>
                            </section>

                            <section id="changes" className="mb-12 scroll-mt-24">
                                <h2 className="text-2xl font-heading font-semibold text-text-primary mb-4 pb-2 border-b border-border-light">
                                    7. Changes to Terms
                                </h2>
                                <p className="mb-4">
                                    We reserve the right to modify these terms at any time. We will notify you of any changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the services after any such changes constitutes your acceptance of the new Terms.
                                </p>
                            </section>
                            
                        </div>

                        {/* Contact CTA */}
                        <div className="mt-16 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-organic-lg border border-primary-100 text-center">
                            <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Have Questions?</h3>
                            <p className="text-text-secondary mb-6 max-w-md mx-auto">
                                If you have any questions about these Terms of Service, please don't hesitate to reach out to our legal team.
                            </p>
                            <Link to="/contact-us" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-organic gentle-transition hover:bg-primary-600 shadow-sm hover:shadow-md">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
