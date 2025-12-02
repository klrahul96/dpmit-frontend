import React, { useState } from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown, Check } from 'lucide-react';

const API_BASE = "http://localhost:5000";

export default function AgencyServicesSectionAdmin({
  websiteContent,
  editingSection,
  tempData,
  setTempData,
  expandedSections,
  toggleSection,
  startEditing,
  saveChanges,
  cancelEditing
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const agency = websiteContent?.agencyServices || {};

  const uploadImage = async (file) => {
    const form = new FormData();
    form.append("file", file);

    const res = await fetch(`${API_BASE}/api/upload`, { method: "POST", body: form });
    const j = await res.json();
    return j.url;
  };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    const imgURL = await uploadImage(file);
    setTempData({ ...tempData, image: imgURL });

    setLoading(false);
  };

  const handleSave = async () => {
    setLoading(true);
    const token = localStorage.getItem("adminToken");

    const res = await fetch(`${API_BASE}/api/content/agencyServices`, {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
      body: JSON.stringify({ data: tempData })
    });

    const j = await res.json();
    setLoading(false);

    if (j.success) {
      saveChanges("agencyServices");
      setMessage("Saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } else {
      setMessage("Error saving!");
    }
  };

  return (
    <div className="bg-white rounded-xl border shadow-md">

      {/* HEADER */}
      <div
        className="p-5 flex justify-between items-center border-b cursor-pointer"
        onClick={() => toggleSection("agencyServices")}
      >
        <div className="flex items-center gap-3">
          {expandedSections?.agencyServices ? <ChevronUp /> : <ChevronDown />}
          <h2 className="text-xl font-bold">🚀 Agency Services</h2>
        </div>

        {editingSection !== "agencyServices" && expandedSections?.agencyServices && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              startEditing("agencyServices", agency);
            }}
            className="px-4 py-2 bg-pink-600 text-white rounded-lg"
          >
            <Edit size={18} /> Edit
          </button>
        )}
      </div>

      {/* CONTENT */}
      {expandedSections?.agencyServices && (
        <div className="p-6 bg-gray-50">

          {message && (
            <div className="p-3 bg-green-100 text-green-700 rounded mb-4">
              {message}
            </div>
          )}

          {editingSection === "agencyServices" ? (
            <div className="space-y-5">

              {/* TEXT FIELDS */}
              {["sectionSubtitle", "sectionTitle", "sectionTitleHighlight", "description", "buttonText"]
                .map((field, i) => (
                  <div key={i}>
                    <label className="font-semibold">{field}</label>
                    <input
                      value={tempData[field] || ""}
                      onChange={(e) => setTempData({ ...tempData, [field]: e.target.value })}
                      className="w-full border p-3 rounded"
                    />
                  </div>
                ))}

              {/* IMAGE */}
              <div>
                <label className="font-semibold">Image</label>
                <input type="file" className="w-full p-2 border rounded" onChange={handleImageChange} />
                <input
                  value={tempData.image || ""}
                  onChange={(e) => setTempData({ ...tempData, image: e.target.value })}
                  className="w-full p-2 border rounded mt-2"
                />
              </div>

              {/* FEATURES */}
              <div>
                <div className="flex justify-between mb-3">
                  <h3 className="font-bold">Features</h3>
                  <button
                    onClick={() =>
                      setTempData({ ...tempData, features: [...(tempData.features || []), "New Feature"] })
                    }
                    className="px-4 py-2 bg-pink-600 text-white rounded"
                  >
                    <Plus /> Add Feature
                  </button>
                </div>

                {(tempData.features || []).map((feature, idx) => (
                  <div key={idx} className="bg-white p-3 rounded border mb-3">
                    <div className="flex justify-between">
                      <b>Feature {idx + 1}</b>
                      <Trash2
                        className="text-red-600 cursor-pointer"
                        onClick={() =>
                          setTempData({
                            ...tempData,
                            features: tempData.features.filter((_, i) => i !== idx),
                          })
                        }
                      />
                    </div>

                    <input
                      value={feature}
                      onChange={(e) => {
                        const updated = [...tempData.features];
                        updated[idx] = e.target.value;
                        setTempData({ ...tempData, features: updated });
                      }}
                      className="w-full p-2 border rounded mt-2"
                    />
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex gap-3">
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-green-600 text-white rounded"
                >
                  {loading ? "Saving..." : "Save Changes"}
                </button>
                <button
                  onClick={cancelEditing}
                  className="px-6 py-3 bg-gray-600 text-white rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <p><b>Title:</b> {agency.sectionTitle} {agency.sectionTitleHighlight}</p>
              <p><b>Subtitle:</b> {agency.sectionSubtitle}</p>
              <p><b>Description:</b> {agency.description}</p>

              <div>
                <b>Features:</b>
                {agency.features?.map((f, i) => (
                  <p key={i} className="flex items-center gap-2">
                    <Check className="text-green-500" /> {f}
                  </p>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
