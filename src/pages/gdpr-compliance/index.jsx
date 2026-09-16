import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const GdprCompliance = () => {
    const lastUpdated = "September 16, 2026";

    const userRights = [
        {
            icon: 'Eye',
            title: 'Right to Access',
            description: 'Request a copy of all the personal and health data we hold about you.',
            color: 'text-blue-500',
            bg: 'bg-blue-50'
        },
        {
            icon: 'Edit2',
            title: 'Right to Rectification',
            description: 'Ask us to correct inaccurate or incomplete biometric or profile data.',
            color: 'text-emerald-500',
            bg: 'bg-emerald-50'
        },
        {
            icon: 'Trash2',
            title: 'Right to Erasure',
            description: 'Request the permanent deletion of your account and all associated data ("Right to be Forgotten").',
            color: 'text-rose-500',
            bg: 'bg-rose-50'
        },
        {
            icon: 'PauseCircle',
            title: 'Right to Restrict',
            description: 'Temporarily pause the processing of your data without deleting your account.',
            color: 'text-amber-500',
            bg: 'bg-amber-50'
        },
        {
            icon: 'Download',
            title: 'Right to Portability',
            description: 'Download your data in a readable format (e.g., CSV) to use elsewhere.',
            color: 'text-indigo-500',
            bg: 'bg-indigo-50'
        },
        {
            icon: 'XCircle',
            title: 'Right to Object',
            description: 'Object to your data being used for direct marketing or profiling purposes.',
            color: 'text-purple-500',
            bg: 'bg-purple-50'
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Premium Hero Section */}
            <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-900">
                {/* Abstract Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-blue-500/10 blur-3xl mix-blend-screen" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-3xl mix-blend-screen" />
                    <div className="absolute top-[30%] left-[20%] w-[40%] h-[40%] rounded-full bg-cyan-500/10 blur-3xl mix-blend-screen" />
                </div>

                <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-1.5 mb-8">
                        <Icon name="ShieldCheck" size={16} className="text-blue-300" />
                        <span className="text-blue-100 text-sm font-medium tracking-wide uppercase">Privacy & Compliance</span>
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                        GDPR Compliance
                    </h1>
                    <p className="text-lg lg:text-xl text-slate-300 font-body max-w-2xl mx-auto mb-8">
                        InnerPulse is fully committed to the security, privacy, and integrity of your sensitive health data under the General Data Protection Regulation.
                    </p>
                    <p className="text-slate-400 font-body text-sm">
                        Last Updated: {lastUpdated}
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                
                {/* 1. Legal Basis */}
                <div className="mb-20">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                            <Icon name="Scale" size={24} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-text-primary">
                            Legal Basis for Processing
                        </h2>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-surface rounded-2xl p-8 border border-border-light hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mb-4">
                                <Icon name="CheckSquare" size={20} className="text-emerald-600" />
                            </div>
                            <h3 className="font-heading font-bold text-lg mb-3">Explicit Consent</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We only collect your health and biometric data after receiving your explicit, opt-in consent within the InnerPulse application.
                            </p>
                        </div>
                        <div className="bg-surface rounded-2xl p-8 border border-border-light hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                                <Icon name="FileText" size={20} className="text-blue-600" />
                            </div>
                            <h3 className="font-heading font-bold text-lg mb-3">Contractual Necessity</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                Processing your data is strictly necessary to provide the core services of the Smart Ring, such as delivering emotional insights.
                            </p>
                        </div>
                        <div className="bg-surface rounded-2xl p-8 border border-border-light hover:border-primary/30 transition-colors duration-300 shadow-sm hover:shadow-md">
                            <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                                <Icon name="TrendingUp" size={20} className="text-amber-600" />
                            </div>
                            <h3 className="font-heading font-bold text-lg mb-3">Legitimate Interest</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                We may use completely anonymized, aggregated data to improve our algorithms and future wellness product offerings.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 2. Your Rights */}
                <div className="mb-20">
                    <div className="flex items-center space-x-4 mb-8">
                        <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                            <Icon name="UserCheck" size={24} className="text-primary" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-text-primary">
                            Your Fundamental Rights
                        </h2>
                    </div>
                    <p className="text-text-secondary text-lg mb-8 max-w-3xl">
                        Under the GDPR, you have complete sovereignty over your personal data. We have built tools directly into our platform to help you exercise these rights easily.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {userRights.map((right, index) => (
                            <div key={index} className="group bg-white rounded-2xl p-6 border border-border-light shadow-sm hover:shadow-soft-elevation-2 transition-all duration-300">
                                <div className={`w-12 h-12 rounded-xl ${right.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <Icon name={right.icon} size={24} className={right.color} />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
                                    {right.title}
                                </h3>
                                <p className="text-sm text-text-secondary">
                                    {right.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    
                    <div className="mt-8 bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <div className="flex -space-x-2">
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center shadow-sm">
                                <Icon name="Info" size={18} className="text-slate-600" />
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center shadow-sm">
                                <Icon name="Cpu" size={18} className="text-slate-600" />
                            </div>
                        </div>
                        <div>
                            <p className="text-sm text-slate-700 m-0">
                                <strong>Additional Protections:</strong> You also have the right to be fully informed about data usage, and protections against automated algorithms making decisions that significantly affect you.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3. International Transfers */}
                <div className="mb-20">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
                        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                            <div className="max-w-2xl">
                                <h2 className="text-2xl font-heading font-bold text-white mb-4 flex items-center">
                                    <Icon name="Globe" size={24} className="text-blue-400 mr-3" />
                                    International Data Transfers
                                </h2>
                                <p className="text-slate-300 text-lg leading-relaxed">
                                    If you are located in the European Economic Area (EEA), your data may be transferred to and processed in countries outside of the EEA (e.g., the United States). 
                                </p>
                                <p className="text-slate-400 mt-4">
                                    When we transfer your data internationally, we ensure it is protected by implementing rigorous safeguards such as <strong className="text-white">Standard Contractual Clauses</strong> approved by the European Commission.
                                </p>
                            </div>
                            <div className="hidden lg:block w-32 h-32 opacity-20">
                                <Icon name="Shield" size={128} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 4. Exercise Rights CTA */}
                <div>
                    <div className="bg-primary-50 rounded-3xl p-8 lg:p-12 border border-primary-100 text-center">
                        <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Icon name="MessageSquare" size={32} className="text-primary-700" />
                        </div>
                        <h2 className="text-3xl font-heading font-bold text-primary-900 mb-4">
                            Ready to exercise your rights?
                        </h2>
                        <p className="text-primary-800/80 text-lg max-w-2xl mx-auto mb-8">
                            To exercise any of your GDPR rights (such as requesting a data export or account deletion), please reach out to our dedicated Data Protection Officer (DPO).
                        </p>
                        <a 
                            href="mailto:mdoffice@dkgrouplabs.com" 
                            className="inline-flex items-center space-x-3 bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-primary-600 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            <Icon name="Mail" size={20} />
                            <span>mdoffice@dkgrouplabs.com</span>
                        </a>
                        <p className="text-sm text-primary-700/60 mt-6">
                            We are legally required and fully committed to responding to your request within 30 days.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GdprCompliance;
