import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ShoppingBag, 
  Award, 
  Shield, 
  Sparkles, 
  Users, 
  Phone, 
  Mail, 
  Instagram, 
  MessageCircle,
  ChevronRight
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const collections = [
    {
      name: 'Rings',
      image: 'https://images.pexels.com/photos/1232931/pexels-photo-1232931.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Elegant rings for every occasion'
    },
    {
      name: 'Necklaces',
      image: 'https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Stunning necklaces to complement your style'
    },
    {
      name: 'Earrings',
      image: 'https://images.pexels.com/photos/1721574/pexels-photo-1721574.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Exquisite earrings for timeless beauty'
    },
    {
      name: 'Bracelets',
      image: 'https://images.pexels.com/photos/2988232/pexels-photo-2988232.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Graceful bracelets for elegant wrists'
    }
  ];

  const features = [
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Authentic Craftsmanship',
      description: 'Each piece is meticulously handcrafted by skilled artisans with decades of experience.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Premium Quality Materials',
      description: 'We use only the finest precious metals and genuine gemstones in every creation.'
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: 'Modern + Traditional Designs',
      description: 'Perfect blend of contemporary aesthetics with timeless traditional elements.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Trusted by Customers',
      description: 'Over 10,000 satisfied customers trust us for their precious jewelry needs.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-3' : 'bg-white/95 backdrop-blur-sm py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-2xl font-bold text-[#026465] font-['Playfair_Display']">
                Naura
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-700 hover:text-[#026465] transition-colors duration-200 relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#026465] transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="text-gray-700 hover:text-[#026465] transition-colors duration-200 relative group"
              >
                Collections
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#026465] transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="text-gray-700 hover:text-[#026465] transition-colors duration-200 relative group"
              >
                Why Choose Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#026465] transition-all duration-200 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-gray-700 hover:text-[#026465] transition-colors duration-200 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#026465] transition-all duration-200 group-hover:w-full"></span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-[#026465] p-2"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 pt-2 pb-3 space-y-1">
              <button 
                onClick={() => scrollToSection('home')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#026465] hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('collections')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#026465] hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Collections
              </button>
              <button 
                onClick={() => scrollToSection('why-choose-us')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#026465] hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Why Choose Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-[#026465] hover:bg-gray-50 rounded-md transition-colors duration-200"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="nauravideo.mp4" type="video/mp4" />
          {/* Fallback image if video fails to load */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600')"
            }}
          ></div>
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#026465]/70 to-[#16756f]/60"></div>
        
        <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8">
        
          <p className="text-xl md:text-2xl mb-8 mt-18 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover designs that tell your story with our exquisite collection of handcrafted jewelry
          </p>
          <button 
            onClick={() => scrollToSection('collections')}
            className="inline-flex items-center bg-[#16756f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#026465] transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Now
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        </div>
      </section>

      {/* Info Block */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1721558/pexels-photo-1721558.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#026465] font-['Playfair_Display'] mb-8">
            Exquisite Jewelry for Every Occasion
          </h2>
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
            Naura offers exquisite jewelry solutions for every occasion, catering to both retail and rental needs. 
            Our retail collection features timeless, handcrafted pieces designed to adorn and empower. Our rental 
            service provides access to stunning jewelry for special events, allowing you to shine without the commitment.
            <br /><br />
            Whether you're looking to own a unique piece or rent for a special occasion, Naura's jewelry is designed 
            to make you feel confident, beautiful, and one-of-a-kind.
          </p>
        </div>
      </section>

      {/* Collections Section */}
      <section id="collections" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026465] font-['Playfair_Display'] mb-4">
              Our Collections
            </h2>
            <div className="w-24 h-1 bg-[#16756f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections, each designed to capture different facets of beauty and elegance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {collections.map((collection, index) => (
              <div 
                key={index}
                className="group cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={collection.image} 
                    alt={collection.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#026465]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-2xl font-bold font-['Playfair_Display'] mb-2">{collection.name}</h3>
                      <p className="text-sm opacity-90">{collection.description}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#026465] mb-2 font-['Playfair_Display']">
                    {collection.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {collection.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 bg-gradient-to-r from-[#026465] to-[#16756f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white font-['Playfair_Display'] mb-4">
              Why Choose Us
            </h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover what makes us the preferred choice for discerning jewelry lovers worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 hover:transform hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full text-[#026465] mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 font-['Playfair_Display']">
                  {feature.title}
                </h3>
                <p className="text-white/90 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#026465] font-['Playfair_Display'] mb-4">
              Get in Touch
            </h2>
            <div className="w-24 h-1 bg-[#16756f] mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We'd love to hear from you. Reach out to us for any inquiries, custom orders, or just to say hello
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#026465] rounded-full text-white mb-6 group-hover:bg-[#16756f] group-hover:shadow-lg group-hover:shadow-[#16756f]/30 transition-all duration-300 transform group-hover:scale-110">
                <Phone className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-[#026465] mb-2">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#026465] rounded-full text-white mb-6 group-hover:bg-[#16756f] group-hover:shadow-lg group-hover:shadow-[#16756f]/30 transition-all duration-300 transform group-hover:scale-110">
                <Mail className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-[#026465] mb-2">Email</h3>
              <p className="text-gray-600">hello@timelessjewellery.com</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#026465] rounded-full text-white mb-6 group-hover:bg-[#16756f] group-hover:shadow-lg group-hover:shadow-[#16756f]/30 transition-all duration-300 transform group-hover:scale-110">
                <Instagram className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-[#026465] mb-2">Instagram</h3>
              <p className="text-gray-600">@timelessjewellery</p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-[#026465] rounded-full text-white mb-6 group-hover:bg-[#16756f] group-hover:shadow-lg group-hover:shadow-[#16756f]/30 transition-all duration-300 transform group-hover:scale-110">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-[#026465] mb-2">WhatsApp</h3>
              <p className="text-gray-600">+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#026465] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center space-y-6">
            <div className="flex items-center">
              <span className="text-2xl font-bold font-['Playfair_Display']">Naura</span>
            </div>
            <p className="text-white/80 max-w-md">
              Creating beautiful, handcrafted jewelry that tells your unique story. 
              Each piece is a testament to our commitment to excellence and artisanship.
            </p>
            <p className="text-white/60 text-sm">
              © 2025 Naura. All rights reserved.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/60 hover:text-white hover:scale-110 transition-all duration-200">
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;