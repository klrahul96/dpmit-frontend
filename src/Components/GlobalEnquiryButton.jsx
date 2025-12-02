import React, { useState } from 'react';
import EnquiryFormPopup from './EnquiryFormPopup';

const GlobalEnquiryButton = () => {
  const [showEnquiryForm, setShowEnquiryForm] = useState(false);
  const [formStatus, setFormStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const showEnquiryNowForm = () => {
    setShowEnquiryForm(true);
    setFormStatus({ type: '', message: '' });
  };

  const hideEnquiryForm = () => {
    setShowEnquiryForm(false);
    setFormStatus({ type: '', message: '' });
  };

  return (
    <>
      {/* Fixed Enquiry Now Button - Left Side */}
      <div className="fixed left-0 top-1/2 transform -translate-y-1/2 z-50">
        <button
          onClick={showEnquiryNowForm}
          className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-r-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 animate-pulse cursor-pointer group"
          style={{
            writingMode: 'vertical-rl',
            textOrientation: 'mixed'
          }}
        >
          <div className="flex flex-col items-center">
            <span className="font-bold text-lg">ENQUIRY NOW</span>
          </div>
        </button>
      </div>

      {/* Enquiry Form Popup Component */}
      <EnquiryFormPopup
        showEnquiryForm={showEnquiryForm}
        hideEnquiryForm={hideEnquiryForm}
        formStatus={formStatus}
        isSubmitting={isSubmitting}
        setIsSubmitting={setIsSubmitting}
        setFormStatus={setFormStatus}
      />
    </>
  );
};

export default GlobalEnquiryButton;