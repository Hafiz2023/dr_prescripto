// app/plastic-reconstructive-surgery/page.tsx
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

export default function PlasticReconstructiveSurgery() {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

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
      {/* Alerts */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="default">
            <CheckCircle2 className="h-4 w-4" />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your consultation request has been submitted. Our team will contact you within 24 hours.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {showError && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-4 right-4 z-50 w-full max-w-md"
        >
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Please complete all required fields.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Header */}
      <motion.section
        initial="hidden"
        animate="show"
        variants={containerVariants}
        className="text-center mb-16"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
        >
          Transformative Plastic & Reconstructive Surgery
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg text-gray-600"
        >
          Restoring form and function with precision artistry
        </motion.p>
      </motion.section>

      {/* Services */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-blue-50 rounded-xl p-6 mb-16"
      >
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Specialized Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Reconstructive Procedures</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Post-traumatic facial reconstruction</li>
              <li>• Cleft lip and palate repair</li>
              <li>• Burn reconstruction</li>
              <li>• Microvascular surgery</li>
              <li>• Scar revision</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-blue-700 mb-2">Aesthetic Procedures</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Rhinoplasty (nose reshaping)</li>
              <li>• Blepharoplasty (eyelid surgery)</li>
              <li>• Facelifts and neck lifts</li>
              <li>• Breast reconstruction/augmentation</li>
              <li>• Body contouring</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Surgeons */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">Our Plastic Surgeons</h2>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-64 w-full">
                <Image
                  src="/Dr-Umer-Nazir-2.webp"
                  alt="Dr.Miller"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Miller</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, FACS, Fellowship in Craniofacial Surgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Triple-board certified surgeon specializing in pediatric plastic surgery and complex facial reconstruction.
                </p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Procedures:</span> Cleft repairs, Facial reconstruction</p>
                  <p><span className="font-medium">Techniques:</span> Microsurgery, Tissue expansion</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc (1).webp"
                  alt="Dr. Jonathan Chang"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr. Jonathan Chang</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, PhD, Fellowship in Microsurgery
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Pioneer in minimally invasive aesthetic procedures and robotic-assisted reconstructive surgery.
                </p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Procedures:</span> Rhinoplasty, Breast reconstruction</p>
                  <p><span className="font-medium">Techniques:</span> Robotic surgery, Fat grafting</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="hover:shadow-xl transition-all duration-300 h-full">
              <div className="relative h-64 w-full">
                <Image
                  src="/doctor/doc (2).webp"
                  alt="Dr.  Alvarez"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-blue-700">Dr.  Alvarez</CardTitle>
                <CardDescription className="italic text-gray-600">
                  MD, MSc, Fellowship in Burn Reconstruction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-3">
                  Specialist in post-burn rehabilitation and gender-affirming surgical procedures.
                </p>
                <div className="space-y-1 text-sm">
                  <p><span className="font-medium">Procedures:</span> Burn reconstruction, Body contouring</p>
                  <p><span className="font-medium">Techniques:</span> Laser therapy, Skin substitutes</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Consultation Form */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gray-50 rounded-xl p-8 shadow-sm"
      >
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Plastic Surgery Consultation Request</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                placeholder="Your full name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input 
                id="phone" 
                type="tel" 
                placeholder="Phone number" 
                required 
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Your email" 
              required 
              value={formData.email}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label>Select Surgeon</Label>
              <Select 
                required 
                value={formData.doctor} 
                onValueChange={(value) => handleSelectChange(value, "doctor")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose surgeon" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dr-miller">Dr. Sophia Miller</SelectItem>
                  <SelectItem value="dr-chang">Dr. Jonathan Chang</SelectItem>
                  <SelectItem value="dr-alvarez">Dr. Maria Alvarez</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label>Procedure Type</Label>
              <Select 
                required 
                value={formData.procedureType} 
                onValueChange={(value) => handleSelectChange(value, "procedureType")}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select procedure" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reconstructive">Reconstructive Surgery</SelectItem>
                  <SelectItem value="aesthetic">Aesthetic Surgery</SelectItem>
                  <SelectItem value="burn">Burn Reconstruction</SelectItem>
                  <SelectItem value="gender">Gender-Affirming</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="appointmentTime">Preferred Consultation Date</Label>
            <Input 
              id="appointmentTime" 
              type="datetime-local" 
              required 
              value={formData.appointmentTime}
              onChange={handleInputChange}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Medical History Summary (Optional)</Label>
            <Input 
              id="address" 
              placeholder="Previous surgeries, conditions, etc." 
              value={formData.address}
              onChange={handleInputChange}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
            size="lg"
          >
            Request Private Consultation
          </Button>
        </form>
      </motion.section>
    </div>
  );
}