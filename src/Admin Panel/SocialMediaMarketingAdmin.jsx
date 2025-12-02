import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle, Users, MessageCircle, TrendingUp, Target, BarChart3, Star, Facebook, Instagram, Linkedin, Twitter, Youtube, Zap } from 'lucide-react';

const SocialMediaMarketingAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  
  // Header Content State
  const [headerContent, setHeaderContent] = useState({
    title: 'Transform Your Brand with Social Media',
    descriptions: [
      'At DPM IT Solutions, we specialize in comprehensive social media marketing strategies that help businesses grow their online presence across all major platforms.',
      'From Facebook and Instagram to LinkedIn and Twitter, we manage your entire social media ecosystem to maximize reach, engagement, and conversions.',
      'Our expert team creates engaging content, builds communities, and drives measurable results that turn your social media channels into powerful business growth engines.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/Social-Media-Post.png',
    mobile: '/assets/mobile social.jpeg',
  });

  // Scrolling Services State
  const [scrollingServices, setScrollingServices] = useState([
    { icon: 'Facebook', text: 'Facebook Marketing' },
    { icon: 'Instagram', text: 'Instagram Marketing' },
    { icon: 'Linkedin', text: 'LinkedIn Marketing' },
    { icon: 'Twitter', text: 'Twitter Marketing' },
    { icon: 'Youtube', text: 'YouTube Marketing' },
    { icon: 'TrendingUp', text: 'Social Analytics' },
    { icon: 'Target', text: 'Audience Targeting' },
    { icon: 'Zap', text: 'Viral Campaigns' }
  ]);

  // Services Section State
  const [servicesData, setServicesData] = useState([
    {
      icon: 'Users',
      title: 'Multi-Platform Management',
      description: 'Complete social media management across Facebook, Instagram, LinkedIn, Twitter, YouTube, and more with platform-specific strategies.'
    },
    {
      icon: 'MessageCircle',
      title: 'Content Creation & Curation',
      description: 'High-quality visual content, engaging captions, stories, reels, and video content tailored to each platform and audience.'
    },
    {
      icon: 'Target',
      title: 'Paid Social Advertising',
      description: 'Strategic paid campaigns, audience targeting, ad creation, and optimization to maximize ROI across all social platforms.'
    },
    {
      icon: 'Star',
      title: 'Community Management',
      description: 'Active engagement with your audience, responding to comments and messages, and building loyal brand communities.'
    },
    {
      icon: 'BarChart3',
      title: 'Analytics & Reporting',
      description: 'Comprehensive performance tracking, detailed analytics reports, and data-driven insights to optimize your social strategy.'
    },
    {
      icon: 'TrendingUp',
      title: 'Influencer Partnerships',
      description: 'Strategic influencer collaborations, campaign management, and brand partnership coordination to amplify your reach.'
    }
  ]);

  // Process Section State
  const [processContent, setProcessContent] = useState({
    title: 'Our Marketing Process',
    descriptions: [
      'Our proven methodology ensures your social media marketing delivers maximum impact through strategic planning and continuous optimization.',
      'We begin with comprehensive brand audit and competitor analysis, then develop custom strategies with platform-specific content calendars and visual asset creation.',
      'Through multi-platform posting, paid campaign management, and real-time engagement, we drive measurable results with detailed analytics and continuous strategy refinement.'
    ],
    image: '/assets/Social-Media-Strategy-Plan.jpg'
  });

  // Why Choose Us Section State
  const [whyChooseContent, setWhyChooseContent] = useState({
    title: 'Why Choose DPM IT Solutions?',
    description: 'Deep understanding of each social platform\'s unique algorithms, best practices, and audience behaviors ensures maximum engagement and ROI for your campaigns.',
    additionalDescriptions: [
      'Advanced analytics tracking and performance measurement deliver data-driven insights that optimize your investment and drive measurable business growth.',
      'Our creative team combines cutting-edge strategies with engaging content creation to build brand loyalty and convert followers into customers across all platforms.'
    ],
    image: '/assets/Social-media-marketing-strategy.jpg',
    stats: [
      { value: '500%', label: 'Avg. Reach Increase' },
      { value: '200+', label: 'Brands Managed' },
      { value: '10M+', label: 'Engagements Generated' },
      { value: '98%', label: 'Client Satisfaction' }
    ]
  });

  // Platforms Section State
  const [platformsData, setPlatformsData] = useState([
    {
      name: 'Facebook',
      description: 'Complete Facebook marketing including page management, ad campaigns, and community building.',
      icon: 'Facebook'
    },
    {
      name: 'Instagram',
      description: 'Visual content strategy, stories, reels, influencer collaborations, and Instagram shopping.',
      icon: 'Instagram'
    },
    {
      name: 'LinkedIn',
      description: 'Professional branding, B2B lead generation, and corporate content strategy.',
      icon: 'Linkedin'
    },
    {
      name: 'Twitter',
      description: 'Real-time engagement, trending topics, and conversational marketing.',
      icon: 'Twitter'
    },
    {
      name: 'YouTube',
      description: 'Video content strategy, channel management, and YouTube advertising.',
      icon: 'Youtube'
    },
    {
      name: 'Pinterest',
      description: 'Visual discovery and inspiration, pinning strategies, and e-commerce integration.',
      icon: 'Zap'
    }
  ]);

  // Load data from backend on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/content/social-media-marketing");
        const json = await res.json();
        if (json.success && json.data) {
          const data = json.data;
          setHeaderContent(data.headerContent || headerContent);
          setHeaderImages(data.headerImages || headerImages);
          setScrollingServices(data.scrollingServices || scrollingServices);
          setServicesData(data.servicesData || servicesData);
          setProcessContent(data.processContent || processContent);
          setWhyChooseContent(data.whyChooseContent || whyChooseContent);
          setPlatformsData(data.platformsData || platformsData);
        }
      } catch (err) {
        console.log("No saved data found, using defaults");
      }
    };
    fetchData();
  }, []);

  // Save Data Function
  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      scrollingServices,
      servicesData,
      processContent,
      whyChooseContent,
      platformsData
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/social-media-marketing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) {
        alert("Social Media Marketing Content Saved Successfully!");
      } else {
        alert("Save Failed");
      }
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

  const handleProcessDescEdit = (index, value) => {
    const newDesc = [...processContent.descriptions];
    newDesc[index] = value;
    setProcessContent({ ...processContent, descriptions: newDesc });
  };

  const handleWhyChooseDescEdit = (index, value) => {
    const newDesc = [...whyChooseContent.additionalDescriptions];
    newDesc[index] = value;
    setWhyChooseContent({ ...whyChooseContent, additionalDescriptions: newDesc });
  };

  const handleStatEdit = (index, field, value) => {
    const newStats = [...whyChooseContent.stats];
    newStats[index][field] = value;
    setWhyChooseContent({ ...whyChooseContent, stats: newStats });
  };

  const handleServiceEdit = (index, field, value) => {
    const newServices = [...servicesData];
    newServices[index][field] = value;
    setServicesData(newServices);
  };

  const handlePlatformEdit = (index, field, value) => {
    const newPlatforms = [...platformsData];
    newPlatforms[index][field] = value;
    setPlatformsData(newPlatforms);
  };

  // Add/Remove Handlers
  const handleAddScrollingService = () => {
    setScrollingServices([...scrollingServices, { icon: 'Facebook', text: 'New Service' }]);
  };

  const handleRemoveScrollingService = (index) => {
    setScrollingServices(scrollingServices.filter((_, i) => i !== index));
  };

  const handleAddService = () => {
    setServicesData([...servicesData, { 
      icon: 'Users', 
      title: 'New Service', 
      description: 'Service description'
    }]);
  };

  const handleRemoveService = (index) => {
    setServicesData(servicesData.filter((_, i) => i !== index));
  };

  const handleAddPlatform = () => {
    setPlatformsData([...platformsData, { 
      name: 'New Platform', 
      description: 'Platform description', 
      icon: 'Facebook' 
    }]);
  };

  const handleRemovePlatform = (index) => {
    setPlatformsData(platformsData.filter((_, i) => i !== index));
  };

  const handleAddStat = () => {
    setWhyChooseContent({
      ...whyChooseContent,
      stats: [...whyChooseContent.stats, { value: 'New', label: 'New Stat' }]
    });
  };

  const handleRemoveStat = (index) => {
    setWhyChooseContent({
      ...whyChooseContent,
      stats: whyChooseContent.stats.filter((_, i) => i !== index)
    });
  };

  const handleAddDescription = (section) => {
    if (section === 'header') {
      setHeaderContent({
        ...headerContent,
        descriptions: [...headerContent.descriptions, 'New description']
      });
    } else if (section === 'process') {
      setProcessContent({
        ...processContent,
        descriptions: [...processContent.descriptions, 'New description']
      });
    } else if (section === 'whyChoose') {
      setWhyChooseContent({
        ...whyChooseContent,
        additionalDescriptions: [...whyChooseContent.additionalDescriptions, 'New description']
      });
    }
  };

  const handleRemoveDescription = (section, index) => {
    if (section === 'header') {
      const newDesc = headerContent.descriptions.filter((_, i) => i !== index);
      setHeaderContent({ ...headerContent, descriptions: newDesc });
    } else if (section === 'process') {
      const newDesc = processContent.descriptions.filter((_, i) => i !== index);
      setProcessContent({ ...processContent, descriptions: newDesc });
    } else if (section === 'whyChoose') {
      const newDesc = whyChooseContent.additionalDescriptions.filter((_, i) => i !== index);
      setWhyChooseContent({ ...whyChooseContent, additionalDescriptions: newDesc });
    }
  };

  // Image Upload Component
  const ImageUploadField = ({ label, currentImage, onUpload, imageType }) => (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
      <label className="text-lg font-bold text-white block mb-4">{label}</label>
      
      {currentImage && (
        <div className="mb-4 relative">
          <img 
            src={currentImage} 
            alt="preview" 
            className="w-full h-48 object-cover rounded-lg border border-gray-600"
          />
          <p className="text-gray-400 text-sm mt-2">Current Image Preview</p>
        </div>
      )}

      <label className="cursor-pointer flex items-center justify-center gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-pink-500 rounded-lg p-6 transition-all">
        <Upload className="text-pink-400" size={24} />
        <div className="text-center">
          <p className="text-white font-semibold">Click to upload image</p>
          <p className="text-gray-400 text-sm">or drag and drop</p>
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

  // Icon selector component
  const IconSelector = ({ value, onChange, className = "" }) => (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none ${className}`}
    >
      <option value="Users">Users</option>
      <option value="MessageCircle">Message Circle</option>
      <option value="TrendingUp">Trending Up</option>
      <option value="Target">Target</option>
      <option value="BarChart3">Bar Chart</option>
      <option value="Star">Star</option>
      <option value="Facebook">Facebook</option>
      <option value="Instagram">Instagram</option>
      <option value="Linkedin">LinkedIn</option>
      <option value="Twitter">Twitter</option>
      <option value="Youtube">YouTube</option>
      <option value="Zap">Zap</option>
    </select>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Fixed Close Button */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-semibold transition"
        >
          <X size={16} /> Back
        </button>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-pink-900 to-purple-900 text-white p-8 shadow-2xl pt-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Social Media Marketing Admin</h1>
          <p className="text-pink-200">Manage all social media marketing content, services and images</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 flex gap-4">
          {[
            { id: 'header', label: 'Header Section' },
            { id: 'scrolling', label: 'Scrolling Services' },
            { id: 'services', label: 'Services Section' },
            { id: 'process', label: 'Process Section' },
            { id: 'whychoose', label: 'Why Choose Us' },
            { id: 'platforms', label: 'Platforms' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-4 font-semibold transition-all border-b-2 ${
                activeTab === tab.id
                  ? 'border-pink-500 text-pink-400'
                  : 'border-transparent text-gray-400 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Tab */}
        {activeTab === 'header' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Main Title</h2>
                <Edit2 className="text-pink-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Descriptions</h2>
                <button
                  onClick={() => handleAddDescription('header')}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold transition"
                >
                  <Plus size={16} /> Add Description
                </button>
              </div>
              <div className="space-y-4">
                {headerContent.descriptions.map((desc, index) => (
                  <div key={index} className="relative bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-white">Description {index + 1}</h3>
                      <button
                        onClick={() => handleRemoveDescription('header', index)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <textarea
                      value={desc}
                      onChange={(e) => handleHeaderEdit(index, e.target.value)}
                      className="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-pink-500 outline-none h-32 resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          </div>
        )}

        {/* Scrolling Services Tab */}
        {activeTab === 'scrolling' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Scrolling Services Banner</h2>
              <button
                onClick={handleAddScrollingService}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:to-pink-800 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-lg"
              >
                <Plus size={18} /> Add Scrolling Service
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {scrollingServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Service {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveScrollingService(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Icon</label>
                      <IconSelector
                        value={service.icon}
                        onChange={(value) => {
                          const newServices = [...scrollingServices];
                          newServices[index].icon = value;
                          setScrollingServices(newServices);
                        }}
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Text</label>
                      <input
                        type="text"
                        value={service.text}
                        onChange={(e) => {
                          const newServices = [...scrollingServices];
                          newServices[index].text = e.target.value;
                          setScrollingServices(newServices);
                        }}
                        className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Services Section Tab */}
        {activeTab === 'services' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Social Media Services</h2>
              <button
                onClick={handleAddService}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:to-pink-800 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-lg"
              >
                <Plus size={18} /> Add Service
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {servicesData.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Service {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveService(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Icon</label>
                      <IconSelector
                        value={service.icon}
                        onChange={(value) => handleServiceEdit(index, 'icon', value)}
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleServiceEdit(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleServiceEdit(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none h-24 resize-none"
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
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Process Title</h2>
              <input
                type="text"
                value={processContent.title}
                onChange={(e) => setProcessContent({ ...processContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Process Descriptions</h2>
                <button
                  onClick={() => handleAddDescription('process')}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold transition"
                >
                  <Plus size={16} /> Add Description
                </button>
              </div>
              <div className="space-y-4">
                {processContent.descriptions.map((desc, index) => (
                  <div key={index} className="relative bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-white">Description {index + 1}</h3>
                      <button
                        onClick={() => handleRemoveDescription('process', index)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <textarea
                      value={desc}
                      onChange={(e) => handleProcessDescEdit(index, e.target.value)}
                      className="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-pink-500 outline-none h-24 resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <ImageUploadField 
              label="Process Image" 
              currentImage={processContent.image}
              onUpload={handleImageUpload}
              imageType="process"
            />
          </div>
        )}

        {/* Why Choose Us Tab */}
        {activeTab === 'whychoose' && (
          <div className="space-y-6">
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <h2 className="text-2xl font-bold text-white mb-4">Why Choose Us Title</h2>
              <input
                type="text"
                value={whyChooseContent.title}
                onChange={(e) => setWhyChooseContent({ ...whyChooseContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <h3 className="text-lg font-bold text-white mb-4">Main Description</h3>
              <textarea
                value={whyChooseContent.description}
                onChange={(e) => setWhyChooseContent({ ...whyChooseContent, description: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none h-32 resize-none"
              />
            </div>

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Additional Descriptions</h2>
                <button
                  onClick={() => handleAddDescription('whyChoose')}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-lg font-semibold transition"
                >
                  <Plus size={16} /> Add Description
                </button>
              </div>
              <div className="space-y-4">
                {whyChooseContent.additionalDescriptions.map((desc, index) => (
                  <div key={index} className="relative bg-gray-700 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-lg font-bold text-white">Description {index + 1}</h3>
                      <button
                        onClick={() => handleRemoveDescription('whyChoose', index)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <textarea
                      value={desc}
                      onChange={(e) => handleWhyChooseDescEdit(index, e.target.value)}
                      className="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-pink-500 outline-none h-24 resize-none"
                    />
                  </div>
                ))}
              </div>
            </div>

            <ImageUploadField 
              label="Why Choose Us Image" 
              currentImage={whyChooseContent.image}
              onUpload={handleImageUpload}
              imageType="whyChoose"
            />

            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-white">Statistics</h2>
                <button
                  onClick={handleAddStat}
                  className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 rounded-lg font-semibold"
                >
                  <Plus size={16} /> Add Statistic
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {whyChooseContent.stats.map((stat, index) => (
                  <div key={index} className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="font-bold text-white">Stat {index + 1}</h3>
                      <button
                        onClick={() => handleRemoveStat(index)}
                        className="text-red-400 hover:text-red-300 transition"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <label className="text-gray-300 text-sm block mb-2">Value</label>
                        <input
                          type="text"
                          value={stat.value}
                          onChange={(e) => handleStatEdit(index, 'value', e.target.value)}
                          className="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-pink-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-gray-300 text-sm block mb-2">Label</label>
                        <input
                          type="text"
                          value={stat.label}
                          onChange={(e) => handleStatEdit(index, 'label', e.target.value)}
                          className="w-full bg-gray-600 text-white p-3 rounded border border-gray-500 focus:border-pink-500 outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Platforms Tab */}
        {activeTab === 'platforms' && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">Social Media Platforms</h2>
              <button
                onClick={handleAddPlatform}
                className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:to-pink-800 text-white px-4 py-2 rounded-lg font-semibold transition-all shadow-lg"
              >
                <Plus size={18} /> Add Platform
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {platformsData.map((platform, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white">Platform {index + 1}</h3>
                    <button
                      onClick={() => handleRemovePlatform(index)}
                      className="text-red-400 hover:text-red-300 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Platform Name</label>
                      <input
                        type="text"
                        value={platform.name}
                        onChange={(e) => handlePlatformEdit(index, 'name', e.target.value)}
                        className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Icon</label>
                      <IconSelector
                        value={platform.icon}
                        onChange={(value) => handlePlatformEdit(index, 'icon', value)}
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-sm block mb-2">Description</label>
                      <textarea
                        value={platform.description}
                        onChange={(e) => handlePlatformEdit(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-pink-500 outline-none h-24 resize-none"
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
      <div className="border-t border-gray-700 bg-gray-800 p-6 mt-12">
        <div className="max-w-7xl mx-auto flex justify-end gap-4">
          <button 
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-600 text-gray-300 hover:bg-gray-700 transition">
            Cancel
          </button>
          <button 
            onClick={handleSaveData}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-600 to-pink-700 text-white font-semibold hover:to-pink-800 transition flex items-center gap-2">
            <Save size={16} /> Save All Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaMarketingAdmin;