import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import BookingPopup from './BookingPopup';
import ScrollingBanner from './TopScrolling';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const location = useLocation();

  // Admin Panel Data State
  const [siteSettings, setSiteSettings] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/content/settings")
      .then(res => res.json())
      .then(resJson => setSiteSettings(resJson.data))
      .catch(err => console.error("Failed to load settings:", err));
  }, []);

  // Check if current page should show banner
  const shouldShowBanner = () => {
    const currentPath = location.pathname;
    const allowedPaths = ['/', '/about', '/contact', '/pay-now'];
    return allowedPaths.includes(currentPath);
  };

  // Helper function to check if a path is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Helper function to check if any service page is active
  const isServiceActive = () => {
    return location.pathname.startsWith('/services/');
  };

  return (
    <>
      {/* Add Poppins Font */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .animate-blink {
          animation: blink 1.5s ease-in-out infinite;
        }
      `}</style>

      <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        {/* Conditionally render ScrollingBanner */}
        {shouldShowBanner() && <ScrollingBanner/>}
        
        {/* Topbar */}
        <div className="bg-blue-800 py-1 hidden md:flex">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <small className="text-white flex items-center">
                  <i className="fas fa-map-marker-alt text-yellow-400 mr-2"></i>
                  {siteSettings?.contact?.address || 'Tilak Nagar, New Delhi - 110018'}
                </small>
                <small className="text-white flex items-center">
                  <i className="fas fa-envelope text-yellow-400 mr-2"></i>
                  {siteSettings?.contact?.email || 'info@dpmitsolutions.com'}
                </small>
              </div>
              <div className="text-yellow-400 hidden xl:block">
                <small className="font-medium">Note : We help you to Grow your Business</small>
              </div>
              <div className="flex space-x-2">
                <a href={siteSettings?.socialMedia?.facebook || 'https://www.facebook.com/dpmitsolution/'} className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href={siteSettings?.socialMedia?.instagram || 'https://www.instagram.com/dpmitsolutions/?hl=en'} className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href={siteSettings?.socialMedia?.linkedin || 'https://in.linkedin.com/company/dpm-it-solutions-pvt-ltd'} className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="bg-white shadow-md relative">
          <div className="container mx-auto px-4">
            <nav className="flex items-center justify-between py-2 relative">
              {/* Logo - Left Side */}
              <div className="flex items-center z-50 relative">
                <Link to="/">
                  <img 
                    src="/assets/logo.png" 
                    alt="Company Logo" 
                    className="h-13 w-auto"
                  />
                </Link>
              </div>

              {/* Mobile menu button */}
              <button 
                className="md:hidden text-gray-800 z-50 relative"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 my-0.5 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`bg-gray-800 block h-0.5 w-6 rounded-sm transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>

              {/* Desktop Menu - Centered */}
              <div className="hidden md:flex items-center justify-center flex-1">
                <div className="flex space-x-16">
                  <Link 
                    to="/" 
                    className="text-gray-800 hover:text-yellow-500 transition-colors font-medium"
                  >
                    Home
                  </Link>
                  
                  <Link 
                    to="/about" 
                    className={`transition-colors font-medium relative pb-1 ${
                      isActive('/about') 
                        ? 'text-yellow-500' 
                        : 'text-gray-800 hover:text-yellow-500'
                    }`}
                  >
                    About
                    {isActive('/about') && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
                    )}
                  </Link>
                  
                  <div className="relative group">
                    <button 
                      onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
                      onMouseEnter={() => setIsDesktopDropdownOpen(true)}
                      className={`transition-colors flex items-center font-medium cursor-pointer relative pb-1 ${
                        isServiceActive() 
                          ? 'text-yellow-500' 
                          : 'text-gray-800 hover:text-yellow-500'
                      }`}
                    >
                      Services <i className={`fas fa-chevron-down ml-1 transition-transform duration-300 ${isDesktopDropdownOpen ? 'rotate-180' : ''}`}></i>
                      {isServiceActive() && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
                      )}
                    </button>
                    <div 
                      onMouseLeave={() => setIsDesktopDropdownOpen(false)}
                      className={`absolute top-full left-0 mt-2 bg-white rounded-lg shadow-2xl transition-all duration-300 z-50 min-w-72 border border-gray-100 overflow-hidden ${
                        isDesktopDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                    >
                      <div className="py-2">
                        <Link 
                          to="/services/website-development" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/website-development')
                              ? 'bg-gradient-to-r from-blue-50 to-blue-100 text-blue-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-blue-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-code text-blue-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-blue-600 transition-colors">Website Development</span>
                        </Link>
                        
                        <Link 
                          to="/services/seo" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/seo')
                              ? 'bg-gradient-to-r from-green-50 to-green-100 text-green-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-search text-green-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-green-600 transition-colors">Search Engine Optimisation</span>
                        </Link>
                        
                        <Link 
                          to="/services/social-media-marketing" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/social-media-marketing')
                              ? 'bg-gradient-to-r from-purple-50 to-purple-100 text-purple-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-purple-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-share-alt text-purple-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-purple-600 transition-colors">Social Media Marketing</span>
                        </Link>

                        <Link 
                          to="/services/google-my-business" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/google-my-business')
                              ? 'bg-gradient-to-r from-yellow-50 to-yellow-100 text-yellow-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-yellow-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-yellow-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-map-marked-alt text-yellow-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-yellow-600 transition-colors">Google My Business</span>
                        </Link>
                        
                        <Link 
                          to="/services/digital-marketing" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/digital-marketing')
                              ? 'bg-gradient-to-r from-red-50 to-red-100 text-red-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-bullhorn text-red-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-red-600 transition-colors">Digital Marketing</span>
                        </Link>
                        
                        <Link 
                          to="/services/app-development" 
                          onClick={() => setIsDesktopDropdownOpen(false)} 
                          className={`block px-5 py-3 font-medium flex items-center transition-all duration-200 group/item ${
                            isActive('/services/app-development')
                              ? 'bg-gradient-to-r from-indigo-50 to-indigo-100 text-indigo-600'
                              : 'text-gray-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-indigo-100'
                          }`}
                        >
                          <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center mr-3 group-hover/item:scale-110 transition-transform duration-200">
                            <i className="fas fa-mobile-alt text-indigo-600 text-lg"></i>
                          </div>
                          <span className="group-hover/item:text-indigo-600 transition-colors">App Development</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className={`transition-colors font-medium relative pb-1 ${
                      isActive('/contact') 
                        ? 'text-yellow-500' 
                        : 'text-gray-800 hover:text-yellow-500'
                    }`}
                  >
                    Contact
                    {isActive('/contact') && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-500"></span>
                    )}
                  </Link>
                </div>
              </div>

              {/* Contact Info & Social Icons */}
              <div className="hidden xl:flex items-center space-x-4">
                <div className="flex items-center">
                  {/* Phone Icon with blinking effect */}
                  <a
                    href={`tel:${siteSettings?.contact?.phone || '+919650413450'}`}
                    className="relative flex items-center justify-center"
                  >
                    <i className="fa-solid fa-phone text-blue-600 text-2xl animate-blink"></i>

                    {/* Small blinking dot */}
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1">
                      <i className="fa-solid fa-circle text-yellow-500 text-[10px] animate-blink"></i>
                    </span>
                  </a>

                  {/* Right Text Section */}
                  <div className="ml-4 border-r border-gray-300 pr-4">
                    <div className="text-gray-600 text-sm">Have any questions?</div>
                    <a
                      href={`tel:${siteSettings?.contact?.phone || '+919650413450'}`}
                      className="text-blue-600 font-medium hover:text-yellow-500 transition-colors cursor-pointer"
                    >
                      Call: {siteSettings?.contact?.phone || '+91 9650413450'}
                    </a>
                  </div>
                </div>

                {/* Book Now & Pay Now Buttons */}
                <div className="ml-4 flex space-x-3">
                  <button 
                    onClick={() => setIsPopupOpen(true)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer"
                  >
                    Book Now
                  </button>
                  <Link to="/pay-now">
                    <button 
                      className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-full font-medium transition-colors duration-300 shadow-md hover:shadow-lg transform hover:scale-105 cursor-pointer"
                    >
                      Pay Now
                    </button>
                  </Link>
                </div>
                
                <div className="ml-4">
                  <i className="bi bi-search text-gray-800 text-2xl"></i>
                </div>
              </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-blue-600 transition-all duration-300 z-40 shadow-lg ${
              isMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
            }`}>
              <div className="px-4 py-4 space-y-1">
                <Link 
                  to="/" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="block text-white py-3 font-medium border-b border-blue-500 hover:bg-blue-700 px-2 rounded hover:text-yellow-500"
                >
                  Home
                </Link>
                
                <Link 
                  to="/about" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block py-3 font-medium border-b border-blue-500 hover:bg-blue-700 px-2 rounded ${
                    isActive('/about') ? 'text-yellow-400 bg-blue-700' : 'text-white hover:text-yellow-500'
                  }`}
                >
                  About {isActive('/about') && <i className="fas fa-check-circle ml-2"></i>}
                </Link>
                
                {/* Mobile Services Submenu */}
                <div className="border-b border-blue-500">
                  <button 
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className={`w-full text-left py-3 font-medium hover:bg-blue-700 px-2 rounded flex items-center justify-between ${
                      isServiceActive() ? 'text-yellow-400 bg-blue-700' : 'text-white hover:text-yellow-500'
                    }`}
                  >
                    <span>Services {isServiceActive() && <i className="fas fa-check-circle ml-2"></i>}</span>
                    <i className={`fas fa-chevron-down transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}></i>
                  </button>
                  <div className={`pl-4 overflow-hidden transition-all duration-300 ${isServicesOpen ? 'max-h-96 pb-2' : 'max-h-0'}`}>
                    <Link 
                      to="/services/website-development" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/website-development') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      Website Development {isActive('/services/website-development') && '✓'}
                    </Link>
                    
                    <Link 
                      to="/services/seo" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/seo') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      Search Engine Optimisation {isActive('/services/seo') && '✓'}
                    </Link>
                    
                    <Link 
                      to="/services/social-media-marketing" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/social-media-marketing') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      Social Media Marketing {isActive('/services/social-media-marketing') && '✓'}
                    </Link>
                    
                    <Link 
                      to="/services/digital-marketing" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/digital-marketing') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      Digital Marketing {isActive('/services/digital-marketing') && '✓'}
                    </Link>
                    
                    <Link 
                      to="/services/app-development" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/app-development') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      App Development {isActive('/services/app-development') && '✓'}
                    </Link>
                    
                    <Link 
                      to="/services/google-my-business" 
                      onClick={() => { setIsMenuOpen(false); setIsServicesOpen(false); }} 
                      className={`block py-2 text-sm ${
                        isActive('/services/google-my-business') 
                          ? 'text-yellow-400 font-medium' 
                          : 'text-gray-300 hover:text-yellow-500'
                      }`}
                    >
                      Google My Business {isActive('/services/google-my-business') && '✓'}
                    </Link>
                  </div>
                </div>
                
                <Link 
                  to="/contact" 
                  onClick={() => setIsMenuOpen(false)} 
                  className={`block py-3 font-medium border-b border-blue-500 hover:bg-blue-700 px-2 rounded ${
                    isActive('/contact') ? 'text-yellow-400 bg-blue-700' : 'text-white hover:text-yellow-500'
                  }`}
                >
                  Contact {isActive('/contact') && <i className="fas fa-check-circle ml-2"></i>}
                </Link>
                
                {/* Mobile Book Now & Pay Now Buttons */}
                <div className="pt-4 pb-2 space-y-3">
                  <button 
                    onClick={() => { setIsPopupOpen(true); setIsMenuOpen(false); }}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg cursor-pointer"
                  >
                    Book Now
                  </button>
                  <Link to="/pay-now" onClick={() => setIsMenuOpen(false)}>
                    <button 
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium transition-colors duration-300 shadow-lg cursor-pointer"
                    >
                      Pay Now
                    </button>
                  </Link>
                </div>

                {/* Mobile Social Icons */}
                <div className="flex justify-center space-x-4 pt-4 border-t border-blue-500">
                  <a href={siteSettings?.socialMedia?.facebook || 'https://www.facebook.com/dpmitsolution/'} className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href={siteSettings?.socialMedia?.instagram || 'https://www.instagram.com/dpmitsolutions/?hl=en'} className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a href={siteSettings?.socialMedia?.linkedin || 'https://in.linkedin.com/company/dpm-it-solutions-pvt-ltd'} className="bg-white text-blue-600 w-10 h-10 rounded-full flex items-center justify-center hover:bg-yellow-500 hover:text-white transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Form Modal */}
        <BookingPopup 
          isOpen={isPopupOpen} 
          onClose={() => setIsPopupOpen(false)} 
        />
      </div>
    </>
  );
};

export default Navbar;