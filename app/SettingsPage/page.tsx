'use client';

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Settings, Bell, Lock, Palette, Globe, User, Mail, Save, RotateCcw } from "lucide-react";
import { useTheme } from "next-themes";

type SettingsType = {
  name: string;
  email: string;
  notifications: boolean;
  emailAlerts: boolean;
  twoFactorAuth: boolean;
  language: string;
};

export default function SettingsPage() {
  const { theme, setTheme } = useTheme();
  const [settings, setSettings] = useState<SettingsType>({
    name: "Dr. Sarah Johnson",
    email: "s.johnson@evercare.com",
    notifications: true,
    emailAlerts: true,
    twoFactorAuth: false,
    language: "en"
  });
  const [isLoading, setIsLoading] = useState(false);

  // Load settings from localStorage on component mount
  useEffect(() => {
    const loadSettings = () => {
      try {
        const savedSettings = localStorage.getItem("userSettings");
        if (savedSettings) {
          setSettings(JSON.parse(savedSettings));
        }
      } catch (error) {
        console.error("Failed to load settings:", error);
      }
    };
    loadSettings();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      
      // Save to localStorage
      localStorage.setItem("userSettings", JSON.stringify(settings));
      
      toast.success("Settings saved successfully!", {
        description: "Your preferences have been updated",
      });
    } catch (error) {
      toast.error("Failed to save settings", {
        description: "Please try again later",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    const defaultSettings = {
      name: "Dr. Sarah Johnson",
      email: "s.johnson@evercare.com",
      notifications: true,
      emailAlerts: true,
      twoFactorAuth: false,
      language: "en"
    };
    setSettings(defaultSettings);
    localStorage.setItem("userSettings", JSON.stringify(defaultSettings));
    toast.info("Settings reset to defaults");
  };

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Settings Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
          <Settings className="w-5 h-5 mr-2 text-blue-600" />
          Settings
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Customize your account preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Account Settings */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-4 md:space-y-6"
        >
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="border-b dark:border-gray-700">
              <CardTitle className="flex items-center dark:text-white">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Account Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="dark:text-gray-300">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={settings.name}
                    onChange={handleInputChange}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-300">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={settings.email}
                    onChange={handleInputChange}
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Settings */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="border-b dark:border-gray-700">
              <CardTitle className="flex items-center dark:text-white">
                <Lock className="w-5 h-5 mr-2 text-blue-600" />
                Security
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="twoFactorAuth" className="dark:text-gray-300">Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Add an extra layer of security
                    </p>
                  </div>
                  <Switch
                    id="twoFactorAuth"
                    checked={settings.twoFactorAuth}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, twoFactorAuth: checked }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label className="dark:text-gray-300">Password</Label>
                  <Button 
                    variant="outline" 
                    className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    Change Password
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Notification Settings */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="border-b dark:border-gray-700">
              <CardTitle className="flex items-center dark:text-white">
                <Bell className="w-5 h-5 mr-2 text-blue-600" />
                Notifications
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="notifications" className="dark:text-gray-300">Enable Notifications</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Receive system notifications
                    </p>
                  </div>
                  <Switch
                    id="notifications"
                    checked={settings.notifications}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, notifications: checked }))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label htmlFor="emailAlerts" className="dark:text-gray-300">Email Alerts</Label>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Get important updates via email
                    </p>
                  </div>
                  <Switch
                    id="emailAlerts"
                    checked={settings.emailAlerts}
                    onCheckedChange={(checked) => 
                      setSettings(prev => ({ ...prev, emailAlerts: checked }))
                    }
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-4 md:space-y-6"
        >
          {/* Theme Settings */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="border-b dark:border-gray-700">
              <CardTitle className="flex items-center dark:text-white">
                <Palette className="w-5 h-5 mr-2 text-blue-600" />
                Appearance
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="theme" className="dark:text-gray-300">Theme</Label>
                  <Select
                    value={theme}
                    onValueChange={setTheme}
                  >
                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select theme" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="light" className="dark:hover:bg-gray-700">Light</SelectItem>
                      <SelectItem value="dark" className="dark:hover:bg-gray-700">Dark</SelectItem>
                      <SelectItem value="system" className="dark:hover:bg-gray-700">System</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Language Settings */}
          <Card className="dark:bg-gray-800 dark:border-gray-700">
            <CardHeader className="border-b dark:border-gray-700">
              <CardTitle className="flex items-center dark:text-white">
                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                Language
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="language" className="dark:text-gray-300">Language</Label>
                  <Select
                    value={settings.language}
                    onValueChange={(value) => 
                      setSettings(prev => ({ ...prev, language: value }))
                    }
                  >
                    <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="dark:bg-gray-800 dark:border-gray-700">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="ur">Urdu</SelectItem>
                      <SelectItem value="ar">Arabic</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <Card className="bg-blue-50 border-blue-200 dark:bg-gray-800 dark:border-gray-700">
            <CardContent className="pt-6">
              <div className="flex flex-col space-y-3">
                <Button 
                  onClick={handleSave}
                  disabled={isLoading}
                  className="w-full"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
                <Button 
                  variant="outline" 
                  onClick={handleReset}
                  className="w-full dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset Defaults
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}