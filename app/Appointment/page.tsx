"use client";

import { useState } from "react";

export default function Appointment() {
  const [isFirstVisit, setIsFirstVisit] = useState<boolean | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    email: "",
    address: "",
    medicalDepartment: "",
    specialtyType: "",
  });

  const medicalSpecialties = [
    "Rheumatology Clinic",
    "Psychology Clinic",
    "Nutrition Clinic",
    "Pulmonology Clinic",
    "Family Medicine Clinic",
    "Psychiatry Clinic",
    "Physiotherapy Clinic",
    "Paediatrics Neonatology",
    "Neurology Clinic",
    "Nephrology Clinic",
    "Medical Oncology Clinic",
    "Internal Medicine Clinic",
    "Gastroenterology Clinic",
    "Dermatology Clinic",
    "Haematology Clinic",
    "Cardiology Clinic",
    "Anaesthesiology PainMedicine Clinic",
  ];

  const surgicalSpecialties = [
    "Orthodontics",
    "Urology",
    "Surgical Oncology",
    "Plastic Reconstructive Surgery",
    "Obstetrics Gynaecology",
    "Oral Maxillofacial Surgery",
    "Paediatric Ophthalmology",
    "Paediatrics Neonatology",
    "Neurology Clinic",
    "General LaparoscopicS Urological Surgery",
    "ENT",
    "Cardiac Surgery",
    "Breast Surgery",
    "Bariatric Surgery",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Form submitted:", { isFirstVisit, ...formData });
    alert("Appointment request submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">
              Evercare Hospital Appointment
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Are you Visiting Evercare for the first time?
              </label>
              <div className="flex space-x-4">
                <button
                  type="button"
                  onClick={() => setIsFirstVisit(true)}
                  className={`px-4 py-2 rounded-md ${
                    isFirstVisit === true
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => setIsFirstVisit(false)}
                  className={`px-4 py-2 rounded-md ${
                    isFirstVisit === false
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  No
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Your Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Specialties
              </label>
              <div className="flex space-x-4 mb-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      specialtyType: "medical",
                    }))
                  }
                  className={`px-4 py-2 rounded-md ${
                    formData.specialtyType === "medical"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Medical Specialties
                </button>
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      specialtyType: "surgical",
                    }))
                  }
                  className={`px-4 py-2 rounded-md ${
                    formData.specialtyType === "surgical"
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  Surgical Specialties
                </button>
              </div>

              {formData.specialtyType && (
                <div>
                  <label
                    htmlFor="medicalDepartment"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Select Medical Department
                  </label>
                  <select
                    id="medicalDepartment"
                    name="medicalDepartment"
                    value={formData.medicalDepartment}
                    onChange={handleInputChange}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    required
                  >
                    <option value="">Select a department</option>
                    {formData.specialtyType === "medical" &&
                      medicalSpecialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                    {formData.specialtyType === "surgical" &&
                      surgicalSpecialties.map((specialty) => (
                        <option key={specialty} value={specialty}>
                          {specialty}
                        </option>
                      ))}
                  </select>
                </div>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Make Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
