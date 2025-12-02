import React, { useState, useEffect } from 'react';
import { MapPin, Star, Search, TrendingUp, CheckCircle, Users, Award, Phone, Globe, Mail, Calendar, MessageSquare, Clock, Navigation, Image, ShieldCheck, BarChart3, Target, Zap, Building2, UserCheck, ThumbsUp } from 'lucide-react';

const GoogleMyBusiness = () => {
  const [data, setData] = useState({
    headerContent: {
      title: "Google My Business Optimization",
      descriptions: [
        "Transform your local online presence with professional Google My Business management. We help businesses appear prominently in local searches, Google Maps, and drive more foot traffic to your location.",
        "Our comprehensive GMB services ensure your business stands out with optimized profiles, engaging posts, review management, and detailed insights that convert searches into customers."
      ],
      image: "/assets/main-banner.jpg",
      sideImage: "/assets/googlemybusiness.jpg"
    },
    servicesSection: {
      title: "Comprehensive GMB Solutions",
      subtitle: "Everything you need to dominate local search and attract more customers"
    },
    servicesData: [
      {
        icon: "ShieldCheck",
        title: "Profile Setup & Verification",
        description: "Complete business profile creation and Google verification",
        gradient: "#3b82f6, #8b5cf6"
      },
      {
        icon: "Target",
        title: "Local SEO Optimization",
        description: "Optimize your profile to rank higher in local searches",
        gradient: "#8b5cf6, #ec4899"
      },
      {
        icon: "Star",
        title: "Review Management",
        description: "Monitor and respond to customer reviews professionally",
        gradient: "#ec4899, #f59e0b"
      },
      {
        icon: "BarChart3",
        title: "Performance Analytics",
        description: "Track insights and improve your business visibility",
        gradient: "#f59e0b, #10b981"
      }
    ],
    processContent: {
      title: "Our GMB Management Process",
      descriptions: [
        "We follow a systematic approach to ensure your Google My Business profile delivers maximum results. Our process is designed to enhance your local visibility and drive meaningful customer engagement.",
        "From initial setup to ongoing optimization, we handle every aspect of your GMB presence with expertise and attention to detail."
      ],
      steps: [
        "Complete profile audit and optimization",
        "Business verification and claim process",
        "Regular posts and updates management",
        "Review monitoring and response strategy",
        "Photo and video content optimization",
        "Performance tracking and reporting",
        "Competitor analysis and insights",
        "Ongoing optimization and improvements"
      ],
      image: "/assets/googlemy.jpeg"
    },
    benefitsContent: {
      title: "Why Google My Business Matters",
      descriptions: [
        "Google My Business is crucial for local businesses. 46% of all Google searches are looking for local information, and having an optimized GMB profile can significantly increase your visibility.",
        "Businesses with complete GMB profiles are 2.7x more likely to be considered reputable by consumers. Don't miss out on the opportunity to connect with local customers actively searching for your services."
      ],
      image: "/assets/whygooglemybusiness.webp"
    },
    statsData: [
      {
        value: "46%",
        label: "Local Searches",
        color: "from-blue-600 to-blue-400"
      },
      {
        value: "88%",
        label: "Consumer Trust",
        color: "from-purple-600 to-purple-400"
      },
      {
        value: "2.7x",
        label: "More Credible",
        color: "from-pink-600 to-pink-400"
      },
      {
        value: "70%",
        label: "Visit After Search",
        color: "from-orange-600 to-orange-400"
      }
    ]
  });

  // Icon Map for Dynamic Icons
  const iconMap = {
    ShieldCheck,
    Target,
    Star,
    BarChart3
  };

  useEffect(() => {
    // Try to fetch from API, but continue with default data if it fails
    fetch("http://localhost:5000/api/content/google-my-business")
      .then(res => res.json())
      .then(json => {
        if (json.data) {
          setData(json.data);
        }
      })
      .catch(err => {
        console.log("Using default data:", err);
      });
  }, []);

  useEffect(() => {
    // Add CSS for animations
    const style = document.createElement('style');
    style.textContent = `
      .animate-on-scroll {
        opacity: 0;
        transform: translateX(100px);
        transition: all 0.8s ease-out;
      }
      
      .animate-on-scroll.animate-in {
        opacity: 1;
        transform: translateX(0);
      }
      
      .slide-from-right {
        transform: translateX(100px);
      }
      
      .slide-from-right.animate-in {
        transform: translateX(0);
      }
      
      .stagger-1 {
        transition-delay: 0.1s;
      }
      
      .stagger-2 {
        transition-delay: 0.2s;
      }
      
      .stagger-3 {
        transition-delay: 0.3s;
      }

      .scroll-container {
        animation: scroll 10s linear infinite;
        will-change: transform;
        transform: translate3d(0, 0, 0);
      }
      
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
      
      @media (max-width: 768px) {
        .scroll-container {
          animation: scroll 4s linear infinite;
        }
      }
    `;
    document.head.appendChild(style);

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

    return () => {
      observer.disconnect();
      document.head.removeChild(style);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
        {/* Main Header Image */}
        <div className="relative h-40 md:h-90 w-full overflow-hidden">
          <img 
            src={data?.headerContent?.image || "/assets/main-banner.jpg"} 
            alt="Google My Business Header" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/30 to-purple-900/30"></div>
        </div>

        {/* Scrolling GMB Features Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-1 overflow-hidden shadow-lg">
          <div className="relative">
            <div className="flex scroll-container">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-6 px-3">
                  {[
                    { icon: <MapPin size={28} />, text: "Local Search Visibility" },
                    { icon: <Star size={28} />, text: "Customer Reviews Management" },
                    { icon: <Image size={28} />, text: "Business Photos & Videos" },
                    { icon: <BarChart3 size={28} />, text: "Performance Insights" },
                    { icon: <MessageSquare size={28} />, text: "Customer Messaging" },
                    { icon: <Calendar size={28} />, text: "Posts & Updates" },
                    { icon: <Navigation size={28} />, text: "Location Optimization" },
                    { icon: <ShieldCheck size={28} />, text: "Profile Verification" }
                  ].map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer 
                                border border-white/30 bg-transparent backdrop-blur-sm"
                    >
                      <div className="text-white">
                        {item.icon}
                      </div>
                      <span className="text-white font-bold text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Google My Business Section */}
        <div className="max-w-7xl mx-auto px-4 py-8 relative">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent border-l-4 border-blue-500 pl-4">
                  {data?.headerContent?.title}
                </h2>
                {data?.headerContent?.descriptions?.map((p, i) => (
                  <p key={i} className="text-gray-700 mt-2">{p}</p>
                ))}
              </div>
            </div>

            {/* Right Side - Image */}
            <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 p-8 rounded-2xl shadow-2xl border-2 border-white/50 relative z-10 h-92 flex items-center justify-center overflow-hidden">
                <img 
                  src={data?.headerContent?.sideImage || "/assets/googlemybusiness.jpg"} 
                  alt="Google My Business Services" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Our GMB Services Section */}
        <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 py-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-on-scroll slide-from-right">
              <div className="inline-block mb-4">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-white px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                  Our Services
                </span>
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">
                {data?.servicesSection?.title}
              </h2>
              <p className="text-xl text-blue-100 mt-4 max-w-3xl mx-auto font-light leading-relaxed">
                {data?.servicesSection?.subtitle}
              </p>
            </div>

            {data?.servicesData && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {data.servicesData.map((service, index) => {
                  const Icon = iconMap[service.icon] || ShieldCheck;

                  return (
                    <div 
                      key={index} 
                      className={`group relative bg-white/10 backdrop-blur-xl shadow-2xl p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-500/50 animate-on-scroll slide-from-right stagger-${(index % 3) + 1}`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 to-purple-600/0 group-hover:from-blue-600/10 group-hover:to-purple-600/10 rounded-3xl transition-all duration-500"></div>
                      
                      <div className="relative z-10">
                        <div 
                          className="w-16 h-16 flex items-center justify-center rounded-2xl text-white shadow-2xl mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500"
                          style={{ background: `linear-gradient(135deg, ${service.gradient})` }}
                        >
                          <Icon size={32}/>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-blue-100 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Our GMB Process */}
        <div className="max-w-7xl mx-auto px-4 py-10 relative">
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side - Image */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl opacity-20 blur-xl"></div>
              <div className="bg-gradient-to-br from-white via-purple-50 to-blue-50 p-8 rounded-2xl shadow-2xl border-2 border-white/50 relative z-10 h-120 flex items-center justify-center overflow-hidden">
                <img 
                  src={data?.processContent?.image || "/assets/googlemy.jpeg"} 
                  alt="Google My Business Process" 
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-10 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent border-l-4 border-blue-500 pl-4">
                  {data?.processContent?.title}
                </h2>
                {data?.processContent?.descriptions?.map((p, i) => (
                  <p key={i} className="mt-10 text-gray-900 font-medium leading-relaxed">{p}</p>
                ))}
                
                <div className="space-y-3 mt-6 bg-transparent backdrop-blur-sm p-6 rounded-xl">
                  {data?.processContent?.steps?.map((item, index) => (
                    <div key={index} className="flex items-center space-x-3 animate-on-scroll slide-from-right group hover:translate-x-2 transition-transform">
                      <div className="bg-gradient-to-r from-green-400 to-green-500 p-1 rounded-full">
                        <CheckCircle className="text-white flex-shrink-0" size={20} />
                      </div>
                      <span className="text-gray-700 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-purple-50 via-blue-50 to-gray-50 py-10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Content */}
              <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-right">
                <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent border-l-4 border-blue-500 pl-4">
                    {data?.benefitsContent?.title}
                  </h2>
                  {data?.benefitsContent?.descriptions?.map((p, i) => (
                    <p key={i} className="mt-2 text-gray-700">{p}</p>
                  ))}
                </div>
              </div>

              {/* Right Side - Image */}
              <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-white/50 relative z-10 overflow-hidden">
                  <img 
                    src={data?.benefitsContent?.image || "/assets/whygooglemybusiness.webp"} 
                    alt="Why Google My Business Matters" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        {data?.statsData && (
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {data.statsData.map((box, i) => (
                  <div key={i} className="bg-white shadow-lg p-6 rounded-xl text-center hover:shadow-2xl transition-all">
                    <h1 className={`text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${box.color}`}>{box.value}</h1>
                    <p className="text-gray-700 mt-2 font-medium">{box.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GoogleMyBusiness;