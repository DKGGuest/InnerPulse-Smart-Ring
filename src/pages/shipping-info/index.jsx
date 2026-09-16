import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const ShippingInfo = () => {
    return (
        <div className="min-h-screen bg-background pb-20">
            {/* Dynamic Hero Section */}
            <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-secondary-900 pt-32 pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay"></div>
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                    <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                </div>
                
                <div className="max-w-4xl mx-auto relative z-10 text-center">
                    <div className="inline-flex items-center justify-center p-3 bg-white/10 backdrop-blur-md rounded-full mb-6">
                        <Icon name="Truck" size={32} className="text-white" />
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 tracking-tight">
                        Shipping & Delivery
                    </h1>
                    <p className="text-primary-100 text-lg lg:text-xl max-w-2xl mx-auto font-body leading-relaxed">
                        We know you're excited to receive your InnerPulse ring. Here's exactly how and when it will arrive at your doorstep.
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-20">
                
                {/* Visual Timeline Section */}
                <div className="bg-surface rounded-organic-lg shadow-soft-elevation-2 p-8 lg:p-12 border border-border-light mb-12">
                    <h2 className="text-2xl font-heading font-bold text-text-primary mb-10 text-center">The Journey of Your Ring</h2>
                    
                    <div className="relative pt-2">
                        {/* Connecting Line */}
                        <div className="hidden md:block absolute top-10 left-0 w-full h-1 bg-primary-100 z-0"></div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                            {/* Step 1 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mb-4 shadow-gentle hover:scale-110 gentle-transition">
                                    <Icon name="CheckCircle" size={24} />
                                </div>
                                <h3 className="font-heading font-semibold text-text-primary mb-2">1. Order Placed</h3>
                                <p className="text-sm text-text-secondary">Your order is confirmed and sent to our fulfillment center.</p>
                            </div>

                            {/* Step 2 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-surface border-4 border-primary text-primary rounded-full flex items-center justify-center mb-4 shadow-gentle hover:scale-110 gentle-transition bg-white">
                                    <Icon name="Package" size={24} />
                                </div>
                                <h3 className="font-heading font-semibold text-text-primary mb-2">2. Processing</h3>
                                <p className="text-sm text-text-secondary">We carefully pack your ring within <span className="font-medium text-primary">1-2 business days</span>.</p>
                            </div>

                            {/* Step 3 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-surface border-4 border-primary-200 text-primary-400 rounded-full flex items-center justify-center mb-4 shadow-gentle hover:scale-110 gentle-transition bg-white">
                                    <Icon name="Truck" size={24} />
                                </div>
                                <h3 className="font-heading font-semibold text-text-primary mb-2">3. In Transit</h3>
                                <p className="text-sm text-text-secondary">Your package is handed to the carrier. Tracking is emailed instantly.</p>
                            </div>

                            {/* Step 4 */}
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-surface border-4 border-primary-100 text-primary-300 rounded-full flex items-center justify-center mb-4 shadow-gentle hover:scale-110 gentle-transition bg-white">
                                    <Icon name="Home" size={24} />
                                </div>
                                <h3 className="font-heading font-semibold text-text-primary mb-2">4. Delivery</h3>
                                <p className="text-sm text-text-secondary">Your wellness journey officially begins!</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Delivery Rates & Options (Grid) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    
                    {/* Main Pricing Table Card */}
                    <div className="lg:col-span-2 bg-surface rounded-organic-lg shadow-soft-elevation-1 p-8 border border-border-light">
                        <div className="flex items-center space-x-3 mb-6">
                            <Icon name="Zap" size={24} className="text-primary" />
                            <h2 className="text-2xl font-heading font-bold text-text-primary">Shipping Options</h2>
                        </div>
                        
                        <div className="overflow-hidden rounded-organic border border-border-light">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-primary-50 border-b border-border-light">
                                    <tr>
                                        <th className="p-4 font-semibold text-primary-900">Method</th>
                                        <th className="p-4 font-semibold text-primary-900">Estimated Time</th>
                                        <th className="p-4 font-semibold text-primary-900 text-right">Cost</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light">
                                    <tr className="hover:bg-primary-50/50 gentle-transition">
                                        <td className="p-4 text-text-primary font-medium flex items-center space-x-2">
                                            <span>Standard Domestic</span>
                                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-secondary-100 text-secondary-800">Popular</span>
                                        </td>
                                        <td className="p-4 text-text-secondary">3-5 Business Days</td>
                                        <td className="p-4 text-text-primary font-semibold text-right">Free</td>
                                    </tr>
                                    <tr className="hover:bg-primary-50/50 gentle-transition">
                                        <td className="p-4 text-text-primary font-medium">Express Domestic</td>
                                        <td className="p-4 text-text-secondary">1-2 Business Days</td>
                                        <td className="p-4 text-text-primary font-semibold text-right">$15.00</td>
                                    </tr>
                                    <tr className="hover:bg-primary-50/50 gentle-transition">
                                        <td className="p-4 text-text-primary font-medium">Standard International</td>
                                        <td className="p-4 text-text-secondary">7-14 Business Days</td>
                                        <td className="p-4 text-text-primary font-semibold text-right">Calculated at Checkout</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <p className="text-xs text-text-secondary mt-4 flex items-start space-x-2">
                            <Icon name="Info" size={14} className="shrink-0 mt-0.5" />
                            <span>Delivery times exclude the 1-2 day processing window. Deliveries to PO Boxes or rural areas may take additional time.</span>
                        </p>
                    </div>

                    {/* Features/Highlights Column */}
                    <div className="space-y-6">
                        {/* International Card */}
                        <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-organic-lg p-6 border border-primary-100 relative overflow-hidden group">
                            <div className="absolute -right-6 -top-6 text-primary-200/50 group-hover:scale-110 gentle-transition">
                                <Icon name="Globe" size={120} />
                            </div>
                            <div className="relative z-10">
                                <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center mb-4">
                                    <Icon name="Globe" size={20} />
                                </div>
                                <h3 className="font-heading font-bold text-primary-900 mb-2">Global Shipping</h3>
                                <p className="text-sm text-primary-800 leading-relaxed mb-4">
                                    We proudly ship to over 50 countries worldwide. 
                                </p>
                                <div className="text-xs text-primary-700/80 bg-white/50 p-3 rounded-lg border border-primary-200">
                                    <span className="font-medium text-primary-900 block mb-1">Customs & Duties:</span>
                                    International orders may be subject to local import taxes/duties upon arrival. These are the responsibility of the customer.
                                </div>
                            </div>
                        </div>

                        {/* Eco Card */}
                        <div className="bg-surface rounded-organic-lg p-6 border border-border-light hover:shadow-soft-elevation-1 gentle-transition">
                            <div className="flex items-center space-x-3 mb-3">
                                <div className="w-10 h-10 bg-green-50 text-green-600 rounded-full flex items-center justify-center">
                                    <Icon name="Leaf" size={20} />
                                </div>
                                <h3 className="font-heading font-bold text-text-primary">Eco-Friendly Packaging</h3>
                            </div>
                            <p className="text-sm text-text-secondary leading-relaxed">
                                Our shipping materials are 100% recyclable and made from post-consumer waste. Wellness for you, kindness for the planet.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Additional Info Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Tracking */}
                    <div className="bg-surface p-8 rounded-organic-lg border border-border-light flex items-start space-x-4">
                        <div className="shrink-0 w-12 h-12 bg-secondary-50 text-secondary-600 rounded-full flex items-center justify-center">
                            <Icon name="MapPin" size={24} />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">Order Tracking</h3>
                            <p className="text-text-secondary text-sm leading-relaxed">
                                The moment your ring leaves our facility, you'll receive a dispatch email containing a live tracking link. You can follow your ring's journey every step of the way. Please allow up to 48 hours for the tracking link to show initial movement.
                            </p>
                        </div>
                    </div>

                    {/* Support / Lost */}
                    <div className="bg-surface p-8 rounded-organic-lg border border-border-light flex items-start space-x-4">
                        <div className="shrink-0 w-12 h-12 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center">
                            <Icon name="ShieldAlert" size={24} />
                        </div>
                        <div>
                            <h3 className="font-heading font-bold text-text-primary text-lg mb-2">Lost or Damaged?</h3>
                            <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                If your estimated delivery date has passed, or if your package arrived damaged in transit, we've got you covered. Reach out within 7 days and we'll make it right immediately.
                            </p>
                            <Link to="/contact-us" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary-700">
                                Contact Support <Icon name="ArrowRight" size={16} className="ml-1" />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-16 mb-8 bg-gradient-to-br from-primary-50 to-secondary-50 p-8 rounded-organic-lg border border-primary-100 text-center">
                    <h3 className="text-xl font-heading font-bold text-text-primary mb-2">Still Need Help?</h3>
                    <p className="text-text-secondary mb-6 max-w-md mx-auto">
                        If you have any further questions about shipping or your specific order, our support team is ready to assist you.
                    </p>
                    <Link to="/contact-us" className="inline-flex items-center px-6 py-3 bg-primary text-white font-medium rounded-organic gentle-transition hover:bg-primary-600 shadow-sm hover:shadow-md">
                        Contact Support
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default ShippingInfo;
