import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const IndiaSeoServiceAgency = () => {
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
        <title>Best SEO Service Agency in India | DPM IT Solutions - Top SEO Company</title>
        <meta name="description" content="DPM IT Solutions - Premier SEO Service Agency in India offering professional SEO services, organic ranking, keyword research, technical SEO & link building. Get 300%+ traffic growth. Call +91 9650413450!" />
        <meta name="keywords" content="SEO service agency India, professional SEO services India, best SEO company India, search engine optimization agency, SEO expert India, organic SEO services, local SEO India, technical SEO services, link building services, keyword research India, DPM IT Solutions, top SEO agency India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best SEO Service Agency in India | DPM IT Solutions" />
        <meta property="og:description" content="Professional SEO Service Agency in India. Drive organic traffic, improve rankings & boost ROI with data-driven SEO strategies. 10+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/india/seo-service-agency" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/seoajency.webp" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Service Agency in India | DPM IT Solutions" />
        <meta name="twitter:description" content="Leading SEO Service Agency in India offering professional search engine optimization services. Increase organic traffic by 300%+." />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/seoajency.webp" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/india/seo-service-agency" />
        
        {/* Schema.org markup for SEO Service Agency */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DPM IT Solutions - SEO Service Agency",
              "description": "Premier SEO Service Agency in India offering professional search engine optimization services",
              "url": "https://www.dpmitsolutions.com/india/seo-service-agency",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "India",
                "addressCountry": "IN"
              },
              "areaServed": "India",
              "serviceType": "SEO Services",
              "priceRange": "$$",
              "telephone": "+91 9650413450",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "250"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header - Updated Design */}
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
                SEO Service Agency in India
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                SEO Service Agency in India
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Premier SEO Service Agency in India | Professional Search Engine Optimization | Organic Growth Strategies
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <ScrollingBanner/>

        {/* Section 1: Updated Design */}
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
                      src="/assets/seoajency.webp" 
                      alt="Professional SEO Service Agency India - DPM IT Solutions" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">SEO Service Agency</p></div></div>';
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
                  Premier <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Service Agency</span> in India
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Your Trusted SEO Service Partner
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As a leading SEO Service Agency in India, DPM IT Solutions specializes in delivering comprehensive search engine optimization services that drive measurable results. Our expert team combines technical expertise with creative strategies to elevate your online presence and maximize your digital growth potential.
                </p>
                <div className="space-y-4">
                  {[
                    "Comprehensive SEO audit and analysis",
                    "Customized SEO strategy development", 
                    "Continuous performance monitoring",
                    "Regular reporting and optimization"
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

        {/* Section 2: Updated Design */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          
          <div className="max-w-8xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Why Choose Our <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Service Agency</span> in India?
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Expert SEO Services Tailored for Indian Market
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At DPM IT Solutions, we understand the unique dynamics of the Indian digital landscape. Our SEO Service Agency delivers customized solutions that resonate with local search patterns, consumer behavior, and industry-specific requirements across different regions of India.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Local Market Expertise', description: 'Deep understanding of Indian search behavior and regional trends', color: 'blue', icon: '🎯' },
                    { title: 'Proven Methodologies', description: 'Data-driven SEO strategies tested and proven in Indian market', color: 'green', icon: '📊' },
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
                      src="/assets/seoajency1.jpg" 
                      alt="SEO Service Agency India - Professional SEO Services" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">SEO Service Agency</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

        {/* SEO Services Grid Section - Updated Design */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 Our SEO Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Service Agency</span> Solutions
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                End-to-End SEO Services by DPM IT Solutions
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                As a premier SEO Service Agency in India, we offer complete SEO solutions designed to maximize your online visibility and drive sustainable business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical SEO Services",
                  description: "Comprehensive technical optimization to ensure your website meets all search engine requirements and performance standards.",
                  features: ["Site Architecture", "Crawl Optimization", "Indexation Management", "Performance Speed"],
                  icon: "⚡",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Content SEO Strategy",
                  description: "Strategic content development and optimization to rank for relevant keywords and engage your target audience.",
                  features: ["Keyword Optimization", "Content Planning", "SEO Copywriting", "Content Audits"],
                  icon: "📝",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Local SEO Services",
                  description: "Optimize your online presence for local searches to attract customers in your geographic area across India.",
                  features: ["Google Business Profile", "Local Citations", "Review Management", "Local Listings"],
                  icon: "📍",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "E-commerce SEO",
                  description: "Specialized SEO solutions for online stores to improve product visibility and drive qualified e-commerce traffic.",
                  features: ["Product Page SEO", "Category Optimization", "E-commerce Schema", "Shopping Feed SEO"],
                  icon: "🛒",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Enterprise SEO",
                  description: "Scalable SEO solutions for large organizations with complex website structures and multiple business units.",
                  features: ["Enterprise Strategy", "Team Training", "Advanced Analytics", "International SEO"],
                  icon: "🏢",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "SEO Consulting",
                  description: "Expert SEO consulting services to guide your digital strategy and maximize your search engine performance.",
                  features: ["SEO Audits", "Strategy Development", "Competitive Analysis", "ROI Optimization"],
                  icon: "💼",
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

        {/* SEO Success Stories Section - Updated Design */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Our SEO Service Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Success Stories from Our <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Service Agency</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Proven Results Delivered by DPM IT Solutions SEO Service Agency
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how our SEO Service Agency has helped businesses across India achieve remarkable growth and dominate their markets.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Manufacturing Company",
                  result: "480% increase in qualified leads",
                  roi: "ROI: 890% in 6 months",
                  achievement: "Top rankings for industry keywords",
                  icon: "🏭",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Educational Institute", 
                  result: "350% growth in student inquiries",
                  roi: "Cost per inquiry: ₹280",
                  achievement: "Dominating educational program searches",
                  icon: "🎓",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Healthcare Service Provider",
                  result: "420% boost in patient appointments",
                  roi: "ROI: 780%",
                  achievement: "Leading local healthcare searches",
                  icon: "🏥",
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

        {/* Why Choose Our SEO Service Agency - Updated Design */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-10 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-3">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Our SEO Service Agency</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                Why Choose DPM IT Solutions as Your <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Service Agency</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700">
                The Premier SEO Service Agency Trusted by Businesses Across India
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left Side Content */}
              <div className="animate-on-scroll slide-from-left">
                <div className="space-y-5">
                  {[
                    {
                      title: "Expert SEO Service Team",
                      description: "Our SEO Service Agency comprises certified professionals with extensive experience in delivering successful SEO campaigns across diverse industries in India.",
                      icon: "👨‍💼",
                      color: "blue"
                    },
                    {
                      title: "Customized SEO Strategies",
                      description: "We develop tailored SEO service plans that align with your specific business goals, target audience, and industry requirements.",
                      icon: "🎯",
                      color: "purple"
                    },
                    {
                      title: "Transparent SEO Service Process",
                      description: "Complete transparency in our SEO service approach with regular reporting and clear communication about strategies and results.",
                      icon: "🔍",
                      color: "green"
                    },
                    {
                      title: "Proven SEO Service Methodology",
                      description: "Our SEO Service Agency follows proven methodologies that have delivered consistent results for clients across different sectors in India.",
                      icon: "📈",
                      color: "pink"
                    }
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start space-x-4 animate-on-scroll slide-from-left"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div
                        className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Form */}
              <div className="animate-on-scroll slide-from-right">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">Start with Our SEO Service Agency</h3>
                      <p className="text-center text-gray-600 mb-4 font-medium text-sm">Get Your Free SEO Service Consultation from DPM IT Solutions!</p>
                      <div className="space-y-3">
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Company Name"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Website URL"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        />
                        <input
                          type="text"
                          placeholder="Your Phone Number"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        />
                        <input
                          type="email"
                          placeholder="Email Address"
                          className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm"
                        />
                        <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-sm">
                          <option>Select Your Industry</option>
                          <option>Manufacturing</option>
                          <option>Healthcare</option>
                          <option>Education</option>
                          <option>E-commerce</option>
                          <option>Technology</option>
                          <option>Professional Services</option>
                          <option>Real Estate</option>
                          <option>Hospitality</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold text-base hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                          Get Free SEO Service Consultation
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

export default IndiaSeoServiceAgency;