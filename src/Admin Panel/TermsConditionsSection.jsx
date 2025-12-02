import React, { useState } from 'react';

const AdminTermsConditions = () => {
  const [termsData, setTermsData] = useState({
    headerTitle: "Terms & Conditions",
    headerSubtitle: "DPM IT SOLUTIONS – Your Trusted Digital Partner",
    introduction: "Welcome to DPM IT Solutions. Our terms and conditions are crucial for using our hosting services. Please read them carefully. If you have any questions, feel free to contact us. DPM IT Solutions reserves the right to modify these terms at any time to ensure client security.",
    sections: [
      {
        id: 1,
        title: "Change in Packages and Pricing",
        content: "DPM IT Solutions may alter pricing and service offerings without prior notice. New prices apply to new deals, while existing orders remain at the previous rates. Your account setup occurs after payment confirmation.",
        type: "content"
      },
      {
        id: 2,
        title: "Late/Non-Payment",
        content: "",
        list: [
          "Rs. 10000 administrative fee for reactivating cancelled accounts.",
          "Technical support ceases after 10 days of overdue payments.",
          "Account and services will be suspended after 14 days.",
          "Data will be deleted after 30 days of non-payment.",
          "Chargebacks will lead to immediate account termination and data deletion."
        ],
        type: "list"
      },
      {
        id: 3,
        title: "Regular Updates of Details",
        content: "It's your responsibility to keep your contact information up to date. We are not liable for any consequences from outdated details.",
        type: "content"
      },
      {
        id: 4,
        title: "Spam Policy",
        content: "We have a zero-tolerance policy for spam. Violations may result in immediate account termination and legal action. Clients and resellers must ensure compliance.",
        type: "content"
      },
      {
        id: 5,
        title: "Prohibited Uses",
        content: "Clients must not engage in illegal activities, use services for harmful purposes, infringe on copyrights, or compromise network security.",
        type: "content"
      },
      {
        id: 6,
        title: "Loss of Backup and Data",
        content: "Using our services is at your own risk. Clients must maintain their own backups. We perform weekly backups for server restoration.",
        type: "content"
      },
      {
        id: 7,
        title: "Ownership Rights",
        content: "",
        type: "items",
        items: [
          { 
            title: "Web Server and CMS", 
            desc: "Clients do not own these; they are provided for use." 
          },
          { 
            title: "HTML/CSS/JavaScript", 
            desc: "Clients own this content upon project completion and payment." 
          },
          { 
            title: "Text and Photography", 
            desc: "Clients own content they create." 
          },
          { 
            title: "Domain Name", 
            desc: "Clients have rights of use but do not own the domain outright." 
          }
        ]
      },
      {
        id: 8,
        title: "Support",
        content: "Support is provided via email:",
        type: "emails",
        emails: [
          { label: "Contact Us:", email: "+91 9650413450" },
          { label: "Support:", email: "info@dpmitsolutions.com" }
        ]
      },
      {
        id: 9,
        title: "Support Policy",
        content: "Support for control panel issues is provided within certain limits, covering basic functions such as adding or deleting accounts, DNS management, and password changes. Limited assistance is available for third-party software like PHP-Nuke, Advanced Guest Book, phpBB, and osCommerce. DPM IT Solutions does not support free add-on scripts or software errors related to third-party applications, which must be reported directly to the respective vendors.",
        type: "content"
      },
      {
        id: 10,
        title: "Third-Party Software Installation",
        content: "Users assume full responsibility for any third-party software installed on their web space. If security issues arise from such software, the account may be terminated without prior notice.",
        type: "content"
      },
      {
        id: 11,
        title: "Limitations of Liability",
        content: "DPM IT Solutions is not liable for any damages, including incidental or consequential losses, resulting from server downtime or unavailability. We are not responsible for compensation claims related to the removal of any website from our servers.",
        type: "content"
      },
      {
        id: 12,
        title: "Copyright Policy",
        content: "DPM IT Solutions holds exclusive rights to all information, materials, services, and content protected by copyright and intellectual property laws. Any unauthorized reproduction of this material may result in legal action.",
        type: "content"
      },
      {
        id: 13,
        title: "Guidelines for Use of Site Information and Materials",
        content: "Viewing, downloading, printing, or distributing materials from DPM IT Solutions is permitted only for personal or informational use. Commercial use requires prior written consent from DPM IT Solutions. Removal of any proprietary notices or copyright information from documents is strictly prohibited.",
        type: "content"
      },
      {
        id: 14,
        title: "Warranty Disclaimer",
        content: "All materials and services on this site are provided 'as is' without any warranty, either express or implied. DPM IT Solutions does not guarantee that services will meet your requirements or that they will be free of errors or interruptions.",
        type: "content"
      },
      {
        id: 15,
        title: "Trademark Policy",
        content: "All logos, trademarks, and service marks displayed on this website are the exclusive property of DPM IT Solutions. Unauthorized use, whether personal or commercial, is strictly prohibited without written permission.",
        type: "content"
      },
      {
        id: 16,
        title: "Payment and Refund Policy",
        content: "All payments must be made using the standard methods established by DPM IT Solutions. Given our commitment to high client interaction and approval processes, we do not offer full or partial refunds under any circumstances. Once an order is placed, it is processed immediately and cannot be cancelled.",
        type: "content"
      },
      {
        id: 17,
        title: "Dispute Resolution and Jurisdiction",
        content: "Any legal disputes arising in relation to DPM IT Solutions will be handled exclusively in Delhi. All matters will be subject to the relevant laws in force in New Delhi, and jurisdiction is limited to the courts located there.",
        type: "content"
      },
      {
        id: 18,
        title: "Governing Law",
        content: "This Agreement, along with any disputes arising from your use of DPM IT Solutions, is governed by the laws of India. By using the site and becoming a member of DPM IT Solutions, you accept this Agreement, which constitutes the entire understanding between you and DPM IT Solutions regarding the use of our services.",
        type: "content"
      },
      {
        id: 19,
        title: "Supported Technologies and Programming Languages",
        content: "DPM IT Solutions provides development, deployment, and maintenance support for multiple technologies including ReactJS, JavaScript, Node.js, Express, Python, PHP, HTML5, CSS3, MySQL, and Firebase. Any custom application, frontend, backend, or API work must adhere to our service guidelines. Clients must ensure that external libraries or unverified plugins used in React or JavaScript applications are secure and updated to avoid performance or security issues.",
        type: "content"
      }
    ],
    disclaimer: "The terms and conditions outlined by DPM IT Solutions govern your use of our services. By accessing our services, you acknowledge that you have read, understood, and agreed to comply with these terms. DPM IT Solutions is not liable for any direct or indirect damages arising from your use of our services, including but not limited to data loss or service interruptions. We reserve the right to modify these terms at any time without prior notice.",
    contact: {
      phone1: "+91 9650413450",
      phone2: "+91 7067300346",
      email: "info@dpmitsolutions.com",
      address: "Tilak Nagar, New Delhi - 110018"
    }
  });

  const [newSection, setNewSection] = useState({
    title: "",
    content: "",
    type: "content"
  });

  const [newListItem, setNewListItem] = useState("");
  const [newItemTitle, setNewItemTitle] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");
  const [newEmailLabel, setNewEmailLabel] = useState("");
  const [newEmailValue, setNewEmailValue] = useState("");

  const updateHeaderTitle = (value) => {
    setTermsData(prev => ({...prev, headerTitle: value}));
  };

  const updateHeaderSubtitle = (value) => {
    setTermsData(prev => ({...prev, headerSubtitle: value}));
  };

  const updateIntroduction = (value) => {
    setTermsData(prev => ({...prev, introduction: value}));
  };

  const updateDisclaimer = (value) => {
    setTermsData(prev => ({...prev, disclaimer: value}));
  };

  const updateSectionTitle = (sectionId, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, title: value } : section
      )
    }));
  };

  const updateSectionContent = (sectionId, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId ? { ...section, content: value } : section
      )
    }));
  };

  const updateListItem = (sectionId, itemIndex, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              list: section.list.map((item, idx) =>
                idx === itemIndex ? value : item
              )
            }
          : section
      )
    }));
  };

  const addListItem = (sectionId) => {
    if (newListItem.trim()) {
      setTermsData(prev => ({
        ...prev,
        sections: prev.sections.map(section =>
          section.id === sectionId
            ? {
                ...section,
                list: [...(section.list || []), newListItem]
              }
            : section
        )
      }));
      setNewListItem("");
    }
  };

  const removeListItem = (sectionId, itemIndex) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              list: section.list.filter((_, idx) => idx !== itemIndex)
            }
          : section
      )
    }));
  };

  const updateItemTitle = (sectionId, itemIndex, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item, idx) =>
                idx === itemIndex ? { ...item, title: value } : item
              )
            }
          : section
      )
    }));
  };

  const updateItemDesc = (sectionId, itemIndex, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.map((item, idx) =>
                idx === itemIndex ? { ...item, desc: value } : item
              )
            }
          : section
      )
    }));
  };

  const addItem = (sectionId) => {
    if (newItemTitle.trim() && newItemDesc.trim()) {
      setTermsData(prev => ({
        ...prev,
        sections: prev.sections.map(section =>
          section.id === sectionId
            ? {
                ...section,
                items: [...(section.items || []), { 
                  title: newItemTitle, 
                  desc: newItemDesc 
                }]
              }
            : section
        )
      }));
      setNewItemTitle("");
      setNewItemDesc("");
    }
  };

  const removeItem = (sectionId, itemIndex) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              items: section.items.filter((_, idx) => idx !== itemIndex)
            }
          : section
      )
    }));
  };

  const updateEmailLabel = (sectionId, emailIndex, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              emails: section.emails.map((email, idx) =>
                idx === emailIndex ? { ...email, label: value } : email
              )
            }
          : section
      )
    }));
  };

  const updateEmailValue = (sectionId, emailIndex, value) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              emails: section.emails.map((email, idx) =>
                idx === emailIndex ? { ...email, email: value } : email
              )
            }
          : section
      )
    }));
  };

  const addEmail = (sectionId) => {
    if (newEmailLabel.trim() && newEmailValue.trim()) {
      setTermsData(prev => ({
        ...prev,
        sections: prev.sections.map(section =>
          section.id === sectionId
            ? {
                ...section,
                emails: [...(section.emails || []), { 
                  label: newEmailLabel, 
                  email: newEmailValue 
                }]
              }
            : section
        )
      }));
      setNewEmailLabel("");
      setNewEmailValue("");
    }
  };

  const removeEmail = (sectionId, emailIndex) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.map(section =>
        section.id === sectionId
          ? {
              ...section,
              emails: section.emails.filter((_, idx) => idx !== emailIndex)
            }
          : section
      )
    }));
  };

  const addNewSection = () => {
    if (newSection.title.trim()) {
      const newSectionObj = {
        id: Date.now(),
        title: newSection.title,
        content: newSection.content,
        type: newSection.type,
        ...(newSection.type === 'list' && { list: ["New list item"] }),
        ...(newSection.type === 'items' && { items: [{ title: "New Item", desc: "Item description" }] }),
        ...(newSection.type === 'emails' && { emails: [{ label: "New Label", email: "email@example.com" }] })
      };

      setTermsData(prev => ({
        ...prev,
        sections: [...prev.sections, newSectionObj]
      }));

      setNewSection({
        title: "",
        content: "",
        type: "content"
      });
    }
  };

  const removeSection = (sectionId) => {
    setTermsData(prev => ({
      ...prev,
      sections: prev.sections.filter(section => section.id !== sectionId)
    }));
  };

  const updateContactInfo = (field, value) => {
    setTermsData(prev => ({
      ...prev,
      contact: {
        ...prev.contact,
        [field]: value
      }
    }));
  };

  const saveData = () => {
    console.log("Data saved:", termsData);
    alert("✅ Data saved locally! Ready for backend integration.");
    // Later: Add API call here
  };

  const downloadJSON = () => {
    const dataStr = JSON.stringify(termsData, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'terms-conditions.json';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Terms & Conditions Admin Panel</h1>
          <button
            onClick={saveData}
            className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
          >
            Save Changes
          </button>
        </div>
        
        {/* Header Section Editor */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Header Section</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Main Title</label>
              <input
                type="text"
                value={termsData.headerTitle}
                onChange={(e) => updateHeaderTitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <input
                type="text"
                value={termsData.headerSubtitle}
                onChange={(e) => updateHeaderSubtitle(e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        {/* Introduction Editor */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <textarea
            value={termsData.introduction}
            onChange={(e) => updateIntroduction(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Sections Editor */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Terms Sections ({termsData.sections.length})</h2>

          {/* Existing Sections */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto border rounded-lg p-4 bg-gray-50">
            {termsData.sections && termsData.sections.length > 0 ? 
              termsData.sections.map((section) => (
              <div key={section.id} className="mb-4 p-4 border rounded-lg bg-white shadow">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-medium">Section {section.id}</h3>
                    <p className="text-sm text-gray-600">{section.title}</p>
                  </div>
                  <button
                    onClick={() => removeSection(section.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
                  >
                    Remove
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title</label>
                    <input
                      type="text"
                      value={section.title}
                      onChange={(e) => updateSectionTitle(section.id, e.target.value)}
                      className="w-full p-2 border rounded text-sm"
                    />
                  </div>

                  {section.type === 'content' && (
                    <div>
                      <label className="block text-sm font-medium mb-1">Content</label>
                      <textarea
                        value={section.content}
                        onChange={(e) => updateSectionContent(section.id, e.target.value)}
                        rows="2"
                        className="w-full p-2 border rounded text-sm"
                      />
                    </div>
                  )}

                  {section.type === 'list' && section.list && (
                    <div>
                      <label className="block text-sm font-medium mb-2">List Items ({section.list.length})</label>
                      <div className="space-y-2">
                        {section.list.map((item, index) => (
                          <div key={index} className="flex gap-2">
                            <input
                              type="text"
                              value={item}
                              onChange={(e) => updateListItem(section.id, index, e.target.value)}
                              className="flex-1 p-2 border rounded text-sm"
                            />
                            <button
                              onClick={() => removeListItem(section.id, index)}
                              className="bg-red-500 text-white px-2 rounded hover:bg-red-600 text-sm"
                            >
                              ✕
                            </button>
                          </div>
                        ))}
                      </div>
                      <div className="flex gap-2 mt-2">
                        <input
                          type="text"
                          placeholder="New list item"
                          value={newListItem}
                          onChange={(e) => setNewListItem(e.target.value)}
                          className="flex-1 p-2 border rounded text-sm"
                        />
                        <button
                          onClick={() => addListItem(section.id)}
                          className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 text-sm"
                        >
                          Add
                        </button>
                      </div>
                    </div>
                  )}

                  {section.type === 'items' && section.items && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Items ({section.items.length})</label>
                      <div className="space-y-2">
                        {section.items.map((item, index) => (
                          <div key={index} className="p-2 border rounded bg-gray-100">
                            <div className="flex justify-between mb-1">
                              <input
                                type="text"
                                placeholder="Item Title"
                                value={item.title}
                                onChange={(e) => updateItemTitle(section.id, index, e.target.value)}
                                className="flex-1 p-1 border rounded text-sm"
                              />
                              <button
                                onClick={() => removeItem(section.id, index)}
                                className="bg-red-500 text-white px-2 rounded hover:bg-red-600 text-xs ml-2"
                              >
                                ✕
                              </button>
                            </div>
                            <textarea
                              placeholder="Item Description"
                              value={item.desc}
                              onChange={(e) => updateItemDesc(section.id, index, e.target.value)}
                              rows="1"
                              className="w-full p-1 border rounded text-sm"
                            />
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 p-2 border rounded bg-gray-100">
                        <input
                          type="text"
                          placeholder="Item Title"
                          value={newItemTitle}
                          onChange={(e) => setNewItemTitle(e.target.value)}
                          className="w-full p-1 border rounded text-sm mb-1"
                        />
                        <textarea
                          placeholder="Item Description"
                          value={newItemDesc}
                          onChange={(e) => setNewItemDesc(e.target.value)}
                          rows="1"
                          className="w-full p-1 border rounded text-sm mb-1"
                        />
                        <button
                          onClick={() => addItem(section.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                        >
                          Add Item
                        </button>
                      </div>
                    </div>
                  )}

                  {section.type === 'emails' && section.emails && (
                    <div>
                      <label className="block text-sm font-medium mb-2">Contact Emails ({section.emails.length})</label>
                      <div className="space-y-2">
                        {section.emails.map((email, index) => (
                          <div key={index} className="p-2 border rounded bg-gray-100">
                            <input
                              type="text"
                              placeholder="Label"
                              value={email.label}
                              onChange={(e) => updateEmailLabel(section.id, index, e.target.value)}
                              className="w-full p-1 border rounded text-sm mb-1"
                            />
                            <div className="flex gap-2">
                              <input
                                type="text"
                                placeholder="Email/Phone"
                                value={email.email}
                                onChange={(e) => updateEmailValue(section.id, index, e.target.value)}
                                className="flex-1 p-1 border rounded text-sm"
                              />
                              <button
                                onClick={() => removeEmail(section.id, index)}
                                className="bg-red-500 text-white px-2 rounded hover:bg-red-600 text-sm"
                              >
                                ✕
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-2 p-2 border rounded bg-gray-100">
                        <input
                          type="text"
                          placeholder="Label"
                          value={newEmailLabel}
                          onChange={(e) => setNewEmailLabel(e.target.value)}
                          className="w-full p-1 border rounded text-sm mb-1"
                        />
                        <input
                          type="text"
                          placeholder="Email/Phone"
                          value={newEmailValue}
                          onChange={(e) => setNewEmailValue(e.target.value)}
                          className="w-full p-1 border rounded text-sm mb-1"
                        />
                        <button
                          onClick={() => addEmail(section.id)}
                          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 text-sm"
                        >
                          Add Contact
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))
            : (
              <p className="text-gray-500 text-center py-4">No sections available.</p>
            )}
          </div>
        </div>

        {/* Disclaimer Editor */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
          <textarea
            value={termsData.disclaimer}
            onChange={(e) => updateDisclaimer(e.target.value)}
            rows="4"
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Contact Info Editor */}
        <div className="mb-8 p-4 border rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Phone 1</label>
              <input
                type="text"
                value={termsData.contact?.phone1 || ''}
                onChange={(e) => updateContactInfo('phone1', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone 2</label>
              <input
                type="text"
                value={termsData.contact?.phone2 || ''}
                onChange={(e) => updateContactInfo('phone2', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="text"
                value={termsData.contact?.email || ''}
                onChange={(e) => updateContactInfo('email', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Address</label>
              <input
                type="text"
                value={termsData.contact?.address || ''}
                onChange={(e) => updateContactInfo('address', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminTermsConditions;