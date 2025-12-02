import React, { useEffect, useState } from 'react';
import { Users, MessageCircle, TrendingUp, Target, BarChart3, Star, Instagram, Facebook, Linkedin, Twitter, Youtube, Zap } from 'lucide-react';

const SocialMediaMarketing = () => {
  const [smData, setSmData] = useState(null);
  const [loading, setLoading] = useState(true);

  // API call
  useEffect(() => {
    fetch("http://localhost:5000/api/content/social-media-marketing")
      .then((res) => res.json())
      .then((res) => {
        setSmData(res.data);      // ⚠️ Main point: res.data
        setLoading(false);
      })
      .catch((err) => {
        console.error("SMM API error:", err);
        setLoading(false);
      });
  }, []);

  // Icon mapping
  const iconMap = {
    Facebook,
    Instagram,
    Linkedin,
    Twitter,
    Youtube,
    TrendingUp,
    Target,
    Zap,
    Users,
    MessageCircle,
    Star,
    BarChart3,
  };

  const getIcon = (iconName) => {
    return iconMap[iconName] || Zap;
  };

  // Animations observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, 
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [smData]);

  // Loading UI
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading Social Media Marketing content...</p>
        </div>
      </div>
    );
  }

  // Banner images
  const desktopBanner = smData?.headerImages?.desktop || "/assets/Social-Media-Post.png";
  const mobileBanner = smData?.headerImages?.mobile || "/assets/mobile social.jpeg";

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 overflow-x-hidden">
        
        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          
          .scroll-container {
            animation: scroll 10s linear infinite;
            will-change: transform;
            transform: translate3d(0, 0, 0);
          }
          
          .scroll-container:hover {
            animation-play-state: paused;
          }

          .animate-on-scroll {
            opacity: 0;
            transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          }

          .slide-from-right {
            transform: translateX(100px);
          }

          .slide-from-bottom {
            transform: translateY(50px);
          }

          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }

          .stagger-1 { transition-delay: 0.1s; }
          .stagger-2 { transition-delay: 0.2s; }
          .stagger-3 { transition-delay: 0.3s; }

          @media (max-width: 768px) {
            .scroll-container {
              animation: scroll 4s linear infinite;
            }
          }
        `}</style>

        {/* Main Header Image */}
        <div className="relative h-78 md:h-90 w-full overflow-hidden">
          {/* Desktop Banner */}
          <img 
            src={desktopBanner}
            alt="Social Media Marketing Header" 
            className="hidden md:block w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          />

          {/* Mobile Banner */}
          <img 
            src={mobileBanner}
            alt="Mobile Social Media Banner" 
            className="block md:hidden w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60"></div>
        </div>

        {/* Scrolling Services Banner */}
        <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 py-1 overflow-hidden shadow-lg">
          <div className="relative">
            <div className="flex scroll-container">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-6 px-3">
                  {smData?.scrollingServices?.map((item, index) => {
                    const Icon = getIcon(item.icon);
                    return (
                      <div 
                        key={index} 
                        className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer border-2 border-purple-600"
                      >
                        <div className="text-white">
                          <Icon size={24} />
                        </div>
                        <span className="text-white font-bold text-base">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-right">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4 bg-white/50 py-2 rounded-r-lg">
                  {smData?.headerContent?.title || "Transform Your Brand with Social Media"}
                </h2>
                <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                  {(smData?.headerContent?.descriptions || []).map((text, i) => (
                    <p
                      key={i}
                      className={`animate-on-scroll slide-from-right stagger-${i + 1} bg-white/40 p-4 rounded-lg backdrop-blur-sm`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img 
                  src={smData?.whyChooseContent?.image || "/assets/Social-media-marketing-strategy.jpg"}
                  alt="Social Media Strategy"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <h2 className="text-4xl font-bold text-white border-l-4 border-purple-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Our Social Media Services
            </h2>
            <p className="text-xl text-purple-200 mt-4 max-w-3xl mx-auto">
              Comprehensive solutions to elevate your brand across all social platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {smData?.servicesData?.map((service, index) => {
              const Icon = getIcon(service.icon);
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-bottom hover:transform hover:-translate-y-2"
                >
                  <div className="text-purple-300 mb-4 flex justify-center">
                    <Icon size={40} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-white">
                    {service.title}
                  </h3>
                  <p className="text-purple-200 text-sm">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 rounded-3xl my-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Process Visual */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="relative p-8 rounded-2xl shadow-2xl h-96 flex items-center justify-center overflow-hidden">
                <img 
                  src={smData?.processContent?.image || "/assets/Social-Media-Strategy-Plan.jpg"}
                  alt="Social Media Process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-blue-900 border-l-4 border-blue-600 pl-4 bg-white/50 py-2 rounded-r-lg">
                  {smData?.processContent?.title || "Our Marketing Process"}
                </h2>
                <div className="space-y-4 text-gray-800 font-semibold leading-relaxed">
                  {(smData?.processContent?.descriptions || []).map((text, i) => (
                    <p
                      key={i}
                      className={`animate-on-scroll slide-from-right stagger-${i + 1} bg-white/40 p-4 rounded-lg backdrop-blur-sm`}
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 rounded-3xl my-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Features */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="bg-gradient-to-br from-purple-600 to-pink-700 p-8 rounded-2xl shadow-2xl border border-purple-400/30 h-96">
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto backdrop-blur-sm">
                    <TrendingUp className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Platform Expertise</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['Facebook', 'Instagram', 'LinkedIn', 'Twitter', 'YouTube', 'Pinterest'].map((platform, i) => (
                      <div key={i} className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-center text-white backdrop-blur-sm">
                        {platform}
                      </div>
                    ))}
                  </div>
                  <p className="text-purple-200 text-sm">Master every social platform for maximum reach</p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-white font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-white border-l-4 border-purple-400 pl-4 bg-white/10 py-2 rounded-r-lg">
                  {smData?.whyChooseContent?.title || "Why Choose DPM IT Solutions?"}
                </h2>
                {(smData
                  ? [
                      smData.whyChooseContent?.description,
                      ...(smData.whyChooseContent?.additionalDescriptions || []),
                    ].filter(Boolean)
                  : []
                ).map((text, i) => (
                  <p
                    key={i}
                    className={`animate-on-scroll slide-from-right stagger-${i + 1} bg-white/10 p-4 rounded-lg backdrop-blur-sm`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-r from-blue-900 via-purple-900 to-pink-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <h2 className="text-4xl font-bold text-white border-l-4 border-purple-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Our Impact
            </h2>
            <p className="text-xl text-purple-200 mt-4 max-w-3xl mx-auto">
              Results that demonstrate our commitment to driving social media success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {smData?.whyChooseContent?.stats?.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-bottom hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-purple-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default SocialMediaMarketing;