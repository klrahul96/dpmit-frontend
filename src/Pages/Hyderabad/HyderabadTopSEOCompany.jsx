import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const HyderabadTopSEOCompany = () => {
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
        <title>Top SEO Company in Hyderabad | Best SEO Services Hyderabad - DPM IT Solutions</title>
        <meta 
          name="description" 
          content="DPM IT Solutions is Hyderabad's leading SEO company offering guaranteed Google rankings. Expert SEO services for businesses across Hi-Tec City, Gachibowli, Madhapur & all Hyderabad areas." 
        />
        <meta 
          name="keywords" 
          content="top SEO company Hyderabad, best SEO services Hyderabad, SEO expert Hyderabad, search engine optimization Hyderabad, local SEO Hyderabad, SEO agency Hyderabad, website SEO Hyderabad, organic SEO Hyderabad, digital marketing Hyderabad, Google ranking Hyderabad" 
        />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top SEO Company in Hyderabad | Best SEO Services - DPM IT Solutions" />
        <meta 
          property="og:description" 
          content="Hyderabad's leading SEO company offering guaranteed top Google rankings. Expert SEO services for local businesses across all Hyderabad areas." 
        />
        <meta property="og:image" content="/assets/sep.png" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/hyderabad/top-seo-company" />
        <meta property="og:site_name" content="DPM IT Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top SEO Company in Hyderabad | Best SEO Services - DPM IT Solutions" />
        <meta 
          name="twitter:description" 
          content="Hyderabad's leading SEO company offering guaranteed top Google rankings. Expert SEO services for local businesses." 
        />
        <meta name="twitter:image" content="/assets/sep.png" />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.dpmitsolutions.com/hyderabad/top-seo-company" />
        
        {/* Structured Data - Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DPM IT Solutions - Top SEO Company Hyderabad",
            "image": "https://www.dpmitsolutions.com/logo.png",
            "url": "https://www.dpmitsolutions.com/hyderabad/top-seo-company",
            "telephone": "+91-XXXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Hyderabad",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "postalCode": "500001",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.3850,
              "longitude": 78.4867
            },
            "description": "Top SEO Company in Hyderabad offering professional search engine optimization services for businesses across all Hyderabad areas",
            "priceRange": "$$",
            "areaServed": {
              "@type": "City",
              "name": "Hyderabad"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header with Enhanced Animated Background */}
        <div className="relative h-90 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          {/* Animated mesh background */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(29,78,216,0.8),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(126,34,206,0.6),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(67,56,202,0.7),transparent_50%)]"></div>
          </div>

          {/* Floating geometric shapes with advanced animations */}
          <div className="absolute inset-0">
            {/* Large floating crystals */}
            <div className="absolute top-20 left-16" style={{ animation: 'bounce 6s infinite' }}>
              <div className="relative group">
                <div className="w-24 h-24 bg-gradient-to-tr from-cyan-400 via-blue-500 to-purple-600 rounded-2xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500 shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-xl"></div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
                </div>
              </div>
            </div>

            {/* Neon circles */}
            <div className="absolute top-32 right-20" style={{ animation: 'bounce 4s infinite 1s' }}>
              <div className="relative">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500" style={{ animation: 'spin 10s linear infinite' }}>
                  <div className="absolute inset-4 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500" style={{ animation: 'pulse 2s infinite' }}>
                    <div className="absolute inset-4 rounded-full bg-slate-900/80 backdrop-blur-sm"></div>
                  </div>
                </div>
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-pink-500 to-indigo-500 blur-2xl opacity-60" style={{ animation: 'pulse 2s infinite' }}></div>
              </div>
            </div>

            {/* Morphing hexagons */}
            <div className="absolute bottom-32 left-24" style={{ animation: 'pulse 3s infinite' }}>
              <div className="relative">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-600 transform rotate-45 rounded-lg shadow-2xl">
                  <div className="absolute inset-2 bg-gradient-to-tl from-white/30 to-transparent rounded-md"></div>
                </div>
                <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-tr from-lime-400 to-emerald-500 rounded-lg opacity-80" style={{ animation: 'ping 2s infinite' }}></div>
              </div>
            </div>

            {/* Dynamic triangular prisms */}
            <div className="absolute top-1/2 right-32" style={{ animation: 'bounce 5s infinite 2s' }}>
              <div className="relative group">
                <div className="w-0 h-0 border-l-[16px] border-r-[16px] border-b-[24px] border-l-transparent border-r-transparent border-b-rose-500 filter drop-shadow-2xl">
                  <div className="absolute -top-6 -left-4 w-8 h-8 bg-gradient-to-br from-white/40 to-transparent transform rotate-45"></div>
                </div>
                <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-pink-600 blur-xl opacity-50 rounded-full" style={{ animation: 'pulse 2s infinite' }}></div>
              </div>
            </div>
          </div>

          {/* Advanced particle system */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  width: `${Math.random() * 4 + 1}px`,
                  height: `${Math.random() * 4 + 1}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#60A5FA', '#A855F7', '#EC4899', '#10B981', '#F59E0B'][Math.floor(Math.random() * 5)],
                  opacity: Math.random() * 0.8 + 0.2,
                  animation: `bounce ${Math.random() * 10 + 5}s infinite ${Math.random() * 5}s`
                }}
              />
            ))}
          </div>

          {/* Flowing light streams */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-60" style={{ animation: 'pulse 2s infinite' }}></div>
            <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-400 to-transparent opacity-40" style={{ animation: 'pulse 2s infinite 2s' }}></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-pink-400 to-transparent opacity-50" style={{ animation: 'pulse 2s infinite 4s' }}></div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-4">
            {/* Decorative top element */}
            <div className="mb-8 relative">
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent rounded-full"></div>
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full" style={{ animation: 'ping 2s infinite' }}></div>
              </div>
            </div>

            {/* Enhanced title */}
            <div className="relative mb-8">
              <h1 className="text-4xl md:text-6xl font-black  text-center">
                Top SEO Company in Hyderabad
              </h1>
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-none text-center">
                Top SEO Company in Hyderabad
              </div>
            </div>

            {/* Enhanced subtitle */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                DPM IT Solutions - Hyderabad's Most Trusted SEO Agency | Guaranteed Google Rankings
              </p>
            </div>
          </div>

          {/* Glass morphism overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>

          {/* Dynamic light effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10" style={{ animation: 'pulse 8s infinite' }}></div>
        </div>
        <ScrollingBanner/>

        {/* Enhanced Section 1: Image Left, Content Right */}
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
                      src="/assets/sep.png" 
                      alt="Top SEO Company Hyderabad - DPM IT Solutions SEO Services" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🔍</div><p class="text-gray-600">Top SEO Company Hyderabad</p></div></div>';
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
                  Hyderabad's #1 <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Company</span>
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Premier SEO Agency in Hyderabad
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  As Hyderabad's top SEO company, DPM IT Solutions delivers exceptional search engine optimization results for businesses across all major areas including Hi-Tec City, Gachibowli, Madhapur, Banjara Hills, Jubilee Hills, and Secunderabad. Our proven SEO strategies are specifically designed to boost your Google rankings, drive targeted organic traffic, and generate measurable business growth for Hyderabad-based companies.
                </p>
                <div className="space-y-4">
                  {[
                    "Expert SEO strategies tailored for Hyderabad market",
                    "Proven track record of top Google rankings",
                    "Comprehensive SEO audit and analysis",
                    "Ongoing optimization and performance monitoring"
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

        {/* Enhanced Section 2: Content Left, Image Right */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          
          <div className="max-w-8xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Why Choose <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">DPM IT Solutions</span> for SEO?
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Hyderabad's Most Results-Driven SEO Agency
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions stands out as Hyderabad's premier SEO company because we deliver tangible results. Unlike other agencies, we focus on data-driven strategies that actually work. Our team of SEO experts understands the unique dynamics of Hyderabad's competitive market and creates customized optimization plans that drive real business growth, not just vanity metrics.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Guaranteed Results', description: 'We deliver measurable improvements in rankings and organic traffic', color: 'blue', icon: '🎯' },
                    { title: 'Transparent Reporting', description: 'Complete visibility into your SEO campaign performance', color: 'green', icon: '📊' },
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
                      src="/assets/seoprocess1.png" 
                      alt="SEO Process Hyderabad - DPM IT Solutions Methodology" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🚀</div><p class="text-gray-600">SEO Process Hyderabad</p></div></div>';
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
                <span className="text-white font-semibold text-sm">🚀 Our SEO Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Solutions</span>
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Comprehensive SEO Services for Hyderabad Businesses
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions offers end-to-end SEO services designed to maximize your online visibility and drive sustainable growth for your Hyderabad business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Technical SEO",
                  description: "Complete technical audit and optimization including site structure, page speed, mobile optimization, and crawlability improvements.",
                  features: ["Site Architecture", "Page Speed Optimization", "Mobile-First SEO", "Crawl Efficiency"],
                  icon: "⚙️",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "On-Page SEO",
                  description: "Strategic optimization of content, meta tags, headings, and internal linking structure for maximum search visibility.",
                  features: ["Content Optimization", "Meta Tag Strategy", "Heading Structure", "Internal Linking"],
                  icon: "📄",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Off-Page SEO",
                  description: "Building high-quality backlinks and online authority through strategic link building and digital PR campaigns.",
                  features: ["Link Building", "Guest Posting", "Brand Mentions", "Authority Building"],
                  icon: "🔗",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Local SEO",
                  description: "Dominate local search results with Google My Business optimization and local citation building across Hyderabad.",
                  features: ["GMB Optimization", "Local Citations", "Review Management", "Local Listings"],
                  icon: "📍",
                  gradient: "from-orange-500 to-red-500"
                },
                {
                  title: "E-commerce SEO",
                  description: "Specialized SEO strategies for online stores including product page optimization and category structure.",
                  features: ["Product SEO", "Category Pages", "E-commerce Schema", "Shopping Feeds"],
                  icon: "🛒",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "SEO Analytics",
                  description: "Comprehensive tracking, reporting, and analysis to measure ROI and optimize campaign performance.",
                  features: ["Performance Tracking", "ROI Analysis", "Ranking Reports", "Traffic Analysis"],
                  icon: "📊",
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

        {/* Enhanced Success Stories Section */}
        <section className="py-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Our Results</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Proven <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Success</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results from Our Hyderabad SEO Clients
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how DPM IT Solutions has helped Hyderabad businesses achieve remarkable growth through strategic SEO implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "IT Services Company - Hi-Tec City",
                  result: "480% increase in qualified leads",
                  roi: "ROI: 12:1",
                  achievement: "Top rankings for 45+ competitive IT service keywords",
                  icon: "💻",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Healthcare Provider - Banjara Hills", 
                  result: "320% more appointment bookings",
                  roi: "ROI: 15:1",
                  achievement: "Page 1 rankings for all major healthcare services",
                  icon: "🏥",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  business: "Educational Institute - Gachibowli",
                  result: "5x increase in student inquiries",
                  roi: "ROI: 18:1",
                  achievement: "Dominating education search results in Hyderabad",
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

        {/* Enhanced Why Choose Us Section */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-10 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-3">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose DPM IT Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-5">
                Why We're Hyderabad's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Top SEO Choice</span>
              </h2>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-4">
                What Sets DPM IT Solutions Apart from Other SEO Companies
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div className="animate-on-scroll slide-from-left">
                <div className="space-y-5">
                  {[
                    {
                      title: "Proven SEO Methodology",
                      description: "Our data-driven SEO approach has been refined over years of delivering successful results for Hyderabad businesses across all industries.",
                      icon: "🎯",
                      color: "blue"
                    },
                    {
                      title: "Certified SEO Experts",
                      description: "Our team consists of Google-certified SEO professionals with extensive experience in Hyderabad's competitive digital landscape.",
                      icon: "🏆",
                      color: "purple"
                    },
                    {
                      title: "Customized Strategies",
                      description: "We create tailored SEO strategies that align with your specific business goals and target audience in Hyderabad.",
                      icon: "📋",
                      color: "green"
                    },
                    {
                      title: "Transparent Communication",
                      description: "Regular progress updates and detailed reporting ensure you're always informed about your SEO campaign performance.",
                      icon: "💬",
                      color: "pink"
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="group flex items-start space-x-4 animate-on-scroll slide-from-left" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className={`w-12 h-12 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-1.5">{item.title}</h3>
                        <p className="text-gray-700 leading-relaxed text-sm">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="animate-on-scroll slide-from-right">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-5">
                      <h3 className="text-2xl font-black text-gray-900 mb-2 text-center">Get Free SEO Audit</h3>
                      <p className="text-center text-gray-700 mb-4 font-medium text-sm">Start Your SEO Journey with Hyderabad's Top SEO Company!</p>
                      <div className="space-y-2.5">
                        <input 
                          type="text" 
                          placeholder="Your Name" 
                          className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800 placeholder-gray-500"
                        />
                        <input 
                          type="text" 
                          placeholder="Business Name" 
                          className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800 placeholder-gray-500"
                        />
                        <input 
                          type="text" 
                          placeholder="Website URL" 
                          className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800 placeholder-gray-500"
                        />
                        <input 
                          type="text" 
                          placeholder="Your Phone Number" 
                          className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800 placeholder-gray-500"
                        />
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800 placeholder-gray-500"
                        />
                        <select className="w-full p-2.5 border border-gray-300 rounded-xl focus:border-blue-500 focus:outline-none transition-colors text-[15px] text-gray-800">
                          <option>Select Your Business Type</option>
                          <option>IT Services</option>
                          <option>Healthcare</option>
                          <option>Education</option>
                          <option>Retail</option>
                          <option>Real Estate</option>
                          <option>Hospitality</option>
                          <option>Manufacturing</option>
                          <option>E-commerce</option>
                          <option>Other Business</option>
                        </select>
                        <button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2.5 rounded-lg font-semibold text-[16px] hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                          Get Free SEO Analysis 
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

export default HyderabadTopSEOCompany;