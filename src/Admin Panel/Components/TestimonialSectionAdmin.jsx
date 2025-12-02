import React, { useState } from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronDown, ChevronUp, Star } from 'lucide-react';

export default function TestimonialSectionAdmin() {
  const [testimonialData, setTestimonialData] = useState({
    sectionSubtitle: "CLIENT STORIES",
    sectionTitle: "Success Stories How Feedback Drives Our Results",
    overallRating: "4.9",
    overallDescription: "DPM IT Solutions - Transforming businesses through digital excellence",
    testimonials: [
      {
        name: "Rabb Da Radio",
        company: "Scrap Motors",
        companyAccent: "Scrap",
        companyAccentColor: "Motors",
        rating: 5,
        text: "Looking for the best IT company in delhi NCR? Choose DPM IT SOLUTIONS Delhi. Their agile developers delivered bug-free software on time, handle our cloud migration flawlessly, and grew our site's organic traffic by 60% with local SEO. Top class tech talent right here in delhi - highly recommend.",
        author: "Rabb Da Radio",
        position: "Business Owner",
        avatar: "/assets/rabb.jpg",
        avatarBg: "bg-red-200"
      },
      {
        name: "Ajay Kant",
        company: "IT Solutions",
        companyAccent: "IT",
        companyAccentColor: "Solutions",
        rating: 5,
        text: "Professional approach, smooth process and on-time delivery — that's what I liked the most about DPMIT Solutions. Definitely a great choice for IT and digital solutions.",
        author: "Ajay Kant",
        position: "Client",
        avatar: "/assets/ajay.jpg",
        avatarBg: "bg-blue-200"
      },
      {
        name: "Simran Kaur",
        company: "Online Business",
        companyAccent: "Online",
        companyAccentColor: "Business",
        rating: 5,
        text: "I had a great experience working with DPM IT SOLUTIONS. Their seo sevices, google ads, and social media marketing really helped grow my business online. The is very professional, responsive, and delivers results.",
        author: "Simran Kaur",
        position: "Business Owner",
        avatar: "/assets/simran.jpg",
        avatarBg: "bg-purple-200"
      },
      {
        name: "Sunny Sharma",
        company: "Kitchen Chimney Appliances",
        companyAccent: "Kitchen",
        companyAccentColor: "Chimney Appliances",
        rating: 5,
        text: "I run a small Kitchen chimney appliances business and was completely new to online marketing and after connecting dpm it solutions, they explained everything clearly and started with seo and Instagram ads. Seriously within month, I started getting messages from new customers who found us online. Their team is friendly, transparents, and knows that works. Highly recommended for small businesses.",
        author: "Sunny Sharma",
        position: "Business Owner",
        avatar: "/assets/sunny.jpg",
        avatarBg: "bg-yellow-200"
      },
      {
        name: "Swati Kumari",
        company: "Clothing Store",
        companyAccent: "Clothing",
        companyAccentColor: "Store",
        rating: 5,
        text: "I run a small clothing store and was completely new to online marketing after connecting dpm it solutions, they explained everything clearly and started with seo and Instagram ads. Seriously within month, I started getting messages from new customers who found us online. Their team is friendly, transparents, and knows that works. Highly recommended for small businesses.",
        author: "Swati Kumari",
        position: "Store Owner",
        avatar: "/assets/swati.jpg",
        avatarBg: "bg-pink-200"
      }
    ]
  });

  const [isExpanded, setIsExpanded] = useState(false);
  const [editingMode, setEditingMode] = useState(null); // 'main' or null
  const [editingTestimonialIdx, setEditingTestimonialIdx] = useState(null);
  const [tempData, setTempData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // 1️⃣ START EDITING MAIN SECTION
  const startEditingMain = () => {
    setTempData({ ...testimonialData });
    setEditingMode('main');
  };

  // SAVE MAIN SECTION
  const saveMainSection = async () => {
    setTestimonialData({ ...tempData });
    setEditingMode(null);
    await saveToBackend({ ...tempData });
  };

  // 2️⃣ START EDITING TESTIMONIAL
  const startEditingTestimonial = (idx) => {
    setTempData({ ...testimonialData.testimonials[idx] });
    setEditingTestimonialIdx(idx);
  };

  // SAVE TESTIMONIAL
  const saveTestimonial = async () => {
    const updated = [...testimonialData.testimonials];
    updated[editingTestimonialIdx] = { ...tempData };
    const newData = { ...testimonialData, testimonials: updated };
    setTestimonialData(newData);
    setEditingTestimonialIdx(null);
    await saveToBackend(newData);
  };

  // 3️⃣ ADD NEW TESTIMONIAL
  const addNewTestimonial = () => {
    const newTestimonial = {
      name: "New Client",
      company: "Company Name",
      companyAccent: "Company",
      companyAccentColor: "Name",
      rating: 5,
      text: "Testimonial text here...",
      author: "Client Name",
      position: "Position",
      avatar: "/assets/default.jpg",
      avatarBg: "bg-gray-200"
    };
    const updated = [...testimonialData.testimonials, newTestimonial];
    setTestimonialData({ ...testimonialData, testimonials: updated });
    alert('✅ New testimonial added! Edit it to customize.');
  };

  // DELETE TESTIMONIAL
  const deleteTestimonial = async (idx) => {
    if (window.confirm('Are you sure you want to delete this testimonial?')) {
      const updated = testimonialData.testimonials.filter((_, i) => i !== idx);
      const newData = { ...testimonialData, testimonials: updated };
      setTestimonialData(newData);
      await saveToBackend(newData);
    }
  };

  // 5️⃣ SAVE TO BACKEND
  const saveToBackend = async (data) => {
    setIsSaving(true);

    try {
      const token = localStorage.getItem("adminToken");

      if (!token) {
        alert("❌ Login expired — Please login again!");
        setIsSaving(false);
        return;
      }

      const res = await fetch("http://localhost:5000/api/content/testimonial", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (json.success) {
        alert("✅ Testimonials saved successfully!");
      } else {
        alert("❌ Failed to save: " + (json.message || "Unknown error"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Server connection error!");
    } finally {
      setIsSaving(false);
    }
  };

  // EDIT MAIN SECTION UI
  if (editingMode === 'main') {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">✏️ Edit Section Details</h3>

        <div className="space-y-4 mb-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Section Subtitle</label>
            <input
              type="text"
              value={tempData.sectionSubtitle || ''}
              onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., CLIENT STORIES"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Section Title</label>
            <input
              type="text"
              value={tempData.sectionTitle || ''}
              onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., Success Stories How Feedback Drives Our Results"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Overall Rating</label>
            <input
              type="text"
              value={tempData.overallRating || ''}
              onChange={(e) => setTempData({ ...tempData, overallRating: e.target.value })}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., 4.9"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Overall Description</label>
            <textarea
              value={tempData.overallDescription || ''}
              onChange={(e) => setTempData({ ...tempData, overallDescription: e.target.value })}
              rows={3}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              placeholder="e.g., DPM IT Solutions - Transforming businesses through digital excellence"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveMainSection}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          <button
            onClick={() => setEditingMode(null)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-bold"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // EDIT TESTIMONIAL UI
  if (editingTestimonialIdx !== null) {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg p-6">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">✏️ Edit Testimonial #{editingTestimonialIdx + 1}</h3>

        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Client Name</label>
              <input
                type="text"
                value={tempData.name || ''}
                onChange={(e) => setTempData({ ...tempData, name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Author Name</label>
              <input
                type="text"
                value={tempData.author || ''}
                onChange={(e) => setTempData({ ...tempData, author: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company</label>
              <input
                type="text"
                value={tempData.company || ''}
                onChange={(e) => setTempData({ ...tempData, company: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Position</label>
              <input
                type="text"
                value={tempData.position || ''}
                onChange={(e) => setTempData({ ...tempData, position: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company Accent (Bold)</label>
              <input
                type="text"
                value={tempData.companyAccent || ''}
                onChange={(e) => setTempData({ ...tempData, companyAccent: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Company Accent Color</label>
              <input
                type="text"
                value={tempData.companyAccentColor || ''}
                onChange={(e) => setTempData({ ...tempData, companyAccentColor: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Rating (1-5)</label>
              <input
                type="number"
                min="1"
                max="5"
                value={tempData.rating || 5}
                onChange={(e) => setTempData({ ...tempData, rating: parseInt(e.target.value) })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Avatar URL</label>
              <input
                type="text"
                value={tempData.avatar || ''}
                onChange={(e) => setTempData({ ...tempData, avatar: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Avatar BG Color</label>
              <select
                value={tempData.avatarBg || 'bg-gray-200'}
                onChange={(e) => setTempData({ ...tempData, avatarBg: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
              >
                <option value="bg-red-200">Red</option>
                <option value="bg-blue-200">Blue</option>
                <option value="bg-purple-200">Purple</option>
                <option value="bg-yellow-200">Yellow</option>
                <option value="bg-pink-200">Pink</option>
                <option value="bg-green-200">Green</option>
                <option value="bg-gray-200">Gray</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Testimonial Text</label>
            <textarea
              value={tempData.text || ''}
              onChange={(e) => setTempData({ ...tempData, text: e.target.value })}
              rows={5}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={saveTestimonial}
            className="flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-bold"
          >
            <Save className="w-4 h-4" />
            Save Changes
          </button>
          <button
            onClick={() => setEditingTestimonialIdx(null)}
            className="flex items-center gap-2 px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-bold"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
        </div>
      </div>
    );
  }

  // MAIN VIEW
  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-lg border-l-4 border-orange-500 overflow-hidden">
      <div
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3">
          {isExpanded ? (
            <ChevronUp className="h-6 w-6 text-orange-500" />
          ) : (
            <ChevronDown className="h-6 w-6 text-orange-500" />
          )}
          <div>
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
              ⭐ Testimonial Section
            </h2>
            <p className="text-sm text-gray-600">{testimonialData.testimonials.length} testimonials</p>
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="border-t border-gray-200 p-6 bg-gray-50 space-y-4">
          {/* Section Details Preview */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-gray-900">Section Details</h3>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  startEditingMain();
                }}
                className="flex items-center gap-2 px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 font-semibold text-sm"
              >
                <Edit className="w-4 h-4" />
                Edit Section
              </button>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-700"><strong>Subtitle:</strong> {testimonialData.sectionSubtitle}</p>
              <p className="text-sm text-gray-700"><strong>Title:</strong> {testimonialData.sectionTitle}</p>
              <p className="text-sm text-gray-700"><strong>Rating:</strong> {testimonialData.overallRating}</p>
              <p className="text-sm text-gray-700"><strong>Description:</strong> {testimonialData.overallDescription}</p>
            </div>
          </div>

          {/* Testimonials List */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-gray-900">Testimonials ({testimonialData.testimonials.length})</h3>
              <button
                onClick={addNewTestimonial}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold text-sm"
              >
                <Plus className="w-4 h-4" />
                + Add Testimonial
              </button>
            </div>

            {testimonialData.testimonials.map((testimonial, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex-1">
                    <p className="font-bold text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.company}</p>
                    <p className="text-xs text-gray-500 mt-1">{testimonial.position}</p>
                  </div>
                  <div className="flex items-center gap-1 ml-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < testimonial.rating
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">{testimonial.text}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => startEditingTestimonial(idx)}
                    className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 font-semibold text-sm"
                  >
                    <Edit className="w-3 h-3" />
                    Edit
                  </button>
                  <button
                    onClick={() => deleteTestimonial(idx)}
                    className="flex items-center gap-1 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 font-semibold text-sm"
                  >
                    <Trash2 className="w-3 h-3" />
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}