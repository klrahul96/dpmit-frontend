import React, { useEffect, useState, useRef } from 'react';
import { Mail, Phone, User, FileText, CheckCircle, X, Zap, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function PromoPopup() {
  const [show, setShow] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', mobile: '', niche: '', requirement: '' });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const formContainerRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    const delay = isMobile ? 4000 : 3000;
    const t = setTimeout(() => setShow(true), delay);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [show]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(form.email)) e.email = 'Enter valid email';
    if (!/^[6-9]\d{9}$/.test(form.mobile)) e.mobile = 'Enter valid 10-digit number';
    if (!form.requirement.trim()) e.requirement = 'Please enter your requirement';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    
    setLoading(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          name: form.name,
          email: form.email,
          mobile: form.mobile,
          niche: form.niche || 'Not specified',
          requirement: form.requirement,
          subject: 'New Lead from DPM IT Solutions Promo Popup',
          from_name: 'DPM IT Solutions Website'
        })
      });

      const data = await response.json();

      if (data.success) {
        console.log('Lead submitted successfully:', form);
        setSubmitted(true);
        setForm({ name: '', email: '', mobile: '', niche: '', requirement: '' });
        setTimeout(() => setShow(false), 3000);
      } else {
        console.error('Submission failed:', data);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  }

  function handleClose() {
    setShow(false);
  }

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={handleClose}
      />

      <div className={`relative max-w-2xl w-full max-h-[92vh] lg:max-h-[90vh] rounded-2xl bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 backdrop-blur-md shadow-2xl overflow-hidden transform transition-all duration-500 ${
        show ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-cyan-500/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-600/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
          <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        {/* Main Content Container */}
        <div className="relative flex flex-col lg:flex-row items-start justify-start h-full z-10">
          
          {/* Left Section - Form */}
          <div className="flex-1 px-3 py-2 lg:px-5 lg:py-3 w-full lg:w-auto flex flex-col items-center justify-start max-h-[85vh] lg:max-h-none overflow-y-auto lg:overflow-y-visible">
            {!submitted ? (
              <div className="space-y-1 flex flex-col-reverse w-full max-w-sm overflow-y-visible max-h-none">
                {/* Social & Contact Section */}
                <div className="w-full max-w-sm mt-0 pt-1 lg:mt-4 lg:pt-4 border-t border-white/30">
                  {/* Contact Info */}
                  <div className="grid grid-cols-2 gap-1 lg:gap-3 mb-2 lg:mb-4">
                    <a href="tel:+919650413450" className="bg-white/10 backdrop-blur-md rounded-lg px-2 lg:px-3 py-2 lg:py-2.5 border border-white/20 hover:bg-white/20 transition-all text-center group overflow-hidden">
                      <Phone size={14} className="text-cyan-400 mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-white font-bold text-xs lg:text-xs">Call Us</p>
                      <p className="text-cyan-300 text-[10px] lg:text-xs font-semibold truncate">+91 9650413450</p>
                    </a>
                    <a href="mailto:info@dpmitsolutions.com" className="bg-white/10 backdrop-blur-md rounded-lg px-2 lg:px-2 py-2 lg:py-2.5 border border-white/20 hover:bg-white/20 transition-all text-center group overflow-hidden">
                      <Mail size={14} className="text-cyan-400 mx-auto mb-0.5 group-hover:scale-110 transition-transform" />
                      <p className="text-white font-bold text-xs lg:text-xs">Email</p>
                      <p className="text-cyan-300 text-[10px] lg:text-xs font-semibold truncate">info@dpmitsolutions.com</p>
                    </a>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-2">
                    <a href="https://www.facebook.com/dpmitsolution/" target="_blank" rel="noopener noreferrer" className="w-9 lg:w-10 h-9 lg:h-10 bg-gradient-to-br from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg">
                      <Facebook size={16} />
                    </a>
                    <a href="https://www.instagram.com/dpmitsolutions/?hl=en" target="_blank" rel="noopener noreferrer" className="w-9 lg:w-10 h-9 lg:h-10 bg-gradient-to-br from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg">
                      <Instagram size={16} />
                    </a>
                    <a href="https://in.linkedin.com/company/dpm-it-solutions-pvt-ltd" target="_blank" rel="noopener noreferrer" className="w-9 lg:w-10 h-9 lg:h-10 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-full flex items-center justify-center text-white transition-all transform hover:scale-110 shadow-lg">
                      <Linkedin size={16} />
                    </a>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-1">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:opacity-75 text-white font-black py-3 lg:py-3.5 px-4 lg:px-6 rounded-xl text-sm lg:text-base transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    style={{fontFamily: 'system-ui, sans-serif', letterSpacing: '0.02em'}}
                  >
                    {loading ? (
                      <>
                        <div className="w-4 lg:w-5 h-4 lg:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-black text-sm lg:text-base">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Zap size={18} />
                        <span className="font-black text-sm lg:text-base">Get Offer Now</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Requirement */}
                <div className="group">
                  <label className="text-xs lg:text-sm font-bold text-white flex items-center gap-2 mb-1" style={{fontFamily: 'system-ui, sans-serif'}}>
                    <FileText size={14} className="text-cyan-400" /> Requirement
                  </label>
                  <textarea
                    name="requirement"
                    value={form.requirement}
                    onChange={handleChange}
                    rows={2}
                    className={`w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl border-2 bg-gray-50 text-xs lg:text-sm font-medium focus:outline-none focus:bg-white transition-all duration-300 resize-none ${
                      errors.requirement ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                    }`}
                    placeholder="City, budget, timeline..."
                    style={{fontFamily: 'system-ui, sans-serif'}}
                  />
                  {errors.requirement && <p className="text-xs text-red-300 mt-1 lg:mt-1.5 font-semibold" style={{fontFamily: 'system-ui, sans-serif'}}>{errors.requirement}</p>}
                </div>

                {/* Mobile Row */}
                <div className="group">
                  <label className="text-xs lg:text-sm font-bold text-white flex items-center gap-2 mb-1" style={{fontFamily: 'system-ui, sans-serif'}}>
                    <Phone size={14} className="text-cyan-400" /> Mobile
                  </label>
                  <div className="relative">
                    <input
                      name="mobile"
                      value={form.mobile}
                      onChange={handleChange}
                      inputMode="numeric"
                      maxLength="10"
                      className={`w-full px-3 lg:px-4 py-2 lg:py-2 rounded-xl border-2 bg-gray-50 text-xs lg:text-sm font-medium focus:outline-none focus:bg-white transition-all duration-300 ${
                        errors.mobile ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                      }`}
                      placeholder="Phone number"
                      style={{fontFamily: 'system-ui, sans-serif'}}
                    />
                  </div>
                  {errors.mobile && <p className="text-xs text-red-300 mt-1 lg:mt-1.5 font-semibold" style={{fontFamily: 'system-ui, sans-serif'}}>{errors.mobile}</p>}
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 lg:gap-3 w-full max-w-sm bg-white/5 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none rounded-xl lg:rounded-none p-3 lg:p-0">
                  <div className="group">
                    <label className="text-xs lg:text-sm font-bold text-white flex items-center gap-2 mb-1" style={{fontFamily: 'system-ui, sans-serif'}}>
                      <User size={14} className="text-cyan-400" /> Full Name
                    </label>
                    <div className="relative">
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl border-2 bg-gray-50 text-xs lg:text-sm font-medium focus:outline-none focus:bg-white transition-all duration-300 ${
                          errors.name ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="Your Name"
                        style={{fontFamily: 'system-ui, sans-serif'}}
                      />
                    </div>
                    {errors.name && <p className="text-xs text-red-300 mt-1 lg:mt-1.5 font-semibold" style={{fontFamily: 'system-ui, sans-serif'}}>{errors.name}</p>}
                  </div>

                  <div className="group">
                    <label className="text-xs lg:text-sm font-bold text-white flex items-center gap-2 mb-1 lg:mb-2" style={{fontFamily: 'system-ui, sans-serif'}}>
                      <Mail size={14} className="text-cyan-400" /> Email
                    </label>
                    <div className="relative">
                      <input
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        type="email"
                        className={`w-full px-3 lg:px-4 py-2 lg:py-3 rounded-xl border-2 bg-gray-50 text-xs lg:text-sm font-medium focus:outline-none focus:bg-white transition-all duration-300 ${
                          errors.email ? 'border-red-400' : 'border-gray-200 focus:border-blue-500'
                        }`}
                        placeholder="email@example.com"
                        style={{fontFamily: 'system-ui, sans-serif'}}
                      />
                    </div>
                    {errors.email && <p className="text-xs text-red-300 mt-1 lg:mt-1.5 font-semibold" style={{fontFamily: 'system-ui, sans-serif'}}>{errors.email}</p>}
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-4 lg:py-6 space-y-2 lg:space-y-3">
                <div className="flex justify-center">
                  <div className="relative w-16 lg:w-20 h-16 lg:h-20">
                    <CheckCircle size={60} className="text-green-500 animate-bounce lg:w-20 lg:h-20" strokeWidth={2} />
                  </div>
                </div>
                <h4 className="text-xl lg:text-2xl font-black text-white" style={{fontFamily: 'system-ui, sans-serif', letterSpacing: '-0.01em'}}>
                  Thank You! 🎉
                </h4>
                <p className="text-gray-100 font-semibold text-xs lg:text-sm" style={{fontFamily: 'system-ui, sans-serif'}}>
                  Your inquiry has been submitted successfully!
                </p>
                <p className="text-xs text-gray-300 font-medium" style={{fontFamily: 'system-ui, sans-serif'}}>
                  DPM IT SOLUTIONS team will contact you soon
                </p>
              </div>
            )}
          </div>

          {/* Right Section - Offers & Logo */}
          <div className="hidden lg:flex flex-col items-center justify-center w-80 bg-gradient-to-br from-cyan-600 via-blue-600 to-blue-800 px-6 py-6 relative overflow-hidden">
            {/* Background Design */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-2xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full mix-blend-overlay blur-2xl" />
            </div>

            {/* Logo Image - DPM IT Solutions */}
            <div className="relative z-10 mb-6">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-2xl transform hover:scale-110 transition-transform duration-300 p-2">
                <img 
                  src="/assets/logo.png" 
                  alt="DPM IT Solutions Logo"
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div className="text-center flex flex-col items-center justify-center" style={{display: 'none'}}>
                  <div className="text-3xl font-black text-blue-600" style={{letterSpacing: '-0.02em'}}>DPM</div>
                  <div className="text-xs font-bold text-blue-500 mt-1" style={{letterSpacing: '0.05em'}}>IT SOLUTIONS</div>
                </div>
              </div>
            </div>

            {/* Offers Section */}
            <div className="relative z-10 text-center space-y-2">
              <h3 className="text-xl font-black text-white" style={{fontFamily: 'Georgia, serif', letterSpacing: '-0.01em'}}>
                GRAB
              </h3>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-white" style={{fontFamily: 'Georgia, serif', letterSpacing: '-0.02em'}}>
                THE BEST
              </h2>
              <h2 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-emerald-300" style={{fontFamily: 'Georgia, serif', letterSpacing: '-0.02em'}}>
                OFFERS
              </h2>

              {/* Offer Tags */}
              <div className="space-y-2 mt-4 pt-4 border-t border-white/30">
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-yellow-300 font-black">
                    <span className="text-[10px] tracking-wider">UP TO</span>{" "}
                    <span className="text-[20px] font-extrabold">30% OFF</span>
                  </p>
                  <p className="text-white font-bold text-xs">ON OUR ALL SERVICES</p>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 border border-white/20">
                  <p className="text-green-300 font-black text-sm">1ST PAGE RANKING ON GOOGLE</p>
                  <p className="text-white font-bold text-xs">Within 90 Days Guarantee</p>
                </div>
              </div>

              {/* Highlighted Limited Time Offer */}
              <div className="mt-4 pt-4 border-t border-white/30">
                <div className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 rounded-lg px-4 py-2 animate-pulse">
                  <p className="text-white font-black text-sm tracking-wide" style={{letterSpacing: '0.05em'}}>⏰ LIMITED TIME OFFER ⏰</p>
                  <p className="text-white font-bold text-xs mt-1">Don't Miss Out!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Close Button - Top Right */}
        <button
          onClick={handleClose}
          className="hidden lg:flex absolute top-4 right-4 z-20 text-white bg-white/10 hover:bg-white/25 rounded-full p-3 transition-all duration-300 transform hover:scale-110 hover:rotate-90 items-center justify-center"
        >
          <X size={24} strokeWidth={2.5} />
        </button>

        {/* Mobile Close Button - Fixed Top Right Corner */}
        <button
          onClick={handleClose}
          className="lg:hidden absolute top-4 right-4 z-20 text-white bg-red-500 hover:bg-red-600 rounded-full p-3 transition-all duration-300 transform hover:scale-110 flex items-center justify-center shadow-lg"
        >
          <X size={20} strokeWidth={3} />
        </button>

        {/* Mobile Footer - Highlighted Limited Time Offer */}
        <div className="lg:hidden px-4 py-3 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 border-t border-red-600 flex flex-col items-center justify-center gap-1">
          <span className="text-sm font-black text-white tracking-wider" style={{letterSpacing: '0.05em'}}>
            ⏰ LIMITED TIME OFFER ⏰
          </span>
          <span className="text-xs font-bold text-white">Get up to 30% OFF - Offer Ends Soon!</span>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-in;
        }
      `}</style>
    </div>
  );
}