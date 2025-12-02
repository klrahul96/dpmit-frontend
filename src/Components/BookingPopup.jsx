import React, { useState } from 'react';
import { X } from "lucide-react";

const BookingPopup = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          subject: `New Booking Request - ${formData.service}`,
        })
      });

      const result = await response.json();

      if (result.success) {
        alert('Thank you! We will contact you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
        setTimeout(() => {
          onClose();
        }, 500);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to submit form. Please check your connection.');
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-opacity-60 z-[100] flex items-center justify-center p-4 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg transform transition-all duration-300 scale-100">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-5 rounded-t-2xl flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Get Started Today</h3>
            <p className="text-blue-100 text-sm mt-1">Let's discuss your project</p>
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="text-white hover:text-gray-200 transition-colors bg-white/20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-white/30"
            aria-label="Close popup"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 md:p-6 space-y-3 md:space-y-4">
          {/* Row 1: Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1.5 text-sm">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1.5 text-sm">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                placeholder="your@email.com"
              />
            </div>
          </div>

          {/* Row 2: Phone and Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1.5 text-sm">Phone *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm"
                placeholder="+91 XXXXX XXXXX"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1.5 text-sm">Service *</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-sm bg-white"
              >
                <option value="">Select service</option>
                <option value="Website Development">🌐 Website Development</option>
                <option value="SEO Services">🔍 SEO Services</option>
                <option value="Social Media Marketing">📱 Social Media Marketing</option>
                <option value="Digital Marketing">📢 Digital Marketing</option>
                <option value="App Development">📱 App Development</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1.5 text-sm">Project Details</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={2}
              className="w-full px-3 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none transition-all text-sm"
              placeholder="Tell us about your project requirements..."
            ></textarea>
          </div>

          {/* Trust Badge */}
          <div className="bg-gray-50 rounded-lg p-2.5 md:p-3 border-l-4 border-blue-500">
            <div className="flex items-center space-x-2 text-xs md:text-sm text-gray-600">
              <span className="text-blue-500">🛡️</span>
              <span>We'll respond within 24 hours</span>
            </div>
          </div>

          {/* Modal Footer */}
          <div className="flex space-x-3 pt-1 md:pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-all font-medium text-sm"
              disabled={isSubmitting}
            >
              Maybe Later
            </button>
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="flex-1 px-4 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-lg transition-all font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? '⏳ Sending...' : ' Get Started'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPopup;