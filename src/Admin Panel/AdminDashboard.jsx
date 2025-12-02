import React, { useState } from 'react';
import {
  LayoutDashboard, LogOut, Home, Users, FileText, Settings, Image, Mail,
  Phone, MapPin, Edit, Save, X, Plus, Trash2, Eye, ChevronRight, Search,
  Bell, User, Menu, CreditCard, Scroll, Shield
} from 'lucide-react';

import HomeSection from './HomeSection';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import ContactSection from './ContactSection';
import PayNowSection from './PayNowSectionAdmin';
import SettingsSection from './SettingsSection';
import TermsConditionsSection from './TermsConditionsSection';
import PrivacyPolicySection from './PrivacyPolicySection'; // Import Privacy Policy


export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('home');
  const [editingSection, setEditingSection] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const token = localStorage.getItem("adminToken") || "";

  const [websiteContent, setWebsiteContent] = useState({
    hero: {
      title: 'Welcome to DPM IT Solutions',
      subtitle: 'Your trusted partner in digital transformation',
      buttonText: 'Get Started'
    },
    about: {
      title: 'About',
      paragraph1:
        'We are simply not a web development company. We are... (same content)',
      paragraph2:
        'Carving a niche for itself... (same content)'
    },
    services: [
      { id: 1, name: 'Web Development', description: 'Custom web applications and websites' },
      { id: 2, name: 'Mobile Apps', description: 'iOS and Android app development' },
      { id: 3, name: 'Cloud Solutions', description: 'Scalable cloud infrastructure' }
    ],
    contact: {
      email: 'info@dpmitsolutions.com',
      phone: '+91 9650413450',
      address: 'Tilak Nagar Delhi',
      phone2: '+91 7067300346',
      businessHours: {
        weekdays: 'Mon - Fri: 10 AM - 6 PM',
        saturday: 'Saturday: 9 AM - 5 PM',
        sunday: 'Sunday: Closed'
      }
    },
    payNow: {
      heading: 'Online Payment - DPM IT Solutions',
      qrHeading: 'Scan with any BharatQR / UPI enabled app',
      qrImageUrl: '',
      rtgsHeading: 'You Can Make Payment through RTGS / NEFT / IMPS',
      paymentMethodsQR: [
        { title: 'UPI Payment', desc: 'Scan QR with any UPI app', img: '' },
        { title: 'BharatQR', desc: 'Quick & Secure Payment', img: '' },
        { title: 'Mobile Wallet', desc: 'Paytm, PhonePe, Google Pay', img: '' },
        { title: '24/7 Available', desc: 'Anytime, Anywhere Payment', img: '' }
      ],
      bankDetails: {
        companyName: 'DPM IT Solutions',
        bankName: 'Kotak Mahindra Bank',
        bankAddress: 'Janakpuri - 110058',
        accountNo: '2051357300',
        accountType: 'Current Account',
        ifscCode: 'KKBK0000204'
      },
      ctaHeading: 'Need Help with Payment?',
      ctaText: 'Our team is here to assist you 24/7. Feel free to reach out!',
      callPhone: '+91 9650413450',
      emailAddress: 'info@dpmitsolutions.com'
    },
    termsConditions: {
      header: {
        title: "Terms & Conditions",
        subtitle: "DPM IT SOLUTIONS – Your Trusted Digital Partner",
        description: "Welcome to DPM IT Solutions. Our terms and conditions are crucial for using our hosting services. Please read them carefully."
      },
      sections: [
        {
          id: 1,
          title: "Change in Packages and Pricing",
          content: "DPM IT Solutions may alter pricing and service offerings without prior notice. New prices apply to new deals, while existing orders remain at the previous rates.",
          list: []
        },
        {
          id: 2,
          title: "Late/Non-Payment",
          content: "",
          list: [
            "Rs. 10000 administrative fee for reactivating cancelled accounts.",
            "Technical support ceases after 10 days of overdue payments.",
            "Account and services will be suspended after 14 days.",
            "Data will be deleted after 30 days of non-payment."
          ]
        },
        {
          id: 3,
          title: "Spam Policy",
          content: "We have a zero-tolerance policy for spam. Violations may result in immediate account termination and legal action.",
          list: []
        }
      ],
      disclaimer: {
        title: "Disclaimer",
        content: "The terms and conditions outlined by DPM IT Solutions govern your use of our services. By accessing our services, you acknowledge that you have read, understood, and agreed to comply with these terms."
      },
      contact: {
        title: "Contact & Support",
        description: "For any questions, clarifications, or support, feel free to reach out to us anytime.",
        details: [
          { type: "phone", icon: "📞", title: "Call Us", value: "+91 9650413450" },
          { type: "email", icon: "✉️", title: "Email Us", value: "info@dpmitsolutions.com" },
          { type: "address", icon: "📍", title: "Address", value: "Tilak Nagar, New Delhi - 110018" }
        ]
      }
    },
    privacyPolicy: {
      introText: 'At DPM IT SOLUTIONS, we are committed to protecting your personal information and handling all data in full compliance with applicable laws and regulations.',
      privacyPoints: [
        {
          id: 1,
          title: 'Data Protection',
          desc: 'Any information you provide will not be shared with any external parties or used for commercial purposes without your written consent.'
        },
        {
          id: 2,
          title: 'Internal Access',
          desc: 'Your information may be accessible only to the authorized teams, divisions, sister companies, and affiliates of DPMIT SOLUTIONS.'
        },
        {
          id: 3,
          title: 'Cookies',
          desc: 'We use temporary cookies to improve user experience. These do not store personal information.'
        },
        {
          id: 4,
          title: 'Data Update Requests',
          desc: 'Any request to update, modify, or delete your data will be processed only upon written request.'
        },
        {
          id: 5,
          title: 'Security Measures',
          desc: 'We implement strict security protocols to prevent unauthorized access or misuse of your data.'
        }
      ],
      refundIntro: 'At DPM IT SOLUTIONS, we deliver premium digital services with full transparency and professionalism.',
      refundPoints: [
        { id: 1, title: 'No Refund Policy', desc: 'All payments made are final and non-refundable.' },
        { id: 2, title: 'Project Confirmation & Documentation', desc: 'Complete project scope is shared before starting. Clients must review details carefully before approval.' },
        { id: 3, title: 'Client Responsibility', desc: 'Requirements must be clearly communicated. Clients must approve deliverables at each milestone.' },
        { id: 4, title: 'Cancellation Policy', desc: 'Work started cannot be refunded under any condition.' },
        { id: 5, title: 'Delays Caused by Client', desc: 'No compensation/refund for delays due to client-side issues.' },
        { id: 6, title: 'Service Freeze Clause', desc: 'If inactive for 30 days, project may be paused or closed.' }
      ],
      contactEmail: 'info@dpmitsolutions.com',
      contactPhone1: '+91 9650413450',
      contactPhone2: '+91 7067300346',
      contactAddress: 'Tilak Nagar, New Delhi - 110018'
    }
  });

  const [tempData, setTempData] = useState({});

  const startEditing = (section, data) => {
    setEditingSection(section);
    setTempData(JSON.parse(JSON.stringify(data)));
  };

  const cancelEditing = () => {
    setEditingSection(null);
    setTempData({});
  };

  const saveChanges = async (section) => {
    try {
      const res = await fetch(`https://backend-api-jade-rho.vercel.app/api/content/${section}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(tempData)
      });

      if (res.ok) {
        setWebsiteContent(prev => ({
          ...prev,
          [section]: tempData
        }));
        setEditingSection(null);
        setTempData({});
        console.log(`${section} saved successfully`);
      } else {
        console.error(`Failed to save ${section}:`, res.statusText);
      }
    } catch (error) {
      console.error("Error saving changes:", error);
    }
  };

  const addService = () => {
    const newService = {
      id: Date.now(),
      name: 'New Service',
      description: 'Service description'
    };
    setWebsiteContent(prev => ({
      ...prev,
      services: [...prev.services, newService]
    }));
  };

  const deleteService = (id) => {
    setWebsiteContent(prev => ({
      ...prev,
      services: prev.services.filter(s => s.id !== id)
    }));
  };

  const updateService = (id, field, value) => {
    setWebsiteContent(prev => ({
      ...prev,
      services: prev.services.map(s =>
        s.id === id ? { ...s, [field]: value } : s
      )
    }));
  };

  const navItems = [
    { id: 'home', icon: Home, label: 'Home Section' },
    { id: 'about', icon: FileText, label: 'About Us' },
    { id: 'services', icon: Settings, label: 'Services' },
    { id: 'contact', icon: Phone, label: 'Contact Info' },
    { id: 'paynow', icon: CreditCard, label: 'Pay Now' },
    { id: 'termsConditions', icon: Scroll, label: 'Terms & Conditions' },
    { id: 'privacyPolicy', icon: Shield, label: 'Privacy Policy' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Top Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">

          {/* Left */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 md:hidden"
            >
              <Menu className="h-6 w-6 text-gray-600" />
            </button>

            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-2 rounded-xl">
                <LayoutDashboard className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-gray-800 hidden sm:block">Admin Dashboard</span>
            </div>
          </div>

          {/* Right Controls */}
          <div className="flex items-center gap-4">

            <div className="hidden sm:block relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border rounded-lg w-60 bg-gray-50 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="relative p-2 rounded-lg hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="h-2 w-2 bg-red-500 rounded-full absolute top-2 right-2"></span>
            </button>

            <div className="relative">
              <button
                onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
              >
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-blue-600" />
                </div>
                <span className="hidden md:block font-medium text-sm">Admin User</span>
                <ChevronRight className={`${userMenuOpen ? 'rotate-90' : ''} transition`} />
              </button>

              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-white shadow-lg rounded-lg border z-50">
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                    <User className="h-4 w-4" /> Profile
                  </button>
                  <button className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center gap-2">
                    <Settings className="h-4 w-4" /> Settings
                  </button>
                  <div className="border-t"></div>
                  <button className="w-full px-4 py-2 text-left text-red-600 hover:bg-gray-100 flex items-center gap-2">
                    <LogOut className="h-4 w-4" /> Logout
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </header>

      {/* Layout Wrapper */}
      <div className="flex flex-1">

        {/* Sidebar (desktop) */}
        <aside className="bg-white shadow-sm border-r w-64 hidden md:block">
          <nav className="p-4 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  ${activeTab === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'hover:bg-gray-50'}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile Sidebar Overlay */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-40 z-40 md:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}

        {/* Mobile Sidebar */}
        <aside
          className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 z-50 transform transition-transform duration-300 md:hidden
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
        >
          <nav className="p-4 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setSidebarOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg
                  ${activeTab === item.id ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-600' : 'hover:bg-gray-50'}
                `}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-6">

          {/* Breadcrumb */}
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <span>Dashboard</span>
            <ChevronRight className="mx-2 h-4 w-4" />
            <span className="text-gray-900 font-medium capitalize">{activeTab}</span>
          </div>

          {/* Render Sections */}
          {activeTab === 'home' && (
            <HomeSection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
            />
          )}

          {activeTab === 'about' && (
            <AboutSection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
            />
          )}

          {activeTab === 'services' && (
            <ServicesSection
              websiteContent={websiteContent}
              updateService={updateService}
              deleteService={deleteService}
              addService={addService}
            />
          )}

          {activeTab === 'contact' && (
            <ContactSection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
              token={token}
            />
          )}

          {activeTab === 'paynow' && (
            <PayNowSection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
              token={token}
            />
          )}

          {activeTab === 'termsConditions' && (
            <TermsConditionsSection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
              token={token}
            />
          )}

          {activeTab === 'privacyPolicy' && (
            <PrivacyPolicySection
              websiteContent={websiteContent}
              editingSection={editingSection}
              tempData={tempData}
              setTempData={setTempData}
              startEditing={startEditing}
              saveChanges={saveChanges}
              cancelEditing={cancelEditing}
              token={token}
            />
          )}

          {activeTab === 'settings' && (
            <SettingsSection />
          )}

        </main>
      </div>
    </div>
  );
}