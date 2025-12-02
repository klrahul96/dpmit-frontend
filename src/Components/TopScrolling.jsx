import React from 'react';

const ScrollingBanner = () => {
  const services = [
    "Best Website Design",
    "SEO Optimization",
    "Google My Business",
    "Meta Ads",
    "Instagram Ads",
    "Logo & Graphics Design",
    "Video Editing Services",
    "Social Media Marketing",
    "Fast Hosting & Domain"
  ];

  return (
    <div className="w-full bg-blue-800 py-1 overflow-hidden relative">
      {/* Custom animation style */}
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll 8s linear infinite; /* Faster scrolling */
          }
        `}
      </style>

      <div className="whitespace-nowrap animate-scroll">
        {services.map((item, index) => (
          <span key={index} className="text-white text-sem font-semibold mx-6 inline-block">
             {item}
          </span>
        ))}
        {/* Duplicate for seamless infinite scroll */}
        {services.map((item, index) => (
          <span key={index + services.length} className="text-white text-sem font-semibold mx-6 inline-block">
             {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingBanner;
