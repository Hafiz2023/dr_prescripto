"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function ContactUs() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-10 p-6 md:p-12 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Left Info Section */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[
          {
            title: "Contact Numbers:",
            icon: <Phone className="w-5 h-5" />,
            children: (
              <>
                <p>+92 42 111-227-333</p>
                <p>0310 7777024</p>
                <p>0313 7777284</p>
              </>
            ),
          },
          {
            title: "Contact E-mail:",
            icon: <Mail className="w-5 h-5" />,
            children: <p>info.lahore@evercare.pk</p>,
          },
          {
            title: "Office Hours:",
            icon: <Clock className="w-5 h-5" />,
            children: (
              <>
                <p>Monday - Friday</p>
                <p>9 AM - 6 PM</p>
              </>
            ),
          },
          {
            title: "Hospital location:",
            icon: <MapPin className="w-5 h-5" />,
            children: (
              <p>
                Evercare Hospital Lahore D1 Commercial, Nespak Society Phase-I,
                Lahore. 5-minute drive from Shaukat Khanum
              </p>
            ),
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ContactCard title={item.title} icon={item.icon}>
              {item.children}
            </ContactCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Right Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        whileHover={{ scale: 1.01 }}
        viewport={{ once: true, amount: 0.3 }}
        className="bg-white p-6 shadow-lg rounded-xl border border-gray-200"
      >
        <h2 className="text-3xl font-bold mb-6 text-center md:text-left">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone" type="tel" />
          </div>
          <div>
            <label className="font-semibold">Reason Of Inquiry</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="general">General Inquiry</SelectItem>
                <SelectItem value="appointment">Appointment</SelectItem>
                <SelectItem value="feedback">Feedback</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="font-semibold">Further Information</label>
            <Textarea placeholder="Further Information" rows={5} />
          </div>
          <Button className="bg-sky-400 hover:bg-sky-500 w-full">Submit</Button>
        </form>
      </motion.div>

      {/* Google Map Section */}
      {/* Google Map Section */}
      <div className="md:col-span-2 mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13609.29571744763!2d74.31815599999999!3d31.5203691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391904dd1e69d281%3A0x90dd3c98b72b8e91!2sLahore%2C%20Pakistan!5e0!3m2!1sen!2s!4v1713299999999!5m2!1sen!2s"
          width="100%"
          height="400"
          className="rounded-xl border border-gray-300 shadow-md"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map showing Lahore"
        ></iframe>
      </div>
    </motion.div>
  );
}

// Card Component
function ContactCard({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 border border-sky-200 rounded-md shadow-sm hover:shadow-md transition-shadow duration-300">
      <h3 className="font-semibold mb-2 flex items-center gap-2">
        {icon}
        {title}
      </h3>
      <div className="text-sm space-y-1 text-muted-foreground">{children}</div>
    </div>
  );
}
