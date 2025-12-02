import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import ScrollingBanner from '../../../Components/ScrollingBanner';


const TilakNagarGuaranteedLocalPromotionDelhi = () => {
  const [formData, setFormData] = useState({
    businessName: '',
    location: '',
    phone: '',
    email: '',
    desiredResults: '',
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
          subject: `New Tilak Nagar Local Promotion Inquiry - ${formData.businessName}`,
          businessName: formData.businessName,
          location: formData.location,
          phone: formData.phone,
          email: formData.email,
          desiredResults: formData.desiredResults,
          message: formData.message,
          from_name: formData.businessName,
          reply_to: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          businessName: '',
          location: '',
          phone: '',
          email: '',
          desiredResults: '',
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
        <title>Guaranteed Local Promotion Services Tilak Nagar | DPM IT Solutions</title>
        <meta name="description" content="Tilak Nagar's only guaranteed local promotion service with 100% money-back promise. Get top 3 Google Maps ranking, 200% customer growth, and first-page SEO results or full refund. Performance-based local marketing with written guarantees." />
        <meta name="keywords" content="guaranteed local promotion Tilak Nagar, guaranteed SEO results Tilak Nagar, money back guarantee local marketing Tilak Nagar, performance based local promotion Tilak Nagar, guaranteed Google Maps ranking Tilak Nagar, guaranteed customer growth Tilak Nagar, local business promotion guarantee Tilak Nagar, DPM IT Solutions Tilak Nagar, guaranteed lead generation Tilak Nagar, guaranteed local SEO Tilak Nagar, risk free local marketing Tilak Nagar, top 3 maps ranking guarantee Tilak Nagar, guaranteed first page ranking Tilak Nagar" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Guaranteed Local Promotion Services Tilak Nagar | 100% Results or Money Back" />
        <meta property="og:description" content="Get guaranteed local promotion results in Tilak Nagar. Top 3 Google Maps ranking, 200% customer growth, or 100% money back. Zero risk, proven success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.dpmitsolutions.com/tilak-nagar/guaranteed-local-promotion-service" />
        <meta property="og:image" content="https://www.dpmitsolutions.com/assets/localbus.png" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Guaranteed Local Promotion Services Tilak Nagar | DPM IT Solutions" />
        <meta name="twitter:description" content="100% guaranteed local promotion results or money back. Top 3 Maps ranking, 200% growth guarantee for Tilak Nagar businesses." />
        <meta name="twitter:image" content="https://www.dpmitsolutions.com/assets/localbus.png" />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="DPM IT Solutions" />
        <meta name="geo.region" content="IN-DL" />
        <meta name="geo.placename" content="Tilak Nagar, Delhi" />
        <link rel="canonical" href="https://www.dpmitsolutions.com/tilak-nagar/guaranteed-local-promotion-service" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "DPM IT Solutions - Guaranteed Local Promotion Tilak Nagar",
            "description": "Tilak Nagar's only guaranteed local promotion service with 100% money-back promise",
            "url": "https://www.dpmitsolutions.com/tilak-nagar/guaranteed-local-promotion-service",
            "telephone": "+91-XXXXXXXXXX",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Tilak Nagar",
              "addressRegion": "Delhi",
              "addressCountry": "IN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 28.6436,
              "longitude": 77.1187
            },
            "areaServed": "Tilak Nagar and surrounding areas",
            "priceRange": "₹₹",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "420"
            }
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-white overflow-x-hidden">
        {/* Main Header Image - Updated Design */}
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
              <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent tracking-tight leading-tight text-center">
                Guaranteed Local Promotion Services in Tilak Nagar
              </h1>
              <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
                Guaranteed Local Promotion Services in Tilak Nagar
              </div>
            </div>

            <div className="text-center">
              <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
                100% Results Guaranteed for Tilak Nagar Businesses | Money-Back Promise | Guaranteed Rankings | Proven Success Rate | Performance-Based Solutions
              </p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/20 backdrop-blur-[2px]"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 animate-pulse" style={{ animationDuration: '8s' }}></div>
        </div>

        <ScrollingBanner/>

        {/* Section 1: Updated Design */}
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
                      src="/assets/localbus.png" 
                      alt="Guaranteed Local Business Promotion Tilak Nagar - 100% Results DPM IT Solutions" 
                      className="w-full h-85 md:h-120 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">DPM IT Solutions</div><p class="text-gray-600">Guaranteed Local Promotion Tilak Nagar</p></div></div>';
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
                  Tilak Nagar's Only <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">100% Guaranteed</span> Local Promotion Services
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  DPM IT Solutions - Performance-Based Local Marketing for Tilak Nagar
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  DPM IT Solutions is the only local promotion agency in Tilak Nagar that backs every campaign with a money-back guarantee. We don't just promise results, we guarantee them. Our performance-based approach ensures your Tilak Nagar business gets measurable outcomes or you don't pay.
                </p>
                <div className="space-y-4">
                  {[
                    "Guaranteed first-page rankings for Tilak Nagar or full refund",
                    "Minimum 200% increase in local customer inquiries in Tilak Nagar area",
                    "Guaranteed top 3 Google Maps placement for Tilak Nagar searches",
                    "Money-back promise if targets aren't met for your Tilak Nagar business"
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

        {/* Section 2: Updated Design */}
        <section className="py-10 bg-white relative overflow-hidden">
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-green-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-72 h-72 bg-blue-200 rounded-full filter blur-3xl opacity-20 transform -translate-y-1/2"></div>
          
          <div className="max-w-8xl mx-auto px-4 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-from-left">
                <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                  Our <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Performance Guarantee</span> Promise to Tilak Nagar Businesses
                </h2>
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                  Zero Risk Investment with Written Money-Back Guarantee for Tilak Nagar
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Unlike other agencies that make empty promises, DPM IT Solutions puts its money where its mouth is. Every local promotion package for Tilak Nagar businesses comes with written guarantees, clear milestones, and a full money-back policy if we don't deliver the promised results within the agreed timeframe.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    { title: '100% Success Rate in Tilak Nagar', description: 'Every Tilak Nagar client has achieved guaranteed results', color: 'blue', icon: '🏆' },
                    { title: 'Zero Risk Investment', description: 'Money-back guarantee on all Tilak Nagar packages', color: 'green', icon: '🛡️' },
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
                      src="/assets/localseo.webp" 
                      alt="Guaranteed Local SEO Results Tilak Nagar - Performance Based Marketing" 
                      className="w-full h-98 object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">Guaranteed Results Tilak Nagar</div><p class="text-gray-600">DPM IT Solutions</p></div></div>';
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

        {/* Guaranteed Services Grid Section - Updated Design */}
        <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
                <span className="text-white font-semibold text-sm">Tilak Nagar Guaranteed Packages</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                Complete <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Guaranteed Results</span> for Tilak Nagar
              </h2>
              <h3 className="text-2xl font-bold text-blue-200 mb-4">
                Performance-Based Local Promotion with Money-Back Guarantee for Tilak Nagar
              </h3>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Every package from DPM IT Solutions for Tilak Nagar businesses comes with contractual guarantees, transparent reporting, and a full refund policy if targets aren't achieved.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Guaranteed Google Maps Ranking in Tilak Nagar",
                  description: "We guarantee top 3 placement in Google Maps for Tilak Nagar searches or you get 100% money back.",
                  features: ["Top 3 Maps Position in Tilak Nagar", "90-Day Guarantee Period", "Weekly Progress Reports", "Full Refund Protection"],
                  icon: "📍",
                  gradient: "from-blue-500 to-cyan-500"
                },
                {
                  title: "Guaranteed Customer Growth in Tilak Nagar",
                  description: "Minimum 200% increase in local customer inquiries and footfall in Tilak Nagar within 120 days or complete refund.",
                  features: ["200% Customer Increase in Tilak Nagar", "Trackable Call Tracking", "Customer Count Verification", "Performance Dashboards"],
                  icon: "📈",
                  gradient: "from-green-500 to-emerald-500"
                },
                {
                  title: "Guaranteed Online Visibility for Tilak Nagar",
                  description: "First page rankings for minimum 15 local Tilak Nagar keywords or we work free until achieved plus refund.",
                  features: ["15+ Tilak Nagar Keyword Rankings", "First Page Guarantee", "Organic Traffic Growth", "Competitor Analysis"],
                  icon: "👁️",
                  gradient: "from-purple-500 to-pink-500"
                },
                {
                  title: "Guaranteed Review Growth for Tilak Nagar",
                  description: "Guaranteed 50+ genuine 5-star reviews from Tilak Nagar customers within 90 days or we continue working at no cost.",
                  features: ["50+ Google Reviews from Tilak Nagar", "Review Management", "Reputation Building", "Review Response Service"],
                  icon: "⭐",
                  gradient: "from-yellow-500 to-orange-500"
                },
                {
                  title: "Guaranteed Lead Generation in Tilak Nagar",
                  description: "Minimum 100 qualified local leads from Tilak Nagar per month guaranteed or you don't pay. Performance-based billing.",
                  features: ["100+ Monthly Leads from Tilak Nagar", "Quality Lead Filtering", "Lead Tracking System", "Pay-Per-Performance"],
                  icon: "🎯",
                  gradient: "from-red-500 to-pink-500"
                },
                {
                  title: "Guaranteed Local Authority in Tilak Nagar",
                  description: "Guaranteed #1 position for your business name and service in Tilak Nagar locality within 6 months.",
                  features: ["#1 Position in Tilak Nagar", "Brand Dominance in Tilak Nagar", "Citation Building", "Local Link Building"],
                  icon: "👑",
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

        {/* Guaranteed Success Stories Section - Updated Design */}
        <section className="py-10 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-300 rounded-full filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-300 rounded-full filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-green-100 rounded-full mb-4">
                <span className="text-green-700 font-semibold text-sm">Tilak Nagar Success Stories</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">100% Successful</span> Guaranteed Results in Tilak Nagar
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Real Tilak Nagar Businesses That Achieved Guaranteed Targets with DPM IT Solutions
              </h3>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Real Tilak Nagar businesses that achieved and exceeded their guaranteed targets with DPM IT Solutions' performance-based local promotion.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  business: "Medical Store in Tilak Nagar",
                  result: "Guaranteed 80 leads - Delivered 210 leads",
                  roi: "Exceeded by 162%",
                  achievement: "Target: 90 days | Achieved: 65 days",
                  icon: "💊",
                  gradient: "from-blue-500 to-indigo-500"
                },
                {
                  business: "Restaurant in Tilak Nagar", 
                  result: "Guaranteed Top 3 Maps - Achieved #1 position",
                  roi: "Beat guarantee target early",
                  achievement: "Target: 120 days | Achieved: 95 days",
                  icon: "🍽️",
                  gradient: "from-green-500 to-teal-500"
                },
                {
                  business: "Beauty Salon in Tilak Nagar",
                  result: "Guaranteed 150% growth - Delivered 320% growth",
                  roi: "More than doubled guarantee",
                  achievement: "Target: 6 months | Achieved: 5 months",
                  icon: "💅",
                  gradient: "from-purple-500 to-pink-500"
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

        {/* Why Choose Our Guaranteed Service - Updated Design */}
        <section className="py-10 bg-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
                <span className="text-blue-700 font-semibold text-sm">Why Choose Us in Tilak Nagar</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                What Sets Us Apart as Tilak Nagar's{" "}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Best Guaranteed Local Promotion Agency
                </span>
              </h2>
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Why Tilak Nagar Businesses Choose DPM IT Solutions for Guaranteed Results
              </h3>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-stretch">
              {/* LEFT SIDE */}
              <div className="animate-on-scroll slide-from-left flex flex-col justify-between h-full">
                <div className="space-y-6">
                  {[
                    {
                      title: "Local Tilak Nagar Expertise",
                      description: "Our deep understanding of Tilak Nagar market dynamics has delivered guaranteed results for 120+ local businesses with 100% success rate.",
                      icon: "🏆",
                      color: "blue",
                    },
                    {
                      title: "Tilak Nagar Focused Contracts",
                      description: "Every guarantee is documented in writing with Tilak Nagar specific KPIs, timelines, and refund policies - no hidden clauses.",
                      icon: "📝",
                      color: "purple",
                    },
                    {
                      title: "Real-Time Tilak Nagar Tracking",
                      description: "Access your Tilak Nagar specific performance dashboard 24/7 to monitor progress towards guaranteed targets with complete transparency.",
                      icon: "📊",
                      color: "green",
                    },
                    {
                      title: "Money-Back Confidence for Tilak Nagar",
                      description: "We can offer guarantees because our Tilak Nagar specific strategies work. In 5 years, we've never had to issue a single refund to Tilak Nagar clients.",
                      icon: "🛡️",
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
                        Get Your Tilak Nagar Guaranteed Growth Plan
                      </h3>
                      <p className="text-center text-gray-600 mb-6 font-medium">
                        100% Results or 100% Refund - Connect Now!
                      </p>
                      
                      {/* Web3Forms Integration */}
                      <form onSubmit={handleSubmit} className="space-y-4">
                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-xl text-center">
                            Thank you! Your Tilak Nagar inquiry has been submitted successfully. We'll contact you within 24 hours.
                          </div>
                        )}
                        
                        {submitStatus === 'error' && (
                          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl text-center">
                            There was an error submitting your form. Please try again or contact us directly.
                          </div>
                        )}

                        <input
                          type="text"
                          name="businessName"
                          value={formData.businessName}
                          onChange={handleInputChange}
                          placeholder="Your Tilak Nagar Business Name"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="text"
                          name="location"
                          value={formData.location}
                          onChange={handleInputChange}
                          placeholder="Business Location in Tilak Nagar"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        />
                        <input
                          type="tel"
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
                          name="desiredResults"
                          value={formData.desiredResults}
                          onChange={handleInputChange}
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                          required
                        >
                          <option value="">What Results Do You Want Guaranteed in Tilak Nagar?</option>
                          <option value="Top 3 Google Maps Ranking in Tilak Nagar">Top 3 Google Maps Ranking in Tilak Nagar</option>
                          <option value="200%+ Customer Growth in Tilak Nagar">200%+ Customer Growth in Tilak Nagar</option>
                          <option value="100+ Monthly Leads from Tilak Nagar">100+ Monthly Leads from Tilak Nagar</option>
                          <option value="First Page Rankings for Tilak Nagar">First Page Rankings for Tilak Nagar</option>
                          <option value="50+ 5-Star Reviews from Tilak Nagar">50+ 5-Star Reviews from Tilak Nagar</option>
                          <option value="Complete Local Dominance in Tilak Nagar">Complete Local Dominance in Tilak Nagar</option>
                        </select>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell us about your Tilak Nagar business and specific goals..."
                          rows="3"
                          className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                        />
                        <button 
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? 'Submitting...' : 'Get Tilak Nagar Guaranteed Results Plan'}
                        </button>
                        <p className="text-center text-sm text-gray-500 mt-2">
                          Zero Risk | Money-Back Guarantee | Written Contract for Tilak Nagar
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

export default TilakNagarGuaranteedLocalPromotionDelhi;