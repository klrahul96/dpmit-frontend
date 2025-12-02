import React, { useState, useEffect } from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const AboutSectionAdmin = () => {
  const [websiteContent, setWebsiteContent] = useState({
    about: {
      subtitle: 'About Us',
      title: 'DPM IT Solutions - Defining Real Success for Your Business',
      paragraphs: [
        'We are a web development company creating digital solutions that drive real success for your business. Our expertise spans across multiple digital domains to ensure your business thrives in the digital landscape. We specialize in innovative technology solutions.',
        'DPM IT Solutions stands for Dynamic Process Management - your trusted partner in digital transformation. We provide Website Design, SEO, GMB management, Social Media Marketing, and App Development solutions. Our comprehensive services ensure complete digital presence.',
        'Our team focuses on delivering innovative, user-friendly websites and digital marketing strategies that enhance your online presence and help your business reach its target audience effectively. We create scalable solutions for sustainable growth.'
      ],
      image1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      buttonText: 'More Details'
    }
  });

  const [editingSection, setEditingSection] = useState(null);
  const [tempData, setTempData] = useState({});
  const [expandedSections, setExpandedSections] = useState({ about: true });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Fetch content on mount
  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/content/about');
      const result = await response.json();

      if (result.success && result.data) {
        setWebsiteContent({
          about: {
            subtitle: result.data.subtitle || 'About Us',
            title: result.data.title || 'DPM IT Solutions - Defining Real Success for Your Business',
            paragraphs: result.data.paragraphs || [
                'We are a web development company creating digital solutions that drive real success for your business. Our expertise spans across multiple digital domains to ensure your business thrives in the digital landscape. We specialize in innovative technology solutions.',
        'DPM IT Solutions stands for Dynamic Process Management - your trusted partner in digital transformation. We provide Website Design, SEO, GMB management, Social Media Marketing, and App Development solutions. Our comprehensive services ensure complete digital presence.',
        'Our team focuses on delivering innovative, user-friendly websites and digital marketing strategies that enhance your online presence and help your business reach its target audience effectively. We create scalable solutions for sustainable growth.'
            ],
            image1: result.data.image1 || 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
            image2: result.data.image2 || 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
            buttonText: result.data.buttonText || 'More Details'
          }
        });
      }
    } catch (error) {
      console.error('Error fetching content:', error);
      setMessage('Error loading content');
    } finally {
      setLoading(false);
    }
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const startEditing = (section, data) => {
    setEditingSection(section);
    setTempData(JSON.parse(JSON.stringify(data)));
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
  };

  const saveChanges = async (section) => {
    try {
      setLoading(true);
      const token = localStorage.getItem('adminToken');

      const response = await fetch(`http://localhost:5000/api/content/${section}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(tempData)
      });

      const result = await response.json();

      if (result.success) {
        setWebsiteContent(prev => ({
          ...prev,
          [section]: tempData
        }));
        setEditingSection(null);
        setMessage('Changes saved successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage(result.message || 'Error saving changes');
      }
    } catch (error) {
      console.error('Error saving content:', error);
      setMessage('Error saving changes');
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = async (e, fieldName) => {
    try {
      const file = e.target.files?.[0];
      if (!file) return;

      const formData = new FormData();
      formData.append('file', file);

      setLoading(true);
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setTempData(prev => ({
          ...prev,
          [fieldName]: result.url
        }));
        setMessage('Image uploaded successfully!');
        setTimeout(() => setMessage(''), 3000);
      } else {
        setMessage('Error uploading image');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      setMessage('Error uploading image');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
      

        {/* Message Alert */}
        {message && (
          <div className={`mb-6 p-4 rounded-lg ${message.includes('success') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {message}
          </div>
        )}

        {/* About Section */}
        <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          <div
            className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-purple-600"
            onClick={() => toggleSection('about')}
          >
            <div className="flex items-center gap-3">
              {expandedSections.about ? (
                <ChevronUp className="h-5 w-5 text-purple-600" />
              ) : (
                <ChevronDown className="h-5 w-5 text-purple-600" />
              )}
              <div>
                <h2 className="text-xl font-bold text-gray-900">ℹ️ About Section</h2>
                <p className="text-sm text-gray-500">Company information</p>
              </div>
            </div>
            {editingSection !== 'about' && expandedSections.about && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startEditing('about', websiteContent.about);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition shadow-md hover:shadow-lg"
              >
                <Edit className="h-4 w-4" />
                Edit Section
              </button>
            )}
          </div>

          {expandedSections.about && (
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              {editingSection === 'about' ? (
                <div className="space-y-5">
                  {/* Subtitle */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                    <input
                      type="text"
                      value={tempData.subtitle || ''}
                      onChange={(e) => setTempData({ ...tempData, subtitle: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="Enter subtitle"
                    />
                  </div>

                  {/* Title */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Main Title</label>
                    <input
                      type="text"
                      value={tempData.title || ''}
                      onChange={(e) => setTempData({ ...tempData, title: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="Enter main title"
                    />
                  </div>

                  {/* Paragraphs */}
                  <div className="space-y-3">
                    <label className="block text-sm font-semibold text-gray-700">Content Paragraphs</label>
                    {tempData.paragraphs && tempData.paragraphs.length > 0 ? (
                      tempData.paragraphs.map((para, idx) => (
                        <div key={idx} className="relative">
                          <div className="flex items-center justify-between mb-1">
                            <label className="block text-xs text-gray-600">Paragraph {idx + 1}</label>
                            {tempData.paragraphs.length > 1 && (
                              <button
                                onClick={() => {
                                  const newParagraphs = tempData.paragraphs.filter((_, i) => i !== idx);
                                  setTempData({ ...tempData, paragraphs: newParagraphs });
                                }}
                                className="text-red-600 hover:text-red-700 text-xs flex items-center gap-1"
                              >
                                <Trash2 className="h-3 w-3" />
                                Remove
                              </button>
                            )}
                          </div>
                          <textarea
                            value={para}
                            onChange={(e) => {
                              const newParagraphs = [...tempData.paragraphs];
                              newParagraphs[idx] = e.target.value;
                              setTempData({ ...tempData, paragraphs: newParagraphs });
                            }}
                            rows={4}
                            className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                            placeholder={`Enter paragraph ${idx + 1} content`}
                          />
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-gray-500">No paragraphs yet. Add one below.</p>
                    )}
                    <button
                      onClick={() => {
                        const newParagraphs = [...(tempData.paragraphs || []), ""];
                        setTempData({ ...tempData, paragraphs: newParagraphs });
                      }}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition text-sm font-medium"
                    >
                      <Plus className="h-4 w-4" />
                      Add Paragraph
                    </button>
                  </div>

                  {/* Button Text */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Button Text</label>
                    <input
                      type="text"
                      value={tempData.buttonText || ''}
                      onChange={(e) => setTempData({ ...tempData, buttonText: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                      placeholder="Enter button text"
                    />
                  </div>

                  {/* Images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image 1 */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">About Image 1</label>
                      <input
                        type="text"
                        value={tempData.image1 || ''}
                        onChange={(e) => setTempData({ ...tempData, image1: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition mb-2"
                        placeholder="Image URL"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'image1')}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg cursor-pointer"
                      />
                      {tempData.image1 && (
                        <img
                          src={tempData.image1}
                          alt="Preview 1"
                          className="w-full h-48 object-cover rounded-lg mt-3"
                        />
                      )}
                    </div>

                    {/* Image 2 */}
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">About Image 2</label>
                      <input
                        type="text"
                        value={tempData.image2 || ''}
                        onChange={(e) => setTempData({ ...tempData, image2: e.target.value })}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition mb-2"
                        placeholder="Image URL"
                      />
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, 'image2')}
                        className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg cursor-pointer"
                      />
                      {tempData.image2 && (
                        <img
                          src={tempData.image2}
                          alt="Preview 2"
                          className="w-full h-48 object-cover rounded-lg mt-3"
                        />
                      )}
                    </div>
                  </div>

                  {/* Save & Cancel Buttons */}
                  <div className="flex gap-3 pt-4 border-t border-gray-300">
                    <button
                      onClick={() => saveChanges('about')}
                      disabled={loading}
                      className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition disabled:opacity-50"
                    >
                      <Save className="h-4 w-4" />
                      {loading ? 'Saving...' : 'Save Changes'}
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
                  {/* Subtitle Display */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Subtitle</p>
                    <p className="text-blue-600 font-semibold text-lg">{websiteContent.about.subtitle}</p>
                  </div>

                  {/* Title Display */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Main Title</p>
                    <p className="text-lg font-bold text-gray-900">{websiteContent.about.title}</p>
                  </div>

                  {/* Paragraphs Display */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-2">Content</p>
                    <p className="text-sm text-gray-600 mb-3">
                      {websiteContent.about.paragraphs ? websiteContent.about.paragraphs.length : 0} paragraphs
                    </p>
                    {websiteContent.about.paragraphs && websiteContent.about.paragraphs.length > 0 ? (
                      <div className="space-y-2 max-h-32 overflow-y-auto">
                        {websiteContent.about.paragraphs.map((para, idx) => (
                          <p key={idx} className="text-xs text-gray-600 line-clamp-2">
                            <span className="font-semibold">P{idx + 1}:</span> {para}
                          </p>
                        ))}
                      </div>
                    ) : (
                      <p className="text-xs text-gray-400">No paragraphs added yet</p>
                    )}
                  </div>

                  {/* Button Text Display */}
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Button Text</p>
                    <p className="text-sm font-semibold text-gray-900">{websiteContent.about.buttonText}</p>
                  </div>

                  {/* Images Display */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 font-medium uppercase mb-2">Image 1</p>
                      {websiteContent.about.image1 ? (
                        <img src={websiteContent.about.image1} alt="About 1" className="w-full h-24 object-cover rounded" />
                      ) : (
                        <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <p className="text-xs text-gray-500 font-medium uppercase mb-2">Image 2</p>
                      {websiteContent.about.image2 ? (
                        <img src={websiteContent.about.image2} alt="About 2" className="w-full h-24 object-cover rounded" />
                      ) : (
                        <div className="w-full h-24 bg-gray-200 rounded flex items-center justify-center text-gray-400">No image</div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSectionAdmin;