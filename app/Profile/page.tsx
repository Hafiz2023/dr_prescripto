'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { User, Mail, Phone, Calendar, MapPin, Lock, Edit, Save, BarChart2, ShieldCheck, Trash2 } from "lucide-react";

type ProfileData = {
  id: string;
  name: string;
  email: string;
  phone: string;
  dob: string;
  address: string;
  specialty: string;
  department: string;
  joiningDate: string;
};

export default function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileData>({
    id: "1",
    name: "Dr. Sarah Johnson",
    email: "s.johnson@evercare.com",
    phone: "+92 300 1234567",
    dob: "1985-04-15",
    address: "123 Medical Street, Lahore",
    specialty: "Cardiology",
    department: "Cardiac Sciences",
    joiningDate: "2018-06-10"
  });

  const [submittedData, setSubmittedData] = useState<ProfileData[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Add to submitted data table
    setSubmittedData(prev => [...prev, {...profile, id: Date.now().toString()}]);
  };

  const handleDelete = (id: string) => {
    setSubmittedData(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="p-6 space-y-6">
      {/* Profile Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>
        <p className="text-gray-600">Manage your personal and professional information</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Personal Information Card */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-6"
        >
          <Card>
            <CardHeader className="border-b">
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </CardTitle>
                {isEditing ? (
                  <Button size="sm" onClick={handleSave}>
                    <Save className="w-4 h-4 mr-2" />
                    Save Changes
                  </Button>
                ) : (
                  <Button variant="outline" size="sm" onClick={() => setIsEditing(true)}>
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Profile
                  </Button>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-24">
                    <Label htmlFor="avatar" className="text-gray-500">
                      Profile Photo
                    </Label>
                  </div>
                  <div className="flex-1 flex items-center gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/doctor-avatar.jpg" />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    {isEditing && (
                      <Button variant="outline" size="sm">
                        Change Photo
                      </Button>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="name" className="w-24 text-gray-500">
                    <User className="inline w-4 h-4 mr-2" />
                    Full Name
                  </Label>
                  {isEditing ? (
                    <Input
                      id="name"
                      name="name"
                      value={profile.name}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex-1 py-2 px-3 rounded-md border border-transparent">
                      {profile.name}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="email" className="w-24 text-gray-500">
                    <Mail className="inline w-4 h-4 mr-2" />
                    Email
                  </Label>
                  {isEditing ? (
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={profile.email}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex-1 py-2 px-3 rounded-md border border-transparent">
                      {profile.email}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="phone" className="w-24 text-gray-500">
                    <Phone className="inline w-4 h-4 mr-2" />
                    Phone
                  </Label>
                  {isEditing ? (
                    <Input
                      id="phone"
                      name="phone"
                      value={profile.phone}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex-1 py-2 px-3 rounded-md border border-transparent">
                      {profile.phone}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="dob" className="w-24 text-gray-500">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Date of Birth
                  </Label>
                  {isEditing ? (
                    <Input
                      id="dob"
                      name="dob"
                      type="date"
                      value={profile.dob}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex-1 py-2 px-3 rounded-md border border-transparent">
                      {new Date(profile.dob).toLocaleDateString()}
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <Label htmlFor="address" className="w-24 text-gray-500">
                    <MapPin className="inline w-4 h-4 mr-2" />
                    Address
                  </Label>
                  {isEditing ? (
                    <Input
                      id="address"
                      name="address"
                      value={profile.address}
                      onChange={handleInputChange}
                    />
                  ) : (
                    <div className="flex-1 py-2 px-3 rounded-md border border-transparent">
                      {profile.address}
                    </div>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submitted Data Table */}
          {submittedData.length > 0 && (
            <Card>
              <CardHeader className="border-b">
                <CardTitle className="flex items-center">
                  <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
                  Submitted Profiles
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="rounded-md border">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Phone</TableHead>
                        <TableHead>Specialty</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {submittedData.map((data) => (
                        <TableRow key={data.id}>
                          <TableCell className="font-medium">{data.name}</TableCell>
                          <TableCell>{data.email}</TableCell>
                          <TableCell>{data.phone}</TableCell>
                          <TableCell>{data.specialty}</TableCell>
                          <TableCell>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(data.id)}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          )}
        </motion.div>

        {/* Professional Info & Quick Stats */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-6"
        >
          {/* Professional Information */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center">
                <User className="w-5 h-5 mr-2 text-blue-600" />
                Professional Information
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Label className="w-24 text-gray-500">Specialty</Label>
                  <div className="flex-1 py-2 px-3 rounded-md">
                    {profile.specialty}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Label className="w-24 text-gray-500">Department</Label>
                  <div className="flex-1 py-2 px-3 rounded-md">
                    {profile.department}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Label className="w-24 text-gray-500">Joining Date</Label>
                  <div className="flex-1 py-2 px-3 rounded-md">
                    {new Date(profile.joiningDate).toLocaleDateString()}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card>
            <CardHeader className="border-b">
              <CardTitle className="flex items-center">
                <BarChart2 className="w-5 h-5 mr-2 text-blue-600" />
                Your Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Total Patients</span>
                  <span className="font-medium">1,842</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Appointments</span>
                  <span className="font-medium">156</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Success Rate</span>
                  <span className="font-medium text-green-600">98.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">Years of Service</span>
                  <span className="font-medium">
                    {new Date().getFullYear() - new Date(profile.joiningDate).getFullYear()}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Verification Badge */}
          <Card className="bg-blue-50 border-blue-200">
            <CardHeader className="border-b border-blue-200">
              <CardTitle className="flex items-center text-blue-800">
                <ShieldCheck className="w-5 h-5 mr-2" />
                Verification Status
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="flex items-center gap-4">
                <Badge className="bg-green-100 text-green-800">
                  Verified Professional
                </Badge>
                <span className="text-sm text-gray-600">
                  Last verified: {new Date().toLocaleDateString()}
                </span>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                Your credentials have been verified by Evercare Hospital administration.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}