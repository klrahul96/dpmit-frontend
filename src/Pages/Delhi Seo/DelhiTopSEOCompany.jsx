import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const DelhiTopSEOCompany = () => {
  const [formData, setFormData] = useState({
    website: '',
    phone: '',
    email: '',
    businessType: '',
    message: ''
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
    setFormData(prev => ({
      ...prev,
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
          subject: 'New SEO Audit Request - Delhi SEO Company',
          website: formData.website,
          phone: formData.phone,
          email: formData.email,
          businessType: formData.businessType,
          message: formData.message || `SEO Audit request for ${formData.website} - Business Type: ${formData.businessType}`,
          from_name: 'DPM IT Solutions Website',
          reply_to: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          website: '',
          phone: '',
          email: '',
          businessType: '',
          message: ''
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
        {/* Primary Meta Tags */}
        <title>Top SEO Company in Delhi | Best SEO Services Delhi - DPM IT Solutions</title>
        <meta 
          name="description" 
          content="Leading SEO Company in Delhi offering guaranteed top 10 Google rankings. Expert SEO services for organic growth, local SEO, and website optimization. Get free SEO audit today!" 
        />
        <meta 
          name="keywords" 
          content="SEO company Delhi, SEO services Delhi, best SEO company Delhi, SEO expert Delhi, search engine optimization Delhi, local SEO Delhi, SEO agency Delhi, website optimization Delhi, organic SEO Delhi, top SEO company Delhi" 
        />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Top SEO Company in Delhi | Best SEO Services - DPM IT Solutions" />
        <meta 
          property="og:description" 
          content="Leading SEO Company in Delhi offering guaranteed top 10 Google rankings. Expert SEO services for organic growth, local SEO, and website optimization." 
        />
        <meta property="og:image" content="/assets/sep.png" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/delhi/top-seo-company" />
        <meta property="og:site_name" content="DPM IT Solutions" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Top SEO Company in Delhi | Best SEO Services - DPM IT Solutions" />
        <meta 
          name="twitter:description" 
          content="Leading SEO Company in Delhi offering guaranteed top 10 Google rankings. Expert SEO services for organic growth and website optimization." 
        />
        <meta name="twitter:image" content="/assets/sep.png" />
        
        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Delhi" />
        <meta name="geo.position" content="28.7041;77.1025" />
        <meta name="ICBM" content="28.7041, 77.1025" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://www.dpmitsolutions.com/delhi/top-seo-company" />
        
        {/* Structured Data - Organization */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "DPM IT Solutions",
            "url": "https://www.dpmitsolutions.com",
            "logo": "https://www.dpmitsolutions.com/logo.png",
            "description": "Leading SEO Company in Delhi offering professional search engine optimization services",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Delhi",
              "addressRegion": "DL",
              "addressCountry": "IN"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "areaServed": "IN"
            }
          })}
        </script>
        
        {/* Structured Data - Service */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "SEO Services",
            "provider": {
              "@type": "Organization",
              "name": "DPM IT Solutions"
            },
            "areaServed": {
              "@type": "City",
              "name": "Delhi"
            },
            "description": "Professional SEO services including technical SEO, on-page optimization, off-page SEO, local SEO, and content optimization for businesses in Delhi"
          })}
        </script>
        
        {/* Structured Data - BreadcrumbList */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.dpmitsolutions.com"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "SEO Services",
                "item": "https://www.dpmitsolutions.com/seo-services"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "SEO Company Delhi",
                "item": "https://www.dpmitsolutions.com/delhi/top-seo-company"
              }
            ]
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header with Animated Background */}
        <div className="relative h-96 w-full overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent tracking-tight leading-none text-center">
                Top SEO Company in Delhi
              </h1>
              {/* Glowing text shadow effect */}
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-none text-center">
                Top SEO Company in Delhi
              </div>
            </div>

            {/* Enhanced subtitle */}
            <div className="text-center">
              <p className="text-lg md:text-xl text-slate-300 font-light max-w-2xl leading-relaxed">
                Professional SEO Services | Organic Rankings | Guaranteed Results
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
        <section className="py-2 bg-white">
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 animate-on-scroll slide-from-left">
                <div className="relative">
                  <img 
                    src="/assets/sep.png" 
                    alt="Best SEO Services Delhi - Top Search Engine Optimization" 
                    className="w-full h-102 object-cover "
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🔍</div><p class="text-gray-600">SEO Services Delhi</p></div></div>';
                    }}
                  />
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll slide-from-right">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                  Delhi's Leading <span className="text-blue-600">SEO Company</span> for Top Rankings
                </h2>
                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  At <span className="font-bold text-blue-700">DPM IT Solutions</span>, we help you achieve sustainable organic growth with Delhi's top-rated SEO services. We specialize in comprehensive search engine optimization, keyword ranking, and website optimization to drive long-term organic traffic and business growth.
                </p>
                <div className="space-y-4">
                  {[
                    "Guaranteed top 10 Google rankings for target keywords",
                    "Complete on-page and off-page SEO optimization",
                    "Local SEO for Delhi businesses and multi-location setup",
                    "Monthly SEO audits with detailed performance reports"
                  ].map((item, idx) => (
                    <div className="flex items-start space-x-3 animate-on-scroll slide-from-right" key={idx} style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1 hover:scale-110 transition-transform duration-300">
                        <span className="text-white text-lg font-semibold">✓</span>
                      </div>
                      <p className="text-gray-700 text-lg">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Content Left, Image Right */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-4xl font-bold text-gray-800 mb-6 leading-snug">
                  Why Choose <span className="text-blue-600">DPM IT Solutions</span> for SEO in Delhi?
                </h2>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  <span className="font-bold text-blue-700">DPM IT Solutions</span> delivers sustainable organic growth through proven SEO strategies and white-hat techniques. Our comprehensive approach includes technical SEO, content optimization, and authority building to establish your website as an industry leader.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { title: 'Long-term Results', description: 'Sustainable organic rankings that drive consistent traffic for years', color: 'blue' },
                    { title: 'Cost-Effective Growth', description: 'Higher ROI compared to paid advertising with lasting benefits', color: 'green' },
                  ].map((item, idx) => (
                    <div key={idx} className="text-center p-6 bg-white border-2 border-gray-200 rounded-xl animate-on-scroll slide-from-bottom hover:scale-105 transition-all duration-300" style={{animationDelay: `${idx * 0.1}s`}}>
                      <div className={`text-lg font-bold text-${item.color}-600 mb-2`}>{item.title}</div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-on-scroll slide-from-right">
                <div className="relative">
                  <img 
                    src="/assets/seoprocess1.png" 
                    alt="SEO Expert Delhi - Search Engine Optimization Specialist" 
                    className="w-full h-115 object-cover "
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">📊</div><p class="text-gray-600">SEO Experts Delhi</p></div></div>';
                    }}
                  />
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                  <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-40"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Expanded Full Screen Content Section */}
        <section className="py-2 md:py-4 bg-white">
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Complete <span className="text-blue-600">SEO Services</span> by DPM IT Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                <span className="font-bold text-blue-700">DPM IT Solutions</span> offers comprehensive SEO services that include everything you need to dominate search results and establish long-term organic visibility for your business in Delhi and beyond.
              </p>
            </div>

            <div className="space-y-10 text-lg text-gray-700 leading-relaxed">
              <div className="animate-on-scroll slide-from-left">
                <p>
                  <strong className="text-xl text-blue-700">Technical SEO Optimization:</strong> <br />
                  Complete technical audit and optimization of your website including page speed enhancement, mobile responsiveness, URL structure, schema markup, and crawlability improvements to meet Google's latest algorithm requirements.
                </p>
              </div>
              <div className="animate-on-scroll slide-from-right stagger-1">
                <p>
                  <strong className="text-xl text-blue-700">On-Page SEO & Content Optimization:</strong> <br />
                  Strategic keyword research, content optimization, meta tag creation, internal linking structure, and user experience improvements to boost your website's relevance and authority for target keywords.
                </p>
              </div>
              <div className="animate-on-scroll slide-from-left stagger-2">
                <p>
                  <strong className="text-xl text-blue-700">Off-Page SEO & Link Building:</strong> <br />
                  High-quality backlink acquisition through guest posting, directory submissions, social bookmarking, and relationship building to increase your website's domain authority and trustworthiness.
                </p>
              </div>
              <div className="animate-on-scroll slide-from-right stagger-3">
                <p>
                  <strong className="text-xl text-blue-700">Local SEO for Delhi Businesses:</strong> <br />
                  Google My Business optimization, local citation building, location-based keyword targeting, and review management to dominate local search results and attract nearby customers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories Section */}
        <section className="py-10 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                <span className="text-blue-600">DPM IT Solutions</span> SEO Success Stories in Delhi
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how Delhi businesses achieved top Google rankings and sustainable organic growth with <span className="font-bold text-blue-700">DPM IT Solutions</span> professional SEO services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "E-commerce Store - Electronics",
                  result: "500% increase in organic traffic",
                  timeframe: "Within 6 months",
                  keywords: "Ranking #1 for 200+ keywords"
                },
                {
                  business: "Healthcare Clinic - South Delhi", 
                  result: "300+ patient inquiries monthly",
                  timeframe: "Within 4 months",
                  keywords: "Top 3 for all medical services"
                },
                {
                  business: "Education Institute - Coaching",
                  result: "10x increase in course enrollments",
                  timeframe: "Within 8 months",
                  keywords: "Dominating education keywords"
                }
              ].map((story, idx) => (
                <div key={idx} className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 animate-on-scroll slide-from-bottom" style={{animationDelay: `${idx * 0.1}s`}}>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">{story.business}</h3>
                  <div className="space-y-3">
                    <p className="text-green-600 font-semibold text-lg">✅ {story.result}</p>
                    <p className="text-gray-600">⏱️ {story.timeframe}</p>
                    <p className="text-gray-600">🎯 {story.keywords}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us for SEO */}
        <section className="py-10 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Why We're Delhi's Top Rated <span className="text-blue-600">SEO Company</span>
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-on-scroll slide-from-left">
                <div className="space-y-8">
                  {[
                    {
                      title: "Certified SEO Experts",
                      description: "Team of Google certified SEO professionals with 8+ years of experience in delivering top rankings for businesses across industries."
                    },
                    {
                      title: "Proven Track Record",
                      description: "Successfully ranked 500+ websites on Google's first page with measurable organic traffic growth and business results."
                    },
                    {
                      title: "White Hat SEO Techniques",
                      description: "We follow Google's guidelines strictly, ensuring your website never gets penalized and maintains long-term rankings."
                    },
                    {
                      title: "Customized SEO Strategies",
                      description: "Every business is unique. We create tailored SEO strategies based on your industry, competition, and business goals."
                    }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl font-bold">✓</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="animate-on-scroll slide-from-right">
                <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl border-2 border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-700 mb-6 text-center">Get Free SEO Audit</h3>
                  
                  {/* Success/Error Messages */}
                  {submitStatus === 'success' && (
                    <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                      Thank you! Your SEO audit request has been submitted successfully. We'll contact you within 24 hours.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                      There was an error submitting your request. Please try again or contact us directly.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="space-y-4">
                      <input 
                        type="url" 
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Your Website URL" 
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        required
                      />
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Your Phone Number" 
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        required
                      />
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address" 
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        required
                      />
                      <select 
                        name="businessType"
                        value={formData.businessType}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        required
                      >
                        <option value="">Select Your Business Type</option>
                        <option value="E-commerce/Online Store">E-commerce/Online Store</option>
                        <option value="Healthcare/Medical">Healthcare/Medical</option>
                        <option value="Real Estate/Property">Real Estate/Property</option>
                        <option value="Education/Coaching">Education/Coaching</option>
                        <option value="Restaurant/Food Business">Restaurant/Food Business</option>
                        <option value="Legal/Law Firm">Legal/Law Firm</option>
                        <option value="Manufacturing">Manufacturing</option>
                        <option value="Other Business">Other Business</option>
                      </select>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Additional requirements or specific keywords you want to target..."
                        rows="3"
                        className="w-full p-4 border border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      />
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full py-4 rounded-lg font-bold text-lg transition-all duration-300 ${
                          isSubmitting 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105'
                        } text-white`}
                      >
                        {isSubmitting ? 'Submitting...' : 'Get Free SEO Analysis'}
                      </button>
                    </div>
                  </form>
                  
                  <p className="text-sm text-gray-500 text-center mt-4">
                    We respect your privacy. Your information is secure with us.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DelhiTopSEOCompany;