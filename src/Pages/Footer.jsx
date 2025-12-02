import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [showQR, setShowQR] = useState(false);
  const currentYear = new Date().getFullYear();
  const [footerContent, setFooterContent] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/content/footer")
      .then(res => res.json())
      .then(json => setFooterContent(json.data));
  }, []);

  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "/about" },
    { name: "Contact", to: "/contact" },
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Terms & Conditions", to: "/terms-conditions" }
  ];

  const serviceLinks = [
    { name: "Website Development", to: "/services/website-development", icon: "fas fa-code" },
    { name: "Search Engine Optimisation", to: "/services/seo", icon: "fas fa-search" },
    { name: "Social Media Marketing", to: "/services/social-media-marketing", icon: "fas fa-share-alt" },
    { name: "Digital Marketing", to: "/services/digital-marketing", icon: "fas fa-bullhorn" },
    { name: "App Development", to: "/services/app-development", icon: "fas fa-mobile-alt" },
    { name: "Google My Business", to: "/services/google-my-business", icon: "fas fa-share-alt" }
  ];

  if (!footerContent) return null;

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Company Info */}
            <div className="space-y-6">
              <Link 
                to="/" 
                className="text-2xl font-bold inline-block"
                onClick={handleLinkClick}
              >
                {footerContent.companyInfo.name}
                <span style={{ color: "#F97316" }}>{footerContent.companyInfo.accentName}</span>
              </Link>
              <p className="text-gray-300 leading-relaxed">
                {footerContent.companyInfo.description}
              </p>
              
              {/* 3D Social Icons */}
              <div className="flex space-x-6">
                {footerContent.socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                    title={social.name}
                  >
                    <div className="relative transform transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                      {/* Main cube face */}
                      <div 
                        className={`w-14 h-14 ${social.bgColor} flex items-center justify-center text-white text-lg relative transition-all duration-500`}
                        style={{
                          clipPath: 'polygon(0 0, 100% 0, 85% 85%, 0 100%)',
                          filter: 'brightness(1)'
                        }}
                      >
                        <i className={`${social.icon} relative z-10 transition-transform duration-500 group-hover:scale-110`}></i>
                      </div>
                      
                      {/* Right side face */}
                      <div 
                        className={`absolute top-0 left-0 w-14 h-14 ${social.bgColor} opacity-0 group-hover:opacity-70 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2`}
                        style={{
                          clipPath: 'polygon(85% 0, 100% 15%, 100% 100%, 85% 85%)',
                          filter: 'brightness(0.8)'
                        }}
                      ></div>
                      
                      {/* Top face */}
                      <div 
                        className={`absolute top-0 left-0 w-14 h-14 ${social.bgColor} opacity-0 group-hover:opacity-50 transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2`}
                        style={{
                          clipPath: 'polygon(0 0, 85% 0, 100% 15%, 15% 15%)',
                          filter: 'brightness(1.2)'
                        }}
                      ></div>
                      
                      {/* Drop shadow */}
                      <div 
                        className="absolute -bottom-2 left-3 w-10 h-4 bg-black/0 group-hover:bg-black/30 rounded-full blur-sm transform transition-all duration-500 group-hover:scale-110"
                        style={{
                          transform: 'translateX(20%) skewX(-45deg)'
                        }}
                      ></div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Payment Methods Section - Desktop Only */}
              {footerContent.paymentSection?.enabled && (
                <div className="hidden lg:block mt-8 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg shadow-xl">
                  <div className="flex items-center gap-6">
                    <button
                      onClick={() => setShowQR(true)}
                      className={`${footerContent.paymentSection.buttonColor} px-5 py-2 rounded text-white font-semibold text-lg whitespace-nowrap hover:opacity-90 transition-opacity duration-300`}
                    >
                      {footerContent.paymentSection.buttonText}
                    </button>

                    <div className="flex items-center gap-3">
                      {footerContent.paymentSection.paymentMethods?.map((method, idx) => (
                        <div key={idx} className="bg-white px-4 py-1 rounded flex items-center justify-center min-w-[75px]">
                          <img src={method.image} alt={method.name} className="h-8 w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold" style={{ color: "#F97316" }}>Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    onClick={handleLinkClick}
                    className="flex items-center text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <i className="fas fa-angle-right mr-3" style={{ color: "#F97316" }}></i>
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold" style={{ color: "#F97316" }}>Our Services</h3>
              <div className="space-y-3">
                {serviceLinks.map((service, index) => (
                  <Link
                    key={index}
                    to={service.to}
                    onClick={handleLinkClick}
                    className="flex items-center text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300"
                  >
                    <i className={`${service.icon} mr-3`} style={{ color: "#F97316" }}></i>
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold" style={{ color: "#F97316" }}>Contact Us</h3>
              <div className="space-y-4">
                {footerContent.contactInfo.map((contact, index) => (
                  contact.link ? (
                    <a
                      key={index}
                      href={contact.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 pb-3 border-b border-gray-700"
                    >
                      <i className={`${contact.icon} mr-3 mt-1`} style={{ color: "#F97316" }}></i>
                      <div>
                        <div className="text-sm text-gray-400">{contact.title}</div>
                        <div>
                          {contact.title === "Call Us" ? (
                            <div className="flex flex-col gap-1">
                              <a href={`tel:${contact.phone1}`} className="hover:text-orange-500 transition-colors">{contact.phone1}</a>
                              <a href={`tel:${contact.phone2}`} className="hover:text-orange-500 transition-colors">{contact.phone2}</a>
                            </div>
                          ) : (
                            contact.content
                          )}
                        </div>
                      </div>
                    </a>
                  ) : (
                    <div
                      key={index}
                      className="flex items-start text-gray-300 pb-3 border-b border-gray-700"
                    >
                      <i className={`${contact.icon} mr-3 mt-1`} style={{ color: "#F97316" }}></i>
                      <div>
                        <div className="text-sm text-gray-400">{contact.title}</div>
                        <div>
                          {contact.title === "Call Us" ? (
                            <div className="flex flex-col gap-1">
                              <a href={`tel:${contact.phone1}`} className="hover:text-orange-500 transition-colors">{contact.phone1}</a>
                              <a href={`tel:${contact.phone2}`} className="hover:text-orange-500 transition-colors">{contact.phone2}</a>
                            </div>
                          ) : (
                            contact.content
                          )}
                        </div>
                      </div>
                    </div>
                  )
                ))}
              </div>

              {/* Payment Methods Section - Mobile Only (Below Email) */}
              {footerContent.paymentSection?.enabled && (
                <div className="block lg:hidden mt-6 bg-gradient-to-r from-blue-900 to-purple-900 p-3 rounded-lg shadow-xl">
                  <div className="space-y-3">
                    <button
                      onClick={() => setShowQR(true)}
                      className={`w-full ${footerContent.paymentSection.buttonColor} px-4 py-2 rounded text-white font-bold text-xs text-center mb-3 hover:opacity-90 transition-opacity duration-300`}
                    >
                      {footerContent.paymentSection.buttonText}
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      {footerContent.paymentSection.paymentMethods?.map((method, idx) => (
                        <div key={idx} className="bg-white px-2 py-1 rounded flex items-center justify-center">
                          <img src={method.image} alt={method.name} className="h-6 w-auto object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-gray-700 pt-5">
            <div className="text-center text-gray-300 text-sm">
              <span>
                {footerContent.copyright.text.replace('{currentYear}', currentYear)}{" "}
                <Link 
                  to={footerContent.copyright.googlePromotionLink.to}
                  onClick={handleLinkClick}
                  className="text-orange-500 hover:underline hover:text-orange-400 transition"
                >
                  {footerContent.copyright.googlePromotionLink.text}
                </Link>{" "}
                {footerContent.copyright.endingText}
              </span>
            </div>
          </div>
        </div>
      </footer>

      {/* QR Code Modal */}
      {showQR && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setShowQR(false)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-md w-full relative transform transition-all duration-300 scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowQR(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
            <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Scan QR Code to Pay
            </h3>
            <div className="bg-gray-100 p-6 rounded-lg flex items-center justify-center mb-6">
              <div className="bg-white p-4 rounded-lg shadow-lg">
                {footerContent.paymentSection?.qrCodeImage ? (
                  <img 
                    src={footerContent.paymentSection.qrCodeImage} 
                    alt="QR Code" 
                    className="w-64 h-64 object-contain"
                  />
                ) : (
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <i className="fas fa-qrcode text-white text-8xl"></i>
                  </div>
                )}
              </div>
            </div>
            <div className="text-center space-y-2">
              <p className="text-gray-700 font-semibold">Accepted Payment Methods</p>
              <div className="flex justify-center gap-4 flex-wrap">
                {footerContent.paymentSection?.paymentMethods?.map((method, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-100 rounded text-sm font-semibold">
                    {method.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;