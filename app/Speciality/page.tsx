"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const specialities = [
  { name: "General physician", icon: "/general.svg", link: "/AllDoctors" },
  { name: "Gynecologist", icon: "/Gynecologist.svg", link: "/AllDoctors " },
  { name: "Dermatologist", icon: "/Dermatologist.svg", link: "/AllDoctors " },
  { name: "Pediatricians", icon: "/pediatricians.svg", link: "/AllDoctors " },
  { name: "Neurologist", icon: "/Neurologist.svg", link: "/AllDoctors" },
  {
    name: "Gastroenterologist",
    icon: "/Gastroenterologist.svg",
    link: "/AllDoctors ",
  },
];

const Speciality = () => {
  const [selectedSpeciality, setSelectedSpeciality] = useState("");

  return (
    <div className="flex">
      {/* Main Content */}
      <section className="flex-1 text-center py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">
          <span className="border-b-4 border-black pb-1">
            Find by Speciality
          </span>
        </h2>
        <p className="text-gray-600 max-w-lg mx-auto">
          Simply browse through our extensive list of trusted doctors, schedule
          your appointment hassle-free.
        </p>

        {/* Speciality List */}
        <div className="mt-8 flex flex-wrap justify-center gap-6">
          {specialities.map((speciality, index) => (
            <Link
              key={index}
              href={speciality.link}
              className="text-center"
              onClick={() => setSelectedSpeciality(speciality.name)}
            >
              <div className="w-20 h-20 mx-auto relative group cursor-pointer">
                {/* ✅ Image Hover Effect */}
                <Image
                  src={speciality.icon}
                  alt={speciality.name}
                  width={80}
                  height={80}
                  className="rounded-full transition-transform duration-300 group-hover:scale-110"
                />
                {/* ✅ Hover Overlay */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"></div>
              </div>
              <p className="mt-2 text-xs font-medium text-gray-700">
                {speciality.name}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Speciality;
