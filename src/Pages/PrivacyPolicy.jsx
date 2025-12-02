import React, { useEffect, useState } from 'react';

const PrivacyPolicy = () => {
  const [policy, setPolicy] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/content/privacyPolicy")
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch policy');
        return res.json();
      })
      .then(data => {
        setPolicy(data.data); // 🔥 FIX #1 (main issue solved)
        setLoading(false);
      })
      .catch(err => {
        console.error('Error:', err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
          <p className="text-white mt-4">Loading Privacy Policy...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-500 text-lg">Error: {error}</p>
          <p className="text-gray-400 mt-2">Please try refreshing the page</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      
      {/* Light animation background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>


      {/* PAGE HEADER (Untouched UI) */}
      <div className="relative z-10">
        <div className="relative overflow-hidden py-12 sm:py-16 md:py-24 bg-gradient-to-r from-gray-900 to-gray-800">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-purple-500/10"></div>
          <div className="relative px-4 sm:px-6 md:px-12 lg:px-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              Privacy Policy
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6">
              DPM IT SOLUTIONS – Your Trusted Digital Partner
            </p>
            <div className="h-1 w-32 sm:w-40 bg-orange-500"></div>
          </div>
        </div>


        {/* PRIVACY POLICY MAIN SECTION */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-6 md:py-8">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">
              Privacy Policy
            </h2>

            {/* 🔥 FIX #2 Removed default text fallback */}
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl">
              {policy?.introText}
            </p>

            <p className="text-gray-300 mb-8 sm:mb-10 font-semibold text-base sm:text-lg">We assure you that:</p>

            {/* Dynamic Privacy Points */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              {policy?.privacyPoints?.map((item) => (
                <div key={item.id} className="p-4 sm:p-5 md:p-6 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <div className="flex gap-3 sm:gap-4">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-xs sm:text-sm font-bold">✓</span>
                    </div>
                    
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed text-sm sm:text-base md:text-lg">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* REFUND & CANCELLATION POLICY */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-8 md:py-8">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">
              Refund & Cancellation Policy
            </h2>

            {/* 🔥 FIX #3 No fallback text */}
            <p className="text-gray-300 mb-6 sm:mb-8 leading-relaxed text-base sm:text-lg md:text-xl">
              {policy?.refundIntro}
            </p>

            <div className="mb-8 sm:mb-10 md:mb-12 p-4 sm:p-5 md:p-6 bg-red-900/20 border border-red-700/50 rounded-lg">
              <p className="text-gray-200 font-semibold text-sm sm:text-base md:text-lg">
                Due to the nature of digital services, we strictly follow a 
                <strong className="text-orange-500"> NO REFUND POLICY</strong>.
              </p>
            </div>

            {/* Refund Points Dynamic */}
            <div className="space-y-4 sm:space-y-5">
              {policy?.refundPoints?.map((item) => (
                <div key={item.id} className="p-4 sm:p-5 rounded-lg bg-gray-800/50 border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                  <h4 className="text-base sm:text-lg font-semibold text-orange-500 mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                    {item.title}
                  </h4>
                  <p className="text-gray-400 ml-4 text-sm sm:text-base">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </section>


        {/* CONTACT SECTION */}
        <section className="px-4 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-6 md:py-8">
          <div className="max-w-5xl mx-auto">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-orange-500">
              Contact & Support
            </h2>

            <p className="text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed text-base sm:text-lg">
              For any questions, clarifications, or support, feel free to reach out to us anytime.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">

              <div className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition">
                <p className="font-semibold text-gray-200 mb-2">📞 Call Us</p>
                <a className="text-orange-500 block">{policy?.contactPhone1}</a>
                <a className="text-orange-500 block">{policy?.contactPhone2}</a>
              </div>

              <div className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition">
                <p className="font-semibold text-gray-200 mb-2">✉️ Email</p>
                <a className="text-orange-500 break-all">{policy?.contactEmail}</a>
              </div>

              <div className="p-4 sm:p-5 md:p-6 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition">
                <p className="font-semibold text-gray-200 mb-2">📍 Address</p>
                <p className="text-gray-300">{policy?.contactAddress}</p>
              </div>

            </div>

          </div>
        </section>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
