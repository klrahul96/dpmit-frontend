import React, { useState, useEffect } from 'react';
import { Save, X, Edit2, Upload } from 'lucide-react';

export default function SettingsSection() {
  const [editingSection, setEditingSection] = useState(null);
  const [tempData, setTempData] = useState({});
  const [logoPreview, setLogoPreview] = useState('/assets/logo.png');

  const [settings, setSettings] = useState({
    branding: {
      logoUrl: '/assets/logo.png',
      companyName: 'DPM IT Solutions'
    },
    contact: {
      email: 'info@dpmitsolutions.com',
      phone: '+91 9650413450',
      address: 'Tilak Nagar, New Delhi - 110018',
      phone2: '+91 7067300346'
    },
    socialMedia: {
      facebook: 'https://www.facebook.com/dpmitsolution/',
      instagram: 'https://www.instagram.com/dpmitsolutions/?hl=en',
      linkedin: 'https://in.linkedin.com/company/dpm-it-solutions-pvt-ltd'
    },
    floatingButtons: {
      whatsappNumber: '+919650413450',
      callNumber: '+919650413450'
    }
  });

  useEffect(() => {
    fetch("http://localhost:5000/api/settings")
      .then(res => res.json())
      .then(data => {
        if(data) setSettings(data);
      })
      .catch(err => console.error("Error fetching settings:", err));
  }, []);

  const startEditing = (section, data) => {
    setEditingSection(section);
    setTempData(JSON.parse(JSON.stringify(data)));
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
    setLogoPreview(settings.branding.logoUrl);
  };

  const saveChanges = async (section) => {
    const updated = {
      ...settings,
      [section]: tempData,
    };

    setSettings(updated);
    setEditingSection(null);
    setTempData({});

    try {
      await fetch("http://localhost:5000/api/content/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updated)
      });
      alert("Settings Saved Successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Failed to save settings. Please try again.");
    }
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setLogoPreview(reader.result);
        setTempData(prev => ({
          ...prev,
          logoUrl: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 pb-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Manage your website branding, contact details, and social media links</p>
      </div>

      {/* Branding Settings */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-blue-600 p-2 rounded-lg">
              <Upload className="h-5 w-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Branding & Logo</h2>
              <p className="text-sm text-gray-600">Update your company logo and name</p>
            </div>
          </div>
          <button
            onClick={() => startEditing('branding', settings.branding)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>

        {editingSection === 'branding' ? (
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Logo</label>
              <div className="flex gap-4">
                <div className="flex-1">
                  <div className="border-2 border-dashed border-blue-300 rounded-lg p-4 bg-blue-50 text-center cursor-pointer hover:border-blue-500 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full"
                    />
                    <p className="text-sm text-gray-600 mt-2">Click to upload or drag and drop</p>
                  </div>
                </div>
                <div className="w-32 h-32 bg-white border-2 border-gray-200 rounded-lg p-3 flex items-center justify-center flex-shrink-0">
                  <img src={logoPreview} alt="Logo preview" className="max-w-full max-h-full object-contain" />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={tempData.companyName || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, companyName: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button
                onClick={cancelEditing}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={() => saveChanges('branding')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-lg p-2 flex items-center justify-center">
                <img src={settings.branding.logoUrl} alt="Logo" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <p className="text-sm text-gray-600">Company Name</p>
                <p className="text-lg font-semibold text-gray-900">{settings.branding.companyName}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Contact Information */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-green-50 to-green-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-green-600 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Contact Information</h2>
              <p className="text-sm text-gray-600">Update email, phone, and address</p>
            </div>
          </div>
          <button
            onClick={() => startEditing('contact', settings.contact)}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>

        {editingSection === 'contact' ? (
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                value={tempData.email || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Primary Phone</label>
                <input
                  type="tel"
                  value={tempData.phone || ''}
                  onChange={(e) => setTempData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Secondary Phone</label>
                <input
                  type="tel"
                  value={tempData.phone2 || ''}
                  onChange={(e) => setTempData(prev => ({ ...prev, phone2: e.target.value }))}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Address</label>
              <textarea
                value={tempData.address || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, address: e.target.value }))}
                rows="3"
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button
                onClick={cancelEditing}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={() => saveChanges('contact')}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium w-24">Email:</span>
              <span className="text-gray-900 font-semibold">{settings.contact.email}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium w-24">Phone 1:</span>
              <span className="text-gray-900 font-semibold">{settings.contact.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-gray-600 font-medium w-24">Phone 2:</span>
              <span className="text-gray-900 font-semibold">{settings.contact.phone2}</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gray-600 font-medium w-24">Address:</span>
              <span className="text-gray-900 font-semibold">{settings.contact.address}</span>
            </div>
          </div>
        )}
      </div>

      {/* Social Media Links */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-purple-50 to-purple-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-purple-600 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Social Media Links</h2>
              <p className="text-sm text-gray-600">Update your social media profiles</p>
            </div>
          </div>
          <button
            onClick={() => startEditing('socialMedia', settings.socialMedia)}
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>

        {editingSection === 'socialMedia' ? (
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📘</span>
                Facebook URL
              </label>
              <input
                type="url"
                value={tempData.facebook || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, facebook: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://www.facebook.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-pink-600">📷</span>
                Instagram URL
              </label>
              <input
                type="url"
                value={tempData.instagram || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, instagram: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://www.instagram.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-blue-700">💼</span>
                LinkedIn URL
              </label>
              <input
                type="url"
                value={tempData.linkedin || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, linkedin: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="https://www.linkedin.com/..."
              />
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button
                onClick={cancelEditing}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={() => saveChanges('socialMedia')}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl w-6">📘</span>
              <span className="text-gray-900 font-semibold text-sm break-all">{settings.socialMedia.facebook}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-pink-600 text-xl w-6">📷</span>
              <span className="text-gray-900 font-semibold text-sm break-all">{settings.socialMedia.instagram}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-700 text-xl w-6">💼</span>
              <span className="text-gray-900 font-semibold text-sm break-all">{settings.socialMedia.linkedin}</span>
            </div>
          </div>
        )}
      </div>

      {/* Floating Buttons Numbers */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
        <div className="bg-gradient-to-r from-orange-50 to-orange-100 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-orange-600 p-2 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900">Floating Buttons</h2>
              <p className="text-sm text-gray-600">Update WhatsApp and Call numbers</p>
            </div>
          </div>
          <button
            onClick={() => startEditing('floatingButtons', settings.floatingButtons)}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors"
          >
            <Edit2 className="h-4 w-4" />
            Edit
          </button>
        </div>

        {editingSection === 'floatingButtons' ? (
          <div className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-green-600">💬</span>
                WhatsApp Number
              </label>
              <input
                type="tel"
                value={tempData.whatsappNumber || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, whatsappNumber: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+91..."
              />
              <p className="text-xs text-gray-500 mt-1">Format: +91XXXXXXXXXX</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                <span className="text-blue-600">📞</span>
                Call Number
              </label>
              <input
                type="tel"
                value={tempData.callNumber || ''}
                onChange={(e) => setTempData(prev => ({ ...prev, callNumber: e.target.value }))}
                className="w-full border-2 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                placeholder="+91..."
              />
              <p className="text-xs text-gray-500 mt-1">Format: +91XXXXXXXXXX</p>
            </div>

            <div className="flex gap-2 justify-end pt-4">
              <button
                onClick={cancelEditing}
                className="px-4 py-2 border-2 border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center gap-2"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
              <button
                onClick={() => saveChanges('floatingButtons')}
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save Changes
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <span className="text-green-600 text-xl w-6">💬</span>
              <div>
                <p className="text-xs text-gray-600">WhatsApp</p>
                <p className="text-gray-900 font-semibold">{settings.floatingButtons.whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-blue-600 text-xl w-6">📞</span>
              <div>
                <p className="text-xs text-gray-600">Call</p>
                <p className="text-gray-900 font-semibold">{settings.floatingButtons.callNumber}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}