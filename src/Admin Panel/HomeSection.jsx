import React, { useState, useEffect } from 'react';
import { Edit, Save, X, Plus, Trash2, ChevronDown, ChevronUp, Phone, Mail, MapPin, ExternalLink, Image as ImageIcon, Star, ArrowRight, ChevronLeft, ChevronRight, User, Building, MessageSquare, CheckCircle, AlertCircle, Check, Upload, Camera } from 'lucide-react';
import HeroSectionAdmin from './Components/HeroSectionAdmin';
import AboutSectionAdmin from './Components/AboutSectionAdmin';
import ServicesSectionAdmin from './Components/ServicesSectionAdmin';
import AgencyServicesSectionAdmin from './Components/AgencyServicesSectionAdmin';
import PortfolioSectionAdmin from './Components/PortfolioSectionAdmin';
import FaqSectionAdmin from './Components/FaqSectionAdmin';
import TestimonialSectionAdmin from './Components/TestimonialSectionAdmin';
import ContactSectionAdmin from './Components/ContactSectionAdmin';
import FooterSectionAdmin from './Components/FooterSectionAdmin';
import TeamSectionAdmin from './Components/TeamSectionAdmin';

// ✅ Backend URL
const API_BASE = "http://localhost:5000";

export default function CompleteAdminPanel() {
  const [websiteContent, setWebsiteContent] = useState({
    hero: {
      title: "Transform Your Business with Digital Excellence",
      subtitle: "Leading Web Development & Digital Marketing Solutions",
      buttonText: "Get Started",
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80"
    },
    about: {
      subtitle: "About Us",
      title: "DPM IT Solutions - Defining Real Success for Your Business",
      paragraphs: [
        "We are a web development company creating digital solutions that drive real success for your business. Our expertise spans across multiple digital domains to ensure your business thrives in the digital landscape. We specialize in innovative technology solutions.",
        "DPM IT Solutions stands for Dynamic Process Management - your trusted partner in digital transformation. We provide Website Design, SEO, GMB management, Social Media Marketing, and App Development solutions. Our comprehensive services ensure complete digital presence.",
        "Our team focuses on delivering innovative, user-friendly websites and digital marketing strategies that enhance your online presence and help your business reach its target audience effectively. We create scalable solutions for sustainable growth."
      ],
      buttonText: "More Details",
      image1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=626&q=80",
      image2: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=626&q=80"
    },
    services: {
      sectionSubtitle: "Our Services",
      sectionTitle: "Services Built Specifically",
      sectionTitleHighlight: "For Your Business",
      sectionDescription: "Comprehensive digital solutions that drive growth and deliver exceptional results",
      services: [
        {
          icon: "fa fa-globe",
          title: "Website Development",
          description: "Transform your business with stunning, responsive websites that captivate your audience and drive conversions. Our expert developers create fast-loading, mobile-optimized sites that establish your powerful online presence.",
          features: ["Responsive Design", "Fast Loading Speed", "Mobile Optimized", "SEO Ready"],
          highlights: [
            "Modern UI/UX Design",
            "Cross-browser Compatibility", 
            "Performance Optimization",
            "Custom Functionality"
          ],
          image: "/assets/code.jpg",
          path: "/services/website-development"
        },
        {
          icon: "fa fa-search",
          title: "Search Engine Optimization",
          description: "Dominate search results and attract quality leads with our proven SEO strategies. We boost your website's visibility on Google and other major search engines through comprehensive optimization techniques.",
          features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
          highlights: [
            "Local SEO Optimization",
            "Competitor Analysis",
            "Link Building Strategy", 
            "Performance Tracking"
          ],
          image: "/assets/seopa.jpg",
          path: "/services/seo"
        },
        {
          icon: "fa fa-share-alt",
          title: "Social Media Marketing",
          description: "Build brand awareness and engage your audience across all major social platforms. Our targeted campaigns convert followers into loyal customers through strategic content and community building.",
          features: ["Content Creation", "Audience Targeting", "Campaign Management", "Analytics"],
          highlights: [
            "Platform-specific Strategy",
            "Influencer Partnerships",
            "Community Management",
            "ROI Optimization"
          ],
          image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
          path: "/services/social-media-marketing"
        },
        {
          icon: "fa fa-map-marker-alt", 
          title: "Google My Business",
          description: "Optimize your local business presence and help customers find you easily. Our professional GMB management increases your local visibility and drives more foot traffic to your business.",
          features: ["Local SEO", "Review Management", "Business Optimization", "Local Listings"],
          highlights: [
            "Google Maps Optimization",
            "Customer Review Strategy",
            "Local Citation Building",
            "Competitor Monitoring"
          ],
          image: "/assets/gmbimage.jpg",
          path: "/services/google-my-business"
        },
        {
          icon: "fa fa-bullhorn",
          title: "Digital Marketing",
          description: "Comprehensive digital marketing solutions that drive growth and maximize ROI. From PPC campaigns to email marketing, we create integrated strategies that deliver measurable results.",
          features: ["PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Conversion Optimization"],
          highlights: [
            "Multi-channel Strategy",
            "A/B Testing & Optimization",
            "Customer Journey Mapping",
            "Performance Analytics"
          ],
          image: "/assets/7_digital_skills.png",
          path: "/services/digital-marketing"
        },
        {
          icon: "fa fa-mobile-alt",
          title: "App Development", 
          description: "Create powerful mobile applications that provide seamless user experiences and drive business growth. We develop custom apps for iOS and Android platforms with cutting-edge technology.",
          features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"],
          highlights: [
            "Native Performance",
            "Cloud Integration",
            "Push Notifications",
            "App Store Optimization"
          ],
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
          path: "/services/app-development"
        }
      ]
    },
    agencyServices: {
      sectionSubtitle: "Company Benefits",
      sectionTitle: "Why You Should Choose",
      sectionTitleHighlight: "Agency Services",
      description: "We are 100+ professional software engineers with more than 8 years of experience in delivering superior products. Believe it because you've seen it. Here are real numbers",
      features: [
        "First Working Process",
        "Dedicated Team", 
        "24/7 Hours Support",
        "Handle By Expert"
      ],
      buttonText: "BOOK NOW",
      image: "/assets/we.png"
    },
    portfolio: {
      sectionSubtitle: "Our Work",
      sectionTitle: "Creative Portfolio",
      sectionDescription: "Showcasing our expertise in website design, SEO optimization, and digital marketing solutions that boost your online presence and drive results.",
      images: [
        "/assets/web12.png",
        "/assets/web1.png",
        "/assets/web5.png",
        "/assets/web2.png",
        "/assets/web9.png",
        "/assets/web10.jpg",
        "/assets/web11.png",
        "/assets/web13.png",
        "/assets/web14.png",
        "/assets/web15.png.jpeg",
        "/assets/web16.png",
        "/assets/web17.png",
        "/assets/web18.png"
      ],
      logos: [
        { src: "/assets/1.png", width: 80, height: 80 },
        { src: "/assets/2.png", width: 95, height: 95 },
        { src: "/assets/3.png", width: 70, height: 70 },
        { src: "/assets/4.png", width: 180, height: 180 },
        { src: "/assets/5.png", width: 125, height: 125 },
        { src: "/assets/6.png", width: 80, height: 80 },
        { src: "/assets/7.png", width: 125, height: 125 },
        { src: "/assets/9.png", width: 105, height: 105 },
        { src: "/assets/10.png", width: 150, height: 150 },
        { src: "/assets/11.png", width: 85, height: 85 },
        { src: "/assets/12.png.jpeg", width: 70, height: 70 },
        { src: "/assets/13.png", width: 190, height: 190 },
        { src: "/assets/14.png", width: 80, height: 80 }
      ]
    },
    faq: {
      sectionSubtitle: "FAQs",
      sectionTitle: "Frequently Asked Questions",
      sectionDescription: "We have professional experts around world.",
      assistanceTitle: "Still Need Assistance?",
      phoneNumber: "+919650413450",
      whatsappMessage: "🙏 Welcome to DPM IT Solutions. How can we help you today?",
      faqs: [
        {
          question: "What is SEO and why is it important?",
          answer: "The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies."
        },
        {
          question: "How long does it take to see results from SEO?",
          answer: "SEO results vary, but most websites begin to see noticeable improvements in 3–6 months."
        },
        {
          question: "What is the difference between SEO and PPC?",
          answer: "SEO generates organic traffic while PPC involves paid ads that provide immediate traffic."
        },
        {
          question: "How do you measure the success of SEO campaigns?",
          answer: "We use metrics like organic traffic, keyword ranking, CTR, and ROI."
        },
        {
          question: "How much do your SEO services cost?",
          answer: "It depends on your industry, competition, keywords, and overall goals. We create customized plans based on your business needs."
        },
        {
          question: "What other digital marketing services do you offer?",
          answer: "We offer PPC, content marketing, social media management, and more."
        },
        {
          question: "How do you determine the right keywords for my business?",
          answer: "By analyzing search volume, competition, relevance, and user intent through detailed research."
        },
        {
          question: "How can I contact you for SEO or marketing services?",
          answer: "You can reach out to us via phone at +91 96504 13450 or send a message through our Contact Us page."
        }
      ]
    },
    team: {
      sectionSubtitle: "Our Team",
      sectionTitle: "Meet our expert Team",
      members: [
        {
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
          name: "Hariom Sir",
          designation: "IT Team Head"
        },
        {
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
          name: "John Doe",
          designation: "Senior Developer"
        },
        {
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&auto=format&fit=crop&q=80",
          name: "Jane Smith",
          designation: "UI/UX Designer"
        }
      ]
    },
    testimonial: {
      sectionSubtitle: "CLIENT STORIES",
      sectionTitle: "Success Stories How Feedback Drives Our Results",
      overallRating: "4.9",
      overallDescription: "DPM IT Solutions - Transforming businesses through digital excellence",
      testimonials: [
        {
          name: "Rabb Da Radio",
          company: "Scrap Motors",
          companyAccent: "Scrap",
          companyAccentColor: "Motors",
          rating: 5,
          text: "Looking for the best IT company in delhi NCR? Choose DPM IT SOLUTIONS Delhi. Their agile developers delivered bug-free software on time, handle our cloud migration flawlessly, and grew our site's organic traffic by 60% with local SEO. Top class tech talent right here in delhi - highly recommend.",
          author: "Rabb Da Radio",
          position: "Business Owner",
          avatar: "/assets/rabb.jpg",
          avatarBg: "bg-red-200"
        },
        {
          name: "Sarah Johnson",
          company: "Tech Innovations",
          companyAccent: "Tech",
          companyAccentColor: "Innovations",
          rating: 5,
          text: "Exceptional service! Our mobile app development project was completed ahead of schedule with outstanding quality. The team was professional and communicative throughout.",
          author: "Sarah Johnson",
          position: "CEO",
          avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&auto=format&fit=crop&q=80",
          avatarBg: "bg-blue-200"
        }
      ]
    },
    contact: {
      sectionSubtitle: "Get In Touch",
      sectionTitle: "Contact for any query",
      sectionDescription: "Ready to boost your online presence? Let's discuss your digital goals and create a customized strategy that delivers real results.",
      contactInfo: [
        {
          icon: "fas fa-map-marker-alt",
          title: "Address",
          content: "Tilak Nagar, New Delhi - 110018",
          link: "https://maps.app.goo.gl/vFTreRL9MdoP6S5x6",
        },
        {
          icon: "fa fa-phone",
          title: "Call Us",
          content: "+91 9650413450",
          link: "tel:+91 9650413450",
        },
        {
          icon: "fa fa-envelope",
          title: "Email Us",
          content: "info@dpmitsolutions.com",
          link: "mailto:info@dpmitsolutions.com",
        }
      ],
      formTitle: "Send us a Message",
      formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.722320514012!2d77.08819439999999!3d28.638083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE3LjEiTiA3N8KwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1759139049395!5m2!1sen!2sin",
      web3formsAccessKey: "19c14e84-11c8-440d-ae32-fe5413a0dcec"
    },
    footer: {
      companyInfo: {
        name: "DPMIT",
        description: "Leading IT solutions provider specializing in web development, mobile applications, digital marketing, and custom software solutions. We transform your digital vision into reality."
      },
      quickLinks: [
        { name: "Home", to: "/" },
        { name: "About", to: "/about" },
        { name: "Contact", to: "/contact" }
      ],
      serviceLinks: [
        { name: "Website Development", to: "/services/website-development", icon: "fas fa-code" },
        { name: "Search Engine Optimization", to: "/services/seo", icon: "fas fa-search" },
        { name: "Social Media Marketing", to: "/services/social-media-marketing", icon: "fas fa-share-alt" },
        { name: "Google My Business", to: "/services/google-my-business", icon: "fas fa-map-marker-alt" },
        { name: "Digital Marketing", to: "/services/digital-marketing", icon: "fas fa-bullhorn" },
        { name: "App Development", to: "/services/app-development", icon: "fas fa-mobile-alt" }
      ],
      contactInfo: [
        { 
          title: "Address", 
          content: "Tilak Nagar,New Delhi - 110018", 
          link: "https://maps.app.goo.gl/vFTreRL9MdoP6S5x6", 
          icon: "fas fa-map-marker-alt" 
        },
        { 
          title: "Phone", 
          content: "+91 9650413450", 
          link: "tel:+91 9650413450", 
          icon: "fas fa-phone" 
        },
        { 
          title: "Email", 
          content: "info@dpmitsolutions.com", 
          link: "mailto:info@dpmitsolutions.com", 
          icon: "fas fa-envelope" 
        }
      ],
      socialLinks: [
        { 
          name: "Facebook", 
          href: "https://www.facebook.com/dpmitsolution/",
          bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
          icon: "fab fa-facebook-f"
        },
        { 
          name: "Instagram", 
          href: "https://instagram.com/dpmitsolutions",
          bgColor: "bg-gradient-to-br from-pink-400 to-purple-600",
          icon: "fab fa-instagram"
        },
        { 
          name: "LinkedIn", 
          href: "https://linkedin.com/company/dpmitsolutions",
          bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
          icon: "fab fa-linkedin-in"
        },
        { 
          name: "Twitter", 
          href: "https://twitter.com/dpmitsolutions",
          bgColor: "bg-gradient-to-br from-blue-300 to-blue-500",
          icon: "fab fa-twitter"
        }
      ],
      paymentMethods: {
        showQR: true,
        qrImage: "/assets/qr-code.png",
        paymentIcons: [
          "/assets/upi-icon.webp",
          "/assets/visa.png",
          "/assets/mastercard.png",
          "/assets/paypal.png"
        ]
      },
      copyright: {
        text: "Copyright © 2017 - {currentYear} DPM IT Solutions All Rights Reserved Managed by DPM IT Solutions - ",
        googlePromotionLink: {
          text: "Google Promotion Services in Delhi",
          to: "/services/google-promotion"
        },
        endingText: " | Best Google Promotion Company in India"
      }
    }
  });

  const [editingSection, setEditingSection] = useState(null);
  const [tempData, setTempData] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    hero: true,
    about: false,
    services: false,
    agencyServices: false,
    portfolio: false,
    faq: false,
    team: false,
    testimonial: false,
    contact: false,
    footer: false
  });

  useEffect(() => {
    fetchAllContent();
  }, []);

  const fetchAllContent = async () => {
    try {
      const sections = [
        "hero",
        "about",
        "services",
        "agencyServices",
        "portfolio",
        "faq",
        "team",
        "testimonial",
        "contact",
        "footer"
      ];

      // current defaults ka copy
      let updated = { ...websiteContent };

      for (const section of sections) {
        try {
          const res = await fetch(`${API_BASE}/api/content/${section}`);
          const json = await res.json();

          // ✅ sirf tab overwrite karo jab DB me actual data ho
          if (
            json.success &&
            json.data &&
            Object.keys(json.data).length > 0
          ) {
            // defaults + DB data merge
            updated[section] = {
              ...updated[section],
              ...json.data,
            };
          }
        } catch (err) {
          console.error(`Error loading ${section}:`, err);
        }
      }

      setWebsiteContent(updated);
    } catch (err) {
      console.error("Error loading website content", err);
    }
  };

  const handleImageUpload = (event, fieldPath, index = null, subField = null) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Please select an image file (JPEG, PNG, WebP, etc.)');
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert('Image size should be less than 5MB');
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const imageUrl = e.target.result;
        
        if (editingSection) {
          setTempData(prev => {
            const newData = JSON.parse(JSON.stringify(prev));
            
            if (index !== null && subField !== null) {
              newData[fieldPath][index][subField] = imageUrl;
            } else if (index !== null) {
              newData[fieldPath][index] = imageUrl;
            } else if (subField !== null) {
              newData[fieldPath][subField] = imageUrl;
            } else {
              newData[fieldPath] = imageUrl;
            }
            
            return newData;
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const startEditing = (section, data) => {
    setEditingSection(section);

    // ⭐ CONTACT SECTION - Properly initialize all data
    if (section === "contact") {
      setTempData({
        sectionSubtitle: data?.sectionSubtitle || "Get In Touch",
        sectionTitle: data?.sectionTitle || "Contact for any query",
        sectionDescription: data?.sectionDescription || "Ready to boost your online presence? Let's discuss your digital goals and create a customized strategy that delivers real results.",
        formTitle: data?.formTitle || "Send us a Message",
        formDescription: data?.formDescription || "Fill out the form below and we'll get back to you within 24 hours.",
        web3formsAccessKey: data?.web3formsAccessKey || "19c14e84-11c8-440d-ae32-fe5413a0dcec",
        mapEmbed: data?.mapEmbed || "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.722320514012!2d77.08819439999999!3d28.638083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE3LjEiTiA3N8KwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1759139049395!5m2!1sen!2sin",
        contactInfo: data?.contactInfo && Array.isArray(data.contactInfo) && data.contactInfo.length > 0 ? data.contactInfo : [
          {
            icon: "fas fa-map-marker-alt",
            title: "Address",
            content: "Tilak Nagar, New Delhi - 110018",
            link: "https://maps.app.goo.gl/vFTreRL9MdoP6S5x6",
          },
          {
            icon: "fa fa-phone",
            title: "Call Us",
            content: "+91 9650413450",
            link: "tel:+91 9650413450",
          },
          {
            icon: "fa fa-envelope",
            title: "Email Us",
            content: "info@dpmitsolutions.com",
            link: "mailto:info@dpmitsolutions.com",
          }
        ]
      });
      return;
    }

    // ⭐ FAQ SECTION - Load all 8 FAQs
    if (section === "faq") {
      const defaultFaqs = [
        {
          question: "What is SEO and why is it important?",
          answer: "The practice of optimizing your website and content to improve its visibility on search engines like Google, Bing, and Yahoo. It involves a combination of strategies."
        },
        {
          question: "How long does it take to see results from SEO?",
          answer: "SEO results vary, but most websites begin to see noticeable improvements in 3–6 months."
        },
        {
          question: "What is the difference between SEO and PPC?",
          answer: "SEO generates organic traffic while PPC involves paid ads that provide immediate traffic."
        },
        {
          question: "How do you measure the success of SEO campaigns?",
          answer: "We use metrics like organic traffic, keyword ranking, CTR, and ROI."
        },
        {
          question: "How much do your SEO services cost?",
          answer: "It depends on your industry, competition, keywords, and overall goals. We create customized plans based on your business needs."
        },
        {
          question: "What other digital marketing services do you offer?",
          answer: "We offer PPC, content marketing, social media management, and more."
        },
        {
          question: "How do you determine the right keywords for my business?",
          answer: "By analyzing search volume, competition, relevance, and user intent through detailed research."
        },
        {
          question: "How can I contact you for SEO or marketing services?",
          answer: "You can reach out to us via phone at +91 96504 13450 or send a message through our Contact Us page."
        }
      ];

      setTempData({
        ...data,
        faqs: data.faqs && data.faqs.length > 0 ? data.faqs : defaultFaqs
      });
      return;
    }

    // ⭐ PORTFOLIO SECTION - Load all 13 items
    if (section === "portfolio") {
      const defaultPortfolioImages = [
        "/assets/web12.png",
        "/assets/web1.png",
        "/assets/web5.png",
        "/assets/web2.png",
        "/assets/web9.png",
        "/assets/web10.jpg",
        "/assets/web11.png",
        "/assets/web13.png",
        "/assets/web14.png",
        "/assets/web15.png.jpeg",
        "/assets/web16.png",
        "/assets/web17.png",
        "/assets/web18.png"
      ];

      const defaultPortfolioLogos = [
        { src: "/assets/1.png", width: 80, height: 80 },
        { src: "/assets/2.png", width: 95, height: 95 },
        { src: "/assets/3.png", width: 70, height: 70 },
        { src: "/assets/4.png", width: 180, height: 180 },
        { src: "/assets/5.png", width: 125, height: 125 },
        { src: "/assets/6.png", width: 80, height: 80 },
        { src: "/assets/7.png", width: 125, height: 125 },
        { src: "/assets/9.png", width: 105, height: 105 },
        { src: "/assets/10.png", width: 150, height: 150 },
        { src: "/assets/11.png", width: 85, height: 85 },
        { src: "/assets/12.png.jpeg", width: 70, height: 70 },
        { src: "/assets/13.png", width: 190, height: 190 },
        { src: "/assets/14.png", width: 80, height: 80 }
      ];

      setTempData({
        ...data,
        images: data.images && data.images.length >= 13 ? data.images : defaultPortfolioImages,
        logos: data.logos && data.logos.length >= 13 ? data.logos : defaultPortfolioLogos
      });
      return;
    }

    // ⭐ SERVICES SECTION - Ensure all 6 services are loaded
    if (section === "services") {
      const defaultServices = [
        {
          icon: "fa fa-globe",
          title: "Website Development",
          description: "Transform your business with stunning, responsive websites that captivate your audience and drive conversions.",
          features: ["Responsive Design", "Fast Loading Speed", "Mobile Optimized", "SEO Ready"],
          highlights: ["Modern UI/UX Design", "Cross-browser Compatibility", "Performance Optimization", "Custom Functionality"],
          image: "/assets/code.jpg",
          path: "/services/website-development"
        },
        {
          icon: "fa fa-search",
          title: "Search Engine Optimization",
          description: "Dominate search results and attract quality leads with our proven SEO strategies.",
          features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Content Strategy"],
          highlights: ["Local SEO Optimization", "Competitor Analysis", "Link Building Strategy", "Performance Tracking"],
          image: "/assets/seopa.jpg",
          path: "/services/seo"
        },
        {
          icon: "fa fa-share-alt",
          title: "Social Media Marketing",
          description: "Build brand awareness and engage your audience across all major social platforms.",
          features: ["Content Creation", "Audience Targeting", "Campaign Management", "Analytics"],
          highlights: ["Platform-specific Strategy", "Influencer Partnerships", "Community Management", "ROI Optimization"],
          image: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
          path: "/services/social-media-marketing"
        },
        {
          icon: "fa fa-map-marker-alt", 
          title: "Google My Business",
          description: "Optimize your local business presence and help customers find you easily.",
          features: ["Local SEO", "Review Management", "Business Optimization", "Local Listings"],
          highlights: ["Google Maps Optimization", "Customer Review Strategy", "Local Citation Building", "Competitor Monitoring"],
          image: "/assets/gmbimage.jpg",
          path: "/services/google-my-business"
        },
        {
          icon: "fa fa-bullhorn",
          title: "Digital Marketing",
          description: "Comprehensive digital marketing solutions that drive growth and maximize ROI.",
          features: ["PPC Campaigns", "Email Marketing", "Analytics & Reporting", "Conversion Optimization"],
          highlights: ["Multi-channel Strategy", "A/B Testing & Optimization", "Customer Journey Mapping", "Performance Analytics"],
          image: "/assets/7_digital_skills.png",
          path: "/services/digital-marketing"
        },
        {
          icon: "fa fa-mobile-alt",
          title: "App Development", 
          description: "Create powerful mobile applications that provide seamless user experiences.",
          features: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design"],
          highlights: ["Native Performance", "Cloud Integration", "Push Notifications", "App Store Optimization"],
          image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
          path: "/services/app-development"
        }
      ];

      setTempData({
        sectionSubtitle: data?.sectionSubtitle || "Our Services",
        sectionTitle: data?.sectionTitle || "Services Built Specifically",
        sectionTitleHighlight: data?.sectionTitleHighlight || "For Your Business",
        sectionDescription: data?.sectionDescription || "Comprehensive digital solutions that drive growth and deliver exceptional results",
        services: data?.services && data.services.length >= 6 ? data.services : defaultServices
      });
      return;
    }

    setTempData(JSON.parse(JSON.stringify(data)));
  };

  const saveChanges = async (section) => {
    try {
      const token = localStorage.getItem("adminToken") || "";

      const res = await fetch(`${API_BASE}/api/content/${section}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": token
        },
        body: JSON.stringify(tempData)
      });

      const json = await res.json();

      if (json.success) {
        setWebsiteContent(prev => ({
          ...prev,
          [section]: json.data || tempData
        }));
        alert(`✅ ${section.toUpperCase()} updated successfully!`);
      } else {
        alert(`❌ Error updating ${section}: ${json.message}`);
      }

    } catch (error) {
      alert(`❌ Error: ${error.message}`);
    }

    setEditingSection(null);
    setTempData({});
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const commonProps = {
    websiteContent,
    editingSection,
    tempData,
    setTempData,
    expandedSections,
    toggleSection,
    startEditing,
    saveChanges,
    cancelEditing,
    handleImageUpload
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-4 md:p-8">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-2xl p-6 md:p-8 mb-8 text-white">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">🚀 DPM IT Solutions</h1>
              <p className="text-blue-100 text-lg">Complete Website Content Management System</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl border border-white/30">
              <p className="text-sm font-medium">Admin Panel v3.0</p>
              <p className="text-xs opacity-80">✅ Backend Integrated</p>
            </div>
          </div>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-10 gap-4 mb-8">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Sections</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📦</span>
              </div>
            </div>
            <p className="text-3xl font-bold">10</p>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Services</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">⚙️</span>
              </div>
            </div>
            <p className="text-3xl font-bold">6</p>
          </div>
          
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Team</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">👥</span>
              </div>
            </div>
            <p className="text-3xl font-bold">3</p>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">FAQs</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">❓</span>
              </div>
            </div>
            <p className="text-3xl font-bold">8</p>
          </div>
          
          <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Portfolio</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎨</span>
              </div>
            </div>
            <p className="text-3xl font-bold">13</p>
          </div>
          
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Logos</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🏷️</span>
              </div>
            </div>
            <p className="text-3xl font-bold">13</p>
          </div>
          
          <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Testimonials</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
            </div>
            <p className="text-3xl font-bold">2</p>
          </div>
          
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Contact Info</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">📞</span>
              </div>
            </div>
            <p className="text-3xl font-bold">3</p>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Agency Features</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🎯</span>
              </div>
            </div>
            <p className="text-3xl font-bold">4</p>
          </div>
          
          <div className="bg-gradient-to-br from-gray-500 to-gray-600 text-white rounded-xl shadow-lg p-5 transform hover:scale-105 transition">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm opacity-90">Footer Links</p>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-xl">🔗</span>
              </div>
            </div>
            <p className="text-3xl font-bold">15</p>
          </div>
        </div>

        {/* All Section Editors */}
        <div className="space-y-6">
          <HeroSectionAdmin {...commonProps} />
          <AboutSectionAdmin {...commonProps} />
          <ServicesSectionAdmin {...commonProps} />
          <AgencyServicesSectionAdmin {...commonProps} />
          <PortfolioSectionAdmin {...commonProps} />
          <TeamSectionAdmin {...commonProps} />
          <FaqSectionAdmin {...commonProps} />
          <TestimonialSectionAdmin {...commonProps} />
          <ContactSectionAdmin {...commonProps} />
          <FooterSectionAdmin {...commonProps} />
        </div>
      </div>
    </div>
  );
}