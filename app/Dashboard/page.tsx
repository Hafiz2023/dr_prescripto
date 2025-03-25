"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Dashboard = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const handleLogout = () => {
    alert("Logged out successfully!");
    router.push("/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ✅ Sidebar */}
      <motion.aside
        className={`bg-white shadow-lg h-screen p-6 transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        } flex flex-col`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        {/* ✅ Logo & Toggle */}
        <div className="flex justify-between items-center">
          {isSidebarOpen && (
            <Image src="/logo.svg" alt="Logo" width={120} height={50} />
          )}
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-600"
          >
            ☰
          </button>
        </div>

        {/* ✅ Navigation Links */}
        <nav className="mt-6">
          <ul className="space-y-4">
            <li>
              <Link href="/">
                <motion.div
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/home.png    "
                    alt="Settings"
                    width={24}
                    height={24}
                  />
                  {isSidebarOpen && <span>Dashboard</span>}
                </motion.div>
              </Link>
            </li>
            <li>
              <Link href="/profile">
                <motion.div
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image src="/icon.png" alt="Profile" width={24} height={24} />
                  {isSidebarOpen && <span>Profile</span>}
                </motion.div>
              </Link>
            </li>
            <li>
              <Link href="/settings">
                <motion.div
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-500 cursor-pointer p-2 rounded-md hover:bg-gray-200"
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    src="/setting.png"
                    alt="Settings"
                    width={24}
                    height={24}
                  />
                  {isSidebarOpen && <span>Settings</span>}
                </motion.div>
              </Link>
            </li>
          </ul>
        </nav>
      </motion.aside>

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col">
        {/* ✅ Navbar */}
        <motion.header
          className="bg-white shadow-md p-4 flex justify-between items-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-xl font-bold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Image
              src="/user.png"
              alt="User"
              width={32}
              height={32}
              className="rounded-full"
            />
            <button
              onClick={handleLogout}
              className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600"
            >
              Logout
            </button>
          </div>
        </motion.header>

        {/* ✅ Dashboard Content */}
        <motion.main
          className="p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700">
            Welcome to your Dashboard
          </h2>
          <p className="text-gray-600 mt-2">
            Here you can manage everything easily.
          </p>

          {/* ✅ Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Total Users
              </h3>
              <p className="text-gray-500 text-lg mt-2">1,250</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                Appointments
              </h3>
              <p className="text-gray-500 text-lg mt-2">320</p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg shadow-md text-center hover:bg-blue-200"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-semibold text-gray-700">
                New Messages
              </h3>
              <p className="text-gray-500 text-lg mt-2">15</p>
            </motion.div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default Dashboard;
