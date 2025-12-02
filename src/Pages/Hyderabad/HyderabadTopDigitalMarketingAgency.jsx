import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const HyderabadTopDigitalMarketingAgency = () => {
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
  }, []);

  return (
    <>
      <Helmet>
        <title>Top Digital Marketing Agency in Hyderabad | SEO, Social Media & PPC Services</title>
        <meta
          name="description"
          content="DPM IT Solutions - Hyderabad's premier digital marketing agency offering comprehensive SEO, social media marketing, PPC, content marketing, and web development services. Drive massive growth for your Hyderabad business."
        />
        <meta
          name="keywords"
          content="digital marketing agency Hyderabad, SEO services Hyderabad, social media marketing Hyderabad, PPC advertising Hyderabad, content marketing Hyderabad, web development Hyderabad, DPM IT Solutions Hyderabad, Google Ads Hyderabad, Facebook marketing Hyderabad, brand identity design Hyderabad, top marketing agency Hyderabad, best digital marketing services Hyderabad, Telangana, digital marketing Hyderabad"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="Top Digital Marketing Agency in Hyderabad | DPM IT Solutions"
        />
        <meta
          property="og:description"
          content="Transform your Hyderabad business with DPM IT Solutions - Leading digital marketing agency offering expert SEO, social media, PPC & web development services."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://www.dpmitsolutions.com/hyderabad/top-digital-marketing-agency"
        />
        <meta
          property="og:image"
          content="https://www.dpmitsolutions.com/assets/digitalmarketing.jpg"
        />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top Digital Marketing Agency in Hyderabad | DPM IT Solutions" />
        <meta
          name="twitter:description"
          content="Comprehensive Digital Marketing Solutions in Hyderabad | SEO | Social Media | PPC | Web Development"
        />
        <meta
          name="twitter:image"
          content="https://www.dpmitsolutions.com/assets/digitalmarketing.jpg"
        />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="canonical"
          href="https://www.dpmitsolutions.com/hyderabad/top-digital-marketing-agency"
        />

        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MarketingAgency",
            name: "DPM IT Solutions - Top Digital Marketing Agency Hyderabad",
            description: "Leading digital marketing agency in Hyderabad providing comprehensive SEO, social media marketing, PPC, and web development services",
            url: "https://www.dpmitsolutions.com/hyderabad/top-digital-marketing-agency",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hyderabad",
              addressRegion: "Telangana",
              addressCountry: "IN",
            },
            areaServed: ["Hyderabad", "Secunderabad", "Cyberabad", "Gachibowli", "HITEC City", "Madhapur", "Banjara Hills", "Jubilee Hills"],
            priceRange: "$$",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "750",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header */}
        <div className="relative w-full h-90 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.900),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.800),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.indigo.900),transparent_50%)]"></div>
          </div>

          <div className="absolute inset-0">
            <div className="absolute top-20 left-16 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0s' }}>
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-2xl shadow-cyan-500/25">
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
              </div>
            </div>

            <div className="absolute top-32 right-20 animate-bounce" style={{ animationDuration: '4s', animationDelay: '1s' }}>
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-spin" style={{ animationDuration: '10s' }}>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 animate-pulse">
                    <div className="absolute inset-4 rounded-full bg-slate-900/80 backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-2xl opacity-60 animate-pulse"></div>
              </div>
            </div>

            <div className="absolute bottom-32 left-24 animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-45 rounded-lg shadow-2xl shadow-emerald-500/40">
                  <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-md"></div>
                </div>
                <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-lime-400 to-emerald-500 rounded-lg opacity-80 animate-ping"></div>
              </div>
            </div>

            <div className="absolute top-1/2 right-32 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
              <div className="relative group">
                <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-gradient-to-r from-rose-500 to-pink-600 filter drop-shadow-2xl">
                  <div className="absolute -top-6 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent transform rotate-45"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-pink-600 blur-xl opacity-50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full animate-bounce"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#60A5FA', '#A855F7', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
                  opacity: Math.random() * 0.8 + 0.2,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 5}s`
                }}
              />
            ))}
          </div>

          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
          </div>

          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
            <div className="mb-8 relative">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent tracking-tight leading-tight text-center">
                DPM IT Solutions - Top Digital Marketing Agency in Hyderabad
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                DPM IT Solutions - Top Digital Marketing Agency in Hyderabad
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Hyderabad's Most Trusted Digital Marketing Partner | SEO Experts | Social Media Marketing | PPC Specialists | Web Development
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <ScrollingBanner/>

        {/* Section 1: Image Left, Content Right */}
        <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="relative max-w-8xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 animate-on-scroll slide-from-left">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/assets/digitalmarketing.jpg" 
                      alt="DPM IT Solutions - Best Digital Marketing Services Hyderabad" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🚀</div><p class="text-gray-600">DPM IT Solutions - Digital Marketing Agency Hyderabad</p></div></div>';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-40 floating"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full blur-2xl opacity-40 floating" style={{animationDelay: '3s'}}></div>
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll slide-from-right">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  DPM IT Solutions - Hyderabad's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">#1 Digital Marketing Agency</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Your Growth Partner in Hyderabad's Competitive Market
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At DPM IT Solutions, we transform Hyderabad businesses with data-driven digital marketing strategies. Serving clients across Hyderabad, Secunderabad, Cyberabad, Gachibowli, HITEC City, and surrounding areas, we deliver comprehensive marketing solutions including SEO, social media marketing, Google Ads, content marketing, and custom web development tailored for Hyderabad's dynamic business landscape.
                </p>
                <div className="space-y-4">
                  {[
                    "Proven expertise in Hyderabad's competitive IT and business markets",
                    "Data-driven campaigns delivering 450% average ROI for Hyderabad clients",
                    "Local Hyderabad team with deep market understanding",
                    "Custom strategies for startups to enterprises across Hyderabad"
                  ].map((item, idx) => (
                    <div className="flex items-start space-x-4 group animate-on-scroll slide-from-right" key={idx} style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg">
                        <span className="text-white text-base font-bold">✓</span>
                      </div>
                      <p className="text-gray-700 text-base leading-relaxed group-hover:text-gray-900 transition-colors">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Content Left, Image Right */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          
          <div className="max-w-8xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Why DPM IT Solutions is Hyderabad's <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Preferred Marketing Partner</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Dominate Hyderabad's Digital Space with Expert Strategies
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions understands Hyderabad's unique business ecosystem, from the IT corridors of HITEC City to traditional commercial hubs. Our integrated approach ensures maximum digital impact whether you're targeting local Hyderabad customers or expanding across Telangana region.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Hyderabad Market Leadership', description: '750+ successful campaigns across Hyderabad with proven 450% ROI', color: 'blue', icon: '🏆' },
                    { title: 'Local Hyderabad Presence', description: 'Dedicated teams in Hyderabad ensuring personalized service and rapid response', color: 'green', icon: '📍' },
                  ].map((item, idx) => (
                    <div key={idx} className="group relative animate-on-scroll slide-from-bottom hover:scale-105 transition-all duration-300" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                      <div className="relative bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg">
                        <div className="text-4xl mb-3">{item.icon}</div>
                        <div className="text-xl font-bold text-gray-900 mb-2">{item.title}</div>
                        <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="animate-on-scroll slide-from-right">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/assets/whychoosedigitalmarketing.png" 
                      alt="DPM IT Solutions Marketing Team Hyderabad" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">👥</div><p class="text-gray-600">DPM IT Solutions Marketing Team Hyderabad</p></div></div>';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-br from-green-400 to-blue-600 rounded-full blur-2xl opacity-40 floating"></div>
                  <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full blur-2xl opacity-40 floating" style={{animationDelay: '2s'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 DPM IT Solutions Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Marketing</span> Solutions
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Full-Spectrum Marketing Services for Hyderabad Businesses
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions offers comprehensive digital marketing services specifically designed for Hyderabad's competitive business environment to accelerate your growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Search Engine Optimization",
                  description: "Dominate Google search results in Hyderabad with DPM IT Solutions' proven local SEO strategies and technical optimization.",
                  features: ["Hyderabad Local SEO", "GMB Optimization", "E-commerce SEO", "Voice Search Optimization"],
                  icon: "🔍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Social Media Marketing",
                  description: "Build powerful brand presence across platforms with content that resonates with Hyderabad audiences.",
                  features: ["Instagram Marketing", "LinkedIn B2B", "YouTube Promotion", "Community Management"],
                  icon: "📱",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Pay-Per-Click Advertising",
                  description: "Maximize ROI with DPM IT Solutions' expertly managed Google Ads and social media campaigns.",
                  features: ["Google Ads Hyderabad", "Facebook & Instagram Ads", "Shopping Campaigns", "Remarketing"],
                  icon: "🎯",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Content Marketing",
                  description: "Engage Hyderabad audiences with locally relevant content that drives traffic and conversions.",
                  features: ["Blog Content", "Video Production", "Copywriting", "Content Strategy"],
                  icon: "📝",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Brand Identity & Design",
                  description: "Create memorable brand experiences that connect with Hyderabad's diverse consumer base.",
                  features: ["Logo & Brand Design", "Packaging Design", "Marketing Materials", "Brand Guidelines"],
                  icon: "🎨",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Web Development",
                  description: "Build fast, mobile-optimized websites designed for Hyderabad's tech-savvy users.",
                  features: ["Responsive Design", "E-commerce Development", "Progressive Web Apps", "Website Maintenance"],
                  icon: "💻",
                  gradient: "from-indigo-500 to-purple-500"
                }
              ].map((service, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Services Section */}
        <section className="py-10 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">🔍 DPM IT Solutions SEO Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Best <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Agency Services</span> in Hyderabad
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Dominate Hyderabad Search Rankings with DPM IT Solutions
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions delivers comprehensive SEO strategies specifically designed for Hyderabad businesses to increase visibility and generate qualified leads.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Local SEO Hyderabad",
                  description: "Dominate local search results across Hyderabad and surrounding areas with DPM IT Solutions",
                  features: ["GMB Optimization", "Local Citations", "Map Pack Rankings"],
                  icon: "📍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Technical SEO",
                  description: "Website optimization for better crawling, indexing, and user experience",
                  features: ["Site Speed", "Mobile Optimization", "Structured Data"],
                  icon: "⚡",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Content SEO",
                  description: "Strategic content creation that ranks and converts for Hyderabad audiences",
                  features: ["Keyword Research", "Content Strategy", "Blog Optimization"],
                  icon: "📝",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "E-commerce SEO",
                  description: "Product page optimization for better visibility and sales growth",
                  features: ["Product SEO", "Category Pages", "E-commerce Analytics"],
                  icon: "🛒",
                  gradient: "from-orange-500 to-red-500"
                }
              ].map((service, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white p-6 rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {service.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                      <div className="space-y-2">
                        {service.features.map((feature, fidx) => (
                          <div key={fidx} className="flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 DPM IT Solutions Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Hyderabad Business <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Proven Results from DPM IT Solutions Marketing Campaigns
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real success stories from Hyderabad businesses that partnered with DPM IT Solutions for digital marketing excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "IT Company - HITEC City",
                  result: "650% increase in qualified client inquiries",
                  roi: "ROAS: 15:1 with DPM IT Solutions",
                  achievement: "Expanded to international markets successfully",
                  icon: "💻",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Restaurant Chain - Jubilee Hills", 
                  result: "450% online orders growth in 6 months",
                  roi: "Cost per order: ₹160 with DPM campaigns",
                  achievement: "Became top food brand in Hyderabad",
                  icon: "🍽️",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  business: "Education Institute - Gachibowli",
                  result: "380% student enrollment increase",
                  roi: "ROAS: 12:1 with DPM strategies",
                  achievement: "Reduced CPA by 65% in 3 months",
                  icon: "🎓",
                  gradient: "from-green-500 to-teal-500"
                }
              ].map((story, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {story.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{story.business}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <p className="text-green-600 font-semibold text-lg">Result: {story.result}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <p className="text-gray-700">{story.roi}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <p className="text-gray-700">Achievement: {story.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose DPM IT Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What Makes DPM IT Solutions Hyderabad's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Best Marketing Agency</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Why Leading Hyderabad Brands Trust DPM IT Solutions
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll slide-from-left">
                <div className="space-y-6">
                  {[
                    {
                      title: "Award-Winning Hyderabad Agency",
                      description: "DPM IT Solutions recognized as Hyderabad's leading digital marketing agency with multiple national awards.",
                      icon: "🏆",
                      color: "blue"
                    },
                    {
                      title: "Hyderabad Market Specialists",
                      description: "DPM's deep understanding of Hyderabad's diverse industries and competitive landscape.",
                      icon: "🎯",
                      color: "purple"
                    },
                    {
                      title: "50+ Marketing Experts in Hyderabad",
                      description: "DPM's dedicated team of certified professionals with local Hyderabad market expertise.",
                      icon: "👥",
                      color: "green"
                    },
                    {
                      title: "Real-Time Campaign Tracking",
                      description: "DPM's advanced analytics dashboard with real-time performance tracking and ROI measurement.",
                      icon: "📊",
                      color: "pink"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group flex items-start space-x-4 animate-on-scroll slide-from-left" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="animate-on-scroll slide-from-right">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-10 rounded-3xl shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8">
                      <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">Get Free Marketing Strategy from DPM IT Solutions</h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">Start Your Hyderabad Growth Journey with DPM IT Solutions!</p>
                      <div className="space-y-4">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input 
                          type="text" 
                          placeholder="Company Name" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input 
                          type="text" 
                          placeholder="Website URL" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input 
                          type="text" 
                          placeholder="Your Phone Number" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                          <option>Select Campaign Goal</option>
                          <option>Generate Leads/Inquiries</option>
                          <option>Increase Online Sales</option>
                          <option>Drive Website Traffic</option>
                          <option>Brand Awareness</option>
                          <option>App Promotion</option>
                          <option>Local Store Visits</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                          Get Free Marketing Strategy from DPM IT Solutions
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HyderabadTopDigitalMarketingAgency;