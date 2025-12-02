import React, { useState, useEffect } from 'react';
import { Edit, Save, X, ChevronUp, ChevronDown, Upload, Loader, Plus, Trash2 } from 'lucide-react';

const API_BASE_URL = "http://localhost:5000";

const ImageUploadField = ({ 
  label, 
  value, 
  onChange, 
  onUpload, 
  fieldPath,
  previewClass,
  isLoading 
}) => (
  <div>
    <label className="block text-sm font-semibold text-gray-700 mb-2">{label}</label>
    <div className="space-y-3">
      <input
        type="text"
        value={value || ''}
        onChange={onChange}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
        placeholder="Enter image URL or upload"
      />
      <div className="flex items-center gap-3">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => onUpload(e, fieldPath)}
          disabled={isLoading}
          className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 disabled:opacity-50"
        />
        {isLoading ? (
          <Loader className="h-5 w-5 text-blue-400 animate-spin" />
        ) : (
          <Upload className="h-5 w-5 text-gray-400" />
        )}
      </div>
      {value && (
        <img 
          src={value} 
          alt="Preview" 
          className={previewClass}
        />
      )}
    </div>
  </div>
);

const SectionComponent = ({
  title,
  icon,
  sectionKey,
  children,
  expandedSections,
  toggleSection,
  onEdit,
  isEditing,
  isLoading
}) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
    <div 
      className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-blue-600"
      onClick={() => toggleSection(sectionKey)}
    >
      <div className="flex items-center gap-3">
        {expandedSections[sectionKey] ? <ChevronUp className="h-5 w-5 text-blue-600" /> : <ChevronDown className="h-5 w-5 text-blue-600" />}
        <div>
          <h2 className="text-xl font-bold text-gray-900">{icon} {title}</h2>
        </div>
      </div>
      {!isEditing && expandedSections[sectionKey] && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          disabled={isLoading}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-md hover:shadow-lg disabled:opacity-50"
        >
          <Edit className="h-4 w-4" />
          Edit
        </button>
      )}
    </div>

    {expandedSections[sectionKey] && (
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        {children}
      </div>
    )}
  </div>
);

