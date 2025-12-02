import React, { useState } from 'react';
import { Edit, Save, X, Upload, Plus, Trash2 } from 'lucide-react';

export default function PayNowSection({
  websiteContent,
  editingSection,
  tempData,
  setTempData,
  startEditing,
  saveChanges,
  cancelEditing,
  token
}) {
  const payNow = websiteContent.payNow || {};
  const [previewImage, setPreviewImage] = useState(payNow.qrImageUrl);

  // Default data structure - FIXED
  const defaultPaymentMethodsQR = [
    { title: 'UPI Payment', desc: 'Scan QR with any UPI app', img: '/assets/upi.webp' },
    { title: 'BharatQR', desc: 'Quick & Secure Payment', img: '/assets/bharatqr.png' },
    { title: 'Mobile Wallet', desc: 'Paytm, PhonePe, Google Pay', img: '/assets/mobilewallet.webp' },
    { title: '24/7 Available', desc: 'Anytime, Anywhere Payment', img: '/assets/24.jpg' }
  ];

  const defaultPaymentMethodsRTGS = [
    { title: 'RTGS Transfer', desc: 'Real Time Gross Settlement', icon: '⚡' },
    { title: 'NEFT Transfer', desc: 'National Electronic Funds Transfer', icon: '🔄' },
    { title: 'IMPS Transfer', desc: 'Instant Money Transfer', icon: '💰' },
    { title: 'Bank Security', desc: 'Safe & Encrypted Transactions', icon: '🔐' }
  ];

  const defaultPaymentApps = [
    { name: 'Paytm', img: '/assets/paytm.webp' },
    { name: 'PhonePe', img: '/assets/phonepe.webp' },
    { name: 'Google Pay', img: '/assets/google pay.webp' },
    { name: 'RuPay', img: '/assets/rupay.png' }
  ];

  // FIXED: Bank details as array for mapping
  const defaultBankDetails = [
    { label: 'Company Name', value: 'DPM IT Solutions', icon: '🏢' },
    { label: 'Bank Name', value: 'Kotak Mahindra Bank', icon: '🏛️' },
    { label: 'Bank Address', value: 'Janakpuri - 110058', icon: '📍' },
    { label: 'Bank Account No', value: '2051357300', icon: '💳' },
    { label: 'Account Type', value: 'Current Account', icon: '📄' },
    { label: 'IFSC CODE', value: 'KKBK0000204', icon: '📊' },
  ];

  // Helper function to convert object to array for bank details
  const getBankDetailsArray = (bankDetails) => {
    if (Array.isArray(bankDetails)) {
      return bankDetails;
    }
    if (typeof bankDetails === 'object' && bankDetails !== null) {
      // Convert object to array
      return Object.entries(bankDetails).map(([key, value]) => ({
        label: key,
        value: value,
        icon: '📝' // Default icon
      }));
    }
    return defaultBankDetails;
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setTempData({ ...tempData, qrImageUrl: reader.result });
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePaymentMethodChange = (index, field, value) => {
    const methods = [...(tempData.paymentMethodsQR || payNow.paymentMethodsQR || defaultPaymentMethodsQR)];
    methods[index] = { ...methods[index], [field]: value };
    setTempData({ ...tempData, paymentMethodsQR: methods });
  };

  const handlePaymentMethodImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handlePaymentMethodChange(index, 'img', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPaymentMethod = () => {
    const methods = [...(tempData.paymentMethodsQR || payNow.paymentMethodsQR || defaultPaymentMethodsQR)];
    methods.push({ title: 'New Method', desc: 'Description', img: '' });
    setTempData({ ...tempData, paymentMethodsQR: methods });
  };

  const removePaymentMethod = (index) => {
    const methods = [...(tempData.paymentMethodsQR || payNow.paymentMethodsQR || defaultPaymentMethodsQR)];
    methods.splice(index, 1);
    setTempData({ ...tempData, paymentMethodsQR: methods });
  };

  const handleRTGSMethodChange = (index, field, value) => {
    const methods = [...(tempData.paymentMethodsRTGS || payNow.paymentMethodsRTGS || defaultPaymentMethodsRTGS)];
    methods[index] = { ...methods[index], [field]: value };
    setTempData({ ...tempData, paymentMethodsRTGS: methods });
  };

  const handlePaymentAppChange = (index, field, value) => {
    const apps = [...(tempData.paymentApps || payNow.paymentApps || defaultPaymentApps)];
    apps[index] = { ...apps[index], [field]: value };
    setTempData({ ...tempData, paymentApps: apps });
  };

  const handlePaymentAppImageUpload = (index, e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        handlePaymentAppChange(index, 'img', reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const addPaymentApp = () => {
    const apps = [...(tempData.paymentApps || payNow.paymentApps || defaultPaymentApps)];
    apps.push({ name: 'New App', img: '' });
    setTempData({ ...tempData, paymentApps: apps });
  };

  const removePaymentApp = (index) => {
    const apps = [...(tempData.paymentApps || payNow.paymentApps || defaultPaymentApps)];
    apps.splice(index, 1);
    setTempData({ ...tempData, paymentApps: apps });
  };

  // FIXED: Bank details handling
  const handleBankDetailChange = (index, field, value) => {
    const details = [...getBankDetailsArray(tempData.bankDetails || payNow.bankDetails)];
    details[index] = { ...details[index], [field]: value };
    setTempData({ ...tempData, bankDetails: details });
  };

  const addBankDetail = () => {
    const details = [...getBankDetailsArray(tempData.bankDetails || payNow.bankDetails)];
    details.push({ label: 'New Field', value: 'Value', icon: '📝' });
    setTempData({ ...tempData, bankDetails: details });
  };

  const removeBankDetail = (index) => {
    const details = [...getBankDetailsArray(tempData.bankDetails || payNow.bankDetails)];
    details.splice(index, 1);
    setTempData({ ...tempData, bankDetails: details });
  };

  // Get current bank details for display - FIXED
  const currentBankDetails = getBankDetailsArray(tempData.bankDetails || payNow.bankDetails);

  return (
    <div className="space-y-6">
      {/* Main Header Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Main Header</h2>
          <button
            onClick={() => startEditing('payNow', { ...payNow, editField: 'mainHeader' })}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            <Edit className="h-4 w-4" /> Edit
          </button>
        </div>

        {editingSection === 'payNow' && tempData.editField === 'mainHeader' ? (
          <div className="space-y-4 bg-blue-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Main Heading</label>
              <input
                type="text"
                value={tempData.mainHeading || ''}
                onChange={(e) => setTempData({ ...tempData, mainHeading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Online Payment"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
              <input
                type="text"
                value={tempData.companyName || ''}
                onChange={(e) => setTempData({ ...tempData, companyName: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="DPM IT Solutions"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 text-lg font-semibold">Main Heading: {payNow.mainHeading || 'Online Payment'}</p>
            <p className="text-gray-700 text-lg font-semibold">Company Name: {payNow.companyName || 'DPM IT Solutions'}</p>
          </div>
        )}
      </div>

      {/* QR Code Header Section - YEH WALA HEADING ADD KIYA */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">QR Code Header</h2>
          <button
            onClick={() => startEditing('payNow', { ...payNow, editField: 'qrHeader' })}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
          >
            <Edit className="h-4 w-4" /> Edit
          </button>
        </div>

        {editingSection === 'payNow' && tempData.editField === 'qrHeader' ? (
          <div className="space-y-4 bg-purple-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">QR Section Main Heading</label>
              <input
                type="text"
                value={tempData.qrMainHeading || ''}
                onChange={(e) => setTempData({ ...tempData, qrMainHeading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Scan with any BharatQR / UPI enabled app"
              />
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 text-lg font-semibold">QR Main Heading: {payNow.qrMainHeading || 'Scan with any BharatQR / UPI enabled app'}</p>
          </div>
        )}
      </div>

      {/* QR Code Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">QR Code Image & Pay Now Text</h2>
          <button
            onClick={() => startEditing('payNow', { ...payNow, editField: 'qr' })}
            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            <Edit className="h-4 w-4" /> Edit
          </button>
        </div>

        {editingSection === 'payNow' && tempData.editField === 'qr' ? (
          <div className="space-y-4 bg-green-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pay Now Text</label>
              <input
                type="text"
                value={tempData.payNowText || ''}
                onChange={(e) => setTempData({ ...tempData, payNowText: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="PAY NOW"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">📸 Upload QR Code Image</label>
              <div className="flex gap-4">
                <label className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 cursor-pointer transition">
                  <Upload className="h-4 w-4" /> Choose Image
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                </label>
              </div>
              {previewImage && (
                <div className="mt-4">
                  <p className="text-sm text-gray-600 mb-2">Preview:</p>
                  <div className="w-48 h-48 bg-gray-100 rounded-lg p-2 border-2 border-gray-300">
                    <img src={previewImage} alt="QR Preview" className="w-full h-full object-contain" />
                  </div>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 text-lg font-semibold">Pay Now Text: {payNow.payNowText || 'PAY NOW'}</p>
            {payNow.qrImageUrl && (
              <div className="w-64 h-64 bg-gray-100 rounded-lg p-4 border-2 border-gray-300">
                <img src={payNow.qrImageUrl} alt="QR Code" className="w-full h-full object-contain" />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Payment Methods QR Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">QR Payment Methods</h2>
          {editingSection === 'payNow' && tempData.editField === 'qrMethods' ? (
            <button
              onClick={() => addPaymentMethod()}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              <Plus className="h-4 w-4" /> Add Method
            </button>
          ) : (
            <button
              onClick={() => startEditing('payNow', { ...payNow, editField: 'qrMethods' })}
              className="flex items-center gap-2 bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition"
            >
              <Edit className="h-4 w-4" /> Edit
            </button>
          )}
        </div>

        {editingSection === 'payNow' && tempData.editField === 'qrMethods' ? (
          <div className="space-y-4 bg-orange-50 p-4 rounded-lg">
            {(tempData.paymentMethodsQR || payNow.paymentMethodsQR || defaultPaymentMethodsQR).map((method, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-2 border-orange-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">Method {idx + 1}</span>
                  <button
                    onClick={() => removePaymentMethod(idx)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={method.title || ''}
                    onChange={(e) => handlePaymentMethodChange(idx, 'title', e.target.value)}
                    placeholder="Title"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                  <input
                    type="text"
                    value={method.desc || ''}
                    onChange={(e) => handlePaymentMethodChange(idx, 'desc', e.target.value)}
                    placeholder="Description"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Upload Image</label>
                    <label className="flex items-center gap-2 bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 cursor-pointer transition w-fit">
                      <Upload className="h-4 w-4" /> Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePaymentMethodImageUpload(idx, e)}
                        className="hidden"
                      />
                    </label>
                    {method.img && (
                      <div className="mt-2 w-24 h-24 bg-gray-100 rounded p-1 border border-gray-300">
                        <img src={method.img} alt="Method" className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="h-4 w-4" /> Save All
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {(payNow.paymentMethodsQR || defaultPaymentMethodsQR).map((method, idx) => (
              <div key={idx} className="bg-gradient-to-br from-orange-50 to-red-50 p-4 rounded-lg border-2 border-orange-300">
                <h3 className="font-bold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{method.desc}</p>
                {method.img && (
                  <div className="w-16 h-16 bg-white rounded border border-gray-300">
                    <img src={method.img} alt={method.title} className="w-full h-full object-contain" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* RTGS/NEFT Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-teal-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">RTGS/NEFT/IMPS Section</h2>
          <button
            onClick={() => startEditing('payNow', { ...payNow, editField: 'rtgs' })}
            className="flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition"
          >
            <Edit className="h-4 w-4" /> Edit
          </button>
        </div>

        {editingSection === 'payNow' && tempData.editField === 'rtgs' ? (
          <div className="space-y-4 bg-teal-50 p-4 rounded-lg">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">RTGS Heading</label>
              <input
                type="text"
                value={tempData.rtgsHeading || ''}
                onChange={(e) => setTempData({ ...tempData, rtgsHeading: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                placeholder="You Can Make Payment through RTGS / NEFT / IMPS"
              />
            </div>
            
            {/* RTGS Methods Editing */}
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-800">RTGS Methods</h3>
              {(tempData.paymentMethodsRTGS || payNow.paymentMethodsRTGS || defaultPaymentMethodsRTGS).map((method, idx) => (
                <div key={idx} className="bg-white p-4 rounded-lg border border-teal-300">
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-800">Method {idx + 1}</span>
                  </div>
                  <div className="space-y-3">
                    <input
                      type="text"
                      value={method.title || ''}
                      onChange={(e) => handleRTGSMethodChange(idx, 'title', e.target.value)}
                      placeholder="Title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="text"
                      value={method.desc || ''}
                      onChange={(e) => handleRTGSMethodChange(idx, 'desc', e.target.value)}
                      placeholder="Description"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                    <input
                      type="text"
                      value={method.icon || ''}
                      onChange={(e) => handleRTGSMethodChange(idx, 'icon', e.target.value)}
                      placeholder="Icon (emoji)"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-gray-700 text-lg font-semibold">{payNow.rtgsHeading || 'You Can Make Payment through RTGS / NEFT / IMPS'}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(payNow.paymentMethodsRTGS || defaultPaymentMethodsRTGS).map((method, idx) => (
                <div key={idx} className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-4 border-2 border-teal-300">
                  <div className="flex items-start gap-3">
                    <div className="text-2xl">{method.icon}</div>
                    <div>
                      <p className="font-bold text-gray-800">{method.title}</p>
                      <p className="text-gray-600 mt-1 text-sm">{method.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Payment Apps Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-indigo-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Payment Apps</h2>
          {editingSection === 'payNow' && tempData.editField === 'paymentApps' ? (
            <button
              onClick={() => addPaymentApp()}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Plus className="h-4 w-4" /> Add App
            </button>
          ) : (
            <button
              onClick={() => startEditing('payNow', { ...payNow, editField: 'paymentApps' })}
              className="flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              <Edit className="h-4 w-4" /> Edit
            </button>
          )}
        </div>

        {editingSection === 'payNow' && tempData.editField === 'paymentApps' ? (
          <div className="space-y-4 bg-indigo-50 p-4 rounded-lg">
            {(tempData.paymentApps || payNow.paymentApps || defaultPaymentApps).map((app, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-2 border-indigo-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">App {idx + 1}</span>
                  <button
                    onClick={() => removePaymentApp(idx)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={app.name || ''}
                    onChange={(e) => handlePaymentAppChange(idx, 'name', e.target.value)}
                    placeholder="App Name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                  />
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Upload App Image</label>
                    <label className="flex items-center gap-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 cursor-pointer transition w-fit">
                      <Upload className="h-4 w-4" /> Upload
                      <input
                        type="file"
                        accept="image/*"
                        onChange={(e) => handlePaymentAppImageUpload(idx, e)}
                        className="hidden"
                      />
                    </label>
                    {app.img && (
                      <div className="mt-2 w-24 h-24 bg-gray-100 rounded p-1 border border-gray-300">
                        <img src={app.img} alt={app.name} className="w-full h-full object-contain" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="h-4 w-4" /> Save All
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {(payNow.paymentApps || defaultPaymentApps).map((app, idx) => (
              <div key={idx} className="bg-white rounded-xl p-4 shadow-lg border-2 border-indigo-200 text-center">
                {app.img && (
                  <div className="w-16 h-16 mx-auto mb-3">
                    <img src={app.img} alt={app.name} className="w-full h-full object-contain" />
                  </div>
                )}
                <p className="font-bold text-gray-800">{app.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bank Details Section - FIXED */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-red-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Bank Details</h2>
          {editingSection === 'payNow' && tempData.editField === 'bankDetails' ? (
            <button
              onClick={() => addBankDetail()}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <Plus className="h-4 w-4" /> Add Field
            </button>
          ) : (
            <button
              onClick={() => startEditing('payNow', { ...payNow, editField: 'bankDetails' })}
              className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
            >
              <Edit className="h-4 w-4" /> Edit
            </button>
          )}
        </div>

        {editingSection === 'payNow' && tempData.editField === 'bankDetails' ? (
          <div className="space-y-4 bg-red-50 p-4 rounded-lg">
            {currentBankDetails.map((detail, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg border-2 border-red-300">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-gray-800">Field {idx + 1}</span>
                  <button
                    onClick={() => removeBankDetail(idx)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="space-y-3">
                  <input
                    type="text"
                    value={detail.label || ''}
                    onChange={(e) => handleBankDetailChange(idx, 'label', e.target.value)}
                    placeholder="Label (e.g., Company Name)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    value={detail.value || ''}
                    onChange={(e) => handleBankDetailChange(idx, 'value', e.target.value)}
                    placeholder="Value (e.g., DPM IT Solutions)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                  <input
                    type="text"
                    value={detail.icon || ''}
                    onChange={(e) => handleBankDetailChange(idx, 'icon', e.target.value)}
                    placeholder="Icon (emoji)"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>
            ))}
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                <Save className="h-4 w-4" /> Save All
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentBankDetails.map((detail, idx) => (
              <div key={idx} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border-2 border-gray-300">
                <div className="flex items-start gap-3">
                  <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center w-10 h-10 text-white text-lg">
                    {detail.icon}
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm font-bold">{detail.label}</p>
                    <p className="font-bold text-gray-800">{detail.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-600">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Call to Action</h2>
          <button
            onClick={() => startEditing('payNow', { ...payNow, editField: 'cta' })}
            className="flex items-center gap-2 bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            <Edit className="h-4 w-4" /> Edit
          </button>
        </div>

        {editingSection === 'payNow' && tempData.editField === 'cta' ? (
          <div className="space-y-4 bg-pink-50 p-4 rounded-lg">
            <input
              type="text"
              value={tempData.ctaHeading || ''}
              onChange={(e) => setTempData({ ...tempData, ctaHeading: e.target.value })}
              placeholder="CTA Heading"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <textarea
              value={tempData.ctaText || ''}
              onChange={(e) => setTempData({ ...tempData, ctaText: e.target.value })}
              placeholder="CTA Text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
              rows="3"
            />
            <input
              type="text"
              value={tempData.callPhone || ''}
              onChange={(e) => setTempData({ ...tempData, callPhone: e.target.value })}
              placeholder="Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <input
              type="email"
              value={tempData.emailAddress || ''}
              onChange={(e) => setTempData({ ...tempData, emailAddress: e.target.value })}
              placeholder="Email Address"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            />
            <div className="flex gap-2">
              <button
                onClick={() => saveChanges('payNow')}
                className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
              >
                <Save className="h-4 w-4" /> Save
              </button>
              <button
                onClick={cancelEditing}
                className="flex items-center gap-2 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              >
                <X className="h-4 w-4" /> Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-3 bg-pink-50 p-4 rounded-lg">
            <div>
              <p className="text-sm text-gray-600">Heading</p>
              <p className="font-bold text-lg">{payNow.ctaHeading || 'Need Help with Payment?'}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600">Text</p>
              <p className="text-gray-700">{payNow.ctaText || 'Our team is here to assist you 24/7. Feel free to reach out!'}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Phone</p>
                <p className="font-bold">{payNow.callPhone || '+91 9650413450'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-bold">{payNow.emailAddress || 'info@dpmitsolutions.com'}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}