import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const IndoreSeoPromotionService = () => {
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
        {/* Primary Meta Tags */}
        <title>SEO Promotion Services in Indore | #1 SEO Agency Indore</title>
        <meta name="title" content="Best SEO Promotion Services in Indore | #1 SEO Agency Indore" />
        <meta 
          name="description" 
          content="DPM IT Solutions - Leading SEO Promotion Company in Indore. Local SEO services with guaranteed rankings. 500+ clients across Indore, 98% success rate. Get free consultation!" 
        />
        <meta 
          name="keywords" 
          content="Seo promotion services indore, top seo agency indore, seo company indore, seo services indore, local seo indore, indore seo expert, digital marketing indore, search engine optimization indore, website promotion indore, affordable seo packages indore, best seo consultant indore, seo expert indore, organic seo indore, indore business seo" 
        />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/indore/seo-promotion-service" />
        <meta property="og:title" content="Best SEO Promotion Services in Indore | #1 SEO Agency Indore" />
        <meta 
          property="og:description" 
          content="Leading SEO promotion services across Indore. Certified SEO experts, guaranteed rankings, 500+ successful projects in Indore. Get your free SEO consultation now!" 
        />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/indoreseopromotion.jpg" />
        <meta property="og:site_name" content="DPM IT Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolutions.com/indore/seo-promotion-service" />
        <meta property="twitter:title" content="Best SEO Promotion Services in Indore | #1 SEO Agency" />
        <meta 
          property="twitter:description" 
          content="Top-rated SEO promotion company in Indore with proven results. Serving clients across Indore. 12+ years experience, 98% success rate. Contact us today!" 
        />
        <meta property="twitter:image" content="https://www.dpmitsolutions.com/assets/indoreseopromotion.jpg" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solutions - Best SEO Promotion Services Indore",
            "image": "https://www.dpmitsolutions.com/assets/indoreseopromotion.jpg",
            "description": "Leading SEO promotion services across Indore with guaranteed rankings and proven results for businesses in Indore.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Indore",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            },
            "priceRange": "₹₹",
            "telephone": "+91 96504 13450",
            "url": "https://www.dpmitsolutions.com/indore/seo-promotion-service",
            "areaServed": {
              "@type": "City",
              "name": "Indore"
            },
          })}
        </script>

        <link rel="canonical" href="https://www.dpmitsolutions.com/indore/seo-promotion-service" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Enhanced Main Header */}
        <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.900),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.800),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.indigo.900),transparent_50%)]"></div>
          </div>

          {/* Enhanced Floating Elements */}
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

          {/* Enhanced Particle System */}
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

          {/* Enhanced Light Streams */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Enhanced Main Content */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
            <div className="mb-8 relative">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>

            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent tracking-tight leading-tight text-center">
                SEO Promotion Services in Indore
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                SEO Promotion Services in Indore
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                #1 Rated Indore SEO Agency | Local Indore Coverage | Award-Winning Services | 500+ Happy Indore Clients | ISO Certified
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <ScrollingBanner/>

        {/* Enhanced Section 1 */}
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
                      src="/assets/bestseopormotion.jpg" 
                      alt="Best SEO Promotion Services Indore - Local Indore Agency" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Best SEO Services Indore</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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
                  Indore's Leading <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Promotion Company</span> Serving Local Businesses
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Certified Indore SEO Experts
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions is Indore's most trusted SEO promotion agency, delivering exceptional results across all major areas and suburbs. Our expert team specializes in comprehensive local website promotion, organic growth strategies, and achieving top search rankings for Indore businesses across all industries.
                </p>
                <div className="space-y-4">
                  {[
                    "Indore Local SEO coverage in all areas",
                    "ISO certified and award-winning team",
                    "500+ successful Indore clients",
                    "Local Indore market expertise"
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

        {/* Enhanced Section 2 */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          
          <div className="max-w-8xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Why We Are Indore's <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Best SEO Agency</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Premier Indore SEO Promotion Service Provider
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions stands out as Indore's premier SEO promotion service provider with local Indore reach, cutting-edge techniques, transparent reporting, and dedicated account managers for Indore businesses. We combine technical excellence with creative marketing strategies tailored for the Indore market to deliver unmatched results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: '12+ Years', description: 'Serving Indore businesses', color: 'blue', icon: '🏆' },
                    { title: '24/7 Support', description: 'Local Indore service', color: 'orange', icon: '🛡️' },
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
                      src="/assets/bestseopormotion1.jpg" 
                      alt="Top SEO Agency Indore - Best Promotion Services Local" 
                      className="w-full h-90 md:h-130 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Top SEO Agency Indore</div><p class="text-gray-600">Local Indore Coverage</p></div></div>';
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

        {/* Enhanced Services Section */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 Our Indore Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Indore SEO Promotion</span> Services
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Full-Spectrum SEO Solutions Across Indore
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive SEO promotion solutions designed for the Indore market to dominate local search rankings and maximize online visibility in Indore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Indore SEO",
                  description: "Specialized SEO services for all Indore areas including Vijay Nagar, Palasia, Rajendra Nagar, and other key locations with localized strategies.",
                  features: ["Local Indore Targeting", "High Competition Keywords", "Area Coverage", "Indore Market Focus"],
                  icon: "🏙️",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Indore Business SEO",
                  description: "SEO promotion tailored for Indore businesses including retail stores, restaurants, services, and local enterprises across the city.",
                  features: ["Local Business SEO", "Indore Commerce", "Service Area Optimization", "GMB Optimization"],
                  icon: "🏢",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "E-commerce SEO Indore",
                  description: "Local Indore e-commerce SEO strategies for online stores targeting customers in Indore with local delivery optimization.",
                  features: ["Local Product SEO", "Indore Delivery Areas", "Local Inventory Search", "Same-day Delivery SEO"],
                  icon: "🛒",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Real Estate SEO Indore",
                  description: "Specialized SEO for Indore real estate including properties, builders, and real estate agents across all Indore locations.",
                  features: ["Property SEO", "Builder SEO", "Local Real Estate", "Area-specific Listings"],
                  icon: "🏘️",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Service Business SEO",
                  description: "SEO promotion for Indore service businesses including doctors, lawyers, consultants, and professionals across the city.",
                  features: ["Professional Services SEO", "Local Service Areas", "Client Acquisition", "Service Page Optimization"],
                  icon: "🔧",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Hospitality SEO Indore",
                  description: "Specialized SEO strategies for Indore hotels, restaurants, travel agencies, and hospitality businesses.",
                  features: ["Hotel SEO", "Restaurant SEO", "Local Attractions", "Tourism SEO"],
                  icon: "🏨",
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

        {/* Enhanced Industry Recognition */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">🏆 Indore Awards</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Indore <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Recognition & Awards</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Recognized as Indore's Best SEO Promotion Company
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Recognized as Indore's best SEO promotion company by leading industry bodies and clients across Indore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  award: "Best SEO Agency Indore 2024",
                  organization: "Indore Digital Awards",
                  icon: "🏆",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  award: "Top 5 SEO Companies Indore",
                  organization: "Indore Business Rankings",
                  icon: "⭐",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  award: "Excellence in Digital Marketing",
                  organization: "Indore Business Awards",
                  icon: "🎖️",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  award: "Most Trusted SEO Brand Indore",
                  organization: "Indore Customer Choice Awards",
                  icon: "💎",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 text-center">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg mx-auto`}>
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.award}</h3>
                      <p className="text-gray-600 text-sm">{item.organization}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Client Results */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">📈 Indore Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Success Stories <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Across Indore</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results from Indore Businesses
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real results from Indore businesses that chose the best SEO promotion services in Indore.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Indore Healthcare Chain",
                  result: "1st Position for 200+ Keywords",
                  timeframe: "Within 6 months",
                  achievement: "Dominated healthcare searches across Indore",
                  icon: "🏥",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  business: "Indore E-commerce Store", 
                  result: "800% Indore Traffic Growth",
                  timeframe: "Within 8 months",
                  achievement: "Top rankings in all Indore areas",
                  icon: "🛒",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Indore Education Institute",
                  result: "500% Student Enrollment Increase",
                  timeframe: "Within 5 months",
                  achievement: "Leading educational institute in Indore",
                  icon: "🎓",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((story, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${story.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {story.icon}
                      </div>
                      <h3 className="text-xl font-bold text-blue-700 mb-4">{story.business}</h3>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <p className="text-green-600 font-semibold text-lg">Result: {story.result}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <p className="text-gray-700">Timeframe: {story.timeframe}</p>
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

        {/* Enhanced Why Choose Section */}
        <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-8 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-purple-100 rounded-full mb-3">
                <span className="text-purple-700 font-semibold text-sm">⭐ Why Choose Us</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
                Why Choose Indore's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Leading SEO Agency</span>
              </h2>
              <h3 className="text-xl font-bold text-gray-700">
                Why Indore Businesses Choose DPM IT Solutions
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Left Content */}
              <div className="animate-on-scroll slide-from-left space-y-4">
                {[
                  { title: "Indore Local Presence", desc: "With our Indore-based team, we provide localized SEO services with deep understanding of Indore market dynamics and consumer behavior.", icon: "🏢", color: "blue" },
                  { title: "Indore Market Expertise", desc: "Deep understanding of Indore-specific search trends, local competition, and Indore consumer preferences for targeted SEO strategies.", icon: "🎯", color: "purple" },
                  { title: "Industry-Specific Indore Expertise", desc: "Deep understanding of Indore market dynamics across sectors including real estate, hospitality, retail, services, and healthcare specific to Indore.", icon: "🏭", color: "green" },
                  { title: "Affordable Indore Pricing", desc: "Cost-effective SEO packages designed for Indore businesses of all sizes - from startups to large enterprises with flexible payment options.", icon: "💰", color: "pink" }
                ].map((item, idx) => (
                  <div key={idx} className="group flex items-start space-x-3">
                    <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-xl flex items-center justify-center text-xl shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600 text-sm leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Form */}
              <div className="animate-on-scroll slide-from-right">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4 rounded-2xl shadow-xl">
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-xl p-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-1 text-center">Free SEO Consultation</h3>
                      <p className="text-center text-gray-600 text-sm mb-3">Partner with Indore's Leading SEO Agency</p>
                      <div className="space-y-2">
                        <input type="text" placeholder="Your Name" className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"/>
                        <input type="text" placeholder="Company/Business Name" className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"/>
                        <input type="text" placeholder="Website URL" className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"/>
                        <input type="text" placeholder="Contact Number" className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"/>
                        <input type="email" placeholder="Email Address" className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"/>
                        <select className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none">
                          <option>Select Your Indore Area</option>
                          <option>Vijay Nagar</option>
                          <option>Palasia</option>
                          <option>Rajendra Nagar</option>
                          <option>Bhawarkua</option>
                          <option>Rau</option>
                          <option>Scheme 54</option>
                          <option>All Indore Areas</option>
                        </select>
                        <select className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none">
                          <option>Select Your Industry</option>
                          <option>E-commerce & Retail</option>
                          <option>Healthcare & Medical</option>
                          <option>Real Estate & Property</option>
                          <option>Education & EdTech</option>
                          <option>Hospitality & Travel</option>
                          <option>Restaurant & Food Business</option>
                          <option>Professional Services</option>
                          <option>Manufacturing & B2B</option>
                          <option>Technology & IT Services</option>
                          <option>Other Industries</option>
                        </select>
                        <textarea rows="1" placeholder="Tell us about your business..." className="w-full p-2 text-sm border rounded-lg focus:border-blue-500 focus:outline-none"></textarea>
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
                          Get Free Audit 
                        </button>
                        <p className="text-center text-xs text-gray-500">
                          500+ Indore businesses trust us
                        </p>
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

export default IndoreSeoPromotionService;