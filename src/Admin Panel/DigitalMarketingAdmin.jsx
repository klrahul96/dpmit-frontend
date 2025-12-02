import React, { useState } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle } from 'lucide-react';

const DigitalMarketingAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  
  // Header Content State
  const [headerContent, setHeaderContent] = useState({
    title: 'Complete Digital Marketing Solutions',
    descriptions: [
      'At DPM IT Solutions, we craft comprehensive digital marketing strategies that drive real business results. Our full-service approach combines creativity with data-driven insights to maximize your online presence.',
      'From SEO and social media marketing to PPC campaigns and content creation, we deliver integrated solutions that increase brand visibility, engage your target audience, and drive conversions across all digital channels.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/digital2.jpg',
    mobile: '/assets/digital2.jpg',
  });

  // Scrolling Services State
  const [scrollingServices, setScrollingServices] = useState([
    { text: 'SEO Services' },
    { text: 'PPC Advertising' },
    { text: 'Social Media Marketing' },
    { text: 'Content Marketing' },
    { text: 'Email Marketing' },
    { text: 'Influencer Marketing' },
    { text: 'Video Marketing' },
    { text: 'Affiliate Marketing' },
    { text: 'Display Advertising' },
    { text: 'Mobile Marketing' },
    { text: 'Marketing Automation' },
    { text: 'Conversion Optimization' }
  ]);

  // Services Section State
  const [servicesData, setServicesData] = useState([
    {
      icon: 'Search',
      title: 'Search Engine Optimization',
      description: 'Improve your website\'s visibility and rankings on Google with our proven SEO strategies.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Monitor',
      title: 'Pay-Per-Click Advertising',
      description: 'Drive immediate traffic and conversions with targeted PPC campaigns on Google and Bing.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'Share2',
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engagement across Facebook, Instagram, LinkedIn, and Twitter.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'PenTool',
      title: 'Content Marketing',
      description: 'Create compelling content that attracts, educates, and converts your target audience.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'Mail',
      title: 'Email Marketing',
      description: 'Nurture leads and retain customers with personalized email campaigns and automation.',
      gradient: 'from-cyan-500 to-cyan-600'
    },
    {
      icon: 'Smartphone',
      title: 'Mobile Marketing',
      description: 'Reach customers on-the-go with mobile-optimized campaigns and app marketing strategies.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]);

  // Process Section State
  const [processContent, setProcessContent] = useState({
    title: 'Our Digital Marketing Process',
    descriptions: [
      'Our strategic approach ensures every digital marketing campaign is tailored to your business goals and target audience, delivering measurable results.',
      'We begin with comprehensive market research and competitor analysis, then develop integrated campaigns across multiple channels for maximum impact and ROI.',
      'Our data-driven methodology includes continuous monitoring, A/B testing, and performance optimization to ensure your marketing investments deliver the best possible results.'
    ],
    image: '/assets/digital2.jpg'
  });

  // Analytics Section State
  const [analyticsContent, setAnalyticsContent] = useState({
    title: 'Data-Driven Marketing Insights',
    descriptions: [
      'Make informed decisions with our comprehensive analytics and reporting. We track every aspect of your digital marketing performance to identify opportunities and optimize campaigns.',
      'Our detailed reports provide actionable insights into customer behavior, campaign performance, ROI analysis, and competitive positioning to guide your marketing strategy.',
      'We set up custom dashboards and automated reporting to keep you informed about your marketing performance in real-time, enabling quick adjustments and optimizations.'
    ]
  });

  // Benefits Section State
  const [benefitsData, setBenefitsData] = useState([
    {
      icon: 'Eye',
      title: 'Increased Brand Visibility',
      description: 'Boost your brand\'s online presence across search engines, social media, and digital platforms.'
    },
    {
      icon: 'Users',
      title: 'Targeted Audience Reach',
      description: 'Connect with your ideal customers through precise targeting and personalized messaging.'
    },
    {
      icon: 'TrendingUp',
      title: 'Higher Conversion Rates',
      description: 'Convert more prospects into customers with optimized landing pages and sales funnels.'
    },
    {
      icon: 'MousePointer',
      title: 'Improved Engagement',
      description: 'Increase customer engagement with compelling content and interactive campaigns.'
    },
    {
      icon: 'Zap',
      title: 'Faster Results',
      description: 'See immediate impact with PPC advertising while building long-term organic growth.'
    },
    {
      icon: 'Award',
      title: 'Measurable ROI',
      description: 'Track and measure the success of every campaign with detailed analytics and reporting.'
    }
  ]);

  // Industries Section State
  const [industriesData, setIndustriesData] = useState([
    {
      icon: 'ShoppingCart',
      title: 'E-commerce & Retail',
      description: 'Drive online sales with product marketing and conversion optimization.'
    },
    {
      icon: 'Globe',
      title: 'Technology & SaaS',
      description: 'Generate leads and build brand authority in the tech industry.'
    },
    {
      icon: 'Users',
      title: 'Healthcare & Medical',
      description: 'Connect with patients and build trust through digital channels.'
    },
    {
      icon: 'Lightbulb',
      title: 'Education & Training',
      description: 'Reach students and professionals with educational marketing campaigns.'
    }
  ]);

  // Save Data Function
  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      scrollingServices,
      servicesData,
      processContent,
      analyticsContent,
      benefitsData,
      industriesData
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/digital-marketing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) alert("Digital Marketing Content Saved Successfully!");
      else alert("Save Failed");
    } catch (err) {
      alert("Server Error — Check Backend");
    }
  };

  // Image Upload Handler
  const handleImageUpload = (file, imageType) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      if (imageType === 'desktop') {
        setHeaderImages({ ...headerImages, desktop: e.target.result });
      } else if (imageType === 'mobile') {
        setHeaderImages({ ...headerImages, mobile: e.target.result });
      } else if (imageType === 'process') {
        setProcessContent({ ...processContent, image: e.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  // Text Content Handlers
  const handleHeaderEdit = (index, value) => {
    const newDesc = [...headerContent.descriptions];
    newDesc[index] = value;
    setHeaderContent({ ...headerContent, descriptions: newDesc });
  };

  const handleProcessDescEdit = (index, value) => {
    const newDesc = [...processContent.descriptions];
    newDesc[index] = value;
    setProcessContent({ ...processContent, descriptions: newDesc });
  };

  const handleAnalyticsDescEdit = (index, value) => {
    const newDesc = [...analyticsContent.descriptions];
    newDesc[index] = value;
    setAnalyticsContent({ ...analyticsContent, descriptions: newDesc });
  };

  // Add/Remove Handlers
  const handleAddScrollingService = () => {
    setScrollingServices([...scrollingServices, { text: 'New Service' }]);
  };

  const handleRemoveScrollingService = (index) => {
    setScrollingServices(scrollingServices.filter((_, i) => i !== index));
  };

  const handleAddService = () => {
    setServicesData([...servicesData, {
      icon: 'Search',
      title: 'New Service',
      description: 'Service description',
      gradient: 'from-blue-500 to-blue-600'
    }]);
  };

  const handleRemoveService = (index) => {
    setServicesData(servicesData.filter((_, i) => i !== index));
  };

  const handleUpdateService = (index, field, value) => {
    const newServices = [...servicesData];
    newServices[index][field] = value;
    setServicesData(newServices);
  };

  const handleAddBenefit = () => {
    setBenefitsData([...benefitsData, {
      icon: 'Eye',
      title: 'New Benefit',
      description: 'Benefit description'
    }]);
  };

  const handleRemoveBenefit = (index) => {
    setBenefitsData(benefitsData.filter((_, i) => i !== index));
  };

  const handleUpdateBenefit = (index, field, value) => {
    const newBenefits = [...benefitsData];
    newBenefits[index][field] = value;
    setBenefitsData(newBenefits);
  };

  const handleAddIndustry = () => {
    setIndustriesData([...industriesData, {
      icon: 'ShoppingCart',
      title: 'New Industry',
      description: 'Industry description'
    }]);
  };

  const handleRemoveIndustry = (index) => {
    setIndustriesData(industriesData.filter((_, i) => i !== index));
  };

  const handleUpdateIndustry = (index, field, value) => {
    const newIndustries = [...industriesData];
    newIndustries[index][field] = value;
    setIndustriesData(newIndustries);
  };

  // Image Upload Component
  const ImageUploadField = ({ label, currentImage, onUpload, imageType }) => (
    <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
      <label className="text-lg font-bold text-white block mb-4">{label}</label>
      
      {currentImage && (
        <div className="mb-4 relative">
          <img 
            src={currentImage} 
            alt="preview" 
            className="w-full h-32 md:h-40 object-cover rounded-lg border border-gray-600"
          />
          <p className="text-gray-400 text-sm mt-2">Current Image</p>
        </div>
      )}

      <label className="cursor-pointer flex items-center justify-center gap-2 md:gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-purple-500 rounded-lg p-4 md:p-6 transition-all">
        <Upload className="text-purple-400" size={20} />
        <div className="text-center md:text-left">
          <p className="text-white font-semibold text-sm md:text-base">Click to upload image</p>
          <p className="text-gray-400 text-xs md:text-sm">or drag and drop</p>
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={(e) => e.target.files && onUpload(e.target.files[0], imageType)}
          className="hidden"
        />
      </label>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Fixed Close Button */}
      <div className="fixed top-2 right-2 md:top-4 md:right-4 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-3 py-2 md:px-4 md:py-2 rounded-lg font-semibold transition text-sm"
        >
          <X size={16} /> Back
        </button>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-900 to-pink-900 text-white p-4 md:p-8 shadow-2xl pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Digital Marketing Admin</h1>
          <p className="text-purple-200 text-sm md:text-base">Manage all digital marketing content, services and images</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 md:px-4 flex gap-1 md:gap-4 overflow-x-auto">
          {[
            { id: 'header', label: 'Header' },
            { id: 'scrolling', label: 'Scrolling' },
            { id: 'services', label: 'Services' },
            { id: 'process', label: 'Process' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'benefits', label: 'Benefits' },
            { id: 'industries', label: 'Industries' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-3 md:px-6 md:py-4 font-semibold transition-all whitespace-nowrap border-b-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-purple-500 text-purple-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-4 md:py-8">
        {/* Header Tab */}
        {activeTab === 'header' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Main Title</h2>
                <Edit2 className="text-purple-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none text-sm md:text-base"
              />
            </div>

            {headerContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base md:text-lg font-bold text-white">Description {index + 1}</h3>
                  <span className="text-gray-400 text-xs md:text-sm">Edit text</span>
                </div>
                <textarea
                  value={desc}
                  onChange={(e) => handleHeaderEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
                />
              </div>
            ))}

            <ImageUploadField 
              label="Desktop Header Image" 
              currentImage={headerImages.desktop}
              onUpload={handleImageUpload}
              imageType="desktop"
            />

            <ImageUploadField 
              label="Mobile Header Image" 
              currentImage={headerImages.mobile}
              onUpload={handleImageUpload}
              imageType="mobile"
            />
          </div>
        )}

        {/* Scrolling Services Tab */}
        {activeTab === 'scrolling' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddScrollingService}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Scrolling Service
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {scrollingServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Service {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveScrollingService(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Text</label>
                      <input
                        type="text"
                        value={service.text}
                        onChange={(e) => {
                          const newServices = [...scrollingServices];
                          newServices[index].text = e.target.value;
                          setScrollingServices(newServices);
                        }}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Marketing Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Marketing Service
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Service {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveService(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Icon</label>
                      <input
                        type="text"
                        value={service.icon}
                        onChange={(e) => handleUpdateService(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleUpdateService(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleUpdateService(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={service.gradient}
                        onChange={(e) => handleUpdateService(index, 'gradient', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                        placeholder="e.g. from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process Section Tab */}
        {activeTab === 'process' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Process Title</h2>
              <input
                type="text"
                value={processContent.title}
                onChange={(e) => setProcessContent({ ...processContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none text-sm md:text-base"
              />
            </div>

            {processContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleProcessDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
                />
              </div>
            ))}

            <ImageUploadField 
              label="Process Image" 
              currentImage={processContent.image}
              onUpload={handleImageUpload}
              imageType="process"
            />
          </div>
        )}

        {/* Analytics Section Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Analytics Title</h2>
              <input
                type="text"
                value={analyticsContent.title}
                onChange={(e) => setAnalyticsContent({ ...analyticsContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none text-sm md:text-base"
              />
            </div>

            {analyticsContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleAnalyticsDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-purple-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
                />
              </div>
            ))}
          </div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddBenefit}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Benefit
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {benefitsData.map((benefit, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Benefit {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveBenefit(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Icon</label>
                      <input
                        type="text"
                        value={benefit.icon}
                        onChange={(e) => handleUpdateBenefit(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={benefit.title}
                        onChange={(e) => handleUpdateBenefit(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={benefit.description}
                        onChange={(e) => handleUpdateBenefit(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Industries Tab */}
        {activeTab === 'industries' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddIndustry}
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:to-purple-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Industry
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {industriesData.map((industry, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Industry {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveIndustry(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Icon</label>
                      <input
                        type="text"
                        value={industry.icon}
                        onChange={(e) => handleUpdateIndustry(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={industry.title}
                        onChange={(e) => handleUpdateIndustry(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={industry.description}
                        onChange={(e) => handleUpdateIndustry(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-purple-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="border-t border-gray-700 bg-gray-800 p-4 md:p-6 mt-8 md:mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-end gap-3 md:gap-4">
          <button 
            onClick={onClose}
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition text-sm md:text-base order-2 md:order-1">
            Cancel
          </button>
          <button 
            onClick={handleSaveData}
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold hover:to-purple-800 transition flex items-center gap-2 text-sm md:text-base order-1 md:order-2">
            <Save size={16} /> Save Digital Marketing Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DigitalMarketingAdmin;