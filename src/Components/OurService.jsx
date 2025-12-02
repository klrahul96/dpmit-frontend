import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesSection = () => {
  const [servicesData, setServicesData] = useState(null);
  const [services, setServices] = useState([]);
  const [activeService, setActiveService] = useState(0);
  const [visibleServices, setVisibleServices] = useState(new Set());
  const [isLeftScrollComplete, setIsLeftScrollComplete] = useState(false);
  const sectionRef = useRef(null);
  const serviceRefs = useRef([]);
  const contentRef = useRef(null);
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // 🔥 Fetch Data from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/content/services")
      .then(res => res.json())
      .then(data => {
        if (data.success && data.data && data.data.services && data.data.services.length > 0) {
          setServicesData(data.data);
          setServices(data.data.services);
        } else {
          // Fallback to default data
          setServicesData({
            sectionSubtitle: "Our Services",
            sectionTitle: "Services Built Specifically",
            sectionTitleHighlight: "For Your Business",
            sectionDescription: "Comprehensive digital solutions that drive growth and deliver exceptional results",
            services: [
              {
                icon: "fa fa-globe",
                title: "Website Development",
                description: "Transform your business with stunning, responsive websites that captivate your audience and drive conversions. Our expert developers create fast-loading, mobile-optimized sites that establish your powerful online presence.",
                features: ["Responsive Design", "Fast Loading Speed", "Mobile Optimized", "SEO Ready"],
                highlights: ["Modern UI/UX Design", "Cross-browser Compatibility", "Performance Optimization", "Custom Functionality"],
                image: "/assets/code.jpg",
                path: "/services/website-development"
              },
              {
                icon: "fa fa-search",
                title: "Search Engine Optimization",
                description: "Dominate search results and attract quality leads with our proven SEO strategies. We boost your website's visibility on Google and other major search engines through comprehensive optimization techniques.",
                features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
                highlights: ["Local SEO Optimization", "Competitor Analysis", "Link Building Strategy", "Performance Tracking"],
                image: "/assets/seopa.jpg",
                path: "/services/seo"
              },
              {
                icon: "fa fa-share-alt",
                title: "Social Media Marketing",
                description: "Build brand awareness and engage your audience across all major social platforms. Our targeted campaigns convert followers into loyal customers through strategic content and community building.",
                features: ["Content Creation", "Audience Targeting", "Campaign Management", "Analytics"],
                highlights: ["Platform-specific Strategy", "Influencer Partnerships", "Community Management", "ROI Optimization"],
                image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
                path: "/services/social-media-marketing"
              },
              {
                icon: "fa fa-map-marker-alt", 
                title: "Google My Business",
                description: "Optimize your local business presence and help customers find you easily. Our professional GMB management increases your local visibility and drives more foot traffic to your business.",
                features: ["Local SEO", "Review Management", "Business Optimization", "Local Listings"],
                highlights: ["Google Maps Optimization", "Customer Review Strategy", "Local Citation Building", "Competitor Monitoring"],
                image: "/assets/gmbimage.jpg",
                path: "/services/google-my-business"
              },
              {
                icon: "fa fa-bullhorn",
                title: "Digital Marketing",
                description: "Comprehensive digital marketing solutions that drive growth and maximize ROI. From PPC campaigns to email marketing, we create integrated strategies that deliver measurable results.",
                features: ["PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Conversion Optimization"],
                highlights: ["Multi-channel Strategy", "A/B Testing & Optimization", "Customer Journey Mapping", "Performance Analytics"],
                image: "/assets/7_digital_skills.png",
                path: "/services/digital-marketing"
              },
              {
                icon: "fa fa-mobile-alt",
                title: "App Development", 
                description: "Create powerful mobile applications that provide seamless user experiences and drive business growth. We develop custom apps for iOS and Android platforms with cutting-edge technology.",
                features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"],
                highlights: ["Native Performance", "Cloud Integration", "Push Notifications", "App Store Optimization"],
                image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
                path: "/services/app-development"
              }
            ]
          });
          setServices([
            {
              icon: "fa fa-globe",
              title: "Website Development",
              description: "Transform your business with stunning, responsive websites that captivate your audience and drive conversions. Our expert developers create fast-loading, mobile-optimized sites that establish your powerful online presence.",
              features: ["Responsive Design", "Fast Loading Speed", "Mobile Optimized", "SEO Ready"],
              highlights: ["Modern UI/UX Design", "Cross-browser Compatibility", "Performance Optimization", "Custom Functionality"],
              image: "/assets/code.jpg",
              path: "/services/website-development"
            },
            {
              icon: "fa fa-search",
              title: "Search Engine Optimization",
              description: "Dominate search results and attract quality leads with our proven SEO strategies. We boost your website's visibility on Google and other major search engines through comprehensive optimization techniques.",
              features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
              highlights: ["Local SEO Optimization", "Competitor Analysis", "Link Building Strategy", "Performance Tracking"],
              image: "/assets/seopa.jpg",
              path: "/services/seo"
            },
            {
              icon: "fa fa-share-alt",
              title: "Social Media Marketing",
              description: "Build brand awareness and engage your audience across all major social platforms. Our targeted campaigns convert followers into loyal customers through strategic content and community building.",
              features: ["Content Creation", "Audience Targeting", "Campaign Management", "Analytics"],
              highlights: ["Platform-specific Strategy", "Influencer Partnerships", "Community Management", "ROI Optimization"],
              image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
              path: "/services/social-media-marketing"
            },
            {
              icon: "fa fa-map-marker-alt", 
              title: "Google My Business",
              description: "Optimize your local business presence and help customers find you easily. Our professional GMB management increases your local visibility and drives more foot traffic to your business.",
              features: ["Local SEO", "Review Management", "Business Optimization", "Local Listings"],
              highlights: ["Google Maps Optimization", "Customer Review Strategy", "Local Citation Building", "Competitor Monitoring"],
              image: "/assets/gmbimage.jpg",
              path: "/services/google-my-business"
            },
            {
              icon: "fa fa-bullhorn",
              title: "Digital Marketing",
              description: "Comprehensive digital marketing solutions that drive growth and maximize ROI. From PPC campaigns to email marketing, we create integrated strategies that deliver measurable results.",
              features: ["PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Conversion Optimization"],
              highlights: ["Multi-channel Strategy", "A/B Testing & Optimization", "Customer Journey Mapping", "Performance Analytics"],
              image: "/assets/7_digital_skills.png",
              path: "/services/digital-marketing"
            },
            {
              icon: "fa fa-mobile-alt",
              title: "App Development", 
              description: "Create powerful mobile applications that provide seamless user experiences and drive business growth. We develop custom apps for iOS and Android platforms with cutting-edge technology.",
              features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"],
              highlights: ["Native Performance", "Cloud Integration", "Push Notifications", "App Store Optimization"],
              image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
              path: "/services/app-development"
            }
          ]);
        }
      })
      .catch(err => {
        console.log("Services Fetch Error → ", err);
      });
  }, []);

  // 🔥 Scroll functionality
  useEffect(() => {
    if (services.length === 0) return;
    const handleScroll = () => {
      if (containerRef.current && sectionRef.current) {
        const lastService = serviceRefs.current[services.length - 1];
        if (lastService) {
          const lastServiceRect = lastService.getBoundingClientRect();
          const isComplete = lastServiceRect.bottom <= window.innerHeight * 0.3;
          setIsLeftScrollComplete(isComplete);
        }
      }
    };
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [services.length]);

  // 🔥 Active card detection
  useEffect(() => {
    if (services.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.dataset.index);
          if (entry.isIntersecting) {
            setVisibleServices(prev => new Set([...prev, index]));
            setActiveService(index);
          }
        });
      },
      {
        threshold: 0.4,
        rootMargin: '-20% 0px -20% 0px'
      }
    );
    serviceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => {
      serviceRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [services.length]);

  const handleServiceClick = (service) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => navigate(service.path), 300);
  };

  // 🔥 Loading State
  if (!servicesData || services.length === 0) {
    return (
      <div className="py-20 text-center text-gray-600 text-xl">
        Loading Services...
      </div>
    );
  }

  const currentService = services[activeService];

  return (
    <div 
      className="min-h-screen" 
      style={{ backgroundColor: "#FFF7F2" }} 
      ref={containerRef}
    >
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <div className="container mx-auto px-4 py-8 lg:py-10">

        {/* 🔥 Section Header — dynamic from backend */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-20">
          <h5 className="text-blue-600 text-lg lg:text-xl font-semibold mb-3 lg:mb-4 tracking-wide uppercase">
            {servicesData.sectionSubtitle}
          </h5>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 lg:mb-6 leading-tight">
            {servicesData.sectionTitle} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              {servicesData.sectionTitleHighlight}
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-gray-600 leading-relaxed px-4 lg:px-0">
            {servicesData.sectionDescription}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* LEFT SIDE "SERVICES LIST" */}
          <div className="lg:col-span-1 col-span-2 space-y-6 lg:space-y-16" ref={sectionRef}>
            {services.map((service, index) => {
              const isActive = activeService === index;
              const isVisible = visibleServices.has(index);
              return (
                <div
                  key={index}
                  ref={(el) => (serviceRefs.current[index] = el)}
                  data-index={index}
                  className="group cursor-pointer"
                  style={{ minHeight: window.innerWidth < 1024 ? '180px' : '200px' }}
                  onClick={() => handleServiceClick(service)}
                >
                  <div className={`relative p-4 lg:p-8 rounded-xl lg:rounded-2xl border-2 transition-all duration-700 overflow-hidden ${
                    isActive 
                      ? 'border-blue-400/50 shadow-xl lg:shadow-2xl shadow-blue-500/20 transform scale-102 lg:scale-105' 
                      : 'border-white/20 hover:border-blue-400/40 hover:shadow-lg lg:hover:shadow-xl hover:shadow-blue-500/10 hover:transform hover:scale-101 lg:hover:scale-102'
                  }`}>
                    <div 
                      className="absolute inset-0 transition-opacity duration-700"
                      style={{ backgroundImage: `url(${service.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    ></div>
                    
                    <div className={`absolute inset-0 transition-all duration-700 ${
                      isActive 
                        ? 'bg-gradient-to-br from-black/70 via-blue-900/60 to-blue-900/60' 
                        : 'bg-gradient-to-br from-black/80 via-gray-900/75 to-black/80 group-hover:from-black/70 group-hover:via-blue-900/65 group-hover:to-blue-900/65'
                    }`}></div>

                    <div className={`absolute left-0 top-0 h-full w-1.5 bg-gradient-to-b from-blue-400 to-purple-500 transition-all duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}></div>

                    <div className="flex items-start space-x-3 lg:space-x-6 relative z-10">
                      <div className={`flex-shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-lg lg:rounded-xl flex items-center justify-center transition-all duration-700 transform backdrop-blur-sm ${
                        isActive 
                          ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white scale-105 lg:scale-110 shadow-lg shadow-blue-500/50' 
                          : 'bg-white/20 text-white border border-white/30 group-hover:bg-white/30 group-hover:scale-105'
                      }`}>
                        <i className={`${service.icon} text-lg lg:text-2xl`}></i>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg lg:text-2xl font-bold mb-2 transition-colors duration-700 ${
                          isActive ? 'text-white drop-shadow-lg' : 'text-white group-hover:text-blue-200'
                        }`}>{service.title}</h3>
                        
                        <p className={`text-sm lg:text-base leading-relaxed transition-colors duration-700 mb-3 lg:mb-4 ${
                          isActive ? 'text-gray-100' : 'text-gray-300 group-hover:text-gray-200'
                        }`}>{service.description}</p>
                        
                        <div className="flex flex-wrap gap-1.5 lg:gap-2">
                          {service.features.map((feature, idx) => (
                            <span key={idx} className={`px-2 lg:px-3 py-1 rounded-full text-xs lg:text-sm font-medium transition-all duration-700 backdrop-blur-sm ${
                              isActive
                                ? 'bg-blue-500/40 text-white border border-blue-400/50'
                                : 'bg-white/20 text-gray-200 border border-white/30 group-hover:bg-white/30 group-hover:text-white'
                            }`}>
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className={`flex-shrink-0 transition-all duration-700 transform ${
                        isActive ? 'text-blue-300 scale-110 lg:scale-125 translate-x-1 lg:translate-x-2' : 'text-white/60 group-hover:text-white group-hover:translate-x-0.5 lg:group-hover:translate-x-1'
                      }`}>
                        <i className="fas fa-chevron-right text-sm lg:text-lg"></i>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT SIDE */}
          <div className={`hidden lg:block transition-all duration-500 ${isLeftScrollComplete ? 'relative' : 'lg:sticky lg:top-8'}`}>
            <div className={`rounded-2xl shadow-xl p-6 border-2 border-white/20 overflow-hidden relative transition-all duration-1000 transform backdrop-blur-sm ${
              visibleServices.has(activeService) ? 'translate-y-0 opacity-100' : 'translate-y-[-30px] opacity-0'
            }`} ref={contentRef}>
              
              <div 
                className="absolute inset-0"
                style={{ backgroundImage: `url(${currentService.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              ></div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/75 via-blue-900/70 to-blue-900/70"></div>

              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/30 to-blue-500/30 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/30 to-blue-500/30 rounded-full blur-3xl transform -translate-x-16 translate-y-16"></div>
              
              <div className="relative z-10">
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/50 ${
                    visibleServices.has(activeService) ? 'scale-100' : 'scale-90'
                  } transition-transform duration-700`}>
                    <i className={`${currentService.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white drop-shadow-lg">{currentService.title}</h2>
                    <p className="text-xs text-blue-300 font-medium">Service {activeService + 1} of {services.length}</p>
                  </div>
                </div>

                <p className="text-gray-200 text-sm mb-4 leading-relaxed">{currentService.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-2"></span>
                    Key Features
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentService.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1.5 bg-white/10 backdrop-blur-sm text-white text-xs rounded-full border border-white/20 hover:bg-white/20 transition-all">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-white mb-2 flex items-center">
                    <span className="w-8 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 mr-2"></span>
                    Highlights
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-200">
                    {currentService.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start backdrop-blur-sm bg-white/5 p-2 rounded-lg border border-white/10">
                        <i className="fas fa-check text-blue-400 text-xs mr-2 mt-0.5"></i>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button 
                  onClick={() => handleServiceClick(currentService)}
                  className="mt-6 w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Learn More
                  <i className="fas fa-arrow-right ml-2"></i>
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;