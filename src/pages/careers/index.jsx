import React from 'react';
import Icon from 'components/AppIcon';

const Careers = () => {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Unique Hero Section */}
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay pointer-events-none"></div>
                
                {/* Abstract Geometric Background */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none hidden lg:block">
                    <svg viewBox="0 0 100 100" className="w-full h-full fill-white" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 100,100 0,100" />
                    </svg>
                </div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 backdrop-blur-sm text-primary-100 rounded-full text-sm font-medium mb-6 border border-white/20">
                            <Icon name="Briefcase" size={16} />
                            <span>Careers at InnerPulse</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
                            Build the <br className="hidden md:block" /> future of wellness.
                        </h1>
                        <p className="text-primary-100 text-lg lg:text-xl font-body leading-relaxed mb-10">
                            We are a collective of engineers, designers, and health enthusiasts dedicated to making holistic wellness accessible, actionable, and beautiful.
                        </p>
                        <a href="#talent-pool" className="inline-flex items-center px-8 py-4 bg-white text-primary-900 font-bold rounded-organic gentle-transition hover:bg-primary-50 shadow-gentle hover:-translate-y-0.5">
                            View Openings <Icon name="ArrowDown" size={20} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>
            {/* The Mission / Intro Section */}
            <div className="bg-white py-20 border-b border-border-light">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <Icon name="Target" size={40} className="text-primary-500 mx-auto mb-6" />
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-text-primary mb-6 leading-tight">
                        We don't just build wearables. <br className="hidden md:block" /> We build a healthier future.
                    </h2>
                    <p className="text-text-secondary text-xl leading-relaxed max-w-3xl mx-auto">
                        At InnerPulse, our mission is to empower individuals with medical-grade insights in the most elegant form factor possible. We are looking for people who are obsessed with solving hard problems at the intersection of hardware, software, and human biology.
                    </p>
                </div>
            </div>

            {/* Core Values - Structured Grid */}
            <div className="bg-surface py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-text-primary mb-4">Our Core Values</h2>
                        <p className="text-text-secondary text-lg">The principles that guide how we build products and treat each other.</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="bg-white rounded-organic-lg p-10 border border-border-light shadow-soft-elevation-1 hover:shadow-soft-elevation-3 hover:-translate-y-1 gentle-transition group">
                            <div className="w-16 h-16 bg-primary-50 text-primary rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white gentle-transition">
                                <Icon name="Lightbulb" size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">Relentless Innovation</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We constantly push the boundaries of miniaturization, sensor technology, and data science to deliver insights that actually matter. We celebrate bold ideas and view failures as stepping stones.
                            </p>
                        </div>

                        {/* Value 2 */}
                        <div className="bg-white rounded-organic-lg p-10 border border-border-light shadow-soft-elevation-1 hover:shadow-soft-elevation-3 hover:-translate-y-1 gentle-transition group">
                            <div className="w-16 h-16 bg-secondary-50 text-secondary-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-secondary group-hover:text-white gentle-transition">
                                <Icon name="Heart" size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">Deep Empathy</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We design for humans, not robots. Every feature we build starts with understanding the real-world struggles of our users. Empathy drives our product roadmap.
                            </p>
                        </div>

                        {/* Value 3 */}
                        <div className="bg-white rounded-organic-lg p-10 border border-border-light shadow-soft-elevation-1 hover:shadow-soft-elevation-3 hover:-translate-y-1 gentle-transition group">
                            <div className="w-16 h-16 bg-green-50 text-green-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white gentle-transition">
                                <Icon name="Users" size={32} />
                            </div>
                            <h3 className="text-2xl font-heading font-bold text-text-primary mb-4">Radical Candor</h3>
                            <p className="text-text-secondary leading-relaxed">
                                We challenge directly and care personally. Open, honest communication is the bedrock of our high-performing team. We leave our egos at the door.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Immersive Dark Mode CTA */}
            <div id="talent-pool" className="bg-text-primary text-white py-32 relative overflow-hidden scroll-mt-24">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay pointer-events-none"></div>
                
                {/* Glowing background effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-primary-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-600 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
                </div>

                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <div className="inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-sm font-medium mb-8 text-primary-200 border border-white/20">
                        <Icon name="Star" size={16} />
                        <span>Exclusive Talent Pool</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-8 tracking-tight">
                        We're prepping for 2026.
                    </h2>
                    
                    <p className="text-gray-300 text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                        Our core team is currently fully staffed as we focus entirely on our highly anticipated 2026 launch. 
                        However, we are always on the lookout for truly exceptional talent. If you believe you belong here, don't wait for a job posting.
                    </p>
                    
                    <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-organic-lg p-8 md:p-12 max-w-2xl mx-auto shadow-2xl">
                        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Icon name="Mail" size={32} className="text-primary-300" />
                        </div>
                        <h3 className="text-2xl font-bold mb-2">Join the waitlist for the future.</h3>
                        <p className="text-gray-400 mb-6">Send your resume and a brief intro explaining why you'd be a perfect fit.</p>
                        
                        <a href="mailto:mdoffice@dkgrouplabs.com" className="inline-flex items-center px-8 py-4 bg-primary text-white font-bold rounded-organic gentle-transition hover:bg-primary-400 shadow-[0_0_20px_rgba(33,147,176,0.4)] hover:shadow-[0_0_30px_rgba(33,147,176,0.6)] hover:-translate-y-1 w-full sm:w-auto justify-center">
                            mdoffice@dkgrouplabs.com <Icon name="ArrowRight" size={20} className="ml-2" />
                        </a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Careers;
