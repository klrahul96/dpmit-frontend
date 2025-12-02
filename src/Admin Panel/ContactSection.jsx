import React, { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Clock, Edit, Save, X, Image, FileText, Upload } from "lucide-react";

const ContactSection = ({
  websiteContent,
  editingSection,
  tempData,
  setTempData,
  startEditing,
  saveChanges,
  cancelEditing,
  token,
}) => {
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [imagePreview, setImagePreview] = useState("");

  // -------------------------------
  // LOAD CONTACT FROM BACKEND
  // -------------------------------
  useEffect(() => {
    const loadContact = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/content/contact");
        const json = await res.json();

        const data = json?.data || {};

        websiteContent.contact = {
          headerImage: data.headerImage || "",
          title: data.title || "",
          subtitle: data.subtitle || "",
          sectionTitle: data.sectionTitle || "",
          description: data.description || "",
          email: data.email || "",
          email2: data.email2 || "",
          phone: data.phone || "",
          phone2: data.phone2 || "",
          address: data.address || "",
          businessHours: {
            weekdays: data.businessHours?.weekdays || "",
            saturday: data.businessHours?.saturday || "",
            sunday: data.businessHours?.sunday || "",
          },
          formTitle: data.formTitle || "",
          formSubtitle: data.formSubtitle || "",
          mapUrl: data.mapUrl || "",
        };

        setImagePreview(data.headerImage || "");
        setLoading(false);
      } catch (error) {
        console.log("Error loading contact:", error);
        setLoading(false);
      }
    };

    loadContact();
  }, []);

  // -------------------------------
  // IMAGE UPLOAD HANDLER
  // -------------------------------
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert("Image size should be less than 5MB");
      return;
    }

    // Check file type
    if (!file.type.startsWith("image/")) {
      alert("Please select a valid image file");
      return;
    }

    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        const imageUrl = json.url || json.filePath; // Adjust based on your backend response
        setTempData({ ...tempData, headerImage: imageUrl });
        setImagePreview(imageUrl);
        alert("Image uploaded successfully!");
      } else {
        alert("Upload failed: " + (json.message || "Unknown error"));
      }
    } catch (error) {
      console.error("Upload error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // -------------------------------
  // SAVE TO BACKEND
  // -------------------------------
  const saveToBackend = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/content/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          data: tempData,
        }),
      });

      const json = await res.json();

      if (json.success) {
        saveChanges("contact");
        alert("Contact information updated successfully!");
      }
    } catch (err) {
      console.log("Save error:", err);
      alert("Failed to save changes");
    }
  };

  if (loading)
    return (
      <div className="text-center py-10 text-gray-600">
        Loading contact info...
      </div>
    );

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">
            Contact Page Content
          </h2>
          <p className="text-gray-500 mt-1">
            Update your contact page content, banner, and details
          </p>
        </div>

        {editingSection !== "contact" && (
          <button
            onClick={() => startEditing("contact", websiteContent.contact)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Edit className="h-4 w-4" />
            Edit Contact Page
          </button>
        )}
      </div>

      {/* CONTENT BOX */}
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
        
        {editingSection === "contact" ? (
          // ==================== EDIT MODE ====================
          <div className="p-6 space-y-8">
            
            {/* 1. HEADER/BANNER SECTION */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Image className="h-5 w-5 text-blue-600" />
                Header Banner Section
              </h3>
              
              <div className="space-y-4">
                {/* Header Image Upload */}
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Banner Image Upload
                  </label>
                  
                  {/* Image Preview */}
                  {imagePreview && (
                    <div className="mb-4 rounded-lg overflow-hidden border-2 border-blue-300 bg-gray-50">
                      <img 
                        src={imagePreview} 
                        alt="Preview" 
                        className="w-full h-48 object-cover"
                      />
                    </div>
                  )}

                  {/* Upload Input */}
                  <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 cursor-pointer font-medium">
                      <Upload className="h-4 w-4" />
                      {uploading ? "Uploading..." : "Choose Image"}
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        disabled={uploading}
                        className="hidden"
                      />
                    </label>
                    <span className="text-xs text-gray-500">
                      Max 5MB (JPG, PNG, WebP)
                    </span>
                  </div>

                  {/* Or Manual URL Input */}
                  <div className="mt-3 pt-3 border-t">
                    <p className="text-xs text-gray-600 mb-2">Or paste image URL manually:</p>
                    <input
                      type="text"
                      value={tempData.headerImage}
                      onChange={(e) => {
                        setTempData({ ...tempData, headerImage: e.target.value });
                        setImagePreview(e.target.value);
                      }}
                      placeholder="/assets/contactus.jpg"
                      className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Main Title
                  </label>
                  <input
                    type="text"
                    value={tempData.title}
                    onChange={(e) =>
                      setTempData({ ...tempData, title: e.target.value })
                    }
                    placeholder="Ready to Transform Your Business?"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Subtitle */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Subtitle
                  </label>
                  <textarea
                    rows="2"
                    value={tempData.subtitle}
                    onChange={(e) =>
                      setTempData({ ...tempData, subtitle: e.target.value })
                    }
                    placeholder="We're here to help you every step of the way..."
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 2. GET IN TOUCH SECTION */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Get In Touch Section
              </h3>
              
              <div className="space-y-4">
                {/* Section Title */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={tempData.sectionTitle}
                    onChange={(e) =>
                      setTempData({ ...tempData, sectionTitle: e.target.value })
                    }
                    placeholder="Get In Touch"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Description
                  </label>
                  <textarea
                    rows="3"
                    value={tempData.description}
                    onChange={(e) =>
                      setTempData({ ...tempData, description: e.target.value })
                    }
                    placeholder="Have a project in mind or need expert IT consultation?..."
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 3. CONTACT DETAILS */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-600" />
                Contact Information
              </h3>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Primary Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Primary Email
                  </label>
                  <input
                    type="email"
                    value={tempData.email}
                    onChange={(e) =>
                      setTempData({ ...tempData, email: e.target.value })
                    }
                    placeholder="info@dpmitsolutions.com"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Secondary Email */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Secondary Email (Optional)
                  </label>
                  <input
                    type="email"
                    value={tempData.email2}
                    onChange={(e) =>
                      setTempData({ ...tempData, email2: e.target.value })
                    }
                    placeholder="support@dpmitsolutions.com"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Primary Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Primary Phone
                  </label>
                  <input
                    type="text"
                    value={tempData.phone}
                    onChange={(e) =>
                      setTempData({ ...tempData, phone: e.target.value })
                    }
                    placeholder="+91 70673 00346"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Secondary Phone */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Secondary Phone
                  </label>
                  <input
                    type="text"
                    value={tempData.phone2}
                    onChange={(e) =>
                      setTempData({ ...tempData, phone2: e.target.value })
                    }
                    placeholder="+91 96504 13450"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Address */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-1">
                    Office Address
                  </label>
                  <textarea
                    rows="2"
                    value={tempData.address}
                    onChange={(e) =>
                      setTempData({ ...tempData, address: e.target.value })
                    }
                    placeholder="Tilak Nagar, Delhi"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* 4. BUSINESS HOURS */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Business Hours
              </h3>

              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Weekdays
                  </label>
                  <input
                    type="text"
                    placeholder="Monday - Friday: 9:00 AM - 6:00 PM"
                    value={tempData.businessHours?.weekdays || ""}
                    onChange={(e) =>
                      setTempData({
                        ...tempData,
                        businessHours: {
                          ...tempData.businessHours,
                          weekdays: e.target.value,
                        },
                      })
                    }
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Saturday
                  </label>
                  <input
                    type="text"
                    placeholder="Saturday: 10:00 AM - 4:00 PM"
                    value={tempData.businessHours?.saturday || ""}
                    onChange={(e) =>
                      setTempData({
                        ...tempData,
                        businessHours: {
                          ...tempData.businessHours,
                          saturday: e.target.value,
                        },
                      })
                    }
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-1">
                    Sunday
                  </label>
                  <input
                    type="text"
                    placeholder="Sunday: Closed"
                    value={tempData.businessHours?.sunday || ""}
                    onChange={(e) =>
                      setTempData({
                        ...tempData,
                        businessHours: {
                          ...tempData.businessHours,
                          sunday: e.target.value,
                        },
                      })
                    }
                    className="w-full border px-3 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 5. CONTACT FORM SECTION */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Contact Form Section
              </h3>
              
              <div className="space-y-4">
                {/* Form Title */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Form Title
                  </label>
                  <input
                    type="text"
                    value={tempData.formTitle}
                    onChange={(e) =>
                      setTempData({ ...tempData, formTitle: e.target.value })
                    }
                    placeholder="Send us a Message"
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Form Subtitle */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Form Subtitle
                  </label>
                  <input
                    type="text"
                    value={tempData.formSubtitle}
                    onChange={(e) =>
                      setTempData({ ...tempData, formSubtitle: e.target.value })
                    }
                    placeholder="Fill out the form below and we'll get back to you within 24 hours."
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* 6. MAP SECTION */}
            <div className="pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-red-600" />
                Map Section
              </h3>
              
              <div className="space-y-4">
                {/* Map URL */}
                <div>
                  <label className="block text-sm font-medium mb-1">
                    Google Maps Embed URL
                  </label>
                  <textarea
                    rows="3"
                    value={tempData.mapUrl}
                    onChange={(e) =>
                      setTempData({ ...tempData, mapUrl: e.target.value })
                    }
                    placeholder="https://www.google.com/maps/embed?pb=..."
                    className="w-full border px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">
                    Get embed URL from Google Maps → Share → Embed a map
                  </p>
                </div>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-3 pt-4 border-t">
              <button
                onClick={saveToBackend}
                className="px-6 py-3 bg-green-600 text-white rounded-lg flex items-center gap-2 hover:bg-green-700 font-medium"
              >
                <Save className="h-4 w-4" />
                Save All Changes
              </button>

              <button
                onClick={cancelEditing}
                className="px-6 py-3 bg-gray-500 text-white rounded-lg flex items-center gap-2 hover:bg-gray-600 font-medium"
              >
                <X className="h-4 w-4" />
                Cancel
              </button>
            </div>
          </div>
        ) : (
          // ==================== DISPLAY MODE ====================
          <div className="p-6 space-y-8">
            
            {/* 1. HEADER/BANNER PREVIEW */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Header Banner</h3>
              <div className="space-y-3">
                {websiteContent.contact.headerImage && (
                  <div className="rounded-lg overflow-hidden border-2 border-gray-300">
                    <img 
                      src={websiteContent.contact.headerImage} 
                      alt="Banner" 
                      className="w-full h-48 object-cover"
                    />
                  </div>
                )}
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Banner Image</p>
                  <p className="font-medium text-blue-600 text-sm break-all">{websiteContent.contact.headerImage || "Not set"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Title</p>
                  <p className="font-medium">{websiteContent.contact.title || "Not set"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Subtitle</p>
                  <p className="font-medium">{websiteContent.contact.subtitle || "Not set"}</p>
                </div>
              </div>
            </div>

            {/* 2. GET IN TOUCH PREVIEW */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get In Touch Section</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Section Title</p>
                  <p className="font-medium">{websiteContent.contact.sectionTitle || "Not set"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Description</p>
                  <p className="font-medium">{websiteContent.contact.description || "Not set"}</p>
                </div>
              </div>
            </div>

            {/* 3. CONTACT DETAILS PREVIEW */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
              <div className="grid md:grid-cols-2 gap-4">
                
                {/* EMAILS */}
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <p className="font-semibold text-gray-900">Emails</p>
                  </div>
                  <p className="font-medium">{websiteContent.contact.email || "Not set"}</p>
                  {websiteContent.contact.email2 && (
                    <p className="text-gray-600">{websiteContent.contact.email2}</p>
                  )}
                </div>

                {/* PHONES */}
                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Phone className="h-5 w-5 text-green-600" />
                    <p className="font-semibold text-gray-900">Phones</p>
                  </div>
                  <p className="font-medium">{websiteContent.contact.phone || "Not set"}</p>
                  {websiteContent.contact.phone2 && (
                    <p className="text-gray-600">{websiteContent.contact.phone2}</p>
                  )}
                </div>

                {/* ADDRESS */}
                <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <div className="flex items-center gap-2 mb-2">
                    <MapPin className="h-5 w-5 text-purple-600" />
                    <p className="font-semibold text-gray-900">Address</p>
                  </div>
                  <p className="font-medium">{websiteContent.contact.address || "Not set"}</p>
                </div>

                {/* BUSINESS HOURS */}
                <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="h-5 w-5 text-orange-600" />
                    <p className="font-semibold text-gray-900">Business Hours</p>
                  </div>
                  <p className="text-sm">{websiteContent.contact.businessHours?.weekdays || "Not set"}</p>
                  <p className="text-sm">{websiteContent.contact.businessHours?.saturday || "Not set"}</p>
                  <p className="text-sm">{websiteContent.contact.businessHours?.sunday || "Not set"}</p>
                </div>
              </div>
            </div>

            {/* 4. FORM SECTION PREVIEW */}
            <div className="border-b pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Form Section</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Form Title</p>
                  <p className="font-medium">{websiteContent.contact.formTitle || "Not set"}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Form Subtitle</p>
                  <p className="font-medium">{websiteContent.contact.formSubtitle || "Not set"}</p>
                </div>
              </div>
            </div>

            {/* 5. MAP SECTION PREVIEW */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Map Section</h3>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-600">Map Embed URL</p>
                  <p className="font-medium text-blue-600 text-xs break-all">{websiteContent.contact.mapUrl || "Not set"}</p>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default ContactSection;