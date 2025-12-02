import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AboutSection = () => {
  const [aboutData, setAboutData] = useState({
    subtitle: 'About Us',
    title: 'DPM IT Solutions',
    paragraphs: [],
    image1: '',
    image2: '',
    buttonText: 'More Details'
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  // Fetch about content from API
  useEffect(() => {
    fetchAboutContent();
  }, []);

  const fetchAboutContent = async () => {
    try {
      setLoading(true);
      setError(false);
      
      const response = await fetch('http://localhost:5000/api/content/about');
      
      if (!response.ok) {
        throw new Error('Failed to fetch content');
      }
      
      const result = await response.json();
      
      if (result.success && result.data) {
        setAboutData({
          subtitle: result.data.subtitle || 'About Us',
          title: result.data.title || 'DPM IT Solutions',
          paragraphs: result.data.paragraphs || [],
          image1: result.data.image1 || '',
          image2: result.data.image2 || '',
          buttonText: result.data.buttonText || 'More Details'
        });
      } else {
        setDefaultContent();
      }
    } catch (error) {
      console.error('Error fetching about content:', error);
      setError(true);
      setDefaultContent();
    } finally {
      setLoading(false);
    }
  };

  const setDefaultContent = () => {
    setAboutData({
      subtitle: 'About Us',
      title: 'DPM IT Solutions - Defining Real Success for Your Business',
      paragraphs: [
        'We are a web development company creating digital solutions that drive real success for your business. Our expertise spans across multiple digital domains to ensure your business thrives in the digital landscape. We specialize in innovative technology solutions.',
        'DPM IT Solutions stands for Dynamic Process Management - your trusted partner in digital transformation. We provide Website Design, SEO, GMB management, Social Media Marketing, and App Development solutions. Our comprehensive services ensure complete digital presence.',
        'Our team focuses on delivering innovative, user-friendly websites and digital marketing strategies that enhance your online presence and help your business reach its target audience effectively. We create scalable solutions for sustainable growth.'
      ],
      image1: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop',
      image2: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop',
      buttonText: 'More Details'
    });
  };

  const handleMoreDetails = () => {
    navigate("/about");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Loading state
  if (loading) {
    return (
      <div className="py-10 bg-gray-50" ref={sectionRef}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            <p className="ml-4 text-gray-600 text-lg">Loading content...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-10 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT SIDE — static images (no animation) */}
          <div className="relative">
            <div className="relative h-[500px]">

              {/* Image 1 */}
              {aboutData.image1 ? (
                <img 
                  src={aboutData.image1}
                  alt="About Primary"
                  className="absolute top-0 left-0 w-3/4 h-3/4 object-cover rounded-lg shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';
                  }}
                />
              ) : (
                <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-gray-300 rounded-lg"></div>
              )}

              {/* Image 2 */}
              {aboutData.image2 ? (
                <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4">
                  <img 
                    src={aboutData.image2}
                    alt="About Secondary"
                    className="w-full h-full object-cover rounded-lg shadow-xl border-4 border-white"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800&h=600&fit=crop';
                    }}
                  />
                </div>
              ) : (
                <div className="absolute top-1/4 left-1/4 w-3/4 h-3/4 bg-gray-300 rounded-lg"></div>
              )}

            </div>
          </div>

          {/* RIGHT SIDE — static content (no animation) */}
          <div className="space-y-6">

            <h5 className="text-blue-700 text-xl font-semibold uppercase tracking-wide">
              {aboutData.subtitle}
            </h5>

            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              {aboutData.title}
            </h1>

            <div className="space-y-4">
              {aboutData.paragraphs.length > 0 ? (
                aboutData.paragraphs.map((p, i) => (
                  <p key={i} className="text-gray-700 text-lg leading-relaxed">
                    {p}
                  </p>
                ))
              ) : (
                <p className="text-gray-500 italic">No content available.</p>
              )}
            </div>

            <button
              onClick={handleMoreDetails}
              className="bg-blue-800 text-white px-8 py-3 rounded-full shadow-lg hover:bg-blue-900 transition-all duration-300 font-semibold text-lg mt-4"
            >
              {aboutData.buttonText}
            </button>

            {error && (
              <p className="text-sm text-amber-600">
                Using default content. Please check your connection.
              </p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AboutSection;
