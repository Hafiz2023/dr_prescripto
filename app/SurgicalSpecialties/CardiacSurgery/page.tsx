// app/cardiac-surgery/page.tsx
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

export default function CardiacSurgery() {
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
            Your request for consultation has been submitted successfully.
          </AlertDescription>
        </Alert>
      )}

      {showError && (
        <Alert variant="destructive" className="fixed top-4 right-4 z-50 w-full max-w-md">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Please fill out all the required fields.
          </AlertDescription>
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
          Advanced Cardiac Surgery
        </motion.h1>
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
          className="text-lg text-gray-600"
        >
          Precision heart care from our leading cardiovascular specialists
        </motion.p>
      </motion.section>

      <section className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Key Procedures</h2>
        <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
          <li>• Coronary Artery Bypass Grafting (CABG)</li>
          <li>• Valve repair and replacement surgeries</li>
          <li>• Aortic aneurysm repair</li>
          <li>• Minimally invasive heart surgery</li>
          <li>• Pacemaker and defibrillator implantation</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Cardiac Experts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[{
            name: "Dr. Muhammad Imran Ul Hasan",
            title: "MBBS, FCPS (Cardiothoracic Surgery)",
            image: "/Dr.-Muhammad-Imran-Ul-Hasan-2.webp",
            desc: "Specializes in advanced bypass and valve replacement surgeries."
          }, {
            name: "Dr. Ayesha Saddiqa",
            title: "MBBS, FRCS, Cardiac Surgeon",
            image: "/Ms.-Ayesha-Saddiqa-2.webp",
            desc: "Focus on minimally invasive heart procedures and congenital repairs."
          }, {
            name: "Dr. Hajra Saleem",
            title: "MD, FACC, Cardiovascular Specialist",
            image: "/Ms.-Hajra-Saleem-2.webp",
            desc: "Experienced in device-based therapies and heart rhythm correction."
          }].map((doc, index) => (
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
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book a Cardiology Consultation</h2>
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
                <SelectTrigger><SelectValue placeholder="Choose cardiac expert" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-rehan">Dr. Rehan Qureshi</SelectItem>
                  <SelectItem value="dr-mehwish">Dr. Mehwish Tariq</SelectItem>
                  <SelectItem value="dr-imran">Dr. Imran Khalid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select value={formData.procedureType} onValueChange={(val) => handleSelectChange(val, "procedureType")} required>
                <SelectTrigger><SelectValue placeholder="Select procedure" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="cabg">CABG (Bypass Surgery)</SelectItem>
                  <SelectItem value="valve">Valve Repair/Replacement</SelectItem>
                  <SelectItem value="aneurysm">Aneurysm Repair</SelectItem>
                  <SelectItem value="minimally-invasive">Minimally Invasive</SelectItem>
                  <SelectItem value="device">Pacemaker/ICD Implant</SelectItem>
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
            <Input id="address" value={formData.address} onChange={handleInputChange} placeholder="Any relevant information" />
          </div>
          <Button type="submit" className="w-full bg-blue-700 hover:bg-blue-800" size="lg">
            Request Consultation
          </Button>
        </form>
      </section>
    </div>
  );
}