import React, { useEffect, useState } from 'react';
import * as Icons from 'lucide-react';

const SEO = () => {
  const [seoData, setSeoData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      }
      
      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }

      @keyframes gradient {
        0%, 100% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradient 3s ease infinite;
      }

      @keyframes blob {
        0%, 100% {
          transform: translate(0, 0) scale(1);
        }
        33% {
          transform: translate(30px, -50px) scale(1.1);
        }
        66% {
          transform: translate(-20px, 20px) scale(0.9);
        }
      }

      .animate-blob {
        animation: blob 7s infinite;
      }

      .animation-delay-2000 {
        animation-delay: 2s;
      }

      .animation-delay-4000 {
        animation-delay: 4s;
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const speed = el.dataset.speed || 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    // Fetch API data
    const fetchSEOData = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/content/seo');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('API Data received:', data);
        setSeoData(data.data || data); // Handle both nested and direct responses
        setError(null);
      } catch (err) {
        console.error('Error fetching SEO data:', err);
        setError(err.message);
        setSeoData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchSEOData();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(style);
    };
  }, []);

  // Observe elements after they're rendered
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [seoData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading SEO content...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-900 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600 text-lg">Error loading content: {error}</p>
          <p className="text-gray-600 mt-2">Please check if the API is running at http://localhost:5000</p>
        </div>
      </div>
    );
  }

  const getIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={28} /> : <Icons.Search size={28} />;
  };

  const getServiceIcon = (iconName) => {
    const IconComponent = Icons[iconName];
    return IconComponent ? <IconComponent size={38} /> : <Icons.Search size={38} />;
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-blue-900 overflow-x-hidden relative">
       
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10">
          <div className="relative h-85 md:h-86 w-full overflow-hidden">
            <img src="/assets/banner-seo.webp" className="hidden md:block w-full h-full object-cover" alt="SEO Services Banner" />
            <img src="/assets/mobile seo.jpg" className="block md:hidden w-full h-full object-cover" alt="SEO Services Mobile Banner" />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
          </div>

          {/* Scrolling Services Bar */}
          {seoData && seoData.scrollingServices && seoData.scrollingServices.length > 0 && (
            <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 py-1 overflow-hidden shadow-lg">
              <div className="relative">
                <div className="flex scroll-container">
                  {[...Array(2)].map((_, setIndex) => (
                    <div key={setIndex} className="flex space-x-6 px-3">
                      {seoData.scrollingServices.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer border border-white/20 bg-white/10 backdrop-blur-sm">
                          <div className="text-white">{getIcon(item.icon)}</div>
                          <span className="text-white font-bold text-base">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Header */}
          <header className="py-5 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
              <h1 className="text-3xl md:text-5xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                {seoData?.headerContent?.title}
              </h1>
            </div>
          </header>

          {/* Strategic Section */}
          {seoData && seoData.strategicContent && (
            <section className="py-6 md:py-5 bg-gradient-to-r from-white/60 to-blue-50/60 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full filter blur-3xl opacity-10 parallax" data-speed="0.3"></div>
              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-300 rounded-full filter blur-3xl opacity-10 parallax" data-speed="0.5"></div>
              
              <div className="relative max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="order-2 lg:order-1 animate-on-scroll slide-from-right">
                    <div className="relative group">
                      <img src={seoData.strategicContent.image || "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"} alt="Strategic SEO" className="w-full h-93 object-cover rounded-2xl shadow-2xl ring-4 ring-white/50 transform group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <div className="absolute -top-4 -left-4 w-20 h-20 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                  </div>
                  <div className="order-1 lg:order-2 animate-on-scroll slide-from-right">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                      {seoData.strategicContent.title}
                    </h2>
                    <p className="text-xl text-gray-700 mb-6 leading-relaxed">
                      {seoData.strategicContent.description}
                    </p>
                    <div className="space-y-4">
                      {seoData.strategicContent.points && seoData.strategicContent.points.map((item, idx) => (
                        <div className="flex items-start space-x-3 animate-on-scroll slide-from-right group" key={idx} style={{animationDelay: `${idx * 0.1}s`}}>
                          <div className="w-7 h-7 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                            <span className="text-white text-lg font-semibold">✓</span>
                          </div>
                          <p className="text-gray-700 text-lg group-hover:text-blue-600 transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Why Choose Section */}
          {seoData && seoData.whyChooseContent && (
            <section className="py-10 bg-gradient-to-l from-white/60 to-purple-50/60 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-300 rounded-full filter blur-3xl opacity-10 parallax" data-speed="0.4"></div>
              
              <div className="max-w-7xl mx-auto px-4 relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="animate-on-scroll slide-from-right">
                    <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                      {seoData.whyChooseContent.title}
                    </h2>
                    <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                      {seoData.whyChooseContent.description}
                    </p>
                    <div className="grid grid-cols-2 gap-6">
                      {seoData.whyChooseContent.stats && seoData.whyChooseContent.stats.map((item, idx) => (
                        <div key={idx} className="text-center p-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl animate-on-scroll slide-from-right hover:scale-110 hover:-rotate-2 transition-all duration-300 border border-gray-100 group cursor-pointer" style={{animationDelay: `${idx * 0.1}s`}}>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform`}>{item.value}</div>
                          <p className="text-base text-gray-600">{item.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="animate-on-scroll slide-from-right">
                    <div className="relative group">
                      <img src={seoData.whyChooseContent.image || "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80"} alt="SEO Analytics" className="w-full h-115 object-cover rounded-2xl shadow-2xl ring-4 ring-white/50 transform group-hover:scale-105 transition-transform duration-500" />
                      <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                      <div className="absolute -top-6 -left-6 w-24 h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Services Grid */}
          {seoData && seoData.seoServices && seoData.seoServices.length > 0 && (
            <section className="py-8 md:py-10 relative bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_left,_#60a5fa,_transparent_60%)]"></div>
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_right,_#c084fc,_transparent_60%)]"></div>

              <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16 animate-on-scroll slide-from-right">
                  <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    Our{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient">
                      SEO Services
                    </span>
                  </h2>
                  <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                    Comprehensive SEO solutions tailored to boost your online visibility and drive organic growth.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                  {seoData.seoServices.map((service, idx) => (
                    <div
                      key={idx}
                      className="relative group rounded-2xl p-8 shadow-lg 
                                bg-blue-900 border border-blue-800 
                                hover:bg-blue-800 transition-all duration-500 
                                hover:-translate-y-2 hover:shadow-2xl animate-on-scroll slide-from-right"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div
                        className={`relative w-16 h-16 bg-gradient-to-r ${service.gradient} 
                                    rounded-xl flex items-center justify-center mb-6 
                                    shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform`}
                      >
                        <span className="text-white">{getServiceIcon(service.icon)}</span>
                      </div>

                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition">
                        {service.title}
                      </h3>

                      <p className="text-blue-100 leading-relaxed">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/*  Comprehensive SEO Section — Admin Panel sync */}
          {seoData?.comprehensiveContent && (
            <section className="py-10 bg-blue-200">
              <div className="max-w-7xl mx-auto px-6">

                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
                  {seoData.comprehensiveContent.title}
                </h2>

                <p className="text-xl text-gray-800 text-center max-w-3xl mx-auto mb-10">
                  {seoData.comprehensiveContent.description}
                </p>

                <div className="space-y-6">
                  {seoData.comprehensiveContent.sections?.map((sec, index) => (
                    <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition">
                      <h3 className="text-xl font-bold text-gray-900">{sec.title}</h3>
                      <p className="text-gray-800">{sec.content}</p>
                    </div>
                  ))}
                </div>

              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default SEO;