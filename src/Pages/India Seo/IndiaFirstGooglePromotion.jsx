import React, { useEffect, useState } from 'react';
import ScrollingBanner from '../../Components/ScrollingBanner';

const IndiaFirstGooglePromotion = () => {
  const [formData, setFormData] = useState({
    website: '',
    phone: '',
    email: '',
    city: '',
    message: 'Free SEO Audit Request from India First Google Promotion Page'
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
          website: formData.website,
          phone: formData.phone,
          email: formData.email,
          city: formData.city,
          message: formData.message,
          subject: 'New SEO Audit Request - India First Google Promotion',
          from_name: 'DPM IT Solutions Website'
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          website: '',
          phone: '',
          email: '',
          city: '',
          message: 'Free SEO Audit Request from India First Google Promotion Page'
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
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section with New Design */}
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
              Google First Page Promotion Services in India
            </h1>
            <div className="absolute inset-0 text-4xl md:text-6xl font-black text-white/10 blur-2xl tracking-tight leading-tight text-center">
              Google First Page Promotion Services in India
            </div>
          </div>

          <div className="text-center">
            <p className="text-base md:text-lg text-slate-300 font-light max-w-3xl leading-relaxed">
              Professional SEO Services | Digital Marketing | Pan-India SEO | E-commerce SEO | Multilingual SEO
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
                    alt="Google First Page SEO Services India - DPM IT Solutions" 
                    className="w-full h-85 md:h-120 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">🎯</div><p class="text-gray-600">Google SEO Services India</p></div></div>';
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
                Dominate <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Google's First Page</span> with DPM IT Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At DPM IT Solutions, we specialize in propelling Indian businesses to the top of Google search results. Our data-driven SEO strategies, combined with deep understanding of the Indian digital landscape, ensure your website achieves maximum visibility and drives qualified traffic that converts into customers.
              </p>
              <div className="space-y-4">
                {[
                  "Guaranteed first page rankings for competitive Indian keywords",
                  "Comprehensive SEO audit and competitor analysis",
                  "Technical SEO optimization for better crawlability",
                  "Content strategy tailored for Indian audience",
                  "Monthly performance reports and analytics"
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
                Why <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">DPM IT Solutions</span> Stands Out
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With years of experience in the Indian SEO market, DPM IT Solutions has perfected the art of search engine optimization. We don't just improve rankings; we build sustainable online presence that drives consistent business growth through proven digital marketing strategies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { title: 'Proven Results', description: 'Track record of achieving first page rankings for competitive keywords across industries', color: 'blue', icon: '📊' },
                  { title: 'Transparent Process', description: 'Clear communication, regular updates, and detailed reporting on campaign progress', color: 'green', icon: '🔍' },
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
                    alt="DPM IT Solutions SEO Expert Team" 
                    className="w-full h-98 object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = '<div class="w-full h-80 bg-white border-2 border-gray-200 rounded-lg shadow-lg flex items-center justify-center"><div class="text-center"><div class="text-4xl mb-4">📈</div><p class="text-gray-600">SEO Expert Team</p></div></div>';
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

      {/* Expanded Full Screen Content Section */}
      <section className="py-10 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAzYy0xLjY1NyAwLTMgMS4zNDMtMyAzczEuMzQzIDMgMyAzIDMtMS4zNDMgMy0zLTEuMzQzLTMtMy0zeiIgZmlsbD0iIzM3NDE1MSIgb3BhY2l0eT0iLjEiLz48L2c+PC9zdmc+')] opacity-10"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-16 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <span className="text-white font-semibold text-sm">🚀 Our SEO Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Comprehensive <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SEO Approach</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At DPM IT Solutions, we implement a holistic SEO strategy that covers every aspect of search engine optimization, ensuring your website not only ranks higher but also delivers exceptional user experience and conversion rates.
            </p>
          </div>

          <div className="space-y-8 text-lg text-gray-300 leading-relaxed">
            <div className="group animate-on-scroll slide-from-left p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p>
                <strong className="text-xl text-cyan-400">Technical SEO Excellence:</strong> <br />
                We conduct comprehensive technical audits to identify and fix issues that hinder your website's performance. This includes site speed optimization, mobile responsiveness, crawlability improvements, schema markup implementation, and fixing technical errors that impact search visibility.
              </p>
            </div>
            <div className="group animate-on-scroll slide-from-right stagger-1 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p>
                <strong className="text-xl text-cyan-400">Content Strategy & Optimization:</strong> <br />
                Our content experts create SEO-optimized, engaging content that resonates with your target audience while satisfying search engine algorithms. We focus on keyword research, content gap analysis, and creating valuable resources that establish your authority in the industry.
              </p>
            </div>
            <div className="group animate-on-scroll slide-from-left stagger-2 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p>
                <strong className="text-xl text-cyan-400">Link Building & Authority Development:</strong> <br />
                We build high-quality, relevant backlinks from authoritative websites to boost your domain authority and search rankings. Our white-hat link building strategies focus on natural growth and sustainable results that withstand algorithm updates.
              </p>
            </div>
            <div className="group animate-on-scroll slide-from-right stagger-3 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <p>
                <strong className="text-xl text-cyan-400">Continuous Monitoring & Optimization:</strong> <br />
                SEO is an ongoing process. We continuously monitor your website's performance, track rankings, analyze traffic patterns, and make data-driven adjustments to ensure sustained growth and adaptation to changing search algorithms.
              </p>
            </div>
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
              Transformative <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">Results Delivered</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              See how DPM IT Solutions has helped businesses across various industries achieve remarkable growth through strategic SEO implementation and first page Google rankings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                business: "E-commerce Store",
                result: "450% increase in organic sales",
                timeframe: "Within 5 months",
                keywords: "Top rankings for 35+ product keywords",
                icon: "🛒",
                gradient: "from-pink-500 to-rose-500"
              },
              {
                business: "Healthcare Provider", 
                result: "300% more patient inquiries",
                timeframe: "Within 4 months",
                keywords: "First page for medical service keywords",
                icon: "🏥",
                gradient: "from-blue-500 to-indigo-500"
              },
              {
                business: "Educational Institute",
                result: "600% increase in admissions",
                timeframe: "Within 6 months",
                keywords: "Dominant rankings for course keywords",
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
                        <p className="text-green-600 font-semibold text-lg">{story.result}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-blue-600 font-bold">✓</span>
                        <p className="text-gray-700">{story.timeframe}</p>
                      </div>
                      <div className="flex items-start space-x-2">
                        <span className="text-purple-600 font-bold">✓</span>
                        <p className="text-gray-700">{story.keywords}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for India SEO */}
      <section className="py-10 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full filter blur-3xl opacity-20"></div>

        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-blue-700 font-semibold text-sm">⭐ Why DPM IT Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                DPM IT Solutions
              </span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* LEFT CONTENT */}
            <div className="animate-on-scroll slide-from-left h-full flex flex-col justify-center">
              <div className="space-y-6">
                {[
                  {
                    title: "Expert SEO Team",
                    description:
                      "Our team comprises certified SEO specialists with extensive experience in handling diverse industries and achieving consistent first page rankings for competitive keywords.",
                    icon: "👥",
                    color: "blue",
                  },
                  {
                    title: "Customized Strategies",
                    description:
                      "We don't believe in one-size-fits-all approaches. Every SEO strategy is tailored to your specific business goals, target audience, and industry competition.",
                    icon: "🎯",
                    color: "purple",
                  },
                  {
                    title: "Transparent Reporting",
                    description:
                      "Stay informed with detailed monthly reports that showcase progress, rankings, traffic growth, and ROI. We believe in complete transparency throughout our partnership.",
                    icon: "📊",
                    color: "green",
                  },
                  {
                    title: "Proven Methodology",
                    description:
                      "Our SEO techniques are based on latest industry best practices and algorithm updates, ensuring sustainable growth that withstands search engine changes.",
                    icon: "⚡",
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
            <div className="animate-on-scroll slide-from-right h-full flex">
              <div className="relative group w-full flex flex-col justify-center">
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-10 rounded-3xl shadow-2xl h-full flex flex-col justify-center">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                  <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-full flex flex-col justify-center">
                    <h3 className="text-3xl font-black text-gray-900 mb-2 text-center">
                      Get Free SEO Audit
                    </h3>
                    <p className="text-center text-gray-600 mb-6 font-medium">
                      Start Your SEO Journey with DPM IT Solutions!
                    </p>
                    
                    {/* Status Messages */}
                    {submitStatus === 'success' && (
                      <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center">
                        ✅ Thank you! We've received your request. Our SEO expert will contact you shortly.
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
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        placeholder="Your Website URL"
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
                        placeholder="Your Email Address"
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      />
                      <select 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                        required
                      >
                        <option value="">Select Your City</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Bangalore">Bangalore</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Pune">Pune</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Jaipur">Jaipur</option>
                        <option value="Lucknow">Lucknow</option>
                        <option value="Chandigarh">Chandigarh</option>
                        <option value="Kochi">Kochi</option>
                        <option value="Indore">Indore</option>
                        <option value="Nagpur">Nagpur</option>
                        <option value="Surat">Surat</option>
                        <option value="Coimbatore">Coimbatore</option>
                        <option value="Visakhapatnam">Visakhapatnam</option>
                        <option value="Other City in India">Other City in India</option>
                      </select>
                      <button 
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
  );
};

export default IndiaFirstGooglePromotion;