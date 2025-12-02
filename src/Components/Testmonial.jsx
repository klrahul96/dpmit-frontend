import React, { useState, useEffect, useRef } from 'react';
import { Star, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Testimonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [testimonialData, setTestimonialData] = useState(null);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef(null);

  const fallbackTestimonials = [
    {
      companyAccent: "Scrap",
      companyAccentColor: "Motors",
      rating: 5,
      text: "Looking for the best IT company in delhi NCR? Choose DPM IT SOLUTIONS Delhi.",
      author: "Rabb Da Radio",
      position: "Business Owner",
      avatarBg: "bg-red-200"
    },
    {
      companyAccent: "IT",
      companyAccentColor: "Solutions",
      rating: 5,
      text: "Professional approach, smooth process and on-time delivery.",
      author: "Ajay Kant",
      position: "Client",
      avatarBg: "bg-blue-200"
    }
  ];

  // Fetch API data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/api/content/testimonial");
        const data = await response.json();
        
        if (data.success && data.data) {
          setTestimonialData(data.data);
          setCurrentSlide(0);
        } else {
          setTestimonialData({
            sectionTitle: "Success Stories How Feedback Drives Our Results",
            sectionSubtitle: "CLIENT STORIES",
            overallRating: "4.9",
            overallDescription: "DPM IT Solutions - Transforming businesses through digital excellence",
            testimonials: fallbackTestimonials
          });
        }
      } catch (error) {
        console.error("Error fetching testimonials:", error);
        setTestimonialData({
          sectionTitle: "Success Stories How Feedback Drives Our Results",
          sectionSubtitle: "CLIENT STORIES",
          overallRating: "4.9",
          overallDescription: "DPM IT Solutions - Transforming businesses through digital excellence",
          testimonials: fallbackTestimonials
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh every 20 seconds
    const interval = setInterval(fetchData, 20000);
    return () => clearInterval(interval);
  }, []);

  // Scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Auto-slide
  useEffect(() => {
    if (!testimonialData?.testimonials || testimonialData.testimonials.length === 0) return;

    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % testimonialData.testimonials.length);
    }, 5000);

    return () => clearInterval(slideInterval);
  }, [testimonialData]);

  if (loading) {
    return (
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-xl font-semibold text-gray-700">Loading...</p>
        </div>
      </div>
    );
  }

  if (!testimonialData || !testimonialData.testimonials || testimonialData.testimonials.length === 0) {
    return (
      <div className="w-full h-screen bg-white flex justify-center items-center">
        <p className="text-2xl font-bold text-red-600">No testimonials found</p>
      </div>
    );
  }

  const current = testimonialData.testimonials[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonialData.testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonialData.testimonials.length) % testimonialData.testimonials.length);
  };

  return (
    <div ref={sectionRef} className="bg-gray-100 w-full min-h-screen py-8 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-orange-100 text-blue-500 px-4 py-2 rounded-full font-medium">
            ✏️ {testimonialData.sectionSubtitle}
          </div>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-2">
          {testimonialData.sectionTitle}
        </h1>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left - Testimonial */}
        <div className="space-y-8">
          {/* Company Name */}
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">
              {current.companyAccent}
              <span className="text-green-500"> {current.companyAccentColor}</span>
            </h2>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i <= current.rating
                      ? 'fill-yellow-400 text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Text */}
          <p className="text-gray-700 text-lg leading-relaxed">{current.text}</p>

          {/* Author */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`w-14 h-14 rounded-full ${current.avatarBg} flex items-center justify-center font-bold text-gray-700`}>
                {current.author
                  .split(' ')
                  .map((n) => n[0])
                  .join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-600">{current.author}</h3>
                <p className="text-gray-500">{current.position}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex gap-2">
              <button
                onClick={prevSlide}
                className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextSlide}
                className="w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full flex items-center justify-center transition"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 pt-4">
            {testimonialData.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`w-3 h-3 rounded-full transition ${
                  idx === currentSlide ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
         {/* View More Reviews Button */}
<div className="flex justify-center mt-8">
  <button 
    onClick={() => window.open('https://www.google.com/search?q=dpm+it+solutions+new+delhi+reviews', '_blank')}
    className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 cursor-pointer"
  >
    View More Reviews
    <ArrowRight className="ml-2 w-5 h-5" />
  </button>
</div>

        </div>

        {/* Right - Rating Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-10 rounded-3xl max-w-sm w-full text-center shadow-2xl">
            <div className="text-7xl font-bold text-yellow-400 mb-4">
              {testimonialData.overallRating}
            </div>
            <div className="flex justify-center mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-orange-400 text-orange-400 mx-1"
                />
              ))}
            </div>
            <p className="text-lg mb-8 leading-relaxed">
              {testimonialData.overallDescription}
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold w-full flex items-center justify-center gap-2 transition">
              GET IN TOUCH
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}