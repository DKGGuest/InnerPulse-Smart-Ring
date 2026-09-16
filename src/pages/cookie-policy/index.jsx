import React from 'react';
import Icon from 'components/AppIcon';

const CookiePolicy = () => {
    const lastUpdated = "September 15, 2026";

    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Hero Section - Matching Careers Structure, Different Color */}
            <div className="bg-gradient-to-br from-gray-900 via-slate-800 to-zinc-900 pt-32 pb-24 lg:pt-40 lg:pb-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
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
                            <Icon name="Calendar" size={16} />
                            <span>Last Updated: {lastUpdated}</span>
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-heading font-bold text-white mb-8 tracking-tight leading-tight">
                            Cookie Policy
                        </h1>
                        <p className="text-primary-100 text-lg lg:text-xl font-body leading-relaxed">
                            Transparency is built into our core. Discover exactly how we use tracking technologies to improve your InnerPulse experience, and learn how to maintain total control over your data.
                        </p>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                {/* Introduction */}
                <div className="bg-white rounded-organic-lg p-8 md:p-10 border border-border-light shadow-soft-elevation-1 mb-16">
                    <div className="flex items-start">
                        <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center shrink-0 mr-6">
                            <Icon name="Info" size={24} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-heading font-bold text-text-primary mb-4">What is a cookie?</h2>
                            <p className="text-text-secondary leading-relaxed mb-4">
                                A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size, and other display preferences) over a period of time, so you don't have to keep re-entering them whenever you come back to the site or browse from one page to another.
                            </p>
                            <p className="text-text-secondary leading-relaxed">
                                We use both <strong>session cookies</strong> (which expire once you close your web browser) and <strong>persistent cookies</strong> (which stay on your device for a set period of time or until you delete them).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Cookie Categories Grid */}
                <h2 className="text-3xl font-heading font-bold text-text-primary mb-8">How We Use Cookies</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    
                    {/* Strictly Necessary */}
                    <div className="bg-surface rounded-organic-lg p-8 border border-border-light hover:border-primary-200 gentle-transition shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center mb-6">
                            <Icon name="Lock" size={24} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-primary mb-3">Strictly Necessary</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            These cookies are essential for you to browse the website and use its features, such as accessing secure areas. The site cannot function properly without these.
                        </p>
                        <div className="inline-flex items-center text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            Always Active
                        </div>
                    </div>

                    {/* Performance / Analytics */}
                    <div className="bg-surface rounded-organic-lg p-8 border border-border-light hover:border-secondary-200 gentle-transition shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center mb-6">
                            <Icon name="BarChart2" size={24} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-primary mb-3">Performance & Analytics</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            These cookies collect information about how you use our website, like which pages you visited and which links you clicked on. None of this information can be used to identify you.
                        </p>
                        <div className="inline-flex items-center text-xs font-medium text-secondary-600 bg-secondary-50 px-2 py-1 rounded">
                            Optional
                        </div>
                    </div>

                    {/* Functional */}
                    <div className="bg-surface rounded-organic-lg p-8 border border-border-light hover:border-primary-200 gentle-transition shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 bg-primary-50 text-primary rounded-full flex items-center justify-center mb-6">
                            <Icon name="Settings" size={24} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-primary mb-3">Functional</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            These cookies allow our website to remember choices you make (such as your user name, language, or the region you are in) and provide enhanced, more personal features.
                        </p>
                        <div className="inline-flex items-center text-xs font-medium text-primary bg-primary-50 px-2 py-1 rounded">
                            Optional
                        </div>
                    </div>

                    {/* Targeting / Advertising */}
                    <div className="bg-surface rounded-organic-lg p-8 border border-border-light hover:border-amber-200 gentle-transition shadow-sm hover:shadow-md">
                        <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mb-6">
                            <Icon name="Target" size={24} />
                        </div>
                        <h3 className="text-xl font-heading font-bold text-text-primary mb-3">Targeting & Advertising</h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4">
                            These cookies are used to deliver advertisements more relevant to you and your interests. They are also used to limit the number of times you see an advertisement.
                        </p>
                        <div className="inline-flex items-center text-xs font-medium text-amber-700 bg-amber-50 px-2 py-1 rounded">
                            Optional
                        </div>
                    </div>
                </div>

                {/* How to manage */}
                <div className="prose prose-lg max-w-none text-text-secondary">
                    <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">How to Manage Cookies</h2>
                    <p>
                        You can set your browser not to accept cookies, and you can remove cookies from your browser. However, in a few cases, some of our website features may not function as a result.
                    </p>
                    <p>
                        To find out more about cookies, including how to see what cookies have been set and how to manage and delete them, visit <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">allaboutcookies.org</a>.
                    </p>
                    <p className="mt-8">
                        If you have any questions about our Cookie Policy, please contact us at <a href="mailto:mdoffice@dkgrouplabs.com" className="text-primary hover:underline">mdoffice@dkgrouplabs.com</a>.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default CookiePolicy;
