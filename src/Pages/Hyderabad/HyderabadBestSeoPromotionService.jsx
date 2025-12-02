import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const HyderabadBestSeoPromotionService = () => {
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
        <title>Best SEO Promotion Services in Hyderabad | #1 SEO Company Hyderabad</title>
        <meta name="title" content="Best SEO Promotion Services in Hyderabad | #1 SEO Company Hyderabad" />
        <meta 
          name="description" 
          content="DPM IT Solutions - Hyderabad's Best SEO Promotion Company. Top-rated SEO services with guaranteed rankings. 500+ clients across Hyderabad, 98% success rate. Get free SEO audit!" 
        />
        <meta 
          name="keywords" 
          content="best seo promotion services hyderabad, top seo agency hyderabad, best seo company hyderabad, seo services hyderabad, seo promotion agency hyderabad, digital marketing hyderabad, search engine optimization hyderabad, local seo hyderabad, ecommerce seo hyderabad, enterprise seo services hyderabad, affordable seo packages hyderabad, best seo consultant hyderabad, seo expert hyderabad, website promotion services hyderabad, organic seo hyderabad, hyderabad seo services" 
        />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/hyderabad/best-seo-promotion-service" />
        <meta property="og:title" content="Best SEO Promotion Services in Hyderabad | #1 SEO Company Hyderabad" />
        <meta 
          property="og:description" 
          content="Hyderabad's most trusted SEO promotion services. Certified SEO experts, guaranteed rankings, 500+ successful projects. Get your free SEO consultation now!" 
        />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/hyderabadseopromotion.jpg" />
        <meta property="og:site_name" content="DPM IT Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolutions.com/hyderabad/best-seo-promotion-service" />
        <meta property="twitter:title" content="Best SEO Promotion Services in Hyderabad | #1 SEO Agency" />
        <meta 
          property="twitter:description" 
          content="Top-rated SEO promotion company in Hyderabad with proven results. 12+ years experience, 98% success rate. Contact us for best SEO services!" 
        />
        <meta property="twitter:image" content="https://www.dpmitsolutions.com/assets/hyderabadseopromotion.jpg" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solutions - Best SEO Promotion Services Hyderabad",
            "image": "https://www.dpmitsolutions.com/assets/hyderabadseopromotion.jpg",
            "description": "Hyderabad's leading SEO promotion services with guaranteed rankings and proven results across all major business areas.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
          })}
        </script>

        <link rel="canonical" href="https://www.dpmitsolutions.com/hyderabad/best-seo-promotion-service" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header Image */}
        <div className="relative w-full h-96 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Animated mesh background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.900),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.800),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.indigo.900),transparent_50%)]"></div>
          </div>

          {/* Floating geometric shapes with advanced animations */}
          <div className="absolute inset-0">
            {/* Large floating crystals */}
            <div className="absolute top-20 left-16 animate-bounce" style={{ animationDuration: '6s', animationDelay: '0s' }}>
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-2xl shadow-cyan-500/25">
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Neon circles */}
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

            {/* Morphing hexagons */}
            <div className="absolute bottom-32 left-24 animate-pulse" style={{ animationDuration: '3s' }}>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-45 rounded-lg shadow-2xl shadow-emerald-500/40">
                  <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-md"></div>
                </div>
                <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-lime-400 to-emerald-500 rounded-lg opacity-80 animate-ping"></div>
              </div>
            </div>

            {/* Dynamic triangular prisms */}
            <div className="absolute top-1/2 right-32 animate-bounce" style={{ animationDuration: '5s', animationDelay: '2s' }}>
              <div className="relative group">
                <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-gradient-to-r from-rose-500 to-pink-600 filter drop-shadow-2xl">
                  <div className="absolute -top-6 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent transform rotate-45"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-pink-600 blur-xl opacity-50 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Advanced particle system */}
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

          {/* Flowing light streams */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent animate-pulse opacity-60"></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent animate-pulse opacity-40" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent animate-pulse opacity-50" style={{ animationDelay: '4s' }}></div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
            {/* Decorative top element */}
            <div className="mb-8 relative">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
              </div>
            </div>

            {/* Enhanced title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent tracking-tight leading-tight text-center">
                Best SEO Promotion Services in Hyderabad
              </h1>
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Best SEO Promotion Services in Hyderabad
              </div>
            </div>

            {/* Enhanced subtitle */}
            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Hyderabad's #1 Rated SEO Promotion Agency | Professional Website Promotion | Guaranteed Rankings | 500+ Successful Campaigns
              </p>
            </div>
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>

          {/* Dynamic light effects */}
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
                      src="/assets/bestseopormotion.jpg" 
                      alt="Best SEO Promotion Services Hyderabad - Professional Website Promotion" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Best SEO Promotion Services Hyderabad</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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
                  Professional <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Promotion Services</span> in Hyderabad
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Expert SEO Promotion Agency
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions provides the best SEO promotion services in Hyderabad, helping businesses achieve top search engine rankings and increased online visibility. Our professional SEO promotion strategies are designed to drive targeted traffic and generate quality leads for your business.
                </p>
                <div className="space-y-4">
                  {[
                    "Comprehensive website SEO promotion",
                    "Professional search engine optimization",
                    "Advanced ranking improvement techniques",
                    "Guaranteed first-page results"
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
                  Why Choose Our <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Promotion Services</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Professional SEO Promotion Solutions
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions offers professional SEO promotion services that deliver measurable results. Our expert team uses proven strategies to improve your website's search engine rankings and drive sustainable organic growth.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Expert Team', description: 'Professional SEO specialists', color: 'blue', icon: '🎯' },
                    { title: 'Proven Results', description: 'Successful promotion campaigns', color: 'green', icon: '🚀' },
        
                  ].map((item, idx) => (
                    <div key={idx} className="group relative animate-on-scroll slide-from-bottom hover:scale-105 transition-all duration-300" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25  transition duration-300"></div>
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
                  <div className="absolute -inset-4 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 rounded-3xl blur-2xl opacity-20  transition-opacity duration-500"></div>
                  <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src="/assets/bestseopormotion1.jpg"
                      alt="Professional SEO Promotion Services Hyderabad" 
                      className="w-full h-90 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">SEO Promotion Services Hyderabad</div><p class="text-gray-600">Professional Results</p></div></div>';
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

        {/* Best SEO Services Grid Section */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 Our SEO Promotion Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Promotion</span> Solutions
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Professional SEO Promotion Services
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive SEO promotion solutions designed to improve your website's search engine visibility and drive organic growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Website SEO Promotion",
                  description: "Professional SEO promotion services to improve your website's search engine rankings and online visibility.",
                  features: ["On-page Optimization", "Technical SEO", "Content Optimization", "Ranking Improvement"],
                  icon: "🏢",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "E-commerce SEO Promotion",
                  description: "Specialized SEO promotion for online stores to increase product visibility and drive sales.",
                  features: ["Product Page Optimization", "Category SEO", "E-commerce SEO", "Sales Growth"],
                  icon: "🛒",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Local SEO Promotion",
                  description: "Target local customers with geo-specific SEO promotion strategies for better local visibility.",
                  features: ["Local Listings", "Google Business", "Local SEO", "Area Targeting"],
                  icon: "📍",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Content Promotion",
                  description: "Strategic content promotion to establish authority and attract quality traffic to your website.",
                  features: ["Content Strategy", "Content Marketing", "Link Building", "Audience Engagement"],
                  icon: "🏷️",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Technical SEO Promotion",
                  description: "Advanced technical optimization to improve website performance and search engine crawlability.",
                  features: ["Site Speed", "Mobile Optimization", "Technical Audit", "Performance Boost"],
                  icon: "⚙️",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Organic SEO Promotion",
                  description: "Sustainable organic SEO promotion strategies for long-term search engine success.",
                  features: ["Organic Growth", "Sustainable SEO", "Quality Traffic", "Long-term Results"],
                  icon: "📝",
                  gradient: "from-red-500 to-orange-500"
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

        {/* Industry Recognition Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">🏆 Why Choose DPM IT Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Professional <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Promotion Expertise</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Trusted SEO Promotion Services in Hyderabad
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions is recognized as Hyderabad's premier SEO promotion service provider with proven results and satisfied clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  award: "Expert SEO Promotion Team",
                  organization: "Professional SEO Specialists",
                  icon: "🏆",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  award: "Proven Results",
                  organization: "Successful Campaigns",
                  icon: "⭐",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  award: "Quality Service",
                  organization: "Client Satisfaction",
                  icon: "🎖️",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  award: "Reliable Performance",
                  organization: "Consistent Results",
                  icon: "💎",
                  gradient: "from-purple-500 to-pink-500"
                }
              ].map((item, idx) => (
                <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="relative h-full">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative h-full bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-3xl mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
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

        {/* Client Results Section */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">📈 Our SEO Promotion Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Proven <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Promotion Results</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results from Our SEO Promotion Services
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Experience the power of professional SEO promotion services with DPM IT Solutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Corporate Website",
                  result: "Top Rankings for Key Keywords",
                  timeframe: "Within 6 months",
                  achievement: "Significant organic traffic growth",
                  icon: "💻",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Online Store", 
                  result: "Increased Product Visibility",
                  timeframe: "Within 8 months",
                  achievement: "Higher conversion rates and sales",
                  icon: "🚀",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  business: "Service Business",
                  result: "Improved Local Search Presence",
                  timeframe: "Within 5 months",
                  achievement: "More qualified leads and inquiries",
                  icon: "🏥",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  business: "E-commerce Platform",
                  result: "Better Search Engine Rankings",
                  timeframe: "Within 9 months",
                  achievement: "Increased online visibility and sales",
                  icon: "🛒",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  business: "Business Website",
                  result: "Enhanced Online Presence",
                  timeframe: "Within 7 months",
                  achievement: "Improved brand authority and trust",
                  icon: "🏠",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  business: "Professional Service",
                  result: "Quality Traffic Growth",
                  timeframe: "Within 6 months",
                  achievement: "Better lead generation and conversions",
                  icon: "🎓",
                  gradient: "from-red-500 to-pink-500"
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

        {/* Why Best Choice Section */}
<section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
  <div className="absolute top-0 left-0 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
  
  <div className="max-w-7xl mx-auto px-4 relative">
    <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
      <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
        <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose Our SEO Promotion Services</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
        Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">DPM IT Solutions</span>
      </h2>
      <h3 className="text-2xl font-bold text-gray-700 mb-4">
        Professional SEO Promotion Services You Can Trust
      </h3>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div className="animate-on-scroll slide-from-left">
        <div className="space-y-6">
          {[
            {
              title: "Expert SEO Promotion Team",
              description: "Our team consists of professional SEO specialists with extensive experience in website promotion and search engine optimization.",
              icon: "🏆",
              color: "blue"
            },
            {
              title: "Proven SEO Promotion Strategies",
              description: "We use tested and proven SEO promotion techniques that deliver measurable results and improve search engine rankings.",
              icon: "📊",
              color: "green"
            },
            {
              title: "Comprehensive SEO Promotion",
              description: "Complete SEO promotion services including technical SEO, content optimization, and link building for holistic results.",
              icon: "🚀",
              color: "purple"
            },
            {
              title: "Result-Oriented Approach",
              description: "We focus on delivering tangible results through our SEO promotion services with clear performance metrics.",
              icon: "💎",
              color: "pink"
            },
            {
              title: "Customized SEO Promotion Plans",
              description: "Tailored SEO promotion strategies designed specifically for your business goals and target audience.",
              icon: "🎯",
              color: "orange"
            },
            {
              title: "Affordable SEO Promotion Services",
              description: "Professional SEO promotion services at competitive prices with flexible packages for businesses of all sizes.",
              icon: "💰",
              color: "teal"
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className="group flex items-start space-x-4 animate-on-scroll slide-from-left" 
              style={{animationDelay: `${idx * 0.1}s`}}
            >
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
      
      {/* Right Side (Form) */}
      <div className="animate-on-scroll slide-from-right">
        <div className="relative group">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-2xl"></div>
            
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-4">
              <h3 className="text-2xl font-black text-gray-900 mb-1 text-center">Get Free SEO Promotion Consultation</h3>
              <p className="text-center text-gray-600 mb-4 text-sm font-medium">
                Start Your SEO Promotion Journey with DPM IT Solutions Today!
              </p>
              <div className="space-y-3">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Company/Business Name" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Website URL" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input 
                  type="text" 
                  placeholder="Contact Number" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                />
                <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Select Service Required</option>
                  <option>Website SEO Promotion</option>
                  <option>E-commerce SEO Promotion</option>
                  <option>Local SEO Promotion</option>
                  <option>Content Promotion</option>
                  <option>Technical SEO Promotion</option>
                  <option>Complete SEO Promotion Package</option>
                </select>
                <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Select Your Industry</option>
                  <option>IT & Technology</option>
                  <option>Healthcare & Medical</option>
                  <option>Real Estate & Property</option>
                  <option>Education & Training</option>
                  <option>Hospitality & Travel</option>
                  <option>Legal & Financial Services</option>
                  <option>Manufacturing & Industrial</option>
                  <option>E-commerce & Retail</option>
                  <option>Restaurant & Food Business</option>
                </select>
                <textarea 
                  placeholder="Tell us about your SEO promotion goals..." 
                  rows="2"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Free SEO Promotion Audit 
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

export default HyderabadBestSeoPromotionService;