import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock } from 'lucide-react';
import AdminDashboard from './AdminDashboard.jsx';

// 👇 API BASE URL - Environment variable ya default
const API_BASE = import.meta.env.VITE_API_URL || "https://backend-api-jade-rho.vercel.app";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Forgot password
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotMessage, setForgotMessage] = useState('');

  // Reset password
  const [showReset, setShowReset] = useState(false);
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [resetMessage, setResetMessage] = useState('');

  // ---------------- LOGIN ----------------
  const handleSubmit = async () => {
    setError("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Invalid email or password!");
        return;
      }

      localStorage.setItem("adminToken", data.token);
      if (rememberMe) localStorage.setItem("adminEmail", email);

      setIsLoggedIn(true);
    } catch (err) {
      setError("Server error! Please try again.");
    }
  };

  // ---------------- FORGOT PASSWORD ----------------
  const handleForgot = async () => {
    setForgotMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/request-reset`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const data = await res.json();

      if (res.ok) {
        setForgotMessage("Reset link ready — opening reset page...");
        setResetToken(data.resetLink.split("/").pop());
        setTimeout(() => {
          setShowForgot(false);
          setShowReset(true);
        }, 800);
      } else {
        setForgotMessage(data.message);
      }

    } catch (err) {
      setForgotMessage("Server error!");
    }
  };

  // ---------------- RESET PASSWORD ----------------
  const handleResetPassword = async () => {
    setResetMessage("");

    try {
      const res = await fetch(`${API_BASE}/api/auth/reset-password/${resetToken}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password: newPassword }),
      });

      const data = await res.json();

      if (res.ok) {
        setResetMessage("Password updated! Redirecting...");
        setTimeout(() => {
          setShowReset(false);
        }, 1200);
      } else {
        setResetMessage(data.message);
      }

    } catch (err) {
      setResetMessage("Server error!");
    }
  };

  // ---------------- LOGOUT ----------------
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
  };

  // ---------------- If Logged In ----------------
  if (isLoggedIn) {
    return <AdminDashboard onLogout={handleLogout} />;
  }

  // ---------------- RESET PASSWORD PAGE ----------------
  if (showReset) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Reset Password</h2>

          <input
            type="password"
            className="w-full p-3 border rounded mb-3"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />

          <button
            onClick={handleResetPassword}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Update Password
          </button>

          {resetMessage && (
            <p className="mt-3 text-center text-gray-800">{resetMessage}</p>
          )}

          <button
            onClick={() => { setShowReset(false); }}
            className="block mx-auto mt-4 text-sm text-blue-700"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    );
  }

  // ---------------- FORGOT PASSWORD PAGE ----------------
  if (showForgot) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-xl font-bold text-center mb-4">Forgot Password</h2>

          <input
            type="email"
            value={forgotEmail}
            onChange={(e) => setForgotEmail(e.target.value)}
            placeholder="Enter your registered email"
            className="w-full p-3 border rounded mb-3"
          />

          <button
            onClick={handleForgot}
            className="w-full bg-blue-600 text-white py-2 rounded-lg"
          >
            Send Reset Link
          </button>

          {forgotMessage && (
            <p className="mt-3 text-center text-sm text-gray-800">{forgotMessage}</p>
          )}

          <button
            onClick={() => setShowForgot(false)}
            className="block mx-auto mt-4 text-sm text-blue-700"
          >
            ← Back to Login
          </button>
        </div>
      </div>
    );
  }

  // ---------------- LOGIN PAGE ----------------
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center p-4">

      <div className="relative w-full max-w-md">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <h1 className="text-2xl font-bold mb-1">Welcome Back</h1>
            <p className="text-blue-100 text-sm">Sign in to continue</p>
          </div>

          <div className="p-6">
            <div className="space-y-4">

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg"
                    placeholder="admin@dpmitsolutions.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                  >
                    {showPassword ? <EyeOff /> : <Eye />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center text-gray-700 text-sm">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-blue-600"
                  />
                  <span className="ml-2">Remember me</span>
                </label>

                <button
                  onClick={() => setShowForgot(true)}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  Forgot password?
                </button>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2.5 rounded-lg hover:scale-105 transition duration-200"
              >
                Sign In
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}