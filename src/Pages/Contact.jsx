import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, Building } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  });

  const [contactData, setContactData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Fetch contact data from API
  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/content/contact');
        const data = await response.json();
        setContactData(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching contact data:', error);
        setIsLoading(false);
      }
    };

    fetchContactData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '19c14e84-11c8-440d-ae32-fe5413a0dcec',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          from_name: 'DPM IT Solutions Contact Form',
          replyto: formData.email
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          subject: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        console.error('Form submission failed:', result);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading contact information...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Main Header Image */}
      <div className="relative h-96 w-full overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <img 
          src={contactData?.headerImage || "/assets/contactus.jpg"}
          alt="DPM IT Solutions Contact Header" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-opacity-30"></div>
      </div>

      {/* Header */}
      <header className="bg-white py-6">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800">
            {contactData?.title || "Ready to Transform Your Business?"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto text-center mt-4">
            {contactData?.subtitle || "We're here to help you every step of the way with cutting-edge IT solutions tailored to your unique business needs."}
          </p>
        </div>
      </header>

      {/* Contact Section */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left Side - Contact Information */}
          <div className="space-y-6 order-2 lg:order-1">
            <div className="space-y-4">
              <h2 className="text-4xl font-bold text-blue-700 border-l-4 border-blue-500 pl-4">
                {contactData?.sectionTitle || "Get In Touch"}
              </h2>
              <p className="text-lg text-gray-800 font-medium leading-relaxed">
                {contactData?.description || "Have a project in mind or need expert IT consultation? Our team is ready to discuss your requirements and provide tailored solutions."}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {/* Phone Card */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">{contactData?.phone || "+91 70673 00346"}</p>
                    <p className="text-gray-600">{contactData?.phone2 || "+91 96504 13450"}</p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">{contactData?.email || "info@dpmitsolutions.com"}</p>
                    <p className="text-gray-600">{contactData?.email2}</p>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border border-green-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Office Address</h4>
                    <p className="text-gray-600 font-medium">
                      {contactData?.address || "Tilak Nagar"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours Card */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl border border-orange-100 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Business Hours</h4>
                    <p className="text-gray-600">{contactData?.businessHours?.weekdays || "Monday - Friday: 9:00 AM - 6:00 PM"}</p>
                    <p className="text-gray-600">{contactData?.businessHours?.saturday || "Saturday: 10:00 AM - 4:00 PM"}</p>
                    <p className="text-gray-600">{contactData?.businessHours?.sunday || "Sunday: Closed"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-xl p-8 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              {contactData?.formTitle || "Send us a Message"}
            </h3>
            <p className="text-gray-600 mb-8">
              {contactData?.formSubtitle || "Fill out the form below and we'll get back to you within 24 hours."}
            </p>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                ✗ Something went wrong. Please try again.
              </div>
            )}
            
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>
              </div>

              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-blue-700 mb-4">
              {contactData?.mapTitle || "Find Us Here"}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {contactData?.mapSubtitle || "Visit our office or get directions to meet our team in person"}
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={contactData?.mapUrl || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.606147272886!2d77.206112!3d28.527554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1f511a3f3e1%3A0xf0a0d6b5f7c50d1d!2sBuilding%20No.%20261%2C%20Lane%205%2C%20Westend%20Marg%2C%20Saiyad%20ul%20Ajaib%2C%20Saket%2C%20New%20Delhi%2C%20Delhi%20110030!5e0!3m2!1sen!2sin!4v1657185000000!5m2!1sen!2sin"}
                width="100%"
                height="500"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-96 lg:h-[500px]"
                title="DPM IT Solutions Office Location"
              ></iframe>
            </div>
            
            <div className="p-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <MapPin className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Address</h4>
                  <p className="text-blue-100">{contactData?.address || "Tilak Nagar Delhi"}</p>
                </div>
                <div>
                  <Phone className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Call Us</h4>
                  <p className="text-blue-100">{contactData?.phone || "+91 70673 00346"}</p>
                </div>
                <div>
                  <Clock className="w-8 h-8 mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Office Hours</h4>
                  <p className="text-blue-100">{contactData?.businessHours?.weekdays || "Mon-Fri: 9AM-6PM"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;