import React, { useEffect, useState } from 'react';

const TermConditions = () => {
  const [terms, setTerms] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/content/terms")
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        setTerms(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading Terms & Conditions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center p-6 bg-red-900/20 rounded-lg border border-red-700/50">
          <p className="text-red-400">❌ Error loading Terms & Conditions</p>
          <p className="text-gray-400 text-sm mt-2">{error}</p>
        </div>
      </div>
    );
  }

  if (!terms) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400">No content available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" style={{ fontFamily: "'Inter', 'Segoe UI', sans-serif" }}>
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <div className="relative overflow-hidden py-12 sm:py-16 md:py-20 bg-gradient-to-r from-gray-900 to-gray-800 border-b border-gray-700">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-purple-500/5"></div>
          <div className="relative px-4 sm:px-6 md:px-12 lg:px-20 text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-white leading-tight">
              {terms?.headerTitle || "Terms & Conditions"}
            </h1>
            <p className="text-lg sm:text-xl text-gray-400 mb-6">
              {terms?.headerSubtitle || "Your Trusted Digital Partner"}
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Introduction Section */}
          <section className="mb-12 text-center">
            <p className="text-gray-300 leading-relaxed text-xl">
              {terms?.introduction}
            </p>
          </section>

          {/* Terms Sections */}
          <div className="space-y-10">
            {terms?.sections?.map((section, index) => (
              <section key={index} className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50 hover:border-orange-500/30 transition-all duration-300">
                
                {/* Heading */}
                <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-500">
                  {section.title}
                </h2>

                {/* Content section */}
                {section.type === "content" && section.content && (
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {section.content}
                  </p>
                )}

                {/* List section */}
                {section.type === "list" && section.list && (
                  <div className="space-y-3 mt-4">
                    {section.list.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-800/50">
                        <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0 mt-2"></span>
                        <p className="text-gray-400 text-sm">{item}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Items section */}
                {section.type === "items" && section.items && (
                  <div className="space-y-4 mt-4">
                    {section.items.map((item, idx) => (
                      <div key={idx} className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                        <h4 className="text-lg font-semibold text-orange-500 mb-2 flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                          {item.title}
                        </h4>
                        <p className="text-gray-400 ml-4 text-sm">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Email/Contact section */}
                {section.type === "emails" && section.emails && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {section.emails.map((email, idx) => (
                      <div key={idx} className="p-4 bg-gray-800/50 rounded-lg border border-gray-700">
                        <p className="font-semibold text-gray-200 mb-2 text-sm">{email.label}</p>
                        <a 
                          href={email.email.includes("@") ? `mailto:${email.email}` : `tel:${email.email}`} 
                          className="text-orange-500 hover:text-orange-400 transition-colors text-sm break-all"
                        >
                          {email.email}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

            {/* Disclaimer Section */}
            <section className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-orange-500">
                Disclaimer
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {terms?.disclaimer}
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-800/30 rounded-xl p-6 border border-gray-700/50">
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-orange-500 text-center">
                Contact & Support
              </h2>
              <p className="text-gray-300 mb-8 text-center leading-relaxed">
                For any questions, clarifications, or support, feel free to reach out to us anytime.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">📞</div>
                  <h3 className="font-semibold text-gray-200 mb-3">Call Us</h3>
                  <div className="space-y-2">
                    {terms?.contact?.phone1 && (
                      <a href={`tel:${terms.contact.phone1}`} className="text-orange-500 hover:text-orange-400 block text-sm transition-colors">
                        {terms.contact.phone1}
                      </a>
                    )}
                    {terms?.contact?.phone2 && (
                      <a href={`tel:${terms.contact.phone2}`} className="text-orange-500 hover:text-orange-400 block text-sm transition-colors">
                        {terms.contact.phone2}
                      </a>
                    )}
                  </div>
                </div>

                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">✉️</div>
                  <h3 className="font-semibold text-gray-200 mb-3">Email Us</h3>
                  {terms?.contact?.email && (
                    <a href={`mailto:${terms.contact.email}`} className="text-orange-500 hover:text-orange-400 transition-colors text-sm break-all">
                      {terms.contact.email}
                    </a>
                  )}
                </div>

                <div className="text-center p-4 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300">
                  <div className="text-3xl mb-3">📍</div>
                  <h3 className="font-semibold text-gray-200 mb-3">Address</h3>
                  {terms?.contact?.address && (
                    <p className="text-gray-400 text-sm">
                      {terms.contact.address}
                    </p>
                  )}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermConditions;