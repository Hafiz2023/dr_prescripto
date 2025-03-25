

"use client";

import { useState } from "react";
import Image from "next/image";

const doctors = [
  {
    id: 1,
    name: "Dr. Richard James",
    specialty: "General Physician",
    image: "/doctor/doc1.png",
  },
  {
    id: 2,
    name: "Dr. Emily Larson",
    specialty: "Gynecologist",
    image: "/doctor/doc2.png",
  },
  {
    id: 3,
    name: "Dr. Sarah Patel",
    specialty: "Dermatologist",
    image: "/doctor/doc3.png",
  },
  {
    id: 4,
    name: "Dr. Christopher Lee",
    specialty: "Pediatrician",
    image: "/doctor/doc4.png",
  },
  {
    id: 5,
    name: "Dr. Jennifer Garcia",
    specialty: "Neurologist",
    image: "/doctor/doc5.png",
  },
  {
    id: 6,
    name: "Dr. Daniel Brown",
    specialty: "Cardiologist",
    image: "/doctor/doc6.png",
  },
  {
    id: 7,
    name: "Dr. Olivia Wilson",
    specialty: "Oncologist",
    image: "/doctor/doc7.png",
  },
  {
    id: 8,
    name: "Dr. Henry Smith",
    specialty: "Orthopedic",
    image: "/doctor/doc8.png",
  },
];

const specialties = [
  "All",
  "General Physician",
  "Gynecologist",
  "Dermatologist",
  "Pediatrician",
  "Neurologist",
  "Cardiologist",
  "Oncologist",
  "Orthopedic",
];

const AllDoctors = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDoctors = doctors.filter(
    (doctor) =>
      (selectedSpecialty === "All" || doctor.specialty === selectedSpecialty) &&
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-12 px-6 md:px-16 flex flex-col md:flex-row gap-6">
      {/* ✅ Sidebar */}
      <aside className="w-full md:w-1/4 bg-white shadow-lg rounded-lg p-6">
        <h3 className="text-xl font-bold mb-4">Filter by Specialty</h3>
        <input
          type="text"
          placeholder="Search doctor..."
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <ul className="space-y-3">
          {specialties.map((specialty) => (
            <li key={specialty}>
              <button
                className={`w-full text-left px-3 py-2 rounded-md ${
                  selectedSpecialty === specialty
                    ? "bg-blue-500 text-white"
                    : "hover:bg-gray-100"
                }`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* ✅ Doctors List */}
      <div className="w-full md:w-3/4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Top Doctors to Book
        </h2>
        <h3 className="text-sm  text-center mb-8">
          Simply browse through our extensive list of trusted doctors.{" "}
        </h3>
        {filteredDoctors.length === 0 ? (
          <p className="text-center text-gray-500">No doctors found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDoctors.map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-lg shadow-lg p-4 text-center border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              >
                <div className="overflow-hidden rounded-md">
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={200}
                    height={200}
                    className="mx-auto transform transition-all duration-300 hover:scale-110"
                  />
                </div>
                <p className="text-green-500 font-medium mt-3">● Available</p>
                <h3 className="text-lg font-semibold mt-2">{doctor.name}</h3>
                <p className="text-gray-500">{doctor.specialty}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AllDoctors;
