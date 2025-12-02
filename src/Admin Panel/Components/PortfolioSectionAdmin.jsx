import React from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown, Upload } from 'lucide-react';

const PortfolioSectionAdmin = ({ 
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
  // Default portfolio data with all 13 images and 13 logos
  const defaultPortfolioImages = [
    "/assets/web12.png",
    "/assets/web1.png",
    "/assets/web5.png",
    "/assets/web2.png",
    "/assets/web9.png",
    "/assets/web10.jpg",
    "/assets/web11.png",
    "/assets/web13.png",
    "/assets/web14.png",
    "/assets/web15.png.jpeg",
    "/assets/web16.png",
    "/assets/web17.png",
    "/assets/web18.png",
  ];

  const defaultPortfolioLogos = [
    { src: "/assets/1.png", width: 80, height: 80 },
    { src: "/assets/2.png", width: 95, height: 95 },
    { src: "/assets/3.png", width: 70, height: 70 },
    { src: "/assets/4.png", width: 180, height: 180 },
    { src: "/assets/5.png", width: 125, height: 125 },
    { src: "/assets/6.png", width: 80, height: 80 },
    { src: "/assets/7.png", width: 125, height: 125 },
    { src: "/assets/9.png", width: 105, height: 105 },
    { src: "/assets/10.png", width: 150, height: 150 },
    { src: "/assets/11.png", width: 85, height: 85 },
    { src: "/assets/12.png.jpeg", width: 70, height: 70 },
    { src: "/assets/13.png", width: 190, height: 190 },
    { src: "/assets/14.png", width: 80, height: 80 },
  ];

  // Get portfolio data - prioritize websiteContent, fallback to defaults
  const getPortfolioData = () => {
    if (websiteContent?.portfolio?.images && websiteContent.portfolio.images.length > 0) {
      return {
        images: websiteContent.portfolio.images,
        logos: websiteContent.portfolio.logos || defaultPortfolioLogos,
        sectionSubtitle: websiteContent.portfolio.sectionSubtitle || "Our Work",
        sectionTitle: websiteContent.portfolio.sectionTitle || "Creative Portfolio",
        sectionDescription: websiteContent.portfolio.sectionDescription || "Showcasing our expertise in website design, SEO optimization, and digital marketing solutions that boost your online presence and drive results."
      };
    }
    return {
      images: defaultPortfolioImages,
      logos: defaultPortfolioLogos,
      sectionSubtitle: "Our Work",
      sectionTitle: "Creative Portfolio",
      sectionDescription: "Showcasing our expertise in website design, SEO optimization, and digital marketing solutions that boost your online presence and drive results."
    };
  };

  const portfolioData = getPortfolioData();

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div 
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-orange-600"
        onClick={() => toggleSection('portfolio')}
      >
        <div className="flex items-center gap-3">
          {expandedSections.portfolio ? <ChevronUp className="h-5 w-5 text-orange-600" /> : <ChevronDown className="h-5 w-5 text-orange-600" />}
          <div>
            <h2 className="text-xl font-bold text-gray-900">🎨 Portfolio Section</h2>
            <p className="text-sm text-gray-500">{portfolioData.images.length} portfolio items</p>
          </div>
        </div>
        {editingSection !== 'portfolio' && expandedSections.portfolio && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              startEditing('portfolio', portfolioData);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition shadow-md hover:shadow-lg"
          >
            <Edit className="h-4 w-4" />
            Edit Section
          </button>
        )}
      </div>

      {expandedSections.portfolio && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          {editingSection === 'portfolio' ? (
            <div className="space-y-5">
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                    <input
                      type="text"
                      value={tempData.sectionSubtitle || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Our Work"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                    <input
                      type="text"
                      value={tempData.sectionTitle || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Creative Portfolio"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                    <textarea
                      value={tempData.sectionDescription || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionDescription: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                      placeholder="Showcasing our expertise..."
                    />
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">Portfolio Images ({tempData.images?.length || 0})</h3>
                  <button
                    onClick={() => {
                      const newImages = [...(tempData.images || []), "/assets/new-image.png"];
                      setTempData({ ...tempData, images: newImages });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    Add Image
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[900px] overflow-y-auto pr-2">
                  {tempData.images?.map((img, idx) => (
                    <div key={idx} className="bg-white p-4 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-900">Image {idx + 1}</h4>
                        <button
                          onClick={() => {
                            const newImages = tempData.images.filter((_, i) => i !== idx);
                            setTempData({ ...tempData, images: newImages });
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">Image URL or Upload</label>
                        
                        {/* INPUT + UPLOAD BUTTON */}
                        <div className="flex gap-2 items-end">
                          <input
                            type="text"
                            value={img}
                            onChange={(e) => {
                              const newImages = [...tempData.images];
                              newImages[idx] = e.target.value;
                              setTempData({ ...tempData, images: newImages });
                            }}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                            placeholder="/assets/web1.png"
                          />
                          
                          {/* 🔵 UPLOAD BUTTON */}
                          <label className="cursor-pointer">
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) => handleImageUpload(e, 'images', idx)}
                              className="hidden"
                            />
                            <div className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm whitespace-nowrap flex items-center gap-2">
                              <Upload className="h-4 w-4" />
                              Upload
                            </div>
                          </label>
                        </div>



                        {/* 🖼️ IMAGE PREVIEW */}
                        {img && (
                          <div className="relative">
                            <img 
                              src={img} 
                              alt={`Preview ${idx}`} 
                              className="w-full h-32 object-cover rounded-lg border-2 border-gray-200" 
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">Portfolio Logos ({tempData.logos?.length || 0})</h3>
                  <button
                    onClick={() => {
                      const newLogos = [...(tempData.logos || []), { src: "/assets/logo.png", width: 80, height: 80 }];
                      setTempData({ ...tempData, logos: newLogos });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    Add Logo
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[900px] overflow-y-auto pr-2">
                  {tempData.logos?.map((logo, idx) => (
                    <div key={idx} className="bg-white p-4 border-2 border-gray-200 rounded-lg hover:border-orange-300 transition">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-bold text-gray-900">Logo {idx + 1}</h4>
                        <button
                          onClick={() => {
                            const newLogos = tempData.logos.filter((_, i) => i !== idx);
                            setTempData({ ...tempData, logos: newLogos });
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Logo Image URL or Upload</label>
                          
                          {/* INPUT + UPLOAD BUTTON */}
                          <div className="flex gap-2 items-end">
                            <input
                              type="text"
                              value={logo.src}
                              onChange={(e) => {
                                const newLogos = [...tempData.logos];
                                newLogos[idx].src = e.target.value;
                                setTempData({ ...tempData, logos: newLogos });
                              }}
                              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                              placeholder="/assets/1.png"
                            />
                            
                            {/* 🔵 UPLOAD BUTTON */}
                            <label className="cursor-pointer">
                              <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleImageUpload(e, 'logos', idx, 'src')}
                                className="hidden"
                              />
                              <div className="px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-semibold text-sm whitespace-nowrap flex items-center gap-2">
                                <Upload className="h-4 w-4" />
                                Upload
                              </div>
                            </label>
                          </div>

                          {/* 📤 DRAG & DROP ZONE FOR LOGO */}
                          <div
                            onDragOver={(e) => {
                              e.preventDefault();
                              e.currentTarget.classList.add('border-orange-500', 'bg-orange-50');
                            }}
                            onDragLeave={(e) => {
                              e.currentTarget.classList.remove('border-orange-500', 'bg-orange-50');
                            }}
                            onDrop={(e) => {
                              e.preventDefault();
                              e.currentTarget.classList.remove('border-orange-500', 'bg-orange-50');
                              const file = e.dataTransfer.files[0];
                              if (file) {
                                handleImageUpload({ target: { files: [file] } }, 'logos', idx, 'src');
                              }
                            }}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-3 text-center hover:border-orange-500 transition cursor-pointer mt-2"
                          >
                            <p className="text-xs text-gray-600">
                              <strong>Drag & drop</strong> logo here
                            </p>
                          </div>

                          {/* 🖼️ LOGO PREVIEW */}
                          {logo.src && (
                            <div className="relative mt-2">
                              <img 
                                src={logo.src} 
                                alt={`Logo preview ${idx}`} 
                                className="w-full h-24 object-contain rounded-lg bg-gray-50 p-2 border-2 border-gray-200" 
                                onError={(e) => {
                                  e.target.style.display = 'none';
                                }}
                              />
                            </div>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Width (px)</label>
                            <input
                              type="number"
                              placeholder="80"
                              value={logo.width || ''}
                              onChange={(e) => {
                                const newLogos = [...tempData.logos];
                                newLogos[idx].width = parseInt(e.target.value) || 80;
                                setTempData({ ...tempData, logos: newLogos });
                              }}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-medium text-gray-600 mb-1">Height (px)</label>
                            <input
                              type="number"
                              placeholder="80"
                              value={logo.height || ''}
                              onChange={(e) => {
                                const newLogos = [...tempData.logos];
                                newLogos[idx].height = parseInt(e.target.value) || 80;
                                setTempData({ ...tempData, logos: newLogos });
                              }}
                              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 pt-4 border-t border-gray-300">
                <button
                  onClick={() => saveChanges('portfolio')}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition"
                >
                  <Save className="h-4 w-4" />
                  Save Portfolio
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
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Info</p>
                <p className="text-sm text-gray-600 mb-1">
                  <strong>Subtitle:</strong> {portfolioData.sectionSubtitle}
                </p>
                <p className="text-lg font-bold text-gray-900">{portfolioData.sectionTitle}</p>
                <p className="text-sm text-gray-600 mt-1">{portfolioData.sectionDescription}</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-500 font-medium uppercase">Portfolio Images</p>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-bold">
                    {portfolioData.images.length} Items
                  </span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[400px] overflow-y-auto">
                  {portfolioData.images.map((img, idx) => (
                    <div key={idx} className="relative group">
                      <img 
                        src={img} 
                        alt={`Portfolio ${idx + 1}`} 
                        className="w-full h-16 object-cover rounded border border-gray-200" 
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded">
                        <span className="text-white text-xs font-bold">#{idx + 1}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-500 font-medium uppercase">Portfolio Logos</p>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold">
                    {portfolioData.logos.length} Logos
                  </span>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 max-h-[400px] overflow-y-auto">
                  {portfolioData.logos.map((logo, idx) => (
                    <div key={idx} className="relative group">
                      <div className="w-full h-16 flex items-center justify-center bg-gray-50 rounded border border-gray-200 p-1">
                        <img 
                          src={logo.src} 
                          alt={`Logo ${idx + 1}`} 
                          className="max-w-full max-h-full object-contain" 
                        />
                      </div>
                      <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center rounded">
                        <span className="text-white text-xs font-bold">#{idx + 1}</span>
                        <span className="text-white text-[10px]">{logo.width}×{logo.height}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PortfolioSectionAdmin;