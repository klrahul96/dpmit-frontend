import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const sectionRef = useRef(null);

  const stats = [
    { value: 99, label: "Success in getting happy customer" },
    { value: 25, label: "Thousands of successful business" },
    { value: 120, label: "Total clients who love HighTech" },
    { value: 5, label: "Stars reviews given by satisfied clients" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      stats.forEach((stat, index) => {
        let start = 0;
        const end = stat.value;
        const duration = 2000;
        const increment = end / (duration / 50);

        const timer = setInterval(() => {
          start += increment;
          setCounts(prev => {
            const newCounts = [...prev];
            newCounts[index] = Math.min(Math.floor(start), end);
            return newCounts;
          });

          if (start >= end) {
            clearInterval(timer);
          }
        }, 50);

        return () => clearInterval(timer);
      });
    }
  }, [isVisible]);

  return (
    <div style={{ fontFamily: 'Inter, system-ui, -apple-system, sans-serif' }}>
      <div ref={sectionRef} className="bg-blue-800 py-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center sm:text-left transition-all duration-1000 delay-${index * 200} ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-2 sm:space-y-0">
                  <h1 className="text-5xl sm:text-4xl lg:text-5xl font-bold text-white leading-none">
                    {counts[index]}
                  </h1>
                  <h5 className="text-white text-base sm:text-lg leading-relaxed sm:flex-1 max-w-xs sm:max-w-none mx-auto sm:mx-0">
                    {stat.label}
                  </h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;