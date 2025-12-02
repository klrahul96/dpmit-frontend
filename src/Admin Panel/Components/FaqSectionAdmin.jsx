// FaqSectionAdmin.jsx - FULL CODE

import React from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronUp, ChevronDown, Phone, MessageSquare } from 'lucide-react';

const FaqSectionAdmin = ({ 
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
  
  // Default FAQs agar database se nahi aaye
  const defaultFaqs = [
    {
      question: "What is SEO and why is it important?",
      answer: "The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies."
    },
    {
      question: "How long does it take to see results from SEO?",
      answer: "SEO results vary, but most websites begin to see noticeable improvements in 3–6 months."
    },
    {
      question: "What is the difference between SEO and PPC?",
      answer: "SEO generates organic traffic while PPC involves paid ads that provide immediate traffic."
    },
    {
      question: "How do you measure the success of SEO campaigns?",
      answer: "We use metrics like organic traffic, keyword ranking, CTR, and ROI."
    },
    {
      question: "How much do your SEO services cost?",
      answer: "It depends on your industry, competition, keywords, and overall goals. We create customized plans based on your business needs."
    },
    {
      question: "What other digital marketing services do you offer?",
      answer: "We offer PPC, content marketing, social media management, and more."
    },
    {
      question: "How do you determine the right keywords for my business?",
      answer: "By analyzing search volume, competition, relevance, and user intent through detailed research."
    },
    {
      question: "How can I contact you for SEO or marketing services?",
      answer: "You can reach out to us via phone at +91 96504 13450 or send a message through our Contact Us page."
    }
  ];

  // Get current FAQs
  const currentFaqs = editingSection === 'faq' 
    ? (tempData.faqs && tempData.faqs.length > 0 ? tempData.faqs : defaultFaqs)
    : (websiteContent.faq.faqs && websiteContent.faq.faqs.length > 0 ? websiteContent.faq.faqs : defaultFaqs);

  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
      <div 
        className="flex items-center justify-between p-5 cursor-pointer hover:bg-gray-50 transition border-l-4 border-red-600"
        onClick={() => toggleSection('faq')}
      >
        <div className="flex items-center gap-3">
          {expandedSections.faq ? <ChevronUp className="h-5 w-5 text-red-600" /> : <ChevronDown className="h-5 w-5 text-red-600" />}
          <div>
            <h2 className="text-xl font-bold text-gray-900">❓ FAQ Section</h2>
            <p className="text-sm text-gray-500">{currentFaqs.length} questions</p>
          </div>
        </div>
        {editingSection !== 'faq' && expandedSections.faq && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              startEditing('faq', {
                ...websiteContent.faq,
                faqs: currentFaqs
              });
            }}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-md hover:shadow-lg"
          >
            <Edit className="h-4 w-4" />
            Edit Section
          </button>
        )}
      </div>

      {expandedSections.faq && (
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          {editingSection === 'faq' ? (
            <div className="space-y-6">
              {/* Section Headers */}
              <div className="grid grid-cols-1 gap-4 bg-white p-5 rounded-lg border border-gray-200">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Subtitle</label>
                  <input
                    type="text"
                    value={tempData.sectionSubtitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionSubtitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="e.g., FAQs"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Title</label>
                  <input
                    type="text"
                    value={tempData.sectionTitle || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionTitle: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="e.g., Frequently Asked Questions"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Section Description</label>
                  <textarea
                    value={tempData.sectionDescription || ''}
                    onChange={(e) => setTempData({ ...tempData, sectionDescription: e.target.value })}
                    rows={2}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                    placeholder="e.g., We have professional experts around world."
                  />
                </div>
              </div>

              {/* Assistance Section */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 text-lg mb-4">📞 Assistance Section</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Assistance Title</label>
                    <input
                      type="text"
                      value={tempData.assistanceTitle || ''}
                      onChange={(e) => setTempData({ ...tempData, assistanceTitle: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="e.g., Still Need Assistance?"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                    <input
                      type="text"
                      value={tempData.phoneNumber || ''}
                      onChange={(e) => setTempData({ ...tempData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="e.g., +919650413450"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">WhatsApp Welcome Message</label>
                    <textarea
                      value={tempData.whatsappMessage || ''}
                      onChange={(e) => setTempData({ ...tempData, whatsappMessage: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                      placeholder="e.g., 🙏 Welcome to DPM IT Solutions. How can we help you today?"
                    />
                    <p className="text-xs text-gray-500 mt-1">This message will appear in the WhatsApp chat popup</p>
                  </div>
                </div>
              </div>

              {/* FAQ Questions */}
              <div className="border-t pt-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-gray-900 text-lg">
                    FAQ Questions ({tempData.faqs?.length || 0})
                  </h3>
                  <button
                    onClick={() => {
                      const newFaqs = [...(tempData.faqs || []), {
                        question: "New Question?",
                        answer: "Answer here..."
                      }];
                      setTempData({ ...tempData, faqs: newFaqs });
                    }}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-md"
                  >
                    <Plus className="h-4 w-4" />
                    Add Question
                  </button>
                </div>

                <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                  {tempData.faqs?.map((faq, idx) => (
                    <div key={idx} className="bg-white p-5 border-2 border-gray-200 rounded-lg hover:border-red-300 transition">
                      <div className="flex items-center justify-between mb-4">
                        <h4 className="font-bold text-gray-900 flex items-center gap-2">
                          <span className="bg-red-100 text-red-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                            {idx + 1}
                          </span>
                          Question {idx + 1}
                        </h4>
                        <button
                          onClick={() => {
                            const newFaqs = tempData.faqs.filter((_, i) => i !== idx);
                            setTempData({ ...tempData, faqs: newFaqs });
                          }}
                          className="text-red-600 hover:text-red-700 hover:bg-red-50 p-2 rounded transition"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Question Text</label>
                          <input
                            type="text"
                            value={faq.question}
                            onChange={(e) => {
                              const newFaqs = [...tempData.faqs];
                              newFaqs[idx].question = e.target.value;
                              setTempData({ ...tempData, faqs: newFaqs });
                            }}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your question here..."
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-gray-600 mb-1">Answer Text</label>
                          <textarea
                            value={faq.answer}
                            onChange={(e) => {
                              const newFaqs = [...tempData.faqs];
                              newFaqs[idx].answer = e.target.value;
                              setTempData({ ...tempData, faqs: newFaqs });
                            }}
                            rows={3}
                            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                            placeholder="Enter your answer here..."
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
                  onClick={() => saveChanges('faq')}
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-semibold shadow-md hover:shadow-lg transition"
                >
                  <Save className="h-4 w-4" />
                  Save FAQ Section
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
              {/* Section Info */}
              <div className="bg-gradient-to-r from-red-50 to-orange-50 p-5 rounded-lg border border-red-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Subtitle</p>
                    <p className="text-sm font-semibold text-gray-900">{websiteContent.faq.sectionSubtitle}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Section Title</p>
                    <p className="text-sm font-semibold text-gray-900">{websiteContent.faq.sectionTitle}</p>
                  </div>
                </div>
                <div className="mt-3">
                  <p className="text-xs text-gray-500 font-medium uppercase mb-1">Description</p>
                  <p className="text-sm text-gray-700">{websiteContent.faq.sectionDescription}</p>
                </div>
              </div>

              {/* Assistance Info */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-red-600" />
                  Assistance Section
                </h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Assistance Title</p>
                    <p className="text-sm font-semibold text-gray-900">{websiteContent.faq.assistanceTitle}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1">Contact Number</p>
                    <p className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                      <Phone className="h-4 w-4 text-red-600" />
                      {websiteContent.faq.phoneNumber}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-500 font-medium uppercase mb-1 flex items-center gap-2">
                      <MessageSquare className="h-4 w-4 text-green-600" />
                      WhatsApp Welcome Message
                    </p>
                    <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{websiteContent.faq.whatsappMessage}</p>
                  </div>
                </div>
              </div>

              {/* FAQ Questions Preview */}
              <div className="bg-white p-5 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-gray-900">FAQ Questions</h3>
                  <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold">
                    {currentFaqs.length} Questions
                  </span>
                </div>
                <div className="space-y-3 max-h-[400px] overflow-y-auto pr-2">
                  {currentFaqs.map((faq, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-lg border-l-4 border-red-600 hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <span className="bg-red-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-semibold text-gray-900 mb-2">{faq.question}</p>
                          <p className="text-sm text-gray-600">{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Summary Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">{currentFaqs.length}</p>
                  <p className="text-sm opacity-90">Total FAQs</p>
                </div>
                <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">1</p>
                  <p className="text-sm opacity-90">Phone Number</p>
                </div>
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold">2</p>
                  <p className="text-sm opacity-90">Contact Options</p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FaqSectionAdmin;