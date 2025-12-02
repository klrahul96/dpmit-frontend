import React, { useEffect, useState } from "react";

const API_BASE = "http://localhost:5000";

const Portfolio = () => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch from backend
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch(`${API_BASE}/api/content/portfolio`);
        const json = await res.json();
        console.log("Fetched portfolio:", json);

        // FIX: safe data fallback
        if (json.success && json.data) {
          setPortfolio(json.data);
        } else {
          setPortfolio({
            sectionSubtitle: "Our Work",
            sectionTitle: "Creative Portfolio",
            sectionDescription: "Showcasing our expertise.",
            images: [],
            logos: []
          });
        }
      } catch (err) {
        console.error("Portfolio fetch error:", err);
        setPortfolio({
          sectionSubtitle: "Our Work",
          sectionTitle: "Creative Portfolio",
          sectionDescription: "Showcasing our expertise.",
          images: [],
          logos: []
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  // Loading UI
  if (loading || !portfolio) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        Loading Portfolio...
      </div>
    );
  }

  // SAFE ARRAYS
  const images = Array.isArray(portfolio.images) ? portfolio.images : [];
  const logos = Array.isArray(portfolio.logos) ? portfolio.logos : [];

  // If no images
  if (images.length === 0) {
    return (
      <div className="text-center py-20 text-gray-600 text-xl">
        No portfolio items found.
      </div>
    );
  }

  return (
    <section className="py-7 md:py-4 bg-gray-50 overflow-hidden">

      {/* Header */}
      <div className="text-center mb-10 px-4">
        <span className="text-blue-600 font-semibold text-lg tracking-wide uppercase mb-2 block">
          {portfolio.sectionSubtitle}
        </span>

        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 relative">
          {portfolio.sectionTitle}
        </h2>

        <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-6">
          {portfolio.sectionDescription}
        </p>
      </div>

      {/* Infinite Scrolling Section */}
      <div className="relative overflow-hidden py-6">
        <div
          className="flex gap-8"
          style={{
            animation: "scrollX 35s linear infinite",
            width: "max-content",
          }}
        >
          {[...images, ...images].map((img, index) => {
            const logo = logos[index % logos.length] || { src: "", width: 80, height: 80 };

            return (
              <div
                key={index}
                className="relative rounded-full p-[4px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-xl flex-shrink-0"
                style={{ width: "282px", height: "282px" }}
              >
                <div className="overflow-hidden rounded-full w-full h-full bg-transparent shadow-inner relative">

                  {/* Main Image */}
                  <img
                    src={img}
                    alt={`Portfolio ${index}`}
                    className="w-full h-full object-cover object-top"
                    onError={(e) => (e.target.style.display = "none")}
                  />

                  {/* Logo */}
                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-full"
                    style={{
                      background:
                        "radial-gradient(circle at center, rgba(255,255,255,0.25) 0%, rgba(0,0,0,0.2) 100%)",
                      backdropFilter: "blur(3px)",
                    }}
                  >
                    <img
                      src={logo.src}
                      alt={`Logo ${index}`}
                      style={{
                        width: `${logo.width}px`,
                        height: `${logo.height}px`,
                      }}
                      onError={(e) => (e.target.style.display = "none")}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Animation */}
        <style>{`
          @keyframes scrollX {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Portfolio;
