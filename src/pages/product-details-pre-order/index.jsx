import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from 'components/AppIcon';
import Image from 'components/AppImage';
import ProductGallery from './components/ProductGallery';
import ProductSpecs from './components/ProductSpecs';
import PreOrderSection from './components/PreOrderSection';
import CustomerTestimonials from './components/CustomerTestimonials';
import ProductFAQ from './components/ProductFAQ';

const ProductDetailsPreOrder = () => {
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [currency, setCurrency] = useState('INR');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location.hash]);

  const EXCHANGE_RATES = { INR: 1, AED: 0.044, USD: 0.012 };
  const CURRENCY_SYMBOLS = { INR: '₹', AED: 'AED ', USD: '$' };

  const productData = {
    id: 'wellness-ring-pro',
    name: 'Smart Ring Pro',
    tagline: 'Your Personal Emotional Intelligence Companion',
    price: 3999,
    originalPrice: 7999,
    discount: Math.round((1 - 3999/7999) * 100),
    availability: 'Pre-order - Ships March 2026',
    rating: 4.8,
    reviewCount: 1240,
    description: `The Smart Ring Pro is a revolutionary wearable device that combines cutting-edge biometric sensors with advanced AI to provide real-time emotional intelligence insights. Designed for the modern wellness enthusiast, this sleek ring monitors your physiological responses and translates them into actionable emotional awareness data.

Built with medical-grade sensors and a titanium body, the Smart Ring Pro offers 7-day battery life, water resistance up to 100 meters, and seamless integration with our companion app for comprehensive wellness tracking and journaling.`,
    features: [
      'Real-time emotion detection and analysis',
      'Heart rate variability monitoring',
      'Sleep quality tracking with REM analysis',
      'Stress level measurement and alerts',
      'Meditation guidance and breathing exercises',
      '7-day battery life with wireless charging',
      'Water resistant up to 100m',
      'Companion app with AI insights'
    ],
    specifications: {
      'Dimensions': '20 mm × 7.5 mm × 2.7 mm',
      'Weight': '4.5 grams',
      'Battery Life': '4–5 days',
      'Water Resistance': 'IP68 (100m) certified',
      'Connectivity': 'Bluetooth 5.0',
      'Sensors': 'Optical PPG (Heart Rate, SpO2),Skin Temperature Sensor,3D Accelerometer,Capacitive Pressure Sensor',
      'Materials': 'Titanium body with hypoallergenic inner lining',
      'Compatibility': 'Android 8.0+'
    },
    sizes: [
      { size: 'S', diameter: '16.5mm', circumference: '52mm' },
      { size: 'M', diameter: '18.1mm', circumference: '57mm' },
      { size: 'L', diameter: '19.8mm', circumference: '62mm' },
      { size: 'XL', diameter: '21.3mm', circumference: '67mm' }
    ]
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    setTimeout(() => setIsAddedToCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background pt-16 lg:pt-20">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="flex items-center space-x-2 text-sm">
          <Link to="/homepage-product-landing" className="text-text-secondary hover:text-primary gentle-transition">
            Home
          </Link>
          <Icon name="ChevronRight" size={16} className="text-text-tertiary" />
          <span className="text-text-primary font-medium">Smart Ring Pro</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Gallery */}
          <div className="order-1">
            <ProductGallery />
          </div>

          {/* Product Information */}
          <div className="order-2 space-y-6">
            {/* Product Header */}
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="bg-accent text-text-inverse px-2 py-1 rounded-organic text-xs font-medium">
                  {productData.discount}% OFF
                </span>
              </div>
              <h1 className="font-heading font-bold text-3xl lg:text-4xl text-text-primary mb-2">
                {productData.name}
              </h1>
              <p className="text-lg text-text-secondary mb-4">{productData.tagline}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Icon
                      key={i}
                      name="Star"
                      size={16}
                      className={i < Math.floor(productData.rating) ? 'text-accent fill-current' : 'text-text-tertiary'}
                    />
                  ))}
                </div>
                <span className="text-sm text-text-secondary">
                  {productData.rating} ({productData.reviewCount} reviews)
                </span>
              </div>

              {/* Pricing */}
              <div className="flex flex-col mb-6">
                <div className="flex items-center justify-between w-full mb-2">
                  <div className="flex items-center space-x-3">
                    <span className="font-heading font-bold text-3xl text-text-primary">
                      {CURRENCY_SYMBOLS[currency]}{Math.round(productData.price * EXCHANGE_RATES[currency])}
                    </span>
                    <span className="text-lg text-text-tertiary line-through">
                      {CURRENCY_SYMBOLS[currency]}{Math.round(productData.originalPrice * EXCHANGE_RATES[currency])}
                    </span>
                    <span className="bg-success-light text-success-dark px-2 py-1 rounded-organic text-sm font-medium">
                      Save {CURRENCY_SYMBOLS[currency]}{Math.round((productData.originalPrice - productData.price) * EXCHANGE_RATES[currency])}
                    </span>
                  </div>
                  <select 
                    value={currency} 
                    onChange={(e) => setCurrency(e.target.value)}
                    className="p-2 pr-8 border border-border rounded-organic text-sm bg-surface text-text-primary focus:ring-primary focus:border-primary"
                  >
                    <option value="INR">INR (₹)</option>
                    <option value="AED">AED</option>
                    <option value="USD">USD ($)</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h3 className="font-body font-semibold text-text-primary mb-3">Select Size</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                {productData.sizes.map((sizeOption) => (
                  <button
                    key={sizeOption.size}
                    onClick={() => setSelectedSize(sizeOption.size)}
                    className={`p-3 border rounded-organic text-center gentle-transition haptic-feedback ${
                      selectedSize === sizeOption.size
                        ? 'border-primary bg-primary-100 text-primary-700' :'border-border hover:border-primary-300 text-text-secondary hover:text-text-primary'
                    }`}
                  >
                    <div className="font-medium">{sizeOption.size}</div>
                    <div className="text-xs opacity-75">{sizeOption.circumference}</div>
                  </button>
                ))}
              </div>
              <Link to="/sizing-guide" className="text-sm text-primary hover:text-primary-600 gentle-transition">
                Need help with sizing? View sizing guide
              </Link>
            </div>

            {/* Quantity and Add to Cart */}
            <div id="pre-order" className="relative scroll-mt-24">
              <div id="pricing" className="absolute -top-24"></div>
              <PreOrderSection
                quantity={quantity}
                setQuantity={setQuantity}
                onAddToCart={handleAddToCart}
                isAddedToCart={isAddedToCart}
                price={productData.price}
                currency={currency}
                exchangeRate={EXCHANGE_RATES[currency]}
                currencySymbol={CURRENCY_SYMBOLS[currency]}
              />
            </div>

            {/* Key Features */}
            <div>
              <h3 className="font-body font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {productData.features.slice(0, 4).map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4 py-6 border-t border-border-light">
              <div className="text-center">
                <Icon name="Shield" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-xs text-text-secondary">2-Year Warranty</div>
              </div>
              <div className="text-center">
                <Icon name="Truck" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-xs text-text-secondary">Free Shipping</div>
              </div>
              <div className="text-center">
                <Icon name="RotateCcw" size={24} className="text-primary mx-auto mb-2" />
                <div className="text-xs text-text-secondary">30-Day Returns</div>
              </div>
            </div>
          </div>
        </div>

        

        {/* Detailed Sections */}
        <div className="mt-16 space-y-16">
          {/* Product Description */}
          <section>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary mb-6">
              About InnerPulse Pro
            </h2>
            <div className="prose prose-lg max-w-none text-text-secondary">
              <p className="mb-4">{productData.description}</p>
            </div>
          </section>
          {/* <div className="relative"> */}
            <div className="relative z-10 max-w-2xl mx-auto"> {/* Increased max width */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full blur-3xl opacity-20 scale-110"></div>
                <div className="relative bg-white rounded-2xl p-0 shadow-soft-elevation-3">
                  {/* <video
                    src="./assets/videos/ringvideo.mp4"
                    className="w-full h-[620px] rounded-2xl object-cover" // Increased height
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/assets/images/your-poster-image.jpg"
                  /> */}
                </div>
              </div>
            </div>
          

          {/* Technical Specifications */}
          <ProductSpecs specifications={productData.specifications} features={productData.features} />

          {/* Customer Testimonials */}
          <CustomerTestimonials />

          {/* FAQ Section */}
          <ProductFAQ />

          {/* Related Products */}
          {/* <section>
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-text-primary mb-8">
              Complete Your Wellness Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: 'Smart Ring Charging Dock',
                  price: 19,
                  image: 'https://m.media-amazon.com/images/I/613svUkqvOL.jpg',
                  description: 'Elegant wireless charging station'
                },
                {
                  name: 'Premium Ring Sizing Kit',
                  price: 17,
                  image: 'https://media.jaycar.com.au/product/images/QC3156_smart-ring-with-charging-case-medium-black_157815.jpg',
                  description: 'Ensure perfect fit before ordering'
                },
                {
                  name: 'Smart Ring Care Kit',
                  price: 15,
                  image: 'https://image.made-in-china.com/2f0j00oBplqhNgrFUS/Sr05-Smart-Ring-Health-Tracker-Blood-Pressure-Monitor-Android-ISO-Finger-Rings-Smart-Sleep.webp',
                  description: 'Complete cleaning and maintenance set'
                }
              ].map((product, index) => (
                <div key={index} className="bg-surface rounded-organic-lg p-6 gentle-transition haptic-feedback hover:shadow-soft-elevation-2">
                  <div className="aspect-w-4 aspect-h-3 mb-4 overflow-hidden rounded-organic">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <h3 className="font-body font-semibold text-text-primary mb-2">{product.name}</h3>
                  <p className="text-sm text-text-secondary mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-heading font-bold text-lg text-text-primary">${product.price}</span>
                    <button className="px-4 py-2 bg-secondary text-text-inverse rounded-organic text-sm font-medium gentle-transition haptic-feedback hover:bg-secondary-600">
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section> */}
        </div>
      </div>

      {/* Sticky Bottom CTA (Mobile) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border-light p-4 z-50">
        <div className="flex items-center space-x-4">
          <div className="flex-1">
            <div className="font-heading font-bold text-lg text-text-primary">{CURRENCY_SYMBOLS[currency]}{Math.round(productData.price * EXCHANGE_RATES[currency])}</div>
            <div className="text-sm text-text-secondary">{productData.availability}</div>
          </div>
          <button
            onClick={handleAddToCart}
            className={`px-6 py-3 rounded-organic font-body font-medium gentle-transition haptic-feedback ${
              isAddedToCart
                ? 'bg-success text-text-inverse' :'bg-primary text-text-inverse hover:bg-primary-600'
            }`}
          >
            {isAddedToCart ? (
              <div className="flex items-center space-x-2">
                <Icon name="Check" size={18} />
                <span>Added!</span>
              </div>
            ) : (
              'Pre-Order Now'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPreOrder;