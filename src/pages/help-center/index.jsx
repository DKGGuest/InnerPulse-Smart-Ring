import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const HelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFaqCategory, setActiveFaqCategory] = useState('all');

  const categories = [
    { id: 'getting-started', title: 'Getting Started', icon: 'Rocket', description: 'Setup, pairing, and first steps' },
    { id: 'troubleshooting', title: 'Troubleshooting', icon: 'Tool', description: 'Fix common syncing and connection issues' },
    { id: 'battery', title: 'Battery & Charging', icon: 'Battery', description: 'Charging tips and battery life' },
    { id: 'health-metrics', title: 'Health Metrics', icon: 'Activity', description: 'Understanding your wellness data' },
    { id: 'account', title: 'Account & Privacy', icon: 'Shield', description: 'Manage your data and privacy settings' },
    { id: 'orders', title: 'Orders & Returns', icon: 'Package', description: 'Track orders, shipping, and returns' }
  ];

  const faqs = [
    {
      category: 'getting-started',
      question: 'How do I pair my InnerPulse ring with my phone?',
      answer: 'Ensure your phone\'s Bluetooth is turned on. Open the InnerPulse app, go to Settings > Devices, and tap "Add New Ring". Place your ring on the charger near your phone, and the app will automatically detect it.'
    },
    {
      category: 'battery',
      question: 'How long does the battery last?',
      answer: 'The InnerPulse Smart Ring provides up to 7 days of continuous battery life on a single charge. A full charge from 0% takes approximately 90 minutes using the included magnetic charger.'
    },
    {
      category: 'troubleshooting',
      question: 'My ring is not syncing with the app. What should I do?',
      answer: 'First, make sure your ring is charged. Toggle your phone\'s Bluetooth off and on, and force close the InnerPulse app. Reopen the app. If the issue persists, try placing the ring on its charger for 5 seconds to initiate a soft reset.'
    },
    {
      category: 'getting-started',
      question: 'Is the InnerPulse Smart Ring waterproof?',
      answer: 'Yes, the InnerPulse Smart Ring is water-resistant up to 100 meters (10 ATM). You can safely wear it while washing hands, showering, or swimming.'
    },
    {
      category: 'health-metrics',
      question: 'How does the ring track my emotional state?',
      answer: 'Our advanced sensors continuously monitor your Heart Rate Variability (HRV), skin temperature, and resting heart rate. Our AI algorithms analyze these biometric changes to provide insights into your stress levels and emotional well-being.'
    },
    {
      category: 'orders',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day money-back guarantee. If you are not completely satisfied with your InnerPulse ring, you can return it within 30 days of delivery for a full refund. The ring must be in its original condition and packaging.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeFaqCategory === 'all' || faq.category === activeFaqCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary pt-24 pb-20 lg:pt-32 lg:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
            How can we help you today?
          </h1>
          <p className="text-lg lg:text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Search our knowledge base or browse categories below to find answers to your questions.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon name="Search" size={20} className="text-text-tertiary" />
            </div>
            <input
              type="text"
              placeholder="Search for articles, troubleshooting, or FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-12 pr-4 py-4 rounded-organic border-0 ring-1 ring-inset ring-transparent focus:ring-2 focus:ring-inset focus:ring-primary shadow-soft-elevation-3 bg-white text-text-primary placeholder:text-text-tertiary sm:text-lg transition-all"
            />
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-10 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              onClick={() => {
                setActiveFaqCategory(category.id);
                document.getElementById('faq-section').scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-surface rounded-organic-lg p-6 shadow-soft-elevation-1 hover:shadow-soft-elevation-2 cursor-pointer haptic-feedback hover:-translate-y-1 gentle-transition animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-organic flex items-center justify-center mb-4">
                <Icon name={category.icon} size={24} />
              </div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-2">{category.title}</h3>
              <p className="text-text-secondary text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faq-section" className="py-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">Frequently Asked Questions</h2>
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            <button
              onClick={() => setActiveFaqCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium gentle-transition ${
                activeFaqCategory === 'all' 
                ? 'bg-primary text-white' 
                : 'bg-surface border border-border text-text-secondary hover:bg-primary-50 hover:text-primary'
              }`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveFaqCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium gentle-transition ${
                  activeFaqCategory === cat.id 
                  ? 'bg-primary text-white' 
                  : 'bg-surface border border-border text-text-secondary hover:bg-primary-50 hover:text-primary'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <div key={index} className="bg-surface border border-border-light rounded-organic p-6">
                <h3 className="font-heading font-semibold text-lg text-text-primary mb-3">
                  {faq.question}
                </h3>
                <p className="text-text-secondary">
                  {faq.answer}
                </p>
              </div>
            ))
          ) : (
            <div className="text-center py-12 bg-surface rounded-organic-lg border border-border-light">
              <Icon name="SearchX" size={48} className="text-text-tertiary mx-auto mb-4" />
              <h3 className="font-heading font-semibold text-lg text-text-primary mb-2">No results found</h3>
              <p className="text-text-secondary">We couldn't find any FAQs matching your search criteria.</p>
              <button 
                onClick={() => { setSearchQuery(''); setActiveFaqCategory('all'); }}
                className="mt-4 text-primary font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Contact Support CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-organic-lg p-8 lg:p-12 text-center border border-primary-100 shadow-soft-elevation-1">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Icon name="Headphones" size={32} className="text-primary-600" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-heading font-bold text-text-primary mb-4">
            Still need help?
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-8">
            Our support team is available 24/7 to help you with any questions or issues you might be experiencing.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a href="mailto:support@innerpulse.com" className="px-8 py-3 bg-primary text-white font-medium rounded-organic gentle-transition haptic-feedback hover:bg-primary-600 shadow-gentle hover:shadow-gentle-lg w-full sm:w-auto flex items-center justify-center">
              <Icon name="Mail" size={18} className="mr-2" />
              Email Support
            </a>
            <button className="px-8 py-3 bg-white text-primary border border-primary font-medium rounded-organic gentle-transition haptic-feedback hover:bg-primary-50 w-full sm:w-auto flex items-center justify-center">
              <Icon name="MessageSquare" size={18} className="mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HelpCenter;
