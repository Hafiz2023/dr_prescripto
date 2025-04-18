// components/appointment-form.tsx
"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";



export default function AppointmentForm({ specialty }: { specialty: string }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    doctor: "",
    appointmentTime: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, doctor: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (Object.values(formData).every(val => val.trim() !== "")) {
      toast({
        title: "Success!",
        description: `Your ${specialty} appointment has been booked successfully. We'll contact you shortly.`,
        variant: "default",
      });
      
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        doctor: "",
        appointmentTime: ""
      });
    } else {
      toast({
        title: "Error",
        description: "Please fill out all required fields correctly.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="bg-gray-50 rounded-xl p-8 shadow-sm">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-8">Book An Appointment</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input 
            id="name" 
            placeholder="Enter your name" 
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
            placeholder="Enter your contact number" 
            required 
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="Enter your email" 
            required 
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input 
            id="address" 
            placeholder="Enter your address" 
            value={formData.address}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label>Select Doctor</Label>
          <Select required value={formData.doctor} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a doctor" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="dr-hamdani">Dr. Muhammad Afzal Hamdani</SelectItem>
              <SelectItem value="dr-psych1">Dr. Sarah Johnson</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="appointmentTime">Preferred Appointment Time</Label>
          <Input 
            id="appointmentTime" 
            type="datetime-local" 
            required 
            value={formData.appointmentTime}
            onChange={handleInputChange}
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 transition-colors"
          size="lg"
        >
          Book Appointment
        </Button>
      </form>
    </section>
  );
}

function toast(arg0: { title: string; description: string; variant: string; }) {
    throw new Error("Function not implemented.");
}
