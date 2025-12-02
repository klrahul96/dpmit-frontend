import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const SeoAgencyDelhi = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    phone: '',
    email: '',
    industry: '',
    message: 'I am interested in SEO services and would like a free SEO audit.'
  });

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          subject: 'New SEO Service Inquiry - DPM IT Solutions',
          from_name: 'DPM IT Solutions Website',
          ...formData,
          'Company Name': formData.company,
          'Website URL': formData.website,
          'Phone Number': formData.phone,
          'Industry Type': formData.industry
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          company: '',
          website: '',
          phone: '',
          email: '',
          industry: '',
          message: 'I am interested in SEO services and would like a free SEO audit.'
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>SEO Service Agency in Delhi | DPM IT Solutions - Top SEO Company</title>
        <meta name="description" content="Leading SEO Agency in Delhi - DPM IT Solutions offers professional SEO services, organic ranking, keyword research, technical SEO & link building. Get 300%+ traffic growth. Call now!" />
        <meta name="keywords" content="SEO agency Delhi, SEO services Delhi, best SEO company Delhi, search engine optimization Delhi, SEO expert Delhi, organic SEO services, local SEO Delhi, technical SEO services, link building services, keyword research Delhi, DPM IT Solutions, top SEO agency India" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Best SEO Service Agency in Delhi | DPM IT Solutions" />
        <meta property="og:description" content="Professional SEO services in Delhi. Drive organic traffic, improve rankings & boost ROI with data-driven SEO strategies. 10+ years experience." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/delhi/seo-service-agency" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/seoajency.webp" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best SEO Service Agency in Delhi | DPM IT Solutions" />
        <meta name="twitter:description" content="Leading SEO agency in Delhi offering professional search engine optimization services. Increase organic traffic by 300%+." />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/seoajency.webp" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/delhi/seo-service-agency" />
        
        {/* Schema.org markup for Local Business */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "SEOAgency",
              "name": "DPM IT Solutions",
              "description": "Leading SEO Service Agency in Delhi offering professional search engine optimization services",
              "url": "https://www.dpmitsolutions.com/delhi/seo-service-agency",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Delhi",
                "addressCountry": "IN"
              },
              "areaServed": "Delhi",
              "priceRange": "$$",
              "telephone": "+91-XXXXXXXXXX",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "150"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header Image */}
        <div className="relative w-full h-90 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
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
                SEO Service Agency in Delhi
              </h1>
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                SEO Service Agency in Delhi
              </div>
            </div>

            {/* Enhanced subtitle */}
            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Search Engine Optimization | Organic Rankings | Keyword Research | Technical SEO | Link Building
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
                      src="/assets/seoajency.webp" 
                      alt="Best SEO Agency Delhi - Search Engine Optimization Services" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">SEO Services Agency</p></div></div>';
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
                  Delhi's Leading <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">SEO Service Agency</span> for Business Growth
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Certified SEO Experts
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions is a premier SEO agency in Delhi specializing in driving organic traffic, improving search rankings, and delivering measurable ROI. Our data-driven SEO strategies help businesses dominate search engines and achieve sustainable online growth.
                </p>
                <div className="space-y-4">
                  {[
                    "Rank on first page of Google search results",
                    "Increase organic traffic by 300% or more",
                    "Boost online visibility and brand authority",
                    "Get sustainable long-term business growth"
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
                  Why Professional SEO is <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Critical</span> for Your Business?
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Dominate Search Results with Expert SEO Management
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In today's digital landscape, 93% of online experiences begin with a search engine. DPM IT Solutions' expert SEO services ensure your business appears when customers search for your products or services, driving qualified leads and increasing revenue.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Organic Traffic', description: 'SEO drives 1000%+ more traffic than social media', color: 'blue', icon: '🚀' },
                    { title: 'High ROI', description: 'SEO delivers 14.6% close rate vs 1.7% for outbound', color: 'green', icon: '💰' },
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
                      alt="SEO Strategy Services Delhi - Organic Search Optimization" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">SEO Strategy</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

        {/* SEO Services Grid Section */}
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
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Services</span> Package
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                End-to-End SEO Solutions by DPM IT Solutions
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive SEO solutions designed to dominate search engine rankings and drive continuous organic growth for your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Keyword Research & Strategy",
                  description: "In-depth keyword analysis to identify high-value search terms that drive qualified traffic to your website.",
                  features: ["Competitor Analysis", "Long-tail Keywords", "Search Intent Mapping", "Keyword Gap Analysis"],
                  icon: "🔍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "On-Page SEO Optimization",
                  description: "Complete optimization of website elements to improve search engine visibility and user experience.",
                  features: ["Meta Tags Optimization", "Content Optimization", "URL Structure", "Internal Linking"],
                  icon: "📄",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Technical SEO Audit",
                  description: "Comprehensive technical analysis and fixes to ensure your website meets all search engine requirements.",
                  features: ["Site Speed Optimization", "Mobile Optimization", "Schema Markup", "XML Sitemap"],
                  icon: "⚙️",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Content Marketing & SEO",
                  description: "Strategic content creation that ranks well in search engines and engages your target audience.",
                  features: ["SEO Blog Writing", "Content Strategy", "Topic Clusters", "E-A-T Optimization"],
                  icon: "✍️",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Link Building Services",
                  description: "White-hat link building strategies to increase domain authority and improve search rankings.",
                  features: ["Quality Backlinks", "Guest Posting", "Digital PR", "Broken Link Building"],
                  icon: "🔗",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Local SEO Optimization",
                  description: "Optimize your online presence for local searches to attract nearby customers and increase foot traffic.",
                  features: ["Google Business Profile", "Local Citations", "Review Management", "Local Link Building"],
                  icon: "📍",
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

        {/* SEO Success Stories Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Client <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span> with DPM IT Solutions
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Proven Results from Our SEO Campaigns
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how businesses achieved remarkable growth through our proven SEO strategies and expertise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "E-commerce Store",
                  result: "450% increase in organic traffic",
                  roi: "Within 6 months",
                  achievement: "First page rankings for 200+ keywords",
                  icon: "🛍️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "B2B Software Company", 
                  result: "320% growth in qualified leads",
                  roi: "Within 8 months",
                  achievement: "Ranked #1 for primary business keywords",
                  icon: "💼",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Healthcare Provider",
                  result: "500% boost in organic visitors",
                  roi: "Within 5 months",
                  achievement: "Dominating local healthcare searches",
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

        {/* Why Choose Us for SEO */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What Sets Us Apart as Delhi's{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Best SEO Agency
                </span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Why Leading Brands Choose DPM IT Solutions for SEO
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Proven SEO Expertise",
                      description: "DPM IT Solutions has 10+ years of experience delivering top rankings and measurable results for businesses across all industries.",
                      icon: "🏆",
                      color: "blue",
                    },
                    {
                      title: "Data-Driven Approach",
                      description: "We use advanced analytics and SEO tools to make informed decisions that maximize your search visibility and ROI.",
                      icon: "🚀",
                      color: "purple",
                    },
                    {
                      title: "White-Hat Techniques Only",
                      description: "Our ethical SEO practices ensure sustainable rankings without risk of penalties from search engines.",
                      icon: "🛡️",
                      color: "green",
                    },
                    {
                      title: "Transparent Reporting",
                      description: "Regular detailed reports showing keyword rankings, traffic growth, and ROI so you always know your investment value.",
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
                        Get Free SEO Audit
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        Start Your SEO Campaign with DPM IT Solutions!
                      </p>
                      
                      {/* Form Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                          ✅ Thank you! Your request has been submitted successfully. We'll contact you shortly.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                          ❌ There was an error submitting your request. Please try again or contact us directly.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="text"
                          name="company"
                          placeholder="Company Name"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="url"
                          name="website"
                          placeholder="Website URL"
                          value={formData.website}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Your Phone Number"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <input
                          type="email"
                          name="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        />
                        <select 
                          name="industry"
                          value={formData.industry}
                          onChange={handleInputChange}
                          required
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        >
                          <option value="">Select Your Industry</option>
                          <option value="E-commerce/Retail">E-commerce/Retail</option>
                          <option value="B2B Services">B2B Services</option>
                          <option value="Healthcare">Healthcare</option>
                          <option value="Real Estate">Real Estate</option>
                          <option value="Technology/IT">Technology/IT</option>
                          <option value="Education">Education</option>
                          <option value="Hospitality/Travel">Hospitality/Travel</option>
                          <option value="Professional Services">Professional Services</option>
                        </select>
                        
                        {/* Hidden message field */}
                        <input type="hidden" name="message" value={formData.message} />
                        
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform transition-all duration-300 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'
                          }`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free SEO Audit'}
                        </button>
                        
                        <p className="text-xs text-gray-500 text-center mt-4">
                          By submitting this form, you agree to our privacy policy and consent to be contacted by DPM IT Solutions.
                        </p>
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

export default SeoAgencyDelhi;