import React, { useState, useEffect } from 'react';

const FloatingButtons = () => {
  // STEP 1: Add siteSettings state
  const [siteSettings, setSiteSettings] = useState(null);
  
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [message, setMessage] = useState('');
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  // STEP 2: Fetch settings from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/content/settings")
      .then(res => res.json())
      .then(resJson => setSiteSettings(resJson.data))
      .catch(err => console.log("Settings Fetch Error:", err));
  }, []);

  // STEP 3: Use backend phone number or fallback to default
  const phoneNumber = siteSettings?.floatingButtons?.callNumber || "+919650413450";

  useEffect(() => {
    if (!hasAutoOpened) {
      const timer = setTimeout(() => {
        setShowWhatsAppChat(true);
        setHasAutoOpened(true);
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [hasAutoOpened]);

  const handleSendMessage = () => {
    if (message.trim()) {
      // STEP 4: Use WhatsApp number from backend settings
      const whatsappNumber = siteSettings?.floatingButtons?.whatsappNumber || phoneNumber;
      window.open(`https://wa.me/${whatsappNumber.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
      setShowWhatsAppChat(false);
      setMessage('');
    }
  };

  const closeChat = () => {
    setShowWhatsAppChat(false);
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Left side - Call actions */}
      <div className="absolute left-4 sm:left-6 bottom-6 flex flex-col gap-4 pointer-events-auto">
        <div 
          onClick={() => window.open(`tel:${phoneNumber}`, '_self')}
          className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-2xl hover:shadow-blue-500/50 hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
          aria-label="Call us"
          title="Call us"
        >
          <svg className="w-7 sm:w-8 h-7 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        </div>
      </div>

      {/* Right side - WhatsApp actions */}
      <div className="absolute right-4 sm:right-6 bottom-6 flex flex-col gap-4 pointer-events-auto">
        <div 
          onClick={() => setShowWhatsAppChat(!showWhatsAppChat)}
          className="flex items-center justify-center w-14 sm:w-16 h-14 sm:h-16 rounded-full bg-gradient-to-r from-green-500 to-green-600 shadow-2xl hover:shadow-green-500/50 hover:scale-110 transition-all duration-300 cursor-pointer animate-pulse"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <svg className="w-8 sm:w-9 h-8 sm:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
        </div>
      </div>

      {/* WhatsApp Chat Pop-up */}
      {showWhatsAppChat && (
        <div className="fixed sm:absolute right-4 sm:right-6 bottom-24 sm:bottom-28 w-[calc(100vw-2rem)] sm:w-96 max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden pointer-events-auto transform transition-all duration-300 animate-in">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-10 sm:w-12 h-10 sm:h-12 bg-white rounded-full flex items-center justify-center font-bold text-green-600 text-sm sm:text-lg shadow-lg flex-shrink-0">
                D
              </div>
              <div className="min-w-0">
                <h3 className="text-white font-semibold text-base sm:text-lg truncate">DPM IT Solutions</h3>
                <p className="text-green-100 text-xs flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse flex-shrink-0"></span>
                  <span className="truncate">Always Online</span>
                </p>
              </div>
            </div>
            <button 
              onClick={closeChat}
              className="text-white hover:bg-white/20 rounded-full p-2 transition-colors flex-shrink-0 ml-2"
              aria-label="Close chat"
            >
              <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="p-3 sm:p-4 bg-gradient-to-b from-green-50 to-white max-h-64 sm:max-h-80 overflow-y-auto space-y-3">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                D
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 sm:p-4 shadow-md max-w-xs">
                <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                  🙏 Welcome to <span className="font-semibold">DPM IT Solutions</span>
                  <br /><br />
                  How can we help you today?
                  <br /><br />
                  🔹 Web Designing<br />
                  🔹 Digital Marketing
                  <br /><br />
                  Feel free to ask any questions! 😊
                </p>
                <p className="text-xs text-gray-400 mt-2">Just now</p>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                💡
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none p-3 sm:p-4 shadow-md max-w-xs">
                <p className="text-gray-800 text-xs sm:text-sm leading-relaxed">
                  Free consultation available! Contact us today 📞
                </p>
                <p className="text-xs text-gray-400 mt-2">Now</p>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-3 sm:p-4 bg-gray-50 border-t border-gray-200 flex gap-2">
            <input 
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write message..."
              className="flex-1 border-2 border-gray-200 rounded-xl px-3 sm:px-4 py-2 sm:py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-xs sm:text-sm"
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSendMessage();
                }
              }}
            />
            <button 
              onClick={handleSendMessage}
              className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl px-4 sm:px-6 py-2 sm:py-3 font-semibold hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0 text-xs sm:text-sm"
              disabled={!message.trim()}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;