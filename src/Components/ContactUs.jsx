import React, { useState, useEffect } from "react";
import { User, Mail, Phone, Building, MessageSquare, CheckCircle, AlertCircle, Loader } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });
  
  const [submitStatus, setSubmitStatus] = useState({
    submitted: false,
    success: false,
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [contactContent, setContactContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // ⭐ Fetch contact content from backend
  useEffect(() => {
    fetchContactContent();
  }, []);

  const fetchContactContent = async () => {
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/api/content/contact");
      const json = await response.json();

      if (json.success && json.data) {
        setContactContent(json.data);
      } else {
        // Fallback to default data
        setContactContent({
          sectionSubtitle: "Get In Touch",
          sectionTitle: "Contact for any query",
          sectionDescription: "Ready to boost your online presence? Let's discuss your digital goals and create a customized strategy that delivers real results.",
          formTitle: "Send us a Message",
          formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
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
            },
          ],
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.722320514012!2d77.08819439999999!3d28.638083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE3LjEiTiA3N8KwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1759139049395!5m2!1sen!2sin",
          web3formsAccessKey: "19c14e84-11c8-440d-ae32-fe5413a0dcec"
        });
      }
    } catch (error) {
      console.error("Error fetching contact content:", error);
      // Fallback to default
      setContactContent({
        sectionSubtitle: "Get In Touch",
        sectionTitle: "Contact for any query",
        sectionDescription: "Ready to boost your online presence?",
        formTitle: "Send us a Message",
        formDescription: "Fill out the form below and we'll get back to you within 24 hours.",
        contactInfo: [
          { icon: "fas fa-map-marker-alt", title: "Address", content: "Tilak Nagar, New Delhi - 110018", link: "https://maps.app.goo.gl/vFTreRL9MdoP6S5x6" },
          { icon: "fa fa-phone", title: "Call Us", content: "+91 9650413450", link: "tel:+91 9650413450" },
          { icon: "fa fa-envelope", title: "Email Us", content: "info@dpmitsolutions.com", link: "mailto:info@dpmitsolutions.com" },
        ],
        mapEmbed: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3501.722320514012!2d77.08819439999999!3d28.638083299999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM4JzE3LjEiTiA3N8KwMDUnMTcuNSJF!5e0!3m2!1sen!2sin!4v1759139049395!5m2!1sen!2sin",
        web3formsAccessKey: "19c14e84-11c8-440d-ae32-fe5413a0dcec"
      });
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ submitted: false, success: false, message: "" });

    try {
      const accessKey = contactContent?.web3formsAccessKey || "19c14e84-11c8-440d-ae32-fe5413a0dcec";

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: "DPMIT Solutions Contact Form"
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus({
          submitted: true,
          success: true,
          message: "Thank you! Your message has been sent successfully. We'll get back to you soon."
        });
        
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          company: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSubmitStatus({ submitted: false, success: false, message: "" });
        }, 5000);
      } else {
        throw new Error(result.message || "Something went wrong");
      }
    } catch (error) {
      setSubmitStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again or contact us directly."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16">
        <div className="container mx-auto px-4 flex items-center justify-center h-96">
          <div className="text-center">
            <Loader className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
            <p className="text-gray-600">Loading contact information...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-7 sm:py-10">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header - Dynamic from Backend */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h5 className="text-blue-600 text-lg sm:text-xl font-semibold mb-3">
            {contactContent?.sectionSubtitle || "Get In Touch"}
          </h5>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {contactContent?.sectionTitle || "Contact for any query"}
          </h1>
          <p className="text-base sm:text-xl text-gray-800">
            {contactContent?.sectionDescription || "Ready to boost your online presence?"}
          </p>
        </div>

        {/* Contact Info Cards - Dynamic from Backend */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contactContent?.contactInfo?.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300"
            >
              <div className="flex flex-col items-center sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-700 to-blue-700 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  <i className={info.icon}></i>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-blue-600 text-xl font-semibold mb-1">
                    {info.title}
                  </h4>
                  <a
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-900 hover:text-blue-600 transition-colors block break-words text-lg"
                  >
                    {info.content}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map - Dynamic from Backend */}
          <div className="rounded-2xl overflow-hidden shadow-lg order-2 lg:order-1 h-80 lg:h-auto">
            {contactContent?.mapEmbed ? (
              <iframe
                src={contactContent.mapEmbed}
                className="w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              ></iframe>
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Map not available</p>
              </div>
            )}
          </div>

          {/* Form - Dynamic from Backend */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {contactContent?.formTitle || "Send us a Message"}
              </h2>
              <p className="text-gray-800 text-lg sm:text-base">
                {contactContent?.formDescription || "Fill out the form below..."}
              </p>
            </div>

            {/* Success/Error Message */}
            {submitStatus.submitted && (
              <div className={`mb-6 p-4 rounded-lg flex items-start space-x-3 animate-in fade-in ${
                submitStatus.success 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              }`}>
                {submitStatus.success ? (
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                )}
                <p className={`text-sm ${
                  submitStatus.success ? 'text-green-800' : 'text-red-800'
                }`}>
                  {submitStatus.message}
                </p>
              </div>
            )}

            <div className="space-y-6">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address"
                    className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Phone + Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone Number"
                    className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    disabled={isSubmitting}
                  />
                </div>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              {/* Subject */}
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Subject"
                className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm transition-all"
                required
                disabled={isSubmitting}
              />

              {/* Message */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-gray-800 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your project..."
                  rows="5"
                  className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm transition-all"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Button */}
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:from-blue-400 disabled:to-blue-500 disabled:cursor-not-allowed shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;