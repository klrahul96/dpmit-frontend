import React, { useEffect, useRef, useState } from 'react';
import { Edit2, Save, X, Upload } from 'lucide-react';

const AdminPanel = () => {
  const [loading, setLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const headerImageRef = useRef(null);
  const aboutImageRef = useRef(null);
  const servicesImageRef = useRef(null);

  const [aboutData, setAboutData] = useState({
    title: "",
    paragraph1: "",
    paragraph2: "",
    headerImage: "",
    aboutImage: "",
    servicesImage: "",
  });

  const [servicesData, setServicesData] = useState({
    title: "",
    paragraph1: "",
    paragraph2: "",
    paragraph3: "",
  });

  const [features, setFeatures] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/content/about-us");
        const json = await res.json();
        const data = json?.data || {};

        setAboutData({
          title: data.title || "Welcome to DPM IT Solutions",
          paragraph1: data.paragraph1 || "We are simply not a web development company. We are one of the emerging platform defining the real meaning of success for your business. Digital transformation has revolutionized the world and at the heart of technology, we are creating a space for your business.",
          paragraph2: data.paragraph2 || "Carving a niche for itself, DPM IT Solutions is a name needs no introduction in the field of digital world. DPM is the acronym of Dynamic Process Management. We are the omni-channel platform for all kind of Web Solutions.Picture tells the story. Yes! At, DPM IT Solutions we develop interactive, eye-catching, appealing and visually stunning Websites at very affordable price. We believe in user experience and pretty focused on creating an innovative and handy websites which makes the online surfing and shopping a pleasing experience.",
          headerImage: data.headerImage || "",
          aboutImage: data.aboutImage || "",
          servicesImage: data.servicesImage || "",
        });

        setServicesData({
          title: data.servicesTitle || "Our Services",
          paragraph1: data.servicesParagraph1 || "At DPM IT Solutions, we offer a wide range of services to elevate your business. From graphic design and video editing to Meta & Google Ads, Instagram promotions, and GMB optimization, we cover it all.",
          paragraph2: data.servicesParagraph2 || "Our team ensures that your online presence is not just beautiful but effective. Whether it's creating responsive websites, engaging ad creatives, or managing your local SEO – we bring your digital vision to life.",
          paragraph3: data.servicesParagraph3 || "Let us handle your hosting and domain services while you focus on growing your brand. Your success is our mission.",
        });

        setFeatures([
          { icon: data.feature1Icon || "⚡", title: data.feature1Title || "Lightning Fast", desc: data.feature1Desc || "Quick turnaround times without compromising on quality. We deliver your projects on time, every time." },
          { icon: data.feature2Icon || "💰", title: data.feature2Title || "Affordable", desc: data.feature2Desc || "Premium quality services at competitive prices. Get maximum value for your investment with transparent pricing." },
          { icon: data.feature3Icon || "🎨", title: data.feature3Title || "Creative", desc: data.feature3Desc || "Innovative designs and creative solutions that make your brand stand out in the digital landscape." },
          { icon: data.feature4Icon || "🏆", title: data.feature4Title || "Results", desc: data.feature4Desc || "Track record of successful projects and satisfied clients. We deliver measurable results for your business." },
          { icon: data.feature5Icon || "🤝", title: data.feature5Title || "Support", desc: data.feature5Desc || "Round-the-clock customer support to address your queries and provide assistance whenever you need it." },
          { icon: data.feature6Icon || "🔧", title: data.feature6Title || "All-in-One", desc: data.feature6Desc || "From web development to digital marketing, we provide comprehensive solutions under one roof." },
        ]);

        setLoading(false);
      } catch (error) {
        console.log("Error loading data:", error);
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleImageUpload = (event, field) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();

    reader.onload = (e) => {
      setAboutData({ ...aboutData, [field]: e.target.result });
    };

    reader.readAsDataURL(file);
  };

  const triggerFileInput = (ref) => ref.current?.click();

  const handleTitleChange = (idx, value) => {
    const updated = [...features];
    updated[idx].title = value;
    setFeatures(updated);
  };

  const handleDescChange = (idx, value) => {
    const updated = [...features];
    updated[idx].desc = value;
    setFeatures(updated);
  };

  const saveToBackend = async () => {
    setIsSaving(true);

    try {
      const token = localStorage.getItem("token");

      const payload = {
        ...aboutData,
        servicesTitle: servicesData.title,
        servicesParagraph1: servicesData.paragraph1,
        servicesParagraph2: servicesData.paragraph2,
        servicesParagraph3: servicesData.paragraph3,

        feature1Icon: features[0]?.icon,
        feature1Title: features[0]?.title,
        feature1Desc: features[0]?.desc,

        feature2Icon: features[1]?.icon,
        feature2Title: features[1]?.title,
        feature2Desc: features[1]?.desc,

        feature3Icon: features[2]?.icon,
        feature3Title: features[2]?.title,
        feature3Desc: features[2]?.desc,

        feature4Icon: features[3]?.icon,
        feature4Title: features[3]?.title,
        feature4Desc: features[3]?.desc,

        feature5Icon: features[4]?.icon,
        feature5Title: features[4]?.title,
        feature5Desc: features[4]?.desc,

        feature6Icon: features[5]?.icon,
        feature6Title: features[5]?.title,
        feature6Desc: features[5]?.desc,
      };

      const res = await fetch("http://localhost:5000/api/content/about-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        alert("✅ Content updated successfully!");
        setIsEditing(false);
      } else {
        alert("❌ Failed to save (Unauthorized)");
      }
    } catch (err) {
      alert("❌ Error saving");
    }

    setIsSaving(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <p className="text-gray-600 font-semibold">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Website Content Manager</h1>

          {!isEditing ? (
            <button
              onClick={() => setIsEditing(true)}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              <Edit2 className="h-5 w-5" /> Edit All Content
            </button>
          ) : (
            <div className="flex gap-3">
              <button
                onClick={saveToBackend}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                <Save className="h-5 w-5" /> {isSaving ? "Saving..." : "Save All Changes"}
              </button>
              <button
                onClick={() => setIsEditing(false)}
                className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
              >
                <X className="h-5 w-5" /> Cancel
              </button>
            </div>
          )}
        </div>

        {/* ---------------- ABOUT SECTION ---------------- */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-blue-500 pb-3">About Section</h2>

          {isEditing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📌 Title</label>
                <input
                  type="text"
                  value={aboutData.title}
                  onChange={(e) => setAboutData({ ...aboutData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 Paragraph 1</label>
                <textarea
                  rows="4"
                  value={aboutData.paragraph1}
                  onChange={(e) => setAboutData({ ...aboutData, paragraph1: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 Paragraph 2</label>
                <textarea
                  rows="4"
                  value={aboutData.paragraph2}
                  onChange={(e) => setAboutData({ ...aboutData, paragraph2: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">🖼️ Header Image</label>
                  <input
                    type="file"
                    ref={headerImageRef}
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "headerImage")}
                  />
                  <div
                    onClick={() => triggerFileInput(headerImageRef)}
                    className="border-2 border-dashed border-blue-300 p-4 rounded cursor-pointer hover:bg-blue-50 transition"
                  >
                    {aboutData.headerImage ? (
                      <img src={aboutData.headerImage} className="h-32 w-full object-cover rounded" alt="Header" />
                    ) : (
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">🖼️ About Image</label>
                  <input
                    type="file"
                    ref={aboutImageRef}
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "aboutImage")}
                  />
                  <div
                    onClick={() => triggerFileInput(aboutImageRef)}
                    className="border-2 border-dashed border-green-300 p-4 rounded cursor-pointer hover:bg-green-50 transition"
                  >
                    {aboutData.aboutImage ? (
                      <img src={aboutData.aboutImage} className="h-32 w-full object-cover rounded" alt="About" />
                    ) : (
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">🖼️ Services Image</label>
                  <input
                    type="file"
                    ref={servicesImageRef}
                    className="hidden"
                    onChange={(e) => handleImageUpload(e, "servicesImage")}
                  />
                  <div
                    onClick={() => triggerFileInput(servicesImageRef)}
                    className="border-2 border-dashed border-purple-300 p-4 rounded cursor-pointer hover:bg-purple-50 transition"
                  >
                    {aboutData.servicesImage ? (
                      <img src={aboutData.servicesImage} className="h-32 w-full object-cover rounded" alt="Services" />
                    ) : (
                      <Upload className="h-8 w-8 text-gray-400 mx-auto" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-gray-700">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">Title</p>
                <p>{aboutData.title}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">Paragraph 1</p>
                <p>{aboutData.paragraph1}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Paragraph 2</p>
                <p>{aboutData.paragraph2}</p>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {aboutData.headerImage && (
                  <div>
                    <p className="text-xs font-bold mb-1">Header Image</p>
                    <img src={aboutData.headerImage} className="h-24 w-full object-cover rounded" alt="Header" />
                  </div>
                )}
                {aboutData.aboutImage && (
                  <div>
                    <p className="text-xs font-bold mb-1">About Image</p>
                    <img src={aboutData.aboutImage} className="h-24 w-full object-cover rounded" alt="About" />
                  </div>
                )}
                {aboutData.servicesImage && (
                  <div>
                    <p className="text-xs font-bold mb-1">Services Image</p>
                    <img src={aboutData.servicesImage} className="h-24 w-full object-cover rounded" alt="Services" />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* ---------------- SERVICES SECTION ---------------- */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-green-500 pb-3">Services Section</h2>

          {isEditing ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📌 Title</label>
                <input
                  type="text"
                  value={servicesData.title}
                  onChange={(e) => setServicesData({ ...servicesData, title: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-blue-400 rounded-lg focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 Paragraph 1</label>
                <textarea
                  rows="4"
                  value={servicesData.paragraph1}
                  onChange={(e) => setServicesData({ ...servicesData, paragraph1: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 Paragraph 2</label>
                <textarea
                  rows="4"
                  value={servicesData.paragraph2}
                  onChange={(e) => setServicesData({ ...servicesData, paragraph2: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">📝 Paragraph 3</label>
                <textarea
                  rows="4"
                  value={servicesData.paragraph3}
                  onChange={(e) => setServicesData({ ...servicesData, paragraph3: e.target.value })}
                  className="w-full px-4 py-3 border-2 border-yellow-400 rounded-lg focus:ring-2 focus:ring-yellow-500"
                />
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-bold text-blue-700 mb-2">Title</p>
                <p>{servicesData.title}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="font-bold text-green-700 mb-2">Paragraph 1</p>
                <p>{servicesData.paragraph1}</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-bold text-purple-700 mb-2">Paragraph 2</p>
                <p>{servicesData.paragraph2}</p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="font-bold text-yellow-700 mb-2">Paragraph 3</p>
                <p>{servicesData.paragraph3}</p>
              </div>
            </div>
          )}
        </div>

        {/* ---------------- FEATURES SECTION ---------------- */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b-4 border-purple-500 pb-3">Features Section</h2>

          {isEditing ? (
            <div className="space-y-6">
              {features.map((f, i) => (
                <div key={i} className="border-2 border-blue-300 p-6 rounded-lg bg-blue-50">
                  <h3 className="font-bold text-blue-700 mb-4 text-lg">Feature {i + 1} - {f.icon}</h3>

                  <div className="space-y-3">
                    <input
                      type="text"
                      value={f.title}
                      onChange={(e) => handleTitleChange(i, e.target.value)}
                      className="w-full px-4 py-3 border-2 border-green-400 rounded-lg focus:ring-2 focus:ring-green-500"
                      placeholder="Feature Title"
                    />

                    <textarea
                      rows="3"
                      value={f.desc}
                      onChange={(e) => handleDescChange(i, e.target.value)}
                      className="w-full px-4 py-3 border-2 border-purple-400 rounded-lg focus:ring-2 focus:ring-purple-500"
                      placeholder="Feature Description"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="border-2 p-6 rounded-lg shadow-md bg-gradient-to-br from-blue-50 to-purple-50 text-center hover:shadow-lg transition"
                >
                  <p className="text-5xl mb-3">{f.icon}</p>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-600">{f.desc}</p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default AdminPanel;