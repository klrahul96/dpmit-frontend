import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const HyderabadBestSeoAgencyService = () => {
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Best SEO Service Agency in Hyderabad | Top SEO Services Company - DPM IT Solutions</title>
        <meta name="description" content="DPM IT Solutions is Hyderabad's leading SEO agency offering expert search engine optimization services. Increase organic traffic by 400%+, rank on first page of Google in Hyderabad, and grow your business with proven SEO strategies. Get free SEO audit today!" />
        <meta name="keywords" content="best seo agency hyderabad, seo services hyderabad, search engine optimization hyderabad, seo company hyderabad, digital marketing agency hyderabad, organic seo services, keyword research hyderabad, link building services, local seo hyderabad, technical seo audit, seo expert hyderabad, top seo company hyderabad" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/hyderabad/best-seo-service-agency" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Best SEO Agency in Hyderabad | Top SEO Services - DPM IT Solutions" />
        <meta property="og:description" content="Get top rankings on Google in Hyderabad with the best SEO agency. DPM IT Solutions delivers proven SEO strategies that increase organic traffic and drive business growth in Hyderabad." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/hyderabad/best-seo-service-agency" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/hyderabadseo.jpeg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Agency in Hyderabad | DPM IT Solutions" />
        <meta name="twitter:description" content="Hyderabad's top SEO agency. Increase organic traffic, improve rankings in Hyderabad, and grow your business with expert SEO services." />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/hyderabadseo.jpeg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="ICBM" content="17.3850, 78.4867" />
      </Helmet>

      {/* Main Header - Same as Google Promotion */}
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
              Best SEO Service Agency in Hyderabad
            </h1>
            <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
              Best SEO Service Agency in Hyderabad
            </div>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              Search Engine Optimization | Hyderabad Local Rankings | Keyword Research | Technical SEO | Link Building
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <ScrollingBanner/>

      {/* Section 1: Updated Content for Hyderabad */}
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
                    src="/assets/bestseo.jpeg" 
                    alt="Best SEO Agency Hyderabad - Search Engine Optimization Services" 
                    className="w-full h-85 md:h-120 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">SEO Services Agency Hyderabad</p></div></div>';
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
                Hyderabad's #1 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Service Agency</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                DPM IT Solutions - Your Premier SEO Partner in Hyderabad
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                DPM IT Solutions stands as Hyderabad's most trusted SEO agency, delivering exceptional results for businesses across key areas including HITEC City, Gachibowli, Banjara Hills, Jubilee Hills, Secunderabad, and beyond. As certified SEO experts with deep understanding of Hyderabad's digital landscape, we craft customized optimization strategies that drive sustainable organic growth, superior search rankings, and outstanding ROI specifically tailored for Hyderabad's competitive market.
              </p>
              <div className="space-y-4">
                {[
                  "Customized SEO strategies for Hyderabad market dynamics",
                  "First-page Google rankings for Hyderabad-specific searches",
                  "Proven 400%+ organic traffic growth for Hyderabad clients",
                  "Strategic business expansion across Hyderabad regions"
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

      {/* Section 2: Updated Content for Hyderabad */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        
        <div className="max-w-8xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-from-left">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Why <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO is Critical</span> for Hyderabad Businesses?
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Master Organic Search Results in Hyderabad with Expert SEO
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Hyderabad's explosive digital growth and increasing online search activity make SEO the most powerful long-term strategy to connect with customers actively seeking your products or services. DPM IT Solutions' cutting-edge SEO strategies ensure your business dominates search results when potential customers search across Hyderabad, whether they're in IT corridors, commercial centers, residential neighborhoods, or shopping destinations.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Sustainable Business Growth', description: 'Build lasting organic traffic that compounds over time in Hyderabad market', color: 'blue', icon: '📈' },
                  { title: 'Exceptional ROI', description: 'SEO delivers 14.6% conversion rate vs 1.7% for traditional marketing in Hyderabad', color: 'green', icon: '💰' },
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
                     src="/assets/bestseo1.jpg" 
                    alt="SEO Strategy Services Hyderabad - Organic Search Optimization" 
                    className="w-full h-90 md:h-120 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">SEO Strategy Hyderabad</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

      {/* SEO Services Grid Section - Updated Content for Hyderabad */}
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
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Services</span> Suite
            </h2>
            <h3 className="text-2xl font-bold text-blue-200 mb-4">
              End-to-End SEO Solutions for Hyderabad Market Dominance
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Complete SEO solutions engineered to dominate search engine rankings across Hyderabad and drive sustainable organic growth for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Hyderabad Local Keyword Research & Strategy",
                description: "Comprehensive keyword analysis targeting Hyderabad markets to identify high-value search terms across different areas and local consumer behavior patterns.",
                features: ["Hyderabad Market Analysis", "Local Language Optimization", "Search Intent Mapping", "Competitor Intelligence"],
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Advanced On-Page SEO Optimization",
                description: "Complete optimization of website elements to maximize search engine visibility in Hyderabad and enhance user engagement metrics.",
                features: ["Strategic Meta Tags", "Content Enhancement", "URL Architecture", "Internal Linking Strategy"],
                icon: "📄",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Comprehensive Technical SEO Audit",
                description: "In-depth technical analysis optimized for Hyderabad internet infrastructure to ensure your website meets all search engine requirements.",
                features: ["Performance Optimization", "Mobile-First Optimization", "Structured Data Markup", "XML Sitemap Management"],
                icon: "⚙️",
                gradient: "from-red-500 to-orange-500"
              },
              {
                title: "Strategic Content Marketing & SEO",
                description: "Data-driven content creation that ranks effectively in Hyderabad search results and engages your target audience throughout the city.",
                features: ["SEO-Optimized Content", "Content Strategy Development", "Topic Cluster Creation", "E-A-T Enhancement"],
                icon: "✍️",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Premium Link Building Services",
                description: "White-hat link building strategies focused on acquiring high-quality Hyderabad domain backlinks to increase authority and improve search rankings.",
                features: ["Quality Backlink Acquisition", "Strategic Guest Posting", "Digital PR Campaigns", "Broken Link Building"],
                icon: "🔗",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Local Hyderabad SEO Dominance",
                description: "Comprehensive optimization of your online presence for searches across all Hyderabad areas to attract customers from multiple strategic locations.",
                features: ["Area-Specific Targeting", "Local Business Optimization", "Review Strategy Management", "Local Citation Building"],
                icon: "🏙️",
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

      {/* SEO Success Stories Section - Updated Content for Hyderabad */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-semibold text-sm">📈 Client Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              SEO <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Transformation Stories</span> with DPM IT Solutions
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Real Results from Our SEO Campaigns Across Hyderabad
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Documented success stories showcasing how our SEO strategies have revolutionized businesses throughout Hyderabad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                business: "Hyderabad E-commerce Platform",
                result: "550% surge in organic traffic",
                roi: "Within 8 months",
                achievement: "First page rankings for 200+ competitive keywords in Hyderabad",
                icon: "🛍️",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                business: "Hyderabad B2B Services Provider", 
                result: "420% increase in qualified leads",
                roi: "Within 10 months",
                achievement: "Achieved #1 ranking for core business keywords across Hyderabad",
                icon: "💼",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                business: "Hyderabad Healthcare Provider",
                result: "600% growth in organic visitors",
                roi: "Within 6 months",
                achievement: "Dominating healthcare service searches throughout Hyderabad regions",
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

      {/* Why Choose Us for SEO - Updated Content for Hyderabad */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose DPM IT Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              What Makes Us Hyderabad's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Leading SEO Agency</span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Why Progressive Businesses in Hyderabad Trust DPM IT Solutions for SEO Excellence
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-from-left">
              <div className="space-y-6">
                {[
                  {
                    title: "SEO Certified Professionals",
                    description: "Our elite team comprises certified SEO specialists with proven expertise in optimizing websites for Hyderabad's dynamic and competitive digital marketplace across diverse industry sectors.",
                    icon: "🏆",
                    color: "blue"
                  },
                  {
                    title: "Innovative SEO Methodologies",
                    description: "We deploy advanced optimization techniques, AI-driven analytics, and data-centric strategies specifically calibrated for Hyderabad market dynamics to ensure maximum organic growth potential.",
                    icon: "🚀",
                    color: "purple"
                  },
                  {
                    title: "Transparent Performance Analytics",
                    description: "Comprehensive real-time dashboards and detailed monthly performance reports showcasing keyword rankings across Hyderabad, traffic growth patterns, and ROI metrics for complete campaign transparency.",
                    icon: "📊",
                    color: "green"
                  },
                  {
                    title: "Dedicated SEO Strategy Manager",
                    description: "Personal SEO strategy manager with deep understanding of Hyderabad business ecosystem and your specific objectives, continuously optimizing for superior search rankings throughout the city.",
                    icon: "👤",
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
                    <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">Get Your Free SEO Audit</h3>
                    <p className="text-center text-gray-600 mb-6 font-medium">Begin Your SEO Success Journey with DPM IT Solutions!</p>
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
                        <option>Select Your Industry</option>
                        <option>E-commerce/Retail</option>
                        <option>B2B Services</option>
                        <option>Healthcare</option>
                        <option>Real Estate</option>
                        <option>Technology/IT</option>
                        <option>Education</option>
                        <option>Hospitality/Travel</option>
                        <option>Professional Services</option>
                      </select>
                      <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
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
  );
};

export default HyderabadBestSeoAgencyService;