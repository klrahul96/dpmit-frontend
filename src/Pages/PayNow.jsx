import React, { useState, useEffect } from 'react';

const PayNowPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [payNowData, setPayNowData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check Mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Fetch API Data
  useEffect(() => {
    const fetchPayNowData = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:5000/api/content/payNow");
        
        if (!response.ok) {
          throw new Error(`API Error: ${response.status}`);
        }
        
        const result = await response.json();
        setPayNowData(result.data);
        setError(null);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchPayNowData();
  }, []);

  // Loading State
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
          <h1 className="text-2xl font-bold text-gray-800">Loading Payment Page...</h1>
        </div>
      </div>
    );
  }

  // Error State
  if (error || !payNowData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50">
        <div className="text-center bg-white p-8 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold text-red-600 mb-4">❌ Error Loading Page</h2>
          <p className="text-gray-700 mb-6">{error || "Unable to load payment data"}</p>
          <button 
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-blue-700"
          >
            🔄 Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-blue-100 to-cyan-50 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');
        * {
          font-family: 'Poppins', sans-serif;
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -30px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes bounce-arrow {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(10px); }
        }
        
        @media (max-width: 767px) {
          body {
            touch-action: pan-y;
          }
        }
      `}</style>

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.3) 0%, transparent 50%)',
          animation: 'float 20s ease-in-out infinite'
        }}></div>
      </div>

      {/* Modern Header */}
      <div className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white py-8 md:py-20 shadow-2xl overflow-hidden">
        <div className="absolute inset-0 opacity-20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full filter blur-3xl opacity-10 animate-pulse hidden md:block"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full filter blur-3xl opacity-10 hidden md:block"></div>
        
        <div className="w-full px-4 relative z-10">
          <div className="text-center">
            <div className={`inline-block mb-6 p-4 md:p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 shadow-xl ${isMobile ? 'flex-col' : ''}`}>
              <div className={`flex items-center justify-center gap-2 md:gap-4 ${isMobile ? 'flex-col' : ''}`}>
                <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6 text-2xl md:text-3xl`}>
                  💳
                </div>
                <h1 className={`${isMobile ? 'text-2xl' : 'text-4xl md:text-5xl'} font-bold tracking-tight leading-tight`}>
                  <span className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Online Payment
                  </span>
                </h1>
                <div className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-6 text-2xl md:text-3xl`}>
                  🔒
                </div>
              </div>
            </div>
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 md:px-10 py-2 md:py-4 rounded-full border border-white/30 shadow-xl">
              <p className={`text-white font-bold flex items-center gap-2 md:gap-3 ${isMobile ? 'text-sm md:text-base' : 'text-lg'}`}>
                <span className="w-2 h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></span>
                {payNowData.companyName || 'DPM IT Solutions'}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={`w-screen relative z-10 ${isMobile ? 'px-3 py-4' : 'px-8 py-6 max-w-8xl mx-auto'}`}>
        {/* QR Code Payment Section */}
        <div className={`mb-5 md:mb-6`}>
          <div className="bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8">
              <h2 className={`${isMobile ? 'text-lg' : 'text-3xl md:text-5xl'} font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-center`}>
                {payNowData.qrHeading || 'Scan with any BharatQR / UPI enabled app'}
              </h2>
            </div>

            {/* PAY NOW with Arrow */}
            <div className="flex flex-col items-start justify-center mb-4 md:mb-5 md:ml-50 ml-28">
              <div style={{ animation: 'bounce-arrow 2s ease-in-out infinite' }}>
                <p className={`${isMobile ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'} font-black bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent mb-3`}>
                  PAY NOW
                </p>
                <p className={`${isMobile ? 'text-2xl md:text-3xl' : 'text-4xl'} text-center`}>⬇️</p>
              </div>
            </div>

            <div className={`${isMobile ? 'grid-cols-1' : 'grid-cols-2'} grid gap-5 md:gap-10`}>
              {/* QR Code Display */}
              <div className="flex items-center justify-center">
                <div className="relative w-full flex justify-center">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-30 hidden md:block"></div>
                  <div className="relative bg-white p-2 md:p-4 rounded-3xl shadow-xl border-4 border-gray-100">
                    <div className="absolute top-2 left-2 w-6 h-6 md:w-8 md:h-8 border-t-4 border-l-4 border-blue-500 rounded-tl-lg"></div>
                    <div className="absolute top-2 right-2 w-6 h-6 md:w-8 md:h-8 border-t-4 border-r-4 border-purple-500 rounded-tr-lg"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 md:w-8 md:h-8 border-b-4 border-l-4 border-purple-500 rounded-bl-lg"></div>
                    <div className="absolute bottom-2 right-2 w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-blue-500 rounded-br-lg"></div>
                    
                    <div className={`mx-auto rounded-2xl overflow-hidden ${isMobile ? 'w-72 h-72' : 'w-96 h-96'}`}>
                      <img 
                        src={payNowData.qrImageUrl || '/assets/qr.jpeg'} 
                        alt="QR Code" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Methods Grid */}
              <div className={`${isMobile ? 'grid-cols-2' : 'grid-cols-2'} grid gap-3 md:gap-5`}>
                {payNowData.paymentMethodsQR?.map((method, idx) => (
                  <div key={idx} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl md:rounded-2xl p-3 md:p-4 border-2 border-blue-200">
                    <div className={`mx-auto mb-2 md:mb-3 flex items-center justify-center ${isMobile ? 'w-12 h-12' : 'w-16 h-16'}`}>
                      <img 
                        src={method.img} 
                        alt={method.title}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => e.target.style.display = 'none'}
                      />
                    </div>
                    <p className={`font-bold text-gray-800 text-center ${isMobile ? 'text-xs md:text-sm' : 'text-base'}`}>{method.title}</p>
                    <p className={`text-gray-600 mt-1 md:mt-2 text-center font-medium ${isMobile ? 'text-xs' : 'text-xs'}`}>{method.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-4 md:mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-amber-300 shadow-md`}>
              <p className={`text-center text-gray-700 font-bold ${isMobile ? 'text-xs md:text-sm' : 'text-lg'}`}>
                ✓ 24/7 Payment Available • ✓ Instant Confirmation • ✓ Secure Transaction
              </p>
            </div>
          </div>
        </div>

        {/* RTGS/NEFT/IMPS Payment Section */}
        <div className={`mb-6 md:mb-8`}>
          <div className="bg-gradient-to-br from-white via-green-50 to-emerald-50 rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-10">
              <h2 className={`${isMobile ? 'text-lg' : 'text-3xl md:text-4xl'} font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent text-center`}>
                {payNowData.rtgsHeading || 'You Can Make Payment through RTGS / NEFT / IMPS'}
              </h2>
            </div>

            <div className={`${isMobile ? 'grid-cols-1' : 'grid-cols-2'} grid gap-5 md:gap-10`}>
              {/* Bank Transfer Info */}
              <div className="space-y-3 md:space-y-5">
                {payNowData.paymentMethodsRTGS?.map((method, idx) => (
                  <div key={idx} className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-green-300">
                    <div className="flex items-start gap-3">
                      <div className={`flex-shrink-0 ${isMobile ? 'text-2xl' : 'text-4xl'}`}>{method.icon}</div>
                      <div>
                        <p className={`font-bold text-gray-800 ${isMobile ? 'text-sm md:text-base' : 'text-lg'}`}>{method.title}</p>
                        <p className={`text-gray-600 mt-1 md:mt-2 font-medium ${isMobile ? 'text-xs md:text-sm' : 'text-base'}`}>{method.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payment Apps */}
              <div>
                <h3 className={`font-bold text-gray-800 mb-4 md:mb-6 text-center ${isMobile ? 'text-base md:text-lg' : 'text-2xl'}`}>Popular Payment Apps</h3>
                <div className={`grid gap-3 md:gap-5 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
                  {payNowData.paymentApps?.map((app, idx) => (
                    <div key={idx} className="bg-white rounded-xl md:rounded-2xl p-3 md:p-6 shadow-lg border-2 border-green-200">
                      <div className={`mx-auto mb-2 md:mb-4 ${isMobile ? 'w-16 h-16' : 'w-24 h-24'}`}>
                        <img 
                          src={app.img} 
                          alt={app.name}
                          className="w-full h-full object-contain"
                          onError={(e) => e.target.style.display = 'none'}
                        />
                      </div>
                      <p className={`font-bold text-gray-800 text-center ${isMobile ? 'text-xs md:text-sm' : 'text-lg'}`}>{app.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={`mt-4 md:mt-6 bg-gradient-to-r from-green-100 to-emerald-100 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-green-300 shadow-md`}>
              <p className={`text-center text-gray-800 font-bold ${isMobile ? 'text-xs md:text-sm' : 'text-lg'}`}>
                ℹ️ Transfer time may vary depending on your bank • Contact us for any queries: <a href={`tel:${payNowData.callPhone}`} className="text-green-600 hover:text-green-700 underline">{payNowData.callPhone}</a>
              </p>
            </div>
          </div>
        </div>

        {/* Online Payment Section */}
        <div className={`mb-6 md:mb-10`}>
          <div className="bg-gradient-to-br from-white via-orange-50 to-red-50 rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border border-gray-200 overflow-hidden">
            <div className="flex items-center justify-center gap-4 mb-6 md:mb-10">
              <h2 className={`${isMobile ? 'text-lg' : 'text-4xl md:text-5xl'} font-black bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent text-center`}>
                {payNowData.heading || 'Online Payment - DPM IT Solutions'}
              </h2>
            </div>

            <div className="bg-gradient-to-br from-red-100 via-orange-100 to-yellow-100 rounded-xl md:rounded-2xl p-5 md:p-8 border-2 border-orange-300 shadow-lg">
              <h3 className={`font-bold text-gray-800 mb-4 md:mb-6 text-center ${isMobile ? 'text-base md:text-lg' : 'text-2xl'}`}>✅ Safe & Secure Payment</h3>
              <div className={`grid gap-3 md:gap-5 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
                {[
                  { title: '🔐 SSL Encrypted', desc: '256-bit encryption' },
                  { title: '✅ PCI Compliant', desc: 'Industry standard' },
                  { title: '🎯 Easy Checkout', desc: 'Quick payment process' },
                  { title: '📱 Mobile Friendly', desc: 'Works on all devices' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg md:rounded-xl p-3 md:p-5 shadow-md">
                    <p className={`font-bold text-gray-800 ${isMobile ? 'text-xs md:text-sm' : 'text-lg'}`}>{item.title}</p>
                    <p className={`text-gray-600 mt-1 md:mt-2 font-medium ${isMobile ? 'text-xs' : 'text-base'}`}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-4 md:mt-8 bg-gradient-to-r from-orange-100 to-red-100 rounded-xl md:rounded-2xl p-3 md:p-5 border-2 border-orange-300 shadow-md`}>
              <p className={`text-center text-gray-800 font-bold ${isMobile ? 'text-xs md:text-sm' : 'text-lg'}`}>
                ✓ Instant Payment Processing • ✓ Auto Confirmation • ✓ Receipt via Email
              </p>
            </div>
          </div>
        </div>

        {/* Bank Details Section */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl md:rounded-3xl shadow-2xl p-5 md:p-10 border-2 border-white mb-8 md:mb-12">
          <h2 className={`font-black bg-gradient-to-r from-blue-700 to-blue-800 bg-clip-text text-transparent mb-2 text-center ${isMobile ? 'text-2xl md:text-3xl' : 'text-5xl'}`}>
            Bank Details for Transfer
          </h2>
          <div className={`w-20 md:w-32 h-2 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto mb-6 md:mb-10 rounded-full shadow-lg`}></div>

          <div className={`gap-3 md:gap-5 mb-8 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} grid`}>
            {payNowData.bankDetails && [
              { label: 'Company Name', value: payNowData.bankDetails.companyName, icon: '🏢' },
              { label: 'Bank Name', value: payNowData.bankDetails.bankName, icon: '🏛️' },
              { label: 'Bank Address', value: payNowData.bankDetails.bankAddress, icon: '📍' },
              { label: 'Bank Account No', value: payNowData.bankDetails.accountNo, icon: '💳' },
              { label: 'Account Type', value: payNowData.bankDetails.accountType, icon: '📄' },
              { label: 'IFSC CODE', value: payNowData.bankDetails.ifscCode, icon: '📊' },
            ].map((detail, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-gray-300"
              >
                <div className="flex items-start gap-3 md:gap-5">
                  <div className={`bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg text-xl md:text-2xl ${isMobile ? 'w-10 h-10' : 'w-14 h-14'}`}>
                    {detail.icon}
                  </div>
                  <div className="flex-1">
                    <p className={`text-gray-600 mb-1 md:mb-2 font-bold ${isMobile ? 'text-xs md:text-sm' : 'text-base'}`}>{detail.label}</p>
                    <p className={`font-bold text-gray-800 ${isMobile ? 'text-sm md:text-base' : 'text-lg'}`}>{detail.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-12 text-center text-white relative overflow-hidden mb-4 md:mb-0">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="relative z-10">
            <h3 className={`font-black mb-3 md:mb-6 drop-shadow-lg ${isMobile ? 'text-xl md:text-2xl' : 'text-4xl'}`}>{payNowData.ctaHeading || 'Need Help with Payment?'}</h3>
            <p className={`mb-6 md:mb-10 text-blue-50 font-bold ${isMobile ? 'text-sm md:text-base' : 'text-2xl'}`}>
              {payNowData.ctaText || 'Our team is here to assist you 24/7. Feel free to reach out!'}
            </p>
            <div className={`flex flex-wrap justify-center gap-3 md:gap-6`}>
              <a
                href={`tel:${payNowData.callPhone}`}
                className={`bg-white text-blue-600 rounded-full font-black shadow-2xl ${isMobile ? 'px-6 py-3 text-sm md:text-base' : 'px-12 py-5 text-xl'}`}
              >
                📞 Call Now
              </a>
              <a
                href={`mailto:${payNowData.emailAddress}`}
                className={`bg-yellow-500 text-white rounded-full font-black shadow-2xl ${isMobile ? 'px-6 py-3 text-sm md:text-base' : 'px-12 py-5 text-xl'}`}
              >
                ✉️ Email Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayNowPage;