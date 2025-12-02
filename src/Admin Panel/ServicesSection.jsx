import React, { useState } from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';
import WebsiteDevelopmentAdmin from './WebsiteDevelopmentAdmin';
import SEOAdmin from './SEOAdmin';
import AppDevelopmentAdmin from './AppDevelopmentAdmin';
import DigitalMarketingAdmin from './DigitalMarketingAdmin';
import GoogleMyBusinessAdmin from './GoogleMyBusinessAdmin';
import SocialMediaMarketingAdmin from './SocialMediaMarketingAdmin';

export default function ServicesSection() {
  const [expandedService, setExpandedService] = useState(null);
  const [showWebsiteDevAdmin, setShowWebsiteDevAdmin] = useState(false);
  const [showSEOAdmin, setShowSEOAdmin] = useState(false);
  const [showAppDevAdmin, setShowAppDevAdmin] = useState(false);
  const [showDigitalMarketingAdmin, setShowDigitalMarketingAdmin] = useState(false);
  const [showGoogleMyBusinessAdmin, setShowGoogleMyBusinessAdmin] = useState(false);
  const [showSocialMediaMarketingAdmin, setShowSocialMediaMarketingAdmin] = useState(false);
  
  const [services, setServices] = useState([
    {
      id: 'website-dev',
      name: 'Website Development',
      description: 'Professional website development services',
      bgGradient: 'from-blue-500 to-blue-600',
      subcategories: []
    },
    {
      id: 'seo',
      name: 'SEO',
      description: 'Search Engine Optimization',
      bgGradient: 'from-green-500 to-green-600',
      subcategories: []
    },
    {
      id: 'app-development',
      name: 'App Development',
      description: 'Mobile App Development',
      bgGradient: 'from-indigo-500 to-indigo-600',
      subcategories: []
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing',
      description: 'Digital Marketing Solutions',
      bgGradient: 'from-purple-500 to-purple-600',
      subcategories: []
    },
    {
      id: 'google-my-business',
      name: 'Google My Business',
      description: 'Google Business Profile Management',
      bgGradient: 'from-red-500 to-red-600',
      subcategories: []
    },
    {
      id: 'social-media-marketing',
      name: 'Social Media Marketing',
      description: 'Social Media Marketing Solutions',
      bgGradient: 'from-pink-500 to-pink-600',
      subcategories: []
    }
  ]);

  const toggleService = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  const addSubcategory = (serviceId) => {
    const newSubcat = prompt('Enter new subcategory name:');
    if (newSubcat && newSubcat.trim()) {
      setServices(services.map(service =>
        service.id === serviceId
          ? { ...service, subcategories: [...(service.subcategories || []), newSubcat.trim()] }
          : service
      ));
    }
  };

  const deleteSubcategory = (serviceId, index) => {
    setServices(services.map(service =>
      service.id === serviceId
        ? { ...service, subcategories: (service.subcategories || []).filter((_, i) => i !== index) }
        : service
    ));
  };

  if (showWebsiteDevAdmin) {
    return <WebsiteDevelopmentAdmin onClose={() => setShowWebsiteDevAdmin(false)} />;
  }

  if (showSEOAdmin) {
    return <SEOAdmin onClose={() => setShowSEOAdmin(false)} />;
  }

  if (showAppDevAdmin) {
    return <AppDevelopmentAdmin onClose={() => setShowAppDevAdmin(false)} />;
  }

  if (showDigitalMarketingAdmin) {
    return <DigitalMarketingAdmin onClose={() => setShowDigitalMarketingAdmin(false)} />;
  }

  if (showGoogleMyBusinessAdmin) {
    return <GoogleMyBusinessAdmin onClose={() => setShowGoogleMyBusinessAdmin(false)} />;
  }

  if (showSocialMediaMarketingAdmin) {
    return <SocialMediaMarketingAdmin onClose={() => setShowSocialMediaMarketingAdmin(false)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">Our Services</h1>
          <p className="text-gray-400 text-base md:text-lg">Explore our professional solutions</p>
        </div>

        {/* Services Vertical Stack */}
        <div className="space-y-4 md:space-y-5">
          {services.map(service => (
            <div key={service.id} className="group">
              {/* Service Header with Gradient Background */}
              <div
                className={`bg-gradient-to-r ${service.bgGradient} rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 transform`}
              >
                <button
                  onClick={() => toggleService(service.id)}
                  className="w-full px-4 py-4 md:px-8 md:py-5 text-left"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-white">{service.name}</h3>
                      <p className="text-white text-opacity-90 mt-1 text-sm md:text-base">{service.description}</p>
                    </div>
                    <ChevronDown
                      className={`h-5 w-5 md:h-6 md:w-6 text-white transition-transform duration-300 flex-shrink-0 ml-2 md:ml-4 ${
                        expandedService === service.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </button>
              </div>

              {/* Subcategories */}
              {expandedService === service.id && (
                <div className="bg-gray-800 rounded-b-lg shadow-lg px-4 py-4 md:px-8 md:py-5 border-t-4 border-gray-700 animate-in fade-in duration-200">
                  
                  {/* Website Development Admin Button */}
                  {service.id === 'website-dev' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowWebsiteDevAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:to-blue-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit Website Development Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all website development content, services, technologies and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  {/* SEO Admin Button */}
                  {service.id === 'seo' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowSEOAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:to-green-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit SEO Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all SEO content, services, statistics and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  {/* App Development Admin Button */}
                  {service.id === 'app-development' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowAppDevAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:to-indigo-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit App Development Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all app development content, services, technologies and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  {/* Digital Marketing Admin Button */}
                  {service.id === 'digital-marketing' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowDigitalMarketingAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:to-purple-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit Digital Marketing Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all digital marketing content, services, benefits and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  {/* Google My Business Admin Button */}
                  {service.id === 'google-my-business' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowGoogleMyBusinessAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:to-red-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit Google My Business Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all Google My Business content, services and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  {/* Social Media Marketing Admin Button */}
                  {service.id === 'social-media-marketing' && (
                    <div className="mb-4 md:mb-6">
                      <button
                        onClick={() => setShowSocialMediaMarketingAdmin(true)}
                        className="w-full px-4 py-3 bg-gradient-to-r from-pink-600 to-pink-700 hover:to-pink-800 text-white rounded-lg font-bold transition-all shadow-lg flex items-center justify-center gap-2 mb-3 text-sm md:text-base"
                      >
                        📋 Edit Social Media Marketing Content
                      </button>
                      <p className="text-gray-400 text-xs md:text-sm text-center">Click above to manage all social media marketing content, services and images</p>
                      <hr className="my-3 md:my-4 border-gray-700" />
                    </div>
                  )}

                  <div className="space-y-2 md:space-y-3 mb-3 md:mb-4">
                    {(service.subcategories || []).map((subcategory, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 md:p-3 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors group/item"
                      >
                        <span className="text-white font-medium text-sm md:text-base">{subcategory}</span>
                        <button
                          onClick={() => deleteSubcategory(service.id, index)}
                          className="opacity-0 group-hover/item:opacity-100 transition-opacity p-1 text-gray-300 hover:text-red-400"
                        >
                          <Trash2 className="h-3 w-3 md:h-4 md:w-4" />
                        </button>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => addSubcategory(service.id)}
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors text-sm md:text-base"
                  >
                    <Plus className="h-3 w-3 md:h-4 md:w-4" />
                    Add Subcategory
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}