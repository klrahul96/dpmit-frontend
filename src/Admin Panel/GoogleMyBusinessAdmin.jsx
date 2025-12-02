import React, { useState, useEffect } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle } from 'lucide-react';

const GoogleMyBusinessAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  
  // Header Content State
  const [headerContent, setHeaderContent] = useState({
    title: 'Professional Google My Business Services',
    descriptions: [
      'At DPM IT Solutions, we help your business get discovered on Google Maps and Google Search. Our Google My Business services ensure your business stands out when customers search for services like yours.',
      'We optimize your Google Business Profile to attract more local customers, manage your online reputation, and increase your visibility in local search results. Get more calls, website visits, and foot traffic to your business.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/main-banner.jpg',
    mobile: '/assets/main-banner.jpg',
  });

  // Scrolling Services State
  const [scrollingServices, setScrollingServices] = useState([
    { icon: 'MapPin', text: 'Local Search Visibility' },
    { icon: 'Star', text: 'Customer Reviews Management' },
    { icon: 'Image', text: 'Business Photos & Videos' },
    { icon: 'BarChart3', text: 'Performance Insights' },
    { icon: 'MessageSquare', text: 'Customer Messaging' },
    { icon: 'Calendar', text: 'Posts & Updates' },
    { icon: 'Navigation', text: 'Location Optimization' },
    { icon: 'ShieldCheck', text: 'Profile Verification' }
  ]);

  // Services Section State
  const [servicesData, setServicesData] = useState([
    {
      icon: 'ShieldCheck',
      title: 'Profile Setup & Verification',
      description: 'Complete business profile creation and Google verification',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Target',
      title: 'Local SEO Optimization',
      description: 'Optimize your profile to rank higher in local searches',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'Star',
      title: 'Review Management',
      description: 'Monitor and respond to customer reviews professionally',
      gradient: 'from-blue-600 to-purple-600'
    },
    {
      icon: 'BarChart3',
      title: 'Performance Analytics',
      description: 'Track insights and improve your business visibility',
      gradient: 'from-purple-600 to-blue-600'
    }
  ]);

  // Process Section State
  const [processContent, setProcessContent] = useState({
    title: 'Our Google My Business Process',
    descriptions: [
      'We follow a proven process to optimize your Google Business Profile and help you dominate local search results in your area.',
      'From initial setup to ongoing management, we ensure your business gets maximum visibility and attracts more local customers every day.'
    ],
    image: '/assets/googlemy.jpeg'
  });

  // Benefits Section State
  const [benefitsContent, setBenefitsContent] = useState({
    title: 'Why Google My Business Matters',
    descriptions: [
      'Google My Business is essential for any local business. When people search for services near them, your optimized profile appears prominently in search results and Google Maps.',
      'With our expert management, you\'ll get more phone calls, website visits, and customers walking through your door. We help you build trust with reviews and showcase your business with photos.',
      'Stay ahead of competitors by keeping your profile updated with posts, offers, and engaging content that converts searchers into paying customers.'
    ],
    image: '/assets/whygooglemybusiness.webp'
  });

  // Statistics Section State
  const [statsData, setStatsData] = useState([
    { value: '70%', label: 'More Local Visibility', color: 'from-blue-500 to-blue-600' },
    { value: '50%', label: 'Increase in Calls', color: 'from-purple-500 to-purple-600' },
    { value: '80%', label: 'Website Visit Growth', color: 'from-indigo-500 to-indigo-600' },
    { value: '4.8★', label: 'Average Rating', color: 'from-pink-500 to-pink-600' }
  ]);

  // Load Data from API
  useEffect(() => {
    const fetchContent = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/content/google-my-business");
        const json = await res.json();

        if (json.success && json.data) {
          setHeaderContent(json.data.headerContent || headerContent);
          setHeaderImages(json.data.headerImages || headerImages);
          setScrollingServices(json.data.scrollingServices || scrollingServices);
          setServicesData(json.data.servicesData || servicesData);
          setProcessContent(json.data.processContent || processContent);
          setBenefitsContent(json.data.benefitsContent || benefitsContent);
          setStatsData(json.data.statsData || statsData);
        }
      } catch (error) {
        console.log("Error loading Google My Business content:", error);
      }
    };

    fetchContent();
  }, []);

  // Save Data Function
  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      scrollingServices,
      servicesData,
      processContent,
      benefitsContent,
      statsData
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/google-my-business", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) alert("Google My Business Content Saved Successfully!");
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
      } else if (imageType === 'benefits') {
        setBenefitsContent({ ...benefitsContent, image: e.target.result });
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

  const handleBenefitsDescEdit = (index, value) => {
    const newDesc = [...benefitsContent.descriptions];
    newDesc[index] = value;
    setBenefitsContent({ ...benefitsContent, descriptions: newDesc });
  };

  // Add/Remove Handlers
  const handleAddScrollingService = () => {
    setScrollingServices([...scrollingServices, { icon: 'MapPin', text: 'New Service' }]);
  };

  const handleRemoveScrollingService = (index) => {
    setScrollingServices(scrollingServices.filter((_, i) => i !== index));
  };

  const handleUpdateScrollingService = (index, field, value) => {
    const newServices = [...scrollingServices];
    newServices[index][field] = value;
    setScrollingServices(newServices);
  };

  const handleAddService = () => {
    setServicesData([...servicesData, { 
      icon: 'MapPin', 
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

  const handleStatEdit = (index, field, value) => {
    const newStats = [...statsData];
    newStats[index][field] = value;
    setStatsData(newStats);
  };

  const handleAddStat = () => {
    setStatsData([...statsData, { 
      value: 'New', 
      label: 'New Stat', 
      color: 'from-blue-500 to-blue-600' 
    }]);
  };

  const handleRemoveStat = (index) => {
    setStatsData(statsData.filter((_, i) => i !== index));
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

      <label className="cursor-pointer flex items-center justify-center gap-2 md:gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-red-500 rounded-lg p-4 md:p-6 transition-all">
        <Upload className="text-red-400" size={20} />
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
      <div className="bg-gradient-to-r from-red-900 to-orange-900 text-white p-4 md:p-8 shadow-2xl pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Google My Business Admin</h1>
          <p className="text-red-200 text-sm md:text-base">Manage all Google My Business content, services and images</p>
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
            { id: 'benefits', label: 'Benefits' },
            { id: 'stats', label: 'Statistics' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-3 md:px-6 md:py-4 font-semibold transition-all whitespace-nowrap border-b-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-red-500 text-red-400'
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
                <Edit2 className="text-red-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none text-sm md:text-base"
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
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
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
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
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
                        onChange={(e) => handleUpdateScrollingService(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Text</label>
                      <input
                        type="text"
                        value={service.text}
                        onChange={(e) => handleUpdateScrollingService(index, 'text', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* GMB Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add GMB Service
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleUpdateService(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleUpdateService(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={service.gradient}
                        onChange={(e) => handleUpdateService(index, 'gradient', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
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
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none text-sm md:text-base"
              />
            </div>

            {processContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleProcessDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
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

        {/* Benefits Section Tab */}
        {activeTab === 'benefits' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Benefits Title</h2>
              <input
                type="text"
                value={benefitsContent.title}
                onChange={(e) => setBenefitsContent({ ...benefitsContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none text-sm md:text-base"
              />
            </div>

            {benefitsContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleBenefitsDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-red-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
                />
              </div>
            ))}

            <ImageUploadField 
              label="Benefits Image" 
              currentImage={benefitsContent.image}
              onUpload={handleImageUpload}
              imageType="benefits"
            />
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddStat}
              className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Statistic
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {statsData.map((stat, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Stat {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveStat(index)}
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => handleStatEdit(index, 'label', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={stat.color}
                        onChange={(e) => handleStatEdit(index, 'color', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-red-500 outline-none text-xs md:text-sm"
                        placeholder="e.g. from-blue-500 to-blue-600"
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
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-red-600 to-red-700 text-white font-semibold hover:to-red-800 transition flex items-center gap-2 text-sm md:text-base order-1 md:order-2">
            <Save size={16} /> Save GMB Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default GoogleMyBusinessAdmin;