import React, { useState } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle } from 'lucide-react';

const SEOAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  
  // Header Content State
  const [headerContent, setHeaderContent] = useState({
    title: 'Professional SEO Services by DPM IT Solutions',
    descriptions: [
      'At DPM IT Solutions, we create comprehensive SEO strategies that increase visibility, drive organic traffic, and boost conversions.',
      'Drive Growth with Strategic SEO - We create sustainable growth engines that deliver consistent results through technical excellence and content strategy.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/banner-seo.webp',
    mobile: '/assets/mobile-seo.jpg',
  });

  // Scrolling Services State
  const [scrollingServices, setScrollingServices] = useState([
    { icon: 'Search', text: 'Keyword Research' },
    { icon: 'TrendingUp', text: 'Ranking Improvement' },
    { icon: 'Target', text: 'On-Page SEO' },
    { icon: 'BarChart3', text: 'Technical SEO' },
    { icon: 'Globe', text: 'Local SEO' },
    { icon: 'Link2', text: 'Link Building' },
    { icon: 'MapPin', text: 'Google Business' },
    { icon: 'ShoppingCart', text: 'E-commerce SEO' },
    { icon: 'Monitor', text: 'SEO Analytics' },
    { icon: 'FileText', text: 'Content Strategy' },
    { icon: 'Users', text: 'User Experience' },
    { icon: 'Zap', text: 'Speed Optimization' },
    { icon: 'Smartphone', text: 'Mobile SEO' },
    { icon: 'Target', text: 'Schema Markup' }
  ]);

  // Strategic Section State
  const [strategicContent, setStrategicContent] = useState({
    title: 'Drive Growth with Strategic SEO',
    description: 'At DPM IT Solutions, we create comprehensive SEO strategies that increase visibility, drive organic traffic, and boost conversions.',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    points: [
      'Keyword research and competitive analysis',
      'On-page optimization for maximum visibility',
      'Technical SEO for improved crawlability',
      'Content strategy aligned with search intent'
    ]
  });

  // Why Choose Us Section State
  const [whyChooseContent, setWhyChooseContent] = useState({
    title: 'Why Choose DPM IT Solutions for SEO?',
    description: 'We create sustainable growth engines that deliver consistent results through technical excellence and content strategy.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2080&q=80',
    stats: [
      { value: '95%', label: 'Client Retention Rate', color: 'from-blue-500 to-blue-600' },
      { value: '300%', label: 'Average Traffic Growth', color: 'from-purple-500 to-purple-600' },
      { value: '75%', label: 'Keyword Ranking Improvement', color: 'from-indigo-500 to-indigo-600' },
      { value: '5.2x', label: 'Average ROI', color: 'from-pink-500 to-pink-600' }
    ]
  });

  // SEO Services State
  const [seoServices, setSeoServices] = useState([
    { 
      icon: 'Search', 
      title: 'On-Page SEO', 
      description: 'Optimize your website\'s content, meta tags, headers, and internal linking structure for better search engine rankings and user experience.',
      gradient: 'from-blue-500 to-blue-600' 
    },
    { 
      icon: 'BarChart3', 
      title: 'Technical SEO', 
      description: 'Improve site speed, mobile responsiveness, crawlability, indexation, and fix technical issues that impact your search performance.',
      gradient: 'from-purple-500 to-purple-600' 
    },
    { 
      icon: 'Link2', 
      title: 'Off-Page SEO & Link Building', 
      description: 'Build high-quality backlinks, improve domain authority, and enhance your online reputation through strategic link building campaigns.',
      gradient: 'from-indigo-500 to-indigo-600' 
    },
    { 
      icon: 'MapPin', 
      title: 'Local SEO', 
      description: 'Dominate local search results with Google Business Profile optimization, local citations, and location-based content strategies.',
      gradient: 'from-pink-500 to-pink-600' 
    },
    { 
      icon: 'FileText', 
      title: 'Content Marketing & SEO', 
      description: 'Create SEO-optimized content that ranks well, engages your audience, and drives conversions through strategic content planning.',
      gradient: 'from-cyan-500 to-cyan-600' 
    },
    { 
      icon: 'TrendingUp', 
      title: 'SEO Audit & Strategy', 
      description: 'Comprehensive website audits, competitor analysis, keyword research, and custom SEO strategies aligned with your business goals.',
      gradient: 'from-orange-500 to-orange-600' 
    }
  ]);

  // Comprehensive SEO Content State
  const [comprehensiveContent, setComprehensiveContent] = useState({
    title: 'Comprehensive SEO & Digital Growth Solutions',
    description: 'From technical audits to content strategy, we provide end-to-end SEO services that deliver measurable results and sustainable growth.',
    sections: [
      {
        title: 'SEO Strategy Development:',
        content: 'We create custom SEO roadmaps aligned with your business objectives, competitive landscape, and target audience for maximum impact.'
      },
      {
        title: 'Technical SEO Optimization:',
        content: 'Comprehensive site audits, crawlability improvements, site speed optimization, mobile responsiveness, and structured data implementation.'
      },
      {
        title: 'Keyword Research & Analysis:',
        content: 'Identifying high-value keywords with optimal search volume and competition to target for maximum ROI.'
      },
      {
        title: 'Content Strategy & Creation:',
        content: 'Developing content that answers user questions, satisfies search intent, and establishes your authority in your industry.'
      },
      {
        title: 'Link Building & Authority Development:',
        content: 'Strategic outreach and content partnerships to build high-quality backlinks that boost domain authority and rankings.'
      },
      {
        title: 'Local SEO Optimization:',
        content: 'Dominating local search results with comprehensive GBP optimization, local citations, and location-based content strategies.'
      },
      {
        title: 'E-commerce SEO:',
        content: 'Specialized optimization for online stores including category optimization, product schema markup, and search-friendly navigation.'
      },
      {
        title: 'Analytics & Performance Tracking:',
        content: 'Comprehensive reporting on rankings, traffic, conversions, and ROI with actionable insights for continuous improvement.'
      }
    ]
  });

  // Save Data Function
  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      scrollingServices,
      strategicContent,
      whyChooseContent,
      seoServices,
      comprehensiveContent
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/seo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) alert("SEO Content Saved Successfully!");
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
      } else if (imageType === 'strategic') {
        setStrategicContent({ ...strategicContent, image: e.target.result });
      } else if (imageType === 'whyChoose') {
        setWhyChooseContent({ ...whyChooseContent, image: e.target.result });
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

  const handleStrategicPointEdit = (index, value) => {
    const newPoints = [...strategicContent.points];
    newPoints[index] = value;
    setStrategicContent({ ...strategicContent, points: newPoints });
  };

  const handleStatEdit = (index, field, value) => {
    const newStats = [...whyChooseContent.stats];
    newStats[index][field] = value;
    setWhyChooseContent({ ...whyChooseContent, stats: newStats });
  };

  const handleServiceEdit = (index, field, value) => {
    const newServices = [...seoServices];
    newServices[index][field] = value;
    setSeoServices(newServices);
  };

  const handleComprehensiveSectionEdit = (index, field, value) => {
    const newSections = [...comprehensiveContent.sections];
    newSections[index][field] = value;
    setComprehensiveContent({ ...comprehensiveContent, sections: newSections });
  };

  // Add/Remove Handlers
  const handleAddScrollingService = () => {
    setScrollingServices([...scrollingServices, { icon: 'Search', text: 'New Service' }]);
  };

  const handleRemoveScrollingService = (index) => {
    setScrollingServices(scrollingServices.filter((_, i) => i !== index));
  };

  const handleAddStrategicPoint = () => {
    setStrategicContent({
      ...strategicContent,
      points: [...strategicContent.points, 'New strategic point']
    });
  };

  const handleRemoveStrategicPoint = (index) => {
    setStrategicContent({
      ...strategicContent,
      points: strategicContent.points.filter((_, i) => i !== index)
    });
  };

  const handleAddService = () => {
    setSeoServices([...seoServices, { 
      icon: 'Search', 
      title: 'New Service', 
      description: 'Service description', 
      gradient: 'from-blue-500 to-blue-600' 
    }]);
  };

  const handleRemoveService = (index) => {
    setSeoServices(seoServices.filter((_, i) => i !== index));
  };

  const handleAddComprehensiveSection = () => {
    setComprehensiveContent({
      ...comprehensiveContent,
      sections: [...comprehensiveContent.sections, { title: 'New Section', content: 'Section content' }]
    });
  };

  const handleRemoveComprehensiveSection = (index) => {
    setComprehensiveContent({
      ...comprehensiveContent,
      sections: comprehensiveContent.sections.filter((_, i) => i !== index)
    });
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

      <label className="cursor-pointer flex items-center justify-center gap-2 md:gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-green-500 rounded-lg p-4 md:p-6 transition-all">
        <Upload className="text-green-400" size={20} />
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
      <div className="bg-gradient-to-r from-green-900 to-blue-900 text-white p-4 md:p-8 shadow-2xl pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">SEO Services Admin</h1>
          <p className="text-green-200 text-sm md:text-base">Manage all SEO content, services, statistics and images</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 md:px-4 flex gap-1 md:gap-4 overflow-x-auto">
          {[
            { id: 'header', label: 'Header' },
            { id: 'scrolling', label: 'Scrolling' },
            { id: 'strategic', label: 'Strategic' },
            { id: 'whychoose', label: 'Why Choose' },
            { id: 'services', label: 'Services' },
            { id: 'comprehensive', label: 'Comprehensive' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-3 md:px-6 md:py-4 font-semibold transition-all whitespace-nowrap border-b-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-green-500 text-green-400'
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
                <Edit2 className="text-green-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none text-sm md:text-base"
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
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
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
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
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
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Icon Name</label>
                      <input
                        type="text"
                        value={service.icon}
                        onChange={(e) => {
                          const newServices = [...scrollingServices];
                          newServices[index].icon = e.target.value;
                          setScrollingServices(newServices);
                        }}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm"
                      />
                    </div>
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Strategic Section Tab */}
        {activeTab === 'strategic' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Strategic Section Title</h2>
              <input
                type="text"
                value={strategicContent.title}
                onChange={(e) => setStrategicContent({ ...strategicContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none text-sm md:text-base"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h3 className="text-base md:text-lg font-bold text-white mb-4">Strategic Description</h3>
              <textarea
                value={strategicContent.description}
                onChange={(e) => setStrategicContent({ ...strategicContent, description: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
              />
            </div>

            <ImageUploadField 
              label="Strategic Section Image" 
              currentImage={strategicContent.image}
              onUpload={handleImageUpload}
              imageType="strategic"
            />

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">Strategic Points</h2>
                <button
                  onClick={handleAddStrategicPoint}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg font-semibold text-xs md:text-sm w-full md:w-auto"
                >
                  <Plus size={14} /> Add Point
                </button>
              </div>
              <div className="space-y-2 md:space-y-3">
                {strategicContent.points.map((point, index) => (
                  <div key={index} className="flex gap-2 md:gap-3 items-center">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                    <input
                      type="text"
                      value={point}
                      onChange={(e) => handleStrategicPointEdit(index, e.target.value)}
                      className="flex-1 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-sm"
                    />
                    <button
                      onClick={() => handleRemoveStrategicPoint(index)}
                      className="text-red-400 hover:text-red-300 transition flex-shrink-0"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Why Choose Us Tab */}
        {activeTab === 'whychoose' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Why Choose Us Title</h2>
              <input
                type="text"
                value={whyChooseContent.title}
                onChange={(e) => setWhyChooseContent({ ...whyChooseContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none text-sm md:text-base"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h3 className="text-base md:text-lg font-bold text-white mb-4">Why Choose Us Description</h3>
              <textarea
                value={whyChooseContent.description}
                onChange={(e) => setWhyChooseContent({ ...whyChooseContent, description: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
              />
            </div>

            <ImageUploadField 
              label="Why Choose Us Image" 
              currentImage={whyChooseContent.image}
              onUpload={handleImageUpload}
              imageType="whyChoose"
            />

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {whyChooseContent.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-700 p-3 md:p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-white text-sm md:text-base">Stat {index + 1}</h3>
                      <button
                        onClick={() => {
                          const newStats = whyChooseContent.stats.filter((_, i) => i !== index);
                          setWhyChooseContent({ ...whyChooseContent, stats: newStats });
                        }}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                    </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Value</label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => handleStatEdit(index, 'value', e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 outline-none text-xs md:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Label</label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatEdit(index, 'label', e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 outline-none text-xs md:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                        <input
                          type="text"
                          value={stat.color}
                          onChange={(e) => handleStatEdit(index, 'color', e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 outline-none text-xs md:text-sm"
                          placeholder="e.g. from-blue-500 to-blue-600"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SEO Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 hover:to-green-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add SEO Service
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {seoServices.map((service, index) => (
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
                        onChange={(e) => handleServiceEdit(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleServiceEdit(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleServiceEdit(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={service.gradient}
                        onChange={(e) => handleServiceEdit(index, 'gradient', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-green-500 outline-none text-xs md:text-sm"
                        placeholder="e.g. from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Comprehensive SEO Tab */}
        {activeTab === 'comprehensive' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Comprehensive SEO Title</h2>
              <input
                type="text"
                value={comprehensiveContent.title}
                onChange={(e) => setComprehensiveContent({ ...comprehensiveContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none text-sm md:text-base"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h3 className="text-base md:text-lg font-bold text-white mb-4">Comprehensive SEO Description</h3>
              <textarea
                value={comprehensiveContent.description}
                onChange={(e) => setComprehensiveContent({ ...comprehensiveContent, description: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-green-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">SEO Sections</h2>
                <button
                  onClick={handleAddComprehensiveSection}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg font-semibold text-xs md:text-sm w-full md:w-auto"
                >
                  <Plus size={14} /> Add Section
                </button>
              </div>
              <div className="space-y-3 md:space-y-4">
                {comprehensiveContent.sections.map((section, index) => (
                  <div key={index} className="bg-gray-700 p-3 md:p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-bold text-white text-sm md:text-base">Section {index + 1}</h3>
                      <button
                        onClick={() => handleRemoveComprehensiveSection(index)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                    </button>
                    </div>
                    <div className="space-y-3">
                      <div>
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                        <input
                          type="text"
                          value={section.title}
                          onChange={(e) => handleComprehensiveSectionEdit(index, 'title', e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 outline-none text-xs md:text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Content</label>
                        <textarea
                          value={section.content}
                          onChange={(e) => handleComprehensiveSectionEdit(index, 'content', e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-green-500 outline-none text-xs md:text-sm h-16 resize-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold hover:to-green-800 transition flex items-center gap-2 text-sm md:text-base order-1 md:order-2">
            <Save size={16} /> Save SEO Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SEOAdmin;