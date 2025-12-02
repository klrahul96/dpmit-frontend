import React, { useState } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle } from 'lucide-react';

const AppDevelopmentAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  
  // Header Content State
  const [headerContent, setHeaderContent] = useState({
    title: 'Professional App Development Services',
    descriptions: [
      'At DPM IT Solutions, we create innovative mobile applications that drive business growth and enhance user experience across all platforms.',
      'From iOS and Android development to cross-platform solutions, we deliver high-performance applications that engage users and achieve your business objectives.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/appimage.jpg',
    mobile: '/assets/app-development.jpg',
  });

  // Scrolling Services State
  const [scrollingServices, setScrollingServices] = useState([
    { icon: 'Smartphone', text: 'iOS App Development' },
    { icon: 'Code', text: 'Android App Development' },
    { icon: 'Globe', text: 'Cross-Platform Apps' },
    { icon: 'Layers', text: 'Hybrid App Development' },
    { icon: 'Zap', text: 'Native App Development' },
    { icon: 'Settings', text: 'App Maintenance' },
    { icon: 'Target', text: 'Progressive Web Apps' },
    { icon: 'Box', text: 'API Integration' }
  ]);

  // Services Section State
  const [servicesData, setServicesData] = useState([
    {
      icon: 'Smartphone',
      title: 'iOS App Development',
      description: 'Native iOS applications built with Swift and Objective-C for optimal performance and Apple ecosystem integration.',
      gradient: 'from-blue-500 to-blue-600'
    },
    {
      icon: 'Code',
      title: 'Android App Development',
      description: 'High-performance Android apps using Java and Kotlin, optimized for various devices and versions.',
      gradient: 'from-green-500 to-green-600'
    },
    {
      icon: 'Globe',
      title: 'Cross-Platform Development',
      description: 'Build once, deploy everywhere with React Native and Flutter for consistent user experience.',
      gradient: 'from-purple-500 to-purple-600'
    },
    {
      icon: 'Layers',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that users love with modern design principles and best practices.',
      gradient: 'from-pink-500 to-pink-600'
    },
    {
      icon: 'Settings',
      title: 'App Maintenance & Support',
      description: '24/7 support, regular updates, and performance optimization to keep your app running smoothly.',
      gradient: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: 'Box',
      title: 'API Integration',
      description: 'Seamless integration with third-party services, payment gateways, and backend systems.',
      gradient: 'from-orange-500 to-orange-600'
    }
  ]);

  // Process Section State
  const [processContent, setProcessContent] = useState({
    title: 'Our App Development Process',
    descriptions: [
      'Our systematic approach ensures every mobile application is built to the highest standards, delivering exceptional user experiences and business value.',
      'We start with discovery and planning, move through design and prototyping, then execute development and testing phases with regular client feedback and iterations.',
      'Our agile methodology ensures flexibility, transparency, and faster time-to-market while maintaining code quality and app performance throughout the development lifecycle.'
    ],
    image: '/assets/development.jpg'
  });

  // Technologies Section State
  const [technologyContent, setTechnologyContent] = useState({
    title: 'Technologies We Master',
    descriptions: [
      'We leverage the latest technologies and frameworks to build robust, scalable, and feature-rich mobile applications that perform flawlessly across all devices.',
      'Our expertise spans native iOS and Android development, as well as cross-platform frameworks like React Native and Flutter for efficient multi-platform deployment.',
      'We integrate powerful backend solutions, cloud services, and third-party APIs to create comprehensive mobile experiences that drive real business results.'
    ],
    image: '/assets/service.webp'
  });

  const [technologies, setTechnologies] = useState([
    { name: 'React Native', img: '/assets/react.png' },
    { name: 'Flutter', img: '/assets/flutter.png' },
    { name: 'Swift', img: '/assets/swift.png' },
    { name: 'Kotlin', img: '/assets/kotlin.png' },
    { name: 'Firebase', img: '/assets/firebase.png' },
    { name: 'Node.js', img: '/assets/node.png' }
  ]);

  // Statistics Section State
  const [statsData, setStatsData] = useState([
    { value: '100+', label: 'Apps Delivered', color: 'from-blue-500 to-blue-600' },
    { value: '50+', label: 'Happy Clients', color: 'from-purple-500 to-purple-600' },
    { value: '5+', label: 'Years Experience', color: 'from-indigo-500 to-indigo-600' },
    { value: '24/7', label: 'Support Available', color: 'from-pink-500 to-pink-600' }
  ]);

  // Save Data Function
  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      scrollingServices,
      servicesData,
      processContent,
      technologyContent,
      technologies,
      statsData
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/app-development", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) alert("App Development Content Saved Successfully!");
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
      } else if (imageType === 'technology') {
        setTechnologyContent({ ...technologyContent, image: e.target.result });
      }
    };
    reader.readAsDataURL(file);
  };

  const handleTechImageUpload = (file, index) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const newTechs = [...technologies];
      newTechs[index].img = e.target.result;
      setTechnologies(newTechs);
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

  const handleTechDescEdit = (index, value) => {
    const newDesc = [...technologyContent.descriptions];
    newDesc[index] = value;
    setTechnologyContent({ ...technologyContent, descriptions: newDesc });
  };

  // Add/Remove Handlers
  const handleAddScrollingService = () => {
    setScrollingServices([...scrollingServices, { icon: 'Smartphone', text: 'New Service' }]);
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
      icon: 'Smartphone', 
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

  const handleAddTechnology = () => {
    setTechnologies([...technologies, { name: 'New Tech', img: '' }]);
  };

  const handleRemoveTechnology = (index) => {
    setTechnologies(technologies.filter((_, i) => i !== index));
  };

  const handleUpdateTechnology = (index, value) => {
    const newTechs = [...technologies];
    newTechs[index].name = value;
    setTechnologies(newTechs);
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

      <label className="cursor-pointer flex items-center justify-center gap-2 md:gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-indigo-500 rounded-lg p-4 md:p-6 transition-all">
        <Upload className="text-indigo-400" size={20} />
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
      <div className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white p-4 md:p-8 shadow-2xl pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">App Development Admin</h1>
          <p className="text-indigo-200 text-sm md:text-base">Manage all app development content, services and images</p>
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
            { id: 'technology', label: 'Technology' },
            { id: 'stats', label: 'Statistics' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-3 md:px-6 md:py-4 font-semibold transition-all whitespace-nowrap border-b-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-indigo-500 text-indigo-400'
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
                <Edit2 className="text-indigo-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none text-sm md:text-base"
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
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
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
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:to-indigo-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Text</label>
                      <input
                        type="text"
                        value={service.text}
                        onChange={(e) => handleUpdateScrollingService(index, 'text', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* App Services Tab */}
        {activeTab === 'services' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:to-indigo-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add App Service
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleUpdateService(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleUpdateService(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={service.gradient}
                        onChange={(e) => handleUpdateService(index, 'gradient', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
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
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none text-sm md:text-base"
              />
            </div>

            {processContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleProcessDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
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

        {/* Technology Section Tab */}
        {activeTab === 'technology' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Technology Title</h2>
              <input
                type="text"
                value={technologyContent.title}
                onChange={(e) => setTechnologyContent({ ...technologyContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none text-sm md:text-base"
              />
            </div>

            {technologyContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleTechDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-indigo-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
                />
              </div>
            ))}

            <ImageUploadField 
              label="Technology Section Image" 
              currentImage={technologyContent.image}
              onUpload={handleImageUpload}
              imageType="technology"
            />

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">Technologies</h2>
                <button
                  onClick={handleAddTechnology}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg font-semibold text-xs md:text-sm w-full md:w-auto"
                >
                  <Plus size={14} /> Add Technology
                </button>
              </div>
              <div className="space-y-3 md:space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-700 p-3 md:p-4 rounded-lg border border-gray-600">
                    <div className="flex flex-col md:flex-row md:gap-4 md:items-start mb-3 gap-2">
                      <div className="flex-1">
                        <label className="text-gray-300 text-xs md:text-sm block mb-1">Technology Name</label>
                        <input
                          type="text"
                          value={tech.name}
                          onChange={(e) => handleUpdateTechnology(index, e.target.value)}
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-indigo-500 outline-none text-xs md:text-sm"
                        />
                      </div>
                      <button
                        onClick={() => handleRemoveTechnology(index)}
                        className="text-red-400 hover:text-red-300 transition md:mt-6"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                    
                    {tech.img && (
                      <div className="mb-3">
                        <img 
                          src={tech.img} 
                          alt={tech.name}
                          className="w-full h-20 md:h-24 object-cover rounded border border-gray-600"
                        />
                      </div>
                    )}

                    <label className="cursor-pointer flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 border border-dashed border-gray-500 hover:border-indigo-400 rounded p-2 md:p-3 transition-all text-xs md:text-sm">
                      <Upload className="text-indigo-400" size={14} />
                      <span className="text-gray-300">Upload {tech.name} Image</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => e.target.files && handleTechImageUpload(e.target.files[0], index)}
                        className="hidden"
                      />
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Statistics Tab */}
        {activeTab === 'stats' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddStat}
              className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:to-indigo-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Label</label>
                      <input
                        type="text"
                        value={stat.label}
                        onChange={(e) => handleStatEdit(index, 'label', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={stat.color}
                        onChange={(e) => handleStatEdit(index, 'color', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-indigo-500 outline-none text-xs md:text-sm"
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
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-indigo-700 text-white font-semibold hover:to-indigo-800 transition flex items-center gap-2 text-sm md:text-base order-1 md:order-2">
            <Save size={16} /> Save App Development Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppDevelopmentAdmin;