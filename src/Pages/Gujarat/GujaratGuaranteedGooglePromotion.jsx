import React, { useEffect } from 'react';
import ScrollingBanner from '../../Components/ScrollingBanner';

const GujaratGuaranteedGooglePromotion = () => {
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Updated Main Header with New Design */}
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
              Guaranteed Google Promotion Services in Gujarat
            </h1>
            <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
              Guaranteed Google Promotion Services in Gujarat
            </div>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              Google Ads | Search Campaigns | Display Advertising | YouTube Ads | Shopping Campaigns | Remarketing
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

       <ScrollingBanner/>

      {/* Updated Section 1: Image Left, Content Right */}
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
                    src="/assets/google1.jpg" 
                    alt="Google Ads Services Gujarat - Guaranteed First Page Results" 
                    className="w-full h-85 md:h-120 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🎯</div><p class="text-gray-600">Google Promotion Services Gujarat</p></div></div>';
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
                Guaranteed <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page</span> Ranking in Gujarat
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                DPM IT Solutions - Your Trusted Google Ads Partner
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                As Gujarat's leading Google Ads agency, DPM IT Solutions delivers guaranteed first-page visibility through strategic Google promotion services. Our certified experts specialize in Google Ads management, PPC campaigns, and Google Business Profile optimization to drive immediate, targeted traffic to your business across Ahmedabad, Surat, Vadodara, and throughout Gujarat.
              </p>
              <div className="space-y-4">
                {[
                  "Guaranteed first page visibility within 24-48 hours",
                  "Expert Google Ads campaign management by certified professionals",
                  "Complete Google Business Profile optimization & verification",
                  "Real-time performance tracking with detailed analytics dashboard"
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

      {/* Updated Section 2: Content Left, Image Right */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        
        <div className="max-w-8xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-from-left">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Why Choose DPM IT Solutions for <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Google Promotion</span>?
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Gujarat's Most Trusted Google Ads Management Agency
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At DPM IT Solutions, we combine cutting-edge Google Ads strategies with deep local market knowledge of Gujarat. Our data-driven approach ensures your business achieves maximum visibility, higher conversion rates, and exceptional ROI through precisely targeted PPC campaigns across all major Gujarati cities and regions.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Immediate Results', description: 'Get on Google first page within hours with our proven strategies', color: 'blue', icon: '⚡' },
                  { title: 'Cost-Effective Campaigns', description: 'Maximize your budget with optimized PPC management', color: 'green', icon: '💰' },
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
                    src="/assets/google2.jpg" 
                    alt="Google Ads Management Gujarat - DPM IT Solutions" 
                    className="w-full h-98 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">📈</div><p class="text-gray-600">Google Ads Experts Gujarat</p></div></div>';
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

      {/* Updated Services Section */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white font-semibold text-sm">🚀 Our Google Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Google Marketing</span> Solutions
            </h2>
            <h3 className="text-2xl font-bold text-blue-200 mb-4">
              End-to-End Google Advertising Services by DPM IT Solutions
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              As Gujarat's premier Google Ads agency, DPM IT Solutions offers comprehensive Google promotion services designed to maximize your online visibility and drive qualified traffic across all Google platforms throughout Gujarat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google Search Ads",
                description: "Dominate Google search results across Gujarat with targeted text ads that appear when potential customers search for your products or services.",
                features: ["Advanced Keyword Research", "Compelling Ad Copywriting", "Smart Bid Management", "Continuous Optimization"],
                icon: "🔍",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Google Display Network",
                description: "Reach millions of websites across Gujarat with visually stunning banner ads that capture attention and drive conversions.",
                features: ["Creative Banner Design", "Precise Audience Targeting", "Placement Optimization", "Responsive Display Ads"],
                icon: "🎨",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "YouTube Advertising",
                description: "Engage Gujarat's massive YouTube audience with compelling video ads that tell your brand story and drive action.",
                features: ["Video Ad Production", "TrueView Campaigns", "In-Stream Advertising", "Bumper Ads Strategy"],
                icon: "📺",
                gradient: "from-red-500 to-orange-500"
              },
              {
                title: "Google Shopping Ads",
                description: "Showcase your products directly in Google search results with rich product listings that convert Gujarat shoppers.",
                features: ["Product Feed Optimization", "Shopping Campaigns Setup", "Merchant Center Management", "Smart Shopping"],
                icon: "🛒",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Remarketing Campaigns",
                description: "Re-engage visitors across Gujarat who previously interacted with your website, dramatically increasing conversion rates.",
                features: ["Dynamic Remarketing", "RLSA Campaigns", "Custom Audience Segments", "Cross-Platform Retargeting"],
                icon: "🎯",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Performance Max Campaigns",
                description: "Leverage Google's AI to automatically optimize your ads across all Google channels for maximum ROI in Gujarat markets.",
                features: ["AI-Powered Optimization", "Cross-Channel Advertising", "Asset Group Creation", "Advanced Conversion Tracking"],
                icon: "⚡",
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

      {/* Updated Success Stories Section */}
      <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-semibold text-sm">📈 Our Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Proven Results with <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">DPM IT Solutions</span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Transforming Businesses Across Gujarat with Google Ads
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Discover how DPM IT Solutions has helped businesses across Gujarat achieve remarkable growth through strategic Google promotion campaigns.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                business: "Restaurant Chain in Ahmedabad",
                result: "450+ online orders monthly via Google Ads",
                roi: "ROAS: 8:1",
                achievement: "First page ranking for 30+ food keywords",
                icon: "🍽️",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                business: "Real Estate Developer in Surat", 
                result: "60+ qualified property leads monthly",
                roi: "Cost per lead: ₹900",
                achievement: "300% increase in site visits",
                icon: "🏢",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                business: "Beauty Salon in Vadodara",
                result: "280+ appointments booked monthly",
                roi: "ROAS: 11:1",
                achievement: "Reduced cost per acquisition by 70%",
                icon: "💅",
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

      {/* Updated SEO Section */}
      <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        <div className="relative max-w-8xl mx-auto px-4">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">🔍 SEO Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Gujarat's Leading <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Agency</span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Comprehensive SEO Solutions by DPM IT Solutions
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Combine the immediate impact of Google Ads with sustainable long-term SEO growth. DPM IT Solutions offers complete digital marketing solutions tailored for Gujarat businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Technical SEO",
                description: "Optimize your website infrastructure for better search engine crawling and indexing performance",
                icon: "⚙️",
                features: ["Site Speed Optimization", "Mobile-First Optimization", "Schema Markup Implementation", "XML Sitemap Creation"]
              },
              {
                title: "On-Page SEO",
                description: "Optimize your content and HTML source code for maximum search visibility and user engagement",
                icon: "📄",
                features: ["Strategic Keyword Optimization", "Meta Tags Optimization", "Content Strategy Development", "Internal Linking Structure"]
              },
              {
                title: "Off-Page SEO",
                description: "Build domain authority and credibility through strategic backlinks and digital PR",
                icon: "🔗",
                features: ["Quality Link Building", "Local Business Citations", "Brand Mention Monitoring", "Social Signals Optimization"]
              },
              {
                title: "Local SEO",
                description: "Dominate local search results across Gujarat with targeted local SEO strategies",
                icon: "📍",
                features: ["Google Business Profile Optimization", "Local Directory Listings", "Review Management", "Local Keyword Targeting"]
              }
            ].map((service, idx) => (
              <div key={idx} className="group animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative h-full bg-white p-6 rounded-3xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    <div className="space-y-2">
                      {service.features.map((feature, fidx) => (
                        <div key={fidx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                          <span className="text-gray-600 text-sm">{feature}</span>
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

      {/* Updated Why Choose Us Section */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">⭐ Why DPM IT Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Gujarat's Most Trusted <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google Ads Agency</span>
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Why Businesses Across Gujarat Choose DPM IT Solutions
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-from-left">
              <div className="space-y-6">
                {[
                  {
                    title: "Google Certified Professionals",
                    description: "Our team comprises Google Ads certified experts with proven track records in managing successful campaigns across diverse industries in Gujarat.",
                    icon: "🏆",
                    color: "blue"
                  },
                  {
                    title: "Advanced Campaign Strategies",
                    description: "We implement sophisticated bidding strategies, precise audience segmentation, and AI-powered optimization specifically tailored for Gujarat market dynamics.",
                    icon: "🚀",
                    color: "purple"
                  },
                  {
                    title: "Transparent Performance Reporting",
                    description: "Access real-time dashboards and comprehensive monthly reports showing exactly how your ad budget drives results across different Gujarat regions.",
                    icon: "📊",
                    color: "green"
                  },
                  {
                    title: "Dedicated Account Management",
                    description: "Get a personal account manager who understands the Gujarat business landscape and continuously optimizes your campaigns for maximum ROI.",
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
                    <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">Get Free Google Ads Audit</h3>
                    <p className="text-center text-gray-600 mb-6 font-medium">Start Your Success Journey with DPM IT Solutions!</p>
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
                        Get Free Google Ads Audit 
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

export default GujaratGuaranteedGooglePromotion;