import React, { useState } from 'react';

const BlogSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const blogs = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Website Development",
      author: "Rajesh Kumar",
      date: "15 July 2024",
      description: "Discover how DPM IT Solutions creates stunning, responsive websites using modern technologies like React, Next.js, and WordPress. From corporate websites to e-commerce platforms, we deliver exceptional web experiences that drive business growth.",
      shares: "1,845",
      comments: "32"
    },
    {
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "App Development",
      author: "Priya Sharma",
      date: "28 June 2024",
      description: "Learn about our comprehensive mobile app development services. We create native iOS and Android apps, as well as cross-platform solutions using React Native and Flutter, delivering seamless user experiences across all devices.",
      shares: "2,156",
      comments: "45"
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      category: "Digital Marketing",
      author: "Amit Singh",
      date: "10 July 2024",
      description: "Explore our digital marketing strategies that boost online presence and drive conversions. From SEO and social media marketing to PPC campaigns and content marketing, we help businesses reach their target audience effectively.",
      shares: "1,672",
      comments: "28"
    }
  ];

  return (
    <div className="py-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h5 className="text-blue-600 text-xl font-semibold mb-4">DPM IT Solutions Blog</h5>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Latest Insights & Tech Updates
          </h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest trends in website development, app development, and digital marketing
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 justify-center">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden relative transform hover:scale-105 transition-all duration-300 border border-gray-100 flex flex-col h-full">
              {/* Category Badge - Top Right Corner */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold z-10 shadow-lg">
                {blog.category}
              </div>

              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.category}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-between items-center px-6 relative -mt-6 mb-6 z-10">
                <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-full text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
                  Read More
                </button>
                
                <div 
                  className="relative"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white px-5 py-3 rounded-full flex items-center space-x-2 hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg">
                    <span className="text-sm">Share</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                  
                  {/* Social Share Dropdown */}
                  <div className={`absolute top-0 right-0 bg-gradient-to-r from-gray-800 to-gray-900 rounded-full px-5 py-3 flex space-x-3 transition-all duration-300 shadow-xl ${
                    hoveredCard === index ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                  }`}>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                    <a href="#" className="text-white hover:text-blue-400 transition-colors">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Blog Content */}
              <div className="px-6 pb-6 text-center flex-grow flex flex-col justify-between">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
                  alt={blog.author}
                  className="w-16 h-16 rounded-full border-4 border-white mx-auto mb-4 shadow-lg"
                />
                <h5 className="text-lg font-semibold text-gray-900 mb-1">
                  By {blog.author}
                </h5>
                <span className="text-gray-500 text-sm mb-4 block">
                  {blog.date}
                </span>
                <div className="flex-grow">
                  <p className="text-gray-600 leading-relaxed mb-6 text-left h-24 overflow-hidden">
                    {blog.description}
                  </p>
                </div>
              </div>

              {/* Footer Stats */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 flex justify-between items-center px-6 py-4 text-white text-sm">
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>
                  </svg>
                  <span>{blog.shares} Shares</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg className="w-4 h-4 text-yellow-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;