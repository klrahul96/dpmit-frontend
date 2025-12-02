import React, { useState } from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

const FooterAdminEditor = () => {
  const [editingSection, setEditingSection] = useState(null);
  const [expandedSections, setExpandedSections] = useState({
    footer: true,
  });

  const [footerData, setFooterData] = useState({
    companyInfo: {
      name: "DPM",
      accentName: "IT",
      description: "Leading IT solutions provider specializing in web development, mobile applications, digital marketing, and custom software solutions. We transform your digital vision into reality."
    },
    contactInfo: [
      { title: "Address", content: "Tilak Nagar, New Delhi - 110018", link: "https://maps.app.goo.gl/vFTreRL9MdoP6S5x6", icon: "fas fa-map-marker-alt" },
      { title: "Call Us", phone1: "+91 9650413450", phone2: "+91 7067300346", icon: "fas fa-phone" },
      { title: "Email Us", content: "info@dpmitsolutions.com", link: "mailto:info@dpmitsolutions.com", icon: "fas fa-envelope" }
    ],
    socialLinks: [
      { name: "Facebook", href: "https://www.facebook.com/dpmitsolution/", bgColor: "bg-gradient-to-br from-blue-400 to-blue-600", icon: "fab fa-facebook-f" },
      { name: "Instagram", href: "https://www.instagram.com/dpmitsolutions/", bgColor: "bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-500", icon: "fab fa-instagram" },
      { name: "LinkedIn", href: "https://in.linkedin.com/company/dpm-it-solutions-pvt-ltd", bgColor: "bg-gradient-to-br from-blue-500 to-blue-700", icon: "fab fa-linkedin-in" }
    ],
    paymentSection: {
      enabled: true,
      buttonText: "PAY USING QR",
      buttonColor: "bg-red-700",
      paymentMethods: [
        { name: "UPI", image: "/assets/upi-icon.webp" },
        { name: "VISA", image: "/assets/visa.png" },
        { name: "RuPay", image: "/assets/rupay.png" },
        { name: "Mastercard", image: "/assets/master.png" }
      ],
      qrCodeImage: "" // QR code image URL
    },
    copyright: {
      text: "Copyright © 2017 - {currentYear} DPM IT Solutions All Rights Reserved Managed by DPM IT Solutions - ",
      googlePromotionLink: { text: "Google Promotion Services in Delhi", to: "/services/google-promotion" },
      endingText: " | Best Google Promotion Company in India"
    }
  });

  const [tempData, setTempData] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const startEditing = () => {
    setEditingSection('footer');
    setTempData(JSON.parse(JSON.stringify(footerData)));
  };

  const saveChanges = async () => {
    try {
      const token = localStorage.getItem("adminToken");

      const res = await fetch("http://localhost:5000/api/content/footer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(tempData),
      });

      const json = await res.json();

      if (json.success) {
        setFooterData(json.data);
        alert("✔ Footer updated successfully!");
      } else {
        alert("❌ Update failed: " + json.message);
      }
    } catch (err) {
      alert("❌ Error saving footer: " + err.message);
    }

    setEditingSection(null);
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
  };

  // Render Preview Mode
  if (!expandedSections.footer) {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div 
          className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-gray-600"
          onClick={() => toggleSection('footer')}
        >
          <div className="flex items-center gap-3">
            <ChevronDown className="h-5 w-5 text-gray-600" />
            <div>
              <h2 className="text-xl font-bold text-gray-900">🦶 Footer Section</h2>
              <p className="text-sm text-gray-500">Frontend UI editor</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Render Edit Mode
  if (editingSection === 'footer') {
    return (
      <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-blue-50 to-purple-50">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">📝 Edit Footer</h2>
          <p className="text-gray-600">Customize your footer content and links</p>
        </div>

        <div className="p-6 space-y-6 max-h-screen overflow-y-auto">
          {/* Company Info */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-5 rounded-lg border border-blue-200">
            <h3 className="font-bold text-gray-900 text-lg mb-4">🏢 Company Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name (Part 1)</label>
                <input
                  type="text"
                  value={tempData.companyInfo?.name || ''}
                  onChange={(e) => setTempData({
                    ...tempData,
                    companyInfo: { ...tempData.companyInfo, name: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="DPM"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name (Part 2 - Orange)</label>
                <input
                  type="text"
                  value={tempData.companyInfo?.accentName || ''}
                  onChange={(e) => setTempData({
                    ...tempData,
                    companyInfo: { ...tempData.companyInfo, accentName: e.target.value }
                  })}
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  placeholder="IT"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description</label>
                <textarea
                  value={tempData.companyInfo?.description || ''}
                  onChange={(e) => setTempData({
                    ...tempData,
                    companyInfo: { ...tempData.companyInfo, description: e.target.value }
                  })}
                  rows={4}
                  className="w-full px-4 py-2 border-2 border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Payment Section */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 p-5 rounded-lg border border-green-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">💳 Payment Section (PAY USING QR)</h3>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={tempData.paymentSection?.enabled || false}
                  onChange={(e) => setTempData({
                    ...tempData,
                    paymentSection: { ...tempData.paymentSection, enabled: e.target.checked }
                  })}
                  className="w-5 h-5"
                />
                <span className="text-sm font-semibold">Enable</span>
              </label>
            </div>
            
            {tempData.paymentSection?.enabled && (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Button Text</label>
                  <input
                    type="text"
                    value={tempData.paymentSection?.buttonText || ''}
                    onChange={(e) => setTempData({
                      ...tempData,
                      paymentSection: { ...tempData.paymentSection, buttonText: e.target.value }
                    })}
                    className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="PAY USING QR"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Button Color (Tailwind class)</label>
                  <input
                    type="text"
                    value={tempData.paymentSection?.buttonColor || ''}
                    onChange={(e) => setTempData({
                      ...tempData,
                      paymentSection: { ...tempData.paymentSection, buttonColor: e.target.value }
                    })}
                    className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="bg-red-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">QR Code Image URL (optional)</label>
                  <input
                    type="text"
                    value={tempData.paymentSection?.qrCodeImage || ''}
                    onChange={(e) => setTempData({
                      ...tempData,
                      paymentSection: { ...tempData.paymentSection, qrCodeImage: e.target.value }
                    })}
                    className="w-full px-4 py-2 border-2 border-green-300 rounded-lg focus:ring-2 focus:ring-green-500"
                    placeholder="https://example.com/qr-code.png"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="block text-sm font-semibold text-gray-700">Payment Methods</label>
                    <button
                      onClick={() => {
                        const newMethods = [...(tempData.paymentSection?.paymentMethods || []), { name: "New Method", image: "" }];
                        setTempData({ 
                          ...tempData, 
                          paymentSection: { ...tempData.paymentSection, paymentMethods: newMethods }
                        });
                      }}
                      className="flex items-center gap-1 px-2 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
                    >
                      <Plus className="h-3 w-3" /> Add
                    </button>
                  </div>
                  <div className="space-y-2">
                    {tempData.paymentSection?.paymentMethods?.map((method, idx) => (
                      <div key={idx} className="flex gap-2 items-center bg-white p-2 rounded border border-green-200">
                        <input
                          type="text"
                          value={method.name}
                          placeholder="Method Name (e.g., UPI)"
                          onChange={(e) => {
                            const newMethods = [...tempData.paymentSection.paymentMethods];
                            newMethods[idx].name = e.target.value;
                            setTempData({ 
                              ...tempData, 
                              paymentSection: { ...tempData.paymentSection, paymentMethods: newMethods }
                            });
                          }}
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                        />
                        <input
                          type="text"
                          value={method.image}
                          placeholder="Image URL"
                          onChange={(e) => {
                            const newMethods = [...tempData.paymentSection.paymentMethods];
                            newMethods[idx].image = e.target.value;
                            setTempData({ 
                              ...tempData, 
                              paymentSection: { ...tempData.paymentSection, paymentMethods: newMethods }
                            });
                          }}
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-xs"
                        />
                        <button
                          onClick={() => {
                            const newMethods = tempData.paymentSection.paymentMethods.filter((_, i) => i !== idx);
                            setTempData({ 
                              ...tempData, 
                              paymentSection: { ...tempData.paymentSection, paymentMethods: newMethods }
                            });
                          }}
                          className="p-1 text-red-600 hover:bg-red-50 rounded"
                        >
                          <Trash2 className="h-3 w-3" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border border-orange-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">📞 Contact Information</h3>
              <button
                onClick={() => {
                  const newContacts = [...(tempData.contactInfo || []), { title: "New Contact", content: "", link: "", icon: "fas fa-info" }];
                  setTempData({ ...tempData, contactInfo: newContacts });
                }}
                className="flex items-center gap-2 px-3 py-1 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-sm"
              >
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
            <div className="space-y-3">
              {tempData.contactInfo?.map((contact, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-orange-200">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={contact.title}
                      placeholder="Title"
                      onChange={(e) => {
                        const newContacts = [...tempData.contactInfo];
                        newContacts[idx].title = e.target.value;
                        setTempData({ ...tempData, contactInfo: newContacts });
                      }}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <button
                      onClick={() => {
                        const newContacts = tempData.contactInfo.filter((_, i) => i !== idx);
                        setTempData({ ...tempData, contactInfo: newContacts });
                      }}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  {contact.title === "Call Us" ? (
                    <>
                      <input
                        type="text"
                        value={contact.phone1 || ''}
                        placeholder="Phone 1"
                        onChange={(e) => {
                          const newContacts = [...tempData.contactInfo];
                          newContacts[idx].phone1 = e.target.value;
                          setTempData({ ...tempData, contactInfo: newContacts });
                        }}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm mb-2"
                      />
                      <input
                        type="text"
                        value={contact.phone2 || ''}
                        placeholder="Phone 2"
                        onChange={(e) => {
                          const newContacts = [...tempData.contactInfo];
                          newContacts[idx].phone2 = e.target.value;
                          setTempData({ ...tempData, contactInfo: newContacts });
                        }}
                        className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                      />
                    </>
                  ) : (
                    <input
                      type="text"
                      value={contact.content || ''}
                      placeholder="Content"
                      onChange={(e) => {
                        const newContacts = [...tempData.contactInfo];
                        newContacts[idx].content = e.target.value;
                        setTempData({ ...tempData, contactInfo: newContacts });
                      }}
                      className="w-full px-2 py-1 border border-gray-300 rounded text-sm mb-2"
                    />
                  )}
                  <input
                    type="text"
                    value={contact.link || ''}
                    placeholder="Link (optional)"
                    onChange={(e) => {
                      const newContacts = [...tempData.contactInfo];
                      newContacts[idx].link = e.target.value;
                      setTempData({ ...tempData, contactInfo: newContacts });
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-gradient-to-r from-pink-50 to-pink-100 p-5 rounded-lg border border-pink-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-gray-900 text-lg">📱 Social Links</h3>
              <button
                onClick={() => {
                  const newSocial = [...(tempData.socialLinks || []), { name: "New Social", href: "#", bgColor: "bg-gray-500", icon: "fab fa-facebook-f" }];
                  setTempData({ ...tempData, socialLinks: newSocial });
                }}
                className="flex items-center gap-2 px-3 py-1 bg-pink-600 text-white rounded-lg hover:bg-pink-700 text-sm"
              >
                <Plus className="h-4 w-4" /> Add
              </button>
            </div>
            <div className="space-y-3">
              {tempData.socialLinks?.map((social, idx) => (
                <div key={idx} className="bg-white p-3 rounded-lg border border-pink-200">
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={social.name}
                      placeholder="Name"
                      onChange={(e) => {
                        const newSocial = [...tempData.socialLinks];
                        newSocial[idx].name = e.target.value;
                        setTempData({ ...tempData, socialLinks: newSocial });
                      }}
                      className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                    />
                    <button
                      onClick={() => {
                        const newSocial = tempData.socialLinks.filter((_, i) => i !== idx);
                        setTempData({ ...tempData, socialLinks: newSocial });
                      }}
                      className="p-1 text-red-600 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                  <input
                    type="text"
                    value={social.href}
                    placeholder="URL"
                    onChange={(e) => {
                      const newSocial = [...tempData.socialLinks];
                      newSocial[idx].href = e.target.value;
                      setTempData({ ...tempData, socialLinks: newSocial });
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm mb-2"
                  />
                  <input
                    type="text"
                    value={social.icon}
                    placeholder="Icon class (e.g., fab fa-facebook-f)"
                    onChange={(e) => {
                      const newSocial = [...tempData.socialLinks];
                      newSocial[idx].icon = e.target.value;
                      setTempData({ ...tempData, socialLinks: newSocial });
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm mb-2"
                  />
                  <input
                    type="text"
                    value={social.bgColor}
                    placeholder="Gradient (e.g., bg-gradient-to-br from-blue-400 to-blue-600)"
                    onChange={(e) => {
                      const newSocial = [...tempData.socialLinks];
                      newSocial[idx].bgColor = e.target.value;
                      setTempData({ ...tempData, socialLinks: newSocial });
                    }}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-5 rounded-lg border border-gray-200">
            <h3 className="font-bold text-gray-900 text-lg mb-4">© Copyright</h3>
            <div className="space-y-3">
              <textarea
                value={tempData.copyright?.text || ''}
                onChange={(e) => setTempData({
                  ...tempData,
                  copyright: { ...tempData.copyright, text: e.target.value }
                })}
                rows={2}
                placeholder="Copyright text (use {currentYear} for dynamic year)"
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                value={tempData.copyright?.googlePromotionLink?.text || ''}
                placeholder="Google Promotion Link Text"
                onChange={(e) => setTempData({
                  ...tempData,
                  copyright: { ...tempData.copyright, googlePromotionLink: { ...tempData.copyright.googlePromotionLink, text: e.target.value } }
                })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                value={tempData.copyright?.googlePromotionLink?.to || ''}
                placeholder="Google Promotion Link URL"
                onChange={(e) => setTempData({
                  ...tempData,
                  copyright: { ...tempData.copyright, googlePromotionLink: { ...tempData.copyright.googlePromotionLink, to: e.target.value } }
                })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
              <input
                type="text"
                value={tempData.copyright?.endingText || ''}
                placeholder="Ending text"
                onChange={(e) => setTempData({
                  ...tempData,
                  copyright: { ...tempData.copyright, endingText: e.target.value }
                })}
                className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3 pt-4 border-t-2 border-gray-300">
            <button
              onClick={saveChanges}
              className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold"
            >
              <Save className="h-4 w-4" />
              Save Footer
            </button>
            <button
              onClick={cancelEditing}
              className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold"
            >
              <X className="h-4 w-4" />
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Render Preview
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      {/* Header */}
      <div 
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-gray-600"
        onClick={() => toggleSection('footer')}
      >
        <div className="flex items-center gap-3 flex-1">
          <ChevronUp className="h-5 w-5 text-gray-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-900">🦶 Footer Section</h2>
            <p className="text-sm text-gray-500">Frontend UI preview</p>
          </div>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            startEditing();
          }}
          className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex-shrink-0"
        >
          <Edit className="h-4 w-4" />
          Edit
        </button>
      </div>

      {/* Preview */}
      <div className="p-6 bg-gray-900 text-white">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="text-2xl font-bold">
              {footerData.companyInfo.name}
              <span style={{ color: "#F97316" }}>{footerData.companyInfo.accentName}</span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              {footerData.companyInfo.description}
            </p>
            
            {/* Social Icons Preview */}
            <div className="flex space-x-4">
              {footerData.socialLinks.map((social, idx) => (
                <div
                  key={idx}
                  className={`w-12 h-12 ${social.bgColor} flex items-center justify-center text-white text-lg rounded hover:scale-110 transition-transform cursor-pointer`}
                  title={social.name}
                >
                  <i className={social.icon}></i>
                </div>
              ))}
            </div>

            {/* Payment Section Preview */}
            {footerData.paymentSection?.enabled && (
              <div className="mt-8 bg-gradient-to-r from-blue-900 to-purple-900 p-4 rounded-lg shadow-xl">
                <div className="flex flex-col gap-4">
                  <button
                    className={`${footerData.paymentSection.buttonColor} px-5 py-2 rounded text-white font-semibold text-sm hover:opacity-90 transition-opacity duration-300`}
                  >
                    {footerData.paymentSection.buttonText}
                  </button>

                  <div className="grid grid-cols-2 gap-3">
                    {footerData.paymentSection.paymentMethods?.map((method, idx) => (
                      <div key={idx} className="bg-white px-3 py-2 rounded flex items-center justify-center">
                        {method.image ? (
                          <img src={method.image} alt={method.name} className="h-6 w-auto object-contain" />
                        ) : (
                          <span className="text-gray-800 text-xs font-semibold">{method.name}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold" style={{ color: "#F97316" }}>Contact Us</h3>
            <div className="space-y-4 text-sm">
              {footerData.contactInfo.map((contact, idx) => (
                <div key={idx} className="text-gray-300">
                  <i className={`${contact.icon} mr-3`} style={{ color: "#F97316" }}></i>
                  <div className="font-semibold text-xs">{contact.title}</div>
                  <div className="ml-6 mt-1">
                    {contact.title === "Call Us" ? (
                      <div>
                        <div>{contact.phone1}</div>
                        <div>{contact.phone2}</div>
                      </div>
                    ) : (
                      contact.content
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-5 text-center text-gray-300 text-xs">
          <span>
            {footerData.copyright.text}
            <span style={{ color: "#F97316" }}>{footerData.copyright.googlePromotionLink.text}</span>
            {footerData.copyright.endingText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default FooterAdminEditor;