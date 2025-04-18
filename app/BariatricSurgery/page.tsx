// app/bariatric-surgery/page.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Image from "next/image";

export default function BariatricSurgery() {
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
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      {showSuccess && (
        <Alert variant="default" className="fixed top-4 right-4 z-50 w-full max-w-md">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>Your bariatric consultation request has been submitted.</AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert variant="destructive" className="fixed top-4 right-4 z-50 w-full max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Please fill all required fields.</AlertDescription>
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
          className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
        >
          Bariatric Surgery & Obesity Medicine
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="text-lg text-gray-600"
        >
          Empowering lives through weight-loss solutions and personalized care
        </motion.p>
      </motion.section>

      <section className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Bariatric Services</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>• Gastric Bypass Surgery</li>
          <li>• Sleeve Gastrectomy</li>
          <li>• Intragastric Balloon Placement</li>
          <li>• Endoscopic Sleeve Gastroplasty (ESG)</li>
          <li>• Medical Obesity Management</li>
          <li>• Nutrition and Lifestyle Counseling</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Meet Our Bariatric Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Usman Rafiq",
              title: "MBBS, FRCS, Bariatric Surgeon",
              image: "/Dr-Umer-Nazir-2.webp",
              desc: "Pioneer in minimally invasive weight-loss procedures."
            },
            {
              name: "Dr. Hira Siddiqui",
              title: "MBBS, FCPS, Obesity Specialist",
              image: "/Dr.-Shafqat-Mukhtar-2.webp",
              desc: "Specializes in holistic obesity management and metabolic therapy."
            },
            {
              name: "Dr. M. Kamran Aziz",
              title: "MBBS, MRCP, Internal Medicine",
              image: "/doctor/doc (3).webp",
              desc: "Focuses on pre- and post-surgical support for long-term success."
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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Request a Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" value={formData.name} onChange={handleInputChange} required placeholder="Your full name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" value={formData.phone} onChange={handleInputChange} required placeholder="Phone number" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" value={formData.email} onChange={handleInputChange} required placeholder="Email" />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Doctor</Label>
              <Select value={formData.doctor} onValueChange={(val) => handleSelectChange(val, "doctor")} required>
                <SelectTrigger><SelectValue placeholder="Choose doctor" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-usman">Dr. Usman Rafiq</SelectItem>
                  <SelectItem value="dr-hira">Dr. Hira Siddiqui</SelectItem>
                  <SelectItem value="dr-kamran">Dr. M. Kamran Aziz</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Procedure Interest</Label>
              <Select value={formData.procedureType} onValueChange={(val) => handleSelectChange(val, "procedureType")} required>
                <SelectTrigger><SelectValue placeholder="Select procedure" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="gastric-bypass">Gastric Bypass</SelectItem>
                  <SelectItem value="sleeve">Sleeve Gastrectomy</SelectItem>
                  <SelectItem value="balloon">Intragastric Balloon</SelectItem>
                  <SelectItem value="esg">Endoscopic Sleeve Gastroplasty</SelectItem>
                  <SelectItem value="medical">Medical Management</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
            <Input id="appointmentTime" type="datetime-local" value={formData.appointmentTime} onChange={handleInputChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Address / Notes</Label>
            <Input id="address" value={formData.address} onChange={handleInputChange} placeholder="Optional notes or address" />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
            Submit Consultation Request
          </Button>
        </form>
      </section>
    </div>
  );
}
