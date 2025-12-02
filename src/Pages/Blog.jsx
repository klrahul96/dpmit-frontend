import React, { useState } from 'react';
import { Calendar, User, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import SEO from '../Components/SEO';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Digital Marketing ROI: How to Measure Success in 2025",
      excerpt: "Learn the key metrics and strategies to maximize your digital marketing return on investment.",
      author: "DPM IT Solutions Team",
      date: "March 15, 2025",
      readTime: "8 min read",
      category: "Digital Marketing",
      image: "/assets/digital1.jpg",
      featured: true
    },
    {
      id: 2,
      title: "Social Media Marketing Trends That Actually Convert",
      excerpt: "Discover the latest social media strategies that drive real business results and customer engagement.",
      author: "DPM Marketing Team",
      date: "March 12, 2025",
      readTime: "10 min read",
      category: "Social Media",
      image: "/assets/Social-media-marketing-strategy.jpg"
    },
    {
      id: 3,
      title: "Complete Guide to Website Development in 2025",
      excerpt: "Everything you need to know about modern web development, from planning to deployment.",
      author: "DPM Development Team",
      date: "March 10, 2025",
      readTime: "12 min read",
      category: "Web Development",
      image: "/assets/development.jpg"
    },
    {
      id: 4,
      title: "SEO Strategies That Work: Boost Your Rankings",
      excerpt: "Proven SEO techniques to improve your website's visibility and drive organic traffic.",
      author: "DPM SEO Experts",
      date: "March 8, 2025",
      readTime: "15 min read",
      category: "SEO",
      image: "/assets/seo.png"
    },
    {
      id: 5,
      title: "Building High-Converting Landing Pages",
      excerpt: "Essential design and optimization tips for creating landing pages that drive conversions and sales.",
      author: "DPM Design Team",
      date: "March 5, 2025",
      readTime: "11 min read",
      category: "Web Development",
      image: "/assets/webdev.jpg"
    },
    {
      id: 6,
      title: "Google Ads vs Facebook Ads: Which is Better?",
      excerpt: "Comprehensive comparison of Google Ads and Facebook Ads to help you choose the right platform.",
      author: "DPM Marketing Experts",
      date: "March 3, 2025",
      readTime: "9 min read",
      category: "Paid Advertising",
      image: "/assets/ads.png"
    },
    {
      id: 7,
      title: "Content Marketing That Converts: A Step-by-Step Guide",
      excerpt: "Learn how to create compelling content that attracts customers and drives business growth.",
      author: "DPM Content Team",
      date: "March 1, 2025",
      readTime: "13 min read",
      category: "Content Marketing",
      image: "/assets/Content Marketing.jpg"
    },
    {
      id: 8,
      title: "Mobile-First Web Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first design in today's digital landscape.",
      author: "DPM IT Solutions",
      date: "February 28, 2025",
      readTime: "7 min read",
      category: "Web Development",
      image: "/assets/webdevelopment.jpg"
    }
  ];

  const categories = ['All', 'Digital Marketing', 'Web Development', 'SEO', 'Social Media', 'Paid Advertising', 'Content Marketing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = (selectedCategory === 'All' && !searchTerm) ? blogPosts.find(post => post.featured) : null;
  
  const regularPosts = featuredPost ? 
    filteredPosts.filter(post => !post.featured) : 
    filteredPosts;

  return (
    <>


      <div className="min-h-screen bg-gray-50 overflow-x-hidden">
        {/* Main Header Image - Responsive Heights */}
        <div className="relative h-48 sm:h-64 md:h-80 w-full overflow-hidden">
          <img 
            src="/assets/blog.jpg" 
            alt="Blog Header" 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.style.backgroundColor = '#f3f4f6';
              e.target.parentElement.style.background = 'linear-gradient(135deg, #f9fafb 0%, #f3f4f6 50%, #e5e7eb 100%)';
            }}
          />
        </div>

        {/* Blog Content Section - Responsive Padding */}
        <div className="max-w-8xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-10">
          
          {/* Search and Filter Section - Better Mobile Layout */}
          <div className="mb-8 sm:mb-12">
            <div className="flex flex-col gap-4 sm:gap-6">
              {/* Search Bar - Full Width on Mobile */}
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-4 h-4 sm:w-5 sm:h-5" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 sm:pl-10 pr-4 py-2 sm:py-3 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white shadow-sm"
                />
              </div>

              {/* Category Filter - Horizontal Scroll on Mobile */}
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap flex-shrink-0 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 shadow-sm'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Featured Post - Responsive Layout */}
          {featuredPost && (
            <div className="mb-8 sm:mb-12 md:mb-16">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8 flex items-center">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Featured Article</span>
              </h2>
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2">
                    <div className="h-48 sm:h-64 md:h-full relative overflow-hidden">
                      <img 
                        src={featuredPost.image}
                        alt={featuredPost.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          e.target.src = '/assets/default-blog.jpg';
                          e.target.onerror = null;
                        }}
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 p-4 sm:p-6 md:p-8">
                    <div className="flex items-center mb-3 sm:mb-4">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 sm:px-3 py-1 rounded-full">
                        {featuredPost.category}
                      </span>
                      <span className="ml-2 text-red-500 text-xs sm:text-sm font-bold">FEATURED</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 hover:text-blue-600 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {featuredPost.excerpt}
                    </p>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
                      <div className="flex flex-wrap items-center text-xs sm:text-sm text-gray-600 gap-2 sm:gap-0">
                        <div className="flex items-center mr-3 sm:mr-4">
                          <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
                          <span className="font-medium">{featuredPost.author}</span>
                        </div>
                        <div className="flex items-center mr-3 sm:mr-4">
                          <Calendar className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
                          <span>{featuredPost.date}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-500" />
                          <span>{featuredPost.readTime}</span>
                        </div>
                      </div>
                      <button className="flex items-center text-blue-600 text-sm sm:text-base font-semibold hover:text-blue-800 transition-colors group">
                        Read More
                        <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Content with Sidebar - Stack on Mobile */}
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            
            {/* Main Blog Content */}
            <div className="w-full lg:w-2/3">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-8">
                {selectedCategory === 'All' ? 'Latest Articles' : `${selectedCategory} Articles`}
                <span className="text-sm sm:text-lg font-normal text-gray-600 ml-2">({filteredPosts.length} articles)</span>
              </h2>
              
              {filteredPosts.length === 0 ? (
                <div className="text-center py-12 sm:py-16 bg-white rounded-xl shadow-sm">
                  <div className="text-4xl sm:text-6xl mb-4">🔍</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">No articles found</h3>
                  <p className="text-sm sm:text-base text-gray-500">Try adjusting your search terms or category filter.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {regularPosts.map(post => (
                    <article key={post.id} className="bg-white rounded-lg sm:rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100">
                      <div className="h-40 sm:h-48 relative overflow-hidden">
                        <img 
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.target.src = '/assets/default-blog.jpg';
                            e.target.onerror = null;
                          }}
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <div className="flex items-center mb-2 sm:mb-3">
                          <Tag className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2 text-blue-600" />
                          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                            {post.category}
                          </span>
                        </div>
                        <h3 className="text-base sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3 hover:text-blue-600 transition-colors cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base line-clamp-2">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-500" />
                            <span className="font-medium truncate max-w-[120px] sm:max-w-none">{post.author}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 sm:w-4 sm:h-4 mr-1 text-blue-500" />
                            <span>{post.readTime}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                          <span className="text-xs sm:text-sm text-gray-500 font-medium">{post.date}</span>
                          <button className="flex items-center text-blue-600 text-xs sm:text-sm font-semibold hover:text-blue-800 transition-colors group">
                            Read More
                            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                          </button>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>

            {/* Right Sidebar - Stack Below on Mobile */}
            <div className="w-full lg:w-1/3">
              <div className="lg:sticky lg:top-8 space-y-6 sm:space-y-8">
                
                {/* About DPM IT Solutions */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-blue-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 opacity-10">
                    <img 
                      src="/assets/logo.png" 
                      alt="DPM Logo" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">About DPM IT Solutions</h3>
                  <div className="flex items-center mb-3 sm:mb-4">
                    <img 
                      src="/assets/about.jpg" 
                      alt="About DPM" 
                      className="w-12 sm:w-16 h-12 sm:h-16 rounded-lg object-cover mr-3 sm:mr-4"
                      onError={(e) => {
                        e.target.src = '/assets/company-logo.png';
                        e.target.onerror = null;
                      }}
                    />
                    <div>
                      <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                        Leading digital marketing and web development company helping businesses grow online.
                      </p>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-semibold shadow-sm w-full sm:w-auto">
                    Learn More
                  </button>
                </div>

                {/* Popular Posts */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center">
                    🔥 Popular Posts
                  </h3>
                  <div className="space-y-3 sm:space-y-4">
                    {blogPosts.slice(0, 4).map((post, index) => (
                      <div key={post.id} className="flex items-start space-x-2 sm:space-x-3 pb-3 sm:pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors cursor-pointer">
                        <div className="relative flex-shrink-0">
                          <img 
                            src={post.image} 
                            alt={post.title}
                            className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg object-cover"
                            onError={(e) => {
                              e.target.src = '/assets/default-thumbnail.jpg';
                              e.target.onerror = null;
                            }}
                          />
                          <span className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 bg-blue-600 text-white text-xs font-bold px-1 sm:px-1.5 py-0.5 rounded-full min-w-4 sm:min-w-5 text-center">
                            {index + 1}
                          </span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-gray-800 hover:text-blue-600 leading-tight mb-1 line-clamp-2">
                            {post.title}
                          </h4>
                          <p className="text-xs text-gray-600">{post.date} • {post.readTime}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Categories Widget */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">Categories</h3>
                  <div className="space-y-2">
                    {categories.filter(cat => cat !== 'All').map(category => {
                      const count = blogPosts.filter(post => post.category === category).length;
                      const categoryIcons = {
                        'Digital Marketing': '📊',
                        'Web Development': '💻',
                        'SEO': '🔍',
                        'Social Media': '📱',
                        'Paid Advertising': '🎯',
                        'Content Marketing': '✍️'
                      };
                      return (
                        <button
                          key={category}
                          onClick={() => setSelectedCategory(category)}
                          className={`w-full flex items-center justify-between p-2 sm:p-3 rounded-lg transition-colors text-left ${
                            selectedCategory === category 
                              ? 'bg-blue-100 text-blue-700 border border-blue-200' 
                              : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
                          }`}
                        >
                          <span className="text-xs sm:text-sm font-medium flex items-center">
                            <span className="mr-2">{categoryIcons[category]}</span>
                            <span className="truncate">{category}</span>
                          </span>
                          <span className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full font-semibold flex-shrink-0">
                            {count}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Contact CTA */}
                <div className="relative bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg sm:rounded-xl p-4 sm:p-6 text-white shadow-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-10">
                    <img 
                      src="/assets/contact-bg.jpg" 
                      alt="Contact Background" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">Need Expert Help?</h3>
                    <p className="text-purple-100 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                      Get personalized digital marketing and web development solutions for your business.
                    </p>
                    <button className="w-full bg-white text-purple-600 font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg hover:bg-gray-100 transition-colors shadow-sm text-xs sm:text-sm">
                      Get Free Consultation
                    </button>
                  </div>
                </div>

                {/* Recent Comments */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">💬 Recent Comments</h3>
                  <div className="space-y-3 sm:space-y-4">
                    {[
                      { name: "Rajesh Kumar", comment: "Great insights on digital marketing ROI!", time: "2 hours ago", avatar: "/assets/avatar-1.jpg" },
                      { name: "Priya Sharma", comment: "This SEO guide really helped my website.", time: "1 day ago", avatar: "/assets/avatar-2.jpg" },
                      { name: "Amit Singh", comment: "Excellent web development tips!", time: "2 days ago", avatar: "/assets/avatar-3.jpg" }
                    ].map((comment, index) => (
                      <div key={index} className="border-b border-gray-100 last:border-b-0 pb-3 last:pb-0 hover:bg-gray-50 rounded-lg p-2 -m-2 transition-colors">
                        <div className="flex items-center space-x-2 mb-2">
                          <div className="w-7 sm:w-8 h-7 sm:h-8 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={comment.avatar} 
                              alt={comment.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentElement.innerHTML = `<div class="w-7 sm:w-8 h-7 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center"><span class="text-blue-600 text-xs font-bold">${comment.name.charAt(0)}</span></div>`;
                              }}
                            />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{comment.name}</p>
                            <p className="text-xs text-gray-600">{comment.time}</p>
                          </div>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-700 ml-9 sm:ml-10">"{comment.comment}"</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 opacity-5">
                    <img 
                      src="/assets/newsletter-icon.png" 
                      alt="Newsletter" 
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">📧 Subscribe to Our Newsletter</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">Get the latest digital marketing tips and web development insights delivered to your inbox.</p>
                  <div className="space-y-2 sm:space-y-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-xs sm:text-sm"
                    />
                    <button className="w-full bg-blue-600 text-white py-2 px-3 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm font-semibold">
                      Subscribe Now
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Blog;