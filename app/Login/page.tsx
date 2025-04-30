"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      alert("Please enter both email and password!");
      return;
    }
    // Simulated login - Redirect to Dashboard
    router.push("/Dashboard");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-6">
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* ✅ Logo */}
        <div className="flex justify-center mb-6">
          <Image src="/logo.svg" alt="Logo" width={100} height={100} />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back
        </h2>

        {/* ✅ Login Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Email
            </label>
            <motion.input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 font-medium mb-1">
              Password
            </label>
            <motion.input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              whileFocus={{ scale: 1.05 }}
            />
          </div>

          {/* ✅ Submit Button */}
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg mt-4 hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Login
          </motion.button>
        </form>

        {/* ✅ Footer Links */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Dont have an account?{" "}
            <a href="/Register" className="text-blue-500 hover:underline">
              Sign Up
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
