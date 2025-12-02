import React, { useEffect, useState } from 'react';
import {
  Smartphone,
  Code,
  Zap,
  Globe,
  Users,
  Award,
  TrendingUp,
  CheckCircle,
  Target,
  Settings,
  Layers,
  Box
} from 'lucide-react';
import * as Icons from 'lucide-react'; // dynamic icons ke liye

const Appdevelopment = () => {
  const [appData, setAppData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Icon helper: "Smartphone" -> <Smartphone />
  const getIcon = (iconName, size = 40) => {
    const IconComp = Icons[iconName];
    if (IconComp) return <IconComp size={size} />;
    return <Smartphone size={size} />; // fallback
  };

  // 1) API se data laana
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch('http://localhost:5000/api/content/app-development');
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const json = await res.json();
        console.log('APP API:', json);
        setAppData(json.data || json);
        setError(null);
      } catch (err) {
        console.error(err);
        setError(err.message);
        setAppData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // 2) Scroll animations (data aane ke baad)
  useEffect(() => {
    if (!appData) return;

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
  }, [appData]);

  // 3) Loading / Error UI
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading App Development content...</p>
        </div>
      </div>
    );
  }

  if (error || !appData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 flex items-center justify-center">
        <div className="text-center bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600 text-lg">Error loading content: {error || 'No data found'}</p>
          <p className="text-gray-600 mt-2">Please check if API is running at http://localhost:5000</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-indigo-50 to-purple-100 overflow-x-hidden">
        {/* PAGE CSS */}
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
            transform: translateX(100px);
            transition: opacity 0.8s ease-out, transform 0.8s ease-out;
          }

          .animate-on-scroll.animate-in {
            opacity: 1;
            transform: translateX(0);
          }

          .animate-on-scroll.slide-from-right {
            transform: translateX(100px);
          }

          .animate-on-scroll.slide-from-right.animate-in {
            transform: translateX(0);
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

        {/* 🔹 Main Header Image – API: headerImages.desktop / mobile */}
        <div className="relative h-75 md:h-80 w-full overflow-hidden">
          {/* Desktop Banner */}
          <img
            src={appData.headerImages?.desktop || '/assets/appimage.jpg'}
            alt="App Development Header"
            className="hidden md:block w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background =
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          />

          {/* Mobile Banner */}
          <img
            src={appData.headerImages?.mobile || appData.headerImages?.desktop || '/assets/app-development.jpg'}
            alt="Mobile App Development Header"
            className="block md:hidden w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.background =
                'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
            }}
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/60"></div>
        </div>

        {/* 🔹 Scrolling App Types – API: scrollingServices[] */}
        {appData.scrollingServices && appData.scrollingServices.length > 0 && (
          <div className="bg-gradient-to-r from-blue-900 via-blue-900 to-blue-800 py-1 overflow-hidden shadow-lg">
            <div className="relative">
              <div className="flex scroll-container">
                {[...Array(2)].map((_, setIndex) => (
                  <div key={setIndex} className="flex space-x-6 px-3">
                    {appData.scrollingServices.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all whitespace-nowrap hover:scale-105 cursor-pointer border-2 border-indigo-600"
                      >
                        {/* Optional: iconName admin se aaye to */}
                        {item.icon && (
                          <div className="text-white">
                            {getIcon(item.icon, 28)}
                          </div>
                        )}
                        <span className="text-white font-bold text-base">{item.text}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 🔹 App Development Intro Section – API: headerContent */}
        <div className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left - Content */}
            <div className="space-y-6 order-1 lg:order-1 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-indigo-800 border-l-4 border-indigo-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                  {appData.headerContent?.title || 'Transform Your Ideas Into Reality'}
                </h2>
                <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                  {appData.headerContent?.descriptions?.map((para, idx) => (
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

            {/* Right - Visual */}
            <div className="relative order-2 lg:order-2 animate-on-scroll slide-from-right">
              <div className="relative h-96 overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={appData.headerImages?.serviceImage || '/assets/service.webp'}
                  alt="App Development Services"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-600/30"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Our App Development Services – API: servicesData[] */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-r from-slate-800 to-indigo-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-right">
            <h2 className="text-4xl font-bold text-white border-l-4 border-indigo-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Our App Development Services
            </h2>
            <p className="text-xl text-indigo-200 mt-4 max-w-3xl mx-auto">
              Comprehensive mobile solutions to bring your vision to life across all platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appData.servicesData?.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-right hover:transform hover:-translate-y-2"
              >
                <div className="text-indigo-300 mb-4 flex justify-center">
                  {getIcon(service.icon, 40)}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-indigo-200 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 🔹 Development Process – API: processContent */}
        <div className="max-w-7xl mx-auto px-4 py-12 rounded-3xl my-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="relative p-8 rounded-2xl shadow-2xl h-96 flex items-center justify-center overflow-hidden">
                <img
                  src={appData.processContent?.image || '/assets/development.jpg'}
                  alt="Development Process"
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-indigo-800 border-l-4 border-indigo-500 pl-4 bg-white/50 py-2 rounded-r-lg">
                  {appData.processContent?.title || 'Our Development Process'}
                </h2>
                <div className="space-y-4 text-gray-800 font-semibold leading-relaxed">
                  {appData.processContent?.descriptions?.map((line, idx) => (
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

        {/* 🔹 Technologies We Use – API: technologyContent */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-slate-800 via-indigo-900 to-purple-900 rounded-3xl my-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Tech Stack */}
            <div className="relative animate-on-scroll slide-from-right">
              <div className="bg-gradient-to-br from-indigo-600 to-purple-700 p-8 rounded-2xl shadow-2xl border border-indigo-400/30 h-96">
                <div className="text-center space-y-6 h-full flex flex-col justify-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mx-auto backdrop-blur-sm">
                    <Code className="text-white" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {appData.technologyContent?.title || 'Advanced Technologies'}
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {(appData.technologyContent?.tools ||
                      ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'Node.js', 'MongoDB', 'AWS', 'REST APIs']
                    ).map((tool, i) => (
                      <div
                        key={i}
                        className="bg-white/10 px-2 py-1 rounded text-xs font-medium text-center text-white backdrop-blur-sm"
                      >
                        {tool}
                      </div>
                    ))}
                  </div>
                  <p className="text-indigo-200 text-sm">
                    {appData.technologyContent?.subtitle || 'Cutting-edge tech stack for superior apps'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Text */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-white font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-white border-l-4 border-indigo-400 pl-4 bg-white/10 py-2 rounded-r-lg">
                  {appData.technologyContent?.title || 'Technologies We Master'}
                </h2>
                {(appData.technologyContent?.descriptions ||
                  [
                    'We leverage the latest technologies and frameworks to build robust, scalable, and feature-rich mobile applications that perform flawlessly across all devices.',
                    'Our expertise spans native iOS and Android development, as well as cross-platform frameworks like React Native and Flutter for efficient multi-platform deployment.',
                    'We integrate powerful backend solutions, cloud services, and third-party APIs to create comprehensive mobile experiences that drive real business results.'
                  ]
                ).map((line, idx) => (
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

        {/* 🔹 Statistics – API: statsData[] */}
        <div className="max-w-7xl mx-auto px-4 py-12 bg-gradient-to-r from-slate-800 to-indigo-900 rounded-3xl my-8 shadow-2xl">
          <div className="text-center mb-16 animate-on-scroll slide-from-right">
            <h2 className="text-4xl font-bold text-white border-l-4 border-indigo-400 pl-4 inline-block bg-white/10 py-2 px-6 rounded-r-lg">
              Our Achievements
            </h2>
            <p className="text-xl text-indigo-200 mt-4 max-w-3xl mx-auto">
              Numbers that speak for our commitment to excellence and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {(appData.statsData ||
              [
                { value: '100+', label: 'Apps Delivered' },
                { value: '50+', label: 'Happy Clients' },
                { value: '5+', label: 'Years Experience' },
                { value: '24/7', label: 'Support Available' }
              ]
            ).map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 animate-on-scroll slide-from-right hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-indigo-200 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Appdevelopment;
