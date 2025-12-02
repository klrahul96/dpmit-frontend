import React, { useState, useEffect } from 'react';
import SEO from '../Components/SEO';
import AboutSection from '../Components/About';
import ServicesSection from '../Components/OurService';
import Portfolio from '../Components/Project';
import TeamSection from '../Components/TeamSection';
import TestimonialsSection from '../Components/Testmonial';
import ContactSection from '../Components/ContactUs';
import ScrollingBanner from '../Components/ScrollingBanner';
import FaqSection from '../Components/FaqSection';
import AgencyServicesSection from '../Components/AgencyServicesSection';
import EnquiryFormPopup from '../Components/EnquiryFormPopup'; // Import the new component

const API_BASE_URL = "http://localhost:5000"; // LIVE pe backend URL dalein

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [slides, setSlides] = useState([]); // 🔥 dynamic slides from DB
  const WEB3FORMS_ACCESS_KEY = "19c14e84-11c8-440d-ae32-fe5413a0dcec";

  // 🔥 BACKEND SE SLIDES FETCH
  useEffect(() => {
    const fetchSlides = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/content/hero`);
        const result = await res.json();
        if (result.success && result.data && result.data.slides) {
          setSlides(result.data.slides);
        } else {
          console.warn("⚠️ No slides found in database");
          // Fallback to default slides
          setSlides([
            {
              image: "/assets/bg1.jpg",
              subtitle: "Digital Excellence",
              title: "Transform Your Business Digital Journey",
              description: "Empowering businesses with cutting-edge technology solutions and innovative digital strategies."
            },
            {
              image: "/assets/bg2.jpg",
              subtitle: "Tech Innovation", 
              title: "Smart Solutions for Modern Challenges",
              description: "Expert technology consulting and development services tailored to your business needs."
            }
          ]);
        }
      } catch (error) {
        console.error("Fetch error:", error);
        // Fallback to default slides
        setSlides([
          {
            image: "/assets/bg1.jpg",
            subtitle: "Digital Excellence",
            title: "Transform Your Business Digital Journey",
            description: "Empowering businesses with cutting-edge technology solutions and innovative digital strategies."
          },
          {
            image: "/assets/bg2.jpg",
            subtitle: "Tech Innovation", 
            title: "Smart Solutions for Modern Challenges",
            description: "Expert technology consulting and development services tailored to your business needs."
          }
        ]);
      }
    };
    fetchSlides();
  }, []);

  // 🔥 Auto Slide Change
  useEffect(() => {
    if (!slides.length) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToServices = () => {
    const servicesElement = document.querySelector('#services-section');
    if (servicesElement) {
      servicesElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const showGetStartedForm = () => {
    setShowContactForm(true);
    setFormStatus({ type: '', message: '' });
  };

  const hideContactForm = () => {
    setShowContactForm(false);
    setFormStatus({ type: '', message: '' });
  };

  const showEnquiryNowForm = () => {
    setShowEnquiryForm(true);
    setFormStatus({ type: '', message: '' });
  };

  const hideEnquiryForm = () => {
    setShowEnquiryForm(false);
    setFormStatus({ type: '', message: '' });
  };

  const handleFormSubmit = async (formData, formType) => {
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${formType} - New Message from Website`,
          ...formData,
          from_name: formData.name || formData.fullName,
          botcheck: formData.botcheck || ""
        })
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We will contact you soon.' 
        });
        
        setTimeout(() => {
          if (formType === 'enquiry') {
            hideEnquiryForm();
          } else {
            hideContactForm();
          }
        }, 3000);
      } else {
        throw new Error(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again later or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      botcheck: formData.get('botcheck')
    };
    
    handleFormSubmit(data, 'enquiry');
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      service: formData.get('service'),
      message: formData.get('projectDetails'),
      botcheck: formData.get('botcheck')
    };
    
    handleFormSubmit(data, 'contact');
  };

  return (
    <>
      {/* SEO Component */}
      <SEO />

      {/* Fixed Enquiry Now Button - Left Side */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-40">
        <button
          onClick={showEnquiryNowForm}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-r-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse cursor-pointer group"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          <div className="flex flex-col items-center space-y-">
            <span className="font-bold text-lg ">ENQUIRY NOW</span>
          </div>
        </button>
      </div>

      {/* 🔥 HERO SLIDER - DYNAMIC OR FALLBACK */}
      <div className="relative h-[50vh] sm:h-screen overflow-hidden">
        {slides.length > 0 ? (
          slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-black/10"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10"></div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="container mx-auto px-4 sm:px-6 lg:px-4 text-center text-white">
                  <h6 className="text-yellow-500 text-lg sm:text-xl md:text-2xl mb-2 sm:mb-4 animate-fade-in-up">
                    {slide.subtitle}
                  </h6>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in-right px-2">
                    {slide.title}
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto animate-fade-in-down px-4">
                    {slide.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-8 sm:px-4">
                    <button 
                      onClick={scrollToServices}
                      className="hidden sm:block bg-yellow-500 text-gray-900 px-4 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-all duration-500 animate-fade-in-left text-sm sm:text-base w-auto sm:w-auto cursor-pointer"
                    >
                      Our Services
                    </button>
                    <button 
                      onClick={showGetStartedForm}
                      className="bg-blue-600 text-white px-4 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-500 hover:text-gray-900 transition-all duration-500 animate-fade-in-right text-sm sm:text-base w-auto sm:w-auto cursor-pointer"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="absolute inset-0 flex justify-center items-center text-white text-2xl font-bold">
            Loading Hero Section...
          </div>
        )}
      </div>

      {/* Enquiry Form Popup Component */}
      <EnquiryFormPopup
        showEnquiryForm={showEnquiryForm}
        hideEnquiryForm={hideEnquiryForm}
        handleEnquirySubmit={handleEnquirySubmit}
        formStatus={formStatus}
        isSubmitting={isSubmitting}
      />

      {/* Contact Form Popup (Get Started) - Reduced Height for Mobile */}
      {showContactForm && (
        <div className="fixed inset-0 bg-opacity-70 flex items-center justify-center z-50 p-2 sm:p-4 backdrop-blur-md">
          <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-2xl shadow-2xl p-4 sm:p-6 w-full max-w-lg mx-2 sm:mx-4 max-h-[80vh] sm:max-h-[90vh] overflow-y-auto transform transition-all duration-500 ease-in-out scale-100 border-2 border-blue-100">
            <div className="flex justify-between items-center mb-4 sm:mb-6 pb-2 sm:pb-3 border-b-2 border-gradient-to-r from-blue-400 to-purple-600">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">Get Started</h2>
                <p className="text-xs text-gray-600 font-medium">Let's discuss your project</p>
              </div>
              <button 
                onClick={hideContactForm}
                className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition-all duration-300 cursor-pointer hover:rotate-90 transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {formStatus.message && (
              <div className={`mb-3 sm:mb-4 p-2.5 sm:p-3 rounded-lg text-xs sm:text-sm font-medium ${
                formStatus.type === 'success' 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleContactSubmit}>
              <div className="space-y-3 sm:space-y-4">
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      <span className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                        </svg>
                        <span>Full Name</span>
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                      placeholder="Enter your full name"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      <span className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                        <span>Email Address</span>
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                      placeholder="Enter your email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      <span className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                        <span>Phone Number</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                      placeholder="Enter your phone number"
                      disabled={isSubmitting}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      <span className="flex items-center space-x-1">
                        <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                        </svg>
                        <span>Company Name</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                      placeholder="Enter your company name"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="relative">
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    <span className="flex items-center space-x-1">
                      <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                      </svg>
                      <span>Project Details</span>
                    </span>
                  </label>
                  <textarea
                    name="projectDetails"
                    rows="2"
                    className="w-full px-3 py-2 sm:py-2.5 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 resize-none cursor-text bg-white shadow-sm text-sm"
                    placeholder="Tell us about your project"
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <div className="flex flex-col gap-2 pt-2 sm:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2.5 sm:py-3 px-4 rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-500 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                  <button
                    type="button"
                    onClick={hideContactForm}
                    disabled={isSubmitting}
                    className="w-full bg-gray-100 text-gray-700 py-2 sm:py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold border-2 border-gray-200 hover:border-gray-300 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      <ScrollingBanner/>
      <AboutSection/>
      <div id="services-section">
        <ServicesSection/>
      </div> 
      <AgencyServicesSection/>
      <Portfolio/>
      <TeamSection/>
      <FaqSection/>
      <TestimonialsSection/>
      <ContactSection/>
    </>
  );
};

export default HeroCarousel;