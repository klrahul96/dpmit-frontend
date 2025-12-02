import React from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown, Upload } from 'lucide-react';

const TeamSectionAdmin = ({ 
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
}) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
    <div 
      className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-indigo-600"
      onClick={() => toggleSection('team')}
    >
      <div className="flex items-center gap-3">
        {expandedSections.team ? <ChevronUp className="h-5 w-5 text-indigo-600" /> : <ChevronDown className="h-5 w-5 text-indigo-600" />}
        <div>
          <h2 className="text-xl font-bold text-gray-900">👥 Team Section</h2>
          <p className="text-sm text-gray-500">{websiteContent?.team?.members?.length || 0} team members</p>
        </div>
      </div>
      {editingSection !== 'team' && expandedSections.team && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            startEditing('team', websiteContent.team);
          }}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition shadow-md hover:shadow-lg"
        >
          <Edit className="h-4 w-4" />
          Edit Section
        </button>
      )}
    </div>

    {expandedSections.team && (
      <div className="p-6 border-t border-gray-200 bg-gray-50">
        {editingSection === 'team' ? (
          <div className="space-y-5">
            {/* Section Headers */}
            <div className="bg-white p-5 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                  <input
                    type="text"
                    value={tempData.sectionSubtitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Our Team"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={tempData.sectionTitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                    placeholder="e.g., Meet our expert Team"
                  />
                </div>
              </div>
            </div>

            {/* Team Members Management */}
            <div className="border-t pt-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-gray-900 text-lg">Team Members ({tempData.members?.length || 0})</h3>
                <button
                  onClick={() => {
                    const newMembers = [...(tempData.members || []), {
                      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
                      name: "New Member",
                      designation: "Position"
                    }];
                    setTempData({ ...tempData, members: newMembers });
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md font-semibold"
                >
                  <Plus className="h-4 w-4" />
                  Add Member
                </button>
              </div>

              {tempData.members && tempData.members.length > 0 ? (
                <div className="space-y-4">
                  {tempData.members.map((member, idx) => (
                    <div key={idx} className="bg-white p-5 border-2 border-gray-200 rounded-lg hover:shadow-md transition">
                      <div className="flex items-start gap-4">
                        {/* Image Upload */}
                        <div className="flex-shrink-0 relative group cursor-pointer">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-28 h-28 object-cover rounded-full border-4 border-yellow-500 transition group-hover:brightness-75"
                          />
                          <label className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 rounded-full cursor-pointer transition">
                            <div className="flex flex-col items-center">
                              <Upload className="h-6 w-6 text-white mb-1" />
                              <span className="text-white text-xs">Change</span>
                            </div>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files[0];
                                if (file && file.type.startsWith('image/')) {
                                  if (file.size > 5 * 1024 * 1024) {
                                    alert('Image size should be less than 5MB');
                                    return;
                                  }
                                  const reader = new FileReader();
                                  reader.onload = (event) => {
                                    const newMembers = [...tempData.members];
                                    newMembers[idx].image = event.target.result;
                                    setTempData({ ...tempData, members: newMembers });
                                  };
                                  reader.readAsDataURL(file);
                                } else {
                                  alert('Please select a valid image file');
                                }
                              }}
                            />
                          </label>
                        </div>

                        {/* Member Details */}
                        <div className="flex-1 space-y-3">
                          <div className="flex items-center justify-between">
                            <h4 className="font-bold text-gray-900 text-lg">Member {idx + 1}: {member.name}</h4>
                            <button
                              onClick={() => {
                                const newMembers = tempData.members.filter((_, i) => i !== idx);
                                setTempData({ ...tempData, members: newMembers });
                              }}
                              className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                            >
                              <Trash2 className="h-5 w-5" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-2">👤 Name</label>
                              <input
                                type="text"
                                placeholder="e.g., Hariom"
                                value={member.name}
                                onChange={(e) => {
                                  const newMembers = [...tempData.members];
                                  newMembers[idx].name = e.target.value;
                                  setTempData({ ...tempData, members: newMembers });
                                }}
                                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>

                            <div>
                              <label className="block text-xs font-semibold text-gray-700 mb-2">💼 Designation</label>
                              <input
                                type="text"
                                placeholder="e.g., IT Team Head"
                                value={member.designation}
                                onChange={(e) => {
                                  const newMembers = [...tempData.members];
                                  newMembers[idx].designation = e.target.value;
                                  setTempData({ ...tempData, members: newMembers });
                                }}
                                className="w-full px-3 py-2 text-sm border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="bg-gray-100 border-2 border-dashed border-gray-400 rounded-lg p-8 text-center">
                  <p className="text-gray-700 font-semibold mb-3 text-lg">📭 No team members yet</p>
                  <p className="text-gray-600 text-sm mb-4">Add team members to display them in the carousel</p>
                  <button
                    onClick={() => {
                      const newMembers = [...(tempData.members || []), {
                        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&q=80",
                        name: "New Member",
                        designation: "Position"
                      }];
                      setTempData({ ...tempData, members: newMembers });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-md font-semibold"
                  >
                    <Plus className="h-4 w-4" />
                    Add First Member
                  </button>
                </div>
              )}
            </div>

            {/* Live Preview - EXACT SAME AS FRONTEND */}
            <div className="border-t pt-6">
              <h3 className="font-bold text-gray-900 text-xl mb-4">📱 Live Preview</h3>
              <div className="bg-orange-50 rounded-lg p-8 overflow-hidden">
                {/* Section Header Preview */}
                <div className="text-center max-w-2xl mx-auto mb-8 px-4">
                  <h5 className="text-blue-600 text-xl font-semibold mb-4">{tempData.sectionSubtitle || 'Our Team'}</h5>
                  <h1 className="text-4xl font-bold text-gray-900">{tempData.sectionTitle || 'Meet our expert Team'}</h1>
                </div>

                {/* Continuous Scrolling Team Section - EXACT SAME CODE */}
                {tempData.members && tempData.members.length > 0 ? (
                  <div className="relative w-full overflow-hidden py-6">
                    <div
                      className="flex gap-8 pl-4"
                      style={{
                        animation: "scrollX 40s linear infinite",
                        width: "fit-content",
                        minWidth: "200%",
                      }}
                    >
                      {[...tempData.members, ...tempData.members, ...tempData.members].map((member, index) => {
                        return (
                          <div key={index} className="group flex-shrink-0" style={{ width: "300px" }}>
                            {/* Card Container */}
                            <div className="bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-t-full pt-8 relative">
                              {/* Diamond Shape Background */}
                              <div className="w-full h-48 flex items-center justify-center">
                                <div className="w-32 h-32 bg-yellow-500 transform rotate-45 relative">
                                  <div className="absolute inset-4 bg-yellow-600 transform -rotate-45"></div>
                                </div>
                              </div>
                              
                              {/* Team Member Content */}
                              <div className="relative -mt-40 px-8 pb-8">
                                {/* Profile Image */}
                                <div className="relative mx-auto w-32 h-32 mb-6">
                                  <div className="w-full h-full rounded-full border-8 border-white overflow-hidden">
                                    <img
                                      src={member.image}
                                      alt={member.name}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                  </div>
                                  <div className="absolute inset-0 rounded-full border-4 border-yellow-500"></div>
                                </div>

                                {/* Member Info */}
                                <div className="text-center text-white">
                                  <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300">
                                    {member.name}
                                  </h4>
                                  <p className="text-gray-100 mb-6">{member.designation}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {/* Inline keyframes for animation */}
                    <style>{`
                      @keyframes scrollX {
                        0% { 
                          transform: translateX(0); 
                        }
                        100% { 
                          transform: translateX(-66.666%);
                        }
                      }
                    `}</style>
                  </div>
                ) : (
                  <div className="text-center py-12 text-gray-500">
                    <p>Add members to see the scrolling carousel preview</p>
                  </div>
                )}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-6 border-t border-gray-300">
              <button
                onClick={() => saveChanges('team')}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition"
              >
                <Save className="h-4 w-4" />
                Save Team Section
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
            {/* Display Mode */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Subtitle</p>
              <p className="text-sm text-blue-600 font-semibold">{websiteContent?.team?.sectionSubtitle || 'Our Team'}</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Title</p>
              <p className="text-lg font-bold text-gray-900">{websiteContent?.team?.sectionTitle || 'Meet our expert Team'}</p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <p className="text-xs text-gray-500 font-medium uppercase mb-3">👥 Team Members ({websiteContent?.team?.members?.length || 0})</p>
              {websiteContent?.team?.members && websiteContent.team.members.length > 0 ? (
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4">
                  {websiteContent.team.members.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 hover:shadow-md transition">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-yellow-500"
                      />
                      <div className="text-center">
                        <p className="font-semibold text-gray-900 text-xs line-clamp-1">{member.name}</p>
                        <p className="text-xs text-gray-600 line-clamp-1">{member.designation}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600 text-sm">No team members added yet</p>
              )}
            </div>
          </div>
        )}
      </div>
    )}
  </div>
);

export default TeamSectionAdmin;