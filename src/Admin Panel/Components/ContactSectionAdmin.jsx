import React from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const ContactSectionAdmin = ({ 
  websiteContent, 
  editingSection, 
  tempData, 
  setTempData, 
  expandedSections, 
  toggleSection, 
  startEditing, 
  saveChanges, 
  cancelEditing
}) => {
  // ⭐ FIX: Ensure section stays expanded when editing
  const isContactExpanded = expandedSections.contact || editingSection === 'contact';

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div 
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-teal-600"
        onClick={() => toggleSection('contact')}
      >
        <div className="flex items-center gap-3">
          {isContactExpanded ? <ChevronUp className="h-5 w-5 text-teal-600" /> : <ChevronDown className="h-5 w-5 text-teal-600" />}
          <div>
            <h2 className="text-xl font-bold text-gray-900">📞 Contact Section</h2>
            <p className="text-sm text-gray-500">Contact form and information</p>
          </div>
        </div>
        {editingSection !== 'contact' && isContactExpanded && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              startEditing('contact', websiteContent.contact);
            }}
            className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition shadow-md hover:shadow-lg"
          >
            <Edit className="h-4 w-4" />
            Edit Section
          </button>
        )}
      </div>

      {isContactExpanded && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          {editingSection === 'contact' ? (
            <div className="space-y-8">
              {/* Section Header Fields */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Section Header</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                    <input
                      type="text"
                      value={tempData.sectionSubtitle || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
                      placeholder="e.g., Get In Touch"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                    <input
                      type="text"
                      value={tempData.sectionTitle || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
                      placeholder="e.g., Contact for any query"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Section Description</label>
                    <textarea
                      value={tempData.sectionDescription || ''}
                      onChange={(e) => setTempData({ ...tempData, sectionDescription: e.target.value })}
                      placeholder="Description text..."
                      rows={3}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Form Fields */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Form Details</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Form Title</label>
                    <input
                      type="text"
                      value={tempData.formTitle || ''}
                      onChange={(e) => setTempData({ ...tempData, formTitle: e.target.value })}
                      placeholder="e.g., Send us a Message"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Form Description</label>
                    <textarea
                      value={tempData.formDescription || ''}
                      onChange={(e) => setTempData({ ...tempData, formDescription: e.target.value })}
                      placeholder="e.g., Fill out the form below..."
                      rows={2}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Web3Forms Access Key</label>
                    <input
                      type="text"
                      value={tempData.web3formsAccessKey || ''}
                      onChange={(e) => setTempData({ ...tempData, web3formsAccessKey: e.target.value })}
                      placeholder="Your Web3Forms API Key"
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none font-mono text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Google Maps</h3>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Google Maps Embed URL</label>
                  <textarea
                    value={tempData.mapEmbed || ''}
                    onChange={(e) => setTempData({ ...tempData, mapEmbed: e.target.value })}
                    placeholder="Paste your Google Maps embed URL here"
                    rows={3}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none resize-none text-xs"
                  />
                  <p className="text-xs text-gray-500 mt-2">Get embed code from Google Maps → Share → Embed Map</p>
                </div>
              </div>

              {/* Contact Information Section */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-gray-900">Contact Information Cards</h3>
                  <button
                    onClick={() => {
                      const newContactInfo = [...(tempData.contactInfo || []), {
                        icon: "fas fa-map-marker-alt",
                        title: "New Contact",
                        content: "Contact details",
                        link: "#"
                      }];
                      setTempData({ ...tempData, contactInfo: newContactInfo });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 shadow-md text-sm"
                  >
                    <Plus className="h-4 w-4" />
                    Add Card
                  </button>
                </div>

                <div className="space-y-5">
                  {(tempData.contactInfo || []).map((contact, idx) => (
                    <div key={idx} className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-lg border-2 border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900">Card {idx + 1}: {contact.title}</h4>
                        <button
                          onClick={() => {
                            const newContactInfo = (tempData.contactInfo || []).filter((_, i) => i !== idx);
                            setTempData({ ...tempData, contactInfo: newContactInfo });
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Icon Class (Font Awesome)</label>
                          <div className="flex gap-2">
                            <input
                              type="text"
                              placeholder="e.g., fas fa-map-marker-alt"
                              value={contact.icon}
                              onChange={(e) => {
                                const newContactInfo = [...(tempData.contactInfo || [])];
                                newContactInfo[idx].icon = e.target.value;
                                setTempData({ ...tempData, contactInfo: newContactInfo });
                              }}
                              className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                            />
                            <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                              <i className={`${contact.icon} text-teal-600`}></i>
                            </div>
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                          <input
                            type="text"
                            placeholder="e.g., Address"
                            value={contact.title}
                            onChange={(e) => {
                              const newContactInfo = [...(tempData.contactInfo || [])];
                              newContactInfo[idx].title = e.target.value;
                              setTempData({ ...tempData, contactInfo: newContactInfo });
                            }}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Content/Details</label>
                          <input
                            type="text"
                            placeholder="e.g., Tilak Nagar, New Delhi - 110018"
                            value={contact.content}
                            onChange={(e) => {
                              const newContactInfo = [...(tempData.contactInfo || [])];
                              newContactInfo[idx].content = e.target.value;
                              setTempData({ ...tempData, contactInfo: newContactInfo });
                            }}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Link URL</label>
                          <input
                            type="text"
                            placeholder="e.g., tel:+919650413450"
                            value={contact.link}
                            onChange={(e) => {
                              const newContactInfo = [...(tempData.contactInfo || [])];
                              newContactInfo[idx].link = e.target.value;
                              setTempData({ ...tempData, contactInfo: newContactInfo });
                            }}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none font-mono text-xs"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4 border-t border-gray-300">
                <button
                  onClick={() => saveChanges('contact')}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition"
                >
                  <Save className="h-4 w-4" />
                  Save All Changes
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
            // Preview Mode
            <div className="space-y-6">
              {/* Header Preview */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200">
                <p className="text-blue-600 text-sm font-semibold uppercase mb-2">{websiteContent.contact?.sectionSubtitle}</p>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{websiteContent.contact?.sectionTitle}</h2>
                <p className="text-gray-600 text-sm">{websiteContent.contact?.sectionDescription}</p>
              </div>

              {/* Contact Cards Preview */}
              <div>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Contact Information Cards ({websiteContent.contact?.contactInfo?.length || 0})</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(websiteContent.contact?.contactInfo || []).map((contact, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-lg transition">
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
                          <i className={`${contact.icon} text-lg`}></i>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-blue-600 font-semibold text-sm">{contact.title}</h4>
                          <p className="text-gray-800 text-xs break-all">{contact.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Preview */}
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">{websiteContent.contact?.formTitle}</h4>
                <p className="text-gray-600 text-sm">{websiteContent.contact?.formDescription}</p>
              </div>

              {/* Settings */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-medium uppercase mb-2">Web3Forms Key</p>
                  <p className="text-sm font-mono text-gray-900 truncate">{websiteContent.contact?.web3formsAccessKey}</p>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-medium uppercase mb-2">Map Status</p>
                  <p className="text-sm text-green-600 font-semibold">✓ Configured</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactSectionAdmin;