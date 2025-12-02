import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const IndoreFirstGooglePromotion = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    phone: '',
    email: '',
    campaignGoal: ''
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
          subject: `New Google First Page Promotion Request - ${formData.company || 'No Company Name'}`,
          name: formData.name,
          company: formData.company,
          website: formData.website,
          phone: formData.phone,
          email: formData.email,
          campaignGoal: formData.campaignGoal,
          from_name: 'DPM IT Solutions Website',
          botcheck: false
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
          campaignGoal: ''
        });
        
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Helmet>
        <title>Google First Page Promotion Services in Indore | #1 Google Ads Agency | DPM IT Solutions</title>
        <meta name="description" content="Get Your Business on Google First Page in Indore | Expert Google First Page Promotion Services | Guaranteed Top Rankings | Search, Display & Video Ads | Free Google First Page Audit | Call DPM IT Solutions Today!" />
        <meta name="keywords" content="google first page promotion indore, google first page ranking indore, google top ranking services indore, google ads first page indore, google search ranking indore, google first page guarantee indore, best google ranking company indore, google first page ads indore, google ranking expert indore, google top position indore, google first page optimization indore" />
        
        <meta property="og:title" content="Google First Page Promotion Services in Indore | DPM IT Solutions" />
        <meta property="og:description" content="Get guaranteed Google first page ranking for your Indore business. Expert Google first page promotion services with proven results. Free audit available!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/indore/google-first-page-promotion" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/google-first-page-promotion.webp" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Google First Page Promotion Services in Indore | DPM IT Solutions" />
        <meta name="twitter:description" content="Expert Google first page promotion services with guaranteed rankings across Indore. Get your free audit today!" />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/google-first-page-promotion.webp" />
        
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="geo.region" content="IN-MP" />
        <meta name="geo.placename" content="Indore" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/indore/google-first-page-promotion" />
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solutions - Google First Page Promotion Service Indore",
            "image": "https://www.dpmitsolutions.com/assets/google-first-page-promotion.webp",
            "description": "Leading Google First Page Promotion agency in Indore offering guaranteed Google first page ranking services across all major areas including Vijay Nagar, Palasia, MG Road, and Bypass Road",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Indore",
              "addressRegion": "Madhya Pradesh",
              "addressCountry": "IN"
            },
            "url": "https://www.dpmitsolutions.com/indore/google-first-page-promotion",
            "telephone": "+91 9650413450",
            "priceRange": "₹₹₹",
            "areaServed": {
              "@type": "City",
              "name": "Indore"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "150"
            }
          })}
        </script>
      </Helmet>

      
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
              Google First Page Promotion Services in Indore
            </h1>
            <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
              Google First Page Promotion Services in Indore
            </div>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              Guaranteed Google First Page Ranking | Top Position Ads | Maximum Visibility | Higher Conversions | DPM IT Solutions
            </p>
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
      </div>

      <ScrollingBanner/>

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
                    src="/assets/google-first-page-promotion.webp" 
                    alt="Google First Page Promotion Services Indore - Guaranteed Top Ranking" 
                    className="w-full h-85 md:h-120 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">Google First Page Promotion Services Indore</p></div></div>';
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
                Get Your Business on <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page</span> in Indore
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                DPM IT Solutions - #1 Google First Page Promotion Agency in Indore
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                DPM IT Solutions is Indore's most trusted Google First Page Promotion agency, helping businesses across Vijay Nagar, Palasia, MG Road, Bypass Road, and Rajendra Nagar achieve guaranteed top positions on Google search results. Our expert strategies ensure your business appears on the first page when potential customers search for your products or services in Indore.
              </p>
              <div className="space-y-4">
                {[
                  "Guaranteed Google First Page Ranking in Indore",
                  "Target Indore customers with precise location targeting",
                  "Increase visibility and brand awareness across Indore",
                  "Drive qualified traffic and higher conversions"
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

      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
        
        <div className="max-w-8xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-on-scroll slide-from-left">
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Why Google First Page is <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Crucial</span> for Your Indore Business?
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                92% of Clicks Happen on Google First Page - Don't Miss Out!
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                In today's digital age, appearing on Google's first page is no longer optional - it's essential for business survival and growth in Indore. With DPM IT Solutions' expert Google First Page Promotion services, your Indore business can dominate search results, capture qualified leads, and outperform competitors across all major commercial areas including Vijay Nagar, Palasia, and MG Road.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: '92% More Clicks', description: 'Get 92% of all search traffic that goes to first page results', color: 'blue', icon: '📈' },
                  { title: 'Instant Visibility', description: 'Appear immediately when Indore customers search for you', color: 'green', icon: '👁️' },
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
                    src="/assets/google-first-page-company.webp" 
                    alt="Google First Page Ranking Services Indore - Top Position Guarantee" 
                    className="w-full h-98 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Google First Page Indore</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

      <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white font-semibold text-sm"> Our Google First Page Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Google First Page</span> Promotion in Indore
            </h2>
            <h3 className="text-2xl font-bold text-blue-200 mb-4">
              End-to-End Google First Page Ranking Solutions Across Indore
            </h3>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive Google First Page Promotion strategies designed to secure top positions for your business across all search queries relevant to Indore markets and customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Google First Page Search Ads",
                description: "Secure top positions on Google search results for Indore-specific keywords and queries.",
                features: ["Indore Keyword Research", "First Page Bid Strategy", "Quality Score Optimization", "Top Position Targeting"],
                icon: "🥇",
                gradient: "from-blue-500 to-cyan-500"
              },
              {
                title: "Competitor Ranking Analysis",
                description: "Analyze and outperform your Indore competitors in Google search rankings.",
                features: ["Competitor Research", "Gap Analysis", "Winning Strategy", "Performance Monitoring"],
                icon: "🔍",
                gradient: "from-purple-500 to-pink-500"
              },
              {
                title: "Local Indore SEO Integration",
                description: "Combine Google Ads with local SEO for dominant first page presence in Indore.",
                features: ["Local Keyword Mapping", "Geo-Targeting", "Local Business Listings", "Area-Specific Content"],
                icon: "📍",
                gradient: "from-red-500 to-orange-500"
              },
              {
                title: "First Page Display Campaigns",
                description: "Dominate Google Display Network across Indore with strategic banner placements.",
                features: ["Premium Placements", "Visual Optimization", "Frequency Capping", "Performance Tracking"],
                icon: "🎯",
                gradient: "from-green-500 to-emerald-500"
              },
              {
                title: "Video First Page Promotion",
                description: "Get your video ads on YouTube first page for Indore audience targeting.",
                features: ["YouTube Top Rankings", "Video SEO", "Engagement Optimization", "View-Through Tracking"],
                icon: "📹",
                gradient: "from-yellow-500 to-orange-500"
              },
              {
                title: "Performance Max First Page",
                description: "Leverage Google's AI for automatic first page ranking across all channels.",
                features: ["AI-Powered Bidding", "Cross-Channel Optimization", "Smart Targeting", "Conversion Maximization"],
                icon: "🤖",
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

      <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
              <span className="text-green-700 font-semibold text-sm">📈 Indore Success Stories</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Google First Page <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Success Stories</span> in Indore
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Proven First Page Ranking Results from Our Indore Clients
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Real success stories showcasing how DPM IT Solutions helped Indore businesses achieve and maintain Google first page rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                business: "Jewelry Store (Vijay Nagar)",
                result: "First page for 25+ jewelry keywords",
                roi: "450% increase in store visits",
                achievement: "Top position for 'gold jewelry indore' search",
                icon: "💎",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                business: "Restaurant Chain (Palasia)", 
                result: "First page for 18+ food keywords",
                roi: "320% more online orders",
                achievement: "Ranked #1 for 'best restaurant indore'",
                icon: "🍽️",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                business: "Educational Institute (MG Road)",
                result: "First page for 30+ course keywords",
                roi: "280% increase in admissions",
                achievement: "Top 3 positions for 'coaching classes indore'",
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
                        <p className="text-green-600 font-semibold text-lg">Achievement: {story.result}</p>
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

      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm"> Why Choose DPM IT Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why We're Indore's <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">#1 Google First Page</span> Agency
            </h2>
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              Why Smart Indore Businesses Choose DPM IT Solutions for Google First Page Promotion
            </h3>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll slide-from-left">
              <div className="space-y-6">
                {[
                  {
                    title: "Guaranteed First Page Results",
                    description: "We deliver guaranteed Google first page rankings for your most valuable keywords across Indore markets with proven strategies.",
                    icon: "✅",
                    color: "blue"
                  },
                  {
                    title: "Indore-Specific Expertise",
                    description: "Deep understanding of Indore market dynamics, customer behavior, and local search patterns for maximum effectiveness.",
                    icon: "🏙️",
                    color: "purple"
                  },
                  {
                    title: "Transparent Performance Tracking",
                    description: "Real-time dashboards showing your exact Google first page positions, traffic, and conversion metrics for complete transparency.",
                    icon: "📊",
                    color: "green"
                  },
                  {
                    title: "Dedicated Indore Strategy Team",
                    description: "Personal account management team focused exclusively on achieving and maintaining your Google first page rankings in Indore.",
                    icon: "👥",
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
                    <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">Get Free Google First Page Audit</h3>
                    <p className="text-center text-gray-600 mb-6 font-medium">Start Your Google First Page Journey with DPM IT Solutions!</p>
                    
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

                    <form onSubmit={handleSubmit}>
                      <div className="space-y-4">
                        <input 
                          type="text" 
                          name="name"
                          placeholder="Your Name" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                        <input 
                          type="text" 
                          name="company"
                          placeholder="Company Name" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                        />
                        <input 
                          type="text" 
                          name="website"
                          placeholder="Website URL" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.website}
                          onChange={handleInputChange}
                        />
                        <input 
                          type="text" 
                          name="phone"
                          placeholder="Your Phone Number" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                        <input 
                          type="email" 
                          name="email"
                          placeholder="Email Address" 
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <select 
                          name="campaignGoal"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          value={formData.campaignGoal}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Campaign Goal</option>
                          <option value="Google First Page Ranking">Google First Page Ranking</option>
                          <option value="Top Position Ads">Top Position Ads</option>
                          <option value="Maximum Search Visibility">Maximum Search Visibility</option>
                          <option value="Outrank Competitors">Outrank Competitors</option>
                          <option value="Increase Organic Traffic">Increase Organic Traffic</option>
                          <option value="Brand Dominance">Brand Dominance</option>
                        </select>
                        
                        <input type="checkbox" name="botcheck" className="hidden" style={{display: 'none'}} />
                        
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Free Google First Page Audit'}
                        </button>
                      </div>
                    </form>
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

export default IndoreFirstGooglePromotion;