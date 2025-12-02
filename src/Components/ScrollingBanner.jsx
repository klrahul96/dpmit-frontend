import React from "react";

const services = [
  { title: "Website Development", subtitle: "Website Designing Service" },
  { title: "Ecommerce", subtitle: "Ecommerce Website Development", gray: true },
  { title: "SEO Services", subtitle: "Digital Marketing Services" },
  { title: "SMO Services", subtitle: "Social Media Optimization", gray: true },
  { title: "SEM Services", subtitle: "Search Engine Marketing" },
  { title: "SMM Services", subtitle: "Social Media Marketing Services", gray: true },
];

const ScrollingBanner = () => {
  return (
    <div className="overflow-hidden whitespace-nowrap py-0 bg-gray-50">
      <div className="flex animate-scroll">
        {[...services, ...services].map((service, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-64 text-center mx-2 border rounded-md overflow-hidden ${
              service.gray
                ? "bg-gray-300 text-black"
                : "bg-gradient-to-b from-yellow-500 via-yellow-300 to-black text-white"
            }`}
          >
            <h3 className="font-bold text-sm py-1 border-b border-white/30">
              {service.title}
            </h3>
            <p
              className={`text-xs font-medium py-1 ${
                service.gray ? "text-gray-800" : "text-yellow-100"
              }`}
            >
              {service.subtitle}
            </p>
          </div>
        ))}
      </div>


    </div>
  );
};

export default ScrollingBanner;
