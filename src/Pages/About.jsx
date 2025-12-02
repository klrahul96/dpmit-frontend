import React, { useEffect, useRef, useState } from 'react';

const DPMITSolutions = () => {
  const observerRef = useRef();
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    const loadAbout = async () => {
      const res = await fetch("http://localhost:5000/api/content/about-us");
      const json = await res.json();
      setAboutData(json.data);
    };
    loadAbout();
  }, []);

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

  // Features array from database
  const features = [
    {
      icon: aboutData?.feature1Icon || "⚡",
      title: aboutData?.feature1Title || "Lightning Fast Delivery",
      desc: aboutData?.feature1Desc || "Quick turnaround times without compromising on quality. We deliver your projects on time, every time.",
      color: "blue"
    },
    {
      icon: aboutData?.feature2Icon || "💰",
      title: aboutData?.feature2Title || "Affordable Pricing",
      desc: aboutData?.feature2Desc || "Premium quality services at competitive prices. Get maximum value for your investment with transparent pricing.",
      color: "green"
    },
    {
      icon: aboutData?.feature3Icon || "🎨",
      title: aboutData?.feature3Title || "Creative Excellence",
      desc: aboutData?.feature3Desc || "Innovative designs and creative solutions that make your brand stand out in the digital landscape.",
      color: "purple"
    },
    {
      icon: aboutData?.feature4Icon || "🏆",
      title: aboutData?.feature4Title || "Proven Results",
      desc: aboutData?.feature4Desc || "Track record of successful projects and satisfied clients. We deliver measurable results for your business.",
      color: "red"
    },
    {
      icon: aboutData?.feature5Icon || "🤝",
      title: aboutData?.feature5Title || "24/7 Support",
      desc: aboutData?.feature5Desc || "Round-the-clock customer support to address your queries and provide assistance whenever you need it.",
      color: "teal"
    },
    {
      icon: aboutData?.feature6Icon || "🔧",
      title: aboutData?.feature6Title || "All-in-One Solution",
      desc: aboutData?.feature6Desc || "From web development to digital marketing, we provide comprehensive solutions under one roof.",
      color: "orange"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-teal-50 overflow-x-hidden">
       
        {/* Main Header Image */}
        <div className="relative h-86 w-full overflow-hidden">
          <img 
            src={aboutData?.headerImage || "/assets/about.jpg"}
            alt="DPM IT Solutions Header" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.backgroundColor = '#1e40af';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #14b8a6 100%)';
            }}
          />
          <div className="absolute inset-0 bg-opacity-30"></div>
        </div>

        {/* Header */}
        <header className="bg-white py-6">
          <div className="max-w-7xl mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-800 animate-on-scroll slide-from-bottom">
              {aboutData?.title || "Welcome to DPM IT Solutions"}
            </h1>
          </div>
        </header>

        {/* About Us Section */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - About Us Content */}
            <div className="space-y-6 order-2 lg:order-1 animate-on-scroll slide-from-left">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4">About</h2>
                <div className="space-y-4 text-gray-800 font-semibold leading-relaxed">
                  <p className="animate-on-scroll slide-from-left stagger-1">
                    {aboutData?.paragraph1 || "We are simply not a web development company. We are one of the emerging platform defining the real meaning of success for your business. Digital transformation has revolutionized the world and at the heart of technology, we are creating a space for your business."}
                  </p>
                  <p className="animate-on-scroll slide-from-left stagger-2">
                    {aboutData?.paragraph2 || "Carving a niche for itself, DPM IT Solutions is a name needs no introduction in the field of digital world. DPM is the acronym of Dynamic Process Management. We are the omni-channel platform for all kind of Web Solutions. Picture tells the story. Yes! At, DPM IT Solutions we develop interactive, eye-catching, appealing and visually stunning Websites at very affordable price. We believe in user experience and pretty focused on creating an innovative and handy websites which makes the online surfing and shopping a pleasing experience."}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Static Image with Different Path */}
            <div className="relative order-1 lg:order-2 animate-on-scroll slide-from-right">
              <img 
                src={aboutData?.aboutImage || "/assets/about (1).jpg"}
                alt="DPM IT Solutions About Us" 
                className="rounded-lg shadow-lg w-full object-cover h-full max-h-[700px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div>

        {/* Our Services Section - NOW DYNAMIC! */}
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Left Side - Static Image */}
            <div className="relative animate-on-scroll slide-from-left">
              <img 
                src={aboutData?.servicesImage || "/assets/abou1.jpeg"}
                alt="What We Do" 
                className="rounded-lg shadow-lg w-full object-cover h-full max-h-[330px]"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            {/* Right Side - Our Services Content - NOW FROM DATABASE! */}
            <div className="space-y-6 animate-on-scroll slide-from-right">
              <div className="space-y-4 text-gray-800 font-medium leading-relaxed">
                <h2 className="text-4xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4">
                  {aboutData?.servicesTitle || "Our Services"}
                </h2>
                <div className="space-y-4 text-gray-800 font-semibold leading-relaxed">
                  <p className="animate-on-scroll slide-from-right stagger-1">
                    {aboutData?.servicesParagraph1 || "At DPM IT Solutions, we offer a wide range of services to elevate your business. From graphic design and video editing to Meta & Google Ads, Instagram promotions, and GMB optimization, we cover it all."}
                  </p>
                  <p className="animate-on-scroll slide-from-right stagger-2">
                    {aboutData?.servicesParagraph2 || "Our team ensures that your online presence is not just beautiful but effective. Whether it's creating responsive websites, engaging ad creatives, or managing your local SEO – we bring your digital vision to life."}
                  </p>
                  <p className="animate-on-scroll slide-from-right stagger-3">
                    {aboutData?.servicesParagraph3 || "Let us handle your hosting and domain services while you focus on growing your brand. Your success is our mission."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section - NOW DYNAMIC! */}
        <div className="bg-gradient-to-r from-blue-100/50 via-purple-100/50 to-teal-100/50 backdrop-blur-sm py-12">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12 animate-on-scroll slide-from-bottom">
              <h2 className="text-4xl font-bold text-blue-700 mb-4">Why Choose Us</h2>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                Discover what makes DPM IT Solutions your ideal digital partner
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`bg-white/50 backdrop-blur-sm p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-on-scroll ${
                    index % 3 === 0 ? 'slide-from-left' : index % 3 === 1 ? 'slide-from-bottom' : 'slide-from-right'
                  } stagger-${index + 1}`}
                >
                  <div className={`w-16 h-16 bg-${feature.color}-100 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                    <div className={`w-8 h-8 bg-${feature.color}-600 rounded-full flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">{feature.icon}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-3">{feature.title}</h3>
                  <p className="text-gray-800 text-center">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default DPMITSolutions;