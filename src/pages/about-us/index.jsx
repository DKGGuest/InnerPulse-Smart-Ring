import React from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';

const AboutUs = () => {
  const values = [
    {
      title: 'Privacy First',
      description: 'Your biometric data belongs to you. We process everything locally and use end-to-end encryption to ensure your peace of mind.',
      icon: 'Shield',
      color: 'text-success'
    },
    {
      title: 'Cultural Empathy',
      description: 'We build technology that understands context. Our AI respects diverse cultural perspectives when providing wellness insights.',
      icon: 'Globe',
      color: 'text-primary'
    },
    {
      title: 'Scientific Rigor',
      description: 'Every sensor, metric, and recommendation is backed by clinical research and validated by our board of medical experts.',
      icon: 'Activity',
      color: 'text-secondary'
    },
    {
      title: 'Holistic Wellness',
      description: 'We don\'t just track steps; we bridge the gap between physical health and emotional intelligence for a complete picture of you.',
      icon: 'Heart',
      color: 'text-amber-500'
    }
  ];

  const milestones = [
    { year: '2024', title: 'The Vision', description: 'InnerPulse was founded with a mission to bring empathy to wearable technology.' },
    { year: '2025', title: 'Prototype Phase', description: 'Developed our proprietary micro-sensors and local-processing AI model.' },
    { year: '2026', title: 'Launch', description: 'Shipping the first generation of InnerPulse Smart Rings globally.' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 bg-white/10 px-4 py-2 rounded-full mb-6 backdrop-blur-sm border border-white/20">
            <Icon name="Heart" size={16} className="text-white" />
            <span className="text-sm font-medium text-white">Our Mission</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Transforming Emotional Intelligence Through Technology
          </h1>
          <p className="text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto">
            We believe that true wellness isn't just about how much you move, but how well you understand yourself. InnerPulse was created to be the empathetic companion you wear on your finger.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20 -mt-10">
        <div className="bg-surface rounded-organic-lg shadow-soft-elevation-2 p-8 lg:p-12 animate-fade-in border border-border-light">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-heading font-bold text-text-primary mb-6">Our Story</h2>
              <div className="space-y-4 text-text-secondary">
                <p>
                  The idea for InnerPulse was born out of frustration with the modern wearable market. While there were plenty of devices that could count steps and measure heart rates, none of them seemed to understand the human element.
                </p>
                <p>
                  We noticed that physical metrics alone rarely tell the full story of a person's well-being. Stress, cultural background, emotional state, and personal privacy were constantly overlooked by mainstream fitness trackers.
                </p>
                <p>
                  So, a team of engineers, designers, and medical professionals came together to build something different. We designed a smart ring that processes data locally to protect your privacy, and uses advanced AI to understand your biometrics through a lens of empathy and cultural awareness.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 flex flex-col space-y-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-primary-50 text-primary flex items-center justify-center font-bold text-sm shrink-0">
                      {milestone.year}
                    </div>
                    {index !== milestones.length - 1 && (
                      <div className="w-0.5 h-full bg-primary-100 my-2"></div>
                    )}
                  </div>
                  <div className="pt-2 pb-6">
                    <h3 className="font-heading font-bold text-text-primary mb-1">{milestone.title}</h3>
                    <p className="text-text-secondary text-sm">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-text-primary mb-4">Our Core Values</h2>
          <p className="text-text-secondary max-w-2xl mx-auto">
            These are the principles that guide every decision we make, from hardware design to software architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div 
              key={index}
              className="bg-surface rounded-organic p-8 border border-border-light hover:border-primary-200 shadow-sm hover:shadow-md transition-all haptic-feedback animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-organic flex items-center justify-center mb-6 bg-background border border-border-light shadow-sm`}>
                <Icon name={value.icon} size={28} className={value.color} />
              </div>
              <h3 className="text-xl font-heading font-bold text-text-primary mb-3">{value.title}</h3>
              <p className="text-text-secondary leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-primary-900 to-secondary-900 rounded-organic-lg p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-heading font-bold text-white mb-6">
              Join the Wellness Revolution
            </h2>
            <p className="text-lg text-primary-100 mb-10">
              Be among the first to experience the world's most empathetic smart ring. Pre-order today and start your journey towards profound self-awareness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link 
                to="/product-details-pre-order" 
                className="px-8 py-4 bg-white text-primary-900 font-bold rounded-organic gentle-transition haptic-feedback hover:bg-primary-50 shadow-lg w-full sm:w-auto"
              >
                Pre-Order Now
              </Link>
              <Link 
                to="/contact-us" 
                className="px-8 py-4 bg-transparent text-white border-2 border-white/30 font-medium rounded-organic gentle-transition haptic-feedback hover:bg-white/10 w-full sm:w-auto"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
