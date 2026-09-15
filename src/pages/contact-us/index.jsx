import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'components/AppIcon';
const ContactUs = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const contactMethods = [
    {
      id: 'email',
      title: 'Email Us',
      icon: 'Mail',
      description: 'Send us an email anytime.',
      detail: 'mdoffice@dkgrouplabs.com',
      action: 'mailto:mdoffice@dkgrouplabs.com'
    },
    {
      id: 'phone',
      title: 'Call Us',
      icon: 'Phone',
      description: 'Mon-Fri from 9am to 6pm.',
      detail: '+91-9810805605',
      action: 'tel:+919810805605'
    },
    {
      id: 'office',
      title: 'Visit Us',
      icon: 'MapPin',
      description: 'Visit our headquarters.',
      detail: '201C/6, 2nd floor, D-21 Corporate Park, New Delhi – 110077',
      action: 'https://maps.google.com/?q=D-21+Corporate+Park+New+Delhi'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrorMessage('Oops! Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-secondary pt-24 pb-20 lg:pt-32 lg:pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-primary-600/30 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-up">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold text-white mb-6">
            Get in Touch
          </h1>
          <p className="text-lg lg:text-xl text-primary-100 max-w-2xl mx-auto">
            We'd love to hear from you. Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactMethods.map((method, index) => (
              <a 
                key={method.id} 
                href={method.action}
                target={method.id === 'office' ? '_blank' : '_self'}
                rel="noreferrer"
                className="block bg-surface rounded-organic-lg p-6 shadow-soft-elevation-1 hover:shadow-soft-elevation-2 haptic-feedback hover:-translate-y-1 gentle-transition animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-12 h-12 bg-primary-50 text-primary-600 rounded-organic flex items-center justify-center mb-4">
                  <Icon name={method.icon} size={24} />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary mb-1">{method.title}</h3>
                <p className="text-text-secondary text-sm mb-3">{method.description}</p>
                <p className="font-medium text-primary break-words">{method.detail}</p>
              </a>
            ))}

            {/* Help Center CTA */}
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-organic-lg p-6 border border-primary-100 shadow-soft-elevation-1 animate-fade-in delay-500">
              <h3 className="font-heading font-bold text-lg text-text-primary mb-2">Looking for answers?</h3>
              <p className="text-text-secondary text-sm mb-4">
                Check out our comprehensive Help Center for quick solutions to common questions.
              </p>
              <Link to="/help-center" className="inline-flex items-center text-primary font-medium hover:text-primary-700 gentle-transition">
                Visit Help Center
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-organic-lg shadow-soft-elevation-2 p-8 lg:p-12 animate-fade-in delay-300">
              <h2 className="text-2xl font-heading font-bold text-text-primary mb-6">Send us a message</h2>
              
              {isSubmitted ? (
                <div className="bg-success/10 border border-success/20 rounded-organic p-6 text-center animate-fade-in">
                  <div className="w-16 h-16 bg-success/20 text-success rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-text-primary mb-2">Message Sent!</h3>
                  <p className="text-text-secondary">
                    Thank you for reaching out. We've received your message and will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-organic border border-red-100 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-organic border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-organic border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text-primary mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-organic border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-organic border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-y"
                      placeholder="Tell us more about your inquiry..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center px-8 py-4 bg-primary text-white font-medium rounded-organic gentle-transition haptic-feedback hover:bg-primary-600 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Icon name="Loader2" size={20} className="animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Icon name="Send" size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
