import React, { useEffect, useState } from 'react';
import {
  Search,
  TrendingUp,
  Target,
  BarChart3,
  CheckCircle,
  Globe,
  Users,
  Award,
  Zap,
  Eye,
  MousePointer,
  Activity,
  Smartphone,
  Mail,
  Share2,
  PenTool,
  ShoppingCart,
  Monitor,
  Megaphone,
  Lightbulb
} from 'lucide-react';
import * as Icons from 'lucide-react'; // for dynamic icons from API

const DigitalMarketingServices = () => {
  const [dmData, setDmData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // helper: icon name string -> lucide icon
  const getIcon = (iconName, size = 40) => {
    const IconComp = Icons[iconName];
    if (IconComp) return <IconComp size={size} />;
    return <Search size={size} />; // default fallback
  };

  // 1) API se data lana
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/content/digital-marketing');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        console.log('DM API:', json);
        setDmData(json.data || json);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setDmData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2) Scroll animation observer – data load hone ke baad elements par lagao
  useEffect(() => {
    if (!dmData) return;

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
  }, [dmData]);

  // 3) Loading / Error UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading Digital Marketing content...</p>
        </div>
      </div>
    );
  }

  if (error || !dmData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600 text-lg">Error loading content: {error || 'No data found'}</p>
          <p className="text-gray-600 mt-2">Please check if the API is running at http://localhost:5000</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
        {/* PAGE-SPECIFIC STYLES */}
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

        {/* 🔹 Main Header Image (API se) */}
        <div className="relative h-80 w-full overflow-hidden">
          <img
            src={dmData.headerImages?.desktop || '/assets/digital2.jpg'}
            alt="Digital Marketing Services Background"
            className="w-full h-full object-cover hidden md:block"
          />
          <img
            src={dmData.headerImages?.mobile || dmData.headerImages?.desktop || '/assets/digital2.jpg'}
            alt="Digital Marketing Services Background Mobile"
            className="w-full h-full object-cover md:hidden"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-purple-900/60"></div>
        </div>

        {/* 🔹 Scrolling Digital Marketing Services Banner (API: scrollingServices[]) */}
        {dmData.scrollingServices && dmData.scrollingServices.length > 0 && (
          <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 py-1 overflow-hidden shadow-lg">
            <div className="relative">
              <div className="flex scroll-container">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-6 px-3">
                    {dmData.scrollingServices.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-blue-900 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer border-2 border-blue-600"
                      >
                        <span className="text-white font-bold text-base">{item.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 🔹 Header Title (API: headerContent.title) */}
        <header className="bg-gradient-to-r from-blue-600 to-purple-600 py-4 shadow-xl">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold text-center text-white animate-on-scroll slide-from-bottom">
              {dmData.headerContent?.title || 'Complete Digital Marketing Solutions'}
            </h1>
          </div>
        </header>

        {/* 🔹 Digital Marketing Intro Section (API: headerContent.descriptions[]) */}
        <div className="max-w-7xl mx-auto px-4 py-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                  Accelerate Your Digital Growth
                </h2>
                <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                  {dmData.headerContent?.descriptions?.map((para, idx) => (
                    <p
                      key={idx}
                      className={`animate-on-scroll slide-from-right ${
                        idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3'
                      } bg-white/40 p-4 rounded-lg backdrop-blur-sm`}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Visual */}
            <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={dmData.headerImages?.desktop || '/assets/digital1.jpg'}
                  alt="Digital Marketing Growth"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Our Digital Marketing Services (API: servicesData[]) */}
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <h2 className="text-4xl font-bold text-white border-l-4 border-blue-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Our Digital Marketing Services
            </h2>
            <p className="text-xl text-blue-200 mt-4 max-w-3xl mx-auto">
              Comprehensive digital solutions to boost your online presence and drive business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dmData.servicesData?.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-bottom hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-300 mb-4 flex justify-center">
                  {getIcon(service.icon, 40)}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-blue-200 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Digital Marketing Process (API: processContent) */}
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-br from-white via-blue-50 to-indigo-100 rounded-3xl my-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-8 rounded-2xl shadow-2xl h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={dmData.processContent?.image || '/assets/digital2.jpg'}
                  alt="Digital Marketing Process"
                  className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                  {dmData.processContent?.title || 'Our Digital Marketing Process'}
                </h2>
                <div className="space-y-4 text-gray-800 font-semibold leading-relaxed">
                  {dmData.processContent?.descriptions?.map((line, idx) => (
                    <p
                      key={idx}
                      className={`animate-on-scroll slide-from-right ${
                        idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3'
                      } bg-white/40 p-4 rounded-lg backdrop-blur-sm`}
                    >
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Marketing Analytics & Insights (API: analyticsContent) */}
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-br from-slate-800 via-blue-900 to-purple-900 rounded-3xl my-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Analytics Visual */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-8 rounded-2xl shadow-2xl border border-blue-400/30 h-96">
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto backdrop-blur-sm">
                    <BarChart3 className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Advanced Analytics</h3>
                  <div className="grid grid-cols-3 gap-3">
                    {['Google Analytics', 'Facebook Insights', 'SEMrush', 'Hotjar', 'Google Tag Manager', 'Data Studio'].map(
                      (tool, i) => (
                        <div
                          key={i}
                          className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-center text-white backdrop-blur-sm"
                        >
                          {tool}
                        </div>
                      )
                    )}
                  </div>
                  <p className="text-blue-200 text-sm">Comprehensive tracking & reporting</p>
                </div>
              </div>
            </div>

            {/* Right - Analytics Text from API */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-white font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-white border-l-4 border-blue-400 pl-4 bg-white/10 py-2 rounded-r-lg">
                  {dmData.analyticsContent?.title || 'Data-Driven Marketing Insights'}
                </h2>
                {dmData.analyticsContent?.descriptions?.map((line, idx) => (
                  <p
                    key={idx}
                    className={`animate-on-scroll slide-from-right ${
                      idx === 0 ? 'stagger-1' : idx === 1 ? 'stagger-2' : 'stagger-3'
                    } bg-white/10 p-4 rounded-lg backdrop-blur-sm`}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Digital Marketing Benefits (API: benefitsData[]) */}
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 rounded-3xl my-8 shadow-xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <h2 className="text-4xl font-bold text-blue-800 border-l-4 border-blue-500 pl-4 inline-block bg-white/50 py-2 px-6 rounded-r-lg">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-xl text-blue-700 mt-4 max-w-3xl mx-auto">
              Drive sustainable growth with comprehensive digital marketing strategies that deliver results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dmData.benefitsData?.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50 hover:bg-white hover:shadow-2xl transition-all duration-300 animate-on-scroll slide-from-bottom hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-600 mb-4">{getIcon(benefit.icon, 40)}</div>
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{benefit.title}</h3>
                <p className="text-blue-700 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Industries We Serve (API: industriesData[]) */}
        <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-r from-slate-800 to-blue-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <h2 className="text-4xl font-bold text-white border-l-4 border-blue-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Industries We Serve
            </h2>
            <p className="text-xl text-blue-200 mt-4 max-w-3xl mx-auto">
              Specialized digital marketing solutions tailored for different industries and business types.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dmData.industriesData?.map((industry, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-bottom hover:transform hover:-translate-y-2"
              >
                <div className="text-blue-300 mb-4 flex justify-center">
                  {getIcon(industry.icon, 32)}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{industry.title}</h3>
                <p className="text-blue-200 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DigitalMarketingServices;
