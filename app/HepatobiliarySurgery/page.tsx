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

export default function HepatobiliarySurgery() {
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

  interface FormData {
    name: string;
    phone: string;
    email: string;
    address: string;
    doctor: string;
    appointmentTime: string;
    procedureType: string;
  }

  interface InputChangeEvent extends React.ChangeEvent<HTMLInputElement> {}

  const handleInputChange = (e: InputChangeEvent) => {
    const { id, value } = e.target;
    setFormData((prev: FormData) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (Object.values(formData).every((val) => val.trim() !== "")) {
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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your consultation request has been submitted. We will contact you soon.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please fill out all required fields.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="text-center mb-16">
        <motion.h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Advanced Hepatobiliary Surgery
        </motion.h1>
        <motion.p className="text-lg text-gray-600">
          Specialized care for liver, pancreas, and biliary system disorders.
        </motion.p>
      </motion.section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }} className="bg-blue-50 rounded-xl p-6 mb-16">
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Expertise</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Surgical Treatments</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Liver resections & tumor removal</li>
              <li>• Biliary tract surgeries</li>
              <li>• Pancreatic surgery</li>
              <li>• Gallbladder removal</li>
              <li>• Laparoscopic procedures</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Conditions We Treat</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Liver cancer & metastases</li>
              <li>• Gallstones & bile duct obstruction</li>
              <li>• Pancreatitis & cysts</li>
              <li>• Hepatitis complications</li>
              <li>• Benign tumors & cysts</li>
            </ul>
          </div>
        </div>
      </motion.section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Hepatobiliary Surgeons</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image
                src="/Dr.-Muhammad-Imran-Ul-Hasan-2.webp"
                alt="Dr. Adeel Hasan"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Adeel Hasan</CardTitle>
              <CardDescription className="italic text-gray-600">
                MBBS, FCPS, Fellowship in Hepatobiliary Surgery
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Expert in complex liver surgeries, bile duct injuries, and laparoscopic hepatobiliary procedures.
              </p>
              <p className="text-sm"><span className="font-medium">Techniques:</span> Laparoscopic, Liver resection, ERCP</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-xl transition-all duration-300 h-full">
            <div className="relative h-64 w-full">
              <Image
                src="/Dr-Umer-Nazir-2.webp"
                alt="Dr. Mahnoor Rao"
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle className="text-blue-700">Dr. Umer Nazir </CardTitle>
              <CardDescription className="italic text-gray-600">
                MBBS, MS, Consultant Hepatobiliary Surgeon
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-3">
                Specializes in hepatobiliary oncology and minimally invasive liver and pancreas procedures.
              </p>
              <p className="text-sm"><span className="font-medium">Focus:</span> Cancer treatment, Laparoscopic techniques</p>
            </CardContent>
          </Card>
        </div>
      </section>

      <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="bg-gray-50 rounded-xl p-8 shadow-sm">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book a Hepatobiliary Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="Your full name" required value={formData.name} onChange={handleInputChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="Phone number" required value={formData.phone} onChange={handleInputChange} />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Your email" required value={formData.email} onChange={handleInputChange} />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Surgeon</Label>
              <Select required value={formData.doctor} onValueChange={(value) => handleSelectChange(value, "doctor") }>
                <SelectTrigger>
                  <SelectValue placeholder="Choose surgeon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-hasan">Dr. Adeel Hasan</SelectItem>
                  <SelectItem value="dr-rao">Dr. Mahnoor Rao</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select required value={formData.procedureType} onValueChange={(value) => handleSelectChange(value, "procedureType") }>
                <SelectTrigger>
                  <SelectValue placeholder="Select procedure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="liver">Liver Surgery</SelectItem>
                  <SelectItem value="biliary">Biliary Surgery</SelectItem>
                  <SelectItem value="pancreas">Pancreatic Surgery</SelectItem>
                  <SelectItem value="gallbladder">Gallbladder Removal</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Date & Time</Label>
            <Input id="appointmentTime" type="datetime-local" required value={formData.appointmentTime} onChange={handleInputChange} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Relevant Medical History (Optional)</Label>
            <Input id="address" placeholder="Mention past surgeries, conditions, etc." value={formData.address} onChange={handleInputChange} />
          </div>

          <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 transition-colors" size="lg">
            Book Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}