export default function AdminPanel() {
  const [websiteContent, setWebsiteContent] = useState({
    hero: {
      slides: [
        {
          image: "/assets/bg1.jpg",
          subtitle: "Digital Excellence",
          title: "Transform Your Business Digital Journey",
          description: "Empowering businesses with cutting-edge technology solutions and innovative digital strategies."
        },
        {
          image: "/assets/bg2.jpg",
          subtitle: "Tech Innovation",
          title: "Smart Solutions for Modern Challenges",
          description: "Expert technology consulting and development services tailored to your business needs."
        }
      ]
    },
  });

  const [editingSection, setEditingSection] = useState(null);
  const [tempData, setTempData] = useState({});
  const [expandedSections, setExpandedSections] = useState({ 
    hero: true,
    about: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchHeroContent = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/content/hero`);
        const result = await res.json();

        if (result.success && result.data && result.data.slides) {
          setWebsiteContent(prev => ({
            ...prev,
            hero: result.data
          }));
        }
      } catch (err) {
        console.error("Error fetching hero content:", err);
      }
    };

    fetchHeroContent();
  }, []);

  const handleImageUpload = async (event, fieldPath) => {
    const file = event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select an image file');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size should be less than 5MB');
      return;
    }

    setIsLoading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData(prev => ({
          ...prev,
          [fieldPath]: reader.result
        }));
        setMessage('Image uploaded successfully!');
        setTimeout(() => setMessage(''), 3000);
        setIsLoading(false);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image');
      setIsLoading(false);
    }
  };

  const startEditing = (section, data) => {
    setEditingSection(section);
    setTempData(JSON.parse(JSON.stringify(data)));
  };

  const saveChanges = async (section) => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_BASE_URL}/api/content/${section}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        // 🔥 FIX: Send only slides, not entire tempData
        body: JSON.stringify({ slides: tempData.slides })
      });

      const result = await response.json();

      if (result.success) {
        setWebsiteContent(prev => ({
          ...prev,
          [section]: { slides: tempData.slides }
        }));
        setEditingSection(null);
        setTempData({});
        setMessage(`✔ ${section.toUpperCase()} updated successfully!`);
        setTimeout(() => setMessage(""), 3000);
      }
    } catch (err) {
      alert("Error saving to server");
    } finally {
      setIsLoading(false);
    }
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const addSlide = () => {
    const newSlide = {
      image: "",
      subtitle: "",
      title: "",
      description: ""
    };
    setTempData(prev => ({
      ...prev,
      slides: [...(prev.slides || []), newSlide]
    }));
  };

  const removeSlide = (index) => {
    setTempData(prev => ({
      ...prev,
      slides: prev.slides.filter((_, i) => i !== index)
    }));
  };

  const updateSlide = (index, field, value) => {
    setTempData(prev => ({
      ...prev,
      slides: prev.slides.map((slide, i) => 
        i === index ? { ...slide, [field]: value } : slide
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">🎯 Website Admin Panel</h1>
              <p className="text-blue-100 text-lg">DPM IT Solutions - Content Manager</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
              <p className="text-sm font-medium">Admin Panel v4.0</p>
              <p className="text-xs opacity-80">✅ Full Control</p>
            </div>
          </div>
        </div>

        {/* Message Display */}
        {message && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            {message}
          </div>
        )}

        {/* Sections */}
        <div className="space-y-6">
          {/* HERO SECTION */}
          <SectionComponent
            title="Hero Section"
            icon="🎯"
            sectionKey="hero"
            expandedSections={expandedSections}
            toggleSection={toggleSection}
            onEdit={() => startEditing('hero', websiteContent.hero)}
            isEditing={editingSection === 'hero'}
            isLoading={isLoading}
          >
            {editingSection === 'hero' ? (
              <div className="space-y-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900">Manage Slides</h3>
                  <button
                    onClick={addSlide}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                  >
                    <Plus className="h-4 w-4" />
                    Add Slide
                  </button>
                </div>

                {tempData.slides?.map((slide, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border-2 border-gray-200 relative">
                    <button
                      onClick={() => removeSlide(index)}
                      className="absolute top-3 right-3 text-red-500 hover:bg-red-50 p-2 rounded-lg transition"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>

                    <h4 className="font-bold text-gray-800 mb-4">Slide {index + 1}</h4>

                    <div className="space-y-4">
                      <ImageUploadField
                        label="Slide Image"
                        value={slide.image}
                        onChange={(e) => updateSlide(index, 'image', e.target.value)}
                        onUpload={(e) => {
                          const file = e.target.files[0];
                          if (file) {
                            const reader = new FileReader();
                            reader.onloadend = () => {
                              updateSlide(index, 'image', reader.result);
                            };
                            reader.readAsDataURL(file);
                          }
                        }}
                        fieldPath={`slide-image-${index}`}
                        previewClass="w-full h-40 object-cover rounded-lg"
                        isLoading={isLoading}
                      />

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Subtitle</label>
                        <input
                          type="text"
                          value={slide.subtitle}
                          onChange={(e) => updateSlide(index, 'subtitle', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50"
                          placeholder="Enter subtitle"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Title</label>
                        <input
                          type="text"
                          value={slide.title}
                          onChange={(e) => updateSlide(index, 'title', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50"
                          placeholder="Enter title"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                        <textarea
                          value={slide.description}
                          onChange={(e) => updateSlide(index, 'description', e.target.value)}
                          disabled={isLoading}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition disabled:opacity-50"
                          rows="3"
                          placeholder="Enter description"
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="flex gap-3 pt-4 border-t border-gray-300">
                  <button
                    onClick={() => saveChanges('hero')}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50"
                  >
                    {isLoading ? <Loader className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </button>
                  <button
                    onClick={cancelEditing}
                    disabled={isLoading}
                    className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold shadow-md transition disabled:opacity-50"
                  >
                    <X className="h-4 w-4" />
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <p className="text-sm text-gray-600 mb-4">Total Slides: <span className="font-bold text-blue-600">{websiteContent.hero.slides?.length || 0}</span></p>
                {websiteContent.hero.slides?.map((slide, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-bold text-gray-800 mb-2">Slide {index + 1}</h4>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase mb-1">Subtitle</p>
                        <p className="text-gray-700">{slide.subtitle}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 font-medium uppercase mb-1">Title</p>
                        <p className="text-gray-700 font-semibold">{slide.title}</p>
                      </div>
                    </div>
                    {slide.image && (
                      <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-24 object-cover rounded-lg mt-3 border" />
                    )}
                  </div>
                ))}
              </div>
            )}
          </SectionComponent>

        </div>
      </div>
    </div>
  );
}