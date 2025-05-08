'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { LayoutDashboard, User, Settings, LogOut, Bell, Menu, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Dashboard = () => {
  const router = useRouter();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [notifications] = useState([
    { id: 1, message: "New appointment scheduled", read: false },
    { id: 2, message: "System update available", read: true },
  ]);

  const handleLogout = () => {
    // In a real app, you would handle logout logic here
    router.push("/login");
  };

  const navItems = [
    { 
      name: "Dashboard", 
      icon: <LayoutDashboard className="w-5 h-5" />, 
      path: "/dashboard" 
    },
    { 
      name: "Profile", 
      icon: <User className="w-5 h-5" />, 
      path: "/Profile" 
    },
    { 
      name: "Settings", 
      icon: <Settings className="w-5 h-5" />, 
      path: "/settings" 
    },
  ];

  const stats = [
    { title: "Total Patients", value: "1,842", change: "+12%", trend: "up" },
    { title: "Appointments", value: "156", change: "+5%", trend: "up" },
    { title: "Pending Tasks", value: "8", change: "-2", trend: "down" },
    { title: "Revenue", value: "$42,560", change: "+18%", trend: "up" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <motion.aside
        className={`bg-white shadow-lg h-screen p-4 flex flex-col border-r transition-all duration-300 ${
          isSidebarOpen ? "w-64" : "w-20"
        }`}
        initial={{ x: -100 }}
        animate={{ x: 0 }}
      >
        <div className="flex justify-between items-center mb-8">
          {isSidebarOpen ? (
            <div className="flex items-center space-x-2">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
              <span className="text-xl font-semibold">Evercare</span>
            </div>
          ) : (
            <div className="flex justify-center w-full">
              <Image 
                src="/logo-icon.svg" 
                alt="Logo" 
                width={32} 
                height={32} 
                className="rounded-lg"
              />
            </div>
          )}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-500 hover:bg-gray-100"
          >
            {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link href={item.path}>
                  <Button
                    variant={activeTab === item.name.toLowerCase() ? "secondary" : "ghost"}
                    className={`w-full justify-start ${isSidebarOpen ? "" : "justify-center"}`}
                    onClick={() => setActiveTab(item.name.toLowerCase())}
                  >
                    {item.icon}
                    {isSidebarOpen && <span className="ml-2">{item.name}</span>}
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-auto">
          <Button
            variant="ghost"
            className={`w-full justify-start text-red-500 hover:text-red-600 ${
              isSidebarOpen ? "" : "justify-center"
            }`}
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            {isSidebarOpen && <span className="ml-2">Logout</span>}
          </Button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <motion.header
          className="bg-white shadow-sm p-4 flex justify-between items-center border-b"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {activeTab}
          </h1>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                {notifications.some(n => !n.read) && (
                  <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center">
                    {notifications.filter(n => !n.read).length}
                  </Badge>
                )}
              </Button>
            </div>
            
            <div className="flex items-center space-x-2">
              <Avatar>
                <AvatarImage src="/user-avatar.jpg" />
                <AvatarFallback>US</AvatarFallback>
              </Avatar>
              {isSidebarOpen && (
                <div className="hidden md:block">
                  <p className="text-sm font-medium">Dr. Sarah Johnson</p>
                  <p className="text-xs text-gray-500">Cardiologist</p>
                </div>
              )}
            </div>
          </div>
        </motion.header>

        {/* Dashboard Content */}
        <motion.main
          className="flex-1 overflow-y-auto p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <AnimatePresence mode="wait">
            {activeTab === "dashboard" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
                  <p className="text-gray-600 mt-1">
                    Welcome back, Dr. Johnson.Here what happening today.
                  </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="hover:shadow-md transition-shadow">
                        <CardHeader className="pb-2">
                          <CardTitle className="text-sm font-medium text-gray-500">
                            {stat.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex justify-between items-end">
                            <span className="text-2xl font-bold">{stat.value}</span>
                            <Badge
                              variant={stat.trend === "up" ? "default" : "destructive"}
                              className="text-xs"
                            >
                              {stat.change}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>

                {/* Recent Activity */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-start pb-4 border-b last:border-b-0">
                          <div className="bg-blue-100 p-2 rounded-full mr-4">
                            <Bell className="w-4 h-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">New patient registration</p>
                            <p className="text-sm text-gray-500">
                              Patient #{item}234 registered for cardiology consultation
                            </p>
                            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-blue-50 border-blue-100">
                    <CardHeader>
                      <CardTitle className="text-blue-800">Quick Actions</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <Button variant="outline" className="w-full">
                        Schedule Appointment
                      </Button>
                      <Button variant="outline" className="w-full">
                        View Patient Records
                      </Button>
                      <Button variant="outline" className="w-full">
                        Generate Report
                      </Button>
                    </CardContent>
                  </Card>

                  <div className="md:col-span-2">
                    <Card>
                      <CardHeader>
                        <CardTitle>Upcoming Appointments</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-4">
                          {[1, 2].map((item) => (
                            <div key={item} className="flex items-center p-3 border rounded-lg">
                              <Avatar className="mr-4">
                                <AvatarImage src={`/patient-${item}.jpg`} />
                                <AvatarFallback>P{item}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <p className="font-medium">Patient {item}</p>
                                <p className="text-sm text-gray-500">
                                  {item === 1 ? "Cardiology Checkup" : "Annual Physical"}
                                </p>
                              </div>
                              <div className="text-right">
                                <p className="font-medium">10:{item === 1 ? "00" : "30"} AM</p>
                                <Badge variant="outline" className="text-xs">
                                  {item === 1 ? "Confirmed" : "Pending"}
                                </Badge>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "Profile" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">Profile</h2>
                  <p className="text-gray-600 mt-1">
                    Manage your personal and professional information
                  </p>
                </div>
                {/* Profile content would go here */}
              </motion.div>
            )}

            {activeTab === "settings" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">Settings</h2>
                  <p className="text-gray-600 mt-1">
                    Configure your account preferences
                  </p>
                </div>
                {/* Settings content would go here */}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.main>
      </div>
    </div>
  );
};

export default Dashboard;