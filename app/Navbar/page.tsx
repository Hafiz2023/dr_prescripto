"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const router = useRouter();
  const [selectedAbout, setSelectedAbout] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const aboutOptions = [
    { name: "Evercare", id: "evercare" },
    { name: "Evercare Hospital", id: "evercarehospital" },
    { name: "Vision Mission Values", id: "visionmission" },
    { name: "Management Team", id: "Management" },
    { name: "The Compliance Helpline", id: "helpline" },
  ];

  const doctorOptions = [
    { name: "Medical Specialties", id: "medical" },
    { name: "Surgical Specialties", id: "surgical" },
  ];

  const handleAboutChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedAbout(id);

    if (id === "evercare") {
      router.push("/Evercare");
    } else if (id === "evercarehospital") {
      router.push("/HospitalDetails");
    } else if (id === "visionmission") {
      router.push("/VisionMissionValues");
    } else if (id === "Management") {
      router.push("/Management");
    } else if (id === "helpline") {
      router.push("/ComplianceHelpline");
    }

    setMenuOpen(false);
  };

  const handleDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setSelectedDoctor(id);
    if (id === "medical") {
      router.push("/MedicalSpecialties");
    } else if (id === "surgical") {
      router.push("/SurgicalSpecialties");
    }
    setMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-sky-700">
          Evercare
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="text-gray-800 hover:text-sky-600 font-medium">
            Home
          </Link>

          <select
            value={selectedAbout}
            onChange={handleAboutChange}
            className="text-gray-800 font-medium border border-gray-300 rounded px-2 py-1 hover:text-sky-600"
          >
            <option value="">About Us</option>
            {aboutOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="text-gray-800 font-medium border border-gray-300 rounded px-2 py-1 hover:text-sky-600"
          >
            <option value="">Our Doctor</option>
            {doctorOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <Link href="/FallPreventionPage" className="text-gray-800 hover:text-sky-600 font-medium">
            Patient Education
          </Link>
          <Link href="/Careers" className="text-gray-800 hover:text-sky-600 font-medium">
            Careers
          </Link>
          <Link href="/ContactUs" className="text-gray-800 hover:text-sky-600 font-medium">
            Contact Us
          </Link>

          <Link
            href="/Appointment"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-600 hover:text-white transition duration-200 text-center md:inline-flex md:items-center"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-800 font-medium hover:text-sky-600">
            Home
          </Link>

          <select
            value={selectedAbout}
            onChange={handleAboutChange}
            className="text-gray-800 font-medium border border-gray-300 rounded px-2 py-1"
          >
            <option value="">About Us</option>
            {aboutOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <select
            value={selectedDoctor}
            onChange={handleDoctorChange}
            className="text-gray-800 font-medium border border-gray-300 rounded px-2 py-1"
          >
            <option value="">Our Doctor</option>
            {doctorOptions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>

          <Link href="/FallPreventionPage" onClick={() => setMenuOpen(false)} className="text-gray-800 font-medium hover:text-sky-600">
            Patient Education
          </Link>
          <Link href="/Careers" onClick={() => setMenuOpen(false)} className="text-gray-800 font-medium hover:text-sky-600">
            Careers
          </Link>
          <Link href="/ContactUs" onClick={() => setMenuOpen(false)} className="text-gray-800 font-medium hover:text-sky-600">
            Contact Us
          </Link>

          <Link
            href="/Appointment"
            onClick={() => setMenuOpen(false)}
            className="inline-block px-6 py-2 border-2 border-sky-600 text-sky-600 font-medium rounded-lg hover:bg-sky-600 hover:text-white transition duration-200 text-center md:inline-flex md:items-center"
          >
            Book Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
