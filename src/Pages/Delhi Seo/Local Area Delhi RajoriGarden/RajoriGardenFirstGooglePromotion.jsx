import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../../Components/ScrollingBanner';

const RajoriGardenFirstGooglePromotion = () => {
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
          subject: 'Free SEO Audit Request - Rajori Garden First Google Promotion',
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
        {/* Primary Meta Tags */}
        <title>Google First Page Promotion Services in Rajori Garden | DPM IT Solutions</title>
        <meta name="title" content="Top Google First Page Ranking Services in Rajori Garden | DPM IT Solutions" />
        <meta name="description" content="DPM IT Solutions provides guaranteed Google first page ranking services in Rajori Garden. Professional SEO, digital marketing, and website optimization for local businesses." />
        <meta name="keywords" content="google first page ranking rajori garden, seo company rajori garden, digital marketing agency rajori garden, website ranking services, local seo rajori garden, google my business optimization, professional seo services, online business promotion, social media marketing rajori garden, content marketing services, ecommerce seo rajori garden, web development rajori garden, pay per click advertising, email marketing services, brand promotion rajori garden" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolution.com/rajori-garden" />
        <meta property="og:title" content="Top Google First Page Ranking Services in Rajori Garden | DPM IT Solutions" />
        <meta property="og:description" content="DPM IT Solutions provides guaranteed Google first page ranking services in Rajori Garden. Professional SEO, digital marketing, and website optimization for local businesses." />
        <meta property="og:image" content="https://www.dpmitsolution.com/assets/google.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="DPM IT Solutions" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolution.com/rajori-garden" />
        <meta property="twitter:title" content="Top Google First Page Ranking Services in Rajori Garden | DPM IT Solutions" />
        <meta property="twitter:description" content="DPM IT Solutions provides guaranteed Google first page ranking services in Rajori Garden. Professional SEO, digital marketing, and website optimization for local businesses." />
        <meta property="twitter:image" content="https://www.dpmitsolution.com/assets/google.png" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Rajori Garden, Delhi" />
        <meta name="geo.position" content="28.6538;77.1530" />
        <meta name="ICBM" content="28.6538, 77.1530" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solutions - Google First Page Ranking Services",
            "image": "https://www.dpmitsolution.com/assets/google.png",
            "description": "Professional SEO and Google first page ranking services in Rajori Garden. Get your website ranked on Google's first page with guaranteed results.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Rajori Garden",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6538,
              "longitude": 77.1530
            },
            "url": "https://www.dpmitsolution.com/rajori-garden",
            "telephone": "+91 96504 13450",
            "priceRange": "₹₹",
            "areaServed": ["Rajori Garden", "West Delhi", "Rajouri Garden", "Tilak Nagar", "Subhash Nagar", "Delhi"],
            "serviceType": ["SEO Services", "Digital Marketing", "Google Ranking", "Local SEO", "Social Media Marketing"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>

        <link rel="canonical" href="https://www.dpmitsolution.com/rajori-garden" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* New Header Section with Gradient Background */}
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
                Google First Page Promotion Services in Rajori Garden
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Google First Page Promotion Services in Rajori Garden
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Professional SEO Services | Digital Marketing | Website Development | Social Media Marketing | Guaranteed Results
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
                      src="/assets/google1.jpg" 
                      alt="Google First Page SEO Services in Rajori Garden - DPM IT Solutions" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🎯</div><p class="text-gray-600">Google SEO Services Rajori Garden</p></div></div>';
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
                  Achieve Top <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google Rankings</span> with DPM IT Solutions
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  At DPM IT Solutions, we specialize in helping Rajori Garden businesses achieve top Google rankings through comprehensive digital marketing strategies. Our expert team combines technical SEO expertise with creative marketing solutions to drive targeted traffic and boost your online visibility, ensuring your business stands out in competitive search results.
                </p>
                <div className="space-y-4">
                  {[
                    "Strategic SEO planning and implementation for sustainable growth",
                    "Comprehensive digital marketing solutions tailored to your business",
                    "Advanced website optimization and performance enhancement",
                    "Data-driven approach with regular performance analytics and reporting"
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
                  Why Trust <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">DPM IT Solutions</span> for Your Digital Success?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  With years of experience in digital marketing and SEO, DPM IT Solutions has established itself as a trusted partner for businesses in Rajori Garden seeking online growth. Our proven methodologies, combined with cutting-edge technology and industry expertise, deliver measurable results that translate into business success and increased revenue.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Expert Digital Marketing Team', description: 'Skilled professionals with extensive experience in SEO, social media marketing, and digital strategy development', color: 'blue', icon: '⚡' },
                    { title: 'Proven Track Record', description: 'Consistent success in delivering outstanding results for businesses across various industries in Rajori Garden', color: 'green', icon: '📊' },
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
                      alt="DPM IT Solutions Digital Marketing Team in Rajori Garden" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">📈</div><p class="text-gray-600">Digital Marketing Experts Rajori Garden</p></div></div>';
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

        {/* Services Section */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">🚀 Our Digital Services</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Digital Marketing</span> Solutions
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                End-to-End Digital Services for Rajori Garden Businesses
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                DPM IT Solutions offers a complete suite of digital marketing services designed to elevate your online presence, engage your target audience, and drive sustainable business growth through strategic planning and expert execution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Search Engine Optimization",
                  description: "Comprehensive SEO strategies to improve your website's visibility and organic search rankings.",
                  features: ["Keyword Research", "On-Page Optimization", "Technical SEO", "Content Strategy"],
                  icon: "🔍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Social Media Marketing",
                  description: "Strategic social media campaigns to build brand awareness and engage your target audience.",
                  features: ["Content Creation", "Community Management", "Paid Social Ads", "Analytics & Reporting"],
                  icon: "📱",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Website Development",
                  description: "Custom website design and development optimized for performance and user experience.",
                  features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Website Maintenance"],
                  icon: "💻",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Content Marketing",
                  description: "Creating valuable, relevant content to attract and retain your target audience.",
                  features: ["Blog Content", "Video Production", "Infographics", "Content Strategy"],
                  icon: "📝",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Pay-Per-Click Advertising",
                  description: "Targeted advertising campaigns to drive immediate traffic and conversions.",
                  features: ["Google Ads", "Social Media Ads", "Display Advertising", "Conversion Tracking"],
                  icon: "🎯",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Email Marketing",
                  description: "Strategic email campaigns to nurture leads and maintain customer relationships.",
                  features: ["Newsletter Design", "Automation Sequences", "Segmentation", "Performance Analytics"],
                  icon: "✉️",
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
                <span className="text-green-700 font-semibold text-sm">📈 Client Success</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Transforming <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Rajori Garden Businesses</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results for Local Businesses
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Discover how DPM IT Solutions has helped Rajori Garden businesses achieve remarkable growth through strategic digital marketing and SEO implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Retail Store Rajori Garden",
                  result: "400% increase in online sales",
                  roi: "ROI: 7:1",
                  achievement: "Top rankings for 20+ product keywords",
                  icon: "🛍️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Healthcare Clinic Rajori Garden", 
                  result: "300% more patient inquiries",
                  roi: "Cost per lead: ₹380",
                  achievement: "15+ medical service keywords ranked",
                  icon: "🏥",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Service Business Rajori Garden",
                  result: "450% increase in service requests",
                  roi: "ROI: 8:1",
                  achievement: "Dominant local search presence",
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

        {/* Why Choose Us for Rajori Garden SEO */}
        <section className="py-10 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm"> Why Choose DPM IT Solutions</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why We're the Leading <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Digital Agency in Rajori Garden</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Local Market Expertise",
                      description: "Deep understanding of Rajori Garden's business ecosystem, consumer behavior, and competitive landscape. We create strategies that resonate with local audiences.",
                      icon: "🎯",
                      color: "blue",
                    },
                    {
                      title: "Comprehensive Digital Solutions",
                      description: "End-to-end digital marketing services from SEO and social media to web development and content creation, all under one roof.",
                      icon: "🌐",
                      color: "purple",
                    },
                    {
                      title: "Proven Methodology",
                      description: "Data-driven approach combined with creative strategies that have consistently delivered results for Rajori Garden businesses.",
                      icon: "📊",
                      color: "green",
                    },
                    {
                      title: "Dedicated Support Team",
                      description: "Personalized attention and continuous support with regular progress updates and strategic recommendations.",
                      icon: "👥",
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
                        Get Free Digital Audit
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        Start Your Digital Transformation with DPM IT Solutions!
                      </p>

                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                          ✅ Thank you! Your request has been submitted successfully. We'll contact you shortly.
                        </div>
                      )}

                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                          ❌ There was an error submitting your request. Please try again or contact us directly.
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
                          placeholder="Company Name"
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
                          placeholder="Your Phone Number"
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
                          <option value="">Select Your Location</option>
                          <option value="Rajori Garden">Rajori Garden</option>
                          <option value="Rajouri Garden">Rajouri Garden</option>
                          <option value="Tilak Nagar">Tilak Nagar</option>
                          <option value="Subhash Nagar">Subhash Nagar</option>
                          <option value="West Delhi">West Delhi</option>
                          <option value="Central Delhi">Central Delhi</option>
                          <option value="North Delhi">North Delhi</option>
                          <option value="South Delhi">South Delhi</option>
                          <option value="East Delhi">East Delhi</option>
                        </select>
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className={`w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ${
                            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free Digital Analysis'}
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

export default RajoriGardenFirstGooglePromotion;