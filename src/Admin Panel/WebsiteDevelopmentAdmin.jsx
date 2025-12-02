import React, { useState } from 'react';
import { Plus, Trash2, X, Edit2, Save, Upload, CheckCircle } from 'lucide-react';

const WebsiteDevelopmentAdmin = ({ onClose }) => {
  const [activeTab, setActiveTab] = useState('header');
  const [headerContent, setHeaderContent] = useState({
    title: 'Professional Website Development',
    descriptions: [
      'At DPM IT Solutions, we build websites that help your business succeed online. Our website development services are designed to create effective digital experiences for your customers.',
      'We create websites that work well on all devices and help your business achieve its goals. Whether you need a business website, e-commerce platform, or company portal, we deliver solutions that work.',
      'We focus on building websites that are easy to use, fast, and help your business grow. Our development process ensures your website meets your requirements.'
    ]
  });

  const [headerImages, setHeaderImages] = useState({
    desktop: '/assets/webdev.jpg',
    mobile: '/assets/mobileweb.jpg',
  });

  const [websiteTypes, setWebsiteTypes] = useState([
    { icon: 'Globe', text: 'Customize Web Designing' },
    { icon: 'Zap', text: 'Dynamic Web Designing' },
    { icon: 'Smartphone', text: 'Responsive Web Designing' },
    { icon: 'RefreshCw', text: 'Website Redesigning' },
    { icon: 'FileText', text: 'Static Web Designing' },
    { icon: 'Target', text: 'Landing Page Designing' },
    { icon: 'Search', text: 'SEO Web Designing' },
    { icon: 'Sparkles', text: 'Flash Web Designing' }
  ]);

  const [servicesData, setServicesData] = useState([
    { icon: 'Monitor', title: 'Business Websites', description: 'Professional websites that represent your company online', gradient: 'from-blue-500 to-blue-600' },
    { icon: 'Smartphone', title: 'Mobile-Friendly Sites', description: 'Websites that work perfectly on phones and tablets', gradient: 'from-purple-500 to-purple-600' },
    { icon: 'Zap', title: 'E-commerce Platforms', description: 'Online stores to sell your products and services', gradient: 'from-blue-600 to-purple-600' },
    { icon: 'Users', title: 'Company Portals', description: 'Internal websites for your team and employees', gradient: 'from-purple-600 to-blue-600' }
  ]);

  const [processSteps, setProcessSteps] = useState([
    'Planning & Requirement Gathering',
    'Design & Layout Creation',
    'Development & Content Integration',
    'Testing & Quality Check',
    'Launch & Maintenance'
  ]);

  const [processContent, setProcessContent] = useState({
    title: 'Our Website Development Process',
    descriptions: [
      'We follow a straightforward process to build your website efficiently and effectively. This ensures we deliver what you need on time.',
      'From planning to launch, we work with you to create a website that meets your requirements and helps your business.'
    ],
    image: '/assets/webdev2.jpg',
  });

  const [technologyContent, setTechnologyContent] = useState({
    title: 'Our Technology Approach',
    descriptions: [
      'We use modern web technologies to build websites that are fast, secure, and work well for your visitors.',
      'Our team uses reliable tools and frameworks to ensure your website performs well and meets current standards.',
      'We combine the latest web standards with proven development practices to deliver websites that are scalable, maintainable, and future-ready for your business growth.'
    ],
    image: '/assets/webdev1.jpg',
  });

  const [technologies, setTechnologies] = useState([
    { name: 'HTML5', img: '/assets/html.png' },
    { name: 'CSS3', img: '/assets/css.jpg' },
    { name: 'JavaScript', img: '/assets/java.jpg' },
    { name: 'React', img: '/assets/react.png' },
    { name: 'Node.js', img: '/assets/node.png' },
    { name: 'PHP', img: '/assets/php.png' }
  ]);

  const handleSaveData = async () => {
    const finalData = {
      headerContent,
      headerImages,
      websiteTypes,
      servicesData,
      processSteps,
      processContent,
      technologyContent,
      technologies
    };
    try {
      const res = await fetch("http://localhost:5000/api/content/website-development", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData)
      });
      const json = await res.json();
      if (json.success) alert("Content Saved Successfully!");
      else alert("Save Failed");
    } catch (err) {
      alert("Server Error — Check Backend");
    }
  };

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

  const handleHeaderEdit = (index, value) => {
    const newDesc = [...headerContent.descriptions];
    newDesc[index] = value;
    setHeaderContent({ ...headerContent, descriptions: newDesc });
  };

  const handleAddWebsiteType = () => {
    setWebsiteTypes([...websiteTypes, { icon: 'Globe', text: 'New Website Type' }]);
  };

  const handleRemoveWebsiteType = (index) => {
    setWebsiteTypes(websiteTypes.filter((_, i) => i !== index));
  };

  const handleUpdateWebsiteType = (index, field, value) => {
    const newTypes = [...websiteTypes];
    newTypes[index][field] = value;
    setWebsiteTypes(newTypes);
  };

  const handleAddService = () => {
    setServicesData([...servicesData, { icon: 'Monitor', title: 'New Service', description: 'Service description', gradient: 'from-blue-500 to-blue-600' }]);
  };

  const handleRemoveService = (index) => {
    setServicesData(servicesData.filter((_, i) => i !== index));
  };

  const handleUpdateService = (index, field, value) => {
    const newServices = [...servicesData];
    newServices[index][field] = value;
    setServicesData(newServices);
  };

  const handleAddProcessStep = () => {
    setProcessSteps([...processSteps, 'New Step']);
  };

  const handleRemoveProcessStep = (index) => {
    setProcessSteps(processSteps.filter((_, i) => i !== index));
  };

  const handleUpdateProcessStep = (index, value) => {
    const newSteps = [...processSteps];
    newSteps[index] = value;
    setProcessSteps(newSteps);
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

      <label className="cursor-pointer flex items-center justify-center gap-2 md:gap-3 bg-gray-700 hover:bg-gray-600 border-2 border-dashed border-gray-600 hover:border-blue-500 rounded-lg p-4 md:p-6 transition-all">
        <Upload className="text-blue-400" size={20} />
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
      <div className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4 md:p-8 shadow-2xl pt-16 md:pt-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Website Development Admin</h1>
          <p className="text-blue-200 text-sm md:text-base">Manage all website development content, services and images</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-2 md:px-4 flex gap-1 md:gap-4 overflow-x-auto">
          {[
            { id: 'header', label: 'Header' },
            { id: 'types', label: 'Website Types' },
            { id: 'services', label: 'Services' },
            { id: 'process', label: 'Process' },
            { id: 'technology', label: 'Technology' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-3 md:px-6 md:py-4 font-semibold transition-all whitespace-nowrap border-b-2 text-sm md:text-base ${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-400'
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
        {activeTab === 'header' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex items-center justify-between mb-4 md:mb-6">
                <h2 className="text-xl md:text-2xl font-bold text-white">Main Title</h2>
                <Edit2 className="text-blue-400" size={20} />
              </div>
              <input
                type="text"
                value={headerContent.title}
                onChange={(e) => setHeaderContent({ ...headerContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none text-sm md:text-base"
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
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none h-24 md:h-32 resize-none text-sm md:text-base"
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

        {activeTab === 'types' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddWebsiteType}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Website Type
            </button>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {websiteTypes.map((type, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-white text-sm md:text-base">Type {index + 1}</h3>
                    <button
                      onClick={() => handleRemoveWebsiteType(index)}
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
                        value={type.icon}
                        onChange={(e) => handleUpdateWebsiteType(index, 'icon', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Text</label>
                      <input
                        type="text"
                        value={type.text}
                        onChange={(e) => handleUpdateWebsiteType(index, 'text', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'services' && (
          <div className="space-y-4 md:space-y-6">
            <button
              onClick={handleAddService}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white px-4 py-3 rounded-lg font-semibold transition-all shadow-lg w-full md:w-auto text-sm md:text-base"
            >
              <Plus size={18} /> Add Service
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
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Title</label>
                      <input
                        type="text"
                        value={service.title}
                        onChange={(e) => handleUpdateService(index, 'title', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Description</label>
                      <textarea
                        value={service.description}
                        onChange={(e) => handleUpdateService(index, 'description', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm h-16 resize-none"
                      />
                    </div>
                    <div>
                      <label className="text-gray-300 text-xs md:text-sm block mb-1">Gradient</label>
                      <input
                        type="text"
                        value={service.gradient}
                        onChange={(e) => handleUpdateService(index, 'gradient', e.target.value)}
                        className="w-full bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-xs md:text-sm"
                        placeholder="e.g. from-blue-500 to-blue-600"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'process' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Process Title</h2>
              <input
                type="text"
                value={processContent.title}
                onChange={(e) => setProcessContent({ ...processContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none text-sm md:text-base"
              />
            </div>

            {processContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleProcessDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
                />
              </div>
            ))}

            <ImageUploadField 
              label="Process Image" 
              currentImage={processContent.image}
              onUpload={handleImageUpload}
              imageType="process"
            />

            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <h2 className="text-xl md:text-2xl font-bold text-white">Process Steps</h2>
                <button
                  onClick={handleAddProcessStep}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-700 text-white px-3 py-2 rounded-lg font-semibold text-xs md:text-sm w-full md:w-auto"
                >
                  <Plus size={14} /> Add Step
                </button>
              </div>
              <div className="space-y-2 md:space-y-3">
                {processSteps.map((step, index) => (
                  <div key={index} className="flex gap-2 md:gap-3 items-center">
                    <CheckCircle className="text-green-400 flex-shrink-0" size={18} />
                    <input
                      type="text"
                      value={step}
                      onChange={(e) => handleUpdateProcessStep(index, e.target.value)}
                      className="flex-1 bg-gray-700 text-white p-2 rounded border border-gray-600 focus:border-blue-500 outline-none text-sm"
                    />
                    <button
                      onClick={() => handleRemoveProcessStep(index)}
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

        {activeTab === 'technology' && (
          <div className="space-y-4 md:space-y-6">
            <div className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
              <h2 className="text-xl md:text-2xl font-bold text-white mb-4">Technology Title</h2>
              <input
                type="text"
                value={technologyContent.title}
                onChange={(e) => setTechnologyContent({ ...technologyContent, title: e.target.value })}
                className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none text-sm md:text-base"
              />
            </div>

            {technologyContent.descriptions.map((desc, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl">
                <h3 className="text-base md:text-lg font-bold text-white mb-4">Description {index + 1}</h3>
                <textarea
                  value={desc}
                  onChange={(e) => handleTechDescEdit(index, e.target.value)}
                  className="w-full bg-gray-700 text-white p-3 rounded border border-gray-600 focus:border-blue-500 outline-none h-20 md:h-24 resize-none text-sm md:text-base"
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
                          className="w-full bg-gray-600 text-white p-2 rounded border border-gray-500 focus:border-blue-500 outline-none text-xs md:text-sm"
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

                    <label className="cursor-pointer flex items-center justify-center gap-2 bg-gray-600 hover:bg-gray-500 border border-dashed border-gray-500 hover:border-blue-400 rounded p-2 md:p-3 transition-all text-xs md:text-sm">
                      <Upload className="text-blue-400" size={14} />
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
            className="px-4 py-2 md:px-6 md:py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold hover:to-blue-800 transition flex items-center gap-2 text-sm md:text-base order-1 md:order-2">
            <Save size={16} /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentAdmin;