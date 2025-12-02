import React from 'react';

const EnquiryFormPopup = ({ 
  showEnquiryForm, 
  hideEnquiryForm, 
  formStatus, 
  isSubmitting,
  setIsSubmitting,
  setFormStatus
}) => {
  const WEB3FORMS_ACCESS_KEY = "19c14e84-11c8-440d-ae32-fe5413a0dcec";

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormStatus({ type: '', message: '' });

    const formData = new FormData(e.target);
    const data = {
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: "Enquiry - New Message from Website",
      name: formData.get('fullName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: formData.get('service'),
      message: formData.get('message'),
      from_name: formData.get('fullName'),
      botcheck: formData.get('botcheck') || ""
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (result.success) {
        setFormStatus({ 
          type: 'success', 
          message: 'Thank you! Your message has been sent successfully. We will contact you soon.' 
        });
        
        setTimeout(() => {
          hideEnquiryForm();
          e.target.reset();
        }, 3000);
      } else {
        throw new Error(result.message || 'Something went wrong!');
      }
    } catch (error) {
      setFormStatus({ 
        type: 'error', 
        message: 'Sorry, there was an error sending your message. Please try again later or contact us directly.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!showEnquiryForm) return null;

  return (
    <div className="fixed inset-0 bg-opacity-70 flex items-center justify-start z-50 backdrop-blur-md">
      <div className="bg-gradient-to-br from-white via-gray-50 to-blue-50 rounded-r-3xl shadow-2xl p-6 w-full max-w-md h-auto max-h-[90vh] overflow-y-auto transform transition-all duration-500 ease-in-out translate-x-0 border-r-4 border-gradient-to-b from-blue-400 to-purple-600 md:max-h-[90vh] sm:max-h-[75vh]">
        <div className="flex justify-between items-center mb-4 pb-3 border-b-2 border-gradient-to-r from-blue-400 to-purple-600">
          <div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">Quick Enquiry</h2>
            <p className="text-xs text-gray-600 font-medium">Get in touch with us instantly</p>
          </div>
          <button 
            onClick={hideEnquiryForm}
            className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-full p-2 transition-all duration-300 cursor-pointer hover:rotate-90 transform"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {formStatus.message && (
          <div className={`mb-3 p-3 rounded-lg text-sm font-medium ${
            formStatus.type === 'success' 
              ? 'bg-green-100 text-green-800 border border-green-200' 
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}>
            {formStatus.message}
          </div>
        )}

        <form onSubmit={handleEnquirySubmit}>
          <div className="space-y-3">
            <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

            <div className="relative">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                <span className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                  <span>Full Name</span>
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                placeholder="Enter your full name"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                <span className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <span>Email Address</span>
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                placeholder="Enter your email"
                required
                disabled={isSubmitting}
              />
            </div>
            
            <div className="relative">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                <span className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  <span>Phone Number</span>
                  <span className="text-red-500">*</span>
                </span>
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-text bg-white shadow-sm text-sm"
                placeholder="Enter your phone number"
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                <span className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zM8 5a1 1 0 011-1h2a1 1 0 011 1v1H8V5zM9 13a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
                  </svg>
                  <span>Service Required</span>
                </span>
              </label>
              <select 
                name="service"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 cursor-pointer bg-white shadow-sm text-sm"
                disabled={isSubmitting}
              >
                <option value="">Select service</option>
                <option value="website-development">🌐 Website Development</option>
                <option value="seo">🔍 SEO Services</option>
                <option value="social-media-marketing">📱 Social Media Marketing</option>
                <option value="digital-marketing">📢 Digital Marketing</option>
                <option value="app-development">📱 App Development</option>
              </select>
            </div>
            
            <div className="relative">
              <label className="block text-xs font-bold text-gray-700 mb-1">
                <span className="flex items-center space-x-1">
                  <svg className="w-3 h-3 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"/>
                  </svg>
                  <span>Message</span>
                </span>
              </label>
              <textarea
                name="message"
                rows="2"
                className="w-full px-3 py-2 border-2 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-500 transition-all duration-300 hover:border-gray-300 resize-none cursor-text bg-white shadow-sm text-sm"
                placeholder="Tell us about your requirements..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            <div className="flex flex-col gap-2 pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-2.5 px-4 rounded-lg hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 transition-all duration-500 font-bold shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? 'Sending...' : 'Submit Enquiry'}
              </button>
              <button
                type="button"
                onClick={hideEnquiryForm}
                disabled={isSubmitting}
                className="w-full bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300 font-semibold border-2 border-gray-200 hover:border-gray-300 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1 h-full" onClick={hideEnquiryForm}></div>
    </div>
  );
};

export default EnquiryFormPopup;