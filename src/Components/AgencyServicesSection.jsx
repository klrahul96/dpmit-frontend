import React, { useState, useEffect } from "react";
import { Check, ArrowRight } from "lucide-react";
import BookingPopup from "./BookingPopup";

const API_BASE = "http://localhost:5000";

console.log("AGENCY SECTION FILE LOADED 🔥"); 

export default function AgencyServicesSection() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // FETCH CONTENT EXACT LIKE ABOUT SECTION
  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log("📡 Fetching Agency Services...");
        const res = await fetch(`${API_BASE}/api/content/agencyServices`);
        const json = await res.json();

        if (json.success && json.data) {
          console.log("✅ AGENCY DATA FETCHED:", json.data);
          setData(json.data);
        } else {
          console.log("⚠️ Using fallback content");
          setDefaultContent();
        }
      } catch (err) {
        console.log("❌ Fetch error:", err);
        setDefaultContent();
      } finally {
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  // FALLBACK CONTENT (Like About)
  const setDefaultContent = () => {
    setData({
      sectionSubtitle: "Company Benefits",
      sectionTitle: "Why You Should Choose",
      sectionTitleHighlight: "Agency Services",
      description:
        "We are 100+ professional software engineers with more than 8 years of experience...",
      features: [
        "First Working Process",
        "Dedicated Team",
        "24/7 Hours Support",
        "Handled By Experts",
      ],
      buttonText: "BOOK NOW",
      image: "/assets/we.png",
    });
  };

  if (loading || !data) {
    return (
      <div className="py-10 text-center text-gray-500">
        Loading Agency Services...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">

        {/* LEFT */}
        <div>
          <div className="mb-3 flex items-center gap-3">
            <div className="w-16 h-0.5 bg-pink-500"></div>
            <p className="text-blue-700 font-semibold uppercase">
              {data.sectionSubtitle}
            </p>
          </div>

          <h2 className="text-5xl font-bold leading-tight mb-4">
            {data.sectionTitle}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-700">
              {data.sectionTitleHighlight}
            </span>
          </h2>

          <p className="text-gray-800 text-lg max-w-xl mb-5">
            {data.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {data.features?.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-6 h-6 bg-green-700 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <span className="text-gray-900 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full flex items-center gap-3"
          >
            {data.buttonText}
            <ArrowRight size={16} />
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div>
          <img
            src={data.image}
            alt="Agency"
            className="rounded-2xl shadow-lg w-full max-h-[500px] object-cover"
          />
        </div>
      </div>

      {/* MODAL */}
      <BookingPopup isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}
