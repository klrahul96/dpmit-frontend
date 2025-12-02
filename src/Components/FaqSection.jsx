import React, { useEffect, useState } from "react";
import { FaHeadset, FaComments, FaChevronDown } from "react-icons/fa";

const API_URL = "http://localhost:5000/api/content/faq";

export default function FaqSection() {
  const [faqData, setFaqData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [message, setMessage] = useState("");

  // DEFAULT DATA (fallback)
  const defaultData = {
    sectionSubtitle: "FAQs",
    sectionTitle: "Frequently Asked Questions",
    sectionDescription: "We have professional experts around world.",
    phoneNumber: "+919650413450",
    faqs: [
      {
        question: "What is SEO and why is it important?",
        answer:
          "SEO helps improve visibility on search engines like Google, Bing, and Yahoo.",
      },
    ],
  };

  // FETCH DATA FROM BACKEND
  useEffect(() => {
    const loadFaq = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();

        if (json.success && json.data) {
          setFaqData({
            sectionSubtitle: json.data.sectionSubtitle || defaultData.sectionSubtitle,
            sectionTitle: json.data.sectionTitle || defaultData.sectionTitle,
            sectionDescription:
              json.data.sectionDescription || defaultData.sectionDescription,
            phoneNumber: json.data.phoneNumber || defaultData.phoneNumber,
            faqs:
              Array.isArray(json.data.faqs) && json.data.faqs.length > 0
                ? json.data.faqs
                : defaultData.faqs,
          });
        } else {
          setFaqData(defaultData);
        }
      } catch (error) {
        setFaqData(defaultData);
      }
      setLoading(false);
    };

    loadFaq();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center bg-gray-100">
        <p className="text-gray-500">Loading FAQs...</p>
      </div>
    );
  }

  const { sectionSubtitle, sectionTitle, sectionDescription, phoneNumber, faqs } =
    faqData;

  return (
    <section id="faq-section" className="py-10 bg-[#FFF7F2]">
      <div className="max-w-8xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        
        {/* LEFT SIDE STATIC CONTENT (DYNAMIC TEXTS) */}
        <div>
          <h3 className="text-2xl font-medium text-blue-500 uppercase mb-2">
            {sectionSubtitle}
          </h3>
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            {sectionTitle}
          </h2>
          <p className="text-gray-600 mb-4">{sectionDescription}</p>

          <h3 className="text-2xl font-semibold mb-3">Still Need Assistance?</h3>

          <div className="space-y-4">

            {/* HELP CENTER CARD */}
            <div className="bg-white rounded-xl shadow cursor-pointer"
              onClick={() => setShowPhoneNumber(!showPhoneNumber)}
            >
              <div className="flex items-center px-6 py-4 gap-4">
                <div className="bg-[#DD7C42] p-3 rounded-full text-white">
                  <FaHeadset size={20} />
                </div>
                <span className="font-medium text-lg text-gray-800">
                  Help Center
                </span>
              </div>

              {showPhoneNumber && (
                <div className="px-6 pb-4 border-t">
                  <a
                    href={`tel:${phoneNumber}`}
                    className="block bg-orange-600 text-white px-4 py-3 rounded-lg font-semibold shadow"
                  >
                    📞 {phoneNumber}
                  </a>
                </div>
              )}
            </div>

            {/* COMMUNITY CARD */}
            <div
              className="bg-white rounded-xl shadow px-6 py-4 gap-4 cursor-pointer"
              onClick={() => setShowWhatsAppChat(true)}
            >
              <div className="flex items-center gap-4">
                <div className="bg-[#DD7C42] p-3 rounded-full text-white">
                  <FaComments size={20} />
                </div>
                <span className="font-medium text-lg text-gray-800">
                  Community
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* FAQ ACCORDION (DYNAMIC) */}
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow">
              <button
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-6 py-5 text-left text-base font-medium text-gray-800"
              >
                <span>{faq.question}</span>
                <FaChevronDown
                  className={`transition duration-300 ${
                    activeIndex === index ? "rotate-180 text-orange-600" : ""
                  }`}
                />
              </button>

              {activeIndex === index && (
                <div className="px-6 pb-5 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
