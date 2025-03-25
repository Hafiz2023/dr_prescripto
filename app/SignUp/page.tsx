"use client"; // ✅ Required for Next.js App Router

import { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  // ✅ State for Form Fields & Popup
  const [formData, setFormData] = useState({ fullName: "", email: "", password: "" });
  const [error, setError] = useState(""); // ✅ Error Message
  const [showPopup, setShowPopup] = useState(false); // ✅ Success Popup

  // ✅ Handle Input Change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // ✅ Clear error when typing
  };

  // ✅ Handle Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.password) {
      setError("All fields are required!"); // ✅ Show Error Popup
      return;
    }
    
    setShowPopup(true); // ✅ Show Success Popup
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h2>
        <p className="text-gray-600 mb-6">Please sign up to book an appointment</p>

        {/* ✅ Form Start */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-blue-500"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-blue-500"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 mt-1 focus:outline-blue-500"
              placeholder="Enter your password"
            />
          </div>

          {/* ✅ Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-medium py-2 rounded-md hover:bg-blue-700 transition duration-300"
          >
            Create account
          </button>
        </form>
        {/* ✅ Error Message (If Empty Fields) */}
        {error && (
          <div className="mt-4 text-red-600 text-center">{error}</div>
        )}

        {/* ✅ Login Link */}
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{" "}
          <Link href="/Login" className="text-blue-600 font-medium hover:underline">
            Login here
          </Link>
        </p>
      </div>

      {/* ✅ Popup for Successful Signup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl font-semibold text-gray-800">Account Created!</h2>
            <p className="text-gray-600 mt-2">You can now log in to your account.</p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
