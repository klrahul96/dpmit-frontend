import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../../Components/ScrollingBanner';


const TilakNagarLocalPromotionServiceDelhi = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    businessAddress: '',
    phoneNumber: '',
    email: '',
    businessType: ''
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
          subject: 'New Local Promotion Service Inquiry - Tilak Nagar, Delhi',
          businessName: formData.businessName,
          businessAddress: formData.businessAddress,
          phoneNumber: formData.phoneNumber,
          email: formData.email,
          businessType: formData.businessType,
          service: 'Local Promotion Service - Tilak Nagar, Delhi',
          from_name: formData.businessName,
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          businessName: '',
          businessAddress: '',
          phoneNumber: '',
          email: '',
          businessType: ''
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
        <title>Tilak Nagar Local Promotion Services | Local SEO & Google My Business | DPM IT Solutions</title>
        <meta name="description" content="Get expert local promotion services in Tilak Nagar, Delhi. Boost local visibility, Google My Business ranking & neighborhood marketing. Increase foot traffic & local customers. Call DPM IT Solutions today!" />
        <meta name="keywords" content="local promotion services Tilak Nagar, Tilak Nagar local SEO, Google My Business optimization Tilak Nagar, local marketing Tilak Nagar, community marketing Tilak Nagar, hyperlocal advertising Tilak Nagar, local business promotion Tilak Nagar, neighborhood marketing West Delhi, local directory listings Tilak Nagar, GMB optimization Tilak Nagar, DPM IT Solutions Tilak Nagar" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Tilak Nagar Local Promotion Services | Local SEO & Google My Business | DPM IT Solutions" />
        <meta property="og:description" content="Get expert local promotion services in Tilak Nagar, Delhi. Boost local visibility, Google My Business ranking & neighborhood marketing. Increase foot traffic & local customers." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/tilak-nagar/local-promotion-service" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/tilak-nagar-local.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tilak Nagar Local Promotion Services | Local SEO & Google My Business" />
        <meta name="twitter:description" content="Get expert local promotion services in Tilak Nagar, Delhi. Boost local visibility, Google My Business ranking & neighborhood marketing." />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/tilak-nagar-local.jpg" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Tilak Nagar, Delhi" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/tilak-nagar/local-promotion-service" />
        
        {/* Schema.org Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DPM IT Solutions - Tilak Nagar Local Promotion",
            "description": "Leading local promotion services in Tilak Nagar offering local SEO, Google My Business optimization, and community marketing",
            "url": "https://www.dpmitsolutions.com/tilak-nagar/local-promotion-service",
            "telephone": "+91 96504 13450",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Your Street Address",
              "addressLocality": "Tilak Nagar",
              "addressRegion": "Delhi",
              "postalCode": "110018",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "28.6445",
              "longitude": "77.1170"
            },
            "areaServed": {
              "@type": "City",
              "name": "Tilak Nagar, Delhi"
            },
            "priceRange": "$$",
            "openingHours": "Mo-Sa 09:00-18:00"
          })}
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
                Tilak Nagar Local Promotion Services
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Tilak Nagar Local Promotion Services
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Local SEO | Google My Business | Community Marketing | Local Advertising | Tilak Nagar Promotion
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
                      src="/assets/tilak-nagar-local.jpg" 
                      alt="Best Local Business Promotion Tilak Nagar - Community Marketing Services" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">Tilak Nagar Local Promotion Services</p></div></div>';
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
                  Tilak Nagar's Premier <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Local Business Promotion</span> Services
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Your Local Marketing Partner in Tilak Nagar
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions helps Tilak Nagar businesses dominate their local market with targeted promotion strategies designed specifically for West Delhi. We help you connect with nearby customers in Tilak Nagar and surrounding areas, increase foot traffic, and build strong community presence through proven local marketing techniques.
                </p>
                <div className="space-y-4">
                  {[
                    "Get found by customers in Tilak Nagar and nearby areas",
                    "Increase foot traffic to your Tilak Nagar location",
                    "Build strong local brand recognition and trust in West Delhi",
                    "Outrank competitors in Tilak Nagar local search results"
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
                  Why Local Promotion is <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Essential</span> for Tilak Nagar Businesses?
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Dominate Tilak Nagar with Hyperlocal Marketing
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  In a competitive market like Tilak Nagar, local promotion helps you stand out in your immediate area. DPM IT Solutions' hyperlocal marketing strategies ensure your Tilak Nagar business becomes the go-to choice for customers in your vicinity, driving consistent growth and customer loyalty in West Delhi.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Higher Conversion', description: 'Tilak Nagar local customers convert 5x more than general traffic', color: 'blue', icon: '⚡' },
                    { title: 'Cost-Effective', description: 'Target only relevant customers in Tilak Nagar service area', color: 'green', icon: '💰' },
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
                      src="/assets/tilak-nagar-seo.jpg" 
                      alt="Local SEO Services Tilak Nagar - Google My Business Optimization" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Tilak Nagar Local SEO</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

        {/* Local Services Grid Section */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 Our Tilak Nagar Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Tilak Nagar Local Promotion</span> Services Package
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Full-Spectrum Local Marketing Solutions for Tilak Nagar Businesses
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive local marketing solutions to establish your Tilak Nagar business as the neighborhood leader and attract customers from Tilak Nagar and surrounding West Delhi areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Google My Business Optimization",
                  description: "Complete setup, verification, and optimization of your Google Business Profile for maximum local visibility in Tilak Nagar.",
                  features: ["Tilak Nagar Business Verification", "Profile Optimization", "Local Photo Management", "Review Management"],
                  icon: "🏢",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Local SEO Services",
                  description: "Optimize your website for Tilak Nagar local search queries and location-based keywords to rank higher in local results.",
                  features: ["Tilak Nagar Keyword Research", "On-Page Local SEO", "Local Citations", "Map Pack Optimization"],
                  icon: "🔍",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Community Marketing",
                  description: "Build strong relationships within Tilak Nagar local community through targeted outreach and engagement strategies.",
                  features: ["Tilak Nagar Event Marketing", "Community Partnerships", "Neighborhood Advertising", "Local Sponsorships"],
                  icon: "👥",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Local Directory Listings",
                  description: "Get your Tilak Nagar business listed on all major local directories and platforms for increased online presence.",
                  features: ["Tilak Nagar Directory Submissions", "NAP Consistency", "Local Citations", "Industry-Specific Listings"],
                  icon: "📋",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Hyperlocal Advertising",
                  description: "Run targeted ads that reach customers specifically in Tilak Nagar service area for maximum ROI and relevance.",
                  features: ["Tilak Nagar Geo-Targeted Ads", "Local Facebook Ads", "Neighborhood Targeting", "Location-Based PPC"],
                  icon: "🎯",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Local Content Marketing",
                  description: "Create Tilak Nagar-specific content that resonates with your local audience and establishes local authority.",
                  features: ["Tilak Nagar Blog Posts", "Community News", "Local Event Coverage", "Neighborhood Guides"],
                  icon: "📝",
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

        {/* Local Business Success Stories Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Tilak Nagar Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Tilak Nagar Business <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span> with DPM IT Solutions
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Proven Results from Our Local Promotion Campaigns in Tilak Nagar
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how Tilak Nagar's local businesses achieved remarkable growth with our targeted local promotion services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Restaurant in Tilak Nagar",
                  result: "300% increase in local customers",
                  roi: "ROAS: 9:1",
                  achievement: "Top 3 in Tilak Nagar food searches",
                  icon: "🍽️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Medical Store in Tilak Nagar", 
                  result: "500+ new customer appointments",
                  roi: "Cost per lead: ₹400",
                  achievement: "Dominating Tilak Nagar healthcare searches",
                  icon: "🏥",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Beauty Parlor in Tilak Nagar",
                  result: "350% boost in walk-in customers",
                  roi: "ROAS: 12:1",
                  achievement: "Number 1 beauty service in Tilak Nagar",
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

        {/* Why Choose Us for Local Promotion */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose Us</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What Sets Us Apart as Tilak Nagar's{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Best Local Promotion Agency
                </span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Why Tilak Nagar Businesses Choose DPM IT Solutions for Local Promotion
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Tilak Nagar Market Expertise",
                      description: "DPM IT Solutions has deep understanding of Tilak Nagar's local market, customer behavior, and neighborhood dynamics in West Delhi.",
                      icon: "🏙️",
                      color: "blue",
                    },
                    {
                      title: "Hyperlocal Tilak Nagar Targeting",
                      description: "Advanced geo-targeting techniques to reach customers within walking distance of your Tilak Nagar business location.",
                      icon: "🎯",
                      color: "purple",
                    },
                    {
                      title: "Tilak Nagar Community Connections",
                      description: "Strong relationships with Tilak Nagar local influencers, media, and community organizations for enhanced promotion.",
                      icon: "🤝",
                      color: "green",
                    },
                    {
                      title: "Proven Tilak Nagar Results",
                      description: "Track record of helping 200+ Tilak Nagar local businesses increase their neighborhood presence and sales.",
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
                        Get Free Tilak Nagar Local Business Audit
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        Connect with DPM IT Solutions Today!
                      </p>
                      
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                          ✅ Thank you! Your inquiry has been submitted successfully. We'll contact you shortly.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                          ❌ There was an error submitting your form. Please try again or contact us directly.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Your Business Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="businessAddress"
                          value={formData.businessAddress}
                          onChange={handleInputChange}
                          placeholder="Tilak Nagar Business Address"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                          placeholder="Your Phone Number"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Email Address"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <select 
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleInputChange}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Select Your Business Type</option>
                          <option value="Restaurant/Food Business">Restaurant/Food Business</option>
                          <option value="Retail Store/Shop">Retail Store/Shop</option>
                          <option value="Healthcare/Medical">Healthcare/Medical</option>
                          <option value="Beauty/Salon Services">Beauty/Salon Services</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Education/Coaching">Education/Coaching</option>
                          <option value="Automotive Services">Automotive Services</option>
                          <option value="Home Services">Home Services</option>
                        </select>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free Tilak Nagar Local Audit'}
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer with Company Info */}
        <footer className="bg-slate-900 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-2">DPM IT Solutions - Tilak Nagar</h3>
            <p className="text-slate-300">Your Trusted Partner for Local Business Growth in Tilak Nagar, Delhi</p>
          </div>
        </footer>

      </div>
    </>
  );
};

export default TilakNagarLocalPromotionServiceDelhi;