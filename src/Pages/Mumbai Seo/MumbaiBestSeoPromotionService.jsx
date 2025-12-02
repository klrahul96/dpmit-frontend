import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const MumbaiBestSeoPromotionService = () => {
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
        <title>Best SEO Promotion Services in Mumbai | #1 SEO Company Mumbai</title>
        <meta name="title" content="Best SEO Promotion Services in Mumbai | #1 SEO Company Mumbai" />
        <meta 
          name="description" 
          content="DPM IT Solutions - Mumbai's Best SEO Promotion Company. Top-rated SEO services with guaranteed rankings. 500+ clients across Mumbai, 98% success rate. Get free SEO audit!" 
        />
        <meta 
          name="keywords" 
          content="best seo promotion services mumbai, top seo agency mumbai, best seo company mumbai, seo services mumbai, seo promotion agency mumbai, digital marketing mumbai, search engine optimization mumbai, local seo mumbai, ecommerce seo mumbai, enterprise seo services mumbai, affordable seo packages mumbai, best seo consultant mumbai, seo expert mumbai, website promotion services mumbai, organic seo mumbai, mumbai seo services" 
        />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/mumbai/best-seo-promotion-service" />
        <meta property="og:title" content="Best SEO Promotion Services in Mumbai | #1 SEO Company Mumbai" />
        <meta 
          property="og:description" 
          content="Mumbai's most trusted SEO promotion services. Certified SEO experts, guaranteed rankings, 500+ successful projects. Get your free SEO consultation now!" 
        />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/mumbaiseopromotion.jpg" />
        <meta property="og:site_name" content="DPM IT Solutions" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolutions.com/mumbai/best-seo-promotion-service" />
        <meta property="twitter:title" content="Best SEO Promotion Services in Mumbai | #1 SEO Agency" />
        <meta 
          property="twitter:description" 
          content="Top-rated SEO promotion company in Mumbai with proven results. 12+ years experience, 98% success rate. Contact us for best SEO services!" 
        />
        <meta property="twitter:image" content="https://www.dpmitsolutions.com/assets/mumbaiseopromotion.jpg" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mumbai" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solutions - Best SEO Promotion Services Mumbai",
            "image": "https://www.dpmitsolutions.com/assets/mumbaiseopromotion.jpg",
            "description": "Mumbai's leading SEO promotion services with guaranteed rankings and proven results across all major business areas.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            },
            "priceRange": "₹₹",
            "telephone": "+91 96504 13450",
            "url": "https://www.dpmitsolutions.com/mumbai/best-seo-promotion-service",
            "areaServed": {
              "@type": "City",
              "name": "Mumbai"
            },
            "serviceType": [
              "SEO Promotion Services",
              "Search Engine Optimization",
              "Digital Marketing",
              "Local SEO",
              "Enterprise SEO",
              "E-commerce SEO"
            ]
          })}
        </script>

        <link rel="canonical" href="https://www.dpmitsolutions.com/mumbai/best-seo-promotion-service" />
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
                Best SEO Promotion Services in Mumbai
              </h1>
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Best SEO Promotion Services in Mumbai
              </div>
            </div>

            {/* Enhanced subtitle */}
            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Mumbai's #1 Rated SEO Agency | Local SEO Experts | Award-Winning Team | Result-Oriented Strategies | 500+ Happy Clients
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
                      alt="Best SEO Promotion Services Mumbai - Top Agency" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Best SEO Services Mumbai</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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
                  Mumbai's Best <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Promotion Services</span> Agency
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Certified Mumbai SEO Experts
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions is recognized as Mumbai's best SEO promotion agency, delivering exceptional results across all major areas including South Mumbai, Western Suburbs, Eastern Suburbs, Navi Mumbai, and Thane. Our award-winning team specializes in comprehensive website promotion, organic growth, and guaranteed top search rankings for Mumbai businesses.
                </p>
                <div className="space-y-4">
                  {[
                    "Local Mumbai SEO promotion strategies",
                    "Google-certified Mumbai SEO experts",
                    "Proven track record with 500+ Mumbai clients",
                    "Guaranteed first-page rankings in Mumbai"
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
                  Why We Are <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Mumbai's Best SEO Agency</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Award-Winning SEO Services Across Mumbai
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions stands out as Mumbai's premier SEO promotion service provider with cutting-edge techniques, transparent reporting, and dedicated account managers. We serve businesses across all Mumbai regions with customized strategies that deliver measurable results.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: '12+ Years', description: 'Industry experience in Mumbai', color: 'blue', icon: '🎯' },
                    { title: '500+ Projects', description: 'Successfully delivered in Mumbai', color: 'green', icon: '🚀' },
        
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
                      alt="Top SEO Agency Mumbai - Best Promotion Services" 
                      className="w-full h-90 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Top SEO Agency Mumbai</div><p class="text-gray-600">Award Winning Team</p></div></div>';
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
                <span className="text-white font-semibold text-sm">🚀 Our Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Promotion</span> Services
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Full-Spectrum SEO Solutions Across Mumbai
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive SEO promotion solutions designed by Mumbai's top experts to dominate search rankings across all major search engines.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise SEO Mumbai",
                  description: "Premium SEO services for large Mumbai corporations and multi-location businesses seeking market dominance.",
                  features: ["Multi-Location SEO", "Corporate Campaigns", "Business Branding", "Large-Scale Strategy"],
                  icon: "🏢",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "E-commerce SEO Mumbai",
                  description: "Specialized promotion for Mumbai online stores to increase product visibility and drive sales across platforms.",
                  features: ["Product Optimization", "Category Ranking", "Shopping Campaigns", "Conversion Boost"],
                  icon: "🛒",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Local SEO All Mumbai Areas",
                  description: "Target local customers in all Mumbai areas with geo-specific promotion and dominate regional searches.",
                  features: ["Google My Business", "Local Pack Rankings", "Area-wise Optimization", "Local Targeting"],
                  icon: "📍",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "White Label SEO Mumbai",
                  description: "Best white label SEO promotion for Mumbai agencies looking to expand their service portfolio.",
                  features: ["Agency Partnership", "Custom Reporting", "Reseller Solutions", "Scalable Services"],
                  icon: "🏷️",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Technical SEO Excellence",
                  description: "Advanced technical optimization for Mumbai websites to improve performance and search engine crawlability.",
                  features: ["Site Speed Boost", "Mobile First", "Schema Markup", "Core Web Vitals"],
                  icon: "⚙️",
                  gradient: "from-indigo-500 to-purple-500"
                },
                {
                  title: "Content Marketing Mumbai",
                  description: "Strategic content creation and promotion tailored for Mumbai audiences to establish authority and attract traffic.",
                  features: ["Local Content", "Marathi SEO", "Guest Posting", "Link Building Mumbai"],
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
                <span className="text-green-700 font-semibold text-sm">🏆 Awards & Recognition</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Industry <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Recognition & Awards</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Recognized as Mumbai's Best SEO Promotion Company
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Recognized as Mumbai's best SEO promotion company by leading industry bodies and hundreds of satisfied clients.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  award: "Best SEO Agency Mumbai 2024",
                  organization: "Digital Marketing Awards",
                  icon: "🏆",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  award: "Top 5 SEO Companies Mumbai",
                  organization: "Industry Rankings",
                  icon: "⭐",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  award: "Excellence in SEO Mumbai",
                  organization: "Business Excellence Awards",
                  icon: "🎖️",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  award: "Client Choice Award Mumbai",
                  organization: "Customer Satisfaction",
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
                <span className="text-blue-700 font-semibold text-sm">📈 Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Best <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Results</span> Across Mumbai
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results from Real Mumbai Businesses
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real results from real Mumbai businesses that chose the best SEO promotion services in Mumbai.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "South Mumbai E-commerce",
                  result: "1st Position for 200+ Keywords",
                  timeframe: "Within 6 months",
                  achievement: "Dominated online retail searches across Mumbai",
                  icon: "🛍️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Bandra Tech Startup", 
                  result: "1000% Organic Traffic Growth",
                  timeframe: "Within 8 months",
                  achievement: "Became industry leader in tech solutions",
                  icon: "💼",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Andheri Education Group",
                  result: "700% Lead Generation Increase",
                  timeframe: "Within 5 months",
                  achievement: "Top rankings for all education keywords",
                  icon: "🎓",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  business: "Navi Mumbai Manufacturing",
                  result: "850% B2B Inquiries Boost",
                  timeframe: "Within 9 months",
                  achievement: "Market leader in industrial searches",
                  icon: "🏭",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  business: "Thane IT Services",
                  result: "1200% Business Growth",
                  timeframe: "Within 7 months",
                  achievement: "Dominated IT services searches in Mumbai",
                  icon: "💻",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  business: "Western Suburbs Real Estate",
                  result: "600% Property Inquiries",
                  timeframe: "Within 6 months",
                  achievement: "Top real estate portal in Western Mumbai",
                  icon: "🏠",
                  gradient: "from-yellow-500 to-orange-500"
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
        <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose Us</span>
      </div>
      <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
        Why Choose <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Mumbai's Best SEO Agency</span>
      </h2>
      <h3 className="text-2xl font-bold text-gray-700 mb-4">
        Why Leading Brands Across Mumbai Choose DPM IT Solutions
      </h3>
    </div>

    <div className="grid lg:grid-cols-2 gap-12 items-center">
      {/* Left Side */}
      <div className="animate-on-scroll slide-from-left">
        <div className="space-y-6">
          {[
            {
              title: "Google-Certified Mumbai Professionals",
              description: "Our team consists of Google-certified SEO experts with advanced qualifications and proven expertise in Mumbai market dynamics.",
              icon: "🏆",
              color: "blue"
            },
            {
              title: "Transparent Reporting",
              description: "Get detailed monthly reports with complete transparency on rankings, traffic, conversions, and ROI across Mumbai.",
              icon: "📊",
              color: "green"
            },
            {
              title: "Latest SEO Techniques",
              description: "We use cutting-edge SEO tools and stay updated with latest algorithm changes to ensure best results for Mumbai businesses.",
              icon: "🚀",
              color: "purple"
            },
            {
              title: "Guaranteed Results",
              description: "We offer result-oriented SEO promotion with performance guarantees and money-back assurance for non-performance in Mumbai.",
              icon: "💎",
              color: "pink"
            },
            {
              title: "Customized Mumbai Strategies",
              description: "Every business gets a tailored SEO promotion plan designed specifically for their industry and target audience in Mumbai.",
              icon: "🎯",
              color: "orange"
            },
            {
              title: "Affordable Mumbai Pricing",
              description: "Best SEO services at competitive prices with flexible packages suitable for startups to large enterprises in Mumbai.",
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
              <h3 className="text-2xl font-black text-gray-900 mb-1 text-center">Get Free SEO Consultation</h3>
              <p className="text-center text-gray-600 mb-4 text-sm font-medium">
                Partner with Mumbai's Best SEO Agency Today!
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
                  <option>Select Your Mumbai Area</option>
                  <option>South Mumbai</option>
                  <option>Western Suburbs</option>
                  <option>Eastern Suburbs</option>
                  <option>Navi Mumbai</option>
                  <option>Thane</option>
                  <option>Central Mumbai</option>
                  <option>Other Areas</option>
                </select>
                <select className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors">
                  <option>Select Your Industry</option>
                  <option>E-commerce & Retail</option>
                  <option>Healthcare & Medical</option>
                  <option>Real Estate & Property</option>
                  <option>Education & Training</option>
                  <option>Hospitality & Travel</option>
                  <option>Legal & Financial Services</option>
                  <option>Manufacturing & Industrial</option>
                  <option>Technology & IT Services</option>
                  <option>Restaurant & Food Business</option>
                </select>
                <textarea 
                  placeholder="Tell us about your SEO goals..." 
                  rows="2"
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                ></textarea>
                <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                  Get Free SEO Audit 
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

export default MumbaiBestSeoPromotionService;