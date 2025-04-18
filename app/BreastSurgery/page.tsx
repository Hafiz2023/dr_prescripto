// app/breast-surgery/page.tsx
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function BreastSurgery() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    doctor: "",
    appointmentTime: "",
    procedureType: ""
  });
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (Object.values(formData).every(val => val.trim() !== "")) {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 5000);
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        doctor: "",
        appointmentTime: "",
        procedureType: ""
      });
    } else {
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 relative">
      {showSuccess && (
        <Alert variant="default" className="fixed top-4 right-4 z-50 w-full max-w-md">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            Your breast surgery consultation request has been submitted.
          </AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert variant="destructive" className="fixed top-4 right-4 z-50 w-full max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Please fill out all required fields.</AlertDescription>
        </Alert>
      )}

      <motion.section
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.1 } }
        }}
        className="text-center mb-16"
      >
        <motion.h1
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="text-4xl md:text-5xl font-bold text-blue-700 mb-4"
        >
          Comprehensive Breast Surgery Care
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="text-lg text-gray-600"
        >
          From diagnosis to reconstruction, compassionate care tailored to you
        </motion.p>
      </motion.section>

      <section className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Procedures Offered</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>• Breast Lump Excision</li>
          <li>• Mastectomy (Simple, Radical, Modified Radical)</li>
          <li>• Breast Reconstruction</li>
          <li>• Sentinel Lymph Node Biopsy</li>
          <li>• Oncoplastic Breast Surgery</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Meet Our Specialists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Nadia Hasan",
              title: "MBBS, FCPS, Breast Oncosurgeon",
              image: "/Saadia-zulfiqar-cheema.webp",
              desc: "Expert in early detection and surgical treatment of breast cancer."
            },
            {
              name: "Dr. Adeel Qureshi",
              title: "MBBS, FRCS, Breast Surgery",
              image: "/doctor/doc6.png",
              desc: "Specializes in breast reconstruction and cosmetic restoration."
            },
            {
              name: "Dr. Mahnoor Bukhari",
              title: "MBBS, MRCS, Women's Health Specialist",
              image: "/doctor/doc6.png",
              desc: "Focused on personalized breast care with advanced techniques."
            }
          ].map((doc, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-64 w-full">
                <Image src={doc.image} alt={doc.name} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">{doc.name}</CardTitle>
                <CardDescription className="italic text-gray-600">{doc.title}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{doc.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book a Breast Surgery Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Surgeon</Label>
              <Select value={formData.doctor} onValueChange={(val) => handleSelectChange(val, "doctor")} required>
                <SelectTrigger><SelectValue placeholder="Choose surgeon" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-nadia">Dr. Nadia Hasan</SelectItem>
                  <SelectItem value="dr-adeel">Dr. Adeel Qureshi</SelectItem>
                  <SelectItem value="dr-mahnoor">Dr. Mahnoor Bukhari</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select value={formData.procedureType} onValueChange={(val) => handleSelectChange(val, "procedureType")} required>
                <SelectTrigger><SelectValue placeholder="Select procedure" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="lump">Lump Removal</SelectItem>
                  <SelectItem value="mastectomy">Mastectomy</SelectItem>
                  <SelectItem value="reconstruction">Reconstruction</SelectItem>
                  <SelectItem value="biopsy">Biopsy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Consultation Date</Label>
            <Input id="appointmentTime" type="datetime-local" value={formData.appointmentTime} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Medical History Summary (Optional)</Label>
            <Input id="address" value={formData.address} onChange={handleInputChange} placeholder="Any relevant info" />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
            Book Consultation
          </Button>
        </form>
      </section>
    </div>
  );
}
