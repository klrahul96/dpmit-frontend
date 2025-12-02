import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../../Components/ScrollingBanner';


const TilakNagarFirstGooglePromotion = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const form = e.target;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          name: formData.get('name'),
          company: formData.get('company'),
          website: formData.get('website'),
          phone: formData.get('phone'),
          email: formData.get('email'),
          location: formData.get('location'),
          subject: 'Free SEO Audit Request - Tilak Nagar First Google Promotion',
          from_name: 'DPM IT Solutions Website',
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
        console.error('Form submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Google First Page Promotion Services in Tilak Nagar | DPM IT Solutions</title>
        <meta name="title" content="Google First Page Promotion Services in Tilak Nagar | DPM IT Solutions" />
        <meta name="description" content="DPM IT Solutions provides expert Google First Page Promotion Services in Tilak Nagar. Get guaranteed Google rankings with our professional SEO services. Best SEO company in Tilak Nagar." />
        <meta name="keywords" content="google first page promotion tilak nagar, dpm it solutions tilak nagar, seo services tilak nagar, google ranking tilak nagar, first page seo tilak nagar, local seo tilak nagar, website ranking tilak nagar, best seo company tilak nagar" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/tilak-nagar" />
        <meta property="og:title" content="Google First Page Promotion Services in Tilak Nagar | DPM IT Solutions" />
        <meta property="og:description" content="DPM IT Solutions provides expert Google First Page Promotion Services in Tilak Nagar. Get guaranteed Google rankings with our professional SEO services." />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/google.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolutions.com/tilak-nagar" />
        <meta property="twitter:title" content="Google First Page Promotion Services in Tilak Nagar | DPM IT Solutions" />
        <meta property="twitter:description" content="DPM IT Solutions provides expert Google First Page Promotion Services in Tilak Nagar. Get guaranteed Google rankings with our professional SEO services." />
        <meta property="twitter:image" content="https://www.dpmitsolutions.com/assets/google.png" />

        <link rel="canonical" href="https://www.dpmitsolutions.com/tilak-nagar" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Header Section */}
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
                Google First Page Promotion Services in Tilak Nagar
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Google First Page Promotion Services in Tilak Nagar
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                DPM IT Solutions - Get Your Website on Google's First Page | Professional SEO Services in Tilak Nagar | Guaranteed Rankings
              </p>
            </div>
          </div>
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
                      src="/assets/google1.jpg" 
                      alt="Google First Page Promotion Services Tilak Nagar by DPM IT Solutions" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🎯</div><p class="text-gray-600">Google First Page Promotion</p></div></div>';
                      }}
                    />
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2 animate-on-scroll slide-from-right">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Achieve <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page Ranking</span> in Tilak Nagar
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At DPM IT Solutions, we specialize in getting Tilak Nagar businesses to the first page of Google search results. With our proven SEO strategies and local market expertise, we help you outrank competitors and attract more customers from your area.
                </p>
                <div className="space-y-4">
                  {[
                    "Guaranteed first page ranking for Tilak Nagar businesses",
                    "Professional local SEO optimization targeting Tilak Nagar customers",
                    "Comprehensive keyword research for your specific industry",
                    "White-hat SEO techniques for sustainable, long-term results"
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
                  Why <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Tilak Nagar Businesses</span> Choose DPM IT Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We understand the unique digital landscape of Tilak Nagar and create customized SEO strategies that deliver real results. Our local expertise combined with technical excellence ensures your business gets the visibility it deserves.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Local Market Expertise', description: 'Deep understanding of Tilak Nagar customer search behavior and local competition dynamics', color: 'blue', icon: '🎯' },
                    { title: 'Proven Ranking Success', description: 'Track record of getting Tilak Nagar businesses to Google first page consistently', color: 'green', icon: '📈' },
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
                      alt="SEO Services for Tilak Nagar Businesses by DPM IT Solutions" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🚀</div><p class="text-gray-600">SEO Success Stories</p></div></div>';
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
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
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Google First Page Promotion</span> Package
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions offers comprehensive SEO services specifically designed to get Tilak Nagar businesses to the first page of Google search results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Local SEO for Tilak Nagar",
                  description: "Optimize your online presence to attract customers from Tilak Nagar and surrounding areas.",
                  features: ["Google Business Profile", "Local Citations", "Area-Specific Keywords", "Customer Reviews"],
                  icon: "📍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "On-Page SEO Optimization",
                  description: "Complete optimization of your website content and structure for better rankings.",
                  features: ["Keyword Optimization", "Meta Tags", "Content Quality", "User Experience"],
                  icon: "⚙️",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Technical SEO Audit",
                  description: "Comprehensive analysis and fixing of technical issues affecting your rankings.",
                  features: ["Site Speed", "Mobile Optimization", "Indexation", "Structured Data"],
                  icon: "🔧",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Content Marketing",
                  description: "Create engaging content that ranks well and attracts your target audience.",
                  features: ["Blog Posts", "Articles", "Local Content", "SEO Copywriting"],
                  icon: "📝",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Link Building Strategy",
                  description: "Build high-quality backlinks to improve your website authority and rankings.",
                  features: ["Guest Posting", "Local Directories", "Business Listings", "Quality Links"],
                  icon: "🔗",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Ranking Monitoring",
                  description: "Continuous tracking and optimization to maintain your first page position.",
                  features: ["Rank Tracking", "Performance Reports", "Strategy Updates", "Competitor Analysis"],
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

        {/* Success Stories Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Tilak Nagar Businesses on <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Google First Page</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how we've helped local businesses in Tilak Nagar achieve first page rankings and significant growth with our SEO strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Tilak Nagar Restaurant",
                  result: "First page for 'best restaurant Tilak Nagar'",
                  roi: "Online orders increased by 300%",
                  achievement: "Top 3 ranking in local search",
                  icon: "🍽️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Local Jewelry Store", 
                  result: "First page for 'jewelry shop Tilak Nagar'",
                  roi: "Customer inquiries up by 250%",
                  achievement: "Dominant local presence",
                  icon: "💎",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Tilak Nagar Service Business",
                  result: "First page for multiple service keywords",
                  roi: "Service bookings increased by 400%",
                  achievement: "Established as local authority",
                  icon: "🔧",
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
                          <p className="text-green-600 font-semibold text-lg">Ranking: {story.result}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <p className="text-gray-700">Result: {story.roi}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <span className="text-purple-600 font-bold">✓</span>
                          <p className="text-gray-700">{story.achievement}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-10 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">Get First Page Ranking</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Ready for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page?</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Let DPM IT Solutions Transform Your Online Presence in Tilak Nagar
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Tilak Nagar SEO Experts",
                      description: "We specialize in getting Tilak Nagar businesses to Google first page with local SEO expertise.",
                      icon: "🎯",
                      color: "blue",
                    },
                    {
                      title: "Guaranteed Results",
                      description: "Our proven strategies deliver measurable results and first page rankings for your business.",
                      icon: "✅",
                      color: "purple",
                    },
                    {
                      title: "Local Market Knowledge",
                      description: "Deep understanding of Tilak Nagar market dynamics and customer search behavior.",
                      icon: "🏢",
                      color: "green",
                    },
                    {
                      title: "Continuous Optimization",
                      description: "Ongoing monitoring and optimization to maintain your first page position.",
                      icon: "📊",
                      color: "pink",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="group flex items-start space-x-4 animate-on-scroll slide-from-left"
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      <div
                        className={`w-14 h-14 bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE FORM */}
              <div className="animate-on-scroll slide-from-right flex items-start h-full">
                <div className="relative group w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-6 rounded-3xl shadow-2xl">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                    <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-6">
                      <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">
                        Get Free SEO Audit from DPM IT Solutions
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        Start Your Journey to Google First Page Today!
                      </p>

                      {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                          ✅ Thank you! We'll contact you shortly with your free SEO audit.
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                          ❌ There was an error. Please try again or contact us directly.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Business Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="website"
                          placeholder="Website URL"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="phone"
                          placeholder="Phone Number"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <select 
                          name="location" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Business Location</option>
                          <option value="Tilak Nagar">Tilak Nagar</option>
                          <option value="Rajouri Garden">Rajouri Garden</option>
                          <option value="Janakpuri">Janakpuri</option>
                          <option value="Subhash Nagar">Subhash Nagar</option>
                          <option value="Other">Other Area</option>
                        </select>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free SEO Analysis'}
                        </button>
                      </form>
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

export default TilakNagarFirstGooglePromotion;