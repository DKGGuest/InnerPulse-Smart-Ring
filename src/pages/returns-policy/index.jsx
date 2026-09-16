import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const ReturnsPolicy = () => {
    const [openFaq, setOpenFaq] = useState(0);

    const policies = [
        {
            title: "30-Day Return Window",
            content: "You have 30 days from the date of delivery to initiate a return or exchange. We believe you need time to truly experience InnerPulse before deciding if it's right for you."
        },
        {
            title: "Condition Requirements",
            content: "To be eligible for a return, the ring must be in original, undamaged condition with no visible scratches, dents, or signs of misuse. It must include all original packaging, the charging dock, and the USB cable."
        },
        {
            title: "Data Privacy & Reset",
            content: "Before packing your ring, you must perform a Factory Reset via the InnerPulse app. This completely erases your personal wellness data from the device's internal memory to protect your privacy."
        },
        {
            title: "Wrong Size Exchanges",
            content: "Ring didn't fit perfectly? We offer one free size exchange within your first 30 days. We'll send you a prepaid label to return the original ring while we prepare your new size."
        }
    ];

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Premium Centered Hero Section */}
            <div className="bg-gradient-to-b from-surface to-primary-50 relative overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24 border-b border-border-light">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                
                {/* Decorative background elements */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute top-20 right-10 w-72 h-72 bg-secondary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-text-primary mb-6 tracking-tight leading-tight">
                        Returns & Warranty
                    </h1>
                    
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto font-body leading-relaxed mb-10">
                        We stand behind every InnerPulse ring we craft. If it’s not a perfect fit, or if something goes wrong, we've designed our policies to be as smooth as the ring itself.
                    </p>

                    <Link to="/contact-us" className="inline-flex items-center px-8 py-4 bg-primary text-white font-medium rounded-organic gentle-transition hover:bg-primary-600 shadow-gentle hover:shadow-md hover:-translate-y-0.5">
                        Start a Return <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Link>
                </div>
            </div>

            {/* Feature Highlights Row */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20 mb-20">
                <div className="bg-gradient-to-br from-white to-surface rounded-organic-lg shadow-md border border-primary-100 p-2 md:p-4 grid grid-cols-1 md:grid-cols-3 gap-2 divide-y md:divide-y-0 md:divide-x divide-primary-50">
                    <div className="flex flex-col items-center text-center p-6 hover:bg-surface gentle-transition rounded-organic">
                        <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center mb-4">
                            <Icon name="Calendar" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-text-primary mb-2">30-Day Returns</h3>
                        <p className="text-sm text-text-secondary">Full refund within 30 days.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 hover:bg-surface gentle-transition rounded-organic">
                        <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center mb-4">
                            <Icon name="Shield" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-text-primary mb-2">1-Year Warranty</h3>
                        <p className="text-sm text-text-secondary">Protected against defects.</p>
                    </div>
                    <div className="flex flex-col items-center text-center p-6 hover:bg-surface gentle-transition rounded-organic">
                        <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Icon name="Maximize" size={24} />
                        </div>
                        <h3 className="font-heading font-bold text-text-primary mb-2">Free Resizing</h3>
                        <p className="text-sm text-text-secondary">One free exchange.</p>
                    </div>
                </div>
            </div>

            {/* Interactive Policy & Refund Details Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="flex flex-col lg:flex-row gap-16">
                    
                    {/* Left: Interactive Accordion */}
                    <div className="flex-1">
                        <div className="mb-8">
                            <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">Return Policy</h2>
                            <p className="text-text-secondary">Everything you need to know about eligibility and conditions.</p>
                        </div>
                        
                        <div className="space-y-4">
                            {policies.map((policy, index) => (
                                <div 
                                    key={index} 
                                    className={`border border-border-light rounded-organic overflow-hidden gentle-transition ${openFaq === index ? 'bg-primary-50 shadow-sm border-primary-200' : 'bg-surface hover:border-primary-100'}`}
                                >
                                    <button
                                        onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                                        className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                                    >
                                        <h3 className={`font-heading font-semibold text-lg ${openFaq === index ? 'text-primary-900' : 'text-text-primary'}`}>
                                            {policy.title}
                                        </h3>
                                        <Icon 
                                            name={openFaq === index ? "Minus" : "Plus"} 
                                            size={20} 
                                            className={`flex-shrink-0 gentle-transition ${openFaq === index ? 'text-primary rotate-180' : 'text-text-secondary'}`}
                                        />
                                    </button>
                                    
                                    <div 
                                        className={`px-6 overflow-hidden gentle-transition duration-300 ${openFaq === index ? 'max-h-48 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                                    >
                                        <p className="text-text-secondary leading-relaxed">
                                            {policy.content}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Refund Details Card */}
                    <div className="lg:w-[400px] shrink-0">
                        <div className="bg-surface rounded-organic-lg shadow-soft-elevation-1 border border-border-light p-8 sticky top-24">
                            <div className="flex items-center space-x-4 mb-8">
                                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center shrink-0">
                                    <Icon name="CreditCard" size={24} />
                                </div>
                                <h2 className="text-2xl font-heading font-bold text-text-primary">Refund Process</h2>
                            </div>
                            
                            <div className="space-y-6 relative before:absolute before:top-0 before:bottom-0 before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border-light before:to-transparent z-0">
                                
                                <div className="relative flex items-start gap-4 z-10">
                                    <div className="w-10 h-10 bg-white border-2 border-primary-200 text-primary rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm">
                                        <span className="font-bold text-sm">1</span>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-text-primary mb-1">Transit Time</h4>
                                        <p className="text-sm text-text-secondary">Return shipping usually takes 3-5 days.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white border-2 border-primary-200 text-primary rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm">
                                        <span className="font-bold text-sm">2</span>
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-text-primary mb-1">Inspection</h4>
                                        <p className="text-sm text-text-secondary">We inspect your ring within 48 hours of receipt.</p>
                                    </div>
                                </div>

                                <div className="relative flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white border-2 border-green-200 text-green-600 rounded-full flex items-center justify-center shrink-0 z-10 shadow-sm">
                                        <Icon name="Check" size={16} />
                                    </div>
                                    <div className="pt-2">
                                        <h4 className="font-bold text-text-primary mb-1">Refund Issued</h4>
                                        <p className="text-sm text-text-secondary">Funds arrive in your bank in 5-7 business days.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Dedicated Full-Width Warranty Section */}
            <div className="bg-secondary-900 text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center mb-16">
                        <Icon name="Shield" size={48} className="text-secondary-300 mx-auto mb-6" />
                        <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">1-Year Limited Warranty</h2>
                        <p className="text-secondary-200 text-lg max-w-2xl mx-auto">
                            We build InnerPulse to last. If a hardware defect sneaks past our quality control, we will replace your ring completely free of charge.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-organic p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Icon name="CheckCircle" size={28} className="text-green-400" />
                                <h3 className="text-xl font-bold">What is Covered</h3>
                            </div>
                            <ul className="space-y-4 text-secondary-100">
                                <li className="flex items-start"><span className="mr-2 text-green-400">•</span> Internal sensor malfunctions</li>
                                <li className="flex items-start"><span className="mr-2 text-green-400">•</span> Battery charging or severe depletion issues</li>
                                <li className="flex items-start"><span className="mr-2 text-green-400">•</span> Bluetooth connectivity hardware failures</li>
                                <li className="flex items-start"><span className="mr-2 text-green-400">•</span> Structural integrity issues (not caused by drops)</li>
                            </ul>
                        </div>

                        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-organic p-8">
                            <div className="flex items-center space-x-3 mb-6">
                                <Icon name="XCircle" size={28} className="text-red-400" />
                                <h3 className="text-xl font-bold">What is Not Covered</h3>
                            </div>
                            <ul className="space-y-4 text-secondary-300">
                                <li className="flex items-start"><span className="mr-2 text-red-400">•</span> Accidental damage (drops, crushing, impact)</li>
                                <li className="flex items-start"><span className="mr-2 text-red-400">•</span> Cosmetic scratches or scuffs from daily wear</li>
                                <li className="flex items-start"><span className="mr-2 text-red-400">•</span> Loss or theft of the device</li>
                                <li className="flex items-start"><span className="mr-2 text-red-400">•</span> Damage from exposure to extreme chemicals</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Support Banner */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-8">
                <div className="bg-surface rounded-organic-lg shadow-soft-elevation-1 border border-border-light p-10 text-center">
                    <h3 className="text-2xl font-heading font-bold text-text-primary mb-3">Ready to contact us?</h3>
                    <p className="text-text-secondary mb-8">
                        Our support team is available Monday - Friday to assist you with any return or warranty claims.
                    </p>
                    <Link to="/contact-us" className="inline-flex items-center px-8 py-3 bg-primary text-white font-medium rounded-organic gentle-transition hover:bg-primary-600 shadow-sm hover:shadow-md">
                        Contact Support Team
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default ReturnsPolicy;
