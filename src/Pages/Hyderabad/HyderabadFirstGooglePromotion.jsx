import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../Components/ScrollingBanner';

const HyderabadFirstGooglePromotion = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    website: '',
    phone: '',
    email: '',
    location: '',
    message: 'I want to get my website on Google first page in Hyderabad'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

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
    setSubmitStatus('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          ...formData,
          subject: `New SEO Consultation Request - ${formData.company || formData.name}`,
          from_name: formData.name,
          reply_to: formData.email
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
          location: '',
          message: 'I want to get my website on Google first page in Hyderabad'
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
        <title>Google First Page Promotion Services in Hyderabad | DPM IT Solution - #1 SEO Company</title>
        <meta name="title" content="Google First Page Promotion Services in Hyderabad | DPM IT Solution - #1 SEO Company" />
        <meta name="description" content="Get Google First Page Promotion Services in Hyderabad by DPM IT Solution. Top SEO company offering guaranteed ranking, local SEO, and digital marketing for Hyderabad businesses." />
        <meta name="keywords" content="Google First Page Promotion Services in Hyderabad, seo services hyderabad, digital marketing hyderabad, seo company hyderabad, local seo hyderabad, google ranking services, first page seo, professional seo hyderabad, link building services, google my business optimization, seo expert hyderabad, website ranking services, organic seo hyderabad, search engine optimization hyderabad, seo agency hyderabad, best seo company hyderabad, hyderabad seo services, secunderabad seo company, gachibowli digital marketing, hitech city seo services" />
        <meta name="author" content="DPM IT Solution" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolution.com/hyderabad" />
        <meta property="og:title" content="Google First Page Promotion Services in Hyderabad | DPM IT Solution" />
        <meta property="og:description" content="Get Google First Page Promotion Services in Hyderabad by DPM IT Solution. Top SEO company offering guaranteed ranking, local SEO, and digital marketing for Hyderabad businesses." />
        <meta property="og:image" content="https://www.dpmitsolution.com/assets/google.png" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="DPM IT Solution" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.dpmitsolution.com/hyderabad" />
        <meta property="twitter:title" content="Google First Page Promotion Services in Hyderabad | DPM IT Solution" />
        <meta property="twitter:description" content="Get Google First Page Promotion Services in Hyderabad by DPM IT Solution. Top SEO company offering guaranteed ranking, local SEO, and digital marketing for Hyderabad businesses." />
        <meta property="twitter:image" content="https://www.dpmitsolution.com/assets/google.png" />

        {/* Additional SEO Tags */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad" />
        <meta name="geo.position" content="17.3850;78.4867" />
        <meta name="ICBM" content="17.3850, 78.4867" />
        
        {/* Schema.org markup for Google */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "DPM IT Solution - Google First Page Promotion Services in Hyderabad",
            "image": "https://www.dpmitsolution.com/assets/google.png",
            "description": "Professional Google First Page Promotion Services in Hyderabad. Get your website ranked on Google's first page with guaranteed results.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 17.3850,
              "longitude": 78.4867
            },
            "url": "https://www.dpmitsolution.com/hyderabad",
            "telephone": "+91 96504 13450",
            "priceRange": "₹₹",
            "areaServed": ["Hyderabad", "Secunderabad", "Gachibowli", "Hitech City", "Madhapur", "Banjara Hills", "Jubilee Hills"],
            "serviceType": ["Google First Page Promotion Services in Hyderabad", "SEO Services", "Digital Marketing", "Local SEO", "Link Building"],
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "500"
            }
          })}
        </script>

        <link rel="canonical" href="https://www.dpmitsolution.com/hyderabad" />
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Header Section */}
        <div className="relative w-full h-90 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
          {/* Background elements remain same */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,theme(colors.blue.900),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,theme(colors.purple.800),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,theme(colors.indigo.900),transparent_50%)]"></div>
          </div>

          {/* Animated elements remain same */}
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
                Google First Page Promotion Services in Hyderabad
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Google First Page Promotion Services in Hyderabad
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                Professional Google First Page Promotion Services in Hyderabad by DPM IT Solution | Guaranteed Ranking | Top SEO Company in Hyderabad
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
                      alt="Google First Page Promotion Services in Hyderabad - DPM IT Solution" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🎯</div><p class="text-gray-600">Google First Page Promotion Services in Hyderabad</p></div></div>';
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
                  Get <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page Promotion Services in Hyderabad</span>
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Looking for reliable Google First Page Promotion Services in Hyderabad? DPM IT Solution is your trusted partner for achieving top Google rankings. Our expert team specializes in providing comprehensive Google First Page Promotion Services in Hyderabad that drive real results and business growth.
                </p>
                <div className="space-y-4">
                  {[
                    "Expert Google First Page Promotion Services in Hyderabad for all business types",
                    "Proven strategies for Google First Page Promotion Services in Hyderabad market",
                    "Comprehensive approach to Google First Page Promotion Services in Hyderabad",
                    "Results-driven methodology for Google First Page Promotion Services in Hyderabad"
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
                  Why Choose <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Google First Page Promotion Services in Hyderabad</span> by DPM IT Solution?
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  When it comes to Google First Page Promotion Services in Hyderabad, DPM IT Solution stands out as the preferred choice. Our Google First Page Promotion Services in Hyderabad are designed to deliver measurable results and sustainable growth for your business.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: 'Expert Google First Page Promotion Services in Hyderabad', description: 'Specialized in providing top-notch Google First Page Promotion Services in Hyderabad for all industries', color: 'blue', icon: '⚡' },
                    { title: 'Proven Google First Page Promotion Services in Hyderabad', description: 'Track record of successful Google First Page Promotion Services in Hyderabad with real results', color: 'green', icon: '📊' },
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
                      alt="Google First Page Promotion Services in Hyderabad - DPM IT Solution Team" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">📈</div><p class="text-gray-600">Google First Page Promotion Services in Hyderabad</p></div></div>';
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
                <span className="text-white font-semibold text-sm">🚀 Our Google First Page Promotion Services in Hyderabad</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Google First Page Promotion Services in Hyderabad</span>
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Comprehensive Solutions for Google First Page Promotion Services in Hyderabad
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Our Google First Page Promotion Services in Hyderabad cover every aspect of SEO and digital marketing. We provide end-to-end Google First Page Promotion Services in Hyderabad that ensure your business gets the visibility it deserves.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Google First Page Promotion Services in Hyderabad - Keyword Research",
                  description: "Comprehensive keyword analysis as part of our Google First Page Promotion Services in Hyderabad to target the right audience.",
                  features: ["Local Keywords for Hyderabad", "Competitor Analysis", "Search Intent Research", "Keyword Strategy"],
                  icon: "🔍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Google First Page Promotion Services in Hyderabad - On-Page SEO",
                  description: "Complete on-page optimization through our Google First Page Promotion Services in Hyderabad.",
                  features: ["Content Optimization", "Meta Tags", "Header Optimization", "Internal Linking"],
                  icon: "⚙️",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Google First Page Promotion Services in Hyderabad - Link Building",
                  description: "Strategic link building campaigns in our Google First Page Promotion Services in Hyderabad.",
                  features: ["Quality Backlinks", "Guest Posting", "Local Citations", "Link Profile"],
                  icon: "🔗",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Google First Page Promotion Services in Hyderabad - Local SEO",
                  description: "Local search optimization through our Google First Page Promotion Services in Hyderabad.",
                  features: ["GMB Optimization", "Local Listings", "Area-specific Keywords", "Local Directories"],
                  icon: "📍",
                  gradient: "from-red-500 to-orange-500"
                },
                {
                  title: "Google First Page Promotion Services in Hyderabad - Technical SEO",
                  description: "Technical optimization as part of our Google First Page Promotion Services in Hyderabad.",
                  features: ["Site Speed", "Mobile Optimization", "Indexation", "Structured Data"],
                  icon: "🔧",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Google First Page Promotion Services in Hyderabad - Content Strategy",
                  description: "Content development through our Google First Page Promotion Services in Hyderabad.",
                  features: ["Content Planning", "SEO Writing", "Blog Content", "Content Promotion"],
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

        {/* Success Stories Section */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">📈 Success with Google First Page Promotion Services in Hyderabad</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Success Stories with <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Google First Page Promotion Services in Hyderabad</span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Results from Our Google First Page Promotion Services in Hyderabad
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                See how our Google First Page Promotion Services in Hyderabad have transformed businesses and delivered outstanding results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "IT Company using Google First Page Promotion Services in Hyderabad",
                  result: "Massive growth through Google First Page Promotion Services in Hyderabad",
                  roi: "Excellent ROI from Google First Page Promotion Services in Hyderabad",
                  achievement: "Top rankings achieved with Google First Page Promotion Services in Hyderabad",
                  icon: "💻",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Restaurant using Google First Page Promotion Services in Hyderabad", 
                  result: "Outstanding results from Google First Page Promotion Services in Hyderabad",
                  roi: "Great returns from Google First Page Promotion Services in Hyderabad",
                  achievement: "First page success with Google First Page Promotion Services in Hyderabad",
                  icon: "🍽️",
                  gradient: "from-pink-500 to-rose-500"
                },
                {
                  business: "Education Center using Google First Page Promotion Services in Hyderabad",
                  result: "Remarkable growth through Google First Page Promotion Services in Hyderabad",
                  roi: "Impressive ROI from Google First Page Promotion Services in Hyderabad",
                  achievement: "Page one rankings with Google First Page Promotion Services in Hyderabad",
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

        {/* Why Choose Us for Google First Page Promotion Services in Hyderabad */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">⭐ Why Choose Our Google First Page Promotion Services in Hyderabad</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                Why Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google First Page Promotion Services in Hyderabad</span> Are the Best
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Expert Google First Page Promotion Services in Hyderabad",
                      description: "We specialize in providing expert Google First Page Promotion Services in Hyderabad with deep understanding of local market dynamics.",
                      icon: "🎯",
                      color: "blue",
                    },
                    {
                      title: "Comprehensive Google First Page Promotion Services in Hyderabad",
                      description: "Our Google First Page Promotion Services in Hyderabad cover all aspects of SEO and digital marketing for complete business growth.",
                      icon: "💻",
                      color: "purple",
                    },
                    {
                      title: "Reliable Google First Page Promotion Services in Hyderabad",
                      description: "Trusted provider of Google First Page Promotion Services in Hyderabad with proven track record of success.",
                      icon: "🏢",
                      color: "green",
                    },
                    {
                      title: "Results-Driven Google First Page Promotion Services in Hyderabad",
                      description: "Our Google First Page Promotion Services in Hyderabad focus on delivering measurable results and business growth.",
                      icon: "📈",
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
                        Get Google First Page Promotion Services in Hyderabad
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        Start Your Journey with DPM IT Solutions Google First Page Promotion Services in Hyderabad!
                      </p>
                      
                      {/* Status Messages */}
                      {submitStatus === 'success' && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                          ✅ Thank you! We've received your request for Google First Page Promotion Services in Hyderabad. Our expert will contact you within 24 hours.
                        </div>
                      )}
                      
                      {submitStatus === 'error' && (
                        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl text-center">
                          ❌ There was an error submitting your request for Google First Page Promotion Services in Hyderabad. Please try again or contact us directly.
                        </div>
                      )}

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Company Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="Website URL"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
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
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">Select Your Location in Hyderabad</option>
                          <option value="Hitech City">Hitech City</option>
                          <option value="Gachibowli">Gachibowli</option>
                          <option value="Madhapur">Madhapur</option>
                          <option value="Jubilee Hills">Jubilee Hills</option>
                          <option value="Banjara Hills">Banjara Hills</option>
                          <option value="Secunderabad">Secunderabad</option>
                          <option value="Begumpet">Begumpet</option>
                          <option value="Kondapur">Kondapur</option>
                          <option value="Other Areas">Other Areas in Hyderabad</option>
                        </select>
                        
                        {/* Hidden message field */}
                        <input type="hidden" name="message" value={formData.message} />
                        
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Google First Page Promotion Services in Hyderabad'}
                        </button>
                        
                        <p className="text-xs text-gray-500 text-center mt-4">
                          By submitting this form, you agree to our Privacy Policy and consent to be contacted about our Google First Page Promotion Services in Hyderabad.
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

export default HyderabadFirstGooglePromotion;