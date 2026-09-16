import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const SizingGuide = () => {
  const sizes = [
    { size: 'S', diameter: '16.5mm', circumference: '52mm' },
    { size: 'M', diameter: '18.1mm', circumference: '57mm' },
    { size: 'L', diameter: '19.8mm', circumference: '62mm' },
    { size: 'XL', diameter: '21.3mm', circumference: '67mm' }
  ];

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/product-details-pre-order" className="text-text-secondary hover:text-primary gentle-transition">
            Smart Ring Pro
          </Link>
          <Icon name="ChevronRight" size={16} className="text-text-tertiary" />
          <span className="text-text-primary font-medium">Sizing Guide</span>
        </nav>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="font-heading font-bold text-3xl lg:text-5xl text-text-primary mb-4">
            Find Your Perfect Fit
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            A snug fit ensures accurate health readings. Follow our simple steps below to find the right InnerPulse size for your finger.
          </p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 animate-fade-in delay-200">
          <div className="bg-surface rounded-organic-lg p-6 shadow-soft-elevation-1 text-center haptic-feedback hover:-translate-y-1 gentle-transition">
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Scissors" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">1. Cut & Wrap</h3>
            <p className="text-text-secondary text-sm">
              Cut a strip of paper or use a piece of string. Wrap it snugly around the base of your preferred finger (index, middle, or ring finger recommended).
            </p>
          </div>
          
          <div className="bg-surface rounded-organic-lg p-6 shadow-soft-elevation-1 text-center haptic-feedback hover:-translate-y-1 gentle-transition">
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Edit3" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">2. Mark the Overlap</h3>
            <p className="text-text-secondary text-sm">
              Use a pen to mark the exact point where the paper or string overlaps. Ensure it isn't too tight, but snug enough not to slide around easily.
            </p>
          </div>
          
          <div className="bg-surface rounded-organic-lg p-6 shadow-soft-elevation-1 text-center haptic-feedback hover:-translate-y-1 gentle-transition">
            <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Icon name="Maximize" size={28} />
            </div>
            <h3 className="font-heading font-bold text-xl text-text-primary mb-2">3. Measure</h3>
            <p className="text-text-secondary text-sm">
              Lay the string or paper flat and measure the distance to the mark in millimeters. This is your finger's circumference.
            </p>
          </div>
        </div>

        {/* Sizing Chart */}
        <div className="bg-surface rounded-organic-lg shadow-soft-elevation-2 overflow-hidden mb-16 animate-fade-in delay-300">
          <div className="bg-primary/5 p-6 border-b border-border-light text-center">
            <h2 className="font-heading font-bold text-2xl text-text-primary">InnerPulse Size Chart</h2>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-3 px-4 border-b border-border font-heading font-semibold text-text-primary text-center">Size</th>
                    <th className="py-3 px-4 border-b border-border font-heading font-semibold text-text-primary text-center">Inside Diameter</th>
                    <th className="py-3 px-4 border-b border-border font-heading font-semibold text-text-primary text-center">Circumference</th>
                  </tr>
                </thead>
                <tbody>
                  {sizes.map((item, index) => (
                    <tr key={item.size} className="hover:bg-primary-50 gentle-transition">
                      <td className="py-4 px-4 border-b border-border-light text-center font-bold text-primary">{item.size}</td>
                      <td className="py-4 px-4 border-b border-border-light text-center text-text-secondary">{item.diameter}</td>
                      <td className="py-4 px-4 border-b border-border-light text-center text-text-secondary">{item.circumference}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Pro Tips */}
        <div className="max-w-2xl mx-auto mb-12 animate-fade-in delay-400">
          <div className="bg-accent-50 rounded-organic p-6 border border-accent-100">
            <h3 className="flex items-center font-heading font-bold text-xl text-accent-800 mb-4">
              <Icon name="Lightbulb" size={24} className="mr-2" />
              Pro Tips for a Perfect Fit
            </h3>
            <ul className="space-y-3 text-accent-900 text-sm">
              <li className="flex items-start">
                <Icon name="CheckCircle" size={18} className="mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Measure in the evening:</strong> Fingers tend to swell slightly as the day goes on.</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={18} className="mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Temperature matters:</strong> Cold weather shrinks your fingers, while heat expands them. Measure at room temperature.</span>
              </li>
              <li className="flex items-start">
                <Icon name="CheckCircle" size={18} className="mt-0.5 mr-2 flex-shrink-0" />
                <span><strong>Best fingers to use:</strong> We recommend the index, middle, or ring finger for the most accurate sensor data.</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Back Button */}
        <div className="text-center">
          <Link to="/product-details-pre-order" className="inline-flex items-center text-primary hover:text-primary-600 font-medium gentle-transition">
            <Icon name="ArrowLeft" size={20} className="mr-2" />
            Back to Pre-order
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SizingGuide;
