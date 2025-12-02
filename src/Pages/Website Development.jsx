import React, { useEffect, useState } from 'react';
import { Code, Palette, Smartphone, Zap, CheckCircle, Star, ArrowRight, Monitor, Users, Award, Cpu, Database, Server, Layers, Shield, ShoppingCart, Utensils, Gamepad2, GraduationCap, Building2, Heart, Briefcase, Music, Globe, RefreshCw, FileText, Target, Search, Sparkles } from 'lucide-react';

const WebsiteDevelopment = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/content/website-development")
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setData(json.data);
      })
      .catch((err) => console.error('API Error:', err))
      .finally(() => setLoading(false));
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
  }, [data]);

  // Icon mapping function
  const getIcon = (iconName, size = 28) => {
    const icons = {
      Globe: <Globe size={size} />,
      Zap: <Zap size={size} />,
      Smartphone: <Smartphone size={size} />,
      RefreshCw: <RefreshCw size={size} />,
      FileText: <FileText size={size} />,
      Target: <Target size={size} />,
      Search: <Search size={size} />,
      Sparkles: <Sparkles size={size} />,
      Monitor: <Monitor size={size} />,
      Users: <Users size={size} />,
      Code: <Code size={size} />
    };
    return icons[iconName] || <Globe size={size} />;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-gray-600 font-semibold">No Data Found</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-x-hidden">
        {/* Main Header Image */}
        <div className="relative h-80 md:h-94 w-full overflow-hidden">
          {/* Desktop Image */}
          <img 
            src={data.headerImages?.desktop || "/assets/webdev.jpg"}
            alt="Website Development Header" 
            className="hidden md:block w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.backgroundColor = '#f3f4f6';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%)';
            }}
          />

          {/* Mobile Image */}
          <img 
            src={data.headerImages?.mobile || "/assets/mobileweb.jpg"}
            alt="Website Development Mobile Header" 
            className="block md:hidden w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.backgroundColor = '#f3f4f6';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 50%, #f3e8ff 100%)';
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/40 to-purple-900/40"></div>
        </div>

        {/* Scrolling Website Types Section */}
        <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 py-1 overflow-hidden shadow-lg">
          <div className="relative">
            <div className="flex scroll-container">
              {[...Array(2)].map((_, setIndex) => (
                <div key={setIndex} className="flex space-x-6 px-3">
                  {data.websiteTypes?.map((item, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer 
                                border border-white/30 bg-transparent backdrop-blur-sm"
                    >
                      <div className="text-white">
                        {getIcon(item.icon, 28)}
                      </div>
                      <span className="text-white font-bold text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Website Development Section */}
        <div className="max-w-7xl mx-auto px-4 py-10 relative">
          <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent border-l-4 border-blue-500 pl-4">
                  {data.headerContent?.title || "Professional Website Development"}
                </h2>
                <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                  {data.headerContent?.descriptions?.map((desc, index) => (
                    <p key={index} className={`animate-on-scroll slide-from-right stagger-${index + 1}`}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Actual Image */}
            <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
              <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={data.headerContent?.image || "/assets/webdev1.jpg"}
                alt="Website Development"
                className="w-full h-92 rounded-2xl shadow-2xl border-2 border-white/50 relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="bg-gradient-to-br from-blue-100 via-white to-purple-100 p-8 rounded-2xl shadow-2xl border-2 border-white/50 h-full flex items-center justify-center relative z-10">
                      <div class="text-center text-gray-500">
                        <div class="text-blue-600 mx-auto mb-4">💻</div>
                        <p>Website Development</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>

        {/* Our Development Expertise Section */}
        <div className="bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 relative z-10">
            <div className="text-center mb-12 animate-on-scroll slide-from-right">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent inline-block border-l-4 border-blue-500 pl-4">
                {data.servicesSection?.title || "Our Website Development Services"}
              </h2>
              <p className="text-xl text-gray-700 mt-4 max-w-3xl mx-auto font-medium">
                {data.servicesSection?.subtitle || "We build different types of websites to meet your business needs"}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.servicesData?.map((service, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-blue-600/10 backdrop-blur-md p-8 rounded-2xl shadow-xl border-2 border-blue-300/30 hover:border-purple-400/50 hover:shadow-2xl hover:scale-105 transition-all duration-300 animate-on-scroll slide-from-right group">
                  <div className={`bg-gradient-to-br ${service.gradient} p-3 rounded-xl inline-block mb-4 text-white group-hover:scale-110 transition-transform shadow-lg`}>
                    {getIcon(service.icon, 40)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-800 leading-relaxed font-medium">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Our Development Process */}
        <div className="max-w-7xl mx-auto px-4 py-10 relative">
          <div className="absolute bottom-20 left-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Side - Actual Image */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="absolute -top-4 -left-4 w-full h-full bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl opacity-20 blur-xl"></div>
              <img 
                src={data.processContent?.image || "/assets/webdev2.jpg"}
                alt="Website Development Process"
                className="w-full h-120 rounded-2xl shadow-2xl border-2 border-white/50 relative z-10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="bg-gradient-to-br from-purple-100 via-white to-blue-100 p-8 rounded-2xl shadow-2xl border-2 border-white/50 h-full flex items-center justify-center relative z-10">
                      <div class="text-center text-gray-500">
                        <div class="text-blue-600 mx-auto mb-4">🏆</div>
                        <p>Development Process</p>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>

           {/* Right Side - Content */}
<div className="space-y-3 animate-on-scroll slide-from-right pb-4">     

  <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-purple-700 bg-clip-text text-transparent border-l-4 border-blue-500 pl-4">
    {data.processContent?.title || "Our Website Development Process"}
  </h2>

  <div className="space-y-2 text-gray-700 font-semibold leading-relaxed">
    {data.processContent?.descriptions?.map((desc, index) => (
      <p key={index} className="p-3 rounded-lg bg-transparent">
        {desc}
      </p>
    ))}
  </div>

  {/* 🔥 Gap reduced here */}
  <div className="space-y-2 p-3 rounded-xl backdrop-blur-sm">
    {data.processSteps?.map((step, index) => (
      <div 
        key={index}
        className="flex items-center space-x-3 hover:translate-x-1 transition"
      >
        <CheckCircle size={20} className="text-green-500" />
        <span className="text-gray-700 font-medium">{step}</span>
      </div>
    ))}
  </div>

</div>
</div>
</div>


        {/* Technology Stack */}
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
                    {data.technologyContent?.title || "Our Technology Approach"}
                  </h2>
                  {data.technologyContent?.descriptions?.map((desc, index) => (
                    <p key={index} className={`animate-on-scroll slide-from-right stagger-${index + 1}`}>
                      {desc}
                    </p>
                  ))}
                </div>
              </div>

              {/* Right Side - Technology Images */}
              <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
                <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-400 to-purple-400 rounded-2xl opacity-20 blur-xl"></div>
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border-2 border-white/50 h-96 relative z-10">
                  <div className="text-center space-y-6 flex flex-col justify-center h-full">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg mx-auto">
                      <Code className="text-white" size={36} />
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      {data.technologies?.map((tech, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg hover:shadow-lg hover:scale-105 transition-all shadow-sm border border-white/50 overflow-hidden flex items-center justify-center"
                        >
                          <img
                            src={tech.img}
                            alt={tech.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<div class="text-xs text-gray-600 p-2">${tech.name}</div>`;
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-600 text-sm mt-4 font-medium">
                      {data.technologyContent?.footer || "Modern web technologies for powerful solutions"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebsiteDevelopment;