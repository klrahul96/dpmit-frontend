import React, { useState } from 'react';
import { Edit, Save, X, Plus, Trash2 } from 'lucide-react';

export default function PrivacyPolicySection({
  websiteContent,
  editingSection,
  tempData,
  setTempData,
  startEditing,
  saveChanges,
  cancelEditing,
  token
}) {
  const privacyData = websiteContent.privacyPolicy || {};

  const addPolicyPoint = (section) => {
    const newPoint = {
      id: Date.now(),
      title: 'New Point',
      desc: 'Point description'
    };

    setTempData(prev => ({
      ...prev,
      [section]: [...(prev[section] || []), newPoint]
    }));
  };

  const deletePolicyPoint = (section, id) => {
    setTempData(prev => ({
      ...prev,
      [section]: prev[section].filter(item => item.id !== id)
    }));
  };

  const updatePolicyPoint = (section, id, field, value) => {
    setTempData(prev => ({
      ...prev,
      [section]: prev[section].map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-600">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Privacy Policy</h2>
            <p className="text-gray-600 text-sm mt-1">Manage your privacy policy content</p>
          </div>
          {editingSection !== 'privacyPolicy' && (
            <button
              onClick={() => startEditing('privacyPolicy', privacyData)}
              className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              <Edit className="h-4 w-4" /> Edit All
            </button>
          )}
        </div>
      </div>

      {editingSection === 'privacyPolicy' ? (
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-6">
          {/* Intro Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Intro Section</h3>
            <textarea
              value={tempData.introText || ''}
              onChange={(e) => setTempData({ ...tempData, introText: e.target.value })}
              placeholder="Enter intro text..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
            />
          </div>

          {/* Privacy Policy Points */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Privacy Policy Points</h3>
              <button
                onClick={() => addPolicyPoint('privacyPoints')}
                className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
              >
                <Plus className="h-4 w-4" /> Add Point
              </button>
            </div>
            <div className="space-y-3">
              {(tempData.privacyPoints || []).map((point) => (
                <div key={point.id} className="p-4 bg-gray-50 rounded-lg border space-y-2">
                  <input
                    type="text"
                    value={point.title}
                    onChange={(e) => updatePolicyPoint('privacyPoints', point.id, 'title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 font-semibold"
                  />
                  <textarea
                    value={point.desc}
                    onChange={(e) => updatePolicyPoint('privacyPoints', point.id, 'desc', e.target.value)}
                    placeholder="Description"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="2"
                  />
                  <button
                    onClick={() => deletePolicyPoint('privacyPoints', point.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Refund & Cancellation Section */}
          <div className="border-b pb-6">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Refund & Cancellation Intro</h3>
            <textarea
              value={tempData.refundIntro || ''}
              onChange={(e) => setTempData({ ...tempData, refundIntro: e.target.value })}
              placeholder="Enter refund intro text..."
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
            />
          </div>

          {/* Refund Policy Points */}
          <div className="border-b pb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-gray-800">Refund Policy Points</h3>
              <button
                onClick={() => addPolicyPoint('refundPoints')}
                className="flex items-center gap-2 bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 text-sm"
              >
                <Plus className="h-4 w-4" /> Add Point
              </button>
            </div>
            <div className="space-y-3">
              {(tempData.refundPoints || []).map((point) => (
                <div key={point.id} className="p-4 bg-gray-50 rounded-lg border space-y-2">
                  <input
                    type="text"
                    value={point.title}
                    onChange={(e) => updatePolicyPoint('refundPoints', point.id, 'title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 font-semibold"
                  />
                  <textarea
                    value={point.desc}
                    onChange={(e) => updatePolicyPoint('refundPoints', point.id, 'desc', e.target.value)}
                    placeholder="Description"
                    className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                    rows="2"
                  />
                  <button
                    onClick={() => deletePolicyPoint('refundPoints', point.id)}
                    className="flex items-center gap-2 text-red-600 hover:text-red-700 text-sm"
                  >
                    <Trash2 className="h-4 w-4" /> Delete
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-lg font-bold text-gray-800 mb-4">Contact Details</h3>
            <div className="space-y-3">
              <input
                type="email"
                value={tempData.contactEmail || ''}
                onChange={(e) => setTempData({ ...tempData, contactEmail: e.target.value })}
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                value={tempData.contactPhone1 || ''}
                onChange={(e) => setTempData({ ...tempData, contactPhone1: e.target.value })}
                placeholder="Phone 1"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="tel"
                value={tempData.contactPhone2 || ''}
                onChange={(e) => setTempData({ ...tempData, contactPhone2: e.target.value })}
                placeholder="Phone 2"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                value={tempData.contactAddress || ''}
                onChange={(e) => setTempData({ ...tempData, contactAddress: e.target.value })}
                placeholder="Address"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              onClick={() => saveChanges('privacyPolicy')}
              className="flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              <Save className="h-4 w-4" /> Save Changes
            </button>
            <button
              onClick={cancelEditing}
              className="flex items-center gap-2 bg-gray-400 text-white px-6 py-2 rounded-lg hover:bg-gray-500"
            >
              <X className="h-4 w-4" /> Cancel
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6 space-y-8">
          {/* Privacy Policy Display */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Privacy Policy</h3>
            <p className="text-gray-700 leading-relaxed">{privacyData.introText}</p>
            <div className="mt-6 space-y-4">
              {(privacyData.privacyPoints || []).map((point) => (
                <div key={point.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Refund Policy Display */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Refund & Cancellation Policy</h3>
            <p className="text-gray-700 leading-relaxed mb-6">{privacyData.refundIntro}</p>
            <div className="space-y-4">
              {(privacyData.refundPoints || []).map((point) => (
                <div key={point.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">{point.title}</h4>
                  <p className="text-gray-600">{point.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Display */}
          <div>
            <h3 className="text-xl font-bold text-orange-500 mb-4">Contact & Support</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-semibold text-gray-800">{privacyData.contactPhone1}</p>
                <p className="font-semibold text-gray-800">{privacyData.contactPhone2}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-semibold text-gray-800 break-all">{privacyData.contactEmail}</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-600">Address</p>
                <p className="font-semibold text-gray-800">{privacyData.contactAddress}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}