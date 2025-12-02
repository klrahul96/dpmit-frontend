import React from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const API_BASE = "http://localhost:5000";

const ServicesSectionAdmin = ({ 
  websiteContent, 
  editingSection, 
  tempData, 
  setTempData, 
  expandedSections, 
  toggleSection, 
  startEditing, 
  saveChanges, 
  cancelEditing,
  handleImageUpload
}) => {

  const handleSave = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/content/services`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tempData)
      });

      const response = await res.json();
      saveChanges("services");
      alert("✔ Services updated successfully");
    } catch (err) {
      alert("❌ Failed to update services");
    }
  };

  React.useEffect(() => {
    if (editingSection === 'services' && (!tempData.services || tempData.services.length === 0)) {
      const defaultServices = [
        {
          icon: "fa fa-globe",
          title: "Website Development",
          description: "Transform your business with stunning, responsive websites that captivate your audience and drive conversions. Our expert developers create fast-loading, mobile-optimized sites that establish your powerful online presence.",
          features: ["Responsive Design", "Fast Loading Speed", "Mobile Optimized", "SEO Ready"],
          highlights: ["Modern UI/UX Design", "Cross-browser Compatibility", "Performance Optimization", "Custom Functionality"],
          image: "/assets/code.jpg",
          path: "/services/website-development"
        },
        {
          icon: "fa fa-search",
          title: "Search Engine Optimization",
          description: "Dominate search results and attract quality leads with our proven SEO strategies. We boost your website's visibility on Google and other major search engines through comprehensive optimization techniques.",
          features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
          highlights: ["Local SEO Optimization", "Competitor Analysis", "Link Building Strategy", "Performance Tracking"],
          image: "/assets/seopa.jpg",
          path: "/services/seo"
        },
        {
          icon: "fa fa-share-alt",
          title: "Social Media Marketing",
          description: "Build brand awareness and engage your audience across all major social platforms. Our targeted campaigns convert followers into loyal customers through strategic content and community building.",
          features: ["Content Creation", "Audience Targeting", "Campaign Management", "Analytics"],
          highlights: ["Platform-specific Strategy", "Influencer Partnerships", "Community Management", "ROI Optimization"],
          image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
          path: "/services/social-media-marketing"
        },
        {
          icon: "fa fa-map-marker-alt", 
          title: "Google My Business",
          description: "Optimize your local business presence and help customers find you easily. Our professional GMB management increases your local visibility and drives more foot traffic to your business.",
          features: ["Local SEO", "Review Management", "Business Optimization", "Local Listings"],
          highlights: ["Google Maps Optimization", "Customer Review Strategy", "Local Citation Building", "Competitor Monitoring"],
          image: "/assets/gmbimage.jpg",
          path: "/services/google-my-business"
        },
        {
          icon: "fa fa-bullhorn",
          title: "Digital Marketing",
          description: "Comprehensive digital marketing solutions that drive growth and maximize ROI. From PPC campaigns to email marketing, we create integrated strategies that deliver measurable results.",
          features: ["PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Conversion Optimization"],
          highlights: ["Multi-channel Strategy", "A/B Testing & Optimization", "Customer Journey Mapping", "Performance Analytics"],
          image: "/assets/7_digital_skills.png",
          path: "/services/digital-marketing"
        },
        {
          icon: "fa fa-mobile-alt",
          title: "App Development", 
          description: "Create powerful mobile applications that provide seamless user experiences and drive business growth. We develop custom apps for iOS and Android platforms with cutting-edge technology.",
          features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"],
          highlights: ["Native Performance", "Cloud Integration", "Push Notifications", "App Store Optimization"],
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
          path: "/services/app-development"
        }
      ];

      setTempData(prev => ({
        ...prev,
        services: defaultServices
      }));
    }
  }, [editingSection, tempData.services]);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div 
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-green-600"
        onClick={() => toggleSection('services')}
      >
        <div className="flex items-center gap-3">
          {expandedSections.services ? <ChevronUp className="h-5 w-5 text-green-600" /> : <ChevronDown className="h-5 w-5 text-green-600" />}
          <div>
            <h2 className="text-xl font-bold text-gray-900">⚙️ Services Section</h2>
            <p className="text-sm text-gray-500">
              {editingSection === 'services' 
                ? (tempData.services?.length || 0) 
                : (websiteContent.services?.services?.length || 0)
              } services available
            </p>
          </div>
        </div>
        {editingSection !== 'services' && expandedSections.services && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              const servicesData = {
                sectionSubtitle: websiteContent.services?.sectionSubtitle || "Our Services",
                sectionTitle: websiteContent.services?.sectionTitle || "Services Built Specifically",
                sectionTitleHighlight: websiteContent.services?.sectionTitleHighlight || "For Your Business",
                sectionDescription: websiteContent.services?.sectionDescription || "Comprehensive digital solutions that drive growth and deliver exceptional results",
                services: websiteContent.services?.services || []
              };
              startEditing('services', servicesData);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition shadow-md hover:shadow-lg"
          >
            <Edit className="h-4 w-4" />
            Edit Section
          </button>
        )}
      </div>

      {expandedSections.services && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          {editingSection === 'services' ? (
            <div className="space-y-6">
              
              {/* ---- Main Section Inputs ---- */}
              <div className="grid grid-cols-1 gap-4 bg-white p-5 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                  <input
                    type="text"
                    value={tempData.sectionSubtitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={tempData.sectionTitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Title Highlight Text</label>
                  <input
                    type="text"
                    value={tempData.sectionTitleHighlight || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionTitleHighlight: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                  <textarea
                    value={tempData.sectionDescription || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionDescription: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              {/* ---- Services List ---- */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    Services List ({tempData.services?.length || 0})
                  </h3>
                  <button
                    onClick={() => {
                      const newService = {
                        icon: "fa fa-star",
                        title: "New Service",
                        description: "Service description here",
                        features: ["Feature 1", "Feature 2"],
                        highlights: ["Highlight 1", "Highlight 2"],
                        image: "",
                        path: "/services/new-service"
                      };
                      const newServices = [...(tempData.services || []), newService];
                      setTempData({ ...tempData, services: newServices });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    Add New Service
                  </button>
                </div>

                <div className="space-y-4">
                  {tempData.services?.map((service, idx) => (
                    <div key={idx} className="bg-white p-5 border-2 border-gray-200 rounded-lg shadow-sm">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <i className={service.icon}></i>
                          Service {idx + 1}: {service.title}
                        </h4>
                        <button
                          onClick={() => {
                            const newServices = tempData.services.filter((_, i) => i !== idx);
                            setTempData({ ...tempData, services: newServices });
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>

                      <div className="space-y-3">
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Icon Class</label>
                            <input
                              type="text"
                              placeholder="fa fa-globe"
                              value={service.icon}
                              onChange={(e) => {
                                const newServices = [...tempData.services];
                                newServices[idx].icon = e.target.value;
                                setTempData({ ...tempData, services: newServices });
                              }}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Path/URL</label>
                            <input
                              type="text"
                              value={service.path}
                              onChange={(e) => {
                                const newServices = [...tempData.services];
                                newServices[idx].path = e.target.value;
                                setTempData({ ...tempData, services: newServices });
                              }}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Service Title</label>
                          <input
                            type="text"
                            value={service.title}
                            onChange={(e) => {
                              const newServices = [...tempData.services];
                              newServices[idx].title = e.target.value;
                              setTempData({ ...tempData, services: newServices });
                            }}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                          <textarea
                            value={service.description}
                            onChange={(e) => {
                              const newServices = [...tempData.services];
                              newServices[idx].description = e.target.value;
                              setTempData({ ...tempData, services: newServices });
                            }}
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Service Image</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              value={service.image}
                              onChange={(e) => {
                                const newServices = [...tempData.services];
                                newServices[idx].image = e.target.value;
                                setTempData({ ...tempData, services: newServices });
                              }}
                              placeholder="Image URL or /assets/image.jpg"
                              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                            />
                            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg border border-gray-300 text-xs font-medium flex items-center gap-1">
                              <input
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={(e) => handleImageUpload(e, 'services', idx, 'image')}
                              />
                              📁 Upload
                            </label>
                          </div>
                          {service.image && (
                            <div className="mt-2">
                              <img 
                                src={service.image} 
                                alt="Service" 
                                className="h-20 w-32 object-cover rounded border"
                                onError={(e) => {
                                  e.target.src = "https://via.placeholder.com/150x100?text=Image+Error";
                                }}
                              />
                            </div>
                          )}
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">Features (comma separated)</label>
                          <input
                            type="text"
                            value={Array.isArray(service.features) ? service.features.join(', ') : ''}
                            onChange={(e) => {
                              const newServices = [...tempData.services];
                              newServices[idx].features = e.target.value.split(',').map(f => f.trim()).filter(f => f);
                              setTempData({ ...tempData, services: newServices });
                            }}
                            placeholder="Feature 1, Feature 2, Feature 3"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-2">Highlights (comma separated)</label>
                          <input
                            type="text"
                            value={Array.isArray(service.highlights) ? service.highlights.join(', ') : ''}
                            onChange={(e) => {
                              const newServices = [...tempData.services];
                              newServices[idx].highlights = e.target.value.split(',').map(h => h.trim()).filter(h => h);
                              setTempData({ ...tempData, services: newServices });
                            }}
                            placeholder="Highlight 1, Highlight 2, Highlight 3"
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                          />
                        </div>

                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ---- SAVE / CANCEL Buttons ---- */}
              <div className="flex gap-3 pt-4 border-t border-gray-300">
                <button
                  onClick={handleSave}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition"
                >
                  <Save className="h-4 w-4" />
                  Save All Services
                </button>
                <button
                  onClick={cancelEditing}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold shadow-md transition"
                >
                  <X className="h-4 w-4" />
                  Cancel
                </button>
              </div>

            </div>
          ) : (

            /* ---- View Mode ---- */
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Info</p>
                <p className="text-lg font-bold text-gray-900">
                  {websiteContent.services?.sectionTitle || "Services Built Specifically"} 
                  <span className="text-blue-600"> {websiteContent.services?.sectionTitleHighlight || "For Your Business"}</span>
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {websiteContent.services?.sectionDescription || "Comprehensive digital solutions that drive growth and deliver exceptional results"}
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-500 font-medium uppercase">Services ({websiteContent.services?.services?.length || 0})</p>
                  <button
                    onClick={() => {
                      const servicesData = {
                        sectionSubtitle: websiteContent.services?.sectionSubtitle || "Our Services",
                        sectionTitle: websiteContent.services?.sectionTitle || "Services Built Specifically",
                        sectionTitleHighlight: websiteContent.services?.sectionTitleHighlight || "For Your Business",
                        sectionDescription: websiteContent.services?.sectionDescription || "Comprehensive digital solutions that drive growth and deliver exceptional results",
                        services: websiteContent.services?.services || []
                      };
                      startEditing('services', servicesData);
                    }}
                    className="text-xs bg-green-100 text-green-700 hover:bg-green-200 px-3 py-1 rounded-lg font-medium"
                  >
                    Edit Services
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {websiteContent.services?.services?.map((service, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-lg">
                          <i className={`${service.icon} text-green-600 text-lg`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-bold text-gray-900 text-sm mb-1">{service.title}</p>
                          <p className="text-xs text-gray-600 line-clamp-2 mb-2">{service.description}</p>
                          <div className="flex items-center text-xs text-gray-500">
                            <span className="bg-blue-50 text-blue-700 px-2 py-1 rounded mr-2">
                              {service.features?.length || 0} features
                            </span>
                            <span className="bg-purple-50 text-purple-700 px-2 py-1 rounded">
                              {service.highlights?.length || 0} highlights
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {(!websiteContent.services?.services || websiteContent.services.services.length === 0) && (
                  <div className="text-center py-8 text-gray-500">
                    <p>No services added yet.</p>
                    <button
                      onClick={() => {
                        const servicesData = {
                          sectionSubtitle: websiteContent.services?.sectionSubtitle || "Our Services",
                          sectionTitle: websiteContent.services?.sectionTitle || "Services Built Specifically",
                          sectionTitleHighlight: websiteContent.services?.sectionTitleHighlight || "For Your Business",
                          sectionDescription: websiteContent.services?.sectionDescription || "Comprehensive digital solutions that drive growth and deliver exceptional results",
                          services: []
                        };
                        startEditing('services', servicesData);
                      }}
                      className="mt-2 text-green-600 hover:text-green-700 font-medium"
                    >
                      Add services now →
                    </button>
                  </div>
                )}
              </div>

            </div>

          )}
        </div>
      )}
    </div>
  );
};

export default ServicesSectionAdmin;